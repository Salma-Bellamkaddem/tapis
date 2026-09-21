// src/components/Features.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7 mx-auto text-[#A44E36]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12c0-3.314 2.686-6 6-6a6 6 0 01-6 6zM9 12c-3.314 0-6-2.686-6-6a6 6 0 016 6zm0 0v8" />
        </svg>
      ),
      title: "Natural Materials",
      desc: "100% pure wool and natural dyes."
    },
    {
      icon: (
        <svg className="w-7 h-7 mx-auto text-[#A44E36]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      ),
      title: "Handmade",
      desc: "Each rug is hand-knotted, piece by piece."
    },
    {
      icon: (
        <svg className="w-7 h-7 mx-auto text-[#A44E36]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Empowering Women",
      desc: "Direct support for rural women artisans."
    },
    {
      icon: (
        <svg className="w-7 h-7 mx-auto text-[#A44E36]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
          <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v10M7 12h10" />
        </svg>
      ),
      title: "Unique Masterpieces",
      desc: "No two rugs are identical, each tells a story."
    },
    {
      icon: (
        <svg className="w-7 h-7 mx-auto text-[#A44E36]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
          <path d="M8 20h2m4 0h2m-6-1a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2zm-8-3V7a2 2 0 012-2h6a2 2 0 012 2v9h-8zm8-7h4l2 3v4h-6V7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Worldwide Shipping",
      desc: "Secure international delivery to Europe, USA & Africa."
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
            <svg className="w-3 h-3 text-[#A44E36]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
        <div className="relative w-full md:w-1/3 h-[300px] md:h-full">
          <Image 
            src="/placeholders/rugs-stack.webp" 
            alt="Stacks of Berber rugs" 
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover" 
          />
        </div>
        
        {/* Centre - Texte et Bouton WhatsApp */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-8 md:p-12 text-center bg-[#F3F0EA]">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-4 uppercase tracking-wide">
            Looking for a unique rug?
          </h2>
          <p className="text-gray-600 text-sm mb-8 leading-relaxed max-w-xs mx-auto">
            Contact us directly on WhatsApp, we are here to assist your custom order.
          </p>
          <a 
            href="https://wa.me/212767149114?text=Hello,%20I%20am%20interested%20in%20a%20custom%20berber%20rug." 
            target="_blank"

            rel="noopener noreferrer"
          
            aria-label="Chat with Cooperative Berber Rugs on WhatsApp"
          
            className="inline-flex items-center justify-center gap-2 border border-[#A44E36] text-[#A44E36] px-4 py-2.5 text-xs font-bold hover:bg-[#A44E36] hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A44E36]"
          
          >
          
            <svg
          
              className="w-[17px] h-[17px] shrink-0"
          
              viewBox="0 0 24 24"
          
              fill="currentColor"
          
              aria-hidden="true"
          
              focusable="false"
          
            >
          
              <path
          
                d="M12.04 2C6.52 2 2.03 6.49 2.03 12c0 1.76.46 3.48 1.33 5.01L2 22l5.14-1.35A9.96 9.96 0 0 0 12.04 22C17.55 22 22 17.51 22 12S17.55 2 12.04 2Zm0 18.2c-1.57 0-3.1-.42-4.44-1.22l-.32-.19-3.05.8.82-2.97-.21-.32A8.2 8.2 0 0 1 3.82 12c0-4.54 3.69-8.23 8.22-8.23 4.54 0 8.22 3.69 8.22 8.23 0 4.53-3.69 8.2-8.22 8.2Zm4.51-6.15c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.12-.12.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.55-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.43.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z"
          
              />
          
            </svg>
            Order on WhatsApp
          </a>
        </div>
        



        {/* Image Droite (Vase) */}
        <div className="relative w-full md:w-1/3 h-[300px] md:h-full bg-[#FAF9F6]">
          <Image 
            src="/placeholders/img76.jpeg" 
            alt="Moroccan tapis " 
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover" 
          />
        </div>

      </section>

    </div>
  );
}