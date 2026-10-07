"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { formatMoney } from "@/app/lib/pricing";

export type OrderStatus = "pending" | "paid" | "shipped" | "cancelled" | "expired";

export type AdminOrder = {
  orderNumber: string;
  status: OrderStatus;
  overdue: boolean;
  createdAt: string;
  paidAt: string | null;
  trackingNumber: string | null;
  currency: string;
  total: number;
  paymentMethod: "bank_full" | "bank_deposit" | "pickup";
  dueNow: number;
  balance: number;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    notes: string;
  };
  items: { rugName: string; sku: string; size: string; price: number; image: string | null }[];
};

type Tab = "pending" | "paid" | "shipped" | "closed" | "all";

const TABS: { key: Tab; label: string }[] = [
  { key: "pending", label: "To pay" },
  { key: "paid", label: "To ship" },
  { key: "shipped", label: "Shipped" },
  { key: "closed", label: "Cancelled / expired" },
  { key: "all", label: "All" },
];

const BADGE: Record<OrderStatus, string> = {
  pending: "bg-amber-100 text-amber-800",
  paid: "bg-blue-100 text-blue-800",
  shipped: "bg-green-100 text-green-800",
  cancelled: "bg-gray-200 text-gray-700",
  expired: "bg-gray-200 text-gray-700",
};

const BADGE_LABEL: Record<OrderStatus, string> = {
  pending: "Awaiting transfer",
  paid: "Paid — ready to ship",
  shipped: "Shipped",
  cancelled: "Cancelled",
  expired: "Expired",
};

function statusLabel(o: AdminOrder): string {
  if (o.paymentMethod === "pickup") {
    if (o.status === "pending") return "Awaiting pick-up";
    if (o.status === "shipped") return "Collected";
  }
  if (o.paymentMethod === "bank_deposit") {
    if (o.status === "pending") return "Awaiting deposit";
    if (o.status === "paid") return "Deposit received — ready to ship";
  }
  return BADGE_LABEL[o.status];
}

function paymentText(o: AdminOrder): string {
  if (o.paymentMethod === "pickup") return `Pick-up and payment at the shop (${formatMoney(o.total, o.currency)} to pay on collection)`;
  if (o.paymentMethod === "bank_deposit")
    return `Deposit by bank transfer: ${formatMoney(o.dueNow, o.currency)} now + ${formatMoney(o.balance, o.currency)} on delivery`;
  return "Full payment by bank transfer";
}

// Heure fixe (UTC) pour éviter les écarts d'affichage serveur / navigateur
const formatDate = (iso: string) =>
  new Date(iso).toLocaleString("en-GB", {
    timeZone: "UTC",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }) + " UTC";

const matchesTab = (status: OrderStatus, tab: Tab) =>
  tab === "all" ? true : tab === "closed" ? status === "cancelled" || status === "expired" : status === tab;

