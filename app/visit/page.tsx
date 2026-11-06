import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { collectionsData } from "@/data/products";

const SITE = "https://rugsberber.com";
const BRAND = "Cooperative Berber Rugs";
const WHATSAPP_NUMBER = "212767149114";

// TODO: replace with the exact Google Maps link / embed of your cooperative.
// Google Maps > Share > Embed a map > copy the src="..." URL into MAP_EMBED_URL.
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Cooperative+Berber+Carpets+Tazenakht&output=embed";

const MAP_LINK =
  "https://www.google.com/maps/place/Cooperative+Berber+Carpets+Tazenakht./data=!4m2!3m1!1s0x0:0x594ec0edc0bb4b6c";// TODO: replace with your real cooperative photos (put them in /public/placeholders).
const COOP_PHOTOS = [
  { src: "/placeholders/cooperativehome.jpeg ", alt: "Women weavers of the Taznakht cooperative at the loom" },
  { src: "/placeholders/zanifi-1.jpeg", alt: "Handmade Berber rugs from the cooperative in Taznakht, Morocco" },
  { src: "/placeholders/empowerment.jpeg", alt: "Amazigh artisans weaving wool rugs in Taznakht" },
];

const ARTISANS = [
  {
    title: "Hand-knotting",
    text: "Each knot is tied by hand in Siroua sheep's wool. A single rug can take from three weeks to four months, depending on its size and density.",
  },
  {
    title: "Weaving from memory",
    text: "The weavers draw their patterns from the mountains, plants and animals around them, from memory, with no sketch to follow.",
  },
  {
    title: "Embroidery & symbols",
    text: "Woven, woolen and embroidered Amazigh symbols carry stories and meanings passed from mother to daughter.",
  },
];

export const metadata: Metadata = {
  title: "Visit Our Cooperative in Taznakht, Morocco",
  description:
    "Visit our Berber rug cooperative in Taznakht, Morocco. Meet the Amazigh women weavers, discover our story and collections, and arrange your visit on WhatsApp.",
  alternates: { canonical: `${SITE}/visit` },
  openGraph: {
    title: `Visit Our Cooperative | ${BRAND}`,
    description:
      "Meet the Amazigh women weavers of Taznakht and see handmade Berber rugs where they are made.",
    url: `${SITE}/visit`,
    type: "website",
    siteName: BRAND,
  },
};

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello! I would like to visit your cooperative in Taznakht.\n\n" +
    "Preferred date: \n" +
    "Number of people: \n" +
    "I am interested in: "
)}`;

function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-[#A44E36] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#8a3f2b] transition-colors rounded-xl shadow-md ${className}`}
    >
      Arrange a visit on WhatsApp
    </a>
  );
}

export default function VisitPage() {
  return (
    <main className="w-full bg-[#FAF0E4]">
      {/* HERO */}
      <section className="relative w-full h-[420px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 bg-gray-900">
          <Image
            src="/placeholders/e.jpeg"
            alt="Berber rug cooperative in Taznakht, Morocco"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-white px-4 max-w-3xl">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase mb-4 text-[#FAF0E4]">
            Taznakht · Siroua Mountains · Morocco
          </p>
          <h1 className="font-serif text-4xl md:text-6xl mb-5 tracking-wide">
            Visit Our Cooperative
          </h1>
          <p className="text-base md:text-lg text-gray-100 mb-8">
            Meet the Amazigh women who weave your rugs, see the looms at work and
            choose your rug at the source.
          </p>
          <WhatsAppButton />
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <li>
            <Link href="/" className="hover:text-[#A44E36] transition-colors">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium">Visit Our Cooperative</li>
        </ol>
      </nav>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E8DED2]">
          <Image
            src={COOP_PHOTOS[0].src}
            alt={COOP_PHOTOS[0].alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase">
            Our story
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-950 mt-3 mb-5">
            A cooperative born in the Siroua Mountains
          </h2>
          <p className="text-gray-700 leading-7 mb-4">
            Since 2003, our cooperative in Taznakht has brought together Amazigh
            women from 13 families in the town and nearby villages. Together they
            keep alive a weaving tradition passed down through generations.
          </p>
          <p className="text-gray-700 leading-7">
            Every rug is made from Siroua sheep&apos;s wool and sold directly by the
            cooperative: fair pay for the weavers, a fair price for you, and no
            middlemen.
          </p>
        </div>
      </section>

      {/* ARTISANS */}
      <section className="bg-[#FFF8EF] border-y border-[#A44E36]/10 py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase">
              The artisans
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-950 mt-3 mb-4">
              Meet the women behind each rug
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              During your visit you can watch the weavers at the loom, learn how a
              pattern is created and talk with the artisans about their work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTISANS.map((a) => (
              <div
                key={a.title}
                className="bg-white rounded-3xl border border-[#A44E36]/10 p-8 shadow-sm"
              >
                <h3 className="font-serif text-xl text-gray-900 mb-3">{a.title}</h3>
                <p className="text-sm text-gray-600 leading-7">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-950 text-center mb-10">
          Inside the cooperative
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {COOP_PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#E8DED2]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="bg-[#F8EFE3] border-y border-[#A44E36]/10 py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-950 mb-4">
              Collections you can discover on site
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Each Taznakht tradition has its own technique, patterns and colors.
              Browse them online before your visit.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {collectionsData.map((collection: any) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#A44E36]/10 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-[#E8DED2]">
                  <Image
                    src={collection.images[0]}
                    alt={`${collection.name} Berber rugs from Taznakht, Morocco`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif text-lg text-gray-900 group-hover:text-[#A44E36] transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#A44E36] uppercase mt-1">
                    {collection.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase">
              Find us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-950 mt-3 mb-5">
              Taznakht, southern Morocco
            </h2>
            <p className="text-gray-700 leading-7 mb-4">
              Taznakht sits in the Siroua Mountains, a historic center of Moroccan
              Berber rug weaving. Message us on WhatsApp and we will send you the
              exact directions and agree on a day and time.
            </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-8">
              <li>• Visits are by appointment</li>
              <li>• Tell us your dates and the number of people</li>
              <li>• Worldwide shipping if you prefer to buy on site</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppButton />
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#A44E36] text-[#A44E36] px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#A44E36] hover:text-white transition-colors rounded-xl"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#A44E36]/15 shadow-md bg-[#E8DED2]">
            <iframe
              title="Map of the Berber rug cooperative in Taznakht, Morocco"
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 md:px-8 pb-20">
        <div className="max-w-4xl mx-auto bg-[#FFF8EF] border border-[#A44E36]/25 rounded-2xl p-8 md:p-12 text-center shadow-sm">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-950 mb-3">
            Ready to meet the weavers?
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-6">
            Send us a message and we will organize your visit to the cooperative.
          </p>
          <WhatsAppButton />
        </div>
      </section>
    </main>
  );
}