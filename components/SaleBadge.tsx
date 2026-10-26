"use client";

import { DISCOUNT } from "@/app/lib/promo";
import { usePromoLive } from "@/app/lib/usePromoLive";



// Usable from server components (pages). Renders nothing outside the sale.
export default function SaleBadge({
  className = "",
  short = false,
}: {
  className?: string;
  short?: boolean;
}) {
  const live = usePromoLive();
  if (!live) return null;

  return (
    <span
      className={`bg-red-600 text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider rounded shadow ${className}`}
    >
      {short ? `-${DISCOUNT}%` : `Black Friday -${DISCOUNT}%`}
    </span>
  );
}