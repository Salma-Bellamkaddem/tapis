"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  parsePrice,
  formatMoney,
  shippingFor,
  splitPayment,
  DEPOSIT_PERCENT,
  PICKUP_LOCATION,
  SHIPPING_FEE,
  type PaymentMethod,
} from "@/app/lib/pricing";
import { useCart } from "@/components/CartContext";
import { trackEvent } from "@/app/lib/fbq";

const WHATSAPP_NUMBER = "212767149114";

type Success = {
  orderNumber: string;
  total: number;
  currency: string;
  deadlineHours: number;
  paymentMethod: PaymentMethod;
  dueNow: number;
  balance: number;
  pickupLocation: string;
  bank: { accountName: string; bankName: string; iban: string; swift: string } | null;
};

type Row = { label: string; value: string; copy?: string };

const inputClass =
  "w-full border border-[#A44E36]/30 bg-white rounded-lg px-3 py-3 text-base sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#A44E36] focus:ring-2 focus:ring-[#A44E36]/20";
const labelClass = "block text-xs font-bold tracking-widest uppercase text-gray-700 mb-1.5";

const METHOD_OPTIONS: { key: PaymentMethod; title: string; desc: string; badge?: string }[] = [
  {
    key: "bank_full",
    title: "Full payment by bank transfer",
    desc: "We ship your rug as soon as the full amount has reached our account. Available for all countries.",
    badge: "Worldwide",
  },
  {
    key: "bank_deposit",
    title: `Deposit by bank transfer (${DEPOSIT_PERCENT}% of the total), balance on delivery`,
    desc: "Pay the deposit by bank transfer now and the remaining balance when your rug arrives. The deposit is part of your total price, not a discount.",
    badge: "Morocco only",
  },
  {
    key: "pickup",
    title: "Pick up and pay at our shop",
    desc: `No delivery fees. We confirm availability and your pick-up date. Pick-up: ${PICKUP_LOCATION}.`,
  },
];

const TRUST_POINTS = [
  { icon: "🔒", text: "No card needed. You pay by bank transfer." },
  { icon: "🧶", text: "Handmade, one of a kind rugs from the cooperative." },
  { icon: "💬", text: "A real person confirms your order on WhatsApp." },
];

function isMorocco(country: string) {
  const c = country.trim().toLowerCase();
  return ["morocco", "maroc", "المغرب", "ma", "marruecos"].includes(c);
}

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
      <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.200a8.200 8.200 0 01-4.200-1.200l-.3-.2-3 .8.8-2.900-.2-.3A8.200 8.200 0 1112 20.200zm4.500-6.100c-.2-.1-1.500-.7-1.700-.8-.2-.1-.4-.1-.6.100l-.8 1c-.1.200-.3.200-.5.100a6.700 6.700 0 01-3.300-2.900c-.2-.4.200-.4.700-1.300.1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.300 3 3 0 00-.9 2.200 5.200 5.200 0 001.100 2.800 11.900 11.900 0 004.600 4c1.700.7 2.400.8 3.200.7a2.700 2.700 0 001.800-1.300 2.200 2.200 0 00.2-1.300c-.1-.1-.3-.2-.6-.3z" />
    </svg>
  );
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* le navigateur refuse l'accès au presse-papiers */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className="shrink-0 rounded-full border border-[#A44E36]/30 px-2.5 py-1 text-[11px] font-semibold text-[#A44E36] hover:bg-[#A44E36] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A44E36]"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

