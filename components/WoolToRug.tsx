import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "WOOL SELECTION",
    desc: "We select the finest wool from local sheep, known for its softness, strength, and durability.",
    image: "/placeholders/wool-selection.jpg", // Mettez votre image correspondante dans public/placeholders/
    icon: "🐑"
  },
  {
    num: "02",
    title: "PREPARATION",
    desc: "Wool is carefully washed, carded, and spun by hand to prepare strong, natural yarn.",
    image: "/placeholders/preparation.png",
    icon: "🧶"
  },
  {
    num: "03",
    title: "TRADITIONAL WEAVING",
    desc: "Skilled artisans hand-weave each rug on traditional looms using time-honored techniques and natural dyes.",
    image: "/placeholders/weaving.jpg",
    icon: "🧵"
  },
  {
    num: "04",
    title: "FINAL TOUCH",
    desc: "Each rug is sun dried, inspected for quality, and finished with care before it reaches your home.",
    image: "/placeholders/final-touch.jpg",
    icon: "✨"
  }
];

export default function WoolToRug() {
  return (
    <section className="relative bg-[#FAF0E4] py-24 px-4 md:px-8 overflow-hidden border-b border-[#A44E36]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase mb-3 block">
            CRAFTSMANSHIP
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#101827] uppercase tracking-wide mb-4">
            FROM WOOL TO RUG
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-px bg-[#A44E36]/30"></span>
            <span className="text-[#A44E36] text-lg">❖</span>
            <span className="w-12 h-px bg-[#A44E36]/30"></span>
          </div>

          <p className="text-gray-700 text-sm md:text-base font-serif italic max-w-lg mx-auto">
            Each rug is a story of tradition, patience, and passion. Discover the meticulous steps behind our craftsmanship.
          </p>
        </div>

        {/* Étapes (Grille avec style Arches) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              
              {/* Image en forme d'arche (rounded-t-[100px]) */}
              <div className="relative w-full h-[320px] rounded-t-[140px] rounded-b-2xl overflow-hidden shadow-[0_15px_35px_rgba(70,40,20,0.1)] bg-[#E8DED2] mb-10 border-4 border-[#FFF8EF]">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Cercle avec icône/numéro par-dessus l'image en bas */}
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