// À placer UNE SEULE FOIS, dans app/layout.tsx (dans <body>). Ne pas le mettre aussi sur les autres pages.
export default function OrganizationSchema() {
  // Même domaine que le sitemap, robots, canonicals et metadataBase (sans www).
  const siteUrl = "https://rugsberber.com";
  const phoneNumber = "+212767149114";

  // ⚠️ Doit être EXACTEMENT l'e-mail affiché sur le site (footer / page contact).
  // Le site affiche actuellement youness.ait.uness@gmail.com. Soit vous gardez celui-ci,
  // soit vous créez contact@rugsberber.com et vous le mettez aussi sur le site.
  const email = "contact@rugsberber.com";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${siteUrl}/#organization`,

    name: "Cooperative Berber Rugs",
    alternateName: "Rugs Berber",
    url: siteUrl,
    foundingDate: "2003",

    description:
      "Authentic handmade Moroccan Berber rugs from Taznakht, Morocco. Handwoven in sheep's wool by rural Amazigh women artisans in the Siroua Mountains. Collections: Ouaouzguit, Glaoui, Mouzaïk, Akhenif, Tapis Tableau, Picasso Berber and Zanifi.",

    telephone: phoneNumber,
    email,

    logo: {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#logo`,
      url: `${siteUrl}/placeholders/logo3.webp`,
      contentUrl: `${siteUrl}/placeholders/logo3.webp`,
      caption: "Cooperative Berber Rugs logo",
    },

    // Idéal : ajoutez ici 1 à 3 vraies photos (atelier, tisserandes, boutique), en plus du logo.
    image: [`${siteUrl}/placeholders/logo3.webp`],

    address: {
      "@type": "PostalAddress",
      addressLocality: "Taznakht",
      addressRegion: "Drâa-Tafilalet",
      postalCode: "45250", // à vérifier
      addressCountry: "MA",
    },

    // À remplacer par les coordonnées exactes de votre fiche Google Maps (clic droit > copier les coordonnées).
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.5579,
      longitude: -7.2023,
    },

    // Si vous livrez dans le monde entier, c'est la bonne façon de le dire aux moteurs et aux IA.
    areaServed: "Worldwide",

    priceRange: "$$",

    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: phoneNumber,
      email,
      availableLanguage: ["English"], // ajoutez "French", "Arabic" seulement si vous répondez vraiment dans ces langues
    },

    // Ajoutez l'URL complète de votre fiche Google Maps dès que vous l'avez (pas le lien court maps.app.goo.gl).
    sameAs: [
      "https://www.instagram.com/traditional_berber_carpets/",
      "https://www.facebook.com/traditional_berber_carpets/",
      "https://www.pinterest.com/rugsberber",
    ],

    knowsAbout: [
      "Moroccan Berber rugs",
      "Handmade Moroccan rugs",
      "Taznakht rugs",
      "Amazigh weaving",
      "Moroccan wool rugs",
      "Ouaouzguit rugs",
      "Glaoui rugs",
      "Mouzaïk rugs",
      "Akhenif rugs",
      "Tapis Tableau rugs",
      "Zanifi rugs",
      "Picasso Berber rugs",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        // Échappe "<" pour éviter toute injection de balise dans le script
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}