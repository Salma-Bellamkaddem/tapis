"use client";

import React, { useState } from "react";

const reviewsData = [
  {
    name: "Zakaria El Khachia",
    location: "LOCAL GUIDE • VERIFIED BUYER",
    rating: 5,
    text: "Excellent cooperative! I have ordered several rugs from them through WhatsApp, one of which is the “Glaoui” in the photo and I did this from the comfort of my home in the Netherlands. The shipping was quick but the delivery took a bit of time due to the customs. I can only recommend them for the great service and very competitive price you don’t get in shops in big cities. Thanks Youness!",
    avatar: "ZE",
    rugPurchased: "Glaoui Berber Rug"
  },
  {
    name: "Sophia Fox",
    location: "GOOGLE REVIEW • VERIFIED BUYER",
    rating: 5,
    text: "If you want to buy a beautiful Moroccan rug this is the shop to go to. My husband and I stopped here after reading about the town being a good spot for rug shopping, and we are so glad we did. We got several rugs (10) for an extremely good price. His first offer was his best offer so we did not have to negotiate, and he explained the logic behind his pricing and gave us a discount for being the first customers of the day. We were shown several rugs and when we expressed interest in certain sizes and types he showed us everything he had that we were interested in. We were so happy with our experience that we will likely order from him in the future for international shipping. I cannot recommend this shop highly enough!",
    avatar: "SF",
    rugPurchased: "Custom Collection (10 Rugs)"
  },
  {
    name: "Jeremy Whelehan",
    location: "GOOGLE REVIEW • VERIFIED BUYER",
    rating: 5,
    text: "What a wonderful emporium of traditional rugs and carpets from the Berber region. Younis is a gentleman and a straight shooter. You won’t find better rugs or better prices than at this cooperative. Beautiful work and a wonderful experience.",
    avatar: "JW",
    rugPurchased: "Traditional Beni Ourain"
  },
  {
    name: "Martine Philippe",
    location: "LOCAL GUIDE • VERIFIED BUYER",
    rating: 5,
    text: "This is an amazing shop. Best offer, quality and fair prices. Younes explains well where the carpets come from and how they are made. We loved this one right away.",
    avatar: "MP",
    rugPurchased: "Handmade Azilal Rug"
  }
];

