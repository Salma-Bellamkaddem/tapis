"use client";

import Link from "next/link";
import { DISCOUNT } from "@/app/lib/promo";
import { usePromoLive } from "@/app/lib/usePromoLive";

export function HeroEyebrow() {
  const live = usePromoLive();
  return (
    <p
      className={`mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
        live ? "bg-red-600 text-white" : "border border-white/30 text-[#FAF0E4]"
      }`}
    >
      {live ? `Black Friday: ${DISCOUNT}% off all rugs` : "Handmade in Taznakht, Morocco"}
    </p>
  );
}

export function HeroCtas() {
  const live = usePromoLive();
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link
        href={live ? "#deals" : "/rugs"}
        className="rounded-full bg-[#A44E36] px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-[#8a3f2b]"
      >
        {live ? "Shop Black Friday deals" : "Shop our rugs"}
      </Link>
      <Link
        href="/custom-order"
        className="rounded-full border border-white/70 px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-[#1A1512]"
      >
        Order a custom rug
      </Link>
    </div>
  );
}