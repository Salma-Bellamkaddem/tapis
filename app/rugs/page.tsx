"use client";

import Link from "next/link";
import Image from "next/image";
import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { rugsData } from "@/data/products";
import { useCurrency } from "@/components/CurrencyContext";

// Ruler icon in SVG
function RulerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 7h18v10H3z" />
      <path d="M7 7v3M11 7v3M15 7v3M19 7v3" />
    </svg>
  );
}

function AllRugsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { formatPrice } = useCurrency(); // 👈 Hook de conversion de devises
  const categoryParam = searchParams.get("category");
  const pageParam = searchParams.get("page");

  // State to track active image index and selected size for each rug by its id
  const [activeImageIndices, setActiveImageIndices] = useState<{ [key: string]: number }>({});
  const [selectedSizeIndices, setSelectedSizeIndices] = useState<{ [key: string]: number }>({});

  const selectedCategory = categoryParam 
    ? categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1) 
    : "All";

  // Filter rugs by category
  const filteredRugs = selectedCategory === "All" 
    ? rugsData 
    : rugsData.filter(rug => rug.category.toLowerCase() === selectedCategory.toLowerCase());

  // Pagination configuration (6 products per page max)
  const ITEMS_PER_PAGE = 6;
  const currentPage = pageParam ? Math.max(1, parseInt(pageParam, 10)) : 1;
  const totalPages = Math.ceil(filteredRugs.length / ITEMS_PER_PAGE);

  // Slice rugs for current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentRugs = filteredRugs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const categoriesList = ['All', 'Ouaouzguite', 'Glaoui', 'Mouzaïk', 'Akhenif', 'picasso-berber', 'Tapis Tableau', 'Zanifi'];

  // Reset to page 1 when category changes
  const handleCategoryChange = (cat: string) => {
    setActiveImageIndices({});
    setSelectedSizeIndices({});
    if (cat === "All") {
      router.push("/rugs");
    } else {
      router.push(`/rugs?category=${cat.toLowerCase()}&page=1`);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    const catQuery = categoryParam ? `category=${categoryParam}&` : "";
    router.push(`/rugs?${catQuery}page=${newPage}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleThumbnailClick = (e: React.MouseEvent, rugId: string, index: number) => {
    e.preventDefault(); 
    setActiveImageIndices(prev => ({ ...prev, [rugId]: index }));
  };

  const handleSizeChange = (rugId: string, sizeIndex: number) => {
    setSelectedSizeIndices(prev => ({ ...prev, [rugId]: sizeIndex }));
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
        
        {/* SIDEBAR (Categories Filter) */}
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
            <span>Showing {filteredRugs.length > 0 ? startIndex + 1 : 0}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredRugs.length)} of {filteredRugs.length} Rugs in {selectedCategory}</span>
          </div>

          {/* Products Grid */}
          {currentRugs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentRugs.map((rug) => {
                  const images: string[] = rug.images && rug.images.length > 0 
                    ? rug.images.slice(0, 5) 
                    : ["/placeholders/ouaouzguite-1.jpg"];
                  
                  const activeIndex = activeImageIndices[rug.id] || 0;
                  const currentImage = images[activeIndex] || images[0];

                  const sizes = rug.sizes && rug.sizes.length > 0 ? rug.sizes : [{ size: rug.dimensions || "Standard", price: rug.price }];
                  const selectedSizeIndex = selectedSizeIndices[rug.id] || 0;
                  const currentSizeObj = sizes[selectedSizeIndex] || sizes[0];
                  const hasMultipleSizes = sizes.length > 1;
                  const isAvailable = rug.isAvailable !== false;

                  const whatsappUrl = isAvailable 
                    ? `https://wa.me/212767149114?text=${encodeURIComponent(
                        `🏛️ *NEW ORDER - BERBER RUG*\n` +
                        `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
                        `✨ *Rug :* ${rug.name}\n` +
                        `📂 *Category :* ${rug.category}\n` +
                        `🔖 *SKU :* ${rug.sku}\n` +
                        `📏 *Size :* ${currentSizeObj.size}\n` +
                        `💰 *Price :* ${formatPrice(currentSizeObj.price)}\n\n` +
                        `━━━━━━━━━━━━━━━━━━━━━━\n` +
                        `📸 *Model Photo :*\n${currentImage}`
                      )}`
                    : `https://wa.me/212767149114?text=${encodeURIComponent(
                        `🏛️ *CUSTOM ORDER REQUEST (SIMILAR TO SOLD RUG)*\n` +
                        `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
                        `✨ *Reference Rug :* ${rug.name} (${rug.sku})\n` +
                        `📏 *Size :* ${currentSizeObj.size}\n` +
                        `Hello, this unique piece is sold out. Can your artisans weave a similar custom piece for me?\n\n` +
                        `📸 *Model Photo :*\n${currentImage}`
                      )}`;

                  return (
                    <div key={rug.id} className="bg-[#FAF0E4]/40 border border-[#A44E36]/15 rounded-xl p-4 group block hover:shadow-lg transition-all flex flex-col justify-between">
                      <Link href={`/rugs/${rug.id}`}>
                        <div className="relative aspect-[4/4] w-full bg-[#E8DED2] rounded-lg overflow-hidden mb-3">
                          <Image 
                            src={currentImage} 
                            alt={rug.name} 
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className={`object-cover group-hover:scale-105 transition-transform duration-500 ${!isAvailable ? 'opacity-80' : ''}`} 
                          />
                          {!isAvailable && (
                            <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase rounded shadow-md">
                              Sold Out
                            </span>
                          )}
                        </div>
                      </Link>

                      {images.length > 1 && (
                        <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
                          {images.map((imgUrl, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={(e) => handleThumbnailClick(e, rug.id, idx)}
                              className={`w-10 h-10 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all relative ${
                                activeIndex === idx ? "border-[#A44E36] scale-105" : "border-transparent opacity-70 hover:opacity-100"
                              }`}
                            >
                              <Image src={imgUrl} alt={`${rug.name} view ${idx + 1}`} fill sizes="40px" className="object-cover" />
                            </button>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-[10px] tracking-widest text-[#A44E36] uppercase font-bold">{rug.category}</span>
                          {/* Prix converti dynamiquement */}
                          <span className="text-sm font-bold text-[#A44E36]">{formatPrice(currentSizeObj.price)}</span>
                        </div>
                        
                        <Link href={`/rugs/${rug.id}`}>
                          <h3 className="text-base font-serif font-bold tracking-wide text-gray-900 mb-2">{rug.name}</h3>
                        </Link>

                        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                          <span>SKU: {rug.sku}</span>
                          {isAvailable ? (
                            <span className="text-[10px] text-green-700 font-bold tracking-wider uppercase flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                              Available
                            </span>
                          ) : (
                            <span className="text-[10px] text-red-600 font-bold tracking-wider uppercase flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                              Sold Out
                            </span>
                          )}
                        </div>

                        <div className="relative mb-4">
                          <RulerIcon className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#A44E36] pointer-events-none z-10" />
                          <select
                            value={selectedSizeIndex}
                            onChange={(e) => handleSizeChange(rug.id, Number(e.target.value))}
                            disabled={!hasMultipleSizes}
                            className="block w-full text-xs border border-[#A44E36]/30 py-2 pl-8 pr-2 rounded bg-white text-gray-800 focus:outline-none focus:border-[#A44E36] disabled:opacity-75 disabled:cursor-default"
                          >
                            {sizes.map((s, idx) => (
                              <option key={idx} value={idx}>
                                {s.size} — {formatPrice(s.price)}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="mt-auto pt-3 border-t border-[#A44E36]/10 flex justify-between items-center">
                          <Link href={`/rugs/${rug.id}`} className="text-gray-500 font-semibold text-xs tracking-widest uppercase hover:text-gray-900 transition-colors">
                            Details
                          </Link>
                          <a 
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`px-3.5 py-1.5 rounded font-semibold text-xs tracking-widest uppercase transition-colors shadow-sm ${
                              isAvailable 
                                ? "bg-[#A44E36] text-white hover:bg-[#8a3f2b]" 
                                : "bg-gray-900 text-white hover:bg-gray-800"
                            }`}
                          >
                            {isAvailable ? "Order" : "Similar"}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* PAGINATION CONTROLS */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-lg border border-[#A44E36]/30 bg-white text-[#A44E36] hover:bg-[#A44E36] hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    &larr; Prev
                  </button>

                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-9 h-9 text-xs font-bold rounded-lg border transition-all ${
                          currentPage === page
                            ? "bg-[#A44E36] text-white border-[#A44E36] shadow-sm"
                            : "bg-white text-gray-700 border-[#A44E36]/30 hover:border-[#A44E36]"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-lg border border-[#A44E36]/30 bg-white text-[#A44E36] hover:bg-[#A44E36] hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next &rarr;
                  </button>
                </div>
              )}
            </>
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

export default function AllRugsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center text-xs font-bold tracking-widest text-[#A44E36] uppercase">Loading...</div>}>
      <AllRugsContent />
    </Suspense>
  );
}