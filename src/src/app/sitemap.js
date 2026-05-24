import { PACKAGES, SITE, CATEGORIES } from '@/data/packages';

const BLOG_SLUGS = [
  { slug: 'char-dham-guide',                    p: 0.90 },
  { slug: 'char-dham-yatra-complete-guide',     p: 0.95 },

  { slug: 'best-time-char-dham',                p: 0.88 },
  { slug: 'char-dham-yatra-cost',               p: 0.88 },
  { slug: 'char-dham-yatra-packing-list',       p: 0.85 },
  { slug: 'char-dham-yatra-registration',       p: 0.88 },
  { slug: 'char-dham-yatra-2026-new-rules',     p: 0.88 },
  { slug: 'kedarnath-trek-guide',               p: 0.87 },
  { slug: 'kedarnath-helicopter-booking',       p: 0.87 },
  { slug: 'kedarnath-yatra-complete-guide',     p: 0.86 },
  { slug: 'senior-citizen-char-dham',           p: 0.86 },
  { slug: 'char-dham-yatra-for-heart-patients', p: 0.85 },
  { slug: 'how-to-reach-kedarnath',             p: 0.85 },
  { slug: 'kedarnath-pony-vs-helicopter',       p: 0.84 },
  { slug: 'kedarnath-darshan-timing',           p: 0.84 },
  { slug: 'char-dham-yatra-in-october',         p: 0.83 },
  { slug: 'char-dham-yatra-7-days',             p: 0.83 },
  { slug: 'char-dham-yatra-with-kids',          p: 0.83 },
  { slug: 'char-dham-yatra-budget-vs-premium',  p: 0.82 },
  { slug: 'char-dham-vs-do-dham',               p: 0.82 },
  { slug: 'char-dham-group-package',            p: 0.82 },
  { slug: 'char-dham-yatra-package-vs-self-planned', p: 0.82 },
  { slug: 'char-dham-yatra-first-timer-guide',  p: 0.82 },
  { slug: 'char-dham-yatra-faq',                p: 0.82 },
  { slug: 'char-dham-yatra-medical-certificate',p: 0.80 },
  { slug: 'char-dham-yatra-opening-dates-2026', p: 0.85 },
  { slug: 'haridwar-to-kedarnath',              p: 0.82 },
  { slug: 'haridwar-to-kedarnath-road-trip',    p: 0.80 },
  { slug: 'valley-of-flowers-trek',             p: 0.80 },
  { slug: 'rishikesh-adventure-guide',          p: 0.78 },
  { slug: 'mana-village-badrinath',             p: 0.78 },
  { slug: 'triyuginarayan-temple',              p: 0.80 },
  { slug: 'uttarakhand-weather-guide',          p: 0.78 },
  { slug: 'char-dham-weather-guide',                p: 0.80 },
  { slug: 'char-dham-yatra-closing-dates-2026',     p: 0.85 },
  { slug: 'char-dham-yatra-history',                p: 0.78 },
  { slug: 'char-dham-yatra-hotels',                 p: 0.82 },
  { slug: 'char-dham-yatra-road-conditions-2026',   p: 0.83 },
  { slug: 'char-dham-yatra-significance',           p: 0.78 },
  { slug: 'char-dham-yatra-solo-women',             p: 0.80 },
  { slug: 'char-dham-yatra-hotels',                 p: 0.82 },
  { slug: 'char-dham-weather-guide',                p: 0.80 },
  { slug: 'char-dham-yatra-history',                p: 0.78 },
  { slug: 'green-card-char-dham-yatra-2026',        p: 0.85 },
  { slug: 'kedarnath-places-to-see',                p: 0.82 },
  { slug: 'kedarnath-pony-palki-rates-2026',        p: 0.84 },
  { slug: 'kedarnath-registration-2026',            p: 0.87 },
  { slug: 'kedarnath-trek-timings-2026',            p: 0.84 },
  { slug: 'kedarnath-yatra-guide',                  p: 0.86 },
  { slug: 'places-to-visit-during-char-dham-yatra', p: 0.82 },
  { slug: 'types-of-char-dham-yatra-packages',      p: 0.83 },
  { slug: 'vip-darshan-kedarnath-booking',          p: 0.84 },
];

