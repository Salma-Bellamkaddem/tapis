import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { rugsData } from "@/data/products";
import {
  parsePrice,
  formatMoney,
  shippingFor,
  splitPayment,
  isMorocco,
  PAYMENT_DEADLINE_HOURS,
  PAYMENT_METHODS,
  DEPOSIT_PERCENT,
  DEPOSIT_MOROCCO_ONLY,
  PICKUP_LOCATION,
  type PaymentMethod,
} from "@/app/lib/pricing";
import { getSupabaseAdmin, esc, sendEmail } from "@/app/lib/server";

export const runtime = "nodejs";

const SITE_URL = "https://rugsberber.com";

// Miniature Cloudinary légère pour les emails (240 px de large)
const thumb = (url: string) =>
  url.includes("/upload/") ? url.replace("/upload/", "/upload/w_240,c_limit/") : url;

type Rug = (typeof rugsData)[number];
type Line = { rug: Rug; size: string; price: number };

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

const METHOD_LABEL: Record<PaymentMethod, string> = {
  bank_full: "Full payment by bank transfer",
  bank_deposit: `${DEPOSIT_PERCENT}% deposit by bank transfer, balance on delivery`,
  pickup: "Pick-up and payment at the shop",
};

function bankDetails() {
  return {
    accountName: process.env.BANK_ACCOUNT_NAME || "",
    bankName: process.env.BANK_NAME || "",
    iban: process.env.BANK_IBAN || "",
    swift: process.env.BANK_SWIFT || "",
  };
}

