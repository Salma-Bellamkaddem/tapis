import type { MetadataRoute } from "next";

// Même domaine que le sitemap, les canonicals et metadataBase (sans www).
const SITE = "https://rugsberber.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Moteurs de recherche classiques + crawlers IA (GEO) : tous autorisés.
        // Lister les bots IA explicitement évite toute ambiguïté si vous ajoutez des règles plus tard.
        userAgent: [
          "*",
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "PerplexityBot",
          "Google-Extended",
        ],
        allow: "/",
        // Pages sans valeur SEO (panier/commande, API). Ajoutez /admin/ si vous en créez un.
        disallow: ["/checkout", "/api/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}