"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ExperienceSection from "../components/ExperienceSection";
import Features from "../components/Features";
import CustomerReviews from "@/components/CustomerReviews";

import { collectionsData, rugsData } from "@/data/products";
import { useCurrency } from "@/components/CurrencyContext";
import { trackEvent } from "@/app/lib/fbq";

/* ------------------------------------------------------------------ */
/* Black Friday config: keep DISCOUNT identical to BlackFridayBanner   */
/* ------------------------------------------------------------------ */
const DISCOUNT = 30; // % off
const SALE_END_LABEL = "Nov 30";

const toNumber = (p: unknown) =>
  parseFloat(String(p).replace(/[^0-9.]/g, "")) || 0;

// Returns the discounted price as a plain numeric string (e.g. "245")
const salePrice = (p: unknown) =>
  String(Math.round((toNumber(p) * (100 - DISCOUNT)) / 100));

// Meta Pixel: click on a WhatsApp link linked to a rug
function trackWhatsAppContact(rug: { sku: string; name: string }) {
  trackEvent("Contact", {
    content_ids: [rug.sku],
    content_name: rug.name,
    content_type: "product",
  });
}

function RulerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 7h18v10H3z" />
      <path d="M7 7v3M11 7v3M15 7v3M19 7v3" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Collection card                                                     */
