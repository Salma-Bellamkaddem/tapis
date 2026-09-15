// src/components/StoryAndCraft.tsx
export default function StoryAndCraft() {
  return (
    <div className="bg-[#FAF9F6] flex flex-col gap-0 w-full">
      {/* Row 1 : Texte gauche, Image droite (L'histoire des symboles et de la nature) */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[550px]">
        <div className="w-full md:w-1/2 p-10 lg:p-20 flex flex-col justify-center bg-[#F3F0EA]">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#A44E36] uppercase mb-2">
            EST. 2003 — 13 FAMILIES (3 IN TAZNAKHTE, 10 IN NEARBY VILLAGES)
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4 uppercase leading-snug">
            Every rug <br /> tells a living story.
          </h2>
          <p className="text-gray-700 mb-3 max-w-lg text-sm leading-relaxed">
            Far from urban distractions, life in the rural villages of the Siroua mountains shapes a profound connection to the earth. Berber women obtain symbols directly from Nature—mountains, trees, plants, animals, insects, scorpions, and ancient Amazigh letters.
          </p>
          <p className="text-gray-600 mb-6 max-w-lg text-xs leading-relaxed italic">
            With no formal design blueprints, they weave these elements into carpets through pure imagination, echoing the geometric motifs found in traditional silver jewelry and ancestral tribal tattoos.
          </p>
          <p className="text-[#A44E36] font-semibold text-xs tracking-wider uppercase mb-6">
            HAND MADE BY MOROCCAN RURAL WOMEN.
          </p>
          <a href="/story" className="text-[#A44E36] font-bold text-sm tracking-widest uppercase hover:text-[#8a3f2b] flex items-center gap-2">
            Discover the story <span>&rarr;</span>
          </a>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-full">
          <img src="/placeholders/rug-detail.jpg" alt="Berber symbols and rug craftsmanship" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Row 2 : Image gauche, Texte droite (L'art de l'imagination et de la transmission) */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[550px]">
        <div className="w-full md:w-1/2 h-[300px] md:h-full order-2 md:order-1">
          <img src="/placeholders/artisans.jpg" alt="Moroccan rural women weaving with wool from Siroua" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-10 lg:p-20 flex flex-col justify-center bg-[#F3F0EA] order-1 md:order-2">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#A44E36] uppercase mb-2">
            AUTHENTIC HERITAGE & SOUL
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4 uppercase leading-snug">
            Drawn from nature.<br /> Woven by hand.
          </h2>
          <p className="text-gray-700 mb-3 max-w-lg text-sm leading-relaxed">
            Just like an artist drawing on a blank canvas, each weaver translates her daily environment—the rustling trees, the rugged peaks of Siroua, and the wildlife—into an intricate textile language.
          </p>
          <p className="text-gray-600 mb-6 max-w-lg text-xs leading-relaxed italic">
            Working collectively across our 13 cooperative families, these women preserve a heritage where every knot reflects identity, resilience, and personal expression passed down through generations.
          </p>
          <p className="text-[#A44E36] font-semibold text-xs tracking-wider uppercase mb-6">
            Wool of living sheep from Siroua Mountains.
          </p>
          <a href="/story" className="text-[#A44E36] font-bold text-sm tracking-widest uppercase hover:text-[#8a3f2b] flex items-center gap-2">
            Discover our story <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}