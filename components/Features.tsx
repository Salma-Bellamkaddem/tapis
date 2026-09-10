// src/components/Features.tsx
import Link from 'next/link';

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7 mx-auto text-[#A44E36]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12c0-3.314 2.686-6 6-6a6 6 0 01-6 6zM9 12c-3.314 0-6-2.686-6-6a6 6 0 016 6zm0 0v8" />
        </svg>
      ),
      title: "Natural Materials",
      desc: "100% natural wool, vegetable dyes."
    },
    {
      icon: (
        <svg className="w-7 h-7 mx-auto text-[#A44E36]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      ),
      title: "Handmade",
      desc: "Each rug is handwoven, piece by piece."
    },
    {
      icon: (
        <svg className="w-7 h-7 mx-auto text-[#A44E36]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Supporting Women",
      desc: "You help improve the lives of women artisans."
    },
    {
      icon: (
        <svg className="w-7 h-7 mx-auto text-[#A44E36]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
          <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v10M7 12h10" />
        </svg>
      ),
      title: "Unique Pieces",
      desc: "No two rugs are identical, each has its own story."
    },
    {
      icon: (
        <svg className="w-7 h-7 mx-auto text-[#A44E36]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
          <path d="M8 20h2m4 0h2m-6-1a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2zm-8-3V7a2 2 0 012-2h6a2 2 0 012 2v9h-8zm8-7h4l2 3v4h-6V7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Fast Delivery",
      desc: "Fast shipping across Morocco, carefully packaged."
    }
  ];

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. Section des icônes (Pourquoi choisir nos tapis) */}
      <section className="bg-[#FAF9F6] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Titre centralisé avec petit losange */}
          <div className="flex justify-center items-center gap-2 mb-12">
            <h3 className="text-[11px] font-bold tracking-[0.15em] text-gray-800 uppercase">
              Why choose our rugs?
            </h3>
            <svg className="w-3 h-3 text-[#A44E36]" fill="currentColor" viewBox="0 0 24 24">
              <rect x="12" y="3" width="12.7" height="12.7" transform="rotate(45 12 3)" />
            </svg>
          </div>

          {/* Grille des 5 colonnes séparées par des bordures */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 divide-y sm:divide-y-0 md:divide-x divide-gray-200">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center px-4 py-8 md:py-0">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h4 className="text-[11px] font-bold tracking-widest uppercase mb-3 text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-[13px] leading-relaxed max-w-[180px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* 2. Section CTA (Envie d'un tapis unique) */}
      <section className="w-full flex flex-col md:flex-row items-stretch h-auto md:h-[400px]">
        
        {/* Image Gauche (Piles de tapis) */}
        <div className="w-full md:w-1/3 h-[300px] md:h-full">
          <img 
            src="/placeholders/rugs-stack.webp" 
            alt="Stacks of Berber rugs" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Centre - Texte et Bouton WhatsApp */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-8 md:p-12 text-center bg-[#F3F0EA]">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-4 uppercase tracking-wide">
            Looking for a unique rug?
          </h2>
          <p className="text-gray-600 text-sm mb-8 leading-relaxed max-w-xs mx-auto">
            Contact us directly on WhatsApp, we are here to advise you.
          </p>
          <a 
            href="https://wa.me/212600000000" 
            target="_blank"
            rel="noreferrer"
            className="bg-[#A44E36] text-white px-6 py-3.5 text-xs font-bold tracking-widest hover:bg-[#8a3f2b] transition-colors flex items-center justify-center gap-2 rounded-sm w-full max-w-[280px]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 21c-1.618 0-3.197-.417-4.588-1.209l-.328-.186-3.411.894.912-3.326-.205-.325A8.922 8.922 0 013.119 12c0-4.963 4.044-9 9.031-9 4.981 0 9.032 4.037 9.032 9s-4.051 9-9.151 9zM12.031 4.717a7.288 7.288 0 00-7.29 7.283c0 1.458.379 2.879 1.1 4.135l.138.238-.54 1.97 2.015-.528.23.136a7.258 7.258 0 003.957 1.156c4.015 0 7.284-3.264 7.284-7.28 0-4.017-3.27-7.283-7.284-7.283zm3.998 9.948c-.219-.11-1.296-.64-1.498-.713-.201-.074-.349-.11-.497.111-.148.22-.567.712-.695.859-.128.147-.256.165-.475.055-.219-.11-.925-.342-1.761-1.091-.65-.583-1.089-1.303-1.218-1.523-.128-.22-.014-.339.095-.448.1-.1.219-.256.328-.384.11-.128.146-.22.219-.366.074-.146.037-.274-.018-.384-.055-.11-.497-1.199-.681-1.642-.18-.43-.362-.372-.497-.378-.128-.007-.274-.007-.421-.007z"/>
            </svg>
            Order on WhatsApp
          </a>
        </div>
        
        {/* Image Droite (Vase) */}
        <div className="w-full md:w-1/3 h-[300px] md:h-full bg-[#FAF9F6]">
          <img 
            src="/placeholders/vase.webp" 
            alt="Decorative vase" 
            className="w-full h-full object-cover" 
          />
        </div>

      </section>

    </div>
  );
}