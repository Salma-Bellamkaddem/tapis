import { MetadataRoute } from 'next';
import { collectionsData } from '@/data/products';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = 'https://www.rugsberber.com';

  // 1. Pages statiques principales du site
  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/rugs`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/collections`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${siteUrl}/custom-order`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // 2. Pages dynamiques pour chaque CATÉGORIE / COLLECTION (ex: /rugs?category=ouaouzguite)
  const categoryPages = collectionsData.map((collection) => ({
    url: `${siteUrl}/rugs?category=${collection.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages];
}