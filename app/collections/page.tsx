import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { collectionsData } from "@/data/products";

// 🌟 Métadonnées SEO et titre accrocheur en anglais pour Google & OpenGraph
export const metadata: Metadata = {
  title: "Handmade Moroccan Berber Rug Collections | Ouaouzguite, Glaoui & Akhenif",
  description: "Explore the authentic collections of handmade Moroccan Berber rugs from Taznakht. Discover unique Ouaouzguite, Glaoui, Akhenif, and Zanifi master-woven carpets.",
  keywords: [
    "Moroccan Berber rug collections",
    "handmade Berber carpets",
    "Ouaouzguite rugs",
    "Glaoui carpets",
    "Akhenif rugs",
    "Taznakht traditional carpets",
    "authentic Moroccan wool rugs"
  ],
  openGraph: {
    title: "Handmade Moroccan Berber Rug Collections | Cooperative Berber Rugs",
    description: "Discover our authentic collections of traditional Moroccan carpets hand-woven by rural women artisans in the Atlas mountains.",
    url: "https://www.rugsberber.com/collections",
  },
  alternates: {
    canonical: "https://www.rugsberber.com/collections",
  },
};

const ROTATION_SPEED = 2500; // 2.5s

// Composant carte individuelle avec le composant <Image> de Next.js
function CollectionCard({ collection }: { collection: (typeof collectionsData)[number] }) {
  // Note: Pour une gestion interactive du survol avec Next/Image multiples, 
  // on conserve la structure fluide tout en optimisant le rendu.
  return (
    <Link
      href={`/rugs?category=${collection.id}`}
      className="bg-[#FFF8EF] border border-[#A44E36]/20 rounded-3xl flex flex-col h-full shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer flex-shrink-0 w-[90%] sm:w-[380px] md:w-full snap-center p-4 sm:p-6"
      aria-label={`Discover the ${collection.name} Berber rug collection`}
    >
      {/* Zone image avec Next/Image */}
      <div className="relative aspect-[4/5] sm:aspect-[4/4] w-full rounded-2xl overflow-hidden bg-[#E8DED2] mb-6">
        <Image
          src={collection.images[0]}
          alt={`Handmade Moroccan Berber rug collection ${collection.name}`}
          fill
          sizes="(max-width: 768px) 90vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Contenu de la carte */}
      <div className="flex flex-col flex-grow text-center px-2">
        <span className="text-[10px] font-bold tracking-[0.25em] text-[#A44E36] uppercase mb-1">
          {collection.subtitle}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-gray-900 mb-3 group-hover:text-[#A44E36] transition-colors">
          {collection.name}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 flex-grow max-w-sm mx-auto">
          {collection.description}
        </p>

        <div className="pt-4 border-t border-[#A44E36]/10 flex items-center justify-center gap-2">
          <span className="text-[#A44E36] font-bold text-xs tracking-widest uppercase">
            Explore Collection
          </span>
          <span className="text-base text-[#A44E36] transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}

export default function CollectionsPage() {
  return (
    <section className="bg-[#FAF0E4] py-16 md:py-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* En-tête de la page */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase mb-3 block">
            OUR HERITAGE & CRAFT
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-gray-900 tracking-wide mb-4 uppercase">
            Explore Our Masterpiece Collections
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base px-2 leading-relaxed">
            Discover our authentic collections of traditional Moroccan Berber rugs, 
            hand-woven by rural women artisans in the Atlas mountains. Each collection 
            carries a unique tribal heritage, pure living wool, and timeless design.
          </p>
        </div>

        {/* Grille des collections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {collectionsData.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>

      </div>
    </section>
  );
}