export async function POST(req: Request) {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot anti-spam : ce champ doit rester vide
  if (clean(body.website, 50)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // ---- Mode de paiement ----
  const rawMethod = clean(body.paymentMethod, 20);
  if (rawMethod && !PAYMENT_METHODS.includes(rawMethod as PaymentMethod)) {
    return NextResponse.json({ error: "This payment method is not available." }, { status: 400 });
  }
  const method: PaymentMethod = (rawMethod as PaymentMethod) || "bank_full";
  const isPickup = method === "pickup";

  const fullName = clean(body.fullName, 100);
  const email = clean(body.email, 120).toLowerCase();
  const phone = clean(body.phone, 30);
  const postalCode = clean(body.postalCode, 20);
  const notes = clean(body.notes, 500);
  // Pays et ville sont toujours demandés. L'adresse n'est obligatoire que pour une livraison.
  const country = clean(body.country, 60);
  const city = clean(body.city, 80);
  const addressInput = clean(body.address, 200);
  const address = isPickup && addressInput.length < 5 ? "Shop pick-up (no address given)" : addressInput;

  if (
    fullName.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    phone.length < 6 ||
    country.length < 2 ||
    city.length < 2 ||
    address.length < 5
  ) {
    return NextResponse.json({ error: "Please fill in all required fields correctly." }, { status: 400 });
  }

  if (method === "bank_deposit" && DEPOSIT_MOROCCO_ONLY && !isMorocco(country)) {
    return NextResponse.json(
      { error: "The deposit option is only available for deliveries within Morocco. Please choose full payment by bank transfer." },
      { status: 400 }
    );
  }

  // ---- Panier : on ne garde que rugId + size, les prix viennent TOUJOURS du catalogue serveur ----
  const rawItems = Array.isArray(body.items) ? body.items : [];
  if (rawItems.length === 0 || rawItems.length > 10) {
    return NextResponse.json({ error: "Your cart is empty or too large." }, { status: 400 });
  }

  const lines: Line[] = [];
  const seen = new Set<string>();
  let currency = "";

  for (const raw of rawItems) {
    const item = (raw ?? {}) as Record<string, unknown>;
    const rugId = clean(item.rugId, 100);
    const sizeLabel = clean(item.size, 60);
    if (!rugId || seen.has(rugId)) continue; // chaque tapis est une pièce unique : 1 seul exemplaire
    seen.add(rugId);

    const rug = rugsData.find((r) => r.id === rugId);
    if (!rug) {
      console.error("Unknown rugId received:", JSON.stringify(rugId));
      return NextResponse.json(
        { error: "A rug in your cart was not found. Please remove it and try again." },
        { status: 404 }
      );
    }
    if (rug.isAvailable === false) {
      return NextResponse.json(
        { error: `${rug.name} (${rug.sku}) is sold out. Please remove it from your cart.` },
        { status: 409 }
      );
    }

    const sizes = rug.sizes?.length ? rug.sizes : [{ size: rug.dimensions || "Standard", price: rug.price }];
    const sizeObj = sizes.find((s) => s.size === sizeLabel) ?? sizes[0];
    const parsed = parsePrice(sizeObj.price);

    // Sécurité : un prix illisible ne doit jamais devenir une commande
    if (!Number.isFinite(parsed.value) || parsed.value <= 0) {
      console.error("Invalid price in catalogue for", rug.sku, JSON.stringify(sizeObj.price));
      return NextResponse.json({ error: `Price unavailable for ${rug.name} (${rug.sku}).` }, { status: 500 });
    }

    if (currency && currency !== parsed.currency) {
      return NextResponse.json(
        { error: `Your cart mixes ${currency} and ${parsed.currency} prices. Please order them separately.` },
        { status: 400 }
      );
    }
    currency = parsed.currency;
    lines.push({ rug, size: sizeObj.size, price: parsed.value });
  }

  if (lines.length === 0) {
    return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
  }

  const subtotal = lines.reduce((sum, l) => sum + l.price, 0);
  const shipping = shippingFor(method);
  const total = subtotal + shipping;
  const { dueNow, balance } = splitPayment(total, method);

  // Libère les virements non payés dont le délai est dépassé.
  // Les retraits en magasin ne sont pas concernés : la date de retrait est fixée avec le client.
  const cutoff = new Date(Date.now() - PAYMENT_DEADLINE_HOURS * 3600 * 1000).toISOString();
  await supabase
    .from("orders")
    .update({ status: "expired" })
    .in("rug_id", lines.map((l) => l.rug.id))
    .eq("status", "pending")
    .neq("payment_method", "pickup")
    .lt("created_at", cutoff);

  const orderNumber = "RB-" + randomBytes(4).toString("hex").toUpperCase();

  // Une ligne par tapis, même order_number. Frais, acompte et solde sont portés par la 1re ligne.
  const baseRows = lines.map((l, i) => ({
    order_number: orderNumber,
    rug_id: l.rug.id,
    sku: l.rug.sku,
    rug_name: l.rug.name,
    size: l.size,
    price: l.price,
    shipping: i === 0 ? shipping : 0,
    total: l.price + (i === 0 ? shipping : 0),
    currency,
    payment_method: method,
    deposit_amount: i === 0 ? dueNow : 0,
    balance_due: i === 0 ? balance : 0,
    full_name: fullName,
    email,
    phone,
    country,
    city,
    postal_code: postalCode || null,
    address,
    notes: notes || null,
  }));
  const rows = baseRows.map((r, i) => ({ ...r, image_url: lines[i].rug.images[0] ?? null }));

  // Un seul insert = tout ou rien : si un tapis est déjà réservé, aucune ligne n'est créée.
  let { error } = await supabase.from("orders").insert(rows);

  // Si la colonne image_url n'existe pas encore (migration SQL non faite), on réessaie sans elle
  if (error && error.message.includes("image_url")) {
    console.warn("Column image_url is missing: run the SQL migration. Retrying without it.");
    ({ error } = await supabase.from("orders").insert(baseRows));
  }

  if (error) {
    if (error.message.includes("orders_one_active_per_rug")) {
      return NextResponse.json(
        {
          error:
            "Sorry, one of these unique rugs was just reserved by another customer. Please refresh and remove it from your cart.",
        },
        { status: 409 }
      );
    }
    if (/payment_method|deposit_amount|balance_due/.test(error.message)) {
      console.error("Payment columns are missing: run 2_migration-payment-methods.sql in Supabase.");
    }
    console.error("Insert order error:", error);
    return NextResponse.json({ error: "Could not create the order. Please try again." }, { status: 500 });
  }

  const bank = bankDetails();
  const totalText = formatMoney(total, currency);
  const dueNowText = formatMoney(dueNow, currency);
  const balanceText = formatMoney(balance, currency);

  const itemsHtml = `<table style="border-collapse:collapse;width:100%;margin:12px 0">${lines
    .map((l) => {
      const link = `${SITE_URL}/rugs/${encodeURIComponent(l.rug.id)}`;
      const img = l.rug.images[0]
        ? `<a href="${link}"><img src="${esc(thumb(l.rug.images[0]))}" alt="${esc(l.rug.name)}" width="110" style="display:block;border-radius:6px;border:1px solid #ddd"/></a>`
        : "";
      return `<tr>
        <td style="padding:8px;border-bottom:1px solid #eee;width:120px;vertical-align:top">${img}</td>
        <td style="padding:8px;border-bottom:1px solid #eee;vertical-align:top;font-size:14px;line-height:1.5">
          <strong>${esc(l.rug.name)}</strong><br/>
          SKU: ${esc(l.rug.sku)}<br/>
          Size: ${esc(l.size)}<br/>
          Price: ${formatMoney(l.price, currency)}<br/>
          <a href="${link}">View product</a>
        </td>
      </tr>`;
    })
    .join("")}</table>`;

  const cell = "padding:6px;border:1px solid #ddd";
  const bankTableHtml = `
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="${cell}">Beneficiary</td><td style="${cell}">${esc(bank.accountName)}</td></tr>
      <tr><td style="${cell}">Bank</td><td style="${cell}">${esc(bank.bankName)}</td></tr>
      <tr><td style="${cell}">IBAN</td><td style="${cell}">${esc(bank.iban)}</td></tr>
      <tr><td style="${cell}">SWIFT/BIC</td><td style="${cell}">${esc(bank.swift)}</td></tr>
      <tr><td style="${cell}">Amount to transfer now</td><td style="${cell}"><strong>${dueNowText}</strong></td></tr>
      <tr><td style="${cell}">Reference</td><td style="${cell}"><strong>${orderNumber}</strong></td></tr>
    </table>`;

  // Email client selon le mode de paiement
  let customerBody: string;
  if (isPickup) {
    customerBody = `
      <p>Your order <strong>${orderNumber}</strong> is reserved. We will contact you shortly to confirm availability and your pick-up date.</p>
      ${itemsHtml}
      <p>Pick-up: <strong>${esc(PICKUP_LOCATION)}</strong><br/>
      Total to pay at pick-up: <strong>${totalText}</strong><br/>
      No delivery fees.</p>`;
  } else if (method === "bank_deposit") {
    customerBody = `
      <p>Your order <strong>${orderNumber}</strong> is reserved for <strong>${PAYMENT_DEADLINE_HOURS} hours</strong>.
      To confirm it, please send the ${DEPOSIT_PERCENT}% deposit by bank transfer.</p>
      ${itemsHtml}
      <p>Total: <strong>${totalText}</strong><br/>
      Deposit to transfer now: <strong>${dueNowText}</strong><br/>
      Balance to pay on delivery: <strong>${balanceText}</strong></p>
      ${bankTableHtml}
      <p>Please write the order number as the payment reference. Once the deposit is received, we prepare and ship your rug.</p>`;
  } else {
    customerBody = `
      <p>Your order <strong>${orderNumber}</strong> is reserved for <strong>${PAYMENT_DEADLINE_HOURS} hours</strong>.
      To confirm it, please send a bank transfer with the details below.</p>
      ${itemsHtml}
      <p>Total: <strong>${totalText}</strong></p>
      ${bankTableHtml}
      <p>Please write the order number as the payment reference. Once we receive your payment, we ship your order and email you the tracking number.</p>`;
  }

  const customerHtml = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#222">
      <h2>Thank you, ${esc(fullName)}!</h2>
      ${customerBody}
      <p>Questions? Reply to this email or message us on WhatsApp: +212 767 149 114.</p>
      <p>Cooperative Berber Rugs — Taznakht, Morocco</p>
    </div>`;

  // Email admin
  const adminAction = isPickup
    ? `Contact the customer to confirm availability and the pick-up date. When they collect and pay, click <b>Mark as collected &amp; paid</b>.`
    : method === "bank_deposit"
    ? `When the deposit of <b>${dueNowText}</b> arrives, click <b>Mark deposit as received</b>. The balance of <b>${balanceText}</b> is paid on delivery.`
    : `When the transfer of <b>${totalText}</b> arrives, click <b>Mark as paid</b> (the customer is notified automatically).`;

  const adminHtml = `
    <div style="font-family:Arial,sans-serif">
      <h3>New order ${orderNumber}</h3>
      <p><strong>Payment:</strong> ${esc(METHOD_LABEL[method])}</p>
      ${itemsHtml}
      <p>Total: <strong>${totalText}</strong></p>
      <p>${esc(fullName)}<br/>${esc(email)} · ${esc(phone)}<br/>
      ${isPickup ? "<b>Shop pick-up</b><br/>" : ""}${esc(address)}, ${esc(city)} ${esc(postalCode)}, ${esc(country)}</p>
      ${notes ? `<p>Notes: ${esc(notes)}</p>` : ""}
      <p>${adminAction}<br/>
      <a href="${SITE_URL}/admin/orders">${SITE_URL}/admin/orders</a></p>
    </div>`;

  // sendEmail ne lève jamais d'erreur : la commande existe déjà, un email raté ne l'annule pas
  await Promise.all([
    sendEmail(email, `Your order ${orderNumber}`, customerHtml),
    process.env.ADMIN_EMAIL
      ? sendEmail(process.env.ADMIN_EMAIL, `New order ${orderNumber} — ${lines.length} rug(s)`, adminHtml)
      : Promise.resolve(false),
  ]);

  return NextResponse.json({
    orderNumber,
    total,
    currency,
    deadlineHours: PAYMENT_DEADLINE_HOURS,
    paymentMethod: method,
    dueNow,
    balance,
    pickupLocation: PICKUP_LOCATION,
    bank: isPickup ? null : bank,
  });
}