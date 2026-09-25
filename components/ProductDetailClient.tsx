"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { rugsData } from "@/data/products";
import { useCurrency } from "./CurrencyContext";

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

export default function ProductDetailClient({ rug }: { rug: (typeof rugsData)[number] }) {
  const { formatPrice } = useCurrency();

  const availableSizes = rug.sizes && rug.sizes.length > 0 ? rug.sizes : [
    { size: "150 × 200 cm", price: rug.price },
  ];

  const [mainImage, setMainImage] = useState(rug.images[0]);
  const [selectedSizeObj, setSelectedSizeObj] = useState(availableSizes[0]);

  const displayPrice = selectedSizeObj?.price || rug.price;
  const isAvailable = rug.isAvailable !== false; // Par défaut disponible si non spécifié

  // URL WhatsApp pour l'achat direct (si disponible)
  const generateWhatsAppUrl = () => {
    let message = "🏛️ *NEW ORDER - BERBER RUG*\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━\n\n";
    message += `✨ *Rug :* ${rug.name}\n`;
    message += `📂 *Category :* ${rug.category}\n`;
    message += `🔖 *SKU :* ${rug.sku}\n`;
    message += `📏 *Selected Size :* ${selectedSizeObj.size}\n`;
    message += `💰 *Price :* ${formatPrice(displayPrice)}\n\n`;
    message += "━━━━━━━━━━━━━━━━━━━━━━\n";
    message += `📸 *Model Photo :*\n${mainImage}`;

    return `https://wa.me/212767149114?text=${encodeURIComponent(message)}`;
  };

  // URL WhatsApp pour demander un modèle similaire (si vendu)
  const generateCustomWhatsAppUrl = () => {
    let message = "🏛️ *CUSTOM ORDER REQUEST (SIMILAR TO SOLD RUG)*\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━\n\n";
    message += `✨ *Reference Rug :* ${rug.name} (${rug.sku})\n`;
    message += `📂 *Category :* ${rug.category}\n`;
    message += `📏 *Desired Size :* ${selectedSizeObj.size}\n`;
    message += `💰 *Indicative Price :* ${formatPrice(displayPrice)}\n\n`;
    message += "Hello, this unique piece is sold out. Can your artisans weave a similar custom piece for me?\n\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━\n";
    message += `📸 *Model Photo :*\n${mainImage}`;

    return `https://wa.me/212767149114?text=${encodeURIComponent(message)}`;
  };

  const formatDescription = (text: string) => {
    if (!text) return [];
    return text.split(/(?=[A-Z][a-zà-ÿ\s]+ :)/g).filter(Boolean);
  };

  const descriptionParts = formatDescription(rug.description || "");

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-12 px-4 md:px-8">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto mb-8 text-xs font-bold tracking-widest uppercase text-gray-400">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/rugs" className="hover:text-gray-900">
          Rugs
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{rug.name}</span>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* GALLERY WITH NEXT/IMAGE */}
        <div className="w-full md:w-3/5 flex flex-col gap-4">
          <div className="w-full aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-sm relative">
            <Image
              src={mainImage}
              alt={rug.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className={`object-cover transition-opacity duration-300 ${!isAvailable ? 'opacity-85' : ''}`}
            />
            {/* 🔴 Badge Sold Out rouge vif et attirant */}
            {!isAvailable && (
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold tracking-[0.2em] px-4 py-2 uppercase rounded shadow-lg flex items-center gap-2 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Sold Out (Archived Piece)
              </div>
            )}
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {rug.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(img)}
                className={`w-24 h-32 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden border-2 transition-all relative ${
                  mainImage === img
                    ? "border-[#A44E36] scale-105"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${rug.name} view ${index + 1}`}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="w-full md:w-2/5 flex flex-col pt-4">
          <span className="text-xs font-bold tracking-[0.2em] text-[#A44E36] uppercase mb-2">
            {rug.category} Collection
          </span>

          <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-2 uppercase">
            {rug.name}
          </h1>

          {/* Dynamic Converted Price */}
          <p className="text-2xl font-bold text-[#A44E36] mb-6">
            {formatPrice(displayPrice)}
          </p>

          {/* SIZES */}
          <div className="mb-6">
            <label className="block text-xs font-bold tracking-widest uppercase text-gray-700 mb-2">
              Select Size & Price:
            </label>

            <div className="grid grid-cols-2 gap-2">
              {availableSizes.map((item, idx) => {
                const isSelected = selectedSizeObj.size === item.size;

                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedSizeObj(item)}
                    className={`py-2.5 px-3 text-xs font-semibold rounded-lg border transition-all text-left flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#A44E36] text-white border-[#A44E36] shadow-sm"
                        : "bg-white text-gray-700 border-[#A44E36]/30 hover:border-[#A44E36]"
                    }`}
                  >
                    <span>{item.size}</span>
                    <span
                      className={`text-[11px] font-bold mt-1 ${
                        isSelected ? "text-white/90" : "text-[#A44E36]"
                      }`}
                    >
                      {formatPrice(item.price)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SPECIFICATIONS */}
          <div className="space-y-3 text-xs text-gray-600 mb-6 border-t border-b border-gray-200 py-4">
            <div className="flex justify-between">
              <span className="font-bold tracking-widest uppercase">SKU</span>
              <span>{rug.sku}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-bold tracking-widest uppercase">Category</span>
              <span>{rug.category}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-bold tracking-widest uppercase">Status</span>
              <span className={isAvailable ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                {isAvailable ? "Available" : "Sold Out (Similar on Request)"}
              </span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-8 bg-[#FAF0E4]/60 border border-[#A44E36]/20 p-5 rounded-xl">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#A44E36] mb-3">
              About this masterpiece
            </h3>
            
            {descriptionParts.length > 1 ? (
              <div className="space-y-2.5 text-xs md:text-sm text-gray-700 leading-relaxed">
                {descriptionParts.map((part, idx) => {
                  const [title, ...content] = part.split(":");
                  if (content.length > 0) {
                    return (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-[#A44E36] mt-0.5">▪</span>
                        <p>
                          <strong className="text-gray-900 font-semibold">{title} :</strong> {content.join(":")}
                        </p>
                      </div>
                    );
                  }
                  return <p key={idx}>{part}</p>;
                })}
              </div>
            ) : (
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                {rug.description || "Handwoven by women artisans in the Atlas mountains using pure living sheep's wool and natural dyes."}
              </p>
            )}
          </div>

          {/* WHATSAPP CTA - DYNAMIQUE SELON LA DISPONIBILITÉ */}
          {isAvailable ? (
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#A44E36] text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors flex items-center justify-center gap-3 shadow-lg rounded-full"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-1.98-1.29-2.073-.018-.009-.039-.013-.06-.013-.391 0-.756.224-.925.592-.375.836-1.003 2.05-1.229 2.196-.226.147-.451.164-.841-.027-.39-.192-1.649-.607-3.146-1.942-1.16-1.034-1.943-2.311-2.171-2.702-.228-.391-.024-.603.171-.798.176-.175.391-.454.585-.681.194-.227.259-.39.389-.65.13-.26.065-.487-.033-.682-.098-.195-.921-2.222-1.263-3.041-.334-.803-.675-.694-.928-.707-.238-.012-.511-.012-.784-.012s-.716.102-1.091.511c-.375.409-1.436 1.403-1.436 3.421 0 2.018 1.472 3.966 1.677 4.242.205.275 2.894 4.418 7.005 6.192 3.978 1.716 4.793 1.373 5.655 1.284.862-.089 2.784-1.139 3.174-2.24 0.39-1.101.39-2.046.273-2.241z"/>
              </svg>
              Order via WhatsApp
            </a>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="bg-red-50 border border-red-200 text-red-900 p-3 rounded-lg text-xs leading-relaxed">
                <strong>Unique Masterpiece Sold:</strong> This rug has found a home, but our women artisans can weave a custom piece inspired by this design for you.
              </div>
              <a
                href={generateCustomWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-red-600 text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-red-700 transition-colors flex items-center justify-center gap-3 shadow-lg rounded-full"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-1.98-1.29-2.073-.018-.009-.039-.013-.06-.013-.391 0-.756.224-.925.592-.375.836-1.003 2.05-1.229 2.196-.226.147-.451.164-.841-.027-.39-.192-1.649-.607-3.146-1.942-1.16-1.034-1.943-2.311-2.171-2.702-.228-.391-.024-.603.171-.798.176-.175.391-.454.585-.681.194-.227.259-.39.389-.65.13-.26.065-.487-.033-.682-.098-.195-.921-2.222-1.263-3.041-.334-.803-.675-.694-.928-.707-.238-.012-.511-.012-.784-.012s-.716.102-1.091.511c-.375.409-1.436 1.403-1.436 3.421 0 2.018 1.472 3.966 1.677 4.242.205.275 2.894 4.418 7.005 6.192 3.978 1.716 4.793 1.373 5.655 1.284.862-.089 2.784-1.139 3.174-2.24 0.39-1.101.39-2.046.273-2.241z"/>
                </svg>
                Request Similar Custom Rug via WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}