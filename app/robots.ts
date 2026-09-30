import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = 'https://daizlabratz.online';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/dashboard/',
        '/private/',
        '/_next/',
      ],
    },
    sitemap: ${BASE_URL}/sitemap.xml,
  };
}