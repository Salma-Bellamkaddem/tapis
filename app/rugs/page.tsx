import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { rugsData } from "@/data/products";
import RugCard from "@/components/RugCard";


const SITE = "https://rugsberber.com";
const ITEMS_PER_PAGE = 6;
const CATEGORIES = ["Ouaouzguit", "Glaoui", "Mouzaik", "Akhenif", "Picasso", "Tableau", "Zanifi"];

// ⚠️ Remplacez ces textes par vos vraies connaissances d'artisan : c'est ce contenu
// unique (et factuel) qui fait la différence pour Google ET pour les IA génératives.
// app/data/collection-content.ts

export const INTRO: Record<string, string> = {
  Glaoui:
    "Discover Glaoui Berber rugs, part of Morocco's rich Amazigh weaving heritage. Our collection brings together handcrafted pieces from Taznakht, Morocco, made by skilled artisans using traditional weaving knowledge. Each rug has its own character, with individual details that reflect the nature of handmade craftsmanship. Explore our Glaoui collection to find a distinctive Moroccan rug for your home.",

  Akhenif:
    "Explore our Akhenif Berber rug collection, inspired by the weaving traditions of Morocco. These handcrafted pieces reflect the cultural heritage of Amazigh artisans and the distinctive character of traditional Moroccan textiles. Each rug is a unique piece of craftsmanship, bringing texture, character and a connection to Moroccan heritage into your home.",

  Zanifi:
    "Discover our Zanifi Berber rugs, handcrafted in Morocco by artisans who preserve traditional weaving knowledge. Rooted in the country's Amazigh textile heritage, these rugs celebrate the individuality of handmade craftsmanship. Explore the collection to discover distinctive pieces that connect traditional Moroccan artistry with contemporary interiors.",

  Ouaouzguit:
    "Explore Ouaouzguit Berber rugs, associated with the historic weaving traditions of the Taznakht region in southern Morocco. These traditional Moroccan textiles reflect the rich Amazigh heritage of the region and the knowledge passed down through generations of artisans. Discover distinctive handcrafted pieces that bring Moroccan craftsmanship and cultural character into your home.",
};

export const FAQ = [
  {
    q: "Where are your Berber rugs made?",
    a: "Our Berber rugs are handcrafted in Morocco by artisans connected to the traditional weaving heritage of Taznakht. We celebrate the craftsmanship and cultural traditions behind Moroccan rugs, with a focus on the work of local artisans.",
  },
  {
    q: "Are your Moroccan Berber rugs handmade?",
    a: "Our collection features handmade Moroccan rugs crafted using traditional artisanal skills. As each piece is made by hand, individual details may vary, giving every rug its own character.",
  },
  {
    q: "What makes Taznakht rugs special?",
    a: "Taznakht is known for its rich weaving heritage in southern Morocco. Its traditional rugs reflect the region's Amazigh textile culture and the knowledge of generations of artisans. Materials, colours, patterns and weaving techniques can vary from one rug to another.",
  },
  {
    q: "What materials are your Berber rugs made from?",
    a: "Our rugs are made using the materials specified in their individual product descriptions. Please check each product page for details about its composition. If you need additional information about a particular rug, contact us and mention its product reference.",
  },
  {
    q: "Is every Berber rug unique?",
    a: "Every individual handmade rug has its own characteristics. Small variations in patterns, colours, dimensions and texture can occur as part of the handmade process. Please refer to the product photos and specifications to understand the characteristics of the rug you are considering.",
  },
  {
    q: "How do I care for my Moroccan wool rug?",
    a: "Regularly vacuum your rug using a suitable setting for its construction. Avoid excessive moisture and address spills promptly by gently blotting the affected area with a clean cloth. For deep cleaning, consult a professional experienced in handmade wool rugs and follow the care instructions for your specific rug.",
  },
  {
    q: "Can I order a similar rug if my favourite design is sold out?",
    a: "If a rug is sold out, you can contact us through WhatsApp and share its product reference to ask whether a similar design can be made. Availability, dimensions, colours, production time and pricing must be confirmed before placing a custom order.",
  },
  {
    q: "Can I request a custom size or colour?",
    a: "Please contact us with your preferred dimensions, colour palette and the product reference or design that inspires you. We will check with the artisans whether your request can be accommodated and confirm the price and estimated production time before you proceed.",
  },
  {
    q: "Do you ship Berber rugs internationally?",
    a: "Please contact us with your delivery country and the product reference you are interested in. We will confirm whether delivery is available to your location, along with the shipping cost and estimated delivery time, before you place your order.",
  },
  {
    q: "How can I order a rug from your cooperative?",
    a: "Browse our collection and select the rug you like. Contact us through WhatsApp and share the product reference to enquire about availability, pricing, shipping and payment options. We will confirm the order details with you before proceeding.",
  },
  {
    q: "Can I return or exchange a rug?",
    a: "Please contact us before placing your order to confirm the return and exchange conditions applicable to your purchase. Our team can explain the relevant terms before you proceed.",
  },
];