const CITY_SLUGS = [
  { slug: 'char-dham-yatra-from-delhi',       p: 0.88 },
  { slug: 'char-dham-yatra-from-rishikesh',   p: 0.90 },
  { slug: 'rishikesh-tour-packages',           p: 0.92 },
  { slug: 'haridwar-tour-packages',            p: 0.92 },
  { slug: 'char-dham-yatra-from-dehradun',    p: 0.88 },
  { slug: 'char-dham-yatra-from-mumbai',      p: 0.85 },
  { slug: 'char-dham-yatra-from-bangalore',   p: 0.85 },
  { slug: 'char-dham-yatra-from-hyderabad',   p: 0.83 },
  { slug: 'char-dham-yatra-from-chennai',     p: 0.83 },
  { slug: 'char-dham-yatra-from-kolkata',     p: 0.83 },
  { slug: 'char-dham-yatra-from-pune',        p: 0.82 },
  { slug: 'char-dham-yatra-from-noida',       p: 0.85 },
  { slug: 'char-dham-yatra-from-lucknow',     p: 0.83 },
  { slug: 'char-dham-yatra-from-ahmedabad',   p: 0.82 },
  { slug: 'char-dham-yatra-from-jaipur',      p: 0.82 },
  { slug: 'char-dham-yatra-from-chandigarh',  p: 0.82 },
  { slug: 'char-dham-yatra-from-indore',      p: 0.80 },
  { slug: 'char-dham-yatra-from-bhopal',      p: 0.80 },
  { slug: 'char-dham-yatra-from-varanasi',    p: 0.80 },
  { slug: 'char-dham-yatra-from-surat',       p: 0.80 },
  { slug: 'char-dham-yatra-from-nagpur',      p: 0.78 },
  { slug: 'char-dham-yatra-from-patna',       p: 0.78 },
  { slug: 'char-dham-yatra-kitna-kharcha',    p: 0.85 },
  { slug: 'bujurg-char-dham-yatra',           p: 0.85 },
  { slug: 'kedarnath-pehli-baar',             p: 0.87 },
  { slug: 'char-dham-registration-hindi',     p: 0.88 },
  { slug: 'char-dham-packing-list-hindi',     p: 0.83 },
  { slug: 'char-dham-kab-jayen',              p: 0.85 },
];

