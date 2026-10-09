"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { rugsData } from "@/data/products";
import { useCurrency } from "@/components/CurrencyContext";
import { useCart } from "@/components/CartContext";
import { trackEvent } from "@/app/lib/fbq";

type Rug = (typeof rugsData)[number];

function RulerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 7h18v10H3z" />
      <path d="M7 7v3M11 7v3M15 7v3M19 7v3" />
    </svg>
  );
}

export default function RugCard({ rug, priority = false }: { rug: Rug; priority?: boolean }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const [activeIndex, setActiveIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);

  const images: string[] =
    rug.images && rug.images.length > 0 ? rug.images.slice(0, 5) : ["/placeholders/ouaouzguite-1.jpg"];
  const currentImage = images[activeIndex] || images[0];

  const sizes =
    rug.sizes && rug.sizes.length > 0 ? rug.sizes : [{ size: rug.dimensions || "Standard", price: rug.price }];
  const currentSize = sizes[sizeIndex] || sizes[0];
  const isAvailable = rug.isAvailable !== false;

  const whatsappUrl = `https://wa.me/212767149114?text=${encodeURIComponent(
    `🏛️ *CUSTOM ORDER REQUEST (SIMILAR TO SOLD RUG)*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `✨ *Reference Rug :* ${rug.name} (${rug.sku})\n` +
      `📏 *Size :* ${currentSize.size}\n` +
      `Hello, this unique piece is sold out. Can your artisans weave a similar custom piece for me?\n\n` +
      `📸 *Model Photo :*\n${currentImage}`
  )}`;

  // « Order » : ajoute au panier (AddToCart est envoyé par CartContext) puis va au checkout
  const handleOrder = () => {
    addToCart({
      rugId: rug.id,
      name: rug.name,
      sku: rug.sku,
      size: currentSize.size,
      price: currentSize.price,
      image: currentImage,
    });
    router.push("/checkout");
  };

  const handleSimilarClick = () => {
    trackEvent("Contact", {
      content_ids: [rug.sku],
      content_name: rug.name,
      content_type: "product",
    });
  };

  return (
    <article className="bg-[#FAF0E4]/40 border border-[#A44E36]/15 rounded-xl p-4 group hover:shadow-lg transition-all flex flex-col justify-between">
      <Link href={`/rugs/${rug.id}`}>
        <div className="relative aspect-square w-full bg-[#E8DED2] rounded-lg overflow-hidden mb-3">
          <Image
            src={currentImage}
            alt={`${rug.name} – handmade ${rug.category} Moroccan Berber rug${activeIndex > 0 ? `, view ${activeIndex + 1}` : ""}`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 33vw"
            className={`object-cover group-hover:scale-105 transition-transform duration-500 ${!isAvailable ? "opacity-80" : ""}`}
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
              aria-label={`Show view ${idx + 1} of ${rug.name}`}
              onClick={() => setActiveIndex(idx)}
              className={`w-10 h-10 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all relative ${
                activeIndex === idx ? "border-[#A44E36] scale-105" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={imgUrl} alt="" fill sizes="40px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <span className="text-[10px] tracking-widest text-[#A44E36] uppercase font-bold">{rug.category}</span>
          <span className="text-sm font-bold text-[#A44E36]">{formatPrice(currentSize.price)}</span>
        </div>

        <Link href={`/rugs/${rug.id}`}>
          <h2 className="text-base font-serif font-bold tracking-wide text-gray-900 mb-2">{rug.name}</h2>
        </Link>

        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
          <span>SKU: {rug.sku}</span>
          <span className={`text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 ${isAvailable ? "text-green-700" : "text-red-600"}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isAvailable ? "bg-green-600" : "bg-red-600"}`} />
            {isAvailable ? "Available" : "Sold Out"}
          </span>
        </div>

        <div className="relative mb-4">
          <RulerIcon className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#A44E36] pointer-events-none z-10" />
          <select
            aria-label={`Size for ${rug.name}`}
            value={sizeIndex}
            onChange={(e) => setSizeIndex(Number(e.target.value))}
            disabled={sizes.length <= 1}
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
          {isAvailable ? (
            <button
              type="button"
              onClick={handleOrder}
              className="px-3.5 py-1.5 rounded font-semibold text-xs tracking-widest uppercase shadow-sm bg-[#A44E36] text-white hover:bg-[#8a3f2b] transition-colors"
            >
              Order
            </button>
          ) : (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer nofollow"
              onClick={handleSimilarClick}
              className="px-3.5 py-1.5 rounded font-semibold text-xs tracking-widest uppercase shadow-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Similar
            </a>
          )}
        </div>
      </div>
    </article>
  );
}