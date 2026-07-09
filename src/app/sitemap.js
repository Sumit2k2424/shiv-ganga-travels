import fs from 'fs';
import path from 'path';
import { PACKAGES, SITE, CATEGORIES } from '@/data/packages';
import { CAB_ROUTES } from '@/data/cabRoutes';

// ── Blog priority hints. Any blog not listed falls back to DEFAULT_BLOG_P. ──
const BLOG_PRIORITY = {
  'char-dham-yatra-complete-guide': 0.95, 'char-dham-guide': 0.90,
  'best-time-char-dham': 0.88, 'char-dham-yatra-cost': 0.88,
  'char-dham-yatra-registration': 0.88, 'char-dham-yatra-2026-new-rules': 0.88,
  'char-dham-registration-hindi': 0.88, 'kedarnath-registration-2026': 0.87,
  'kedarnath-pehli-baar': 0.87, 'kedarnath-trek-guide': 0.87,
  'kedarnath-helicopter-booking': 0.87, 'char-dham-yatra-packing-list': 0.85,
  'kedarnath-yatra-complete-guide': 0.86, 'senior-citizen-char-dham': 0.86,
  'green-card-char-dham-yatra-2026': 0.85, 'char-dham-yatra-opening-dates-2026': 0.85,
  'char-dham-yatra-closing-dates-2026': 0.85, 'char-dham-yatra-kitna-kharcha': 0.85,
  'bujurg-char-dham-yatra': 0.85, 'char-dham-kab-jayen': 0.85,
  'char-dham-yatra-for-heart-patients': 0.85, 'char-dham-weather-guide': 0.85,
  'char-dham-yatra-hotels': 0.84, 'char-dham-yatra-solo-women': 0.84,
  'kedarnath-pony-vs-helicopter': 0.84, 'kedarnath-darshan-timing': 0.84,
  'kedarnath-pony-palki-kandi-rates': 0.9, 'kedarnath-trek-timings-2026': 0.84,
  'kedarnath-vip-darshan': 0.9, 'kedarnath-places-to-see': 0.84,
  'char-dham-yatra-road-conditions-2026': 0.83, 'char-dham-yatra-in-october': 0.83,
  'char-dham-yatra-7-days': 0.83, 'char-dham-yatra-with-kids': 0.83,
  'types-of-char-dham-yatra-packages': 0.83, 'char-dham-packing-list-hindi': 0.83,
};
const DEFAULT_BLOG_P = 0.80;

// ── Auto-discover blog slugs from the filesystem (only real pages). ──
// This keeps the sitemap in sync with /src/app/blog and never lists 404s
// (empty folders) or redirect-only slugs (which have no page file).
function discoverBlogSlugs() {
  return discoverDirSlugs('src/app/blog', ['[slug]']);
}

// Generic: list immediate sub-route folders that contain a real page file.
function discoverDirSlugs(relDir, exclude = []) {
  const dir = path.join(process.cwd(), relDir);
  try {
    return fs.readdirSync(dir, { withFileTypes: true })
      .filter(d => d.isDirectory() && !exclude.includes(d.name))
      .filter(d => {
        try { return fs.readdirSync(path.join(dir, d.name)).some(f => f.startsWith('page.')); }
        catch { return false; }
      })
      .map(d => d.name)
      .sort();
  } catch {
    return [];
  }
}

// Auto-discover every "Char Dham Yatra from <city>" landing page so new city
// pages are indexed the moment they ship — but never list slugs that are
// 301-redirected in next.config.js (duplicate-content cleanup). A sitemap must
// only contain canonical 200 URLs. Keep this set in sync with next.config.js.
const REDIRECTED_CITIES = new Set([
  'char-dham-yatra-from-lucknow', 'char-dham-yatra-from-varanasi',
  'char-dham-yatra-from-jaipur', 'char-dham-yatra-from-ahmedabad',
  'char-dham-yatra-from-indore', 'char-dham-yatra-from-bhopal',
  'char-dham-yatra-from-nagpur', 'char-dham-yatra-from-surat',
  'char-dham-yatra-from-patna', 'char-dham-yatra-from-rishikesh',
  'char-dham-yatra-from-dehradun',
]);

function discoverCitySlugs() {
  return discoverDirSlugs('src/app')
    .filter(s => s.startsWith('char-dham-yatra-from-'))
    .filter(s => !REDIRECTED_CITIES.has(s));
}

const CITY_PRIORITY = {
  'char-dham-yatra-from-delhi': 0.88, 'char-dham-yatra-from-noida': 0.85,
  'char-dham-yatra-from-mumbai': 0.85, 'char-dham-yatra-from-bangalore': 0.85,
  'char-dham-yatra-from-hyderabad': 0.83, 'char-dham-yatra-from-chennai': 0.83,
  'char-dham-yatra-from-kolkata': 0.83, 'char-dham-yatra-from-chandigarh': 0.82,
  'char-dham-yatra-from-pune': 0.82, 'char-dham-yatra-from-haridwar': 0.82,
};
const DEFAULT_CITY_P = 0.80;

