import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const siteUrl = "https://www.rugsberber.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Authentic Handmade Moroccan Berber Rugs | Direct from Cooperative",
    template: "%s | Berber Rugs Cooperative",
  },
  description:
    "Discover authentic handmade Moroccan Berber rugs — Ouaouzguite, Glaoui, Akhenif, Zanifi, and Picasso Berber masterpieces. Each carpet is hand-woven, hand-knotted or hand-embroidered by rural women artisans in the Atlas mountains, shipped worldwide to Europe, USA, and Africa.",
  keywords: [
    "Berber rug",
    "Moroccan carpet",
    "Ouaouzguite carpet",
    "Akhenif carpet",
    "Glaoui carpet",
    "Zanifi embroidered rug",
    "Picasso Berber rug",
    "handmade Moroccan rug",
    "authentic Berber carpet",
    "Atlas mountains rug",
    "Amazigh symbols carpet",
    "wool rug Morocco",
    "buy Berber rug online",
  ],
  authors: [{ name: "Cooperative Berber Rugs" }],
  creator: "Cooperative Berber Rugs",
  publisher: "Cooperative Berber Rugs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cooperative Berber Rugs",
    title: "Authentic Handmade Moroccan Berber Rugs | Direct from Cooperative",
    description:
      "Handmade Moroccan Berber carpets crafted by rural women artisans using pure living sheep's wool and natural dyes. Worldwide shipping to Europe, USA, and Africa.",
    images: [
      {
        url: "/favicon.jpg", // Assurez-vous d'avoir cette image (recommandé 1200x630 pour les partages réseaux sociaux)
        width: 1200,
        height: 630,
        alt: "Handmade Berber carpets collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Authentic Handmade Moroccan Berber Rugs",
    description:
      "Authentic Berber carpets hand-woven by rural Moroccan women — inspired by mountains, nature and Amazigh heritage. Worldwide delivery.",
    images: ["/favicon.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-[#FAF9F6] text-gray-900"
        suppressHydrationWarning
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}