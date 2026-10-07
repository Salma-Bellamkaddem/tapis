import { rugsData } from "@/data/products";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProductDetailClient from "@/components/ProductDetailClient";

// ⚠️ Une seule version du domaine, la même que celle déclarée sur Pinterest
const SITE_URL = "https://rugsberber.com";
const BRAND = "Cooperative Berber Rugs";

type Rug = (typeof rugsData)[number];

// "$350" -> { value: "350.00", currency: "USD" } | "45000 MAD" -> { value: "45000.00", currency: "MAD" }
function parsePrice(raw: string) {
  const amount = raw.replace(/[^0-9.,]/g, "").replace(/,/g, "");
  const currency = /MAD|DH/i.test(raw) ? "MAD" : /€|EUR/i.test(raw) ? "EUR" : "USD";
  return { value: Number(amount).toFixed(2), currency };
}

function truncate(text: string, max = 160) {
  return text.length > max ? text.slice(0, max - 1).trimEnd() + "…" : text;
}

function buildJsonLd(rug: Rug) {
  const url = `${SITE_URL}/rugs/${rug.id}`;
  const available = rug.isAvailable !== false;
  const sizes = rug.sizes && rug.sizes.length > 0 ? rug.sizes : [{ size: rug.dimensions || "Standard", price: rug.price }];

  const offers = sizes.map((s) => {
    const { value, currency } = parsePrice(s.price || rug.price);
    return {
      "@type": "Offer",
      url,
      price: value,
      priceCurrency: currency,
      availability: available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: BRAND },
      ...(sizes.length > 1 ? { name: s.size } : {}),
    };
  });

  // TODO: quand vos politiques sont définies, ajoutez ici shippingDetails
  // et hasMerchantReturnPolicy dans chaque Offer (Pinterest/Google les apprécient).

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${rug.name} (${rug.sku})`,
    sku: rug.sku,
    image: rug.images,
    description: rug.description || `Handmade Moroccan Berber rug woven by rural Amazigh women in Taznakht, Morocco.`,
    category: rug.category,
    material: "Wool",
    size: sizes[0].size,
    brand: { "@type": "Brand", name: BRAND },
    offers: offers.length === 1 ? offers[0] : offers,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const rug = rugsData.find((r) => r.id === resolvedParams.id);

  if (!rug) {
    return { title: "Rug Not Found | Berber Rugs Cooperative" };
  }

  const fallbackDescription = `Buy authentic ${rug.name} online. Hand-woven by rural Moroccan women artisans in the Siroua Mountains. Worldwide shipping.`;
  const description = truncate(rug.description || fallbackDescription);

  return {
    title: `${rug.name} (${rug.sku}) | Authentic ${rug.category} Berber Rug`,
    description,
    keywords: [
      rug.name,
      `${rug.category} rug`,
      `Moroccan ${rug.category} carpet`,
      `SKU ${rug.sku}`,
      "handmade Moroccan rug",
      "authentic Berber carpet",
      "buy Berber rug online",
    ],
    openGraph: {
      title: `${rug.name} - Authentic ${rug.category} Berber Rug`,
      description,
      url: `${SITE_URL}/rugs/${rug.id}`,
      siteName: BRAND,
      images: [
        {
          url: rug.images[0],
          width: 800,
          height: 1000,
          alt: `${rug.name} - Berber Carpet`,
        },
      ],
    },
    alternates: {
      canonical: `${SITE_URL}/rugs/${rug.id}`,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const rug = rugsData.find((r) => r.id === resolvedParams.id);

  if (!rug) {
    return notFound();
  }

  const jsonLd = JSON.stringify(buildJsonLd(rug)).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <ProductDetailClient rug={rug} />
    </>
  );
}