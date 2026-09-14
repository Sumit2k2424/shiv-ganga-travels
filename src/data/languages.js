// Shared registry for the regional-language Char Dham Yatra pages.
// Single source of truth consumed by: sitemap.js, Footer.js, the main
// /char-dham-yatra hub page, and LanguageLinkMesh — add a language once
// here and it propagates everywhere automatically.

// `index` — whether the page is in Google's index. All twelve were machine
// translated. Over 16 months (Apr–Sep 2026) Bengali, Telugu, Kannada and
// Gujarati earned 7–21 clicks each and Hindi is the pilgrimage's primary
// search language; the other seven earned 0–1 clicks. Set 14 Sep 2026:
// those seven are noindex,follow, out of the sitemap, the footer and the
// hreflang cluster. They still render for a reader who lands on them.
export const LANGUAGE_PAGES = [
  // Hindi sits first deliberately — it is the primary search language for this
  // pilgrimage, not a regional variant, and carries by far the most volume.
  { slug: 'char-dham-yatra-hindi',    code: 'hi', label: 'Hindi',    native: 'हिन्दी',   region: 'उत्तर भारत / North India', index: true },
  { slug: 'char-dham-yatra-marathi',  code: 'mr', label: 'Marathi',  native: 'मराठी',    region: 'Maharashtra', index: false },
  { slug: 'char-dham-yatra-bengali',  code: 'bn', label: 'Bengali',  native: 'বাংলা',    region: 'West Bengal & Tripura', index: true },
  { slug: 'char-dham-yatra-tamil',    code: 'ta', label: 'Tamil',    native: 'தமிழ்',    region: 'Tamil Nadu', index: false },
  { slug: 'char-dham-yatra-malayalam',code: 'ml', label: 'Malayalam',native: 'മലയാളം',   region: 'Kerala', index: false },
  { slug: 'char-dham-yatra-punjabi',  code: 'pa', label: 'Punjabi',  native: 'ਪੰਜਾਬੀ',    region: 'Punjab & Haryana', index: false },
  { slug: 'char-dham-yatra-nepali',   code: 'ne', label: 'Nepali',   native: 'नेपाली',   region: 'Nepal & Darjeeling', index: false },
  { slug: 'char-dham-yatra-gujarati', code: 'gu', label: 'Gujarati', native: 'ગુજરાતી',  region: 'Gujarat', index: true },
  { slug: 'char-dham-yatra-kannada',  code: 'kn', label: 'Kannada',  native: 'ಕನ್ನಡ',    region: 'Karnataka', index: true },
  { slug: 'char-dham-yatra-odia',     code: 'or', label: 'Odia',     native: 'ଓଡ଼ିଆ',    region: 'Odisha', index: false },
  { slug: 'char-dham-yatra-telugu',   code: 'te', label: 'Telugu',   native: 'తెలుగు',   region: 'Andhra Pradesh & Telangana', index: true },
  { slug: 'char-dham-yatra-assamese', code: 'as', label: 'Assamese', native: 'অসমীয়া',  region: 'Assam & the Northeast', index: false },
];

// The English pillar every language page is a translation of. It is also the
// x-default target: a reader whose language we do not publish lands there.
export const LANGUAGE_HUB_SLUG = 'char-dham-yatra';

export const INDEXED_LANGUAGE_PAGES = LANGUAGE_PAGES.filter(l => l.index);
export const isLanguageIndexed = (slug) => LANGUAGE_PAGES.some(l => l.slug === slug && l.index);

/**
 * Next metadata `alternates` for one page in the Char Dham language set —
 * the page's own canonical plus a full hreflang cluster (English hub, every
 * language page, x-default). Every member emits the same cluster, which is
 * what makes the annotations reciprocal; Google ignores one-way hreflang.
 * Plain ISO 639-1 codes on purpose: the pages target a language, not a
 * country (Nepali is read in Darjeeling as much as in Nepal).
 */
export function languageAlternates(slug, baseUrl) {
  const canonical = `${baseUrl}/${slug}`;
  // A noindexed page must not be in anyone's hreflang cluster (Google drops
  // clusters that contain non-indexable members), and it carries none itself.
  if (slug !== LANGUAGE_HUB_SLUG && !isLanguageIndexed(slug)) return { canonical };
  const hub = `${baseUrl}/${LANGUAGE_HUB_SLUG}`;
  const languages = { en: hub };
  for (const l of INDEXED_LANGUAGE_PAGES) languages[l.code] = `${baseUrl}/${l.slug}`;
  languages['x-default'] = hub;
  return { canonical, languages };
}

// Next `robots` metadata for a language page: noindex,follow for the seven.
export function languageRobots(slug) {
  return isLanguageIndexed(slug) ? {} : { robots: { index: false, follow: true } };
}
