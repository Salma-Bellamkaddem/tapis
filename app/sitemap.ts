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
const toSlug = (id: string) => SLUG_FIX[id.toLowerCase()] ?? id.toLowerCase();

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/collections`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/rugs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/custom-order`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/story`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE}/shipping`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE}/returns`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  const collectionSlugs = Array.from(
    new Set(collectionsData.map((c) => toSlug(String(c.id))))
  );
  const collectionPages: MetadataRoute.Sitemap = collectionSlugs.map((slug) => ({
    url: `${SITE}/collections/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const productPages: MetadataRoute.Sitemap = rugsData.map((rug) => ({
    url: `${SITE}/rugs/${rug.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
    images: rug.images?.[0] ? [rug.images[0]] : [],
  }));

  return [...staticPages, ...collectionPages, ...productPages];
}