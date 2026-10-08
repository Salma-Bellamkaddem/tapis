"use client";

import Link from "next/link";
import Image from "next/image";
import type { Rug } from "@/data/products";
import { useCurrency } from "./CurrencyContext";

export default function RelatedRugs({ rugs }: { rugs: Rug[] }) {
  const { formatPrice } = useCurrency();

  if (rugs.length === 0) return null;

  return (
    <section className="mt-16" aria-labelledby="related-rugs">
      <h2 id="related-rugs" className="font-serif text-2xl text-gray-900 mb-6">
        You may also like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {rugs.map((r) => (
          <Link key={r.id} href={`/rugs/${r.id}`} className="group block">
            <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden">
              <Image
                src={r.images[0]}
                alt={`${r.name} – handmade Moroccan Berber rug from Taznakht`}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-3 font-medium text-gray-900 group-hover:underline">{r.name}</h3>
            <p className="text-sm text-[#A44E36] font-bold">{formatPrice(r.price)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}