import Link from "next/link";

export default function MeetArtisans() {
  return (
    <section className="bg-[#F3EBE0] py-24 px-4 md:px-8 border-b border-[#A44E36]/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 relative h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <img src="/placeholders/artisans.jpg" alt="Moroccan women artisans weaving" className="w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <span className="text-[10px] font-bold tracking-[0.28em] text-[#A44E36] uppercase mb-3">Human Heritage</span>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 uppercase mb-6 leading-tight">The Hands Behind Every Rug</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Every rug begins with a pair of hands, a traditional wooden loom, and a story passed down through generations. Our cooperative empowers rural women by providing sustainable livelihoods while keeping ancestral Moroccan weaving alive.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <span className="block font-serif text-3xl text-[#A44E36] mb-1">200+</span>
              <span className="text-xs tracking-wider uppercase text-gray-600 font-semibold">Skilled Artisans</span>
            </div>
            <div>
              <span className="block font-serif text-3xl text-[#A44E36] mb-1">100%</span>
              <span className="text-xs tracking-wider uppercase text-gray-600 font-semibold">Fair Income</span>
            </div>
          </div>
          <div>
            <Link href="/story" className="bg-[#A44E36] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors rounded shadow-sm inline-block">
              Meet Our Artisans &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}