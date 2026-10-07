import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "admin_session";
export const ADMIN_MAX_AGE = 60 * 60 * 24 * 7; // 7 jours

const secret = () => process.env.ADMIN_SESSION_SECRET || "";

export function adminConfigured() {
  return !!process.env.ADMIN_PASSWORD && secret().length >= 16;
}

const sign = (payload: string) => createHmac("sha256", secret()).update(payload).digest("hex");

// Comparaison en temps constant (évite de deviner le mot de passe par le temps de réponse)
export function safeEqual(a: string, b: string) {
  const ha = createHmac("sha256", "cmp").update(a).digest();
  const hb = createHmac("sha256", "cmp").update(b).digest();
  return timingSafeEqual(ha, hb);
}

export function createToken() {
  const payload = String(Date.now() + ADMIN_MAX_AGE * 1000);
  return `${payload}.${sign(payload)}`;
}

function verifyToken(token?: string) {
  if (!token || !adminConfigured()) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig || !safeEqual(sig, sign(payload))) return false;
  return Number(payload) > Date.now();
}

export async function isAdmin() {
  const store = await cookies();
  return verifyToken(store.get(ADMIN_COOKIE)?.value);
}