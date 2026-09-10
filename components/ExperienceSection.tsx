// src/components/ExperienceSection.tsx
"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ExperienceSection() {
  const [count, setCount] = useState({ year: 1990, exp: 0, artisans: 0, quality: 0 });

  useEffect(() => {
    // Animation fluide des compteurs au chargement de la section
    const timer = setInterval(() => {
      setCount((prev) => ({
        year: prev.year < 2003 ? prev.year + 2 : 2003,
        exp: prev.exp < 60 ? prev.exp + 5 : 60,
        artisans: prev.artisans < 200 ? prev.artisans + 15 : 200,
        quality: prev.quality < 100 ? prev.quality + 10 : 100,
      }));
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#faf0e4] py-16 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Sur-titre discret */}
        <p className="text-[#A44E36] text-[11px] font-bold tracking-[0.25em] uppercase mb-4">
          COOPERATIVE BERBER RUGS
        </p>

        {/* Titre principal */}
        <h2 className="text-3xl md:text-4xl text-gray-900 font-serif mb-4 leading-tight uppercase">
          Over 60 years of experience, <br />
          <span className="italic text-[#A44E36]">the very same thread</span>
        </h2>

        {/* Paragraphe court */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          Since 2003, our cooperative has brought together nearly 200 women artisans with over 60 years of combined expertise dedicated to preserving Moroccan heritage.
        </p>

        {/* Grille de statistiques compacte */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-300 mb-10 pb-6 border-b border-gray-300">
          
          <div className="flex flex-col items-center pt-4 md:pt-0">
            <span className="text-[#A44E36] text-3xl md:text-4xl font-serif mb-1">{count.year}</span>
            <span className="text-gray-500 text-[10px] tracking-widest uppercase font-semibold">Founded</span>
          </div>
          
          <div className="flex flex-col items-center pt-4 md:pt-0">
            <span className="text-[#A44E36] text-3xl md:text-4xl font-serif mb-1">{count.exp}+</span>
            <span className="text-gray-500 text-[10px] tracking-widest uppercase font-semibold">Years Experience</span>
          </div>
          
          <div className="flex flex-col items-center pt-4 md:pt-0">
            <span className="text-[#A44E36] text-3xl md:text-4xl font-serif mb-1">{count.artisans}</span>
            <span className="text-gray-500 text-[10px] tracking-widest uppercase font-semibold">Artisans</span>
          </div>
          
          <div className="flex flex-col items-center pt-4 md:pt-0">
            <span className="text-[#A44E36] text-3xl md:text-4xl font-serif mb-1">{count.quality}%</span>
            <span className="text-gray-500 text-[10px] tracking-widest uppercase font-semibold">Handcrafted</span>
          </div>

        </div>

        {/* Lien de redirection */}
        <Link 
          href="/story" 
          className="inline-flex items-center gap-2 text-gray-900 font-bold text-xs tracking-widest uppercase hover:text-[#A44E36] transition-colors"
        >
          Discover Our Story <span>&rarr;</span>
        </Link>
        
      </div>
    </section>
  );
}