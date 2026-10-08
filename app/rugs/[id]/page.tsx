import { rugsData } from "@/data/products";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProductDetailClient from "@/components/ProductDetailClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { getCollectionByCategory, getRelatedRugs } from "@/app/lib/collections";
import { absoluteUrl, BRAND_NAME, ORG_NAME, SITE_URL, toJsonLd } from "@/app/lib/seo";

export function generateStaticParams() {
  return rugsData.map((rug) => ({ id: rug.id }));
}

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

function buildProductJsonLd(rug: Rug, collectionName: string) {
  const url = absoluteUrl(`/rugs/${rug.id}`);
  const available = rug.isAvailable !== false;
  const sizes =
    rug.sizes && rug.sizes.length > 0
      ? rug.sizes
      : [{ size: rug.dimensions || "Standard", price: rug.price }];

  const offers = sizes.map((s) => {
    const { value, currency } = parsePrice(s.price || rug.price);
    return {
      "@type": "Offer",
      url,
      price: value,
      priceCurrency: currency,
      availability: available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: ORG_NAME },
      ...(sizes.length > 1 ? { name: s.size } : {}),
    };
  });

  // TODO: ajouter shippingDetails et hasMerchantReturnPolicy quand vos politiques sont définies.

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: rug.name,                       // sans le SKU
    sku: rug.sku,
    url,
    image: rug.images,
    description:
      rug.description ||
      "Handmade Moroccan Berber rug woven by rural Amazigh women in Taznakht, Morocco.",
    category: `${collectionName} Berber Rugs`,
    material: "Wool",
    size: sizes[0].size,
    brand: { "@type": "Brand", name: BRAND_NAME },
    offers: offers.length === 1 ? offers[0] : offers,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const rug = rugsData.find((r) => r.id === id);

  if (!rug) {
    return { title: "Rug Not Found | Rugs Berber" };
  }

  const collectionName = getCollectionByCategory(rug.category)?.name ?? rug.category;
  const fallbackDescription = `Buy authentic ${rug.name} online. Hand-woven by rural Moroccan women artisans in the Siroua Mountains. Worldwide shipping.`;
  const description = truncate(rug.description || fallbackDescription);
  const url = absoluteUrl(`/rugs/${rug.id}`);

  return {
    title: `${rug.name} (${rug.sku}) | Authentic ${collectionName} Berber Rug`,
    description,
    keywords: [
      rug.name,
      `${collectionName} rug`,
      `Moroccan ${collectionName} carpet`,
      `SKU ${rug.sku}`,
      "handmade Moroccan rug",
      "authentic Berber carpet",
      "buy Berber rug online",
    ],
    openGraph: {
      title: `${rug.name} - Authentic ${collectionName} Berber Rug`,
      description,
      url,
      siteName: BRAND_NAME,
      images: [
        {
          url: rug.images[0],
          width: 800,
          height: 1000,
          alt: `${rug.name} – handmade Moroccan Berber rug from Taznakht`,
        },
      ],
    },
    alternates: { canonical: url },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const rug = rugsData.find((r) => r.id === id);

  if (!rug) return notFound();

  const collection = getCollectionByCategory(rug.category);
  const collectionName = collection?.name ?? rug.category;
  const related = getRelatedRugs(rug, 3);

  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    ...(collection
      ? [{ name: collection.seoName, url: absoluteUrl(`/collections/${collection.slug}`) }]
      : [{ name: "Rugs", url: absoluteUrl("/rugs") }]),
    { name: rug.name, url: absoluteUrl(`/rugs/${rug.id}`) },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(buildProductJsonLd(rug, collectionName)),
        }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
  

      <ProductDetailClient rug={rug} />
      
    </>
  );
}