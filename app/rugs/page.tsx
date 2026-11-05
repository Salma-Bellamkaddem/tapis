import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { rugsData } from "@/data/products";

const SITE = "https://rugsberber.com";
const BRAND = "Cooperative Berber Rugs";
const ITEMS_PER_PAGE = 6;
const CATEGORIES = ["Ouaouzguit", "Glaoui", "Mouzaik", "Akhenif", "Picasso", "Tableau", "Zanifi","Runner"];

// Same logic as the collection page:
// the current price stays fixed, the struck-through original price is +30%
function applyBlackFridayDiscount(currentPriceString: string) {
  const numericPrice = parseFloat(String(currentPriceString).replace(/[^0-9.]/g, ""));
  if (isNaN(numericPrice)) {
    return { original: currentPriceString, discounted: currentPriceString };
  }
  return {
    original: `$${Math.round(numericPrice * 1.3)}`,
    discounted: currentPriceString,
  };
}

// NOT exported: a Next.js page file may only export default, metadata, generateMetadata, etc.
const INTRO: Record<string, string> = {
  Glaoui:
    "Discover authentic Glaoui Berber rugs, handcrafted in Taznakht, Morocco, by Amazigh women artisans. Each rug combines three traditional techniques: hand-weaving, hand-knotting, and embroidery, enriched with distinctive woolen Amazigh symbols. These Moroccan rugs showcase the exceptional craftsmanship and cultural heritage of the Siroua Mountains region.",

  Akhenif:
    "Discover authentic Akhenif Berber rugs, handwoven by Amazigh women artisans in Taznakht, Morocco. Featuring traditional woven Amazigh symbols and distinctive textile patterns, each rug reflects generations of Moroccan weaving heritage. These handcrafted wool rugs bring authentic Berber artistry and natural character to your home.",

  Zanifi:
    "Explore authentic Zanifi Berber rugs, handcrafted in Taznakht, Morocco, by skilled Amazigh women artisans. Made using traditional hand-embroidery techniques, these rugs feature distinctive woven and embroidered Amazigh symbols. Each piece celebrates Moroccan textile heritage, traditional craftsmanship, and the artistic identity of the Taznakht region.",

  Ouaouzguit:
    "Discover authentic Ouaouzguit Berber rugs, traditionally hand-knotted using 100% wool by Amazigh women artisans in Taznakht, Morocco. Featuring distinctive woolen Amazigh symbols, these handmade Moroccan wool rugs reflect the rich weaving heritage of the Siroua Mountains and generations of traditional craftsmanship.",

  Picasso:
    "Explore Picasso Berber rugs, handcrafted in Taznakht, Morocco, using traditional hand-weaving techniques. Featuring woven Amazigh symbols and a distinctive double-sided design, each rug offers two decorative surfaces while celebrating the creativity and heritage of Moroccan women artisans.",

  Lemzerbi:
    "Discover traditional Lemzerbi Tableau rugs, handcrafted by Amazigh women artisans in Taznakht, Morocco. Made using traditional hand-weaving techniques and decorated with woven and woolen Amazigh symbols, these distinctive Moroccan rugs showcase geometric artistry, cultural storytelling, and generations of Berber textile craftsmanship.",

  Mouzaik:
    "Explore authentic Mouzaik Berber rugs, handcrafted in Taznakht, Morocco, using a combination of hand-knotting and hand-weaving techniques. Characterized by woven squares and distinctive woven and woolen Amazigh symbols, each Moroccan wool rug reflects the creativity, heritage, and traditional craftsmanship of local women artisans.",

  Runner:
    "Discover handmade Moroccan Berber rug runners, crafted by Amazigh women artisans in Taznakht, Morocco. Designed for hallways, entryways, and narrow spaces, these traditional wool runners showcase authentic Berber weaving techniques, distinctive Amazigh patterns, and generations of Moroccan textile craftsmanship. Each runner brings warmth, cultural character, and timeless artisanal beauty to your home.",
};
const FAQ = [
  {
    q: "Where are Taznakht rugs made?",
    a: "Taznakht rugs are handcrafted in Taznakht, in the Siroua Mountains region of southern Morocco, a historic center of Moroccan Berber rug weaving. At Cooperative Berber Rugs, our Amazigh women artisans create authentic Taznakht rugs using traditional craftsmanship passed down through generations.",
  },
  {
    q: "Are Taznakht rugs handmade?",
    a: "Yes. Authentic Taznakht rugs are handmade by skilled Amazigh women artisans using traditional techniques, including hand-knotting, hand-weaving, and hand-embroidery. Each Taznakht rug is individually crafted, making every piece unique.",
  },
  {
    q: "What makes Taznakht rugs special?",
    a: "Taznakht rugs are renowned for their distinctive Amazigh patterns, geometric designs, symbolic motifs, and traditional craftsmanship. Made in southern Morocco, these Moroccan Berber rugs reflect the cultural identity and weaving heritage of the Taznakht region and the artistic knowledge of local women artisans.",
  },
  {
    q: "What materials are Taznakht rugs made from?",
    a: "Our Taznakht rugs are crafted using wool and traditional textile materials, depending on the collection and weaving technique. Many designs feature woolen Amazigh symbols, woven details, and embroidered patterns. Check each Taznakht rug's product description for precise material information.",
  },
  {
    q: "Are all Taznakht rugs unique?",
    a: "Yes. Every handmade Taznakht rug is an individual piece of Moroccan craftsmanship. Variations in colours, dimensions, textures, geometric patterns, and Amazigh symbols are part of the traditional handmade process. Once an original Taznakht rug is sold, it is no longer available, although a similar design may sometimes be commissioned.",
  },
  {
    q: "What traditional techniques are used to make Taznakht rugs?",
    a: "Taznakht rugs are made using several traditional Amazigh techniques. Ouaouzguit rugs are hand-knotted using wool, Akhenif and Picasso rugs are hand-woven, Glaoui rugs combine hand-weaving, hand-knotting, and embroidery, Zanifi rugs feature hand-embroidery, Lemzerbi rugs combine woven and woolen symbols, and Mouzaïk rugs feature hand-knotted and hand-woven squares.",
  },
  {
    q: "How do I care for my Taznakht wool rug?",
    a: "To preserve your handmade Taznakht wool rug, vacuum regularly using a gentle setting without a rotating brush. Avoid excessive moisture and prolonged direct sunlight. For spills, gently blot with a clean, dry cloth without rubbing. For deep cleaning, consult a professional experienced in traditional Moroccan wool rugs.",
  },
  {
    q: "Can I order a similar Taznakht rug if my favourite design is sold out?",
    a: "Yes. Contact Cooperative Berber Rugs through WhatsApp and share the reference or a photo of your favourite Taznakht rug. Our team will check with the Amazigh artisans whether a similar Moroccan Berber rug can be handcrafted. Colours, dimensions, patterns, production time, and pricing will be confirmed before ordering.",
  },
  {
    q: "Can I order custom Taznakht rugs in different sizes or colours?",
    a: "Yes. We welcome custom Taznakht rug enquiries. Share your preferred dimensions, colours, patterns, and inspiration through WhatsApp. Our team will discuss your request with the artisans in Taznakht, Morocco, and confirm the available options, estimated production time, and price.",
  },
  {
    q: "Do you ship Taznakht rugs internationally?",
    a: "We welcome international enquiries from customers looking to buy authentic Taznakht rugs directly from our Moroccan cooperative. Contact us with your delivery country and preferred rug reference. We will confirm shipping availability, delivery costs, and estimated transit times before finalizing your order.",
  },
  {
    q: "How can I buy authentic Taznakht rugs directly from the cooperative?",
    a: "Browse our online collection of handmade Taznakht rugs and choose your favourite Moroccan Berber design. Contact Cooperative Berber Rugs through WhatsApp with the product reference to confirm availability, pricing, shipping, and payment options. Our team will guide you through the purchasing process.",
  },
  {
    q: "What is your return and exchange policy for Taznakht rugs?",
    a: "Our return and exchange conditions depend on the type of purchase and applicable sales terms. Please contact Cooperative Berber Rugs before confirming your Taznakht rug order to receive information about the conditions applicable to your purchase.",
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

  // The layout template already appends " | Cooperative Berber Rugs"
  const title = category
    ? `${category} Berber Rugs – Handmade${suffix}`
    : `Handmade Moroccan Berber Rugs${suffix}`;

  const description = category
    ? `Shop authentic ${category} Berber rugs, handwoven in wool by Amazigh women artisans in Taznakht, Morocco. Unique pieces, direct from the cooperative.`
    : "Discover handmade Moroccan Berber rugs woven by Amazigh women artisans in Taznakht, Morocco. Traditional designs, natural wool, unique pieces shipped worldwide.";

  const url = category
    ? `${SITE}/collections/${category.toLowerCase()}`
    : `${SITE}${href(undefined, page)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: invalidCategory ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: { title: `${title} | ${BRAND}`, description, url, type: "website", siteName: BRAND },
    twitter: { card: "summary_large_image", title: `${title} | ${BRAND}`, description },
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

  const pageUrl = `${SITE}${href(category, page)}`;
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: h1,
    url: pageUrl,
    isPartOf: { "@type": "WebSite", name: BRAND, url: SITE },
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
        {/* SIDEBAR */}
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

        {/* GRID */}
        <div className="flex-1">
          <p className="mb-8 text-xs font-bold tracking-widest uppercase text-gray-700">
            Showing {filtered.length > 0 ? start + 1 : 0}–{Math.min(start + ITEMS_PER_PAGE, filtered.length)} of{" "}
            {filtered.length} Rugs in {label}
          </p>

          {current.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {current.map((rug, i) => {
                  const soldOut = rug.isAvailable === false;
                  const pricing = applyBlackFridayDiscount(rug.price);

                  return (
                    <Link
                      key={rug.id}
                      href={`/rugs/${rug.id}`}
                      className="group bg-white rounded-3xl overflow-hidden border border-[#A44E36]/10 shadow-sm hover:shadow-lg transition-all duration-300 relative"
                    >
                      {soldOut ? (
                        <span className="absolute top-3 right-3 z-10 bg-gray-800 text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider rounded shadow">
                          Sold out
                        </span>
                      ) : (
                        <span className="absolute top-3 right-3 z-10 bg-red-600 text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider rounded shadow">
                          -30% Black Friday
                        </span>
                      )}

                      <div className="relative aspect-square overflow-hidden bg-[#E8DED2]">
                        <Image
                          src={rug.images[0]}
                          alt={`${rug.name} handmade Moroccan Berber rug`}
                          fill
                          priority={page === 1 && i < 3}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      <div className="p-5">
                        <h3 className="font-serif text-xl text-gray-900 group-hover:text-[#A44E36] transition-colors">
                          {rug.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">{rug.sku}</p>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900">{pricing.discounted}</span>
                            {!soldOut && (
                              <span className="text-xs text-gray-400 line-through">{pricing.original}</span>
                            )}
                          </div>
                          <span className="text-[#A44E36] text-xs font-bold uppercase tracking-wider">
                            View Rug →
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
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
              <p className="text-base">
                {invalidCategory ? "This collection does not exist." : "No rugs found in this category."}
              </p>
            </div>
          )}

          {page === 1 && (
            <section className="mt-20 border-t border-stone-200 pt-12 sm:mt-24 sm:pt-16">
              <div className="mx-auto max-w-5xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:gap-14">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
                      Our Heritage
                    </span>
                    <div className="mt-4 h-px w-12 bg-stone-400" />
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl leading-tight tracking-tight text-stone-900 sm:text-4xl">
                      {category ? `About ${category} Berber Rugs` : "The Art of Moroccan Berber Rugs"}
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

                {!category && (
                  <div className="mt-20 border-t border-stone-200 pt-12 sm:mt-24 sm:pt-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:gap-14">
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
                      <dl className="divide-y divide-stone-200 border-t border-stone-200">
                        {FAQ.map((f) => (
                          <div key={f.q} className="py-6 first:pt-6">
                            <dt className="font-medium leading-7 text-stone-900">{f.q}</dt>
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