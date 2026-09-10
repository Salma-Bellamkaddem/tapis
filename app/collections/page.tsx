import Link from "next/link";
import { collectionsData } from "@/data/products";

export default function CollectionsPage() {
  return (
    <section className="bg-[#FAF0E4] py-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de la page */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase mb-3 block">
            OUR HERITAGE
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-gray-900 tracking-wide mb-4 uppercase">
            Explore Our Collections
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base">
            Discover our authentic Berber carpet collections, each shaped by Moroccan craftsmanship, tradition and unique design.
          </p>
        </div>

        {/* Grille des collections cliquables */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionsData.map((collection) => (
            <Link 
              key={collection.id} 
              href={`/rugs?category=${collection.id}`}
              className="bg-[#FFF8EF] border border-[#A44E36]/20 rounded-2xl flex flex-col h-full shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Image de la collection */}
              <div className="relative aspect-[4/3] w-full bg-[#E8DED2] overflow-hidden">
                <img
                  src={collection.images[0]}
                  alt={`${collection.name} Berber Carpet`}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Contenu */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#A44E36] uppercase mb-1">
                  {collection.subtitle}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold tracking-wide text-gray-900 mb-3 group-hover:text-[#A44E36] transition-colors">
                  {collection.name}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                  {collection.description}
                </p>
                
                <div className="pt-4 border-t border-[#A44E36]/10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[#A44E36] font-bold text-xs tracking-widest uppercase">
                    Explore Collection
                  </span>
                  <span className="text-base text-[#A44E36] transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}