export default function CustomerReviews() {
  const [mobileIndex, setMobileIndex] = useState(0);

  const nextMobileReview = () => {
    setMobileIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevMobileReview = () => {
    setMobileIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#FDFBF7] via-[#FAF0E4] to-[#F5EAD6] py-20 md:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-[#A44E36]/15 font-sans">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#A44E36] blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#D4AF37] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Trust Badges Bar / Conversion Enhancer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-[#A44E36]/15 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#A44E36]/10 text-[#A44E36] flex items-center justify-center font-bold text-lg">🛡️</div>
            <div>
              <p className="text-xs md:text-sm font-bold text-gray-900">100% Authentic</p>
              <p className="text-[11px] text-gray-600">Handmade by Artisans</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#A44E36]/10 text-[#A44E36] flex items-center justify-center font-bold text-lg">✈️</div>
            <div>
              <p className="text-xs md:text-sm font-bold text-gray-900">Secure Worldwide</p>
              <p className="text-[11px] text-gray-600">DHL Express Shipping</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#A44E36]/10 text-[#A44E36] flex items-center justify-center font-bold text-lg">💬</div>
            <div>
              <p className="text-xs md:text-sm font-bold text-gray-900">WhatsApp Support</p>
              <p className="text-[11px] text-gray-600">Direct Consultation</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#A44E36]/10 text-[#A44E36] flex items-center justify-center font-bold text-lg">⭐</div>
            <div>
              <p className="text-xs md:text-sm font-bold text-gray-900">5.0 Star Rating</p>
              <p className="text-[11px] text-gray-600">Verified Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#A44E36]/10 px-4 py-1.5 rounded-full border border-[#A44E36]/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#A44E36] animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#A44E36] uppercase">
              Verified Customer Trust
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-gray-950 uppercase font-normal mb-4 leading-tight">
            Loved By Homeowners <span className="text-[#A44E36] italic lowercase font-serif">around the world</span>
          </h2>
          
          {/* Golden Stars & Rating Summary */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex text-[#D4AF37] text-xl md:text-2xl">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} className="drop-shadow-sm">{star}</span>
              ))}
            </div>
            <span className="text-gray-900 font-bold text-base md:text-lg ml-1">5.0 / 5.0</span>
          </div>
          
          <p className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto">
            Read real feedback from art lovers who transformed their living spaces with our authentic, hand-knotted Berber carpets.
          </p>
        </div>

        {/* 
          DESKTOP VIEW: Displays all 4 review cards simultaneously in a 4-column grid.
        */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mb-16">
          {reviewsData.map((review, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/90 backdrop-blur-sm p-6 rounded-[28px] border border-[#A44E36]/20 shadow-[0_12px_35px_rgba(70,40,20,0.08)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(164,78,54,0.15)] hover:border-[#A44E36]"
            >
              {/* Berber Symbol Ornament */}
              <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF0E4] border border-[#A44E36]/30 flex items-center justify-center text-[#A44E36] text-xs font-bold shadow-sm transition-transform group-hover:rotate-45">
                ❖
              </div>

              <div>
                <div className="flex items-center justify-between mb-4 pr-8">
                  <div className="flex text-[#D4AF37] text-sm">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>

                {/* Purchased item tag */}
                <div className="mb-3">
                  <span className="inline-block bg-[#FAF0E4] text-[#A44E36] text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md border border-[#A44E36]/20">
                    Rug: {review.rugPurchased}
                  </span>
                </div>

                <div className="flex gap-2 mb-6">
                  <span className="font-serif text-3xl text-[#A44E36]/40 leading-none">“</span>
                  <p className="text-gray-700 text-xs leading-relaxed italic font-serif">
                    {review.text}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="border-t border-[#A44E36]/15 pt-4 flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A44E36] to-[#7E3825] text-white flex items-center justify-center text-xs font-bold shadow-md flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="font-serif font-bold text-gray-900 text-sm truncate">{review.name}</h3>
                    <span className="text-[9px] text-[#A44E36] font-bold tracking-wider uppercase block truncate">{review.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-gray-500 font-medium bg-[#FAF0E4]/60 px-2.5 py-1.5 rounded-lg border border-[#A44E36]/10">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
                    Verified Review
                  </span>
                  <span className="text-[#A44E36] font-bold">Google Maps</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 
          MOBILE / TABLET VIEW: Carousel showing 1 card at a time with smooth controls.
        */}
        <div className="block lg:hidden mb-10">
          <div className="relative bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-[28px] border border-[#A44E36]/25 shadow-xl flex flex-col justify-between transition-all duration-500">
            
            {/* Berber Motif */}
            <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF0E4] border border-[#A44E36]/30 flex items-center justify-center text-[#A44E36] text-xs font-bold shadow-sm">
              ❖
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 pr-10">
                <div className="flex text-[#D4AF37] text-sm sm:text-base">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>

              {/* Purchased item tag */}
              <div className="mb-3">
                <span className="inline-block bg-[#FAF0E4] text-[#A44E36] text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md border border-[#A44E36]/20">
                  Rug: {reviewsData[mobileIndex].rugPurchased}
                </span>
              </div>

              <div className="flex gap-2.5 mb-6">
                <span className="font-serif text-3xl sm:text-4xl text-[#A44E36]/40 leading-none">“</span>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed italic font-serif">
                  {reviewsData[mobileIndex].text}
                </p>
              </div>
            </div>

            {/* Mobile Card Footer */}
            <div className="border-t border-[#A44E36]/15 pt-4 flex flex-wrap items-center justify-between gap-3 mt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#A44E36] text-white flex items-center justify-center text-xs font-bold shadow-md flex-shrink-0">
                  {reviewsData[mobileIndex].avatar}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 text-sm sm:text-base">{reviewsData[mobileIndex].name}</h3>
                  <span className="text-[9px] sm:text-[10px] text-[#A44E36] font-bold tracking-widest uppercase">{reviewsData[mobileIndex].location}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-gray-600 font-semibold bg-[#FAF0E4] px-2.5 py-1 rounded-full border border-[#A44E36]/15">
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
                Google Maps
              </div>
            </div>
          </div>

          {/* Navigation Controls for Mobile */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button 
              onClick={prevMobileReview}
              aria-label="Previous review"
              className="w-11 h-11 rounded-full bg-white border border-[#A44E36]/30 text-[#A44E36] flex items-center justify-center hover:bg-[#A44E36] hover:text-white transition-all shadow-md active:scale-95 text-lg font-bold"
            >
              ‹
            </button>

            <div className="flex items-center gap-2">
              {reviewsData.map((_, i) => {
                const isActive = mobileIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => setMobileIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${isActive ? "w-6 bg-[#A44E36]" : "w-2.5 bg-[#A44E36]/30"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                );
              })}
            </div>

            <button 
              onClick={nextMobileReview}
              aria-label="Next review"
              className="w-11 h-11 rounded-full bg-white border border-[#A44E36]/30 text-[#A44E36] flex items-center justify-center hover:bg-[#A44E36] hover:text-white transition-all shadow-md active:scale-95 text-lg font-bold"
            >
              ›
            </button>
          </div>
        </div>

        {/* Conversion CTA Box (Encouraging purchases & trust) */}
        <div className="mt-12 bg-gradient-to-r from-[#A44E36] to-[#823926] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -right-10 -bottom-10 opacity-10 text-9xl font-serif select-none pointer-events-none">
            ❖
          </div>
          
          <div className="max-w-xl relative z-10">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#F5EAD6] mb-2 block">
              Bring Moroccan Heritage Home
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-3 font-normal tracking-wide">
              Ready to find your dream handmade rug?
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EAD6]/90 leading-relaxed">
              Experience transparent pricing, personalized guidance via WhatsApp, and safe delivery straight to your doorstep anywhere in the world.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
            <a 
              href="https://maps.app.goo.gl/wkpWghENN4U88JjR9?g_st=awb" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#A44E36] px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#FAF0E4] transition-all rounded-full shadow-lg active:scale-95"
            >
              <span>Read All Reviews on Google Maps</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}