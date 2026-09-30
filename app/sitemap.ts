import { MetadataRoute } from 'next';

const BASE_URL = 'https://daizlabratz.online';

export default function sitemap(): MetadataRoute.Sitemap {
  // P0: The Core Entity & Trust Layer
  const coreRoutes = ['', '/about', '/contact'].map((route) => ({
    url: ${BASE_URL}${route},
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // P0: The 21-Day Sprint SEO Silo (Highest Commercial Priority)
  const sprintRoutes = [
    '/sprint',
    '/sprint/curriculum',
    '/sprint/how-it-works',
    '/sprint/faq',
    '/sprint/apply',
  ].map((route) => ({
    url: ${BASE_URL}${route},
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '/sprint' ? 0.9 : 0.85,
  }));

  // P0 & P1: Commercial Services
  const serviceRoutes = [
    '/services',
    '/services/web-development',
    '/services/ai-automation',
  ].map((route) => ({
    url: ${BASE_URL}${route},
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // P1: Topical Authority & Knowledge Engine
  const learnRoutes = [
    '/learn',
    '/learn/web-development',
    '/learn/web-development/javascript',
    '/learn/web-development/react',
    '/learn/web-development/nextjs',
    '/learn/web-development/typescript',
    '/learn/ai',
    '/learn/ai/prompt-engineering',
    '/learn/automation',
  ].map((route) => ({
    url: ${BASE_URL}${route},
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // P1: Proof & Case Studies Engine
  const projectRoutes = [
    '/projects',
    '/projects/case-studies',
  ].map((route) => ({
    url: ${BASE_URL}${route},
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // P0: Legal & Compliance (Required for Trust / Ad networks)
  const legalRoutes = [
    '/privacy',
    '/terms',
    '/refund-policy',
  ].map((route) => ({
    url: ${BASE_URL}${route},
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  // Future-proofing: When you move to a CMS (e.g., Supabase), 
  // you will fetch dynamic routes here and append them to this array.
  
  return [
    ...coreRoutes,
    ...sprintRoutes,
    ...serviceRoutes,
    ...learnRoutes,
    ...projectRoutes,
    ...legalRoutes,
  ];
}