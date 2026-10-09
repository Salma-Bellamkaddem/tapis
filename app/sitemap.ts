import type { MetadataRoute } from "next";
import { collectionsData, rugsData } from "@/data/products";

// Une seule version du domaine partout (sitemap, canonicals, metadataBase, OG).
// Votre site redirige www -> sans www : on garde donc SANS www.
// Si vous préférez www, changez ici ET dans tous les canonicals + ajoutez la redirection inverse.
const SITE = "https://rugsberber.com";

// Anciens ids de catégories -> slugs réels de vos pages /collections/[slug]
const SLUG_FIX: Record<string, string> = {
  ouaouzguite: "ouaouzguit",
  "picasso-berber": "picasso",
  "tapis tableau": "tableau",
  "mouzaïk": "mouzaik",
};
const toSlug = (id: string) => SLUG_FIX[id.toLowerCase()] ?? id.toLowerCase();

export default function sitemap(): MetadataRoute.Sitemap {
  // lastModified : omis volontairement. `new Date()` sur toutes les URLs change à chaque
  // build, Google finit par ignorer le champ. Ajoutez une vraie date (ex. rug.updatedAt) si vous en avez.

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/collections`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/rugs`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/custom-order`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/story`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE}/shipping`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE}/returns`, changeFrequency: "yearly", priority: 0.4 },
  ];

  // Pages collections : /collections/[slug] (et non /rugs?category=...)
  const collectionSlugs = Array.from(new Set(collectionsData.map((c) => toSlug(String(c.id)))));
  const collectionPages: MetadataRoute.Sitemap = collectionSlugs.map((slug) => ({
    url: `${SITE}/collections/${slug}`,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Pages produits : absentes de votre version, ce sont les plus importantes pour vendre
  const productPages: MetadataRoute.Sitemap = rugsData.map((rug) => ({
    url: `${SITE}/rugs/${rug.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...collectionPages, ...productPages];
}