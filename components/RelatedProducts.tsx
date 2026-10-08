"use client";

import Link from "next/link";
import Image from "next/image";
import type { Rug } from "@/data/products";

import { useCurrency } from "./CurrencyContext";
import { Collection } from "@/app/lib/collections";

interface RelatedProductsProps {
  rugs: Rug[];
  collection: Collection | null;
}

export default function RelatedProducts({ rugs, collection }: RelatedProductsProps) {
  const { formatPrice } = useCurrency();

  if (rugs.length === 0) return null;

  return (
    <section className="mt-16" aria-labelledby="related-products">
      <div className="flex items-end justify-between mb-6">
        <h2 id="related-products" className="font-serif text-2xl text-gray-900">
          You may also like
        </h2>
        {collection && (
          <Link
            href={`/collections/${collection.slug}`}
            className="text-xs font-bold tracking-widest uppercase text-[#A44E36] hover:underline"
          >
            View all {collection.name} →
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {rugs.map((r) => (
          <Link key={r.id} href={`/rugs/${r.id}`} className="group block">
            <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden">
              <Image
                src={r.images[0]}
                alt={`${r.name} ${r.sizes?.[0]?.size ?? ""} – handmade Moroccan Berber rug from Taznakht`.replace(/\s+/g, " ")}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {!r.isAvailable && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded">
                  Sold Out
                </span>
              )}
            </div>
            <h3 className="mt-3 font-medium text-gray-900 group-hover:underline">{r.name}</h3>
            <p className="text-xs text-gray-500">{r.sizes?.[0]?.size}</p>
            <p className="text-sm text-[#A44E36] font-bold">{formatPrice(r.price)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}