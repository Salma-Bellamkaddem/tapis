import { rugsData } from "@/data/products";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProductDetailClient from "@/components/ProductDetailClient";

// Génération dynamique des métadonnées SEO sur le serveur
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const rug = rugsData.find((r) => r.id === resolvedParams.id);

  if (!rug) {
    return {
      title: "Rug Not Found | Berber Rugs Cooperative",
    };
  }

  const siteUrl = "https://www.rugsberber.com";

  return {
    title: `${rug.name} (${rug.sku}) | Authentic ${rug.category} Berber Rug`,
    description: rug.description || `Buy authentic ${rug.name} online. Hand-woven by rural Moroccan women artisans in the Atlas mountains. Worldwide shipping.`,
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
      description: rug.description || "Handmade Moroccan Berber carpet crafted with pure living wool.",
      url: `${siteUrl}/rugs/${rug.id}`,
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
      canonical: `${siteUrl}/rugs/${rug.id}`,
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

  return <ProductDetailClient rug={rug} />;
}