"use client";

import Link from "next/link";
import Image from "next/image";
import { rugsData } from "@/data/products";
import { useCurrency } from "@/components/CurrencyContext";
import { trackEvent } from "@/app/lib/fbq";
import { SALE, isSaleActive } from "@/app/lib/sale";

function applyBlackFridayDiscount(currentPriceString: string) {
  const numericPrice = Number(
    currentPriceString.replace(/[^0-9.]/g, "")
  );

  if (!Number.isFinite(numericPrice) || numericPrice <= 0) {
    return {
      original: currentPriceString,
      discounted: currentPriceString,
    };
  }

  return {
    original: `$${Math.round(numericPrice * 1.3)}`,
    discounted: currentPriceString,
  };
}

function trackWhatsAppContact(rug: {
  sku: string;
  name: string;
}) {
  trackEvent("Contact", {
    content_ids: [rug.sku],
    content_name: rug.name,
    content_type: "product",
  });
}

export default function TopRugs() {
  const { formatPrice } = useCurrency();
  const onSale = isSaleActive();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {rugsData.slice(0, 3).map((rug) => {
        const isAvailable = rug.isAvailable !== false;

        const mainImage =
          rug.images?.[0] || "/placeholders/ouaouzguite-1.jpg";

        const size = rug.sizes?.[0] || {
          size: rug.dimensions || "Standard",
          price: rug.price,
        };

        // Même logique de prix que la page Collection :
        // prix actuel conservé + prix d'origine majoré de 30 %.
        const pricing = applyBlackFridayDiscount(String(size.price));

        const originalNumeric =formatPrice(String(size.price));

        const originalFormatted = Number.isFinite(originalNumeric)
          ? formatPrice(String(originalNumeric))
          : pricing.original;

          const currentFormatted = formatPrice(String(size.price));

        const whatsappHeader = isAvailable
          ? `🏛️ *NEW ORDER - BERBER RUG${onSale ? ` (${SALE.name.toUpperCase()} -${SALE.percent}%)` : ""}*\n\n`
          : "🏛️ *CUSTOM ORDER REQUEST - SOLD RUG*\n\n";

        const whatsappBody = isAvailable
          ? [
              `✨ *Rug:* ${rug.name}`,
              `📂 *Category:* ${rug.category}`,
              `🔖 *SKU:* ${rug.sku}`,
              `📏 *Size:* ${size.size}`,
              `💰 *Price:* ${currentFormatted}`,
              "",
              "Hello! I am interested in ordering this handmade Berber rug.",
            ].join("\n")
          : [
              `✨ *Reference rug:* ${rug.name}`,
              `🔖 *SKU:* ${rug.sku}`,
              `📏 *Reference size:* ${size.size}`,
              "",
              "Hello! I understand this rug is sold out. Could your artisans weave a similar custom rug for me?",
            ].join("\n");

        const whatsappMessage = [
          whatsappHeader,
          "━━━━━━━━━━━━━━━━━━━━━━",
          "",
          whatsappBody,
          "",
          "━━━━━━━━━━━━━━━━━━━━━━",
          "📸 *Model photo:*",
          mainImage.startsWith("http")
            ? mainImage
            : `https://www.rugsberber.com${mainImage}`,
        ].join("\n");

        const whatsappUrl = `https://wa.me/212767149114?text=${encodeURIComponent(
          whatsappMessage
        )}`;

        return (
          <article
            key={rug.id}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#A44E36]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Product image */}
            <Link
              href={`/rugs/${rug.id}`}
              aria-label={`View ${rug.name}`}
              className="block"
            >
              <div className="relative aspect-square overflow-hidden bg-[#E8DED2]">
                <Image
                  src={mainImage}
                  alt={`${rug.name} handmade Moroccan Berber rug from Taznakht, Morocco`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                    !isAvailable ? "opacity-80" : ""
                  }`}
                />

                {/* Availability / promotion badge */}
                {!isAvailable ? (
                  <span className="absolute left-4 top-4 rounded-full bg-gray-900 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow">
                    Sold Out
                  </span>
                ) : onSale ? (
                  <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow">
                    {SALE.name} -{SALE.percent}%
                  </span>
                ) : null}

                {/* Quick view indicator */}
                <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-gray-900 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                  View Rug →
                </span>
              </div>
            </Link>

            {/* Product details */}
            <div className="flex flex-1 flex-col p-5 md:p-6">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A44E36]">
                  {rug.category}
                </span>

                <span
                  className={`flex shrink-0 items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider ${
                    isAvailable ? "text-green-700" : "text-red-600"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isAvailable ? "bg-green-600" : "bg-red-600"
                    }`}
                  />
                  {isAvailable ? "Available" : "Sold Out"}
                </span>
              </div>

              <Link href={`/rugs/${rug.id}`}>
                <h3 className="font-serif text-xl leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#A44E36]">
                  {rug.name}
                </h3>
              </Link>

              <p className="mt-2 text-xs text-gray-500">
                SKU: {rug.sku}
              </p>

              <p className="mt-2 text-sm text-gray-600">
                {size.size}
              </p>

              {/* Price */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-lg font-bold text-gray-900">
                  {currentFormatted}
                </span>

                {onSale && isAvailable && (
                  <span className="text-sm text-gray-400 line-through">
                    {originalFormatted}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="mt-auto flex items-center gap-3 border-t border-[#A44E36]/10 pt-5 mt-5">
                <Link
                  href={`/rugs/${rug.id}`}
                  className="flex-1 rounded-full border border-[#A44E36]/25 px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.15em] text-gray-800 transition-colors hover:border-[#A44E36] hover:bg-[#FAF0E4]"
                >
                  Details
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppContact(rug)}
                  className={`flex-1 rounded-full px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-sm transition-colors ${
                    isAvailable
                      ? "bg-[#A44E36] hover:bg-[#8a3f2b]"
                      : "bg-gray-900 hover:bg-gray-700"
                  }`}
                >
                  {isAvailable ? "Order" : "Custom Order"}
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}