import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { collectionsData } from "@/data/products";

const SITE_URL = "https://rugsberber.com";
const URL = `${SITE_URL}/story`;

export const metadata: Metadata = {
  title: "Our Story | Handmade Moroccan Berber Rugs from Taznakht",
  description:
    "Discover the story behind our handmade Moroccan Berber rugs, woven by rural women artisans in Taznakht, Morocco, and rooted in generations of Amazigh weaving traditions.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Our Story | Handmade Moroccan Berber Rugs from Taznakht",
    description:
      "Rural women artisans, Taznakht and the Siroua Mountains: the story behind every Rugs Berber rug.",
    url: URL,
    siteName: "Rugs Berber",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Cooperative Berber Rugs",
      alternateName: "Rugs Berber",
      url: SITE_URL,
    },
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: "Our Story | Handmade Moroccan Berber Rugs from Taznakht",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: { "@id": `${URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Our Story", item: URL },
      ],
    },
  ],
};

const steps = [
  { n: "01", title: "Wool", text: "Our rugs are made with wool, a natural material traditionally used by Moroccan weavers." },
  { n: "02", title: "Preparation", text: "The wool is prepared before weaving, transforming the raw material into yarn ready for the loom." },
  { n: "03", title: "Color", text: "Traditional Moroccan weaving can use natural ingredients such as saffron, henna, almond and pomegranate skins to create distinctive tones." },
  { n: "04", title: "Weaving", text: "The rug is woven by hand, row by row, using traditional techniques passed through generations." },
  { n: "05", title: "Finishing", text: "Once weaving is complete, the rug is finished and prepared for its new home." },
];

const materials = [
  { title: "Wool", text: "Natural material traditionally used in Moroccan rug making." },
  { title: "Handwoven", text: "Each rug is woven by hand rather than mass-produced." },
  { title: "Traditional techniques", text: "Our artisans work with methods rooted in Moroccan weaving traditions." },
  { title: "Unique character", text: "Small variations in texture, color and pattern are part of the character of a handmade rug." },
];

const eyebrow = "text-[10px] font-bold tracking-[0.25em] text-[#A44E36] uppercase mb-2 block";
const h2 = "font-serif text-3xl md:text-4xl text-gray-900 mb-4 uppercase leading-snug";
const p = "text-gray-700 mb-4 text-sm md:text-base leading-relaxed";
const link = "text-[#A44E36] font-bold text-sm tracking-widest uppercase hover:text-[#8a3f2b]";

export default function StoryPage() {
  return (
    <main className="bg-[#FAF9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Breadcrumb visible */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 md:px-8 pt-8 text-xs uppercase tracking-widest text-gray-400">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Our Story</span>
      </nav>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
        <span className={eyebrow}>Our Story</span>
        <h1 className="font-serif text-4xl md:text-6xl text-gray-900 uppercase leading-tight mb-6">
          Our Story: Handmade Moroccan Berber Rugs from Taznakht
        </h1>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Woven by Moroccan rural women, rooted in generations of Amazigh craftsmanship.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/rugs" className="bg-[#A44E36] text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors">
            Explore Our Rugs
          </Link>
          <Link href="/collections" className="border border-[#A44E36] text-[#A44E36] px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#A44E36] hover:text-white transition-colors">
            Discover Our Collections
          </Link>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-[#F3F0EA]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-8 py-16">
          <div>
            <span className={eyebrow}>Est. 2003 · 13 families · Taznakht &amp; surrounding villages</span>
            <h2 className={h2}>Who We Are</h2>
            <p className={p}>
              We are a Moroccan rug cooperative rooted in Taznakht, a region known for its long tradition of carpet weaving.
            </p>
            <p className={p}>
              Our rugs are handmade by women artisans from Taznakht and surrounding rural villages. Each piece is woven by hand,
              carrying the character of its maker, the traditions of the region, and the natural beauty of Moroccan wool.
            </p>
            <p className={p}>
              Rather than mass-produced decoration, we create rugs that preserve a living craft and bring a piece of Moroccan
              heritage into contemporary homes.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/placeholders/rug-detail.jpg"
              alt="Handwoven Moroccan Berber rug featuring traditional Amazigh symbols"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* TAZNAKHT */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <span className={eyebrow}>Taznakht, Morocco</span>
        <h2 className={h2}>Taznakht — A Land of Moroccan Rug Weaving</h2>
        <p className={p}>
          Taznakht, in southern Morocco, is deeply connected to the tradition of Moroccan carpet weaving. Located near the
          Siroua Mountains, the region is known for its distinctive wool rugs, geometric patterns and rich weaving traditions.
        </p>
        <p className={p}>
          For generations, weaving has been part of everyday life in rural communities around Taznakht. The knowledge is passed
          from one generation to another, from the preparation of wool to the final knot. Our rugs are rooted in this place and its people.
        </p>
      </section>

      {/* ARTISANS */}
      <section className="bg-[#F3F0EA]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-8 py-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 md:order-1">
            <Image
              src="/placeholders/artisans.jpg"
              alt="Rural Amazigh women handweaving carpets in the Siroua Mountains of Morocco"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className={eyebrow}>Our artisans</span>
            <h2 className={h2}>Meet the Women Behind the Rugs</h2>
            <p className={p}>
              Behind every rug is a pair of hands, a tradition and a story. Our rugs are woven by Moroccan rural women artisans
              who preserve traditional weaving techniques while creating pieces for modern homes around the world.
            </p>
            <p className={p}>
              For many women in rural communities, weaving is both a cultural tradition and an important source of income.
              By working directly with artisans and their communities, we aim to help keep this craft alive while creating
              opportunities through their work.
            </p>
          </div>
        </div>
      </section>

      {/* AMAZIGH TRADITION */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <span className={eyebrow}>Drawn from nature · Woven by hand</span>
        <h2 className={h2}>A Living Amazigh Weaving Tradition</h2>
        <p className={p}>
          Moroccan Berber rugs are more than decorative pieces. Their patterns, colors and weaving techniques are connected to
          the cultural traditions of the communities that create them.
        </p>
        <p className={p}>
          Amazigh women draw inspiration from the world around them: mountains, trees, plants, animals and ancient symbols.
          Rather than following formal patterns, each weaver gives shape to these symbols through memory, imagination and
          inherited knowledge. Geometric forms, lines and diamonds can vary from one region and weaving tradition to another.
        </p>
        <p className={p}>
          Our collections reflect this diversity through styles such as Glaoui, Ouaouzguit, Akhenif, Zanifi, Picasso and Mouzaïk.
        </p>
        <Link href="/collections" className={link}>Explore the Collections →</Link>
      </section>

      {/* WOOL TO RUG */}
      <section className="bg-[#F3F0EA]">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <h2 className={`${h2} text-center`}>From Wool to Rug</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
            {steps.map((s) => (
              <li key={s.n} className="bg-white rounded-xl border border-gray-200 p-5">
                <span className="font-serif text-3xl text-[#A44E36]">{s.n}</span>
                <h3 className="font-bold uppercase tracking-widest text-xs text-gray-900 mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <h2 className={`${h2} text-center`}>Natural Materials, Traditional Craft</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {materials.map((m) => (
            <div key={m.title} className="border-t-2 border-[#A44E36] pt-4">
              <h3 className="font-bold uppercase tracking-widest text-xs text-gray-900 mb-2">{m.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-[#F3F0EA]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <h2 className={h2}>Our Mission</h2>
          <p className={p}>
            Our mission is simple: to help preserve Moroccan rug-making traditions while connecting the artisans behind these
            pieces with homes around the world.
          </p>
          <p className={p}>
            We believe that buying a handmade rug should mean more than choosing a beautiful object. It should also mean knowing
            where it comes from, understanding the craft behind it, and appreciating the people who made it.
          </p>
          <Link href="/rugs" className={link}>Discover Our Rugs →</Link>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16" aria-labelledby="story-collections">
        <h2 id="story-collections" className={`${h2} text-center`}>Explore Our Collections</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {collectionsData.map((c) => (
            <Link key={c.slug} href={`/collections/${c.slug}`} className="group block">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-200">
                <Image
                  src={c.images[0]}
                  alt={`${c.seoName} – handwoven in Morocco`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 font-serif text-lg text-gray-900 group-hover:underline">{c.seoName}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-900 text-white text-center px-4 py-20">
        <h2 className="font-serif text-3xl md:text-4xl uppercase mb-4">Bring a Piece of Taznakht Home</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Discover handmade Moroccan Berber rugs woven by artisans in Taznakht, Morocco.
        </p>
        <Link href="/rugs" className="inline-block bg-[#A44E36] text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors">
          Explore Our Rugs
        </Link>
        <p className="mt-10 text-gray-400 text-sm">Looking for something unique?</p>
        <Link href="/custom-order" className="text-white underline text-sm font-semibold">
          Request a Custom Rug
        </Link>
      </section>
    </main>
  );
}