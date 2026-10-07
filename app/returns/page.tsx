import Link from "next/link";

export const metadata = {
  title: "Returns & Exchanges | Rugs Berber",
  description: "Read our 14-day return and exchange policy for authentic Moroccan Berber rugs.",
};

export default function ReturnsPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Breadcrumb */}
        <nav className="text-xs font-bold tracking-widest uppercase text-gray-400">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Returns & Exchanges</span>
        </nav>

        <h1 className="font-serif text-4xl text-gray-900 uppercase">Returns & Exchanges</h1>
        
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">1. 14-Day Return Policy</h2>
            <p>
              We want you to completely love your handmade Berber rug. If you are not entirely satisfied with your purchase, you have the right to return your item within <strong>14 days</strong> of receiving your order.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">2. Conditions for Return</h2>
            <p>To be eligible for a return, the following conditions must be met:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The rug must be in its original, unused condition, free from damage, dirt, or pet hair.</li>
              <li>It must be securely packaged in its original packaging or equivalent protective wrapping.</li>
              <li>Custom-made or bespoke rug orders are final sale and cannot be returned unless they arrive damaged or defective.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">3. Return Shipping Costs</h2>
            <p>
              Return shipping costs are the responsibility of the customer, unless the item arrived damaged or an error was made on our part. We recommend using a trackable shipping service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">4. Refunds</h2>
            <p>
              Once your returned item is received and inspected by our workshop, we will notify you via email. If approved, your refund will be processed via bank transfer within <strong>5 to 7 business days</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase text-[#A44E36] tracking-wider">5. How to Initiate a Return</h2>
            <p>
              To start a return, please contact us with your order number and photos of the rug via our support channels or WhatsApp. We will provide you with the return shipping instructions.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}