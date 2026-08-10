// Shared registry for the regional-language Char Dham Yatra pages.
// Single source of truth consumed by: sitemap.js, Footer.js, the main
// /char-dham-yatra hub page, and LanguageLinkMesh — add a language once
// here and it propagates everywhere automatically.

export const LANGUAGE_PAGES = [
  // Hindi sits first deliberately — it is the primary search language for this
  // pilgrimage, not a regional variant, and carries by far the most volume.
  { slug: 'char-dham-yatra-hindi',    code: 'hi', label: 'Hindi',    native: 'हिन्दी',   region: 'उत्तर भारत / North India' },
  { slug: 'char-dham-yatra-bengali',  code: 'bn', label: 'Bengali',  native: 'বাংলা',    region: 'West Bengal & Tripura' },
  { slug: 'char-dham-yatra-gujarati', code: 'gu', label: 'Gujarati', native: 'ગુજરાતી',  region: 'Gujarat' },
  { slug: 'char-dham-yatra-kannada',  code: 'kn', label: 'Kannada',  native: 'ಕನ್ನಡ',    region: 'Karnataka' },
  { slug: 'char-dham-yatra-odia',     code: 'or', label: 'Odia',     native: 'ଓଡ଼ିଆ',    region: 'Odisha' },
  { slug: 'char-dham-yatra-telugu',   code: 'te', label: 'Telugu',   native: 'తెలుగు',   region: 'Andhra Pradesh & Telangana' },
  { slug: 'char-dham-yatra-assamese', code: 'as', label: 'Assamese', native: 'অসমীয়া',  region: 'Assam & the Northeast' },
];
