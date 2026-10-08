import type { Metadata } from "next";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { CurrencyProvider } from "../components/CurrencyContext";
import { CartProvider } from "../components/CartContext";

import MetaPixel from "@/components/MetaPixel";
import OrganizationSchema from "@/components/OrganizationSchema";

const siteUrl = "https://www.rugsberber.com";

const contact = {
  email: "contact@rugsberber.com",
  phone: "+212767149114",
  phoneDisplay: "+212 767149114",
  address: "Taznakht, Morocco",
  maps: "https://maps.app.goo.gl/wkpWghENN4U88JjR9?g_st=awb",
  instagram:
    "https://www.instagram.com/traditional_berber_carpets/",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  other: {
    "p:domain_verify": "054750321a00bae938623a786cfe079c",
  },

  title: {
    default: "Handmade Moroccan Berber Rugs | Taznakht, Morocco",
    template: "%s | Berber Rugs Cooperative",
  },

  description:
    "Authentic handmade Moroccan Berber rugs from Taznakht, Morocco. Handwoven by Moroccan women artisans using traditional Amazigh weaving techniques.",

  authors: [
    {
      name: "Cooperative Berber Rugs",
    },
  ],

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

    title:
      "Handmade Moroccan Berber Rugs | Taznakht, Morocco",

    description:
      "Discover authentic handmade Moroccan Berber rugs woven by Moroccan women artisans in Taznakht, Morocco.",

    images: [
      {
        url: `${siteUrl}/favicon.jpg`,
        width: 1200,
        height: 630,
        alt: "Handmade Moroccan Berber Rugs from Taznakht, Morocco",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Handmade Moroccan Berber Rugs | Taznakht, Morocco",

    description:
      "Authentic handmade Moroccan Berber rugs woven by Moroccan women artisans in Taznakht, Morocco.",

    images: [`${siteUrl}/favicon.jpg`],
  },

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

function FloatingWhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${contact.phone.replace("+", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

      <svg
        className="relative z-10 h-8 w-8"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.52 2 2.03 6.49 2.03 12c0 1.76.46 3.48 1.33 5.01L2 22l5.14-1.35A9.96 9.96 0 0 0 12.04 22C17.55 22 22 17.51 22 12S17.55 2 12.04 2Zm0 18.2c-1.57 0-3.1-.42-4.44-1.22l-.32-.19-3.05.8.82-2.97-.21-.32A8.2 8.2 0 0 1 3.82 12c0-4.54 3.69-8.23 8.22-8.23 4.54 0 8.22 3.69 8.22 8.23 0 4.53-3.69 8.2-8.22 8.2Zm4.51-6.15c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.12-.12.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.55-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.43.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
      </svg>
    </a>
  );
}

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

        {/* SEO / GEO - Organization Schema */}
        <OrganizationSchema locale="en" />
      </head>

      <body
        className="antialiased bg-[#FAF9F6] text-gray-900"
        suppressHydrationWarning
      >
        <MetaPixel />

        <CurrencyProvider>
          <CartProvider>
            <Header />

            <main className="min-h-screen">
              {children}
            </main>

            <Footer />

            <FloatingWhatsAppButton />
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}