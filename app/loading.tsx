export default function Loading() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen w-full flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center space-y-4">
        {/* Icône ou losange berbère stylisé avec une animation de pulsation */}
        <div className="w-12 h-12 rounded-full bg-[#FAF0E4] border-2 border-[#A44E36] flex items-center justify-center text-[#A44E36] text-xl animate-pulse shadow-md">
          ❖
        </div>
        
        {/* Texte élégant en anglais */}
        <div className="text-center">
          <h2 className="font-serif text-lg tracking-[0.25em] text-gray-900 uppercase">
            Loading Masterpiece...
          </h2>
          <p className="text-[10px] tracking-[0.3em] text-[#A44E36] uppercase mt-1 font-bold">
            Hand Made By Rural Women
          </p>
        </div>

        {/* Barre de progression subtile */}
        <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden mt-2">
          <div className="w-full h-full bg-[#A44E36] animate-[shimmer_1.5s_infinite]" />
        </div>
      </div>
    </div>
  );
}