/* ------------------------------------------------------------------ */
function CollectionCard({
  collection,
  index,
}: {
  collection: any;
  index: number;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const total = collection.images.length;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % total);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + total) % total);
  };

  const isFeatured = index === 2;

  // Never link to "#": fall back to the filtered rugs page
  const href =
    collection.href && collection.href !== "#"
      ? collection.href
      : `/rugs?category=${encodeURIComponent(collection.id ?? collection.name)}`;

  return (
    <article
      className={`
        group relative flex flex-col flex-shrink-0 w-[260px] sm:w-[280px] lg:w-[295px] overflow-visible rounded-[42px] border transition-all duration-700 ease-out snap-center
        ${
          isFeatured
            ? "bg-[#FFF8EF] border-[#A44E36]/50 shadow-[0_25px_70px_rgba(70,40,20,0.18)] lg:-translate-y-6"
            : "bg-[#FAF0E4] border-[#A44E36]/20 shadow-[0_12px_40px_rgba(70,40,20,0.08)]"
        }
        hover:-translate-y-4 hover:shadow-[0_25px_70px_rgba(70,40,20,0.18)]
      `}
    >
      <div
        aria-hidden="true"
        className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 w-11 h-11 rounded-full bg-[#FFF8EF] border border-[#A44E36]/30 shadow-md flex items-center justify-center text-[#A44E36] text-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
      >
        ❖
      </div>

      <div className="relative pt-9 px-7">
        <div className="relative mx-auto w-[205px] h-[270px] sm:w-[215px] sm:h-[285px] rounded-[50%] overflow-hidden border-[5px] border-[#FFF8EF] shadow-[0_12px_35px_rgba(70,40,20,0.16)] bg-[#E8DED2]">
          <Image
            src={collection.images[currentImageIndex]}
            alt={`${collection.name} handmade Moroccan Berber rug from Taznakht`}
            fill
            sizes="215px"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10 pointer-events-none z-10" />

          {total > 1 && (
            <>
              <button
                onClick={prevImage}
                aria-label={`Previous ${collection.name} image`}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#A44E36]/90 text-white flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 focus-visible:opacity-100 focus-visible:scale-100 transition-all duration-300 shadow-lg z-20"
              >
                ‹
              </button>

              <button
                onClick={nextImage}
                aria-label={`Next ${collection.name} image`}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#A44E36]/90 text-white flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 focus-visible:opacity-100 focus-visible:scale-100 transition-all duration-300 shadow-lg z-20"
              >
                ›
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/25 backdrop-blur-sm z-20">
                {collection.images.map((_: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? "w-5 bg-white" : "w-1.5 bg-white/60"
                    }`}
                    aria-label={`Show image ${idx + 1} of ${total}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-grow text-center px-7 pt-7 pb-7">
        <h3
          className={`font-serif text-2xl sm:text-[25px] tracking-wide mb-1 transition-colors duration-300 ${
            isFeatured ? "text-[#A44E36]" : "text-[#101827]"
          }`}
        >
          {collection.name}
        </h3>
        <p className="text-[10px] font-bold tracking-[0.28em] text-[#A44E36] uppercase mb-4">
          {collection.subtitle}
        </p>
        <p className="text-[#3E4A5C] text-sm leading-6 min-h-[84px] mb-6">
          {collection.description}
        </p>

        <Link
          href={href}
          prefetch={true}
          className="relative overflow-hidden bg-[#A44E36] hover:bg-[#8F3E29] text-white py-3.5 px-6 rounded-full font-bold text-[10px] tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-xl hover:scale-[1.02]"
        >
          <span className="relative z-10">Shop {collection.name} rugs</span>
          <span aria-hidden="true" className="relative z-10 text-base transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      {isFeatured && (
        <div className="absolute inset-[-5px] rounded-[47px] border border-[#A44E36]/20 pointer-events-none" />
      )}
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Product card (Black Friday pricing)                                 */
/* ------------------------------------------------------------------ */
function ProductCard({ rug }: { rug: any }) {
  const { formatPrice } = useCurrency();

  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const selectedSize = rug.sizes?.[selectedSizeIndex];
  const originalPrice = selectedSize?.price || rug.price;
  const discountedPrice = salePrice(originalPrice);
  const hasMultipleSizes = rug.sizes && rug.sizes.length > 1;

  const images: string[] =
    rug.images && rug.images.length > 0
      ? rug.images.slice(0, 5)
      : [rug.image || "/placeholders/ouaouzguite-1.jpg"];

  const currentImage = images[activeImgIndex] || images[0];
  const sizeLabel = selectedSize?.size || "Standard";

  const whatsappUrl = `https://wa.me/212767149114?text=${encodeURIComponent(
    `🏛️ *NEW ORDER - BERBER RUG (BLACK FRIDAY -${DISCOUNT}%)*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `✨ *Rug :* ${rug.name}\n` +
      `📂 *Category :* ${rug.category}\n` +
      `🔖 *SKU :* ${rug.sku}\n` +
      `📏 *Size :* ${sizeLabel}\n` +
      `🏷️ *Regular price :* ${formatPrice(originalPrice)}\n` +
      `💰 *Black Friday price :* ${formatPrice(discountedPrice)}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `📸 *Model Photo :*\n${currentImage}`
  )}`;

  return (
    <div className="bg-white border border-[#A44E36]/15 rounded-2xl flex flex-col h-full shadow-[0_10px_30px_rgba(70,40,20,0.06)] hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative w-full h-[280px] bg-[#F5EFE6] overflow-hidden">
        <Link href={`/rugs/${rug.id}`} prefetch={true}>
          <Image
            src={currentImage}
            alt={`${rug.name} – handmade Moroccan Berber rug, ${sizeLabel}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <div className="absolute top-3 left-3 bg-red-600 text-white px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider shadow-sm z-10">
          -{DISCOUNT}%
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-base font-serif font-bold tracking-wide text-gray-900 mb-1">
            {rug.name}
          </h3>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-bold text-[#A44E36] text-lg">
              {formatPrice(discountedPrice)}
            </span>
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(originalPrice)}
            </span>
          </div>

          <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
            <span className="font-semibold">{rug.sku}</span>
            <span className="text-green-700 font-bold tracking-wider uppercase text-[10px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
              In stock
            </span>
          </div>

          <div className="relative mb-3">
            <RulerIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#A44E36] pointer-events-none z-10" />
            <select
              aria-label={`Size for ${rug.name}`}
              value={selectedSizeIndex}
              onChange={(e) => setSelectedSizeIndex(Number(e.target.value))}
              disabled={!hasMultipleSizes}
              className="block w-full text-xs border border-[#A44E36]/30 py-2 pl-9 pr-3 rounded-lg bg-[#FAF0E4]/40 text-gray-800 focus:outline-none focus:border-[#A44E36] disabled:opacity-75 disabled:cursor-default font-medium"
            >
              {(rug.sizes || []).map(
                (s: { size: string; price: string }, idx: number) => (
                  <option key={idx} value={idx}>
                    {s.size} — {formatPrice(salePrice(s.price))}
                  </option>
                )
              )}
            </select>
          </div>

          {images.length > 1 && (
            <div className="flex items-center gap-2 mb-4 py-1">
              <div className="flex gap-2 overflow-x-auto">
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Show ${rug.name} photo ${idx + 1}`}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all relative bg-[#F5EFE6] ${
                      activeImgIndex === idx
                        ? "border-[#A44E36] scale-105 shadow-sm"
                        : "border-gray-200 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt=""
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
            {rug.description ||
              "An authentic hand-knotted Berber rug in natural wool, woven by women artisans in Taznakht, Morocco."}
          </p>
        </div>

        <div className="pt-3 border-t border-gray-100 flex gap-2">
          <Link
            href={`/rugs/${rug.id}`}
            prefetch={true}
            className="flex-1 text-center py-2.5 px-3 border border-[#A44E36]/30 text-[#A44E36] font-bold text-xs tracking-wider uppercase rounded-xl hover:bg-[#FAF0E4]/50 transition-colors"
          >
            Details
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppContact(rug)}
            className="flex-1 text-center bg-[#A44E36] text-white py-2.5 px-3 font-bold text-xs tracking-wider uppercase rounded-xl hover:bg-[#8a3f2b] transition-colors shadow-sm flex items-center justify-center gap-1.5"
          >
            Order now
          </a>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Static content                                                      */
/* ------------------------------------------------------------------ */
const TRUST_ITEMS = [
  { title: "Hand-knotted", text: "100% wool, woven by Amazigh women" },
  { title: "Direct from the weavers", text: "No middlemen, fair prices" },
  { title: "Worldwide shipping", text: "Europe, USA & Africa" },
  { title: "Order on WhatsApp", text: "Fast replies, personal service" },
];

const FAQS = [
  {
    q: "Are your Berber rugs really handmade?",
    a: "Yes. Every rug is hand-knotted from sheep's wool from the Siroua Mountains by women of 13 families in Taznakht and nearby villages. A rug takes from three weeks to four months to weave, depending on its size and knot density.",
  },
  {
    q: "How do I order a rug?",
    a: "Click “Order now” on any rug. A WhatsApp message with the rug, size and price opens, and we confirm details, payment by bank transfer and shipping with you directly.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we ship to Europe, the USA and Africa. Customs duties may apply depending on your country. See our Shipping Policy for details.",
  },
  {
    q: "Can I order a custom size, color or design?",
    a: "Yes. Our artisans can weave a rug to your dimensions, color palette and symbols. Send us your idea through the custom order page.",
  },
  {
    q: "What is your return policy?",
    a: "Please read our Returns & Exchanges page before ordering. If you have questions, message us on WhatsApp and we will help.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function Home() {
  // Only show rugs that are in stock on the home page
  const dealRugs = rugsData.filter((r: any) => r.isAvailable !== false).slice(0, 8);

  return (
    <div className="w-full flex flex-col bg-[#FAF0E4]">
      {/* 1. HERO: keyword H1 + Black Friday CTA */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0 bg-gray-900">
          <Image
            src="/placeholders/hero-bg.webp"
            alt="Handmade Moroccan Berber rugs woven in Taznakht, Morocco"
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 text-white">
          <p className="text-sm md:text-base tracking-[0.2em] uppercase mb-4 text-[#FAF0E4]">
            Black Friday: {DISCOUNT}% off until {SALE_END_LABEL}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
            Handmade Moroccan Berber Rugs
            <span className="block text-2xl md:text-4xl mt-3 text-[#FAF0E4]">
              Direct from the weavers of Taznakht
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-8 text-gray-100">
            Authentic wool rugs hand-knotted by Amazigh women in the Siroua
            Mountains. Every piece is one of a kind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#deals"
              className="bg-[#A44E36] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors text-center rounded shadow"
            >
              Shop Black Friday deals
            </a>
            <Link
              href="/custom-order"
              prefetch={true}
              className="border border-white text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#A44E36] transition-colors text-center rounded"
            >
              Custom order
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR (replaces the repeated cooperative / ethics blocks) */}
      <section aria-label="Why buy from us" className="bg-[#FFF8EF] border-b border-[#A44E36]/10">
        <ul className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 py-8">
          {TRUST_ITEMS.map((item) => (
            <li key={item.title} className="text-center lg:text-left">
              <p className="font-serif text-base text-gray-950">{item.title}</p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. BLACK FRIDAY DEALS */}
      <section
        id="deals"
        className="bg-[#FAF0E4] py-16 md:py-20 px-4 md:px-8 border-b border-[#A44E36]/10 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-gray-950 font-normal mb-3">
              Black Friday: {DISCOUNT}% off handmade Berber rugs
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mb-6 leading-relaxed">
              Every rug in stock is {DISCOUNT}% off until {SALE_END_LABEL}. Each
              piece is unique, so when it is gone, it is gone.
            </p>
            <Link
              href="/rugs"
              prefetch={true}
              className="bg-[#A44E36] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors text-center rounded-xl shadow-sm"
            >
              View all rugs
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {dealRugs.map((rug: any) => (
              <ProductCard key={rug.id} rug={rug} />
            ))}
          </div>

          <div className="mt-14 bg-[#FFF8EF] border border-[#A44E36]/25 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl tracking-wide text-gray-950 font-normal mb-2">
                Can&apos;t find the right size or design?
              </h3>
              <p className="text-gray-600 text-sm max-w-xl">
                We weave custom Berber rugs in the dimensions, colors and symbols
                of your choice.
              </p>
            </div>
            <Link
              href="/custom-order"
              prefetch={true}
              className="whitespace-nowrap bg-[#A44E36] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors rounded-xl shadow-md"
            >
              Request a custom rug
            </Link>
          </div>
        </div>
      </section>

      {/* 4. COLLECTIONS */}
      <section className="relative bg-[#F8EFE3] py-20 md:py-24 overflow-hidden border-b border-[#A44E36]/10">
        <div className="relative max-w-[1500px] mx-auto">
          <div className="text-center mb-12 px-4">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-gray-950 font-normal mb-3">
              Shop Berber rugs by collection
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              From Glaoui to Akhenif, each Taznakht tradition has its own
              patterns and colors. Swipe to see them all.
            </p>
          </div>

          <div
            id="collections-carousel"
            className="flex gap-5 md:gap-6 overflow-x-auto overflow-y-visible px-4 md:px-8 lg:px-12 pt-10 pb-16 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {collectionsData.map((collection: any, index: number) => (
              <CollectionCard key={collection.id} collection={collection} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR STORY (one short section instead of 5 repeated ones) */}
      <section className="bg-[#FAF0E4] py-16 md:py-20 px-4 md:px-8 border-b border-[#A44E36]/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E8DED2]">
            <Image
              src="/placeholders/artisans-group.jpg"
              alt="Women weavers of the Taznakht cooperative at the loom"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-gray-950 font-normal mb-4">
              Woven by 13 families in the Siroua Mountains
            </h2>
            <p className="text-gray-700 leading-7 mb-4">
              Since 2003, our cooperative in Taznakht has brought together
              Amazigh women who knot every rug by hand from Siroua sheep&apos;s
              wool. They draw their patterns from mountains, plants and animals,
              from memory, with no sketch to follow.
            </p>
            <p className="text-gray-700 leading-7 mb-6">
              Buying direct means fair pay for the weavers and a fair price for
              you.
            </p>
            <Link
              href="/story"
              prefetch={true}
              className="inline-block border border-[#A44E36] text-[#A44E36] px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#A44E36] hover:text-white transition-colors rounded-xl"
            >
              Meet the weavers
            </Link>
          </div>
        </div>
      </section>

      {/* 6. REVIEWS */}
      <CustomerReviews />

      {/* 7. FAQ (native <details>, no JS) */}
      <section className="bg-[#F8EFE3] py-16 md:py-20 px-4 md:px-8 border-t border-[#A44E36]/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-gray-950 font-normal mb-8 text-center">
            Questions about our Berber rugs
          </h2>
          <div className="divide-y divide-[#A44E36]/15 border-y border-[#A44E36]/15">
            {FAQS.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-gray-950">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="text-[#A44E36] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-700 leading-7">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600 text-center">
            See also our{" "}
            <Link href="/shipping" className="underline text-[#A44E36]">Shipping Policy</Link>{" "}
            and{" "}
            <Link href="/returns" className="underline text-[#A44E36]">Returns &amp; Exchanges</Link>.
          </p>
        </div>
      </section>

      {/* 8. FINAL CTA + FEATURES */}
      <ExperienceSection />
      <Features />
    </div>
  );
}