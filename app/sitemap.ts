import { MetadataRoute } from 'next';
import { rugsData } from '@/data/products';

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
      url: `${siteUrl}/custom-order`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // 2. Pages dynamiques pour chaque tapis (générées automatiquement)
  const rugPages = rugsData.map((rug) => ({
    url: `${siteUrl}/rugs/${rug.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...rugPages];
}