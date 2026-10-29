import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ExperienceSection from "../components/ExperienceSection";
import Features from "../components/Features";
import ShopByStyle from "../components/ShopByStyle";
import MeetArtisans from "../components/MeetArtisans";
import WoolToRug from "../components/WoolToRug";
import EthicalImpact from "../components/EthicalImpact";
import AboutCooperative from "../components/AboutCooperative";
import CustomerReviews from "@/components/CustomerReviews";
import SaleBanner from "../components/SaleBanner";
import TopRugs from "../components/TopRugs";
import CollectionsCarousel from "../components/CollectionsCarousel";
import { rugsData } from "@/data/products";
import { SITE_URL, BASE_CURRENCY, SALE, isSaleActive, salePrice } from "@/app/lib/sale";

const TITLE = `Authentic Berber Rugs from Morocco – ${SALE.name} -${SALE.percent}% | Handmade in Taznakht`;
const DESCRIPTION = `Shop handmade Moroccan Berber rugs woven by Amazigh women in Taznakht. ${SALE.name} sale: -${SALE.percent}% on all rugs. 100% wool, natural dyes, custom sizes, worldwide shipping.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "Berber rugs", "Moroccan rugs", "Taznakht rugs", "Amazigh carpets",
    "handmade wool rugs", "Black Friday rugs", "Azilal rugs", "Boucherouite", "custom Berber rug",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Cooperative Berber Rugs",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/placeholders/hero-bg.webp", width: 1600, height: 900, alt: "Handcrafted Moroccan Berber rugs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/placeholders/hero-bg.webp"],
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

// ⚠️ Vérifiez/complétez ces réponses avec vos vraies informations (délais, retours…)
const FAQ = [
  {
    q: "Where are your Berber rugs made?",
    a: "Our rugs are hand-woven by rural Amazigh (Berber) women artisans in the Siroua Mountains near Taznakht, Morocco, a historic center of Moroccan carpet weaving.",
  },
  {
    q: "Are your Moroccan rugs really handmade?",
    a: "Yes. Every rug is hand-knotted piece by piece from 100% pure wool and natural dyes. No two rugs are identical.",
  },
  {
    q: `Is there a ${SALE.name} offer?`,
    a: `Yes. During our ${SALE.name} sale, all rugs are ${SALE.percent}% off until November 30, 2026 (Cyber Monday), while the artisans' fair pay is unchanged.`,
  },
  {
    q: "Can I order a custom Berber rug?",
    a: "Yes. We weave custom rugs in the dimensions, color palette and symbols of your choice. Request one on our custom order page or via WhatsApp.",
  },
  {
    q: "Do you ship worldwide?",
    a: "Yes. We ship securely to Europe, the USA, Africa and other destinations. Contact us on WhatsApp for a shipping quote to your country.",
  },
  {
    q: "How do I order a rug?",
    a: "Choose a rug, click Order and send the pre-filled message to our team on WhatsApp. We confirm availability, size, price and delivery with you directly.",
  },
];

function absolute(url: string) {
  return url.startsWith("http") ? url : `${SITE_URL}${url}`;
}

