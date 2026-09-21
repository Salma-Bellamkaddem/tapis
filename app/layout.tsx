import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CurrencyProvider } from "../components/CurrencyContext";

const siteUrl = "https://www.rugsberber.com";

const contact = {
  email: "youness.ait.uness@gmail.com",
  phone: "+212767149114",
  phoneDisplay: "+212 767149114",
  address: "Taznakht, Morocco",
  maps: "https://maps.app.goo.gl/wkpWghENN4U88JjR9?g_st=awb",
  instagram: "https://www.instagram.com/traditional_berber_carpets/",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Handmade Moroccan Berber Rugs | Taznakht, Morocco",
    template: "%s | Berber Rugs Cooperative",
  },

  description:
    "Handmade Moroccan Berber rugs from Taznakht, woven by rural Amazigh women in the Siroua Mountains. Discover Ouaouzguite, Glaoui, Akhenif, Zanifi and Picasso rugs.",

  authors: [{ name: "Cooperative Berber Rugs" }],
  creator: "Cooperative Berber Rugs",
  publisher: "Cooperative Berber Rugs",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cooperative Berber Rugs",
    title: "Handmade Moroccan Berber Rugs | Taznakht, Morocco",
    description:
      "Discover handmade Moroccan Berber rugs woven by rural Amazigh women in Taznakht, Morocco.",
    images: [
      {
        url: `${siteUrl}/favicon.jpg`,
        width: 1200,
        height: 630,
        alt: "Handmade Moroccan Berber Rugs from Taznakht",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Handmade Moroccan Berber Rugs | Taznakht, Morocco",
    description:
      "Handmade Moroccan Berber rugs woven by rural Amazigh women in Taznakht, Morocco.",
    images: [`${siteUrl}/favicon.jpg`],
  },

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cooperative Berber Rugs",
  url: siteUrl,
  logo: `${siteUrl}/placeholders/logo3.webp`,
  description:
    "Cooperative creating handmade Moroccan Berber rugs woven by rural Amazigh women in Taznakht, Morocco.",
  email: contact.email,
  telephone: contact.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Taznakht",
    addressCountry: "MA",
  },
  sameAs: [contact.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
        />
        <link
          rel="dns-prefetch"
          href="https://res.cloudinary.com"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body
        className="antialiased bg-[#FAF9F6] text-gray-900"
        suppressHydrationWarning
      >
        <CurrencyProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}