export default function sitemap() {
  const now = new Date().toISOString();
  const b   = SITE.baseUrl;

  const core = [
    { url: b,                                          p: 1.00, cf: 'weekly'  },
    { url: `${b}/char-dham-yatra`,                     p: 0.98, cf: 'weekly'  },
    { url: `${b}/rishikesh-tour-packages`,             p: 0.92, cf: 'monthly' },
    { url: `${b}/haridwar-tour-packages`,              p: 0.92, cf: 'monthly' },
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
    { url: `${b}/gangotri-temple`,                     p: 0.86, cf: 'monthly' },
    { url: `${b}/yamunotri-temple`,                    p: 0.86, cf: 'monthly' },
    { url: `${b}/online-puja-booking`,                 p: 0.82, cf: 'monthly' },
    { url: `${b}/char-dham-yatra-emergency-contacts`,  p: 0.78, cf: 'monthly' },
    { url: `${b}/char-dham-road-status`,               p: 0.80, cf: 'weekly'  },
    { url: `${b}/gaurikund-guide`,                     p: 0.85, cf: 'monthly' },
    { url: `${b}/guptkashi-guide`,                     p: 0.85, cf: 'monthly' },
    { url: `${b}/kedarnath-to-badrinath-distance`,     p: 0.85, cf: 'monthly' },
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
    { url: `${b}/char-dham-hotels`,                    p: 0.9,  cf: 'monthly' },
    { url: `${b}/kedarnath-hotels`,                    p: 0.85, cf: 'monthly' },
    { url: `${b}/badrinath-hotels`,                    p: 0.85, cf: 'monthly' },
  ];

  const tools = [
    { url: `${b}/char-dham-yatra-cost-calculator`,     p: 0.88, cf: 'monthly' },
    { url: `${b}/char-dham-yatra-route-map`,           p: 0.87, cf: 'monthly' },
  ];

  const cabs = [
    { url: `${b}/cabs`,                                p: 0.88, cf: 'monthly' },
    { url: `${b}/char-dham-yatra-cab-booking`,         p: 0.85, cf: 'monthly' },
    { url: `${b}/haridwar-to-kedarnath-cab`,           p: 0.84, cf: 'monthly' },
    { url: `${b}/haridwar-to-badrinath-cab`,           p: 0.83, cf: 'monthly' },
    { url: `${b}/haridwar-to-gangotri-cab`,            p: 0.82, cf: 'monthly' },
    { url: `${b}/delhi-to-haridwar-cab`,               p: 0.82, cf: 'monthly' },
    ...CAB_ROUTES.map(r => ({ url: `${b}/cabs/${r.slug}`, p: 0.82, cf: 'monthly' })),
  ];

  const blog = [
    { url: `${b}/blog`, p: 0.82, cf: 'weekly' },
    ...discoverBlogSlugs().map(slug => ({
      url: `${b}/blog/${slug}`,
      p: BLOG_PRIORITY[slug] || DEFAULT_BLOG_P,
      cf: 'monthly',
    })),
  ];

  const cities = discoverCitySlugs().map(slug => ({
    url: `${b}/${slug}`,
    p: CITY_PRIORITY[slug] || DEFAULT_CITY_P,
    cf: 'monthly',
  }));

  const categoryPages = Object.keys(CATEGORIES).map(slug => ({
    url: `${b}/packages/${slug}`, p: 0.90, cf: 'weekly',
  }));

  const packagePages = PACKAGES.map(pkg => ({
    url: `${b}/packages/${pkg.slug}`, p: pkg.featured ? 0.88 : 0.80, cf: 'weekly',
  }));

  const authority = [
    { url: `${b}/kedarnath-tour-package`,                           p: 0.92, cf: 'weekly'  },
    { url: `${b}/badrinath-tour-package`,                           p: 0.90, cf: 'weekly'  },
    { url: `${b}/kedarnath-vip-darshan`,                            p: 0.86, cf: 'monthly' },
    { url: `${b}/kedarnath-pony-palki-kandi-rates`,                 p: 0.86, cf: 'monthly' },
    { url: `${b}/char-dham-yatra-scams`,                            p: 0.82, cf: 'monthly' },
    { url: `${b}/best-char-dham-yatra-operators-haridwar`,          p: 0.86, cf: 'monthly' },
    { url: `${b}/char-dham-yatra-statistics`,                       p: 0.78, cf: 'monthly' },
    { url: `${b}/shiv-ganga-travels-vs-makemytrip-char-dham`,       p: 0.80, cf: 'monthly' },
    { url: `${b}/direct-operator-vs-travel-aggregator-char-dham`,   p: 0.78, cf: 'monthly' },
  ];

  const all = [
    ...core, ...guides, ...weatherPages, ...howToReach,
    ...hotels, ...tools, ...cabs, ...blog, ...cities,
    ...authority, ...categoryPages, ...packagePages,
  ];

  return all.map(({ url, p, cf }) => ({
    url,
    lastModified: now,
    priority: p,
    changeFrequency: cf,
  }));
}
