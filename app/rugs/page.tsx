"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { rugsData } from "@/data/products";

export default function AllRugsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");

  // 1. Dérivation directe de la catégorie depuis l'URL (fini le useEffect et le setState bloquant)
  const selectedCategory = categoryParam 
    ? categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1) 
    : "All";

  // 2. Filtrer les tapis selon la catégorie active dans l'URL
  const filteredRugs = selectedCategory === "All" 
    ? rugsData 
    : rugsData.filter(rug => rug.category.toLowerCase() === selectedCategory.toLowerCase());

  const categoriesList = ['All', 'Ouaouzguite', 'Glaoui', 'Mouzaïk', 'Akhenif', 'Tapis Tableau', 'Zanifi', 'Beni Ourain', 'Azilal'];

  // 3. Gérer le changement de catégorie en modifiant l'URL proprement
  const handleCategoryChange = (cat: string) => {
    if (cat === "All") {
      router.push("/rugs");
    } else {
      router.push(`/rugs?category=${cat.toLowerCase()}`);
    }
  };

  return (
    <div className="bg-[#FAF9F6] w-full pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[300px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 bg-gray-900">
          <div className="w-full h-full bg-[#1A1512] opacity-90" />
        </div>
        <div className="relative z-10 text-white px-4">
          <h1 className="font-serif text-4xl md:text-5xl mb-3 tracking-widest uppercase">
            {selectedCategory === "All" ? "All Rugs" : `${selectedCategory} Collection`}
          </h1>
          <p className="text-sm md:text-base text-gray-300">Discover our collection of handmade Berber rugs.</p>
        </div>
      </section>

      {/* 2. MAIN LAYOUT */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row gap-12">
        
        {/* SIDEBAR (Filtres catégories) */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="mb-10">
            <h3 className="text-xs font-bold tracking-widest uppercase mb-6 border-b border-gray-200 pb-2">Categories</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {categoriesList.map((cat) => {
                const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
                return (
                  <li 
                    key={cat} 
                    onClick={() => handleCategoryChange(cat)}
                    className={`cursor-pointer transition-colors ${isActive ? "font-bold text-[#A44E36]" : "hover:text-gray-900"}`}
                  >
                    {cat}
                  </li>
                );
              })}
            </ul>
            
            <div className="mt-8 p-4 bg-[#FAF0E4] border border-[#A44E36]/20 text-center rounded-lg">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#A44E36] block mb-1">Authentic Craft</span>
              <p className="text-xs text-gray-700 italic">Hand Made By Rural Women</p>
            </div>
          </div>
        </aside>

        {/* MAIN GRID */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 text-xs font-bold tracking-widest uppercase text-gray-700">
            <span>{filteredRugs.length} Rugs Available in {selectedCategory}</span>
          </div>

          {/* Grille des produits */}
          {filteredRugs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRugs.map((rug) => (
                <Link href={`/rugs/${rug.id}`} key={rug.id} className="bg-[#FAF0E4]/40 border border-[#A44E36]/15 rounded-xl p-4 group block hover:shadow-lg transition-all">
                  <div className="relative aspect-[4/4] w-full bg-[#E8DED2] rounded-lg overflow-hidden mb-4">
                    <img 
                      src={rug.images?.[0] || "/placeholders/ouaouzguite-1.jpg"} 
                      alt={rug.name} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-widest text-[#A44E36] uppercase font-bold mb-1">{rug.category}</span>
                    <h3 className="text-base font-serif font-bold tracking-wide text-gray-900 mb-1">{rug.name}</h3>
                    <div className="text-xs text-gray-500 mb-3 flex justify-between">
                      <span>SKU: {rug.sku}</span>
                      <span>{rug.dimensions}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-[#A44E36]/10">
                      <span className="text-sm font-bold text-[#A44E36]">{rug.price}</span>
                      {rug.isAvailable && (
                        <span className="text-[10px] text-green-700 font-bold tracking-wider uppercase flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                          Available
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <p className="text-base">No rugs found in this category.</p>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}