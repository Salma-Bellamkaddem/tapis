// src/components/StoryAndCraft.tsx
export default function StoryAndCraft() {
  return (
    <div className="bg-[#FAF9F6] flex flex-col gap-0 w-full">
      {/* Row 1 : Texte gauche, Image droite */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[500px]">
        <div className="w-full md:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-[#F3F0EA]">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6 uppercase leading-snug">
            Every rug <br /> tells a story.
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Each rug is more than just a beautiful piece for your home. It carries the story of the weaver, her culture, symbols, and traditions passed down through generations.
          </p>
          <a href="/story" className="text-[#A44E36] font-bold text-sm tracking-widest uppercase hover:text-[#8a3f2b] flex items-center gap-2">
            Discover the story <span>&rarr;</span>
          </a>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-full">
          <img src="/placeholders/rug-detail.jpg" alt="Rug detail" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Row 2 : Image gauche, Texte droite */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[500px]">
        <div className="w-full md:w-1/2 h-[300px] md:h-full order-2 md:order-1">
          <img src="/placeholders/woman-weaving.jpg" alt="Woman weaving" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-[#F3F0EA] order-1 md:order-2">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6 uppercase leading-snug">
            Made by women.<br /> Made by hand.
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Our rugs are woven by skilled women artisans in rural Morocco. By supporting our cooperative, you help preserve traditional craftsmanship and empower local communities.
          </p>
          <a href="/story" className="text-[#A44E36] font-bold text-sm tracking-widest uppercase hover:text-[#8a3f2b] flex items-center gap-2">
            Discover our story <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}