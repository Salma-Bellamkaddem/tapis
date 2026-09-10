"use client";

import { use, useState } from "react";
import { rugsData } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";

type CartItem = {
  name: string;
  category: string;
  sku: string;
  size: string;
  price: string;
  image: string;
};

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const rug = rugsData.find((r) => r.id === resolvedParams.id);

  if (!rug) {
    return notFound();
  }

  return <ProductDetail rug={rug} />;
}

function ProductDetail({ rug }: { rug: (typeof rugsData)[number] }) {
  // Récupération des 6 tailles spécifiques du tapis (avec fallback de sécurité)
  const availableSizes = rug.sizes && rug.sizes.length > 0 ? rug.sizes : [
    { size: "150 × 200 cm", price: rug.price },
  ];

  const [mainImage, setMainImage] = useState(rug.images[0]);
  const [selectedSizeObj, setSelectedSizeObj] = useState(availableSizes[0]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [addedMessage, setAddedMessage] = useState(false);

  const handleAddToCart = () => {
    const newItem: CartItem = {
      name: rug.name,
      category: rug.category,
      sku: rug.sku,
      size: selectedSizeObj.size,
      price: selectedSizeObj.price,
      image: mainImage,
    };

    setCart((prev) => [...prev, newItem]);
    setAddedMessage(true);

    setTimeout(() => {
      setAddedMessage(false);
    }, 3000);
  };

  const generateWhatsAppUrl = () => {
    const itemsToCheckout =
      cart.length > 0
        ? cart
        : [
            {
              name: rug.name,
              category: rug.category,
              sku: rug.sku,
              size: selectedSizeObj.size,
              price: selectedSizeObj.price,
              image: mainImage,
            },
          ];

    let message = "Bonjour, je souhaite commander les tapis suivants :\n\n";

    itemsToCheckout.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}*\n`;
      message += `- Catégorie : ${item.category}\n`;
      message += `- SKU : ${item.sku}\n`;
      message += `- Taille : ${item.size}\n`;
      message += `- Prix : ${item.price}\n\n`;
    });

    message +=
      "*Remarque : Je souhaite également envoyer un design personnalisé ou commander sur mesure.*";

    return `https://wa.me/212767149114?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-12 px-4 md:px-8">
      {/* Fil d'Ariane */}
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
        {/* GALERIE */}
        <div className="w-full md:w-3/5 flex flex-col gap-4">
          <div className="w-full aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <img
              src={mainImage}
              alt={rug.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {rug.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(img)}
                className={`w-24 h-32 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden border-2 transition-all ${
                  mainImage === img
                    ? "border-[#A44E36] scale-105"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`${rug.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* INFORMATIONS PRODUIT */}
        <div className="w-full md:w-2/5 flex flex-col pt-4">
          <span className="text-xs font-bold tracking-[0.2em] text-[#A44E36] uppercase mb-2">
            {rug.category} Collection
          </span>

          <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-2 uppercase">
            {rug.name}
          </h1>

          <p className="text-2xl font-bold text-[#A44E36] mb-6">
            {selectedSizeObj.price}
          </p>

          {/* DIMENSIONS (6 tailles dynamiques avec leurs prix) */}
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
                      {item.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* INFOS */}
          <div className="space-y-3 text-xs text-gray-600 mb-6 border-t border-b border-gray-200 py-4">
            <div className="flex justify-between">
              <span className="font-bold tracking-widest uppercase">SKU</span>
              <span>{rug.sku}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-bold tracking-widest uppercase">Category</span>
              <span>{rug.category}</span>
            </div>
          </div>

          <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
            Handwoven by women artisans in the Atlas mountains using pure living
            sheep's wool and natural dyes. Select your dimensions above or send
            us your custom design.
          </p>

          {/* MESSAGE AJOUT PANIER */}
          {addedMessage && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800 text-xs font-bold rounded-lg text-center animate-pulse">
              ✓ Tapis ajouté à votre panier avec succès !
            </div>
          )}

          {/* AJOUT PANIER */}
        

          {/* WHATSAPP */}
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="w-full bg-[#A44E36] text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors flex items-center justify-center gap-3 shadow-lg rounded-full"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 21c-1.618 0-3.197-.417-4.588-1.209l-.328-.186-3.411.894.912-3.326-.205-.325A8.922 8.922 0 013.119 12c0-4.963 4.044-9 9.031-9 4.981 0 9.032 4.037 9.032 9s-4.051 9-9.151 9zM12.031 4.717a7.288 7.288 0 00-7.29 7.283c0 1.458.379 2.879 1.1 4.135l.138.238-.54 1.97 2.015-.528.23.136a7.258 7.258 0 003.957 1.156c4.015 0 7.284-3.264 7.284-7.28 0-4.017-3.27-7.283-7.284-7.283zm3.998 9.948c-.219-.11-1.296-.64-1.498-.713-.201-.074-.349-.11-.497.111-.148.22-.567.712-.695.859-.128.147-.256.165-.475.055-.219-.11-.925-.342-1.761-1.091-.65-.583-1.089-1.303-1.218-1.523-.128-.22-.014-.339.095-.448.1-.1.219-.256.328-.384.11-.128.146-.22.219-.366.074-.146.037-.274-.018-.384-.055-.11-.497-1.199-.681-1.642-.18-.43-.362-.372-.497-.378-.128-.007-.274-.007-.421-.007z" />
            </svg>
            Checkout via WhatsApp{" "}
            {cart.length > 0 ? `(${cart.length} items)` : ""}
          </a>
        </div>
      </div>
    </div>
  );
}