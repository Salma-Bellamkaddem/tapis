"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { isSaleActive, SALE } from "@/app/lib/sale";


function getTimeLeft() {
  const diff = Math.max(0, new Date(SALE.end).getTime() - Date.now());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

export default function SaleBanner() {
  const [t, setT] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setT(getTimeLeft());
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!isSaleActive()) return null;

  return (
    <div className="w-full bg-[#101827] text-white text-center px-4 py-2.5 text-[11px] md:text-xs tracking-[0.15em] uppercase font-bold flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
      <span>
        🖤 {SALE.name} Sale — <span className="text-[#E8B04B]">-{SALE.percent}% on all handmade Berber rugs</span>
      </span>
      {t && (
        <span className="font-mono tabular-nums text-[#FAF0E4]" aria-label="Time left">
          {t.d}d {String(t.h).padStart(2, "0")}h {String(t.m).padStart(2, "0")}m {String(t.s).padStart(2, "0")}s
        </span>
      )}
      <Link href="/rugs" className="underline underline-offset-4 hover:text-[#E8B04B]">
        Shop the sale →
      </Link>
    </div>
  );
}