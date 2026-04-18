import { PACKAGES, SITE } from '@/data/packages';

export default function sitemap() {
  const now = new Date().toISOString();

  // Static pages
  const staticPages = [
    { url: SITE.baseUrl,                     lastModified: now, priority: 1.0,  changeFrequency: 'monthly' },
    { url: `${SITE.baseUrl}/packages`,       lastModified: now, priority: 0.9,  changeFrequency: 'weekly'  },
    { url: `${SITE.baseUrl}/packages/char-dham`,   lastModified: now, priority: 0.85, changeFrequency: 'weekly'  },
    { url: `${SITE.baseUrl}/packages/do-dham`,     lastModified: now, priority: 0.85, changeFrequency: 'weekly'  },
    { url: `${SITE.baseUrl}/packages/single-dham`, lastModified: now, priority: 0.85, changeFrequency: 'weekly'  },
    { url: `${SITE.baseUrl}/about`,          lastModified: now, priority: 0.6,  changeFrequency: 'yearly'  },
    { url: `${SITE.baseUrl}/contact`,        lastModified: now, priority: 0.7,  changeFrequency: 'yearly'  },
  ];

  // Dynamic package pages
  const packagePages = PACKAGES.map((pkg) => ({
    url: `${SITE.baseUrl}/packages/${pkg.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: 'weekly',
  }));

  return [...staticPages, ...packagePages];
}
