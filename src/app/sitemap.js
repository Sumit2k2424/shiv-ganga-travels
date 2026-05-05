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
    { url: `${base}/char-dham-yatra`,                 lastModified: now, priority: 0.98, changeFrequency: 'weekly'   },
    { url: `${base}/kedarnath-yatra`,                 lastModified: now, priority: 0.90, changeFrequency: 'weekly'   },
    // Weather pages — all 4 dhams
    { url: `${base}/kedarnath-weather`,               lastModified: now, priority: 0.88, changeFrequency: 'monthly'  },
    { url: `${base}/yamunotri-weather`,               lastModified: now, priority: 0.85, changeFrequency: 'monthly'  },
    { url: `${base}/gangotri-weather`,                lastModified: now, priority: 0.85, changeFrequency: 'monthly'  },
    { url: `${base}/badrinath-weather`,               lastModified: now, priority: 0.85, changeFrequency: 'monthly'  },
    // How to reach pages — all 4 dhams
    { url: `${base}/how-to-reach-kedarnath`,          lastModified: now, priority: 0.87, changeFrequency: 'monthly'  },
    { url: `${base}/how-to-reach-yamunotri`,          lastModified: now, priority: 0.85, changeFrequency: 'monthly'  },
    { url: `${base}/how-to-reach-gangotri`,           lastModified: now, priority: 0.85, changeFrequency: 'monthly'  },
    { url: `${base}/how-to-reach-badrinath`,          lastModified: now, priority: 0.85, changeFrequency: 'monthly'  },
    // City departure pages
    { url: `${base}/char-dham-yatra-from-noida`,      lastModified: now, priority: 0.82, changeFrequency: 'monthly'  },
    // Hotel guide pages
    { url: `${base}/kedarnath-hotels`,                lastModified: now, priority: 0.85, changeFrequency: 'monthly'  },
    { url: `${base}/badrinath-hotels`,                lastModified: now, priority: 0.85, changeFrequency: 'monthly'  },
    // Niche pilgrimage pages
    { url: `${base}/panch-badri-yatra`,               lastModified: now, priority: 0.85, changeFrequency: 'monthly'  },
    { url: `${base}/chopta-tungnath`,                 lastModified: now, priority: 0.82, changeFrequency: 'monthly'  },
    // Blog
    { url: `${base}/blog`,                            lastModified: now, priority: 0.80, changeFrequency: 'weekly'   },
    { url: `${base}/blog/char-dham-guide`,            lastModified: now, priority: 0.88, changeFrequency: 'monthly'  },
    { url: `${base}/blog/best-time-char-dham`,        lastModified: now, priority: 0.85, changeFrequency: 'monthly'  },
    // New city pages
    { url: `${base}/char-dham-yatra-from-varanasi`,   lastModified: now, priority: 0.80, changeFrequency: 'monthly'  },
    { url: `${base}/char-dham-yatra-from-chandigarh`, lastModified: now, priority: 0.80, changeFrequency: 'monthly'  },
    { url: `${base}/char-dham-yatra-from-nagpur`,     lastModified: now, priority: 0.78, changeFrequency: 'monthly'  },
    { url: `${base}/char-dham-yatra-from-patna`,      lastModified: now, priority: 0.78, changeFrequency: 'monthly'  },
    // New blog posts targeting long-tail keywords
    { url: `${base}/blog/mana-village-badrinath`,     lastModified: now, priority: 0.78, changeFrequency: 'monthly'  },
    { url: `${base}/blog/triyuginarayan-temple`,      lastModified: now, priority: 0.80, changeFrequency: 'monthly'  },
    { url: `${base}/blog/char-dham-yatra-in-october`, lastModified: now, priority: 0.82, changeFrequency: 'monthly'  },
    { url: `${base}/blog/char-dham-yatra-with-kids`,  lastModified: now, priority: 0.82, changeFrequency: 'monthly'  },
    { url: `${base}/blog/char-dham-yatra-for-heart-patients`, lastModified: now, priority: 0.82, changeFrequency: 'monthly'  },
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
