// Single source of truth for the Black Friday promo.
export const DISCOUNT = 30; // % off
export const WHATSAPP_NUMBER = "212767149114";
// Black Friday = 4th Friday of November.
export function getBlackFriday(year: number): Date {
  const nov1Day = new Date(year, 10, 1).getDay();
  const firstFriday = 1 + ((5 - nov1Day + 7) % 7);
  return new Date(year, 10, firstFriday + 21);
}
// Sale runs from October 27 to November 30.
export function getSaleWindow(year: number) {
  return {
    start: new Date(year, 9, 27, 0, 0, 0),
    end: new Date(year, 10, 30, 23, 59, 59),
  };
}
export type PromoState = {
  live: boolean;
  year: number;
  end: Date;
  blackFriday: Date;
};
export function getPromoState(now: Date = new Date()): PromoState {
  const year = now.getFullYear();
  const { start, end } = getSaleWindow(year);
  if (now >= start && now <= end) {
    return {
      live: true,
      year,
      end,
      blackFriday: getBlackFriday(year),
    };
  }
  const nextYear = now < start ? year : year + 1;
  return {
    live: false,
    year: nextYear,
    end: getSaleWindow(nextYear).end,
    blackFriday: getBlackFriday(nextYear),
  };
}
// Convert a price to a number.
export const toNumber = (p: unknown) =>
  parseFloat(String(p).replace(/[^0-9.]/g, "")) || 0;
// The listed price is the sale price.
// The reference price is calculated to reflect a 30% discount.
export const referencePrice = (current: unknown, explicit?: unknown) => {
  if (explicit) return String(explicit);
  return `$${Math.round(toNumber(current) / (1 - DISCOUNT / 100))}`;
};
export const formatLongDate = (d: Date) =>
  d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });