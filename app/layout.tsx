import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CurrencyProvider } from "../components/CurrencyContext";

const siteUrl = "https://www.rugsberber.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Handmade Moroccan Berber Rugs | Ouaouzguite, Glaoui & More",
    template: "%s | Berber Rugs Cooperative",
  },

  description:
    "Handmade Moroccan Berber rugs from Taznakht: Ouaouzguite, Glaoui, Akhenif, Zanifi and Picasso. Woven by rural Amazigh women in the Siroua Mountains.",

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

    title: "Handmade Moroccan Berber Rugs | Taznakht, Morocco",

    description:
      "Explore Ouaouzguite, Glaoui, Akhenif, Zanifi and Picasso rugs, handwoven by rural Amazigh women in the Siroua Mountains of Morocco.",

    images: [
      {
        url: "/favicon.jpg",
        width: 1200,
        height: 630,
        alt: "Handmade Moroccan Berber rugs from Taznakht",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Handmade Moroccan Berber Rugs | Taznakht",

    description:
      "Ouaouzguite, Glaoui, Akhenif, Zanifi and Picasso rugs, handwoven by rural Amazigh women in Morocco.",

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
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: [
      {
        url: "/favicon.jpg",
        type: "image/jpeg",
      },
    ],
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
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