
import type { MetadataRoute } from "next";
import { collectionsData, rugsData } from "@/data/products";

const SITE = "https://rugsberber.com";

const SLUG_FIX: Record<string, string> = {
  ouaouzguite: "ouaouzguit",
  "picasso-berber": "picasso",
  "tapis tableau": "tableau",
  "mouzaïk": "mouzaik",
  runner: "runner",
};

// Conserver les correspondances historiques.
function toSlug(id: string): string {
  const value = String(id).trim().toLowerCase();

  if (SLUG_FIX[value]) {
    return SLUG_FIX[value];
  }

  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Éviter les URLs dupliquées.
function uniqueByUrl(
  pages: MetadataRoute.Sitemap
): MetadataRoute.Sitemap {
  return Array.from(
    new Map(pages.map((page) => [page.url, page])).values()
  );
}

// Transformer une image en URL absolue.
function absoluteImageUrl(image?: string): string[] {
  if (!image) return [];

  try {
    return [new URL(image, SITE).toString()];
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/`,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE}/collections`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE}/rugs`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE}/custom-order`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/story`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE}/visit`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE}/contact`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE}/shipping`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE}/returns`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const collectionPages: MetadataRoute.Sitemap =
    Array.from(
      new Set(
        collectionsData.map((collection) =>
          toSlug(String(collection.id))
        )
      )
    ).map((slug) => ({
      url: `${SITE}/collections/${encodeURIComponent(slug)}`,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  const productPages: MetadataRoute.Sitemap =
    rugsData.map((rug) => ({
      // Conserver l'identifiant de route existant.
      url: `${SITE}/rugs/${encodeURIComponent(String(rug.id))}`,

      changeFrequency: "monthly",
      priority: 0.7,

      images: absoluteImageUrl(rug.images?.[0]),
    }));

  return uniqueByUrl([
    ...staticPages,
    ...collectionPages,
    ...productPages,
  ]);
}