export default function sitemap() {
  const now = new Date().toISOString();
  const b   = SITE.baseUrl;

  const core = [
    { url: b,                                          p: 1.00, cf: 'weekly'  },
    { url: `${b}/char-dham-yatra`,                     p: 0.98, cf: 'weekly'  },
    { url: `${b}/rishikesh-tour-packages`,              p: 0.92, cf: 'monthly' },
    { url: `${b}/haridwar-tour-packages`,               p: 0.92, cf: 'monthly' },
    { url: `${b}/kedarnath-yatra`,                     p: 0.92, cf: 'weekly'  },
    { url: `${b}/badrinath-yatra`,                     p: 0.92, cf: 'weekly'  },
    { url: `${b}/packages`,                            p: 0.92, cf: 'weekly'  },
    { url: `${b}/char-dham-helicopter`,                p: 0.90, cf: 'weekly'  },
    { url: `${b}/do-dham-yatra`,                       p: 0.88, cf: 'weekly'  },
    { url: `${b}/gangotri-yatra`,                      p: 0.86, cf: 'monthly' },
    { url: `${b}/yamunotri-yatra`,                     p: 0.86, cf: 'monthly' },
    { url: `${b}/panch-kedar-yatra`,                   p: 0.84, cf: 'monthly' },
    { url: `${b}/panch-badri-yatra`,                   p: 0.84, cf: 'monthly' },
    { url: `${b}/uttarakhand-tour-packages`,           p: 0.82, cf: 'monthly' },
    { url: `${b}/chopta-tungnath`,                     p: 0.82, cf: 'monthly' },
    { url: `${b}/about`,                               p: 0.70, cf: 'monthly' },
    { url: `${b}/contact`,                             p: 0.75, cf: 'monthly' },
    { url: `${b}/cancellation-policy`,                 p: 0.50, cf: 'yearly'  },
    { url: `${b}/sitemap-page`,                        p: 0.60, cf: 'monthly' },
  ];

  const guides = [
    { url: `${b}/kedarnath-temple`,                    p: 0.88, cf: 'monthly' },
    { url: `${b}/badrinath-temple`,                    p: 0.86, cf: 'monthly' },
    { url: `${b}/online-puja-booking`,                 p: 0.82, cf: 'monthly' },
    { url: `${b}/char-dham-yatra-emergency-contacts`,  p: 0.78, cf: 'monthly' },
    { url: `${b}/char-dham-road-status`,               p: 0.80, cf: 'weekly'  },
  ];

  const weatherPages = [
    { url: `${b}/kedarnath-weather`,                   p: 0.88, cf: 'monthly' },
    { url: `${b}/yamunotri-weather`,                   p: 0.85, cf: 'monthly' },
    { url: `${b}/gangotri-weather`,                    p: 0.85, cf: 'monthly' },
    { url: `${b}/badrinath-weather`,                   p: 0.85, cf: 'monthly' },
  ];

  const howToReach = [
    { url: `${b}/how-to-reach-haridwar`,               p: 0.85, cf: 'monthly' },
    { url: `${b}/how-to-reach-yamunotri`,              p: 0.85, cf: 'monthly' },
    { url: `${b}/how-to-reach-gangotri`,               p: 0.85, cf: 'monthly' },
    { url: `${b}/how-to-reach-badrinath`,              p: 0.85, cf: 'monthly' },
  ];

  const hotels = [
    { url: `${b}/kedarnath-hotels`,                    p: 0.85, cf: 'monthly' },
    { url: `${b}/badrinath-hotels`,                    p: 0.85, cf: 'monthly' },
  ];

  const tools = [
    { url: `${b}/char-dham-yatra-cost-calculator`,     p: 0.88, cf: 'monthly' },
    { url: `${b}/char-dham-yatra-route-map`,           p: 0.87, cf: 'monthly' },
  ];

  const cabs = [
    { url: `${b}/char-dham-yatra-cab-booking`,         p: 0.85, cf: 'monthly' },
    { url: `${b}/haridwar-to-kedarnath-cab`,           p: 0.84, cf: 'monthly' },
    { url: `${b}/haridwar-to-badrinath-cab`,           p: 0.83, cf: 'monthly' },
    { url: `${b}/haridwar-to-gangotri-cab`,            p: 0.82, cf: 'monthly' },
    { url: `${b}/delhi-to-haridwar-cab`,               p: 0.82, cf: 'monthly' },
  ];

  const blog = [
    { url: `${b}/blog`,                                p: 0.82, cf: 'weekly'  },
    ...BLOG_SLUGS.map(({ slug, p }) => ({ url: `${b}/blog/${slug}`, p, cf: 'monthly' })),
  ];

  const cities = CITY_SLUGS.map(({ slug, p }) => ({ url: `${b}/${slug}`, p, cf: 'monthly' }));

  const categoryPages = Object.keys(CATEGORIES).map(slug => ({
    url: `${b}/packages/${slug}`, p: 0.90, cf: 'weekly',
  }));

  const packagePages = PACKAGES.map(pkg => ({
    url: `${b}/packages/${pkg.slug}`, p: pkg.featured ? 0.88 : 0.80, cf: 'weekly',
  }));

  const competitive = [
    { url: `${b}/shiv-ganga-travels-vs-makemytrip-char-dham`,        p: 0.88, cf: 'monthly' },
    { url: `${b}/direct-operator-vs-travel-aggregator-char-dham`,     p: 0.85, cf: 'monthly' },
    { url: `${b}/best-char-dham-yatra-operators-haridwar`,            p: 0.92, cf: 'monthly' },
  ];

  const all = [
    ...core, ...guides, ...weatherPages, ...howToReach,
    ...hotels, ...tools, ...cabs, ...blog, ...cities,
    ...competitive, ...categoryPages, ...packagePages,
  ];

  return all.map(({ url, p, cf }) => ({
    url,
    lastModified: now,
    priority: p,
    changeFrequency: cf,
  }));
}
