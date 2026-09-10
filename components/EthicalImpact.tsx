export default function EthicalImpact() {
  const impacts = [
    { 
      title: "Fairer Income", 
      desc: "Direct support ensuring sustainable livelihoods for artisan families.",
      image: "/placeholders/fair-income.jpeg",
      icon: "🤲"
    },
    { 
      title: "Preserving Heritage", 
      desc: "Keeping ancient Moroccan weaving techniques alive for future generations.",
      image: "/placeholders/heritage.jpeg",
      icon: "❖"
    },
    { 
      title: "Empowering Women", 
      desc: "Creating autonomous and secure economic opportunities in rural areas.",
      image: "/placeholders/empowerment.jpeg",
      icon: "👩"
    }
  ];

  return (
    <section className="relative bg-[#F8EFE3] py-24 px-4 md:px-8 overflow-hidden border-b border-[#A44E36]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de la section avec transition d'apparition */}
        <div className="text-center mb-16 transition-all duration-700">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase mb-3 block animate-pulse">
            ETHICAL COMMITMENT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#101827] uppercase tracking-wide mb-4 leading-tight">
            YOUR PURCHASE <br />MAKES A DIFFERENCE
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-[#A44E36]/30 transition-all duration-500 hover:w-24"></span>
            <span className="text-[#A44E36] text-sm animate-bounce">❖</span>
            <span className="w-16 h-px bg-[#A44E36]/30 transition-all duration-500 hover:w-24"></span>
          </div>

          <p className="text-gray-700 text-sm md:text-base font-serif max-w-2xl mx-auto leading-relaxed">
            When you purchase one of our rugs, you are not just acquiring a piece of decor; you are directly supporting the women artisans who preserve Morocco’s rich cultural legacy.
          </p>
        </div>

        {/* Grille des 3 éléments avec motion design au survol */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impacts.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-2"
            >
              
              {/* Image en forme d'arche avec zoom fluide */}
              <div className="relative w-full h-[280px] sm:h-[300px] rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-[0_15px_35px_rgba(70,40,20,0.08)] bg-[#E8DED2] mb-10 border-4 border-[#FFF8EF] transition-all duration-500 group-hover:shadow-[0_25px_50px_rgba(70,40,20,0.18)]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
                
                {/* Icône circulaire positionnée au bas de l'image avec effet dynamique */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#A44E36] border-4 border-[#F8EFE3] text-white flex items-center justify-center text-lg shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {item.icon}
                </div>
              </div>

              {/* Titre */}
              <h3 className="font-serif text-xl text-[#101827] mb-2 mt-2 font-bold transition-colors duration-300 group-hover:text-[#A44E36]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-[280px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bannière de bas de section avec effet interactif fluide */}
        <div className="bg-[#FAF0E4] border border-[#A44E36]/20 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm transition-all duration-500 hover:shadow-md hover:scale-[1.01]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#A44E36]/10 border border-[#A44E36]/30 flex items-center justify-center text-[#A44E36] text-xl flex-shrink-0 transition-transform duration-500 hover:scale-110">
              ♥
            </div>
            <p className="text-xs sm:text-sm text-gray-700 font-serif italic text-center sm:text-left">
              Every rug carries a story of passion, tradition, and empowerment.
            </p>
          </div>
          <div className="text-center sm:text-right">
            <span className="font-serif text-sm sm:text-base font-bold text-[#A44E36] block">
              Thank you for being part of it.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}