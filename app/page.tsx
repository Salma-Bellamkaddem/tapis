"use client";

import Link from "next/link";
import { useState } from "react";
import ExperienceSection from "../components/ExperienceSection";
import Features from "../components/Features";
import ShopByStyle from "../components/ShopByStyle";
import MeetArtisans from "../components/MeetArtisans";
import WoolToRug from "../components/WoolToRug";
import EthicalImpact from "../components/EthicalImpact";
import AboutCooperative from "../components/AboutCooperative";
import CustomerReviews from "@/components/CustomerReviews";

import { collectionsData, rugsData } from "@/data/products";

// Petite icône règle/mesure en SVG (plus propre qu'un emoji, cohérent sur tous les OS)
function RulerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 7h18v10H3z" />
      <path d="M7 7v3M11 7v3M15 7v3M19 7v3" />
    </svg>
  );
}

function CollectionCard({
  collection,
  index,
}: {
  collection: any;
  index: number;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % collection.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + collection.images.length) % collection.images.length);
  };

  const isFeatured = index === 2;

  return (
    <article
      className={`
        group relative flex flex-col flex-shrink-0 w-[260px] sm:w-[280px] lg:w-[295px] overflow-visible rounded-[42px] border transition-all duration-700 ease-out snap-center
        ${isFeatured
          ? "bg-[#FFF8EF] border-[#A44E36]/50 shadow-[0_25px_70px_rgba(70,40,20,0.18)] lg:-translate-y-6"
          : "bg-[#FAF0E4] border-[#A44E36]/20 shadow-[0_12px_40px_rgba(70,40,20,0.08)]"
        }
        hover:-translate-y-4 hover:shadow-[0_25px_70px_rgba(70,40,20,0.18)]
      `}
    >
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 w-11 h-11 rounded-full bg-[#FFF8EF] border border-[#A44E36]/30 shadow-md flex items-center justify-center text-[#A44E36] text-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
        ❖
      </div>

      <div className="relative pt-9 px-7">
        <div className="relative mx-auto w-[205px] h-[270px] sm:w-[215px] sm:h-[285px] rounded-[50%] overflow-hidden border-[5px] border-[#FFF8EF] shadow-[0_12px_35px_rgba(70,40,20,0.16)] bg-[#E8DED2] transition-all duration-700 group-hover:scale-[1.025]">
          <img
            src={collection.images[currentImageIndex]}
            alt={`${collection.name} Berber Carpet`}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10 pointer-events-none" />

          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#A44E36]/90 text-white flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg z-10"
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#A44E36]/90 text-white flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg z-10"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/25 backdrop-blur-sm">
            {collection.images.map((_: any, idx: number) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "w-5 bg-white" : "w-1.5 bg-white/60"}`}
                aria-label={`Image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow text-center px-7 pt-7 pb-7">
        <h3 className={`font-serif text-2xl sm:text-[25px] tracking-wide mb-1 transition-colors duration-300 ${isFeatured ? "text-[#A44E36]" : "text-[#101827]"}`}>
          {collection.name}
        </h3>
        <p className="text-[10px] font-bold tracking-[0.28em] text-[#A44E36] uppercase mb-4">{collection.subtitle}</p>
        <p className="text-[#3E4A5C] text-sm leading-6 min-h-[84px] mb-6">{collection.description}</p>

        <Link
          href={collection.href}
          className="relative overflow-hidden bg-[#A44E36] hover:bg-[#8F3E29] text-white py-3.5 px-6 rounded-full font-bold text-[10px] tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-xl hover:scale-[1.02]"
        >
          <span className="relative z-10">Explore Collection</span>
          <span className="relative z-10 text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>

      {isFeatured && (
        <div className="absolute inset-[-5px] rounded-[47px] border border-[#A44E36]/20 pointer-events-none" />
      )}
    </article>
  );
}

function ProductCard({ rug }: { rug: any }) {
  // Utilise les vraies tailles/prix du produit (plus de tableau global incorrect)
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const selectedSize = rug.sizes?.[selectedSizeIndex];
  const displayPrice = selectedSize?.price || rug.price;
  const hasMultipleSizes = rug.sizes && rug.sizes.length > 1;

  return (
    <div className="bg-[#FAF0E4] border border-[#A44E36]/20 rounded-lg flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
      <div className="relative aspect-[4/3] w-full bg-gray-200 overflow-hidden">
        <img src={rug.images?.[0] || rug.image} alt={rug.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-md font-bold tracking-wider font-serif text-gray-900">{rug.name}</h3>
          {/* Prix dynamique : change selon la taille sélectionnée */}
          <span className="font-bold text-[#A44E36]">{displayPrice}</span>
        </div>

        <div className="flex justify-between items-center text-xs text-gray-600 mb-4">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{rug.sku}</span>
              {rug.isAvailable && <span className="text-green-700 font-bold tracking-wider uppercase text-[10px]">Available</span>}
            </div>

            {/* Sélecteur de taille avec icône règle */}
            <div className="relative mt-1">
              <RulerIcon className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#A44E36] pointer-events-none" />
              <select
                value={selectedSizeIndex}
                onChange={(e) => setSelectedSizeIndex(Number(e.target.value))}
                disabled={!hasMultipleSizes}
                className="block w-full text-xs border border-[#A44E36]/30 py-1.5 pl-8 pr-2 rounded bg-white text-gray-800 focus:outline-none focus:border-[#A44E36] disabled:opacity-70 disabled:cursor-default"
              >
                {(rug.sizes || []).map((s: { size: string; price: string }, idx: number) => (
                  <option key={idx} value={idx}>
                    {s.size} — {s.price}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Mention tapis sur mesure / design personnalisé */}
        <p className="text-[10px] text-gray-500 italic mb-4 leading-snug">
          Besoin d'une autre taille ou d'un design personnalisé ? Nous réalisons aussi des{" "}
          <Link href="/custom-order" className="text-[#A44E36] font-semibold not-italic hover:underline">
            tapis sur commande
          </Link>
          , selon le design de votre choix.
        </p>

        <div className="mt-auto pt-4 border-t border-[#A44E36]/10 flex justify-between items-center">
          <Link href={`/rugs/${rug.id}`} className="text-gray-500 font-semibold text-xs tracking-widest uppercase hover:text-gray-900 transition-colors">
            Details
          </Link>
          
          <a
            href={`https://wa.me/+212767149114?text=Bonjour,%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20le%20tapis%20${rug.name}%20(${rug.sku})%20-%20Taille:%20${selectedSize?.size || ""}`}
            target="_blank"
            rel="noreferrer"
            className="bg-[#A44E36] text-white px-3 py-1.5 rounded font-semibold text-xs tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors flex items-center gap-1.5 shadow-sm"
          >
            Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-[#FAF0E4]">

      {/* 1. HERO */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0 bg-gray-900">
          <img src="/placeholders/hero-bg.webp" alt="Handcrafted Moroccan Rugs" className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 text-white">
          <span className="block text-sm md:text-base tracking-[0.2em] uppercase mb-4 text-[#FAF0E4]">HAND MADE BY MOROCCAN RURAL WOMEN</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">WOVEN BY HAND. <br />ROOTED IN HERITAGE.</h1>
          <p className="text-lg md:text-xl max-w-lg mb-6 text-gray-100">
            Berber women read symbols in nature — mountains, trees, plants, animals, insects — then weave them into carpets, guided only by imagination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/rugs" className="bg-[#A44E36] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors text-center rounded shadow">
              Explore Our Rugs
            </Link>
            <Link href="/custom-order" className="border border-white text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#A44E36] transition-colors text-center rounded">
              Custom Order
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT COOPERATIVE */}
      <AboutCooperative />

      {/* 3. OUR TOP RUGS */}
      <section className="bg-[#FAF0E4] py-20 px-4 md:px-8 border-b border-[#A44E36]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h2 className="text-3xl font-serif tracking-widest text-gray-900 uppercase">Our Top Rugs</h2>
            <Link href="/rugs" className="bg-[#A44E36] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors text-center rounded shadow-sm">
              View All Products &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rugsData.slice(0, 8).map((rug) => (
              <ProductCard key={rug.id} rug={rug} />
            ))}
          </div>

          {/* Bannière tapis sur commande */}
          <div className="mt-14 bg-[#FFF8EF] border border-[#A44E36]/25 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase mb-2 block">
                MADE TO ORDER
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-2">
                Don't see the size or design you want?
              </h3>
              <p className="text-gray-600 text-sm max-w-xl">
                We also weave custom Berber rugs — any size, any color palette, any symbol —
                designed exactly the way you imagine it, and hand-crafted by our women artisans.
              </p>
            </div>
            <Link
              href="/custom-order"
              className="whitespace-nowrap bg-[#A44E36] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors rounded shadow-md"
            >
              Request Custom Rug
            </Link>
          </div>
        </div>
      </section>

      {/* 4. COLLECTIONS */}
      <section className="relative bg-[#F8EFE3] py-24 md:py-28 overflow-hidden border-b border-[#A44E36]/10">
        <div className="relative max-w-[1500px] mx-auto">
          <div className="text-center mb-16 px-4">
            <div className="flex items-center justify-center gap-5 mb-5">
              <span className="w-16 h-px bg-[#A44E36]/30" />
              <span className="text-[#A44E36] text-2xl">◈</span>
              <span className="w-16 h-px bg-[#A44E36]/30" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-[0.08em] text-[#101827] uppercase leading-tight">
              Explore Our Collections
            </h2>
            <p className="mt-5 text-[10px] md:text-xs text-[#A44E36] font-bold tracking-[0.24em] uppercase">
              HAND MADE BY RURAL WOMEN — SWIPE TO DISCOVER ALL CATEGORIES
            </p>
          </div>

          <div
            id="collections-carousel"
            className="flex gap-5 md:gap-6 overflow-x-auto overflow-y-visible px-4 md:px-8 lg:px-12 pt-10 pb-16 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {collectionsData.map((collection, index) => (
              <CollectionCard key={collection.id} collection={collection} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP BY STYLE */}
      <ShopByStyle />

      {/* 6. MEET THE ARTISANS */}
      <MeetArtisans />

      {/* 7. FROM WOOL TO RUG */}
      <WoolToRug />

      {/* 8. ETHICAL IMPACT */}
      <EthicalImpact />

      {/* 9. CUSTOMER REVIEWS */}
      <CustomerReviews />

      {/* 10. EXPERIENCE SECTION & FEATURES */}
      <ExperienceSection />
      <Features />

    </div>
  );
}