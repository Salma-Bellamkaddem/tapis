// ======================= RÉGLAGES DE LA BOUTIQUE =======================
// Modifiez ici : tout le checkout, les emails et l'admin suivent.

export const SHIPPING_FEE = 0; // 0 = livraison incluse (même devise que le tapis)
export const PAYMENT_DEADLINE_HOURS = 72; // délai pour envoyer le virement

// Modes de paiement
export type PaymentMethod = "bank_full" | "bank_deposit" | "pickup";
export const PAYMENT_METHODS: PaymentMethod[] = ["bank_full", "bank_deposit", "pickup"];

export const DEPOSIT_PERCENT = 3; // acompte à verser par virement (%)
export const DEPOSIT_MOROCCO_ONLY = true; // acompte + solde à la livraison : réservé au Maroc
export const PICKUP_LOCATION = "our shop in Taznakht, Morocco"; // ← À MODIFIER : adresse du retrait

// ======================================================================

export const isMorocco = (country: string) => /^(morocco|maroc|المغرب|ma)$/i.test(country.trim());

// Retrait en magasin : pas de frais de livraison
export const shippingFor = (method: PaymentMethod) => (method === "pickup" ? 0 : SHIPPING_FEE);

// Ce que le client doit payer maintenant par virement, et ce qui reste à payer plus tard
export function splitPayment(total: number, method: PaymentMethod): { dueNow: number; balance: number } {
  if (method === "bank_deposit") {
    const deposit = Math.round(total * DEPOSIT_PERCENT) / 100;
    return { dueNow: deposit, balance: Math.round((total - deposit) * 100) / 100 };
  }
  if (method === "pickup") return { dueNow: 0, balance: total };
  return { dueNow: total, balance: 0 };
}

export function parsePrice(raw: string): { value: number; currency: "USD" | "MAD" | "EUR" } {
  const amount = Number(raw.replace(/[^0-9.]/g, "").replace(/,/g, ""));
  const currency = /MAD|DH/i.test(raw) ? "MAD" : /€|EUR/i.test(raw) ? "EUR" : "USD";
  return { value: amount, currency };
}

export function formatMoney(value: number, currency: string): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(value);
}