export default function Home() {
  const onSale = isSaleActive();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "Store"],
        "@id": `${SITE_URL}/#org`,
        name: "Cooperative Berber Rugs",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`, // ⚠️ chemin réel du logo
        image: `${SITE_URL}/placeholders/hero-bg.webp`,
        description: DESCRIPTION,
        telephone: "+212767149114",
        address: { "@type": "PostalAddress", addressLocality: "Taznakht", addressCountry: "MA" },
        areaServed: ["Worldwide"],
        knowsAbout: ["Berber rugs", "Moroccan carpets", "Amazigh weaving", "Taznakht rugs"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+212767149114",
          contactType: "customer service",
          availableLanguage: ["English", "French", "Arabic"],
        },
       sameAs: ["https://www.instagram.com/traditional_berber_carpets", "https://www.facebook.com/CooperativeBerbercarpet"], // ⚠️ à ajouter
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Cooperative Berber Rugs",
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "ItemList",
        name: "Handmade Berber rugs",
        itemListElement: rugsData.slice(0, 12).map((rug: any, i: number) => {
          const size = rug.sizes?.[0];
          const img = rug.images?.[0] || rug.image;
          return {
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: rug.name,
              sku: rug.sku,
              category: rug.category,
              description: rug.description || `Authentic handmade ${rug.category} Berber rug woven in Taznakht, Morocco.`,
              ...(img && { image: absolute(img) }),
              brand: { "@type": "Brand", name: "Cooperative Berber Rugs" },
              material: "Wool",
              countryOfOrigin: "MA",
              offers: {
                "@type": "Offer",
                url: `${SITE_URL}/rugs/${rug.id}`,
                priceCurrency: BASE_CURRENCY,
                price: salePrice(size?.price ?? rug.price),
                ...(onSale && { priceValidUntil: SALE.priceValidUntil }),
                itemCondition: "https://schema.org/NewCondition",
                availability:
                  rug.isAvailable !== false ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
              },
            },
          };
        }),
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="w-full flex flex-col bg-[#FAF0E4]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SaleBanner />

      {/* 1. HERO */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0 bg-gray-900">
          <Image
            src="/placeholders/hero-bg.webp"
            alt="Handwoven Moroccan Berber rugs by Amazigh women artisans in Taznakht"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 text-white">
          {onSale && (
            <span className="inline-block mb-4 bg-[#E8B04B] text-[#101827] text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
              {SALE.name} · -{SALE.percent}% on all rugs
            </span>
          )}
          <p className="block text-sm md:text-base tracking-[0.2em] uppercase mb-4 text-[#FAF0E4]">
            Hand made by Moroccan rural women
          </p>
          <h1 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
            Authentic Handmade Berber Rugs <br />
            <span className="text-[#E8B04B]">Woven by Hand. Rooted in Heritage.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-lg mb-6 text-gray-100">
            Berber women read symbols in nature — mountains, trees, plants, animals, insects — then weave them into carpets, guided only by imagination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/rugs" prefetch className="bg-[#A44E36] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors text-center rounded shadow">
              {onSale ? `Shop the ${SALE.name} Sale` : "Explore Our Rugs"}
            </Link>
            <Link href="/custom-order" prefetch className="border border-white text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#A44E36] transition-colors text-center rounded">
              Custom Order
            </Link>
          </div>
        </div>
      </section>

      {/* 1b. GEO : réponse directe, citable par les moteurs IA */}
      <section className="bg-[#FFF8EF] px-4 md:px-8 py-10 border-b border-[#A44E36]/10">
        <p className="max-w-4xl mx-auto text-center text-sm md:text-base text-gray-700 leading-relaxed">
          <strong>Cooperative Berber Rugs</strong> sells authentic handmade Moroccan Berber rugs, hand-knotted from 100% wool with natural dyes
          by Amazigh women artisans in the Siroua Mountains near Taznakht, Morocco. Each rug is unique, custom sizes are available,
          and we ship worldwide.{" "}
          {onSale && (
            <>
              During <strong>{SALE.name} 2026</strong>, every rug is <strong>{SALE.percent}% off</strong> until November 30.
            </>
          )}
        </p>
      </section>

      {/* 2. ABOUT COOPERATIVE */}
      <AboutCooperative />

      {/* 3. TOP RUGS */}
      <section className="bg-[#FAF0E4] py-20 px-4 md:px-8 border-b border-[#A44E36]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase mb-2 block">
              {onSale ? `${SALE.name} · -${SALE.percent}%` : "Exceptional pieces"}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl tracking-widest text-gray-950 uppercase font-normal mb-3">
              Our Berber Rugs
            </h2>
            <p className="text-xs md:text-sm text-gray-600 max-w-2xl mb-6 leading-relaxed">
              Woven by rural Amazigh women in the Siroua Mountains near Taznakht, Morocco, each rug carries generations of ancestral craftsmanship.
              Taznakht, a historic center of Moroccan carpet weaving, is celebrated for its five distinctive rug traditions, each shaped by the
              landscapes, symbols and stories of the region. Long appreciated for their artistry and cultural value, these exceptional rugs have
              found their place in refined interiors and distinguished private collections.
            </p>
            <Link href="/rugs" prefetch className="bg-[#A44E36] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors text-center rounded-xl shadow-sm">
              View All Rugs &rarr;
            </Link>
          </div>

          <TopRugs />

          <div className="mt-14 bg-[#FFF8EF] border border-[#A44E36]/25 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase mb-2 block">Made to order</span>
              <h3 className="font-serif text-2xl md:text-3xl tracking-wide text-gray-950 font-normal mb-2">
                Can&apos;t find the right size or design?
              </h3>
              <p className="text-gray-600 text-xs md:text-sm max-w-xl">
                We also weave custom Berber rugs — dimensions, color palettes, and symbols of your choice, crafted by hand by our women artisans.
              </p>
            </div>
            <Link href="/custom-order" prefetch className="whitespace-nowrap bg-[#A44E36] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors rounded-xl shadow-md">
              Request Custom Rug
            </Link>
          </div>
        </div>
      </section>

      {/* 4. COLLECTIONS */}
      <section className="relative bg-[#F8EFE3] py-24 md:py-28 overflow-hidden border-b border-[#A44E36]/10">
        <div className="relative max-w-[1500px] mx-auto">
          <div className="text-center mb-16 px-4">
            <div className="flex items-center justify-center gap-5 mb-5" aria-hidden="true">
              <span className="w-16 h-px bg-[#A44E36]/30" />
              <span className="text-[#A44E36] text-2xl">◈</span>
              <span className="w-16 h-px bg-[#A44E36]/30" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-widest text-gray-950 uppercase font-normal mb-3">
              Explore Our Rug Collections
            </h2>
            <p className="mt-5 text-[10px] md:text-xs text-[#A44E36] font-bold tracking-[0.24em] uppercase">
              Hand made by rural women — swipe to discover all categories
            </p>
          </div>
          <CollectionsCarousel />
        </div>
      </section>

      <ShopByStyle />
      <MeetArtisans />
      <WoolToRug />
      <EthicalImpact />
      <CustomerReviews />

      {/* FAQ visible (doit correspondre au JSON-LD FAQPage) */}
      <section className="bg-[#FAF0E4] py-20 px-4 md:px-8 border-t border-[#A44E36]/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl tracking-widest text-gray-950 uppercase font-normal text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="group bg-white border border-[#A44E36]/15 rounded-xl p-5">
                <summary className="cursor-pointer font-serif font-bold text-gray-900 list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-[#A44E36] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ExperienceSection />
      <Features />
    </div>
  );
}