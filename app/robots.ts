import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://www.rugsberber.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Exemple si vous avez un espace admin privé à cacher plus tard :
      // disallow: ['/admin/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}