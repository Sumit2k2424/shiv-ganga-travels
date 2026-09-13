// Shared registry for the regional-language Char Dham Yatra pages.
// Single source of truth consumed by: sitemap.js, Footer.js, the main
// /char-dham-yatra hub page, and LanguageLinkMesh — add a language once
// here and it propagates everywhere automatically.

export const LANGUAGE_PAGES = [
  // Hindi sits first deliberately — it is the primary search language for this
  // pilgrimage, not a regional variant, and carries by far the most volume.
  { slug: 'char-dham-yatra-hindi',    code: 'hi', label: 'Hindi',    native: 'हिन्दी',   region: 'उत्तर भारत / North India' },
  { slug: 'char-dham-yatra-marathi',  code: 'mr', label: 'Marathi',  native: 'मराठी',    region: 'Maharashtra' },
  { slug: 'char-dham-yatra-bengali',  code: 'bn', label: 'Bengali',  native: 'বাংলা',    region: 'West Bengal & Tripura' },
  { slug: 'char-dham-yatra-tamil',    code: 'ta', label: 'Tamil',    native: 'தமிழ்',    region: 'Tamil Nadu' },
  { slug: 'char-dham-yatra-malayalam',code: 'ml', label: 'Malayalam',native: 'മലയാളം',   region: 'Kerala' },
  { slug: 'char-dham-yatra-punjabi',  code: 'pa', label: 'Punjabi',  native: 'ਪੰਜਾਬੀ',    region: 'Punjab & Haryana' },
  { slug: 'char-dham-yatra-nepali',   code: 'ne', label: 'Nepali',   native: 'नेपाली',   region: 'Nepal & Darjeeling' },
  { slug: 'char-dham-yatra-gujarati', code: 'gu', label: 'Gujarati', native: 'ગુજરાતી',  region: 'Gujarat' },
  { slug: 'char-dham-yatra-kannada',  code: 'kn', label: 'Kannada',  native: 'ಕನ್ನಡ',    region: 'Karnataka' },
  { slug: 'char-dham-yatra-odia',     code: 'or', label: 'Odia',     native: 'ଓଡ଼ିଆ',    region: 'Odisha' },
  { slug: 'char-dham-yatra-telugu',   code: 'te', label: 'Telugu',   native: 'తెలుగు',   region: 'Andhra Pradesh & Telangana' },
  { slug: 'char-dham-yatra-assamese', code: 'as', label: 'Assamese', native: 'অসমীয়া',  region: 'Assam & the Northeast' },
];

// The English pillar every language page is a translation of. It is also the
// x-default target: a reader whose language we do not publish lands there.
export const LANGUAGE_HUB_SLUG = 'char-dham-yatra';

/**
 * Next metadata `alternates` for one page in the Char Dham language set —
 * the page's own canonical plus a full hreflang cluster (English hub, every
 * language page, x-default). Every member emits the same cluster, which is
 * what makes the annotations reciprocal; Google ignores one-way hreflang.
 * Plain ISO 639-1 codes on purpose: the pages target a language, not a
 * country (Nepali is read in Darjeeling as much as in Nepal).
 */
export function languageAlternates(slug, baseUrl) {
  const hub = `${baseUrl}/${LANGUAGE_HUB_SLUG}`;
  const languages = { en: hub };
  for (const l of LANGUAGE_PAGES) languages[l.code] = `${baseUrl}/${l.slug}`;
  languages['x-default'] = hub;
  return { canonical: `${baseUrl}/${slug}`, languages };
}
