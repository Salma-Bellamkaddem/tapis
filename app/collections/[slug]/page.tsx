import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collectionsData, rugsData } from "@/data/products";

const siteUrl = "https://www.rugsberber.com";

interface CollectionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return collectionsData.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;

  const collection = collectionsData.find(
    (item) => item.slug === slug
  );

  if (!collection) {
    return {};
  }

  return {
    title: collection.seoName + " | Taznakht, Morocco",
    description: collection.description,
    alternates: {
      canonical: `${siteUrl}/collections/${collection.slug}`,
    },
    openGraph: {
      type: "website",
      title: `${collection.seoName} | Taznakht, Morocco`,
      description: collection.description,
      url: `${siteUrl}/collections/${collection.slug}`,
      siteName: "Cooperative Berber Rugs",
      images: [
        {
          url: collection.images[0],
          alt: `${collection.seoName} from Taznakht, Morocco`,
        },
      ],
    },
  };
}

export default async function CollectionPage({
  params,
}: CollectionPageProps) {
  const { slug } = await params;

  const collection = collectionsData.find(
    (item) => item.slug === slug
  );

  if (!collection) {
    notFound();
  }

  const rugs = rugsData.filter(
    (rug) => rug.category.toLowerCase() === collection.id.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-[#FAF0E4]">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 md:px-8 pt-8"
      >
        <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <li>
            <Link
              href="/"
              className="hover:text-[#A44E36] transition-colors"
            >
              Home
            </Link>
          </li>

          <li aria-hidden="true">/</li>

          <li>
            <Link
              href="/collections"
              className="hover:text-[#A44E36] transition-colors"
            >
              Collections
            </Link>
          </li>

          <li aria-hidden="true">/</li>

          <li className="text-gray-900 font-medium">
            {collection.name}
          </li>
        </ol>
      </nav>

      {/* Collection Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#A44E36] uppercase">
              {collection.subtitle}
            </span>

            <h1 className="font-serif text-4xl md:text-6xl text-gray-900 tracking-wide mt-3 mb-6">
              {collection.seoName}
            </h1>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl">
              {collection.description}
            </p>

            <p className="text-gray-600 text-sm leading-relaxed max-w-xl mt-4">
              Discover handmade Moroccan Berber rugs from Taznakht,
              crafted by rural Moroccan women artisans using traditional
              Amazigh weaving techniques and natural sheep's wool.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#E8DED2]">
            <Image
              src={collection.images[0]}
              alt={`${collection.seoName} from Taznakht, Morocco`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">
              {collection.name} Rugs
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              {rugs.length} {rugs.length === 1 ? "rug" : "rugs"} in this
              collection
            </p>
          </div>
        </div>

        {rugs.length === 0 ? (
          <div className="rounded-3xl bg-white/60 border border-[#A44E36]/10 p-10 text-center">
            <p className="text-gray-600">
              No rugs are currently available in this collection.
            </p>

            <Link
              href="/collections"
              className="inline-block mt-5 text-[#A44E36] font-semibold text-sm uppercase tracking-wider"
            >
              Browse all collections →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rugs.map((rug) => (
              <Link
                key={rug.id}
                href={`/rugs/${rug.id}`}
                className="group bg-white rounded-3xl overflow-hidden border border-[#A44E36]/10 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-[#E8DED2]">
                  <Image
                    src={rug.images[0]}
                    alt={`${rug.name} handmade Moroccan Berber rug`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-xl text-gray-900 group-hover:text-[#A44E36] transition-colors">
                    {rug.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {rug.sku}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="font-semibold text-gray-900">
                      {rug.price}
                    </span>

                    <span className="text-[#A44E36] text-xs font-bold uppercase tracking-wider">
                      View Rug →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}