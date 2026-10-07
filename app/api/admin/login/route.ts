import { NextResponse } from "next/server";
import { ADMIN_COOKIE, ADMIN_MAX_AGE, adminConfigured, createToken, safeEqual } from "@/app/lib/adminAuth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!adminConfigured()) {
    console.error("ADMIN_PASSWORD or ADMIN_SESSION_SECRET (16+ chars) is missing");
    return NextResponse.json({ error: "Admin is not configured on the server." }, { status: 500 });
  }

  const body = await req.json().catch(() => ({}));
  const password = typeof body.password === "string" ? body.password : "";

  // Petit délai pour ralentir les tentatives répétées
  await new Promise((r) => setTimeout(r, 500));

  if (!password || !safeEqual(password, process.env.ADMIN_PASSWORD!)) {
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, createToken(), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ADMIN_MAX_AGE,
  });
  return res;
}

// Déconnexion
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
  return res;
}