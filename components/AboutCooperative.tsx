import Link from "next/link";

export default function AboutCooperative() {
  return (
    <section className="bg-[#FAF0E4] py-20 md:py-24 px-4 md:px-8 border-b border-[#A44E36]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">

        {/* LEFT: TEXT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase mb-3 block">
            OUR COOPERATIVE
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#101827] uppercase mb-6 leading-tight">
            Rooted in tradition, empowered by women.
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            Based in Taznakht, in the heart of Morocco&apos;s Siroua Mountains,
            our cooperative brings together rural Amazigh women who preserve
            generations of traditional carpet-weaving knowledge. Inspired by
            the mountains, nature, and the stories of their land, each artisan
            transforms her creativity into unique rugs, carefully handwoven
            using natural wool and traditional techniques.

            <br /><br />

            Taznakht is one of Morocco&apos;s historic centers of Berber rug
            craftsmanship, renowned for its distinctive weaving traditions
            and regional styles. Every rug is more than a decorative piece —
            it is a reflection of Moroccan heritage, carrying the knowledge,
            creativity, and identity of the women who create it.
          </p>

          <div>
            <Link
              href="/story"
              className="inline-flex items-center gap-2 bg-[#A44E36] text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#8F3E29] transition-all rounded-full shadow-md hover:scale-105"
            >
              <span>Discover Our Story</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* RIGHT: TWO COOPERATIVE IMAGES */}
        <div className="w-full md:w-1/2 relative">
          <div className="grid grid-cols-2 gap-4 md:gap-5 items-center">

            {/* IMAGE 1 */}
            <div className="relative h-[280px] sm:h-[350px] md:h-[390px] rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-[0_20px_50px_rgba(70,40,20,0.15)] border-4 border-[#FFF8EF]">
              <img
                src="/placeholders/cooperativehome.jpeg"
                alt="Amazigh women artisans weaving traditional Moroccan Berber rugs in Taznakht"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="relative h-[280px] sm:h-[350px] md:h-[390px] mt-12 rounded-t-2xl rounded-b-[100px] overflow-hidden shadow-[0_20px_50px_rgba(70,40,20,0.15)] border-4 border-[#FFF8EF]">
              <img
                src="/placeholders/cooperative-artisans.jpeg"
                alt="Traditional handmade Berber rug craftsmanship by rural women in Morocco"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* IMAGE BADGE */}
              <div className="absolute bottom-5 left-3 right-3 bg-[#FFF8EF]/90 backdrop-blur-sm px-3 py-3 rounded-xl border border-[#A44E36]/20 shadow-sm">
                <span className="text-[9px] font-bold tracking-widest text-[#A44E36] uppercase block">
                  100% HANDMADE
                </span>
                <span className="font-serif text-xs text-gray-900">
                  Authentic Moroccan Heritage
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}