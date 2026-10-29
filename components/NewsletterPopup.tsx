"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà fermé ou soumis la popup
    const hasSeenPopup = localStorage.getItem("hasSeenNewsletterPopup");
    
    if (!hasSeenPopup) {
      // Afficher la popup après 3 secondes d'hésitation sur le site
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenNewsletterPopup", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      // Appel vers la route API Supabase configurée
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Fermer automatiquement après 3 secondes de remerciement
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        console.error("Erreur lors de l'enregistrement de l'e-mail");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#FAF0E4] rounded-3xl overflow-hidden shadow-2xl border border-[#A44E36]/20 flex flex-col md:flex-row">
        
        {/* Bouton de fermeture (Croix) */}
        <button
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center transition-all shadow-md"
        >
          ✕
        </button>

        {/* Partie Image à gauche */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[320px] bg-[#E8DED2]">
          <Image
            src="https://res.cloudinary.com/ln4u8wnx/image/upload/f_auto,q_auto/v1789595596/akhenif-p1.png"
            alt="Handmade Moroccan Berber Rugs"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Partie Formulaire à droite */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center text-center md:text-left">
          
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#A44E36] uppercase mb-2">
            Exclusivité Taznakht
          </span>

          <h2 className="font-serif text-2xl md:text-3xl text-gray-900 tracking-wide mb-3 leading-snug">
            ENJOY 10% OFF YOUR FIRST ORDER
          </h2>

          <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
            Be first to discover new arrivals, exclusive offers, and stories from our Amazigh women weavers.
          </p>

          {submitted ? (
            <div className="bg-[#FFF8EF] border border-[#A44E36]/30 p-4 rounded-xl text-center">
              <p className="font-serif text-[#A44E36] font-bold text-sm">
                Thank you! Check your inbox for your 10% off code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full py-3.5 pl-4 pr-12 rounded-full bg-white border border-[#A44E36]/30 text-xs md:text-sm text-gray-900 focus:outline-none focus:border-[#A44E36] shadow-sm"
                />
                <button
                  type="submit"
                  aria-label="Submit email"
                  className="absolute right-1.5 w-10 h-10 rounded-full bg-[#1A1512] text-white flex items-center justify-center hover:bg-[#A44E36] transition-colors shadow-sm"
                >
                  →
                </button>
              </div>
              <p className="text-[10px] text-gray-400 mt-1">
                By signing up, you agree to receive promotional emails. Unsubscribe anytime.
              </p>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}