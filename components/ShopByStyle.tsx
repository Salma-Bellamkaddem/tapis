import Link from "next/link";

const stylesData = [
  {
    title: "Neutral & Minimal",
    description: "For modern, serene, and clean interiors.",
    image: "/placeholders/style-neutral.jpg",
    href: "/rugs?style=neutral"
  },
  {
    title: "Colorful & Vibrant",
    description: "To bring warmth and bold expression to your space.",
    image: "/placeholders/style-colorful.jpg",
    href: "/rugs?style=colorful"
  },
  {
    title: "Vintage & Traditional",
    description: "Rooted in deep ancestral Berber storytelling.",
    image: "/placeholders/style-vintage.jpg",
    href: "/rugs?style=vintage"
  },
  {
    title: "Modern Moroccan",
    description: "A seamless blend of tradition and contemporary decor.",
    image: "/placeholders/style-modern.jpg",
    href: "/rugs?style=modern"
  }
];

export default function ShopByStyle() {
  return (
    <section className="bg-[#FAF0E4] py-24 px-4 md:px-8 border-b border-[#A44E36]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.28em] text-[#A44E36] uppercase mb-3 block">Curated Interiors</span>
          <h2 className="font-serif text-3xl md:text-5xl text-gray-900 uppercase tracking-wide">Shop by Style</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stylesData.map((style, idx) => (
            <Link key={idx} href={style.href} className="group relative h-[380px] rounded-2xl overflow-hidden shadow-md block">
              <img src={style.image} alt={style.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif text-xl mb-1">{style.title}</h3>
                <p className="text-xs text-gray-200 line-clamp-2">{style.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}