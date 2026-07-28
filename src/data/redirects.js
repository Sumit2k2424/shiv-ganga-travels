// ── Single source of truth for 301 redirects ──────────────────────────────
// Consumed by BOTH next.config.js (to emit the redirects) AND src/app/sitemap.js
// (to exclude any redirected source from the sitemap). A sitemap must only list
// canonical 200 URLs — listing a URL that 301-redirects triggers "Page with
// redirect" in Search Console and wastes crawl budget. Keeping redirects here
// means the sitemap can never drift out of sync with the redirect table.
//
// CommonJS on purpose: next.config.js runs in plain Node (no path aliases, no
// ESM) and requires this with a relative path. sitemap.js imports it via the
// `@/data/redirects` alias — Next transpiles the interop.

const REDIRECTS = [
  // ── Cab routes that were linked without the /cabs prefix (live 404s in GSC) ──
  { source: '/haridwar-to-mussoorie-cab',  destination: '/cabs/haridwar-to-mussoorie-cab',  permanent: true },
  { source: '/rishikesh-to-mussoorie-cab', destination: '/cabs/rishikesh-to-mussoorie-cab', permanent: true },
  { source: '/dehradun-to-mussoorie-cab',  destination: '/cabs/dehradun-to-mussoorie-cab',  permanent: true },
  { source: '/haridwar-to-yamunotri-cab',  destination: '/cabs/haridwar-to-yamunotri-cab',  permanent: true },
  { source: '/haridwar-to-auli-cab',       destination: '/cabs/haridwar-to-auli-cab',       permanent: true },
  { source: '/haridwar-to-chopta-cab',     destination: '/cabs/haridwar-to-chopta-cab',     permanent: true },
  { source: '/haridwar-to-nainital-cab',   destination: '/cabs/haridwar-to-nainital-cab',   permanent: true },
  { source: '/haridwar-to-mukteshwar-cab', destination: '/cabs/haridwar-to-mukteshwar-cab', permanent: true },
  { source: '/rishikesh-to-kedarnath-cab', destination: '/cabs/rishikesh-to-kedarnath-cab', permanent: true },
  { source: '/rishikesh-to-badrinath-cab', destination: '/cabs/rishikesh-to-badrinath-cab', permanent: true },
  { source: '/rishikesh-to-auli-cab',      destination: '/cabs/rishikesh-to-auli-cab',      permanent: true },
  { source: '/dehradun-to-kedarnath-cab',  destination: '/cabs/dehradun-to-kedarnath-cab',  permanent: true },
  { source: '/dehradun-to-badrinath-cab',  destination: '/cabs/dehradun-to-badrinath-cab',  permanent: true },
  { source: '/dehradun-to-nainital-cab',   destination: '/cabs/dehradun-to-nainital-cab',   permanent: true },
  { source: '/dehradun-to-mukteshwar-cab', destination: '/cabs/dehradun-to-mukteshwar-cab', permanent: true },
  // ── Retired /blog/[slug] JSON route: send its old slugs to the real pages ──
  { source: '/blog/kedarnath-trek-guide-old', destination: '/blog/kedarnath-trek-guide',    permanent: true },
  // Redirect stale 2025 guide URL → main char dham page (2026 content)
  { source: '/char-dham-yatra-2025', destination: '/char-dham-yatra', permanent: true },
  // Fix internal 404s found by Screaming Frog
  { source: '/packages/char-dham-yatra-senior-citizen-14n-15d', destination: '/packages/char-dham-yatra-senior-citizen-12n-13d', permanent: true },
  { source: '/packages/char-dham-yatra-10n-11d-haridwar',       destination: '/packages/char-dham-yatra-11n-12d-haridwar',       permanent: true },
  { source: '/how-to-reach-kedarnath',                           destination: '/blog/how-to-reach-kedarnath',                    permanent: true },
  { source: '/blog/char-dham-yatra',                             destination: '/char-dham-yatra',                                permanent: true },
  // Redirect blog Badrinath guide to new proper landing page
  { source: '/blog/badrinath-yatra-guide',                       destination: '/badrinath-yatra',                                permanent: true },
  { source: '/blog/char-dham-yatra-route-map',                  destination: '/char-dham-yatra-route-map',                    permanent: true },
  // ── Thin/duplicate blog pages consolidated into canonical pages (May 2026 update cleanup) ──
  { source: '/blog/char-dham-yatra-guide',     destination: '/blog/char-dham-guide',     permanent: true },
  { source: '/blog/char-dham-budget-guide',    destination: '/blog/char-dham-yatra-cost', permanent: true },
  { source: '/blog/kedarnath-yatra-package',   destination: '/kedarnath-yatra',          permanent: true },
  { source: '/blog/kedarnath-yatra-guide',     destination: '/blog/kedarnath-yatra-complete-guide', permanent: true },
  { source: '/blog/kedarnath-pony-palki-rates-2026', destination: '/kedarnath-pony-palki-kandi-rates', permanent: true },
  { source: '/blog/vip-darshan-kedarnath-booking', destination: '/kedarnath-vip-darshan', permanent: true },
  { source: '/blog/badrinath-temple-guide',    destination: '/badrinath-temple',         permanent: true },
  { source: '/blog/yamunotri-yatra-guide',     destination: '/yamunotri-yatra',          permanent: true },
  { source: '/blog/gangotri-yatra-guide',      destination: '/gangotri-yatra',           permanent: true },
  { source: '/blog/uttarakhand-tour-packages', destination: '/uttarakhand-tour-packages', permanent: true },
  { source: '/blog/kedarnath-weather-guide',   destination: '/kedarnath-weather',        permanent: true },
  { source: '/blog/how-to-reach-badrinath',    destination: '/how-to-reach-badrinath',   permanent: true },
  { source: '/char-dham-yatra-checklist',      destination: '/blog/char-dham-yatra-packing-list', permanent: true },
  // ── Duplicate city pages (92% identical content) → main Char Dham page ──
  // Keeps: Delhi, Noida, Mumbai, Bangalore, Chennai, Kolkata, Pune, Hyderabad, Chandigarh
  // Redirects: all other city pages that add no unique value
  { source: '/char-dham-yatra-from-lucknow',     destination: '/char-dham-yatra-from-delhi', permanent: true },
  { source: '/char-dham-yatra-from-varanasi',    destination: '/char-dham-yatra-from-delhi', permanent: true },
  { source: '/char-dham-yatra-from-jaipur',      destination: '/char-dham-yatra-from-delhi', permanent: true },
  { source: '/char-dham-yatra-from-ahmedabad',   destination: '/char-dham-yatra-from-mumbai', permanent: true },
  { source: '/char-dham-yatra-from-indore',      destination: '/char-dham-yatra-from-mumbai', permanent: true },
  { source: '/char-dham-yatra-from-bhopal',      destination: '/char-dham-yatra-from-mumbai', permanent: true },
  { source: '/char-dham-yatra-from-nagpur',      destination: '/char-dham-yatra-from-mumbai', permanent: true },
  { source: '/char-dham-yatra-from-surat',       destination: '/char-dham-yatra-from-mumbai', permanent: true },
  { source: '/char-dham-yatra-from-patna',       destination: '/char-dham-yatra-from-delhi', permanent: true },
  { source: '/char-dham-yatra-from-rishikesh',   destination: '/char-dham-yatra-from-delhi', permanent: true },
  { source: '/char-dham-yatra-from-dehradun',    destination: '/char-dham-yatra-from-delhi', permanent: true },
];

// Set of source paths without leading slash (matches sitemap slug form), e.g.
// "blog/badrinath-yatra-guide", "char-dham-yatra-2025".
const REDIRECT_SOURCE_PATHS = new Set(
  REDIRECTS.map(r => r.source.replace(/^\//, ''))
);

module.exports = { REDIRECTS, REDIRECT_SOURCE_PATHS };