export default function AdminOrders({ orders }: { orders: AdminOrder[] }) {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("pending");
  const [busy, setBusy] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: "ok" | "error"; text: string } | null>(null);
  const [tracking, setTracking] = useState<Record<string, string>>({});

  const visible = orders.filter((o) => matchesTab(o.status, tab));

  async function act(orderNumber: string, action: "paid" | "shipped" | "collected" | "cancelled") {
    setBusy(orderNumber);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderNumber, action, trackingNumber: tracking[orderNumber] ?? "" }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMessage({ type: "error", text: json.error || "Something went wrong." });
      } else {
        const note =
          json.emailSent === false
            ? " The customer email could not be sent — please contact them directly."
            : json.emailSent
            ? " The customer was notified by email."
            : "";
        setMessage({ type: "ok", text: `Order ${orderNumber} updated.${note}` });
        router.refresh();
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setBusy(null);
    }
  }

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-serif text-2xl md:text-3xl text-gray-900">Orders</h1>
          <button
            type="button"
            onClick={logout}
            className="text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-gray-900"
          >
            Sign out
          </button>
        </div>

        {/* Onglets */}
        <div className="flex flex-wrap gap-2 mb-6">
          {TABS.map(({ key, label }) => {
            const count = orders.filter((o) => matchesTab(o.status, key)).length;
            const active = tab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                aria-pressed={active}
                className={`px-4 py-2 text-xs font-bold tracking-wider rounded-full border transition-colors ${
                  active
                    ? "bg-[#A44E36] text-white border-[#A44E36]"
                    : "bg-white text-gray-700 border-[#A44E36]/30 hover:border-[#A44E36]"
                }`}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>

        {message && (
          <p
            role="status"
            className={`mb-6 text-sm rounded-lg p-3 border ${
              message.type === "ok"
                ? "text-green-800 bg-green-50 border-green-200"
                : "text-red-700 bg-red-50 border-red-200"
            }`}
          >
            {message.text}
          </p>
        )}

        {visible.length === 0 && (
          <p className="text-sm text-gray-500 py-16 text-center">No orders in this tab.</p>
        )}

        <div className="space-y-5">
          {visible.map((o) => {
            const c = o.customer;
            const phoneDigits = c.phone.replace(/\D/g, "");
            const isBusy = busy === o.orderNumber;

            return (
              <article key={o.orderNumber} className="bg-white border border-[#A44E36]/20 rounded-2xl p-5">
                {/* En-tête */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <h2 className="font-bold text-gray-900">{o.orderNumber}</h2>
                    <p className="text-xs text-gray-500">{formatDate(o.createdAt)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {o.overdue && (
                      <span className="text-[11px] font-bold text-red-700">Payment overdue</span>
                    )}
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${BADGE[o.status]}`}>
                      {statusLabel(o)}
                    </span>
                    <span className="font-bold text-[#A44E36]">{formatMoney(o.total, o.currency)}</span>
                  </div>
                </div>

                {/* Mode de paiement */}
                <p className="text-xs text-gray-600 mb-3">
                  <strong>Payment:</strong> {paymentText(o)}
                </p>

                {/* Tapis commandés avec photo */}
                <ul className="divide-y divide-gray-100 mb-4">
                  {o.items.map((it, i) => (
                    <li key={`${it.sku}-${i}`} className="py-3 flex gap-4 items-center">
                      <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        {it.image ? (
                          <Image src={it.image} alt={it.rugName} fill sizes="80px" className="object-cover" />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center text-[10px] text-gray-400">
                            No photo
                          </span>
                        )}
                      </div>
                      <div className="text-sm flex-1">
                        <p className="font-serif font-bold text-gray-900">{it.rugName}</p>
                        <p className="text-gray-500 text-xs">SKU {it.sku} · {it.size}</p>
                      </div>
                      <p className="text-sm font-semibold text-gray-900">{formatMoney(it.price, o.currency)}</p>
                    </li>
                  ))}
                </ul>

                {/* Client */}
                <div className="bg-[#FAF0E4]/50 rounded-xl p-4 text-sm text-gray-700 leading-relaxed mb-4">
                  <p className="font-semibold text-gray-900">{c.name}</p>
                  <p>
                    <a href={`mailto:${c.email}`} className="underline">{c.email}</a>
                    {" · "}
                    <a href={`tel:${c.phone}`} className="underline">{c.phone}</a>
                    {phoneDigits && (
                      <>
                        {" · "}
                        <a
                          href={`https://wa.me/${phoneDigits}`}
                          target="_blank"
                          rel="noreferrer"
                          className="underline"
                        >
                          WhatsApp
                        </a>
                      </>
                    )}
                  </p>
                  {!c.address.startsWith("Shop pick-up") && <p>{c.address}</p>}
                  <p>
                    {o.paymentMethod === "pickup" && <strong>Shop pick-up · </strong>}
                    {c.city} {c.postalCode}, {c.country}
                  </p>
                  {c.notes && <p className="mt-1 italic">Notes: {c.notes}</p>}
                </div>

                {/* Actions */}
                {o.status === "pending" && (
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      disabled={isBusy}
                      onClick={() => {
                        if (o.paymentMethod === "pickup") {
                          if (confirm(`Confirm: the customer collected ${o.orderNumber} and paid ${formatMoney(o.total, o.currency)} at the shop?`))
                            act(o.orderNumber, "collected");
                        } else {
                          const amount = o.paymentMethod === "bank_deposit" ? o.dueNow : o.total;
                          if (confirm(`Confirm: the transfer of ${formatMoney(amount, o.currency)} for ${o.orderNumber} is on your bank account?`))
                            act(o.orderNumber, "paid");
                        }
                      }}
                      className="bg-[#A44E36] text-white px-5 py-2.5 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#8a3f2b] disabled:opacity-60"
                    >
                      {isBusy
                        ? "Saving…"
                        : o.paymentMethod === "pickup"
                        ? "Mark as collected & paid"
                        : o.paymentMethod === "bank_deposit"
                        ? "Mark deposit as received"
                        : "Mark as paid"}
                    </button>
                    <button
                      type="button"
                      disabled={isBusy}
                      onClick={() => {
                        if (confirm(`Cancel order ${o.orderNumber}? The rugs become available again.`))
                          act(o.orderNumber, "cancelled");
                      }}
                      className="border border-gray-300 text-gray-700 px-5 py-2.5 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-gray-50 disabled:opacity-60"
                    >
                      Cancel
                    </button>
                  </div>
                )}

                {o.status === "paid" && (
                  <div className="flex flex-wrap gap-3 items-center">
                    <input
                      type="text"
                      placeholder="Tracking number"
                      value={tracking[o.orderNumber] ?? ""}
                      onChange={(e) => setTracking((t) => ({ ...t, [o.orderNumber]: e.target.value }))}
                      className="border border-[#A44E36]/30 rounded-lg px-3 py-2.5 text-sm w-full sm:w-64 focus:outline-none focus:border-[#A44E36]"
                    />
                    <button
                      type="button"
                      disabled={isBusy || (tracking[o.orderNumber] ?? "").trim().length < 3}
                      onClick={() => act(o.orderNumber, "shipped")}
                      className="bg-[#A44E36] text-white px-5 py-2.5 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#8a3f2b] disabled:opacity-60"
                    >
                      {isBusy ? "Saving…" : "Mark as shipped"}
                    </button>
                    <button
                      type="button"
                      disabled={isBusy}
                      onClick={() => {
                        if (confirm(`Cancel PAID order ${o.orderNumber}? You must refund the customer manually.`))
                          act(o.orderNumber, "cancelled");
                      }}
                      className="text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-red-700"
                    >
                      Cancel
                    </button>
                  </div>
                )}

                {o.status === "shipped" && o.trackingNumber && (
                  <p className="text-sm text-gray-700">
                    {o.trackingNumber === "PICKUP" ? "Collected and paid at the shop." : <>Tracking number: <strong>{o.trackingNumber}</strong></>}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}