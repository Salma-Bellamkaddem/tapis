import { NextResponse } from "next/server";
import { isAdmin } from "@/app/lib/adminAuth";
import { getSupabaseAdmin, esc, sendEmail } from "@/app/lib/server";
import { formatMoney, DEPOSIT_PERCENT } from "@/app/lib/pricing";

export const runtime = "nodejs";

type Action = "paid" | "shipped" | "collected" | "cancelled";

export async function PATCH(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  }
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  const body = await req.json().catch(() => ({}));
  const orderNumber = typeof body.orderNumber === "string" ? body.orderNumber : "";
  const action = body.action as Action;
  const tracking = typeof body.trackingNumber === "string" ? body.trackingNumber.trim().slice(0, 80) : "";

  if (!/^RB-[A-F0-9]{8}$/.test(orderNumber) || !["paid", "shipped", "collected", "cancelled"].includes(action)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { data: rows, error: readError } = await supabase
    .from("orders")
    .select("status, full_name, email, rug_name, sku, size, currency, payment_method, deposit_amount, balance_due")
    .eq("order_number", orderNumber);

  if (readError) {
    console.error("Admin read error:", readError);
    return NextResponse.json(
      { error: "Could not read the order. Did you run the SQL migration for payment methods?" },
      { status: 500 }
    );
  }
  if (!rows || rows.length === 0) {
    return NextResponse.json({ error: "Order not found." }, { status: 404 });
  }

  const statuses = rows.map((r) => r.status as string);
  const allIn = (allowed: string[]) => statuses.every((s) => allowed.includes(s));

  const first = rows[0];
  const method = (first.payment_method as string) ?? "bank_full";
  const currency = first.currency as string;
  const deposit = rows.reduce((sum, r) => sum + Number(r.deposit_amount ?? 0), 0);
  const balance = rows.reduce((sum, r) => sum + Number(r.balance_due ?? 0), 0);

  let update: Record<string, unknown>;

  if (action === "paid") {
    if (method === "pickup") {
      return NextResponse.json(
        { error: "This is a shop pick-up order. Use “Mark as collected & paid” instead." },
        { status: 409 }
      );
    }
    if (!allIn(["pending"])) {
      return NextResponse.json(
        { error: "This order is not pending anymore (it may have expired). Check Supabase before refunding or shipping." },
        { status: 409 }
      );
    }
    update = { status: "paid", paid_at: new Date().toISOString() };
  } else if (action === "collected") {
    if (method !== "pickup") {
      return NextResponse.json({ error: "Only shop pick-up orders can be marked as collected." }, { status: 409 });
    }
    if (!allIn(["pending"])) {
      return NextResponse.json({ error: "This order is not pending anymore." }, { status: 409 });
    }
    update = { status: "shipped", tracking_number: "PICKUP", paid_at: new Date().toISOString() };
  } else if (action === "shipped") {
    if (method === "pickup") {
      return NextResponse.json({ error: "Pick-up orders are not shipped." }, { status: 409 });
    }
    if (!allIn(["paid"])) {
      return NextResponse.json({ error: "Only paid orders can be shipped." }, { status: 409 });
    }
    if (tracking.length < 3) {
      return NextResponse.json({ error: "Please enter the tracking number." }, { status: 400 });
    }
    update = { status: "shipped", tracking_number: tracking };
  } else {
    if (!allIn(["pending", "paid"])) {
      return NextResponse.json({ error: "This order cannot be cancelled." }, { status: 409 });
    }
    update = { status: "cancelled" };
  }

  const { error: updateError } = await supabase.from("orders").update(update).eq("order_number", orderNumber);
  if (updateError) {
    console.error("Admin update error:", updateError);
    return NextResponse.json({ error: "Could not update the order." }, { status: 500 });
  }

  // Emails automatiques au client
  let emailSent: boolean | null = null;
  if (action !== "cancelled") {
    const list = rows.map((r) => `<li>${esc(r.rug_name)} (${esc(r.sku)}) — ${esc(r.size)}</li>`).join("");
    const wrap = (inner: string) =>
      `<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#222">${inner}
        <p>Cooperative Berber Rugs — Taznakht, Morocco</p></div>`;

    let subject = "";
    let html = "";

    if (action === "paid") {
      const isDeposit = method === "bank_deposit";
      subject = isDeposit ? `Deposit received — order ${orderNumber}` : `Payment received — order ${orderNumber}`;
      html = wrap(`
        <h2>${isDeposit ? "Deposit received" : "Payment received"} — thank you, ${esc(first.full_name)}!</h2>
        <p>${
          isDeposit
            ? `We received your ${DEPOSIT_PERCENT}% deposit of <strong>${formatMoney(deposit, currency)}</strong> for order <strong>${orderNumber}</strong>.`
            : `We received your bank transfer for order <strong>${orderNumber}</strong>.`
        }</p>
        <ul>${list}</ul>
        ${isDeposit ? `<p>The balance of <strong>${formatMoney(balance, currency)}</strong> is payable on delivery.</p>` : ""}
        <p>We are now preparing your order for shipping. You will receive another email with the tracking number as soon as it leaves our workshop.</p>`);
    } else if (action === "shipped") {
      subject = `Your order ${orderNumber} has shipped`;
      html = wrap(`
        <h2>Your order is on its way, ${esc(first.full_name)}!</h2>
        <p>Order <strong>${orderNumber}</strong> has been shipped.</p>
        <ul>${list}</ul>
        <p>Tracking number: <strong>${esc(tracking)}</strong></p>
        ${
          method === "bank_deposit" && balance > 0
            ? `<p>Please keep <strong>${formatMoney(balance, currency)}</strong> ready: it is the balance to pay on delivery.</p>`
            : ""
        }
        <p>Questions? Reply to this email or message us on WhatsApp: +212 767 149 114.</p>`);
    } else {
      subject = `Thank you — order ${orderNumber} collected`;
      html = wrap(`
        <h2>Thank you, ${esc(first.full_name)}!</h2>
        <p>Order <strong>${orderNumber}</strong> has been collected and paid at our shop.</p>
        <ul>${list}</ul>
        <p>We hope you enjoy your handmade Berber rug. Do not hesitate to write to us on WhatsApp: +212 767 149 114.</p>`);
    }

    emailSent = await sendEmail(first.email, subject, html);
  }

  return NextResponse.json({ ok: true, emailSent });
}