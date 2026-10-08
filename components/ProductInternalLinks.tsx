import { Collection } from "@/app/lib/collections";
import Link from "next/link";

interface Props {
  collection: Collection | null;
  otherCollections: Collection[];
}

export default function ProductInternalLinks({ collection, otherCollections }: Props) {
  return (
    <nav aria-label="Explore more" className="mt-8 grid gap-6 sm:grid-cols-2 text-sm">
      <div>
        <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">
          Explore
        </h2>
        <ul className="space-y-2 text-[#A44E36] font-semibold">
          {collection && (
            <li>
              <Link href={`/collections/${collection.slug}`} className="hover:underline">
                ← Explore all {collection.seoName}
              </Link>
            </li>
          )}
          <li>
            <Link href="/rugs" className="hover:underline">
              Browse the full rug catalog
            </Link>
          </li>
          <li>
            <Link href="/story" className="hover:underline">
              Discover Taznakht &amp; our artisans →
            </Link>
          </li>
        </ul>
      </div>

      {otherCollections.length > 0 && (
        <div>
          <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3">
            Other collections
          </h2>
          <ul className="space-y-2 text-[#A44E36] font-semibold">
            {otherCollections.map((c) => (
              <li key={c.slug}>
                <Link href={`/collections/${c.slug}`} className="hover:underline">
                  {c.seoName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}