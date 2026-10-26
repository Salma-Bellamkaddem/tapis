"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DISCOUNT, getPromoState } from "@/app/lib/promo";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

const pad = (n: number) => String(n).padStart(2, "0");

export default function BlackFridayBanner() {
  // null until mounted and only set while the sale is live:
  // no hydration mismatch, no "00:00:00" flash, hidden outside the sale.
  const [end, setEnd] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const promo = getPromoState();
    if (!promo.live) return;

    setEnd(promo.end);

    const tick = () => {
      const diff = promo.end.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft(null);
        return false;
      }
      setTimeLeft({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff / 3_600_000) % 24),
        minutes: Math.floor((diff / 60_000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
      return true;
    };

    tick();
    const interval = setInterval(() => {
      if (!tick()) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!end || !timeLeft) return null;

  const endLabel = end.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return (
    <aside
      aria-label="Black Friday promotion"
      className="relative z-50 border-b border-[#A44E36]/30 bg-[#1A1512] px-4 py-2.5 text-xs font-medium tracking-wide text-white shadow-md md:text-sm"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 text-center sm:flex-row">
        <Link href="/black-friday" className="flex items-center gap-2 hover:underline">
          <span className="rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white motion-safe:animate-pulse">
            Black Friday
          </span>
          <span>
            <strong className="font-semibold text-[#FAC8EB]">-{DISCOUNT}%</strong>{" "}
            on all handmade rugs – ends {endLabel} · Shop now
          </span>
        </Link>

        <div
          role="timer"
          aria-label={`Offer ends in ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes`}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 font-mono text-xs"
        >
          <span className="text-gray-300">Ends in:</span>
          <div className="flex items-center gap-1 font-bold text-[#FAC8EB]">
            <span>{pad(timeLeft.days)}d</span>
            <span aria-hidden="true">:</span>
            <span>{pad(timeLeft.hours)}h</span>
            <span aria-hidden="true">:</span>
            <span>{pad(timeLeft.minutes)}m</span>
            <span aria-hidden="true">:</span>
            <span>{pad(timeLeft.seconds)}s</span>
          </div>
        </div>
      </div>
    </aside>
  );
}