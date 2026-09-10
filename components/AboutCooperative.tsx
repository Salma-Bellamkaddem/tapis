import Link from "next/link";

export default function AboutCooperative() {
  return (
    <section className="bg-[#FAF0E4] py-24 px-4 md:px-8 border-b border-[#A44E36]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        {/* Texte à gauche */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase mb-3 block">
            OUR COOPERATIVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#101827] uppercase mb-6 leading-tight">
            Rooted in tradition, empowered by women.
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            Based in the heart of Morocco, our cooperative is a sanctuary of ancestral craftsmanship. We bring together passionate women artisans who hand-weave each Berber carpet using pure living sheep's wool and natural dyes. Every thread tells a story of heritage, autonomy, and cultural preservation.
          </p>
          <div>
            <Link 
              href="/story" 
              className="inline-flex items-center gap-2 bg-[#A44E36] text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#8F3E29] transition-all rounded-full shadow-md hover:scale-105"
            >
              <span>Discover Our Story</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Photo à droite avec un design distinctif (cadre élégant) */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative mx-auto max-w-[500px] h-[380px] md:h-[440px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(70,40,20,0.15)] border-4 border-[#FFF8EF]">
            <img 
              src="/placeholders/artisans-group.jpg" 
              alt="Moroccan Women Cooperative" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
            {/* Petit badge décoratif */}
            <div className="absolute bottom-6 left-6 bg-[#FFF8EF]/90 backdrop-blur-sm px-4 py-2 rounded-2xl border border-[#A44E36]/20 shadow-sm">
              <span className="text-[10px] font-bold tracking-widest text-[#A44E36] uppercase block">100% Handmade</span>
              <span className="font-serif text-xs text-gray-900">Authentic Moroccan Heritage</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}