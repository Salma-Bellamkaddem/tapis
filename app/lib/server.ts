import { createClient } from "@supabase/supabase-js";

// Clé SECRÈTE uniquement : à n'utiliser que côté serveur (routes API, pages serveur)
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

// Échappe le HTML pour les emails (accepte aussi null / undefined / nombres)
export const esc = (value: unknown): string =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

// Retourne true si l'email est bien parti. Ne lève jamais d'erreur.
export async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;

  if (!key || !from) {
    console.warn("Email not sent: RESEND_API_KEY or EMAIL_FROM is missing in .env.local");
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, subject, html }),
      signal: AbortSignal.timeout(8000), // ne bloque jamais la commande plus de 8 s
    });
    if (!res.ok) console.error("Email error:", res.status, await res.text());
    return res.ok;
  } catch (e) {
    console.error("Email send failed:", e);
    return false;
  }
}