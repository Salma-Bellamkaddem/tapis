"use client";

import { useState } from "react";

const reviewsData = [
  {
    name: "Zakaria El Khachia",
    location: "LOCAL GUIDE",
    rating: 5,
    text: "Excellent cooperative! I have ordered several rugs from them through WhatsApp, one of which is the “Glaoui” in the photo and I did this from the comfort of my home in the Netherlands. The shipping was quick but the delivery took a bit of time due to the customs. I can only recommend them for the great service and very competitive price you don’t get in shops in big cities. Thanks Youness!",
    avatar: "ZE"
  },
  {
    name: "Sophia Fox",
    location: "GOOGLE REVIEW",
    rating: 5,
    text: "If you want to buy a beautiful Moroccan rug this is the shop to go to. My husband and I stopped here after reading about the town being a good spot for rug shopping, and we are so glad we did. We got several rugs (10) for an extremely good price. His first offer was his best offer so we did not have to negotiate, and he explained the logic behind his pricing and gave us a discount for being the first customers of the day. We were shown several rugs and when we expressed interest in certain sizes and types he showed us everything he had that we were interested in. We were so happy with our experience that we will likely order from him in the future for international shipping. I cannot recommend this shop highly enough!",
    avatar: "SF"
  },
  {
    name: "Jeremy Whelehan",
    location: "GOOGLE REVIEW",
    rating: 5,
    text: "What a wonderful emporium of traditional rugs and carpets from the Berber region. Younis is a gentleman and a straight shooter. You won’t find better rugs or better prices than at this cooperative. Beautiful work and a wonderful experience.",
    avatar: "JW"
  },
  {
    name: "Martine Philippe",
    location: "LOCAL GUIDE",
    rating: 5,
    text: "This is an amazing shop. Best offer, quality and fair prices. Younes explains well where the carpets come from and how they are made. We loved this one right away.",
    avatar: "MP"
  }
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    // Sur mobile, on change 1 par 1 pour une meilleure lisibilité ; sur grand écran par 2
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <section className="relative bg-[#FAF0E4] py-16 md:py-28 px-4 sm:px-6 md:px-12 overflow-hidden border-b border-[#A44E36]/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase mb-2 md:mb-3 block">
            TESTIMONIALS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#101827] uppercase tracking-wide mb-3 md:mb-4">
            What Our Customers Say
          </h2>
          
          {/* Golden Stars */}
          <div className="flex items-center justify-center gap-1.5 mb-2 text-[#D4AF37] text-lg md:text-xl">
            {"★★★★★".split("").map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>
          <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-[#A44E36] uppercase">
            Verified Reviews from Google Maps
          </p>
        </div>

        {/* Grille responsive : 1 carte sur mobile, 2 cartes sur tablette/PC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          {[
            reviewsData[currentIndex],
            reviewsData[(currentIndex + 1) % reviewsData.length]
          ].map((review, idx) => (
            <div 
              key={idx} 
              className="relative bg-gradient-to-br from-[#FFF8EF] to-[#F5EAD6] p-6 sm:p-8 md:p-10 rounded-[24px] md:rounded-[32px] border border-[#A44E36]/20 shadow-[0_10px_30px_rgba(70,40,20,0.06)] flex flex-col justify-between transition-all duration-500"
            >
              {/* Motif berbère décoratif */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FAF0E4] border border-[#A44E36]/30 flex items-center justify-center text-[#A44E36] text-sm sm:text-base shadow-sm">
                ❖
              </div>

              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4 pr-10">
                  <div className="flex text-[#D4AF37] text-xs sm:text-sm">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 sm:gap-3 mb-6">
                  <span className="font-serif text-3xl sm:text-4xl text-[#A44E36]/40 leading-none">“</span>
                  <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed italic font-serif">
                    {review.text}
                  </p>
                </div>
              </div>

              {/* Pied de carte adapté mobile */}
              <div className="border-t border-[#A44E36]/15 pt-4 sm:pt-5 flex flex-wrap items-center justify-between gap-3 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#A44E36] text-white flex items-center justify-center text-xs sm:text-sm font-bold shadow-md flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-900 text-sm sm:text-base">{review.name}</h3>
                    <span className="text-[9px] sm:text-[10px] text-[#A44E36] font-bold tracking-widest uppercase">{review.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-600 font-semibold bg-white/60 px-2.5 py-1 rounded-full border border-[#A44E36]/10">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 inline-block"></span>
                  Google Maps
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Boutons de navigation tactiles et adaptés mobile */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 md:mt-8">
          <button 
            onClick={prevReview}
            aria-label="Previous reviews"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF0E4] border border-[#A44E36]/30 text-[#A44E36] flex items-center justify-center hover:bg-[#A44E36] hover:text-white transition-all shadow-md active:scale-95 text-base sm:text-lg"
          >
            ‹
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {reviewsData.map((_, i) => {
              const isActive = currentIndex === i;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${isActive ? "w-5 sm:w-6 bg-[#A44E36]" : "w-2 bg-[#A44E36]/30"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              );
            })}
          </div>

          <button 
            onClick={nextReview}
            aria-label="Next reviews"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF0E4] border border-[#A44E36]/30 text-[#A44E36] flex items-center justify-center hover:bg-[#A44E36] hover:text-white transition-all shadow-md active:scale-95 text-base sm:text-lg"
          >
            ›
          </button>
        </div>

        {/* Lien global Google Maps */}
        <div className="text-center mt-10 md:mt-12">
          <a 
            href="https://maps.app.goo.gl/wkpWghENN4U88JjR9?g_st=awb" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#A44E36] text-white px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#8F3E29] transition-all rounded-full shadow-lg active:scale-95"
          >
            <span>Read All Reviews on Google Maps</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}