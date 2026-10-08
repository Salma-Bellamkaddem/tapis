"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Rug } from "@/data/products";
import { useCurrency } from "./CurrencyContext";
import { useCart } from "@/components/CartContext";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import RelatedProducts from "@/components/RelatedProducts";
import ProductInternalLinks from "@/components/ProductInternalLinks";
import {
  getCollectionByCategory,
  getRelatedRugs,
  getOtherCollections,
} from "@/app/lib/collections";


export default function ProductDetailClient({ rug }: { rug: Rug }) {
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  // Tout est dérivé de rug.category via le mapping central
  const collection = getCollectionByCategory(rug.category) ?? null;
  const collectionName = collection?.name ?? rug.category;
  const relatedRugs = getRelatedRugs(rug, 3);
  const otherCollections = getOtherCollections(collection?.slug, 3);

  const availableSizes =
    rug.sizes && rug.sizes.length > 0
      ? rug.sizes
      : [{ size: rug.dimensions || "150 × 200 cm", price: rug.price }];

  const [mainImage, setMainImage] = useState(rug.images[0]);
  const [selectedSizeObj, setSelectedSizeObj] = useState(availableSizes[0]);

  const displayPrice = selectedSizeObj?.price || rug.price;
  const isAvailable = rug.isAvailable !== false;

  const handleAddToCart = () => {
    addToCart({
      rugId: rug.id,
      name: rug.name,
      sku: rug.sku,
      size: selectedSizeObj.size,
      price: displayPrice,
      image: mainImage,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const generateCustomWhatsAppUrl = () => {
    let message = "🏛️ *CUSTOM ORDER REQUEST (SIMILAR TO SOLD RUG)*\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━\n\n";
    message += `✨ *Reference Rug :* ${rug.name} (${rug.sku})\n`;
    message += `📂 *Collection :* ${collectionName}\n`;
    message += `📏 *Desired Size :* ${selectedSizeObj.size}\n`;
    message += `💰 *Indicative Price :* ${formatPrice(displayPrice)}\n\n`;
    message +=
      "Hello, this unique piece is sold out. Can your artisans weave a similar custom piece for me?\n\n";
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
      {/* Breadcrumb visible (Home › Collection › Produit) */}
      <div className="max-w-6xl mx-auto mb-8">
        <ProductBreadcrumb collection={collection} productName={rug.name} />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* GALLERY */}
        <div className="w-full md:w-3/5 flex flex-col gap-4">
          <div className="w-full aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-sm relative">
            <Image
              src={mainImage}
              alt={`${rug.name} – handmade Moroccan Berber rug from Taznakht`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className={`object-cover transition-opacity duration-300 ${
                !isAvailable ? "opacity-85" : ""
              }`}
            />
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
                aria-label={`Show view ${index + 1} of ${rug.name}`}
                className={`w-24 h-32 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden border-2 transition-all relative ${
                  mainImage === img
                    ? "border-[#A44E36] scale-105"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${rug.name} – view ${index + 1}`}
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
          {/* Lien interne : Produit → Collection */}
          {collection ? (
            <Link
              href={`/collections/${collection.slug}`}
              className="text-xs font-bold tracking-[0.2em] text-[#A44E36] uppercase mb-2 hover:underline"
            >
              {collectionName} Collection
            </Link>
          ) : (
            <span className="text-xs font-bold tracking-[0.2em] text-[#A44E36] uppercase mb-2">
              {collectionName} Collection
            </span>
          )}

          <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-2 uppercase">
            {rug.name}
          </h1>

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
              <span className="font-bold tracking-widest uppercase">Collection</span>
              <span>{collectionName}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-bold tracking-widest uppercase">Status</span>
              <span
                className={
                  isAvailable ? "text-green-600 font-bold" : "text-red-600 font-bold"
                }
              >
                {isAvailable ? "Available" : "Sold Out (Similar on Request)"}
              </span>
            </div>
          </div>

          {/* ABOUT THIS RUG */}
          <div className="mb-8 bg-[#FAF0E4]/60 border border-[#A44E36]/20 p-5 rounded-xl">
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#A44E36] mb-3">
              About this rug
            </h2>

            {descriptionParts.length > 1 ? (
              <div className="space-y-2.5 text-xs md:text-sm text-gray-700 leading-relaxed">
                {descriptionParts.map((part, idx) => {
                  const [title, ...content] = part.split(":");
                  if (content.length > 0) {
                    return (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-[#A44E36] mt-0.5">▪</span>
                        <p>
                          <strong className="text-gray-900 font-semibold">{title} :</strong>{" "}
                          {content.join(":")}
                        </p>
                      </div>
                    );
                  }
                  return <p key={idx}>{part}</p>;
                })}
              </div>
            ) : (
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                {rug.description ||
                  "Handwoven by women artisans in the Siroua Mountains using pure living sheep's wool and natural dyes."}
              </p>
            )}
          </div>

          {/* CTA */}
          {isAvailable ? (
            <div className="flex flex-col gap-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#A44E36] text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors text-center shadow-lg rounded-full"
              >
                {added ? "✓ Added to Cart!" : "Add to Cart"}
              </button>

              <Link
                href="/checkout"
                onClick={handleAddToCart}
                className="w-full bg-gray-900 text-white py-3 text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors text-center rounded-full shadow-sm"
              >
                Proceed to Checkout
              </Link>

              <p className="text-[11px] text-gray-500 text-center mt-1">
                Secure bank transfer · Free worldwide shipping · 14-day returns
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="bg-red-50 border border-red-200 text-red-900 p-3 rounded-lg text-xs leading-relaxed">
                <strong>Unique Masterpiece Sold:</strong> This rug has found a home, but our
                women artisans can weave a custom piece inspired by this design for you.
              </div>
              <a
                href={generateCustomWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-red-600 text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-red-700 transition-colors flex items-center justify-center gap-3 shadow-lg rounded-full"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-1.98-1.29-2.073-.018-.009-.039-.013-.06-.013-.391 0-.756.224-.925.592-.375.836-1.003 2.05-1.229 2.196-.226.147-.451.164-.841-.027-.39-.192-1.649-.607-3.146-1.942-1.16-1.034-1.943-2.311-2.171-2.702-.228-.391-.024-.603.171-.798.176-.175.391-.454.585-.681.194-.227.259-.39.389-.65.13-.26.065-.487-.033-.682-.098-.195-.921-2.222-1.263-3.041-.334-.803-.675-.694-.928-.707-.238-.012-.511-.012-.784-.012s-.716.102-1.091.511c-.375.409-1.436 1.403-1.436 3.421 0 2.018 1.472 3.966 1.677 4.242.205.275 2.894 4.418 7.005 6.192 3.978 1.716 4.793 1.373 5.655 1.284.862-.089 2.784-1.139 3.174-2.24 0.39-1.101.39-2.046.273-2.241z" />
                </svg>
                Request Similar Custom Rug via WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>

      {/* PRODUCT DETAILS + MAILLAGE INTERNE */}
      <section className="max-w-6xl mx-auto mt-16" aria-labelledby="product-details">
        <h2
          id="product-details"
          className="text-xs font-bold tracking-widest uppercase text-[#A44E36] mb-4"
        >
          Product details
        </h2>
        <dl className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-sm bg-white border border-gray-200 rounded-xl p-6">
          <div>
            <dt className="text-xs uppercase tracking-widest text-gray-500">Material</dt>
            <dd className="text-gray-900">100% natural sheep&apos;s wool</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-gray-500">Origin</dt>
            <dd className="text-gray-900">Taznakht, Morocco</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-gray-500">Technique</dt>
            <dd className="text-gray-900">Handwoven</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-gray-500">Style</dt>
            <dd className="text-gray-900">{collectionName}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-gray-500">Size</dt>
            <dd className="text-gray-900">{selectedSizeObj.size}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-gray-500">Artisan-made</dt>
            <dd className="text-gray-900">Yes, by rural Amazigh women</dd>
          </div>
        </dl>

        <ProductInternalLinks collection={collection} otherCollections={otherCollections} />
      </section>

      {/* RELATED PRODUCTS */}
      <div className="max-w-6xl mx-auto">
        <RelatedProducts rugs={relatedRugs} collection={collection} />
      </div>
    </div>
  );
}