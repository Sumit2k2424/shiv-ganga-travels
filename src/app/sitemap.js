import { PACKAGES, SITE, CATEGORIES } from '@/data/packages';

export default function sitemap() {
  const now = new Date().toISOString();
  const base = SITE.baseUrl;

  const staticPages = [
    { url: base,                                       lastModified: now, priority: 1.0,  changeFrequency: 'weekly'   },
    { url: `${base}/packages`,                        lastModified: now, priority: 0.95, changeFrequency: 'daily'    },
    { url: `${base}/about`,                           lastModified: now, priority: 0.65, changeFrequency: 'monthly'  },
    { url: `${base}/contact`,                         lastModified: now, priority: 0.75, changeFrequency: 'monthly'  },
    // High-value SEO landing pages
    { url: `${base}/char-dham-yatra-2025`,            lastModified: now, priority: 0.95, changeFrequency: 'weekly'   },
    { url: `${base}/kedarnath-yatra`,                 lastModified: now, priority: 0.90, changeFrequency: 'weekly'   },
  ];

  // Category pages
  const categoryPages = Object.keys(CATEGORIES).map(slug => ({
    url: `${base}/packages/${slug}`,
    lastModified: now,
    priority: 0.90,
    changeFrequency: 'weekly',
  }));

  // Individual package pages — higher priority for featured
  const packagePages = PACKAGES.map(pkg => ({
    url: `${base}/packages/${pkg.slug}`,
    lastModified: now,
    priority: pkg.featured ? 0.88 : 0.80,
    changeFrequency: 'weekly',
  }));

  return [...staticPages, ...categoryPages, ...packagePages];
}
