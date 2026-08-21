import { MetadataRoute } from 'next';
import { PERSONAL_INFO } from '@/constants/personal-info';

// Update when content meaningfully changes; a moving timestamp on every
// build teaches crawlers that lastModified means nothing.
const SITE_LAST_UPDATED = new Date('2026-08-21');

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/projects', '/skills', '/about', '/contact'];

  return routes.map((route) => ({
    url: `${PERSONAL_INFO.siteUrl}${route}`,
    lastModified: SITE_LAST_UPDATED,
  }));
}
