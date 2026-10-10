import { NextRequest, NextResponse } from "next/server";

// Lit le pays du visiteur côté serveur (en-tête ajouté par Vercel).
// Évite l'appel navigateur vers ipapi.co, bloqué par CORS.
export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") || // au cas où un proxy Cloudflare serait ajouté
    "";

  return NextResponse.json(
    { country_code: country.toUpperCase() },
    { headers: { "Cache-Control": "no-store" } }
  );
}