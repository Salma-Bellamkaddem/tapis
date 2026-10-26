"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { collectionsData } from "@/data/products";

function CollectionCard({ collection, index }: { collection: any; index: number }) {
  const [current, setCurrent] = useState(0);
  const total = collection.images.length;
  const isFeatured = index === 2;

  const go = (e: React.MouseEvent, next: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((next + total) % total);
  };

  return (
    <article
      className={`
        group relative flex flex-col flex-shrink-0 w-[260px] sm:w-[280px] lg:w-[295px] overflow-visible rounded-[42px] border transition-all duration-700 ease-out snap-center
        ${isFeatured
          ? "bg-[#FFF8EF] border-[#A44E36]/50 shadow-[0_25px_70px_rgba(70,40,20,0.18)] lg:-translate-y-6"
          : "bg-[#FAF0E4] border-[#A44E36]/20 shadow-[0_12px_40px_rgba(70,40,20,0.08)]"}
        hover:-translate-y-4 hover:shadow-[0_25px_70px_rgba(70,40,20,0.18)]
      `}
    >
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 w-11 h-11 rounded-full bg-[#FFF8EF] border border-[#A44E36]/30 shadow-md flex items-center justify-center text-[#A44E36] text-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" aria-hidden="true">
        ❖
      </div>

      <div className="relative pt-9 px-7">
        <div className="relative mx-auto w-[205px] h-[270px] sm:w-[215px] sm:h-[285px] rounded-[50%] overflow-hidden border-[5px] border-[#FFF8EF] shadow-[0_12px_35px_rgba(70,40,20,0.16)] bg-[#E8DED2]">
          <Image
            src={collection.images[current]}
            alt={`${collection.name} – handmade Moroccan Berber rug collection, view ${current + 1}`}
            fill
            sizes="215px"
            className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10 pointer-events-none z-10" />

          <button onClick={(e) => go(e, current - 1)} aria-label="Previous image" className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#A44E36]/90 text-white flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg z-20">‹</button>
          <button onClick={(e) => go(e, current + 1)} aria-label="Next image" className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#A44E36]/90 text-white flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg z-20">›</button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/25 backdrop-blur-sm z-20">
            {collection.images.map((_: any, idx: number) => (
              <button
                key={idx}
                onClick={(e) => go(e, idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === current ? "w-5 bg-white" : "w-1.5 bg-white/60"}`}
                aria-label={`Show image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow text-center px-7 pt-7 pb-7">
        <h3 className={`font-serif text-2xl sm:text-[25px] tracking-wide mb-1 ${isFeatured ? "text-[#A44E36]" : "text-[#101827]"}`}>
          {collection.name}
        </h3>
        <p className="text-[10px] font-bold tracking-[0.28em] text-[#A44E36] uppercase mb-4">{collection.subtitle}</p>
        <p className="text-[#3E4A5C] text-sm leading-6 min-h-[84px] mb-6">{collection.description}</p>

        <Link
          href={collection.href || "/rugs"}
          prefetch
          className="bg-[#A44E36] hover:bg-[#8F3E29] text-white py-3.5 px-6 rounded-full font-bold text-[10px] tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-xl hover:scale-[1.02]"
        >
          <span>Explore {collection.name}</span>
          <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>

      {isFeatured && <div className="absolute inset-[-5px] rounded-[47px] border border-[#A44E36]/20 pointer-events-none" />}
    </article>
  );
}

export default function CollectionsCarousel() {
  return (
    <div
      id="collections-carousel"
      className="flex gap-5 md:gap-6 overflow-x-auto overflow-y-visible px-4 md:px-8 lg:px-12 pt-10 pb-16 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {collectionsData.map((collection, index) => (
        <CollectionCard key={collection.id} collection={collection} index={index} />
      ))}
    </div>
  );
}