"use client";

import Link from "next/link";
import { useState } from "react";
import { collectionsData } from "@/data/products";

export default function CollectionsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Fonction pour détecter la carte active lors du scroll horizontal sur mobile
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const cardWidth = e.currentTarget.offsetWidth * 0.85; // Largeur approximative d'une carte
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <section className="bg-[#FAF0E4] py-16 md:py-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de la page */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase mb-3 block">
            OUR HERITAGE
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-gray-900 tracking-wide mb-4 uppercase">
            Explore Our Collections
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base px-2">
            Discover our authentic Berber carpet collections, each shaped by Moroccan craftsmanship, tradition and unique design.
          </p>
        </div>

        {/* Grille / Carrousel tactile optimisé pour mobile */}
        <div 
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 pt-2 px-4 md:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
        >
          {collectionsData.map((collection) => (
            <Link 
              key={collection.id} 
              href={`/rugs?category=${collection.id}`}
              className="bg-[#FFF8EF] border border-[#A44E36]/20 rounded-3xl flex flex-col h-full shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer flex-shrink-0 w-[90%] sm:w-[380px] md:w-full snap-center p-4 sm:p-6"
            >
              {/* Image grand format avec effet ovale / arrondi élégant */}
              <div className="relative aspect-[4/5] sm:aspect-[4/4] w-full rounded-2xl overflow-hidden bg-[#E8DED2] mb-6">
                <img
                  src={collection.images[0]}
                  alt={`${collection.name} Berber Carpet`}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Contenu de la carte */}
              <div className="flex flex-col flex-grow text-center px-2">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#A44E36] uppercase mb-1">
                  {collection.subtitle}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-gray-900 mb-3 group-hover:text-[#A44E36] transition-colors">
                  {collection.name}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 flex-grow max-w-sm mx-auto">
                  {collection.description}
                </p>
                
                <div className="pt-4 border-t border-[#A44E36]/10 flex items-center justify-center gap-2">
                  <span className="text-[#A44E36] font-bold text-xs tracking-widest uppercase">
                    Explore Collection
                  </span>
                  <span className="text-base text-[#A44E36] transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Indicateurs de pagination (Dots) pour mobile */}
        <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
          {collectionsData.map((_, idx) => (
            <span 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? "w-6 bg-[#A44E36]" : "w-1.5 bg-[#A44E36]/30"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}