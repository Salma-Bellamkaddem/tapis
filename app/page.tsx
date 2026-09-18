"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ExperienceSection from "../components/ExperienceSection";
import Features from "../components/Features";
import ShopByStyle from "../components/ShopByStyle";
import MeetArtisans from "../components/MeetArtisans";
import WoolToRug from "../components/WoolToRug";
import EthicalImpact from "../components/EthicalImpact";
import AboutCooperative from "../components/AboutCooperative";
import CustomerReviews from "@/components/CustomerReviews";
// 👈 1. Import du hook de devise

import { collectionsData, rugsData } from "@/data/products";
import { useCurrency } from "@/components/CurrencyContext";

// Ruler icon in SVG
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
        <div className="relative mx-auto w-[205px] h-[270px] sm:w-[215px] sm:h-[285px] rounded-[50%] overflow-hidden border-[5px] border-[#FFF8EF] shadow-[0_12px_35px_rgba(70,40,20,0.16)] bg-[#E8DED2]">
          <Image
            src={collection.images[currentImageIndex]}
            alt={`${collection.name} Berber Carpet`}
            fill
            sizes="215px"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10 pointer-events-none z-10" />

          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#A44E36]/90 text-white flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg z-20"
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#A44E36]/90 text-white flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg z-20"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/25 backdrop-blur-sm z-20">
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
          prefetch={true}
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
  const { formatPrice } = useCurrency(); // 👈 2. Utilisation du hook de devise

  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const selectedSize = rug.sizes?.[selectedSizeIndex];
  const displayPrice = selectedSize?.price || rug.price;
  const hasMultipleSizes = rug.sizes && rug.sizes.length > 1;

  const images: string[] = rug.images && rug.images.length > 0 
    ? rug.images.slice(0, 5) 
    : [rug.image || "/placeholders/ouaouzguite-1.jpg"];

  const currentImage = images[activeImgIndex] || images[0];

  const whatsappUrl = `https://wa.me/212767149114?text=${encodeURIComponent(
    `🏛️ *NEW ORDER - BERBER RUG*\n` +
    `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `✨ *Rug :* ${rug.name}\n` +
    `📂 *Category :* ${rug.category}\n` +
    `🔖 *SKU :* ${rug.sku}\n` +
    `📏 *Size :* ${selectedSize?.size || "Standard"}\n` +
    `💰 *Price :* ${formatPrice(displayPrice)}\n\n` +
    `━━━━━━━━━━━━━━━━━━━━━━\n` +
    `📸 *Model Photo :*\n${currentImage}`
  )}`;

  return (
    <div className="bg-white border border-[#A44E36]/15 rounded-2xl flex flex-col h-full shadow-[0_10px_30px_rgba(70,40,20,0.06)] hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative w-full h-[280px] bg-[#F5EFE6] overflow-hidden">
        <Link href={`/rugs/${rug.id}`} prefetch={true}>
          <Image 
            src={currentImage} 
            alt={rug.name} 
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={true}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
          />
        </Link>
        <div className="absolute top-3 left-3 bg-[#FFF8EF]/90 backdrop-blur-sm border border-[#A44E36]/20 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#A44E36] uppercase shadow-sm z-10">
          {rug.sku.startsWith("AKH") ? "New" : rug.sku.startsWith("GLA") ? "Best-seller" : "Authentic"}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-base font-serif font-bold tracking-wide text-gray-900">{rug.name}</h3>
            {/* 3. Application du formatPrice pour convertir le prix */}
            <span className="font-bold text-[#A44E36] text-base">{formatPrice(displayPrice)}</span>
          </div>

          <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
            <span className="font-semibold">{rug.sku}</span>
            {rug.isAvailable && (
              <span className="text-green-700 font-bold tracking-wider uppercase text-[10px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                Available
              </span>
            )}
          </div>

          <div className="relative mb-3">
            <RulerIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#A44E36] pointer-events-none z-10" />
            <select
              value={selectedSizeIndex}
              onChange={(e) => setSelectedSizeIndex(Number(e.target.value))}
              disabled={!hasMultipleSizes}
              className="block w-full text-xs border border-[#A44E36]/30 py-2 pl-9 pr-3 rounded-lg bg-[#FAF0E4]/40 text-gray-800 focus:outline-none focus:border-[#A44E36] disabled:opacity-75 disabled:cursor-default font-medium"
            >
              {(rug.sizes || []).map((s: { size: string; price: string }, idx: number) => (
                <option key={idx} value={idx}>
                  {/* 4. Conversion automatique également dans le select */}
                  {s.size} — {formatPrice(s.price)}
                </option>
              ))}
            </select>
          </div>

          {images.length > 1 && (
            <div className="flex items-center gap-2 mb-4 py-1">
              <div className="flex gap-2 overflow-x-auto">
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImgIndex(idx)}
                    className={`w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all relative bg-[#F5EFE6] ${
                      activeImgIndex === idx ? "border-[#A44E36] scale-105 shadow-sm" : "border-gray-200 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={imgUrl} alt="thumbnail" fill sizes="32px" className="object-cover" />
                  </button>
                ))}
              </div>
            
            </div>
          )}

          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
            {rug.description || "An authentic Berber carpet rich in history, featuring vibrant colors that bring warmth and character to your space."}
          </p>
        </div>

        <div className="pt-3 border-t border-gray-100 flex gap-2">
          <Link 
            href={`/rugs/${rug.id}`} 
            prefetch={true}
            className="flex-1 text-center py-2.5 px-3 border border-[#A44E36]/30 text-[#A44E36] font-bold text-xs tracking-wider uppercase rounded-xl hover:bg-[#FAF0E4]/50 transition-colors"
          >
            Details
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center bg-[#A44E36] text-white py-2.5 px-3 font-bold text-xs tracking-wider uppercase rounded-xl hover:bg-[#8a3f2b] transition-colors shadow-sm flex items-center justify-center gap-1.5"
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
          <Image 
            src="/placeholders/hero-bg.webp" 
            alt="Handcrafted Moroccan Rugs" 
            fill 
            priority
            sizes="100vw"
            className="w-full h-full object-cover opacity-60" 
          />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 text-white">
          <span className="block text-sm md:text-base tracking-[0.2em] uppercase mb-4 text-[#FAF0E4]">HAND MADE BY MOROCCAN RURAL WOMEN</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">WOVEN BY HAND. <br />ROOTED IN HERITAGE.</h1>
          <p className="text-lg md:text-xl max-w-lg mb-6 text-gray-100">
            Berber women read symbols in nature — mountains, trees, plants, animals, insects — then weave them into carpets, guided only by imagination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/rugs" prefetch={true} className="bg-[#A44E36] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors text-center rounded shadow">
              Explore Our Rugs
            </Link>
            <Link href="/custom-order" prefetch={true} className="border border-white text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#A44E36] transition-colors text-center rounded">
              Custom Order
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT COOPERATIVE */}
      <AboutCooperative />

      {/* 3. OUR TOP RUGS */}
    {/* 3. OUR TOP RUGS */}
    <section className="bg-[#FAF0E4] py-20 px-4 md:px-8 border-b border-[#A44E36]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase mb-2 block">
              EXCEPTIONAL PIECES
            </span>
            
            {/* Titre principal unifié (H2) */}
            <h2 className="font-serif text-3xl md:text-4xl tracking-widest text-gray-950 uppercase font-normal mb-3">
              Our Berber Rugs
            </h2>

            <p className="text-xs md:text-sm text-gray-600 max-w-2xl mb-6 leading-relaxed">
  Woven by rural Amazigh women in the Siroua Mountains near Taznakht,
  Morocco, each rug carries generations of ancestral craftsmanship.
  Taznakht, a historic center of Moroccan carpet weaving, is celebrated
  for its five distinctive rug traditions, each shaped by the landscapes,
  symbols and stories of the region. Long appreciated for their artistry
  and cultural value, these exceptional rugs have found their place in
  refined interiors and distinguished private collections.
</p>
            <Link 
              href="/rugs" 
              prefetch={true}
              className="bg-[#A44E36] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors text-center rounded-xl shadow-sm"
            >
              View All Rugs &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rugsData.slice(0, 3).map((rug) => (
              <ProductCard key={rug.id} rug={rug} />
            ))}
          </div>

          <div className="mt-14 bg-[#FFF8EF] border border-[#A44E36]/25 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase mb-2 block">
                MADE TO ORDER
              </span>
              
              {/* Titre encadré (H3) unifié avec la même police serif et responsive fluide */}
              <h3 className="font-serif text-2xl md:text-3xl tracking-wide text-gray-950 font-normal mb-2">
                Can't find the right size or design?
              </h3>

              <p className="text-gray-600 text-xs md:text-sm max-w-xl">
                We also weave custom Berber rugs — dimensions, color palettes, and symbols of your choice, crafted by hand by our women artisans.
              </p>
            </div>
            <Link
              href="/custom-order"
              prefetch={true}
              className="whitespace-nowrap bg-[#A44E36] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors rounded-xl shadow-md"
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

            {/* Titre unifié et optimisé pour le mobile (taille fluide + retour à la ligne propre) */}
            <h2 className="font-serif text-3xl md:text-4xl tracking-widest text-gray-950 uppercase font-normal mb-3">
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