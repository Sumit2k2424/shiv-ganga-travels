import fs from 'fs';
import path from 'path';
import { PACKAGES, SITE, CATEGORIES } from '@/data/packages';
import { getPublishedRoutes, getPublishedOrigins, getPublishedDestinations } from '@/data/cabs';
import { LANGUAGE_PAGES } from '@/data/languages';
import { REDIRECT_SOURCE_PATHS } from '@/data/redirects';
import { getPublishedReleases } from '@/data/press';

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
  'char-dham-yatra-road-conditions-2026': 0.83,
  'char-dham-monsoon-safety': 0.87, 'september-char-dham-yatra': 0.86, 'char-dham-yatra-in-october': 0.83,
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
// 301-redirected (duplicate-content cleanup). A sitemap must only contain
// canonical 200 URLs. Redirect sources come from the shared redirect table
// (src/data/redirects.js), so this stays in sync automatically.
function discoverCitySlugs() {
  return discoverDirSlugs('src/app')
    .filter(s => s.startsWith('char-dham-yatra-from-'))
    .filter(s => !REDIRECT_SOURCE_PATHS.has(s));
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
  const b = SITE.baseUrl;

  const core = [
    { url: b,                                          p: 1.00, cf: 'weekly'  },
    { url: `${b}/char-dham-yatra`,                     p: 0.98, cf: 'weekly'  },
    { url: `${b}/rishikesh-tour-packages`,             p: 0.92, cf: 'monthly' },
    { url: `${b}/haridwar-tour-packages`,              p: 0.92, cf: 'monthly' },
    { url: `${b}/mussoorie-tour-packages`,             p: 0.90, cf: 'monthly' },
    { url: `${b}/kedarnath-yatra`,                     p: 0.92, cf: 'weekly'  },
    { url: `${b}/badrinath-yatra`,                     p: 0.92, cf: 'weekly'  },
    { url: `${b}/packages`,                            p: 0.92, cf: 'weekly'  },
    { url: `${b}/char-dham-helicopter`,                p: 0.90, cf: 'weekly'  },
    { url: `${b}/do-dham-yatra`,                       p: 0.88, cf: 'weekly'  },
    { url: `${b}/teen-dham-yatra`,                     p: 0.88, cf: 'weekly'  },
    { url: `${b}/gangotri-yatra`,                      p: 0.86, cf: 'monthly' },
    { url: `${b}/yamunotri-yatra`,                     p: 0.86, cf: 'monthly' },
    { url: `${b}/panch-kedar-yatra`,                   p: 0.84, cf: 'monthly' },
    { url: `${b}/panch-badri-yatra`,                   p: 0.84, cf: 'monthly' },
    { url: `${b}/uttarakhand-tour-packages`,           p: 0.82, cf: 'monthly' },
    { url: `${b}/chopta-tungnath`,                     p: 0.82, cf: 'monthly' },
    { url: `${b}/about`,                               p: 0.70, cf: 'monthly' },
    { url: `${b}/contact`,                             p: 0.75, cf: 'monthly' },
    { url: `${b}/cancellation-policy`,                 p: 0.50, cf: 'yearly'  },
    { url: `${b}/privacy-policy`,                      p: 0.45, cf: 'yearly'  },
    { url: `${b}/terms-and-conditions`,                p: 0.45, cf: 'yearly'  },
    { url: `${b}/sitemap-page`,                        p: 0.60, cf: 'monthly' },
  ];

  const guides = [
    { url: `${b}/kedarnath-temple`,                    p: 0.88, cf: 'monthly' },
    { url: `${b}/dhari-devi-temple`,                   p: 0.80, cf: 'monthly' },
    { url: `${b}/kedarnath-height`,                    p: 0.75, cf: 'monthly' },
    { url: `${b}/badrinath-temple`,                    p: 0.86, cf: 'monthly' },
    { url: `${b}/gangotri-temple`,                     p: 0.86, cf: 'monthly' },
    { url: `${b}/yamunotri-temple`,                    p: 0.86, cf: 'monthly' },
    { url: `${b}/online-puja-booking`,                 p: 0.82, cf: 'monthly' },
    { url: `${b}/char-dham-yatra-emergency-contacts`,  p: 0.78, cf: 'monthly' },
    { url: `${b}/char-dham-road-status`,               p: 0.80, cf: 'weekly'  },
    { url: `${b}/gaurikund`,                     p: 0.85, cf: 'monthly' },
    { url: `${b}/guptkashi-guide`,                     p: 0.85, cf: 'monthly' },
    // Competitor-gap entity pages (Aug 2026). Each targets a place or rate card
    // that every page-1 competitor has a dedicated page for and we did not —
    // these entities were previously only *mentioned* inside other routes.
    { url: `${b}/gaumukh`,                             p: 0.84, cf: 'monthly' },
    { url: `${b}/janki-chatti`,                        p: 0.85, cf: 'monthly' },
    { url: `${b}/govindghat`,                          p: 0.84, cf: 'monthly' },
    { url: `${b}/phata`,                               p: 0.84, cf: 'monthly' },
    { url: `${b}/madhyamaheshwar-temple`,              p: 0.82, cf: 'monthly' },
    { url: `${b}/yamunotri-pony-palki-rates`,          p: 0.86, cf: 'monthly' },
    { url: `${b}/kedarnath-to-badrinath-distance`,     p: 0.85, cf: 'monthly' },
    // Distance and on-route logistics. Fixed factual answers — the format AI
    // engines cite most readily, and the cheapest pages on the site to keep true.
    { url: `${b}/haridwar-to-badrinath-distance`,      p: 0.85, cf: 'monthly' },
    { url: `${b}/haridwar-to-gangotri-distance`,       p: 0.84, cf: 'monthly' },
    { url: `${b}/haridwar-to-yamunotri-distance`,      p: 0.84, cf: 'monthly' },
    { url: `${b}/delhi-to-kedarnath-distance`,         p: 0.86, cf: 'monthly' },
    { url: `${b}/gangotri-to-yamunotri-distance`,      p: 0.82, cf: 'monthly' },
    { url: `${b}/altitude-sickness-char-dham`,         p: 0.86, cf: 'monthly' },
    { url: `${b}/char-dham-yatra-mobile-network`,      p: 0.80, cf: 'monthly' },
    { url: `${b}/char-dham-yatra-food-guide`,          p: 0.80, cf: 'monthly' },
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

  // Every cab URL is generated from the data layer, and only from entries that
  // pass the publishability gate in @/data/cabs — so a half-written route can
  // never reach the sitemap. Destination and origin hubs outrank the individual
  // routes because they carry the comparison tables people actually land on.
  const cabs = [
    { url: `${b}/cabs`,                        p: 0.88, cf: 'monthly' },
    { url: `${b}/char-dham-yatra-cab-booking`, p: 0.85, cf: 'monthly' },
    ...getPublishedDestinations().map(d => ({ url: `${b}/cabs/to/${d.slug}`,   p: 0.84, cf: 'monthly' })),
    ...getPublishedOrigins().map(o      => ({ url: `${b}/cabs/from/${o.slug}`, p: 0.83, cf: 'monthly' })),
    ...getPublishedRoutes().map(r       => ({ url: `${b}/cabs/${r.slug}`,      p: 0.82, cf: 'monthly' })),
  ];

  // Newsroom. Releases come from the same publishability gate that drives
  // generateStaticParams, so an unapproved draft can never reach the sitemap.
  const press = [
    { url: `${b}/press`, p: 0.75, cf: 'monthly' },
    ...getPublishedReleases().map(r => ({
      url: `${b}/press/${r.slug}`, p: 0.70, cf: 'yearly',
    })),
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
    // Tier 3 — comparison and commercial. Bottom-of-funnel: low volume,
    // high intent, and the existing vs-MakeMyTrip page proves the pattern.
    { url: `${b}/how-to-choose-char-dham-tour-operator`,            p: 0.86, cf: 'monthly' },
    { url: `${b}/char-dham-yatra-booking-sites-compared`,           p: 0.84, cf: 'monthly' },
    { url: `${b}/char-dham-helicopter-booking-guide`,               p: 0.85, cf: 'monthly' },
    { url: `${b}/char-dham-yatra-for-temple-groups`,                p: 0.83, cf: 'monthly' },
    { url: `${b}/char-dham-yatra-corporate-booking`,                p: 0.80, cf: 'monthly' },
    { url: `${b}/shiv-ganga-travels-vs-thrillophilia`,              p: 0.80, cf: 'monthly' },
  ];

  // Hindi outranks the other language pages because it is the primary search
  // language for this pilgrimage, not a regional variant.
  const languagePages = LANGUAGE_PAGES.map(l => ({
    url: `${b}/${l.slug}`,
    p: l.code === 'hi' ? 0.94 : 0.84,
    cf: l.code === 'hi' ? 'weekly' : 'monthly',
  }));

  // ── Local Haridwar service pages. These target our own city, where organic
  // competition is weakest and intent is transactional, so they rank higher
  // than the 0.78 the auto-discovery fallback would otherwise assign them.
  const localHaridwar = [
    { url: `${b}/taxi-service-in-haridwar`,            p: 0.90, cf: 'monthly' },
    { url: `${b}/haridwar-to-delhi-taxi`,              p: 0.86, cf: 'monthly' },
    { url: `${b}/dehradun-airport-to-haridwar-taxi`,   p: 0.86, cf: 'monthly' },
    { url: `${b}/haridwar-to-rishikesh-taxi`,          p: 0.85, cf: 'monthly' },
    { url: `${b}/har-ki-pauri-guide`,                  p: 0.84, cf: 'monthly' },
    { url: `${b}/haridwar-sightseeing-places`,         p: 0.86, cf: 'monthly' },
    { url: `${b}/mansa-devi-temple`,                   p: 0.84, cf: 'monthly' },
    { url: `${b}/chandi-devi-temple`,                  p: 0.83, cf: 'monthly' },
    { url: `${b}/daksh-mahadev-temple`,                p: 0.82, cf: 'monthly' },
    { url: `${b}/maya-devi-temple`,                    p: 0.80, cf: 'monthly' },
    { url: `${b}/shantikunj-haridwar-guide`,           p: 0.80, cf: 'monthly' },
    { url: `${b}/kumbh-mela-haridwar`,                 p: 0.92, cf: 'weekly'  },
    { url: `${b}/haridwar-hotels`,                     p: 0.86, cf: 'monthly' },
    { url: `${b}/neelkanth-mahadev-temple`,            p: 0.84, cf: 'monthly' },
    { url: `${b}/triveni-ghat-rishikesh`,              p: 0.82, cf: 'monthly' },
    { url: `${b}/patanjali-yogpeeth-haridwar`,         p: 0.80, cf: 'monthly' },
    { url: `${b}/auli-skiing-package`,                 p: 0.85, cf: 'monthly' },
  ];

  // ── Winter Char Dham. These carry the off-season, when every Char Dham
  // page above goes dead from mid-November to late April. Priority is high
  // because the competition for these queries is close to nonexistent.
  const winterSeats = [
    { url: `${b}/winter-char-dham-yatra`,              p: 0.90, cf: 'weekly'  },
    { url: `${b}/ukhimath`,         p: 0.86, cf: 'monthly' },
    { url: `${b}/joshimath-narsingh-temple`,           p: 0.85, cf: 'monthly' },
    { url: `${b}/kedarnath-doli-yatra`,                p: 0.84, cf: 'monthly' },
    { url: `${b}/mukhba-gangotri-winter-seat`,         p: 0.83, cf: 'monthly' },
    { url: `${b}/kharsali-yamunotri-winter-seat`,      p: 0.83, cf: 'monthly' },
  ];

  const listed = [
    ...core, ...guides, ...weatherPages, ...howToReach,
    ...hotels, ...tools, ...cabs, ...blog, ...press, ...cities,
    ...authority, ...categoryPages, ...packagePages, ...languagePages,
    ...localHaridwar, ...winterSeats,
  ];

  // ── Safety net: auto-discover every top-level route folder that has a real
  // page file and is not already listed above. Stops new landing pages from
  // silently missing the sitemap (the main cause of "Discovered - currently
  // not indexed" in Search Console). Excludes noindex/utility routes and any
  // slug that is 301-redirected in next.config.js.
  const EXCLUDE_TOP = new Set([
    'ui-kit', 'review', 'packages', 'blog', 'cabs',
    'opengraph-image', 'sitemap-page',
    // noindex routes — a sitemap must never list a URL that asks not to be indexed
    'book', 'styleguide',
  ]);
  const seen = new Set(listed.map(x => x.url));
  const discovered = discoverDirSlugs('src/app')
    .filter(slug => !EXCLUDE_TOP.has(slug))
    .filter(slug => !slug.startsWith('['))
    .filter(slug => !REDIRECT_SOURCE_PATHS.has(slug))
    .map(slug => ({ url: `${b}/${slug}`, p: 0.78, cf: 'monthly' }))
    .filter(x => !seen.has(x.url));

  // Final guard: strip any URL whose path is a 301 redirect source. This
  // catches redirected slugs that still have a real page.js on disk (e.g.
  // blog posts consolidated via next.config.js), which the folder-discovery
  // above would otherwise treat as live 200 pages. Sitemaps must list only
  // canonical URLs — no redirects.
  const all = [...listed, ...discovered].filter(({ url }) => {
    const slugPath = url.replace(b, '').replace(/^\//, '');
    return !REDIRECT_SOURCE_PATHS.has(slugPath);
  });

  // No lastModified: stamping every URL with the build time on every deploy
  // teaches Google the field is noise and it stops trusting it. Omitting it
  // is the accurate signal until real per-page updated dates exist.
  return all.map(({ url, p, cf }) => ({
    url,
    priority: p,
    changeFrequency: cf,
  }));
}