type SP = { category?: string | string[]; page?: string | string[] };

const first = (v?: string | string[]) => (Array.isArray(v) ? v[0] : v);

function resolve(sp: SP) {
  const raw = first(sp.category);
  const category = raw ? CATEGORIES.find((c) => c.toLowerCase() === raw.toLowerCase()) : undefined;
  const invalidCategory = !!raw && !category;
  const parsed = parseInt(first(sp.page) ?? "1", 10);
  const page = Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
  return { category, invalidCategory, page };
}

function href(category: string | undefined, page: number) {
  const p = new URLSearchParams();
  if (category) p.set("category", category.toLowerCase());
  if (page > 1) p.set("page", String(page));
  const qs = p.toString();
  return qs ? `/rugs?${qs}` : "/rugs";
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<SP>;
}): Promise<Metadata> {
  const { category, invalidCategory, page } = resolve(await searchParams);
  const suffix = page > 1 ? ` – Page ${page}` : "";

  const title = category
    ? `${category} Berber Rugs – Handmade in Morocco${suffix} | Rugs Berber`
    : `Handmade Moroccan Berber Rugs${suffix} | Rugs Berber`;

  const description = category
    ? `Shop authentic ${category} Berber rugs, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Unique pieces, direct from the cooperative.`
    : "Discover handmade Moroccan Berber rugs woven by Amazigh women artisans in Taznakht, Morocco. Traditional designs, natural wool, unique pieces shipped worldwide.";

  // /rugs?category=x duplique /collections/x : on désigne la page collection comme canonique
  const url = category
    ? `${SITE}/collections/${category.toLowerCase()}`
    : `${SITE}${href(undefined, page)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: invalidCategory ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: { title, description, url, type: "website", siteName: "Rugs Berber" },
    twitter: { card: "summary_large_image", title, description },
  };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default async function RugsPage({ searchParams }: { searchParams: Promise<SP> }) {
  const { category, invalidCategory, page } = resolve(await searchParams);

  const filtered = category
    ? rugsData.filter((r) => r.category.toLowerCase() === category.toLowerCase())
    : rugsData;

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  if (page > totalPages) notFound();

  const start = (page - 1) * ITEMS_PER_PAGE;
  const current = filtered.slice(start, start + ITEMS_PER_PAGE);

  const h1 = category ? `${category} Berber Rugs` : "Handmade Moroccan Berber Rugs";
  const label = category ?? "All";

  // ---- Données structurées ----
  const pageUrl = `${SITE}${href(category, page)}`;
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: h1,
    url: pageUrl,
    isPartOf: { "@type": "WebSite", name: "Rugs Berber", url: SITE },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: filtered.length,
      itemListElement: current.map((rug, i) => ({
        "@type": "ListItem",
        position: start + i + 1,
        url: `${SITE}/rugs/${rug.id}`,
        name: rug.name,
      })),
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Rugs", item: `${SITE}/rugs` },
      ...(category
        ? [{ "@type": "ListItem", position: 3, name: `${category} Berber Rugs`, item: `${SITE}${href(category, 1)}` }]
        : []),
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="bg-[#FAF9F6] w-full pb-20">
      <JsonLd data={collectionLd} />
      <JsonLd data={breadcrumbLd} />
      {!category && page === 1 && <JsonLd data={faqLd} />}

      {/* HERO */}
      <section className="relative w-full h-[300px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 bg-[#1A1512] opacity-90" />
        <div className="relative z-10 text-white px-4">
          <h1 className="font-serif text-4xl md:text-5xl mb-3 tracking-widest uppercase">{h1}</h1>
          <p className="text-sm md:text-base text-gray-300">
            Handwoven by Amazigh women artisans in Taznakht, Morocco.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row gap-12">
        {/* SIDEBAR : vrais liens <a> crawlables */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav aria-label="Rug collections" className="mb-10">
            <h2 className="text-xs font-bold tracking-widest uppercase mb-6 border-b border-gray-200 pb-2">
              Collections
            </h2>
            <ul className="space-y-3 text-sm text-gray-600">
              {["All", ...CATEGORIES].map((cat) => {
                const isActive = label.toLowerCase() === cat.toLowerCase();
                return (
                  <li key={cat}>
                    <Link
                      href={cat === "All" ? "/rugs" : `/collections/${cat.toLowerCase()}`}
                      aria-current={isActive ? "page" : undefined}
                      className={isActive ? "font-bold text-[#A44E36]" : "hover:text-gray-900 transition-colors"}
                    >
                      {cat}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 p-4 bg-[#FAF0E4] border border-[#A44E36]/20 text-center rounded-lg">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#A44E36] block mb-1">
                Authentic Craft
              </span>
              <p className="text-xs text-gray-700 italic">Hand Made By Rural Women</p>
            </div>
          </nav>
        </aside>

        {/* GRILLE */}
        <div className="flex-1">
          <p className="mb-8 text-xs font-bold tracking-widest uppercase text-gray-700">
            Showing {filtered.length > 0 ? start + 1 : 0}–{Math.min(start + ITEMS_PER_PAGE, filtered.length)} of{" "}
            {filtered.length} Rugs in {label}
          </p>

          {current.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {current.map((rug, i) => (
                  <RugCard key={rug.id} rug={rug} priority={page === 1 && i < 3} />
                ))}
              </div>

              {totalPages > 1 && (
                <nav aria-label="Pagination" className="mt-12 flex justify-center items-center gap-2">
                  {page > 1 && (
                    <Link
                      href={href(category, page - 1)}
                      rel="prev"
                      className="px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-lg border border-[#A44E36]/30 bg-white text-[#A44E36] hover:bg-[#A44E36] hover:text-white transition-colors"
                    >
                      &larr; Prev
                    </Link>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Link
                      key={p}
                      href={href(category, p)}
                      aria-current={p === page ? "page" : undefined}
                      className={`w-9 h-9 flex items-center justify-center text-xs font-bold rounded-lg border transition-all ${
                        p === page
                          ? "bg-[#A44E36] text-white border-[#A44E36]"
                          : "bg-white text-gray-700 border-[#A44E36]/30 hover:border-[#A44E36]"
                      }`}
                    >
                      {p}
                    </Link>
                  ))}
                  {page < totalPages && (
                    <Link
                      href={href(category, page + 1)}
                      rel="next"
                      className="px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-lg border border-[#A44E36]/30 bg-white text-[#A44E36] hover:bg-[#A44E36] hover:text-white transition-colors"
                    >
                      Next &rarr;
                    </Link>
                  )}
                </nav>
              )}
            </>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <p className="text-base">{invalidCategory ? "This collection does not exist." : "No rugs found in this category."}</p>
            </div>
          )}

          {/* CONTENU ÉDITORIAL : essentiel pour le SEO et le GEO (les IA citent du texte factuel) */}
        {/* EDITORIAL CONTENT — SEO & GEO */}
{page === 1 && (
  <section className="mt-20 border-t border-stone-200 pt-12 sm:mt-24 sm:pt-16">
    <div className="mx-auto max-w-5xl">

      {/* Section introduction */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:gap-14">

        {/* Label éditorial */}
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
            Our Heritage
          </span>

          <div className="mt-4 h-px w-12 bg-stone-400" />
        </div>

        {/* Contenu principal */}
        <div>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-stone-900 sm:text-4xl">
            {category
              ? `About ${category} Berber Rugs`
              : "The Art of Moroccan Berber Rugs"}
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg sm:leading-9">
            {category && INTRO[category]
              ? INTRO[category]
              : "Cooperative Berber Rugs brings together the weaving heritage of Amazigh artisans in Taznakht, Morocco. Our collection celebrates handmade craftsmanship and the distinctive character of traditional Moroccan rugs. Each piece tells its own story through its design, texture and individual details."}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-8 bg-stone-400" />
            <span className="text-xs uppercase tracking-[0.18em] text-stone-500">
              Handcrafted in Morocco
            </span>
          </div>
        </div>
      </div>

      {/* FAQ — uniquement sur la première page de la collection générale */}
      {!category && (
        <div className="mt-20 border-t border-stone-200 pt-12 sm:mt-24 sm:pt-16">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:gap-14">

            {/* FAQ heading */}
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
                Need to Know
              </span>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-stone-900">
                Frequently Asked Questions
              </h2>

              <p className="mt-4 text-sm leading-7 text-stone-500">
                Everything you need to know about our rugs, craftsmanship and ordering process.
              </p>
            </div>

            {/* FAQ items */}
            <dl className="divide-y divide-stone-200 border-t border-stone-200">
              {FAQ.map((f) => (
                <div
                  key={f.q}
                  className="py-6 first:pt-6"
                >
                  <dt className="font-medium leading-7 text-stone-900">
                    {f.q}
                  </dt>

                  <dd className="mt-3 max-w-3xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>

          </div>
        </div>
      )}
    </div>
  </section>
)}
        </div>
      </div>
    </div>
  );
}