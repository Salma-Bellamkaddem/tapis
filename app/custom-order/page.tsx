"use client";

import { useState } from "react";
import Link from "next/link";

export default function CustomOrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Ouaouzguite",
    width: "",
    length: "",
    unit: "cm",
    colors: "",
    symbols: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construction du message WhatsApp formaté proprement
    const message = `Bonjour, je souhaite commander un tapis sur mesure :\n\n` +
      `- Nom : ${formData.name}\n` +
      `- Téléphone : ${formData.phone}\n` +
      `- Catégorie : ${formData.category}\n` +
      `- Dimensions : ${formData.width} x ${formData.length} ${formData.unit}\n` +
      `- Couleurs souhaitées : ${formData.colors}\n` +
      `- Symboles & Inspiration (Nature) : ${formData.symbols}\n` +
      `- Notes / Détails : ${formData.notes}`;

    const encodedMessage = encodeURIComponent(message);
    // Numéro WhatsApp configuré
    const whatsappUrl = `https://wa.me/+212767149114?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-[#FAF0E4] pb-24">
      
      {/* 1. HERO SECTION DE LA PAGE SUR COMMANDE */}
      <section className="relative w-full py-20 bg-[#1A1512] text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase mb-3 block">
            HAND MADE BY MOROCCAN RURAL WOMEN
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mb-4 uppercase tracking-wide">
            Custom Berber Rugs
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-serif italic">
            &quot;Berber women read symbols in nature — mountains, trees, plants, animals, insects — then weave them into carpets, guided only by imagination.&quot; Let us weave your unique vision.
          </p>
        </div>
      </section>

      {/* 2. CONTENU PRINCIPAL & FORMULAIRE */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 -mt-8">
        <div className="bg-[#FFF8EF] border border-[#A44E36]/25 rounded-2xl shadow-xl p-8 md:p-12">
          
          <div className="mb-10 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 uppercase mb-2">
              Design Your Masterpiece
            </h2>
            <p className="text-xs md:text-sm text-gray-600">
              Fill out the details below. Our women artisans in the Siroua mountains will craft your bespoke carpet according to ancestral traditions.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Coordonnées */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Salma Bellamkaddem"
                  className="w-full text-xs border border-[#A44E36]/30 py-3 px-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-[#A44E36]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="salma@example.com"
                  className="w-full text-xs border border-[#A44E36]/30 py-3 px-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-[#A44E36]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+212 6..."
                  className="w-full text-xs border border-[#A44E36]/30 py-3 px-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-[#A44E36]"
                />
              </div>
            </div>

            {/* Style / Catégorie & Dimensions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Preferred Style / Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full text-xs border border-[#A44E36]/30 py-3 px-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-[#A44E36]"
                >
                  <option value="Ouaouzguite">Ouaouzguite (Woolen Berber Symbols)</option>
                  <option value="Glaoui">Glaoui (Triple Technique)</option>
                  <option value="Mouzaïk">Mouzaïk (Woolen & Woven Squares)</option>
                  <option value="Akhenif">Akhenif (Woven Symbols)</option>
                  <option value="Zanifi">Zanifi (Embroidered Symbols)</option>
                  <option value="Picasso Berber">Picasso Berber (Abstract Art)</option>
                  <option value="Beni Ourain">Beni Ourain (Minimalist White Wool)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Desired Dimensions (Width × Length)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="width"
                    placeholder="ex: 200"
                    value={formData.width}
                    onChange={handleChange}
                    className="w-1/2 text-xs border border-[#A44E36]/30 py-3 px-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-[#A44E36]"
                  />
                  <span className="self-center font-bold text-gray-500">×</span>
                  <input
                    type="text"
                    name="length"
                    placeholder="ex: 300"
                    value={formData.length}
                    onChange={handleChange}
                    className="w-1/2 text-xs border border-[#A44E36]/30 py-3 px-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-[#A44E36]"
                  />
                </div>
              </div>
            </div>

            {/* Couleurs et Inspiration Nature / Symboles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Color Palette
                </label>
                <input
                  type="text"
                  name="colors"
                  value={formData.colors}
                  onChange={handleChange}
                  placeholder="ex: Saffron yellow, natural ivory, charcoal black"
                  className="w-full text-xs border border-[#A44E36]/30 py-3 px-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-[#A44E36]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Symbols & Nature Inspiration
                </label>
                <input
                  type="text"
                  name="symbols"
                  value={formData.symbols}
                  onChange={handleChange}
                  placeholder="ex: Mountains, trees, animal motifs, geometric lines"
                  className="w-full text-xs border border-[#A44E36]/30 py-3 px-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-[#A44E36]"
                />
              </div>
            </div>

            {/* Notes complémentaires */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Additional Notes or Special Requests
              </label>
              <textarea
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Tell us more about how you picture your custom carpet..."
                className="w-full text-xs border border-[#A44E36]/30 py-3 px-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-[#A44E36]"
              />
            </div>

            {/* Bouton de soumission WhatsApp */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#A44E36] text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#8a3f2b] transition-all rounded-full shadow-lg hover:scale-[1.02]"
              >
                Send Custom Order Request via WhatsApp &rarr;
              </button>
            </div>

          </form>

        </div>

        {/* Lien de retour */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-xs font-bold tracking-widest text-[#A44E36] uppercase hover:underline">
            &larr; Back to Home
          </Link>
        </div>

      </div>

    </div>
  );
}