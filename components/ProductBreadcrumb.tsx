import Link from "next/link";

interface Props {
  collection: { seoName: string; slug: string } | null;
  productName: string;
}

export default function ProductBreadcrumb({ collection, productName }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li aria-hidden="true">›</li>
        {collection ? (
          <li>
            <Link href={`/collections/${collection.slug}`} className="hover:underline">
              {collection.seoName}
            </Link>
          </li>
        ) : (
          <li><Link href="/rugs" className="hover:underline">Rugs</Link></li>
        )}
        <li aria-hidden="true">›</li>
        <li aria-current="page" className="text-gray-900">{productName}</li>
      </ol>
    </nav>
  );
}