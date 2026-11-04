import type { MetadataRoute } from "next";

const SITE = "https://rugsberber.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
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
        disallow: ["/checkout", "/api/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  };
}