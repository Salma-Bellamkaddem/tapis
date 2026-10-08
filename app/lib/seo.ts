export const SITE_URL = "https://rugsberber.com";

// Identité unique : ne plus mélanger les noms
export const BRAND_NAME = "Rugs Berber";                  // Brand (marque)
export const ORG_NAME = "Cooperative Berber Rugs";        // Organization (vendeur)

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

// Sérialisation JSON-LD sûre (évite l'injection de </script>)
export const toJsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");