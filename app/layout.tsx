import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const siteUrl = "https://tondomaine.com"; // ⚠️ remplace par ton vrai domaine

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cooperative Berber Rugs | Handmade Moroccan Carpets",
    template: "%s | Cooperative Berber Rugs",
  },
  description:
    "Discover authentic handmade Berber rugs — Beni Ourain, Ouaouzguite, Akhenif, Glaoui, Zanifi and more. Each carpet is hand-woven, hand-knotted or hand-embroidered by rural Moroccan women, with symbols inspired by nature.",
  keywords: [
    "Berber rug",
    "Moroccan carpet",
    "Beni Ourain rug",
    "Ouaouzguite carpet",
    "Akhenif carpet",
    "Glaoui carpet",
    "Zanifi embroidered rug",
    "handmade Moroccan rug",
    "authentic Berber carpet",
    "Atlas mountains rug",
    "Amazigh symbols carpet",
    "wool rug Morocco",
  ],
  authors: [{ name: "Cooperative Berber Rugs" }],
  creator: "Cooperative Berber Rugs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cooperative Berber Rugs",
    title: "Cooperative Berber Rugs | Handmade Moroccan Carpets",
    description:
      "Authentic Berber carpets hand-woven, hand-knotted or hand-embroidered by rural Moroccan women. Every symbol tells a story rooted in nature.",
    images: [
      {
        url: "/og-image.jpg", // ⚠️ crée cette image (1200x630)
        width: 1200,
        height: 630,
        alt: "Handmade Berber carpets collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cooperative Berber Rugs | Handmade Moroccan Carpets",
    description:
      "Authentic Berber carpets hand-woven by rural Moroccan women — inspired by mountains, nature and Amazigh heritage.",
    images: ["/og-image.jpg"],
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