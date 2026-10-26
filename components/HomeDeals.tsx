"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { DISCOUNT } from "@/app/lib/promo";
import { usePromoLive } from "@/app/lib/usePromoLive";

export default function HomeDeals({ rugs }: { rugs: any[] }) {
  const live = usePromoLive();

  return (
    <section id="deals" className="scroll-mt-16 bg-[#FAF0E4] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#A44E36]">
            {live ? `Black Friday · ${DISCOUNT}% off` : "Available now"}
          </p>
          <h2 className="mb-4 font-serif text-3xl text-[#1A1512] md:text-4xl">
            {live ? "Black Friday Berber rug deals" : "Featured handmade Berber rugs"}
          </h2>
          <p className="text-gray-600">
            {live
              ? "Every rug in stock is on offer until November 30. Each piece is one of a kind, and once it is sold it is not restocked."
              : "One-of-a-kind rugs, in stock and ready to ship from Taznakht, Morocco."}
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {rugs.map((rug) => (
            <ProductCard key={rug.id} rug={rug} onSale={live} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={live ? "/black-friday" : "/rugs"}
            className="inline-block rounded-full border border-[#A44E36] px-8 py-3 text-xs font-bold uppercase tracking-widest text-[#A44E36] transition-colors hover:bg-[#A44E36] hover:text-white"
          >
            {live ? "See all Black Friday deals" : "View all rugs"}
          </Link>
        </div>
      </div>
    </section>
  );
}