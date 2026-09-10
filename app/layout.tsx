import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 

export const metadata: Metadata = {
  title: "Cooperative Berber Rugs",
  description: "Handcrafted Moroccan Rugs woven by women artisans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* suppressHydrationWarning corrige l'erreur d'hydratation liée à ton extension navigateur */}
      <body className="antialiased bg-[#FAF9F6] text-gray-900" suppressHydrationWarning>
        <Header />
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}