import { MetadataRoute } from 'next';
import { PERSONAL_INFO } from '@/constants/personal-info';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/projects', '/skills', '/about', '/contact'];

  return routes.map((route) => ({
    url: `${PERSONAL_INFO.siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
