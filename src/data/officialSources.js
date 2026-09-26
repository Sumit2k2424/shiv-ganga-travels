// ═══════════════════════════════════════════════════════════════
//  OFFICIAL SOURCES — the government and official pages the site cites
//
//  One place for every official URL, so that when a department moves a page
//  the fix is one line here rather than a hunt through sixty page files.
//  Rendered through <OfficialLink k="…">, which is used inline, on the phrase
//  that makes the claim — never as a block of links repeated on every page.
//
//  Every URL was opened on 26 Sep 2026 and returned the page it claims to be.
//  Two traps found doing that:
//   · gmvnl.in is a PARKED domain ("contact the domain owner"). GMVN's own
//     booking site is gmvnonline.com — the state registration portal links
//     to gmvnonline.com/trh-filter.php. gmvn.in is a squatted link farm.
//   · Several plausible uttarakhandtourism.gov.in/destination/<place> and
//     district /tourist-place/<place>/ URLs answer 200 with a generic
//     "Welcome To Uttarakhand Tourism" page or a 404 — only the ones below
//     have real content. Check a new one in a browser before adding it.
// ═══════════════════════════════════════════════════════════════

export const OFFICIAL = {
  // Portals
  registration: { name: 'Uttarakhand Tourism registration portal', url: 'https://registrationandtouristcare.uk.gov.in/' },
  heliyatra:    { name: 'IRCTC HeliYatra', url: 'https://heliyatra.irctc.co.in/' },
  ucada:        { name: 'Uttarakhand Civil Aviation Development Authority', url: 'https://ucada.uk.gov.in/' },
  bktc:         { name: 'Shri Badarinath Kedarnath Temple Committee', url: 'https://badrinath-kedarnath.gov.in/' },
  imd:          { name: 'IMD Meteorological Centre, Dehradun', url: 'https://mausam.imd.gov.in/dehradun/' },
  usdma:        { name: 'Uttarakhand State Disaster Management Authority', url: 'https://usdma.uk.gov.in/' },
  police:       { name: 'Uttarakhand Police', url: 'https://uttarakhandpolice.uk.gov.in/' },
  greencard:    { name: 'Uttarakhand Transport Green Card portal', url: 'https://greencard.uk.gov.in/' },
  health:       { name: 'Uttarakhand Medical Health & Family Welfare Department', url: 'https://health.uk.gov.in/' },
  gmvn:         { name: 'GMVN (Garhwal Mandal Vikas Nigam)', url: 'https://gmvnonline.com/' },

  // Places — Uttarakhand Tourism destination pages with real content
  'ut-kedarnath':  { name: 'Uttarakhand Tourism — Kedarnath', url: 'https://uttarakhandtourism.gov.in/destination/kedarnath' },
  'ut-badrinath':  { name: 'Uttarakhand Tourism — Badrinath', url: 'https://uttarakhandtourism.gov.in/destination/badrinath' },
  'ut-gangotri':   { name: 'Uttarakhand Tourism — Gangotri', url: 'https://uttarakhandtourism.gov.in/destination/gangotri' },
  'ut-yamunotri':  { name: 'Uttarakhand Tourism — Yamunotri', url: 'https://uttarakhandtourism.gov.in/destination/yamunotri' },
  'ut-mana':       { name: 'Uttarakhand Tourism — Mana', url: 'https://uttarakhandtourism.gov.in/destination/mana' },
  'ut-haridwar':   { name: 'Uttarakhand Tourism — Haridwar', url: 'https://uttarakhandtourism.gov.in/destination/haridwar' },
  'ut-devprayag':  { name: 'Uttarakhand Tourism — Devprayag', url: 'https://uttarakhandtourism.gov.in/destination/devprayag' },

  // Places — district administration pages with real content
  'dist-badrinath':  { name: 'District Chamoli — Badrinath', url: 'https://chamoli.nic.in/tourist-place/badrinath/' },
  'dist-hemkund':    { name: 'District Chamoli — Hemkund Sahib', url: 'https://chamoli.nic.in/tourist-place/hemkund-sahib/' },
  'dist-gangotri':   { name: 'District Uttarkashi — Gangotri Dham', url: 'https://uttarkashi.nic.in/tourist-place/gangotri-dham-uttarkashi/' },
  'dist-yamunotri':  { name: 'District Uttarkashi — Yamunotri Dham', url: 'https://uttarkashi.nic.in/tourist-place/yamunotri-dham/' },
  'dist-harsil':     { name: 'District Uttarkashi — Harsil', url: 'https://uttarkashi.nic.in/tourist-place/harsil/' },
  'dist-chopta':     { name: 'District Rudraprayag — Chopta', url: 'https://rudraprayag.nic.in/tourist-place/chopta/' },
  'dist-ukhimath':   { name: 'District Rudraprayag — Ukhimath', url: 'https://rudraprayag.nic.in/tourist-place/ukhimath/' },
  'dist-harkipauri': { name: 'District Haridwar — Har Ki Pauri', url: 'https://haridwar.nic.in/tourist-place/har-ki-pauri/' },
  'dist-mansadevi':  { name: 'District Haridwar — Mansa Devi Temple', url: 'https://haridwar.nic.in/tourist-place/mansa-devi-temple/' },
  'dist-chandidevi': { name: 'District Haridwar — Chandi Devi Temple', url: 'https://haridwar.nic.in/tourist-place/chandi-devi-temple/' },
};
