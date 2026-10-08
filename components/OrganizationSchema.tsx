interface OrganizationSchemaProps {
  locale?: string;
}

export default function OrganizationSchema({}: OrganizationSchemaProps) {
  const siteUrl = "https://www.rugsberber.com";
  const phoneNumber = "+212767149114";
  const email = "contact@rugsberber.com";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${siteUrl}/#organization`,

    name: "Cooperative Berber Rugs",
    alternateName: "Rugs Berber",

    url: siteUrl,

    description:
      "Authentic handmade Moroccan Berber rugs from Taznakht, Morocco. Handwoven by Moroccan women artisans using traditional Amazigh weaving techniques. Discover Ouaouzguit, Glaoui, Akhenif, Zanifi and Picasso rugs.",

    telephone: phoneNumber,
    email: email,

    logo: {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#logo`,
      url: `${siteUrl}/placeholders/logo3.webp`,
      contentUrl: `${siteUrl}/placeholders/logo3.webp`,
      caption: "Cooperative Berber Rugs logo",
    },

    image: [
      `${siteUrl}/placeholders/logo3.webp`,
    ],

    address: {
      "@type": "PostalAddress",
      addressLocality: "Taznakht",
      addressRegion: "Drâa-Tafilalet",
      postalCode: "45250",
      addressCountry: "MA",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.5579,
      longitude: -7.2023,
    },

    priceRange: "$$",

    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: phoneNumber,
      email: email,
      availableLanguage: ["English"],
    },

    sameAs: [
      "https://www.instagram.com/traditional_berber_carpets/",
    ],

    knowsAbout: [
      "Moroccan Berber rugs",
      "Handmade Moroccan rugs",
      "Taznakht rugs",
      "Amazigh weaving",
      "Moroccan wool rugs",
      "Ouaouzguit rugs",
      "Glaoui rugs",
      "Akhenif rugs",
      "Zanifi rugs",
      "Picasso rugs",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}