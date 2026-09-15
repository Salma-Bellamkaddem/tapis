"use client";

import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "WOOL SELECTION",
  
    desc: "We carefully select the finest living sheep's wool from the Siroua Mountains (moutons du Siroua), prized for its natural resilience and comforting warmth. HAND MADE BY MOROCCAN RURAL WOMEN.", 
    
    image: "/placeholders/wool-selection.jpeg",
    icon: "🐑"
  },
  {
    num: "02",
    title: "PREPARATION & SYMBOLS",
    desc: "Washed, carded, and spun by hand, the yarn is ready as artisan women draw symbols from nature (mountains, trees, plants, animals, insects...) directly from their imagination.",
    image: "/placeholders/preparation.png",
    icon: "🧶"
  },
  {
    num: "03",
    title: "TRADITIONAL WEAVING",
    desc: "Handcrafted since 2003 across 13 families (3 in Taznakhte, 10 in nearby villages) using ancestral techniques, knots, and organic dyes.",
    image: "/placeholders/weaving.jpg",
    icon: "🧵"
  },
  {
    num: "04",
    title: "FINAL TOUCH",
    desc: "Each piece is sun-dried, rigorously inspected for quality, and finished with care before bringing the soul of Morocco to your home. HAND MADE BY MOROCCAN RURAL WOMEN.",
    image: "/placeholders/final-touch.jpg",
    icon: "✨"
  }
];

export default function WoolToRug() {
  return (
    <section className="relative bg-[#FAF0E4] py-24 px-4 md:px-8 overflow-hidden border-b border-[#A44E36]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête avec Storytelling */}
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase mb-3 block">
            HERITAGE & CRAFTSMANSHIP — EST. 2003
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#101827] uppercase tracking-wide mb-4">
            FROM WOOL TO RUG
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-[#A44E36]/30"></span>
            <span className="text-[#A44E36] text-lg">❖</span>
            <span className="w-12 h-px bg-[#A44E36]/30"></span>
          </div>

          <p className="text-gray-700 text-sm md:text-base font-serif italic max-w-2xl mx-auto mb-4">
            Each rug tells a profound story of tradition, patience, and passion. Carried out by 13 families (3 in Taznakhte and 10 living in surrounding villages), every creation reflects a unique heritage.
          </p>
          <p className="text-xs text-gray-600 max-w-xl mx-auto uppercase tracking-wider font-semibold">
            Berber women obtain symbols in nature (mountains, trees, plants, animals, insects...) then they put them into carpets with their imaginations like drawing.
          </p>
        </div>

        {/* Étapes (Grille avec style Arches) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              
              {/* Image en forme d'arche */}
              <div className="relative w-full h-[320px] rounded-t-[140px] rounded-b-2xl overflow-hidden shadow-[0_15px_35px_rgba(70,40,20,0.1)] bg-[#E8DED2] mb-10 border-4 border-[#FFF8EF]">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Cercle avec icône par-dessus l'image en bas */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#A44E36] border-4 border-[#FAF0E4] text-white flex items-center justify-center text-lg shadow-md">
                  {step.icon}
                </div>
              </div>

              {/* Numéro et Titre */}
              <span className="font-serif text-2xl text-[#A44E36] font-bold mb-1 mt-2">
                {step.num}
              </span>
              <h3 className="font-serif text-base text-gray-900 tracking-wide uppercase font-bold mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-600 leading-relaxed max-w-[260px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bouton de bas de section */}
        <div className="text-center">
          <Link 
            href="/rugs" 
            className="inline-flex items-center gap-3 border border-[#A44E36] text-[#A44E36] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#A44E36] hover:text-white transition-all rounded-full shadow-sm hover:scale-105"
          >
            <span>DISCOVER OUR RUGS</span>
            <span className="text-base">&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}