import Link from "next/link";

export const metadata = {
  title: "Shipping Policy | Rugs Berber",
  description: "Learn about our worldwide shipping, handling times, and secure delivery for authentic Moroccan Berber rugs.",
};

export default function ShippingPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Breadcrumb */}
        <nav className="text-xs font-bold tracking-widest uppercase text-gray-400">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Shipping Policy</span>
        </nav>

        <h1 className="font-serif text-4xl text-gray-900 uppercase">Shipping Policy</h1>
        
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">1. Worldwide Delivery</h2>
            <p>
              At Rugs Berber, we take pride in delivering authentic, handmade Moroccan rugs directly from our artisans in the Siroua and High Atlas regions to your doorstep anywhere in the world. We offer <strong>free worldwide shipping</strong> on all orders.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">2. Processing & Handling Time</h2>
            <p>
              Each rug is a unique work of art. Once your bank transfer is confirmed, our team carefully inspects, prepares, and securely packages your piece. Order processing and dispatch typically take between <strong>1 to 3 business days</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">3. Transit Times & Couriers</h2>
            <p>
              We partner with trusted international express carriers (such as DHL Express and FedEx) to ensure fast and secure delivery. 
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>North America & Europe:</strong> 3 to 5 business days after dispatch.</li>
              <li><strong>Rest of the World:</strong> 5 to 8 business days after dispatch.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">4. Customs, Duties, and Taxes</h2>
            <p>
              International shipments may be subject to local customs duties, taxes, or import fees levied by the destination country upon arrival. These charges are the sole responsibility of the buyer. Please check with your local customs office for specific regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">5. Tracking Your Order</h2>
            <p>
              As soon as your rug is shipped, you will receive an email containing your tracking number and carrier link so you can follow its journey in real time.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}