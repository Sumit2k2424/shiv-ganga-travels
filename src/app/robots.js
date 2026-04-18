import { SITE } from '@/data/packages';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
  };
}
