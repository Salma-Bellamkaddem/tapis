"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

const inputClass =
  "w-full border border-[#A44E36]/30 bg-white rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#A44E36]";
const labelClass = "block text-xs font-bold tracking-widest uppercase text-gray-700 mb-1.5";

const METHOD_OPTIONS: { key: PaymentMethod; title: string; desc: string }[] = [
  {
    key: "bank_deposit",
    title: `Deposit by bank transfer (${DEPOSIT_PERCENT}% of the total), balance on delivery`,
    desc: "Pay the deposit by bank transfer now and the remaining balance when your rug arrives. The deposit is part of your total price, not a discount. Deliveries within Morocco only.",
  },
  {
    key: "bank_full",
    title: "Full payment by bank transfer",
    desc: "We ship your rug as soon as the full amount has reached our account.",
  },
  {
    key: "pickup",
    title: "Pick up and pay at our shop",
    desc: `No delivery fees. We confirm availability and your pick-up date. Pick-up: ${PICKUP_LOCATION}.`,
  },
];

export default function CheckoutClient() {
  const { cart, removeFromCart, clearCart, ready } = useCart();
  const [method, setMethod] = useState<PaymentMethod>("bank_full");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<Success | null>(null);

  // Meta Pixel : InitiateCheckout une seule fois quand le panier est lu et non vide
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
      content_ids: cart.map((i) => i.sku),
      content_type: "product",
      num_items: cart.length,
      value,
      currency: cur,
    });
  }, [ready, cart, success]);

  // Sous-total et devise (calculés à partir du panier)
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (cart.length === 0) {
      setError("Your cart is empty.");
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

        // Meta Pixel : Purchase (avant clearCart, car on lit le panier ici)
        trackEvent(
          "Purchase",
          {
            value: json.total,
            currency: json.currency,
            content_type: "product",
            content_ids: cart.map((i) => i.sku),
            contents: cart.map((i) => ({ id: i.sku, quantity: 1 })),
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

  // Le panier du navigateur n'est pas encore lu (rendu serveur / hydratation) : état neutre,
  // pour ne pas afficher "panier vide" par erreur
  if (!ready) {
    return (
      <div className="bg-[#FAF9F6] min-h-[70vh] py-20 px-4 text-center">
        <p className="text-sm text-gray-500">Loading your cart…</p>
      </div>
    );
  }

  // Panier vide
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

  // Écran de confirmation, adapté au mode de paiement choisi
  if (success) {
    const bank = success.bank;
    const rows: [string, string][] = bank
      ? [
          ["Beneficiary", bank.accountName],
          ["Bank", bank.bankName],
          ["IBAN", bank.iban],
          ["SWIFT / BIC", bank.swift],
          [
            success.paymentMethod === "bank_deposit" ? "Deposit to transfer now" : "Amount to transfer",
            formatMoney(success.dueNow, success.currency),
          ],
          ...(success.paymentMethod === "bank_deposit"
            ? ([["Balance to pay on delivery", formatMoney(success.balance, success.currency)]] as [string, string][])
            : []),
          ["Payment reference", success.orderNumber],
        ]
      : [];

    return (
      <div className="bg-[#FAF9F6] min-h-screen py-12 px-4">
        <div className="max-w-xl mx-auto bg-white border border-[#A44E36]/20 rounded-2xl p-6 md:p-8">
          <h1 className="font-serif text-2xl md:text-3xl text-gray-900 mb-2">Order {success.orderNumber} received</h1>

          {success.paymentMethod === "pickup" ? (
            <>
              <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                Your rugs are reserved. We will contact you shortly to confirm availability and your pick-up date.
                We also emailed you this confirmation.
              </p>
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
            </>
          ) : (
            <>
              <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                Your rugs are reserved for {success.deadlineHours} hours. Send a bank transfer with the details below
                to confirm your order. We also emailed you these instructions.
              </p>
              <dl className="divide-y divide-gray-200 border-y border-gray-200 mb-6 text-sm">
                {rows.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-2.5">
                    <dt className="text-gray-500">{k}</dt>
                    <dd className="font-semibold text-gray-900 text-right break-all">{v}</dd>
                  </div>
                ))}
              </dl>
            </>
          )}

          <Link
            href="/rugs"
            className="block text-center bg-[#A44E36] text-white py-3 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#8a3f2b] transition-colors"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto mb-8 text-xs font-bold tracking-widest uppercase text-gray-400">
        <Link href="/rugs" className="hover:text-gray-900">Rugs</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Checkout / Cart</span>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row gap-10">
        {/* FORMULAIRE */}
        <form onSubmit={handleSubmit} className="w-full md:w-3/5 space-y-6">
          <h1 className="font-serif text-2xl md:text-3xl text-gray-900">Order details</h1>

          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          {/* MODE DE PAIEMENT */}
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
                    <span>
                      <span className="block text-sm font-bold text-gray-900">{opt.title}</span>
                      <span className="block text-xs text-gray-600 mt-1 leading-relaxed">{opt.desc}</span>
                    </span>
                  </label>
                );
              })}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              {isPickup
                ? "No payment is needed online. You pay when you collect your rug."
                : "Bank details are shown on screen and emailed to you right after you place the order."}
            </p>
          </fieldset>

          <div>
            <label htmlFor="fullName" className={labelClass}>Full name</label>
            <input id="fullName" name="fullName" required minLength={2} autoComplete="name" className={inputClass} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className={labelClass}>Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone (with country code)</label>
              <input id="phone" name="phone" type="tel" required minLength={6} autoComplete="tel" placeholder="+33 6 12 34 56 78" className={inputClass} />
            </div>
          </div>

          {/* Pays, ville, adresse : toujours demandés (l'adresse n'est obligatoire que pour une livraison) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="country" className={labelClass}>Country</label>
              <input
                id="country"
                name="country"
                required
                autoComplete="country-name"
                placeholder={method === "bank_deposit" ? "Morocco" : "e.g. Morocco, France, USA"}
                className={inputClass}
              />
              {method === "bank_deposit" && (
                <p className="text-xs text-gray-500 mt-1">The deposit option is available for deliveries in Morocco only.</p>
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
        </form>

        {/* RÉCAPITULATIF */}
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
                    className="text-gray-400 hover:text-red-600 text-xs px-2"
                    title="Remove item"
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

              {method === "bank_deposit" && (
                <>
                  <div className="flex justify-between py-2 text-gray-700">
                    <dt>Deposit to pay now ({DEPOSIT_PERCENT}% of total)</dt>
                    <dd className="font-semibold">{formatMoney(dueNow, currency)}</dd>
                  </div>
                  <div className="flex justify-between py-2 text-gray-700">
                    <dt>Remaining balance (paid on delivery)</dt>
                    <dd className="font-semibold">{formatMoney(balance, currency)}</dd>
                  </div>
                </>
              )}
              {isPickup && (
                <div className="flex justify-between py-2 text-gray-700">
                  <dt>To pay at pick-up</dt>
                  <dd className="font-semibold">{formatMoney(total, currency)}</dd>
                </div>
              )}
            </dl>
            {method === "bank_deposit" && (
              <p className="text-[11px] text-gray-500 mt-3 leading-relaxed">
                The deposit and the balance add up to your total. It is a payment schedule, not a discount.
              </p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}