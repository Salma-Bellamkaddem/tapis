// src/components/StoryAndCraft.tsx
export default function StoryAndCraft() {
  return (
    <div className="bg-[#FAF9F6] flex flex-col gap-0 w-full">
      
      {/* Row 1 — The story behind the symbols */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[550px]">
        
        {/* Text */}
        <div className="w-full md:w-1/2 p-10 lg:p-20 flex flex-col justify-center bg-[#F3F0EA]">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#A44E36] uppercase mb-2">
            EST. 2003 — 13 FAMILIES · TAZNAKHT & SURROUNDING VILLAGES
          </span>

          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4 uppercase leading-snug">
            Every rug <br /> tells a living story.
          </h2>

          <p className="text-gray-700 mb-3 max-w-lg text-sm leading-relaxed">
            In the rural villages of Morocco’s Siroua Mountains, carpets are
            born from a deep connection to the land. Amazigh women draw
            inspiration from the world around them — mountains, trees,
            plants, animals, insects, scorpions and ancient Amazigh symbols —
            transforming these elements into distinctive woven motifs.
          </p>

          <p className="text-gray-600 mb-6 max-w-lg text-xs leading-relaxed italic">
            Rather than following formal patterns, each weaver gives shape to
            these symbols through memory, imagination and inherited knowledge.
            Geometric forms echo the visual language found in traditional
            Amazigh jewellery, textiles and ancestral art, making every rug a
            unique expression of its maker and her heritage.
          </p>

          <p className="text-[#A44E36] font-semibold text-xs tracking-wider uppercase mb-6">
            HANDMADE BY RURAL AMAZIGH WOMEN IN MOROCCO.
          </p>

          <a
            href="/story"
            className="text-[#A44E36] font-bold text-sm tracking-widest uppercase hover:text-[#8a3f2b] flex items-center gap-2"
          >
            Discover the story <span>&rarr;</span>
          </a>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-full">
          <img
            src="/placeholders/rug-detail.jpg"
            alt="Handwoven Moroccan Berber rug featuring traditional Amazigh symbols"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Row 2 — The craft and transmission */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[550px]">
        
        {/* Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-full order-2 md:order-1">
          <img
            src="/placeholders/artisans.jpg"
            alt="Rural Amazigh women handweaving carpets in the Siroua Mountains of Morocco"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 p-10 lg:p-20 flex flex-col justify-center bg-[#F3F0EA] order-1 md:order-2">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#A44E36] uppercase mb-2">
            AUTHENTIC HERITAGE · HANDWOVEN IN TAZNAKHT
          </span>

          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4 uppercase leading-snug">
            Drawn from nature.<br /> Woven by hand.
          </h2>

          <p className="text-gray-700 mb-3 max-w-lg text-sm leading-relaxed">
            Like an artist working on a blank canvas, each weaver translates
            the landscapes and everyday life of the Siroua Mountains into a
            unique visual language. The rugged peaks, natural forms and
            symbols of the region become patterns through an intuitive process
            shaped by imagination and tradition.
          </p>

          <p className="text-gray-600 mb-6 max-w-lg text-xs leading-relaxed italic">
            Across our 13 families in Taznakht and the surrounding villages,
            this craft is passed from one generation to the next. Every knot
            carries knowledge, identity and personal expression — preserving
            a living Moroccan heritage while giving each woman the freedom to
            create in her own way.
          </p>

          <p className="text-[#A44E36] font-semibold text-xs tracking-wider uppercase mb-6">
            TRADITIONAL WOOL · HANDWOVEN IN THE SIROUA MOUNTAINS
          </p>

          <a
            href="/story"
            className="text-[#A44E36] font-bold text-sm tracking-widest uppercase hover:text-[#8a3f2b] flex items-center gap-2"
          >
            Discover our story <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}