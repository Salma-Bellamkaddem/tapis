export const SITE_URL = "https://rugsberber.com";
export const BASE_CURRENCY = "USD"; // ⚠️ devise réelle des prix dans products.ts

export const SALE = {
  name: "Black Friday",
  percent: 30, // ⚠️ à ajuster
  // Black Friday 2026 = 27 nov. L'offre court jusqu'au Cyber Monday (30 nov).
  end: "2026-11-30T23:59:59+01:00",
  priceValidUntil: "2026-11-30",
};

export function isSaleActive(now = new Date()) {
  return now.getTime() <= new Date(SALE.end).getTime();
}

export function parsePrice(p: string | number | undefined): number {
  if (typeof p === "number") return p;
  return Number(String(p ?? "").replace(/[^\d.]/g, "")) || 0;
}

export function salePrice(p: string | number | undefined): number {
  const n = parsePrice(p);
  return isSaleActive() ? Math.round(n * (1 - SALE.percent / 100)) : n;
}