import { MetadataRoute } from 'next';
import { navItems } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gaon-signage.example.com';
  const routes = ['/', ...navItems.map((item) => item.href), '/privacy', '/terms', '/admin/blog'];
  return routes.map((route) => ({ url: `${base}${route === '/' ? '' : route}`, lastModified: new Date('2026-09-05') }));
}
