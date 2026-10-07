import Link from "next/link";

export const metadata = {
  title: "Terms of Sale | Rugs Berber",
  description: "Terms and conditions governing the purchase of authentic Moroccan Berber rugs.",
};

export default function TermsPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Breadcrumb */}
        <nav className="text-xs font-bold tracking-widest uppercase text-gray-400">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Terms of Sale</span>
        </nav>

        <h1 className="font-serif text-4xl text-gray-900 uppercase">Terms of Sale</h1>
        
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">1. Introduction</h2>
            <p>
              Welcome to Rugs Berber. By placing an order through our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before purchasing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">2. Products & Authenticity</h2>
            <p>
              All our rugs are authentic, one-of-a-kind pieces hand-woven by women artisans using living sheep&apos;s wool and natural dyes from the Siroua and High Atlas mountains. Because of their handmade nature, minor irregularities, slight color variations, or organic textures are inherent characteristics and should not be considered defects.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">3. Pricing & Payments</h2>
            <p>
              All prices are displayed clearly on our product pages. Payments are securely handled via direct bank transfer (IBAN/SWIFT). Orders are processed upon payment verification. To prevent double-booking of unique pieces, unpaid orders are automatically held for a limited duration (72 hours) before release.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">4. Order Acceptance & Reservations</h2>
            <p>
              Given the unique nature of our inventory, an item is officially secured only once the checkout reservation and subsequent bank transfer confirmation are completed. In the rare event that a piece becomes unavailable, we will promptly notify you and offer alternative options or a full refund.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">5. Intellectual Property</h2>
            <p>
              All content on this website, including photographs, text, graphics, and logos, is the property of Rugs Berber and is protected by international copyright laws. Reproduction without prior written permission is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">6. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms of Sale, please reach out to our team via our website contact links or direct messaging.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}