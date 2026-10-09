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
const INTRO: Record<string, string> = {
  Glaoui:
    "Glaoui Berber rugs are handwoven by Amazigh women artisans in Taznakht, Morocco, in natural wool. Each piece is unique, with its own pattern and colour balance.",
  Akhenif:
    "Akhenif Berber rugs are handwoven in natural wool by rural Amazigh women in Morocco. Each rug is a one-of-a-kind piece.",
  Zanifi:
    "Zanifi Berber rugs are handwoven in natural wool by Amazigh women artisans in Morocco, following traditional techniques passed down through generations.",
  Ouaouzguit:
    "Ouaouzguit Berber rugs are handwoven by Amazigh women artisans in southern Morocco, in natural wool, with traditional motifs.",
};

const FAQ = [
  {
    q: "Where are your Berber rugs made?",
    a: "Our rugs are handwoven by Amazigh (Berber) women artisans of our cooperative in Taznakht, Morocco.",
  },
  {
    q: "What materials are used?",
    a: "Our rugs are made of wool. Adapt this answer to your exact materials (natural dyes, cotton warp, etc.).",
  },
  {
    q: "Is every rug unique?",
    a: "Yes. Each rug is woven by hand, so no two pieces are exactly identical. Each has its own SKU.",
  },
  {
    q: "Do you ship internationally?",
    a: "Adapt this answer: shipping countries, delivery times, and costs.",
  },
  {
    q: "Can you weave a custom or similar rug?",
    a: "Yes. When a piece is sold out, you can request a similar custom rug via the 'Similar' button (WhatsApp).",
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
    ? `${category} Berber Rugs – Handmade in Morocco${suffix}`
    : `Handmade Moroccan Berber Rugs${suffix}`;

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
          {page === 1 && (
            <section className="mt-16 max-w-3xl text-sm leading-relaxed text-gray-700">
              <h2 className="font-serif text-2xl mb-4 text-gray-900">
                {category ? `About ${category} Berber rugs` : "About our handmade Berber rugs"}
              </h2>
              <p className="mb-4">
                {category && INTRO[category]
                  ? INTRO[category]
                  : "Cooperative Berber Rugs (Rugs Berber) is a cooperative of Amazigh women artisans based in Taznakht, Morocco. Every rug is handwoven in wool using traditional techniques, so each piece is unique."}
              </p>
              {!category && (
                <>
                  <h2 className="font-serif text-2xl mt-10 mb-4 text-gray-900">Frequently asked questions</h2>
                  <dl className="space-y-4">
                    {FAQ.map((f) => (
                      <div key={f.q}>
                        <dt className="font-bold text-gray-900">{f.q}</dt>
                        <dd>{f.a}</dd>
                      </div>
                    ))}
                  </dl>
                </>
              )}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}