export default function CheckoutClient() {
  const { cart, removeFromCart, clearCart, ready } = useCart();
  const [method, setMethod] = useState<PaymentMethod>("bank_full");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<Success | null>(null);

  const checkoutFired = useRef(false);
  useEffect(() => {
    if (!ready || cart.length === 0 || success || checkoutFired.current) return;
    checkoutFired.current = true;
    let value = 0;
    let cur = "USD";
    cart.forEach((i) => {
      const p = parsePrice(i.price);
      value += p.value;
      cur = p.currency;
    });
    trackEvent("InitiateCheckout", {
      content_ids: cart.map((i) => i.rugId),
      content_type: "product",
      num_items: cart.length,
      value,
      currency: cur,
    });
  }, [ready, cart, success]);

  let subtotal = 0;
  let currency = "USD";
  cart.forEach((item) => {
    const parsed = parsePrice(item.price);
    subtotal += parsed.value;
    currency = parsed.currency;
  });

  const shipping = cart.length > 0 ? shippingFor(method) : 0;
  const total = subtotal + shipping;
  const { dueNow, balance } = splitPayment(total, method);
  const isPickup = method === "pickup";
  const depositCountryMismatch = method === "bank_deposit" && country.trim() !== "" && !isMorocco(country);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }
    if (method === "bank_deposit" && !isMorocco(country)) {
      setError("The deposit option is available for deliveries in Morocco only. Please choose full payment by bank transfer.");
      return;
    }
    setError("");
    setLoading(true);

    const formData = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, paymentMethod: method, items: cart }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Something went wrong. Please try again.");
      } else {
        setSuccess(json);

        trackEvent(
          "Purchase",
          {
            value: json.total,
            currency: json.currency,
            content_type: "product",
            content_ids: cart.map((i) => i.rugId),
            contents: cart.map((i) => ({ id: i.rugId, quantity: 1 })),
            num_items: cart.length,
          },
          { eventID: json.orderNumber }
        );

        clearCart();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!ready) {
    return (
      <div className="bg-[#FAF9F6] min-h-[70vh] py-20 px-4 text-center">
        <p className="text-sm text-gray-500">Loading your cart…</p>
      </div>
    );
  }

  if (cart.length === 0 && !success) {
    return (
      <div className="bg-[#FAF9F6] min-h-[70vh] py-20 px-4 text-center">
        <h1 className="font-serif text-3xl text-gray-900 mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-8 text-sm">Discover our collection of authentic handmade Berber rugs.</p>
        <Link
          href="/rugs"
          className="inline-block bg-[#A44E36] text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#8a3f2b] transition-colors"
        >
          Explore Rugs
        </Link>
      </div>
    );
  }

  // ÉCRAN DE CONFIRMATION
  if (success) {
    const bank = success.bank;
    const isDeposit = success.paymentMethod === "bank_deposit";
    const isPickupOrder = success.paymentMethod === "pickup";

    const rows: Row[] = bank
      ? [
          { label: "Beneficiary", value: bank.accountName, copy: bank.accountName },
          { label: "Bank", value: bank.bankName },
          { label: "IBAN", value: bank.iban, copy: bank.iban.replace(/\s/g, "") },
          { label: "SWIFT / BIC", value: bank.swift, copy: bank.swift },
          {
            label: isDeposit ? "Deposit to transfer now" : "Amount to transfer",
            value: formatMoney(success.dueNow, success.currency),
            copy: success.dueNow.toFixed(2),
          },
          ...(isDeposit
            ? [{ label: "Balance to pay on delivery", value: formatMoney(success.balance, success.currency) }]
            : []),
          { label: "Payment reference", value: success.orderNumber, copy: success.orderNumber },
        ]
      : [];

    const whatsappMessage = isPickupOrder
      ? `Hello! I placed order ${success.orderNumber} for pick-up at the shop. I would like to confirm my pick-up date.`
      : `Hello! I placed order ${success.orderNumber}. I made the bank transfer of ${formatMoney(
          success.dueNow,
          success.currency
        )} and I am sending my receipt.`;

    const nextSteps = isPickupOrder
      ? [
          "We confirm availability and your pick-up date.",
          `You collect your rug at ${success.pickupLocation} and pay ${formatMoney(success.total, success.currency)}.`,
        ]
      : [
          "Make the bank transfer with the details above. Use your order number as the payment reference.",
          "Send us the transfer receipt on WhatsApp (one tap with the green button).",
          isDeposit
            ? "We confirm your order and prepare your rug. You pay the balance on delivery."
            : "We confirm your payment, pack your rug carefully and ship it.",
        ];

    return (
      <div className="bg-[#FAF9F6] min-h-screen py-10 md:py-12 px-4">
        {/* Intégration Google Avis Clients */}
        <Script
          src="https://apis.google.com/js/platform.js?onload=renderOptIn"
          strategy="afterInteractive"
        />
        <script
          id="google-customer-reviews-survey"
          dangerouslySetInnerHTML={{
            __html: `
              window.renderOptIn = function() {
                window.gapi.load('surveyoptin', function() {
                  window.gapi.surveyoptin.render({
                    "merchant_id": 5902648196,
                    "order_id": "${success.orderNumber}",
                    "email": "client@rugsberber.com",
                    "delivery_country": "MA",
                    "estimated_delivery_date": "2026-11-20"
                  });
                });
              };
            `,
          }}
        />

        <div className="max-w-xl mx-auto bg-white border border-[#A44E36]/20 rounded-2xl p-5 sm:p-6 md:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 text-2xl mb-4" aria-hidden="true">
            ✓
          </div>
          <h1 className="font-serif text-2xl md:text-3xl text-gray-900 mb-2">Order {success.orderNumber} received</h1>

          {isPickupOrder ? (
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Your rugs are reserved. We will contact you shortly to confirm availability and your pick-up date. We also
              emailed you this confirmation.
            </p>
          ) : (
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Your rugs are reserved for <strong>{success.deadlineHours} hours</strong>. Make the bank transfer with the
              details below, then send us the receipt on WhatsApp to confirm your order. We also emailed you these
              instructions.
            </p>
          )}

          {isPickupOrder ? (
            <dl className="divide-y divide-gray-200 border-y border-gray-200 mb-6 text-sm">
              <div className="flex justify-between gap-4 py-2.5">
                <dt className="text-gray-500">Pick-up location</dt>
                <dd className="font-semibold text-gray-900 text-right">{success.pickupLocation}</dd>
              </div>
              <div className="flex justify-between gap-4 py-2.5">
                <dt className="text-gray-500">To pay at pick-up</dt>
                <dd className="font-semibold text-gray-900">{formatMoney(success.total, success.currency)}</dd>
              </div>
              <div className="flex justify-between gap-4 py-2.5">
                <dt className="text-gray-500">Order reference</dt>
                <dd className="font-semibold text-gray-900">{success.orderNumber}</dd>
              </div>
            </dl>
          ) : bank ? (
            <>
              <dl className="divide-y divide-gray-200 border-y border-gray-200 mb-3 text-sm">
                {rows.map((r) => (
                  <div key={r.label} className="flex items-center justify-between gap-3 py-2.5">
                    <dt className="text-gray-500">{r.label}</dt>
                    <dd className="flex items-center gap-2 min-w-0">
                      <span className="font-semibold text-gray-900 text-right break-all">{r.value}</span>
                      {r.copy && <CopyButton value={r.copy} label={r.label} />}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-xs text-gray-500 mb-6">
                Please write <strong>{success.orderNumber}</strong> as the transfer reference so we can match your payment
                quickly.
              </p>
            </>
          ) : (
            <p className="text-sm text-gray-700 bg-[#FAF0E4] border border-[#A44E36]/20 rounded-lg p-3 mb-6">
              We will send you the bank details by email and WhatsApp within a few minutes.
            </p>
          )}

          <div className="mb-6">
            <h2 className="font-serif text-lg text-gray-900 mb-3">What happens next</h2>
            <ol className="space-y-3">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#A44E36] text-white text-xs font-bold">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <a
            href={waLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 mb-3 text-xs font-bold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity"
          >
            <WhatsAppIcon />
            {isPickupOrder ? "Confirm my pick-up on WhatsApp" : "Send my transfer receipt on WhatsApp"}
          </a>

          <Link
            href="/rugs"
            className="block text-center border border-[#A44E36] text-[#A44E36] py-3 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#A44E36] hover:text-white transition-colors"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  // FORMULAIRE DE COMMANDE
  return (
    <div className="bg-[#FAF9F6] min-h-screen py-10 md:py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto mb-6 text-xs font-bold tracking-widest uppercase text-gray-400">
        <Link href="/rugs" className="hover:text-gray-900">Rugs</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Checkout / Cart</span>
      </div>

      <ol className="max-w-5xl mx-auto mb-8 grid grid-cols-3 gap-2 text-center text-[11px] sm:text-xs" aria-label="Order steps">
        {["Your details", "Bank transfer", "Confirm on WhatsApp"].map((label, i) => (
          <li key={label} className="flex flex-col items-center gap-1.5">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                i === 0 ? "bg-[#A44E36] text-white" : "bg-[#A44E36]/15 text-[#A44E36]"
              }`}
            >
              {i + 1}
            </span>
            <span className={i === 0 ? "font-bold text-gray-900" : "text-gray-500"}>{label}</span>
          </li>
        ))}
      </ol>

      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row gap-8 md:gap-10">
        <form onSubmit={handleSubmit} className="w-full md:w-3/5 space-y-6">
          <h1 className="font-serif text-2xl md:text-3xl text-gray-900">Order details</h1>

          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <fieldset>
            <legend className={labelClass}>Payment method</legend>
            <div className="space-y-3">
              {METHOD_OPTIONS.map((opt) => {
                const selected = method === opt.key;
                return (
                  <label
                    key={opt.key}
                    className={`flex gap-3 items-start cursor-pointer rounded-xl border p-4 transition-colors ${
                      selected ? "border-[#A44E36] bg-[#FAF0E4]/60" : "border-[#A44E36]/20 bg-white hover:border-[#A44E36]/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethodChoice"
                      value={opt.key}
                      checked={selected}
                      onChange={() => setMethod(opt.key)}
                      className="mt-1 accent-[#A44E36]"
                    />
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">{opt.title}</span>
                        {opt.badge && (
                          <span className="rounded-full bg-[#A44E36]/10 px-2 py-0.5 text-[10px] font-bold text-[#A44E36]">
                            {opt.badge}
                          </span>
                        )}
                      </span>
                      <span className="block text-xs text-gray-600 mt-1 leading-relaxed">{opt.desc}</span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div>
            <label htmlFor="fullName" className={labelClass}>Full name</label>
            <input id="fullName" name="fullName" required minLength={2} autoComplete="name" className={inputClass} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className={labelClass}>Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" inputMode="email" className={inputClass} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>WhatsApp / phone (with country code)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                minLength={6}
                autoComplete="tel"
                inputMode="tel"
                placeholder="+33 6 12 34 56 78"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="country" className={labelClass}>Country</label>
              <input
                id="country"
                name="country"
                required
                autoComplete="country-name"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder={method === "bank_deposit" ? "Morocco" : "e.g. Morocco, France, USA"}
                className={inputClass}
              />
              {depositCountryMismatch && (
                <p role="alert" className="text-xs text-red-700 mt-1">
                  The deposit option is for Morocco only.{" "}
                  <button
                    type="button"
                    onClick={() => setMethod("bank_full")}
                    className="font-bold underline underline-offset-2"
                  >
                    Switch to full payment
                  </button>
                </p>
              )}
            </div>
            <div>
              <label htmlFor="city" className={labelClass}>City</label>
              <input id="city" name="city" required minLength={2} autoComplete="address-level2" className={inputClass} />
            </div>
          </div>

          <div>
            <label htmlFor="address" className={labelClass}>
              Street address{isPickup ? " (optional)" : ""}
            </label>
            <input
              id="address"
              name="address"
              required={!isPickup}
              minLength={isPickup ? undefined : 5}
              autoComplete="street-address"
              placeholder="Street, number, building, apartment"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="postalCode" className={labelClass}>Postal code</label>
              <input id="postalCode" name="postalCode" autoComplete="postal-code" className={inputClass} />
            </div>
          </div>

          <div>
            <label htmlFor="notes" className={labelClass}>Additional details (optional)</label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              maxLength={500}
              placeholder={
                isPickup
                  ? "Preferred pick-up day or time, questions about the rug..."
                  : "Landmark, delivery instructions, best time to call..."
              }
              className={inputClass}
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#A44E36] text-white py-4 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#8a3f2b] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Placing order…" : `Place order · ${formatMoney(total, currency)}`}
          </button>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {TRUST_POINTS.map((p) => (
              <li
                key={p.text}
                className="flex items-start gap-2 rounded-lg bg-white border border-[#A44E36]/15 p-3 text-xs text-gray-600 leading-snug"
              >
                <span aria-hidden="true">{p.icon}</span>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </form>

        <aside className="w-full md:w-2/5">
          <div className="bg-white border border-[#A44E36]/20 rounded-2xl p-5 md:sticky md:top-8">
            <h2 className="font-serif text-xl text-gray-900 mb-4">Your Cart ({cart.length})</h2>

            <div className="divide-y divide-gray-200 mb-4 max-h-[350px] overflow-y-auto">
              {cart.map((item, idx) => (
                <div key={`${item.rugId}-${item.size}-${idx}`} className="py-3 flex gap-3 items-center">
                  <div className="relative w-16 h-20 rounded bg-gray-100 overflow-hidden flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div className="flex-1 text-xs">
                    <p className="font-serif font-bold text-gray-900">{item.name}</p>
                    <p className="text-gray-500">Size: {item.size}</p>
                    <p className="font-bold text-[#A44E36] mt-1">{item.price}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.rugId, item.size)}
                    className="text-gray-400 hover:text-red-600 text-sm px-2 py-1"
                    title="Remove item"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <dl className="text-sm divide-y divide-gray-200 border-t border-gray-200 pt-3">
              <div className="flex justify-between py-2">
                <dt className="text-gray-600">Subtotal</dt>
                <dd className="font-medium text-gray-900">{formatMoney(subtotal, currency)}</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt className="text-gray-600">{isPickup ? "Delivery" : "Shipping"}</dt>
                <dd className="font-medium text-gray-900">
                  {isPickup ? "No delivery fees" : SHIPPING_FEE === 0 ? "Included" : formatMoney(SHIPPING_FEE, currency)}
                </dd>
              </div>
              <div className="flex justify-between py-2.5 font-bold text-gray-900 text-base">
                <dt>Total</dt>
                <dd className="text-[#A44E36]">{formatMoney(total, currency)}</dd>
              </div>
            </dl>

            <div className="mt-5 rounded-xl bg-[#FAF0E4] border border-[#A44E36]/15 p-4">
              <p className="text-sm font-bold text-gray-900 mb-1">Need help with your order?</p>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                Questions about size, shipping to your country or payment? We answer on WhatsApp.
              </p>
              <a
                href={waLink("Hello! I have a question before placing my order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#128C4A] hover:underline"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat with us
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}