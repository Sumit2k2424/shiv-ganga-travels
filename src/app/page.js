/* ══════════════════════════════════════════════════════════════
   HOMEPAGE — editorial luxury layout (Phase 2)

   Rebuilt in the `lux-` editorial system. Preserved verbatim:
   · metadata (title/description/keywords/OG/Twitter/canonical)
   · <Schema/> — Product + WebPage(speakable) + FAQPage JSON-LD
   · <HeroSection/> — already cinematic, LCP-tuned, .speakable-answer
   · every link, price, CTA and the full internal-link mesh (SEO)

   Editorial layer + motion are imported route-locally, so only `/`
   is affected — the other 156 routes are untouched until redesigned.
   ══════════════════════════════════════════════════════════════ */

// Editorial layer + tokens are imported site-wide in app/layout.js (site chrome).
import Link from 'next/link';
import { PACKAGES, SITE, GLOBAL_FAQS } from '@/data/packages';
import { HOTELS, VEHICLES, VEHICLE_MATRIX, REVIEWS, ROUTE } from '@/data/experience';
import HeroSection from '@/components/HeroSection';
import Icon, { WhatsAppIcon } from '@/components/Icon';
import RouteMap from '@/components/lux/RouteMap';
import { HotelShowcase, VehicleShowcase, ReviewsWall, FaqList } from '@/components/lux/PackageSections';
import { Section, SectionHead, Reveal, Eyebrow, Pill, Rule } from '@/components/lux/primitives';

export const metadata = {
  title: { absolute: `Char Dham Yatra 2026 | Price Starts at ₹18,500 | Direct Operator, Zero Commission` },
  description: 'Char Dham Yatra 2026 from Haridwar. Trusted operator, 15+ yrs experience, customizable itinerary, fixed departures & instant confirmation. From ₹18,500.',
  keywords: ['char dham yatra 2026','char dham yatra haridwar','kedarnath yatra package','char dham yatra package from haridwar','do dham yatra','char dham helicopter package','shiv ganga travels haridwar'],
  openGraph: {
    title: 'Char Dham Yatra 2026 | Price Starts at ₹18,500',
    description: 'Yamunotri · Gangotri · Kedarnath · Badrinath. 15+ yrs trusted operator, zero commission, fixed departures. Direct since 2010.',
    url: 'https://www.shivgangatravels.com',
    siteName: 'Shiv Ganga Travels',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Temple — Char Dham Yatra 2026 with Shiv Ganga Travels Haridwar' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shiv Ganga Travels — Char Dham Yatra 2026',
    description: 'Zero commission Char Dham Yatra from Haridwar. Est. 2010.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra 2026 from Haridwar — Shiv Ganga Travels, Direct Operator since 2010' }],
  },
  alternates: { canonical: 'https://www.shivgangatravels.com' },
};

/* ─── Schemas (unchanged) ─── */
function Schema() {
  const charDhamProduct = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Char Dham Yatra Package 2026 from Haridwar',
    image: [`${SITE.baseUrl}/opengraph-image`],
    description: 'All-inclusive Char Dham Yatra package covering Yamunotri, Gangotri, Kedarnath and Badrinath. 9N/10D from Haridwar. Direct operator, no commission.',
    url: `${SITE.baseUrl}/char-dham-yatra`,
    brand: { '@type': 'Brand', name: 'Shiv Ganga Travels' },
    offers: {
      '@type': 'Offer',
      price: '18500',
      priceCurrency: 'INR',
      priceValidUntil: '2026-11-30',
      availability: 'https://schema.org/InStock',
      url: `${SITE.baseUrl}/char-dham-yatra`,
      seller: { '@type': 'Organization', name: SITE.name, '@id': `${SITE.baseUrl}/#organization` },
    },
    aggregateRating: { '@type':'AggregateRating', ratingValue: 4.7, reviewCount: 54, bestRating:5 },
  };

  const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity: GLOBAL_FAQS.map(f => ({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}})) };
  const webpage = {
    '@context':'https://schema.org','@type':'WebPage',
    '@id':`${SITE.baseUrl}/#webpage`,
    url:SITE.baseUrl,
    name:'Char Dham Yatra 2026 from Haridwar — Shiv Ganga Travels',
    inLanguage:'en-IN',
    isPartOf:{ '@id':`${SITE.baseUrl}/#website` },
    about:{ '@id':`${SITE.baseUrl}/#organization` },
    primaryImageOfPage:{ '@type':'ImageObject', url:`${SITE.baseUrl}/opengraph-image` },
    speakable:{ '@type':'SpeakableSpecification', cssSelector:['.speakable-answer'] },
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(charDhamProduct) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(webpage) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faqSchema) }}/></>);
}

/* ─── helpers ─── */
const wa = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
const tel = `tel:+${SITE.whatsapp}`;
const inr = (n) => `₹${Number(n).toLocaleString('en-IN')}`;

const charDham   = PACKAGES.filter(p => p.category === 'char-dham');
const doDham     = PACKAGES.filter(p => p.category === 'do-dham');
const singleDham = PACKAGES.filter(p => p.category === 'single-dham');

/* ─── homepage-scoped styling (kept out of the system files) ─── */
const HOME_CSS = `
  .lux-home { background: var(--paper); }
  .lux-wa { display:inline-flex; align-items:center; gap:9px; background:#25D366; color:#fff; padding:14px 26px; border-radius:1px; font-weight:600; font-size:0.75rem; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; transition:background .3s var(--ease-lux); }
  .lux-wa:hover { background:#1DA851; }
  .lux-wa--sm { padding:11px 20px; font-size:0.6875rem; }

  /* Intent cards */
  .lux-intent { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:1px; background:var(--rule); border:1px solid var(--rule); }
  @media (max-width:900px){ .lux-intent{ grid-template-columns:repeat(2,minmax(0,1fr));} }
  @media (max-width:560px){ .lux-intent{ grid-template-columns:1fr;} }
  .lux-intent__card { background:#fff; padding:34px 28px; display:flex; flex-direction:column; gap:16px; text-decoration:none; color:inherit; transition:background .4s var(--ease-lux), transform .4s var(--ease-lux), box-shadow .4s var(--ease-lux); position:relative; }
  .lux-intent__card:hover { background:var(--paper); transform:translateY(-3px); box-shadow:var(--ds-elev-2); }
  .lux-intent__card::after { content:''; position:absolute; left:0; top:0; bottom:0; width:2px; background:var(--gold); transform:scaleY(0); transform-origin:top; transition:transform .45s var(--ease-lux); }
  .lux-intent__card:hover::after { transform:scaleY(1); }
  .lux-intent__card .lux-link svg { transition:transform .45s var(--ease-lux); }
  .lux-intent__card:hover .lux-link svg { transform:translateX(3px); }
  .lux-intent__top { display:flex; align-items:center; justify-content:space-between; }
  .lux-intent__price { font-family:var(--font-display); font-size:1.5rem; color:var(--ink); letter-spacing:-0.02em; }

  /* Three-pillar band — replaces the old counter row (its figures already
     live in the hero trust strip). Glass panels on the warm paper-deep tone
     read as "transparent" rather than a solid block; the conic-gradient
     glow rotating behind each one is the "catches the eye" motion. */
  .lux-pillars { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:20px; }
  @media (max-width:820px){ .lux-pillars{ grid-template-columns:1fr; } }
  .lux-pillar {
    position:relative; overflow:hidden;
    padding:34px 28px; display:flex; flex-direction:column; gap:12px;
    transition:transform .5s var(--ease-lux), box-shadow .5s var(--ease-lux), border-color .5s var(--ease-lux);
  }
  .lux-pillar:hover { transform:translateY(-5px); box-shadow:var(--ds-elev-gold); border-color:var(--gold-hair); }
  .lux-pillar > * { position:relative; z-index:1; }
  .lux-pillar__glow {
    position:absolute; inset:-60%; z-index:0; opacity:0.16;
    background:conic-gradient(from 0deg, transparent 0 60%, var(--gold) 78%, transparent 92%);
    animation:pillarSpin 8s linear infinite;
  }
  .lux-pillar:nth-child(2) .lux-pillar__glow { animation-duration:10s; animation-direction:reverse; }
  .lux-pillar:nth-child(3) .lux-pillar__glow { animation-duration:7s; }
  @keyframes pillarSpin { to { transform:rotate(360deg); } }
  .lux-pillar__ico {
    width:52px; height:52px; border-radius:var(--ds-r-pill);
    display:grid; place-items:center; flex:none;
    background:var(--gold-wash); border:1px solid var(--gold-hair); color:var(--gold-dark);
    animation:pillarPulse 3.2s var(--ease-lux) infinite;
  }
  .lux-pillar:nth-child(2) .lux-pillar__ico { animation-delay:0.3s; }
  .lux-pillar:nth-child(3) .lux-pillar__ico { animation-delay:0.6s; }
  @keyframes pillarPulse {
    0%, 100% { box-shadow:0 0 0 0 rgba(232,146,10,0.28); }
    50%      { box-shadow:0 0 0 8px rgba(232,146,10,0); }
  }
  @media (prefers-reduced-motion: reduce) {
    .lux-pillar__glow { animation:none; opacity:0.08; }
    .lux-pillar__ico { animation:none; }
  }

  /* Destination cards */
  .lux-dest { position:relative; display:block; overflow:hidden; border-radius:var(--ds-r-2); text-decoration:none; }
  .lux-dest__cap { position:absolute; left:0; right:0; bottom:0; z-index:2; padding:24px; color:#fff; }
  .lux-dest__cap .lux-caption { color:rgba(255,255,255,0.72); }

  /* Package rail */
  .lux-home-rail { display:flex; gap:18px; overflow-x:auto; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch; scrollbar-width:none; padding:4px 0 8px; }
  .lux-home-rail::-webkit-scrollbar{ display:none; }
  .lux-pcard { scroll-snap-align:start; flex:0 0 300px; max-width:300px; display:flex; flex-direction:column; overflow:hidden; text-decoration:none; color:inherit; }
  @media (max-width:560px){ .lux-pcard{ flex-basis:82%; max-width:82%; } }
  .lux-pcard__badge { position:absolute; top:12px; left:12px; z-index:2; }
  .lux-pcard__body { padding:20px; display:flex; flex-direction:column; gap:10px; flex:1; }
  .lux-pcard__foot { margin-top:auto; padding-top:16px; border-top:1px solid var(--rule); display:flex; align-items:flex-end; justify-content:space-between; gap:12px; }
  .lux-pcard__price { font-family:var(--font-display); font-size:1.5rem; color:var(--ink); line-height:1; letter-spacing:-0.02em; display:block; margin:2px 0; }

  /* Feature / value grid */
  .lux-feat { display:flex; gap:14px; align-items:flex-start; }
  .lux-feat__i { flex:none; width:44px; height:44px; display:grid; place-items:center; border-radius:var(--ds-r-pill); background:var(--gold-wash); border:1px solid var(--gold-hair); color:var(--gold-dark); }
  .lux-section--ink .lux-feat__i, .lux-section--navy .lux-feat__i { background:rgba(232,146,10,0.14); border-color:rgba(232,146,10,0.3); color:#F4B860; }

  /* Route pill list (cab routes) */
  .lux-route-row { display:grid; grid-template-columns:1fr auto; gap:14px; align-items:center; padding:16px 0; border-bottom:1px solid var(--rule); text-decoration:none; color:inherit; transition:padding-left .35s var(--ease-lux); }
  .lux-route-row:hover { padding-left:8px; }
  .lux-section--ink .lux-route-row, .lux-section--navy .lux-route-row { border-bottom-color:var(--rule-light-soft); }

  /* Journey steps */
  .lux-steps { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:1px; background:var(--rule); border:1px solid var(--rule); }
  @media (max-width:820px){ .lux-steps{ grid-template-columns:repeat(2,minmax(0,1fr));} }
  @media (max-width:480px){ .lux-steps{ grid-template-columns:1fr;} }
  .lux-step { background:#fff; padding:36px 28px; transition:background .4s var(--ease-lux); }
  .lux-step:hover { background:var(--paper); }
  .lux-step__n { font-family:var(--font-display); font-size:2.4rem; color:var(--gold); line-height:1; letter-spacing:-0.03em; }

  /* Funnel columns */
  .lux-funnel-link { display:flex; justify-content:space-between; align-items:center; gap:12px; padding:12px 14px; border:1px solid var(--rule); border-radius:var(--ds-r-2); text-decoration:none; color:var(--ink); font-size:0.875rem; transition:border-color .35s var(--ease-lux), background .35s var(--ease-lux); }
  .lux-funnel-link:hover { border-color:var(--gold-hair); background:var(--gold-wash); }
  .lux-funnel-link svg { transition:transform .35s var(--ease-lux); }
  .lux-funnel-link:hover svg { transform:translateX(3px); }
  .lux-section--ink .lux-funnel-link, .lux-section--navy .lux-funnel-link { border-color:var(--rule-light-soft); color:#fff; }

  .lux-inline-links a { color:var(--teal-dark); font-weight:500; text-decoration:none; }
  .lux-inline-links a:hover { color:var(--gold-dark); }

  .lux-news { display:flex; gap:10px; max-width:420px; margin:0 auto; flex-wrap:wrap; }
  .lux-news input { flex:1; min-width:200px; }
`;

/* ─── luxury package card ─── */
function LuxPkgCard({ pkg }) {
  const n = pkg.duration?.nights, d = pkg.duration?.days;
  return (
    <Link href={`/packages/${pkg.slug}`} className="lux-card lux-lift lux-pcard" data-lux-reveal="" data-cursor="View">
      <div className="lux-frame lux-frame--3x2 lux-frame--zoom" style={{ position: 'relative' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={pkg.photo} alt={pkg.name} loading="lazy" decoding="async" width={560} height={373} />
        {pkg.badge && <span className="lux-pill lux-pill--solid lux-pcard__badge">{pkg.badge}</span>}
      </div>
      <div className="lux-pcard__body">
        <Eyebrow plain>{n}N · {d}D · {pkg.startCity}</Eyebrow>
        <h3 className="lux-display lux-display--sm">{pkg.name}</h3>
        {pkg.subtitle && <p className="lux-caption">{pkg.subtitle}</p>}
        <div className="lux-pcard__foot">
          <div>
            <span className="lux-caption">From</span>
            <span className="lux-pcard__price">{inr(pkg.price.discounted)}</span>
            <span className="lux-caption">per person · all-inclusive</span>
          </div>
          <span className="lux-link" style={{ borderBottom: 0, paddingBottom: 0 }} aria-hidden="true">
            View <Icon name="arrowRight" size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ─── data for editorial-only sections (content preserved from the old page) ─── */
const INTENTS = [
  { icon:'temple', title:'Char Dham Yatra', desc:'All four sacred dhams — Yamunotri, Gangotri, Kedarnath, Badrinath.', tag:'Most chosen', from:'₹18,500', href:'/char-dham-yatra' },
  { icon:'mountain', title:'Kedarnath Yatra', desc:'Three nights, four days — Lord Shiva’s abode at 3,583 m.', tag:'Shortest trip', from:'₹6,999', href:'/kedarnath-yatra' },
  { icon:'helicopter', title:'Helicopter Package', desc:'All four dhams in six days — for seniors and VIP darshan.', tag:'Premium', from:'₹85,000', href:'/char-dham-helicopter' },
  { icon:'car', title:'Just the Cab', desc:'Vehicle only — Innova, Ertiga or Tempo from Haridwar.', tag:'Cab only', from:'₹5,500', href:'/char-dham-yatra-cab-booking' },
];

const PILLARS = [
  { icon:'handshake', t:'Direct Operator', d:'You book with the people who run your yatra — no reseller in between, no reseller markup either.' },
  { icon:'receipt',   t:'Zero Commission', d:'The price you see is the price we charge. No agent cut quietly folded into the quote.' },
  { icon:'compass',   t:'Local Handling',  d:'Haridwar-based, on the ground every season — hotels, drivers and guides we know personally.' },
];

const DESTINATIONS = [
  { name:'Yamunotri', deity:'Goddess Yamuna', alt:'3,291 m', href:'/packages/yamunotri-yatra-package-2n-3d-haridwar', photo:'https://images.pexels.com/photos/19271393/pexels-photo-19271393.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop', alt2:'Yamunotri Dham, first shrine of the Char Dham Yatra' },
  { name:'Gangotri', deity:'Mother Ganga', alt:'3,415 m', href:'/packages/gangotri-yatra-package-2n-3d-haridwar', photo:'https://images.pexels.com/photos/15017640/pexels-photo-15017640.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop', alt2:'Gangotri Dham on the Bhagirathi, source of the Ganga' },
  { name:'Kedarnath', deity:'Lord Shiva', alt:'3,583 m', href:'/packages/kedarnath-yatra-package-3n-4d-haridwar', photo:'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop', alt2:'Kedarnath temple against the Himalayan peaks' },
  { name:'Badrinath', deity:'Lord Vishnu', alt:'3,133 m', href:'/packages/badrinath-yatra-package-2n-3d-haridwar', photo:'https://images.pexels.com/photos/16786632/pexels-photo-16786632.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop', alt2:'Badrinath temple with Neelkanth peak behind' },
];

const COST_LINES = [
  { icon:'car',      t:'Vehicle, fuel & driver',   d:'AC vehicle for the full circuit, hill-seasoned driver, fuel, tolls and driver allowance.' },
  { icon:'calendar', t:'Hotels — every night',     d:'Named hotels near the temples, confirmed before you pay. No “similar category” surprises.' },
  { icon:'meal',     t:'Meals & sattvic kitchen',  d:'Breakfast and dinner throughout — pure veg, Jain on request.' },
  { icon:'clipboard',t:'Permits & registration',   d:'Biometric yatra registration, green tax and parking — itemised, not sprung on you later.' },
  { icon:'users',    t:'Guide & on-road support',  d:'Garhwali guides and a 24/7 support line for every day you are in the hills.' },
  { icon:'receipt',  t:'Our margin — on the sheet',d:'Our operator margin appears as its own line. You see exactly what we earn.' },
];

const INCLUDES = [
  {icon:'ticket',   t:'VIP Darshan',      d:'Skip-the-line arrangements at all four dhams.'},
  {icon:'compass',  t:'Garhwali Guides',  d:'Local guides with ten-plus years on these routes.'},
  {icon:'medical',  t:'Medical Support',  d:'Oxygen cylinders and first aid in every vehicle.'},
  {icon:'receipt',  t:'One Clear Price',  d:'Line-by-line quote — green tax and parking included.'},
  {icon:'meal',     t:'Sattvic Meals',    d:'Pure veg throughout; Jain meals on request.'},
  {icon:'headset',  t:'24/7 Support',     d:'A person, not a bot — WhatsApp and phone.'},
];

const CAB_ROUTES = [
  { from:'Haridwar', to:'Kedarnath', dist:'225 km', time:'6–7 hrs', fare:'from ₹3,500', href:'/haridwar-to-kedarnath-cab' },
  { from:'Haridwar', to:'Badrinath', dist:'320 km', time:'8–9 hrs', fare:'from ₹4,500', href:'/haridwar-to-badrinath-cab' },
  { from:'Haridwar', to:'Gangotri',  dist:'265 km', time:'7–8 hrs', fare:'from ₹4,000', href:'/haridwar-to-gangotri-cab' },
  { from:'Delhi',    to:'Haridwar',  dist:'210 km', time:'4–5 hrs', fare:'from ₹2,800', href:'/delhi-to-haridwar-cab' },
];

const STEPS = [
  {n:'01', t:'Enquire',   d:'Call or WhatsApp us. Tell us your dates and group size.'},
  {n:'02', t:'Customise', d:'Review the itinerary. We adjust it to your preferences.'},
  {n:'03', t:'Confirm',   d:'Pay 25% advance. Receive your kit and registration.'},
  {n:'04', t:'Depart',    d:'Pickup at Haridwar, and you are on the road.'},
];

const FOUNDER_POINTS = [
  { icon:'medal',       t:'Military discipline',    d:'Punctuality, safety protocols and accountability on every trip.' },
  { icon:'shield',      t:'Safety as a practice',   d:'Hill-trained drivers, oxygen on board, and a vehicle check before every departure.' },
  { icon:'receipt',     t:'Full cost transparency', d:'Every package includes a line-by-line cost breakdown before you book.' },
];

const TOOLS = [
  { icon:'calculator', title:'Yatra Cost Calculator', desc:'Instant personalised estimate for your group size and route.', href:'/char-dham-yatra-cost-calculator' },
  { icon:'map',        title:'Route Map 2026',        desc:'All distances, altitudes and stops from Haridwar.',            href:'/char-dham-yatra-route-map' },
  { icon:'calendar',   title:'Best Time to Visit',    desc:'Month-by-month weather across all four dhams.',               href:'/blog/best-time-char-dham' },
  { icon:'clipboard',  title:'Registration Guide',    desc:'Biometric yatra registration, step by step.',                 href:'/blog/char-dham-yatra-registration' },
  { icon:'megaphone',  title:'2026 New Rules',        desc:'Phone ban, age 55+ certificate, IRCTC helicopter.',           href:'/blog/char-dham-yatra-2026-new-rules' },
  { icon:'backpack',   title:'Packing List',          desc:'Exactly what to carry — and what to leave behind.',           href:'/blog/char-dham-yatra-packing-list' },
];

const CITY_LINKS = [
  ['Delhi','/char-dham-yatra-from-delhi'],['Mumbai','/char-dham-yatra-from-mumbai'],['Bangalore','/char-dham-yatra-from-bangalore'],
  ['Hyderabad','/char-dham-yatra-from-hyderabad'],['Chennai','/char-dham-yatra-from-chennai'],['Pune','/char-dham-yatra-from-pune'],
  ['Noida','/char-dham-yatra-from-noida'],['Chandigarh','/char-dham-yatra-from-chandigarh'],['Kolkata','/char-dham-yatra-from-kolkata'],
];
const GUIDE_LINKS = [
  ['Kedarnath Temple','/kedarnath-temple'],['Badrinath Temple','/badrinath-temple'],['Online Puja Booking','/online-puja-booking'],
  ['Kedarnath Weather','/kedarnath-weather'],['Emergency Contacts','/char-dham-yatra-emergency-contacts'],['All Blog Posts','/blog'],
];

const FUNNEL = [
  { n:'1', head:'Learn & Plan', body:'New to Char Dham Yatra? Understand the route, best time, costs and what to expect before booking.',
    links:[['Complete Yatra Guide','/char-dham-yatra'],['Best Time to Visit','/blog/best-time-char-dham'],['What Does It Cost?','/blog/char-dham-yatra-cost'],['What to Pack','/blog/char-dham-yatra-packing-list']] },
  { n:'2', head:'Choose Your Yatra', body:'Browse by dham type, duration or budget. A full day-wise itinerary sits on every package page.',
    links:[['Char Dham (All 4)','/packages/char-dham'],['Do Dham (2 shrines)','/do-dham-yatra'],['Kedarnath Only','/kedarnath-yatra'],['Helicopter Package','/char-dham-helicopter']] },
];

export default function HomePage() {
  return (
    <div className="lux-home lux-noscroll-x">
      <Schema />
      <style dangerouslySetInnerHTML={{ __html: HOME_CSS }} />
      {/* Motion runtime, scroll-progress rail and page-entry curtain are
          mounted once, site-wide, in app/layout.js. */}

      {/* ── Cinematic hero (preserved: LCP, speakable, animated bg) ── */}
      <HeroSection />

      {/* ═══ 1 · INTENT SELECTOR ═══ */}
      <Section tone="paper" tight>
        <SectionHead eyebrow="Start here" title="What are you looking for?" size="lg"
          lede="Four ways to travel the Himalaya. Choose the one that fits your time and your pace — each opens to a full itinerary and honest pricing." />
        <div className="lux-intent" data-lux-reveal="">
          {INTENTS.map((c) => (
            <Link key={c.href} href={c.href} className="lux-intent__card" data-cursor="Explore">
              <div className="lux-intent__top">
                <span className="lux-ico-chip"><Icon name={c.icon} size={20} /></span>
                <Pill tone="gold">{c.tag}</Pill>
              </div>
              <h3 className="lux-display lux-display--sm">{c.title}</h3>
              <p className="lux-body" style={{ fontSize: '0.9rem', margin: 0 }}>{c.desc}</p>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, paddingTop: 8 }}>
                <span><span className="lux-caption">From</span><br /><span className="lux-intent__price">{c.from}</span></span>
                <span className="lux-link" style={{ borderBottom: 0, paddingBottom: 0 }} aria-hidden="true">Explore <Icon name="arrowRight" size={13} /></span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ═══ 2 · WHY BOOK DIRECT — three pillars (figures already live in the hero) ═══ */}
      <Section tone="paper-deep" tight>
        <div className="lux-pillars" data-lux-stagger="">
          {PILLARS.map((p) => (
            <div key={p.t} className="lux-pillar lux-glass">
              <span className="lux-pillar__glow" aria-hidden="true" />
              <span className="lux-pillar__ico"><Icon name={p.icon} size={22} /></span>
              <h3 className="lux-display lux-display--sm">{p.t}</h3>
              <p className="lux-body" style={{ fontSize: '0.875rem', margin: 0 }}>{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ 3 · IMMERSIVE DESTINATIONS — The Sacred Four ═══ */}
      <Section tone="paper">
        <SectionHead eyebrow="The Sacred Four" title="One circuit, four thresholds"
          lede="Four shrines strung across the Garhwal Himalaya — a journey Hindus make once in a lifetime. Each is a world of its own." />
        <div className="lux-grid lux-grid--4" data-lux-stagger="">
          {DESTINATIONS.map((dn) => (
            <Link key={dn.name} href={dn.href} className="lux-dest lux-scrim lux-zoom-host" data-cursor="View">
              <div className="lux-frame lux-frame--4x5 lux-frame--zoom">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={dn.photo} alt={dn.alt2} loading="lazy" decoding="async" width={800} height={1000} data-lux-parallax="0.06" />
              </div>
              <div className="lux-dest__cap">
                <span className="lux-caption">{dn.alt}</span>
                <h3 className="lux-display lux-display--sm" style={{ color: '#fff', marginTop: 4 }}>{dn.name}</h3>
                <span className="lux-caption">{dn.deity}</span>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <p className="lux-caption" style={{ maxWidth: '48ch' }}>Short on time? The helicopter circuit covers all four in six days, with VIP darshan at each.</p>
          <Link href="/packages/char-dham-yatra-helicopter-5n-6d-dehradun" className="lux-link">
            Char Dham by helicopter <Icon name="arrowRight" size={14} />
          </Link>
        </div>
      </Section>

      {/* ═══ 4 · INTERACTIVE ROUTE MAP ═══ */}
      <Section tone="paper-deep">
        <SectionHead eyebrow="The route" title="Haridwar to the four dhams, and back"
          lede="Roughly eleven hundred kilometres, clockwise through the Garhwal. Scroll to trace the line — and see what the body is actually asked to climb." />
        <div className="lux-map-stacked">
          <RouteMap nodes={ROUTE.nodes} category="char-dham" title="The Char Dham circuit" />
        </div>
      </Section>

      {/* ═══ 5 · LUXURY PACKAGE RAILS ═══ */}
      <Section tone="paper">
        <SectionHead eyebrow="Most popular" title="Char Dham Yatra packages"
          lede="All four dhams in one journey — from five days to fifteen."
          aside={<Link href="/packages/char-dham" className="lux-link">View all <Icon name="arrowRight" size={14} /></Link>} />
        <div className="lux-home-rail">{charDham.map((p) => <LuxPkgCard key={p.slug} pkg={p} />)}</div>
      </Section>

      <Section tone="paper" tight>
        <SectionHead eyebrow="Two dhams · one journey" title="Do Dham Yatra packages"
          lede="When time is limited but devotion is full."
          aside={<Link href="/packages/do-dham" className="lux-link">View all <Icon name="arrowRight" size={14} /></Link>} />
        <div className="lux-home-rail">{doDham.map((p) => <LuxPkgCard key={p.slug} pkg={p} />)}</div>
      </Section>

      <Section tone="paper" tight>
        <SectionHead eyebrow="Focused · affordable" title="Single Dham packages"
          lede="One sacred shrine. Deeply meaningful. From ₹5,299."
          aside={<Link href="/packages/single-dham" className="lux-link">View all <Icon name="arrowRight" size={14} /></Link>} />
        <div className="lux-home-rail">{singleDham.map((p) => <LuxPkgCard key={p.slug} pkg={p} />)}</div>
      </Section>

      {/* ═══ 6 · COST TRANSPARENCY ═══ */}
      <Section tone="navy">
        <SectionHead eyebrow="Full cost transparency" title="Where your ₹18,500 goes" light
          lede="You book with the operator, so there is no commission layer to hide. Every quote we send is itemised line by line — this is what it covers." />
        <div className="lux-grid lux-grid--3" data-lux-stagger="">
          {COST_LINES.map((r) => (
            <div key={r.t} className="lux-feat lux-card lux-card--dark" style={{ padding: 22 }}>
              <span className="lux-feat__i"><Icon name={r.icon} size={19} /></span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff', marginBottom: 5 }}>{r.t}</div>
                <p className="lux-body" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: 0 }}>{r.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <a href={wa('Namaste! Please send me the full line-by-line price breakdown for Char Dham Yatra 2026.')} target="_blank" rel="nofollow noopener noreferrer" className="lux-wa" data-magnetic data-cursor="Chat">
            <WhatsAppIcon size={16} /> Get my full price breakdown
          </a>
          <p className="lux-caption" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '18px auto 0' }}>
            Booking direct with an operator typically avoids the 10–20% that commission channels add. Compare any quote line by line — we will walk you through ours.
          </p>
        </div>
      </Section>

      {/* ═══ 7 · VEHICLE SHOWCASE + cab routes ═══ */}
      <Section tone="paper">
        <SectionHead eyebrow="The fleet" title="The vehicle you travel in"
          lede="Hill-seasoned drivers, fixed rates including fuel, driver and tolls. Available standalone or as part of any package." />
        <Reveal><VehicleShowcase vehicles={VEHICLES} matrix={VEHICLE_MATRIX} /></Reveal>

        <Rule tone="gold" style={{ margin: '56px 0 0' }} />
        <div className="lux-grid lux-grid--2" style={{ marginTop: 40, alignItems: 'start' }}>
          <div>
            <Eyebrow>Popular routes</Eyebrow>
            <h3 className="lux-display lux-display--md" style={{ marginTop: 14 }}>Book just the cab</h3>
            <p className="lux-body" style={{ marginTop: 12 }}>
              Haridwar–Kedarnath–Badrinath–Gangotri–Yamunotri and back. Full-circuit prices — fuel, driver and tolls included; green tax and parking itemised in your quote.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href={wa('Namaste! I want to book a cab for Char Dham Yatra 2026. Please share rates.')} target="_blank" rel="nofollow noopener noreferrer" className="lux-wa lux-wa--sm">
                <WhatsAppIcon size={15} /> Book cab on WhatsApp
              </a>
              <Link href="/cabs" className="lux-link">All vehicles <Icon name="arrowRight" size={14} /></Link>
            </div>
          </div>
          <div>
            {CAB_ROUTES.map((r) => (
              <Link key={r.href} href={r.href} className="lux-route-row">
                <span>
                  <span style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '0.95rem' }}>{r.from} → {r.to}</span>
                  <span className="lux-caption" style={{ display: 'block', marginTop: 3 }}>{r.dist} · {r.time}</span>
                </span>
                <span style={{ textAlign: 'right' }}>
                  <span style={{ fontWeight: 600, color: 'var(--gold-dark)', fontSize: '0.9rem' }}>{r.fare}</span>
                  <span className="lux-caption" style={{ display: 'block', marginTop: 3 }}>Innova one-way</span>
                </span>
              </Link>
            ))}
            <Link href="/char-dham-yatra-cab-booking" className="lux-link" style={{ marginTop: 20 }}>
              All cab options + group rates <Icon name="arrowRight" size={14} />
            </Link>
          </div>
        </div>
      </Section>

      {/* ═══ 8 · HOTEL SHOWCASE ═══ */}
      <Section tone="paper-deep">
        <SectionHead eyebrow="Where you sleep" title="The hotels, named before you pay"
          lede="Confirmed hotels near each temple — and honest about what a bed at 3,583 m actually is. No “similar category” surprises." />
        <Reveal><HotelShowcase hotels={HOTELS} /></Reveal>
      </Section>

      {/* ═══ 9 · WHAT EVERY YATRA INCLUDES ═══ */}
      <Section tone="paper">
        <div className="lux-grid lux-grid--2" style={{ alignItems: 'center', gap: 'clamp(32px,5vw,72px)' }}>
          <div>
            <SectionHead eyebrow="What sets us apart" title="What every yatra with us includes"
              lede="Fifteen years of running the same circuit teaches you what actually matters at 3,500 metres. These aren’t add-ons — they’re standard." />
            <div className="lux-grid lux-grid--2" data-lux-stagger="">
              {INCLUDES.map((w) => (
                <div key={w.t} className="lux-feat">
                  <span className="lux-feat__i"><Icon name={w.icon} size={18} /></span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--ink)' }}>{w.t}</div>
                    <p className="lux-body" style={{ fontSize: '0.82rem', marginTop: 3 }}>{w.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 30 }}>
              <Link href="/packages" className="lux-btn lux-btn--ink">See the 2026 packages</Link>
            </div>
          </div>
          <Reveal variant="right">
            <div className="lux-frame lux-frame--4x5 lux-scrim lux-zoom-host">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=900&h=1125&fit=crop" alt="Kedarnath at 3,583 m — the final darshan of the circuit" loading="lazy" decoding="async" width={900} height={1125} data-lux-parallax="0.08" />
              <div className="lux-dest__cap">
                <h3 className="lux-display lux-display--sm" style={{ color: '#fff' }}>Kedarnath, 3,583 m</h3>
                <span className="lux-caption">The final darshan of the circuit — and the reason every checklist exists.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ═══ 10 · FOUNDER STORY ═══ */}
      <Section tone="paper-deep">
        <div className="lux-grid lux-grid--2" style={{ alignItems: 'start', gap: 'clamp(32px,5vw,72px)' }}>
          <div>
            <SectionHead eyebrow="The people behind your yatra" title="Founded by a retired Army officer" />
            <div className="lux-body" style={{ display: 'grid', gap: 16 }}>
              <p style={{ margin: 0 }}>In 2010, Dhanesh Chandra Mishra — a retired officer of the Indian Army — started Shiv Ganga Travels with a single vehicle and one conviction: that pilgrims deserved the same care and discipline the Army demands of every mission.</p>
              <p style={{ margin: 0 }}>He’d seen what happened when families entrusted their sacred journey to operators who prioritised profit over safety. Overloaded vehicles. Substandard hotels. Missing guides. Stranded pilgrims at 3,500 metres. He decided to do it differently.</p>
              <p style={{ margin: 0 }}>Fifteen years later, Shiv Ganga Travels has carried over 50,000 pilgrims across every season. Every vehicle is maintained to Army safety standards. Every driver is trained for high-altitude emergencies. Every rupee is accounted for before you pay.</p>
            </div>
            <div style={{ display: 'grid', gap: 10, margin: '26px 0' }} data-lux-stagger="">
              {FOUNDER_POINTS.map((f) => (
                <div key={f.t} className="lux-feat lux-card" style={{ padding: 16 }}>
                  <span className="lux-feat__i"><Icon name={f.icon} size={17} /></span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--ink)' }}>{f.t}</div>
                    <p className="lux-body" style={{ fontSize: '0.82rem', marginTop: 2 }}>{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="lux-link">Read our full story <Icon name="arrowRight" size={14} /></Link>
          </div>
          <Reveal variant="right">
            <div className="lux-card lux-card--dark" style={{ background: 'var(--ink)', padding: 'clamp(24px,3vw,34px)' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--gold)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--ink)', marginBottom: 16 }}>DM</div>
              <div className="lux-display lux-display--sm" style={{ color: '#fff' }}>Dhanesh Chandra Mishra</div>
              <div className="lux-caption" style={{ marginTop: 4 }}>Founder &amp; Director · Retired Indian Army Officer</div>
              <blockquote className="lux-mark" style={{ margin: '22px 0 0', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                “Every pilgrim who boards one of our vehicles carries faith, family, and often a lifelong dream. I treat that responsibility the same way I treated my duty in the Army — with total commitment and zero compromise.”
              </blockquote>
              <div className="lux-grid lux-grid--2" style={{ marginTop: 26, gap: 12 }}>
                {[['Est. 2010', '15 years running'], ['20+ Vehicles', 'Fleet owned outright']].map(([v, l]) => (
                  <div key={l} style={{ borderTop: '1px solid var(--rule-light-soft)', paddingTop: 12 }}>
                    <div className="lux-figure" style={{ fontSize: '1.6rem', color: '#fff' }}>{v}</div>
                    <div className="lux-caption" style={{ marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ═══ 11 · JOURNEY TIMELINE ═══ */}
      <Section tone="paper">
        <SectionHead eyebrow="Simple &amp; clear" title="Booking takes four steps"
          lede="Only a 25% advance confirms your seats — the balance is due after you arrive in Haridwar." />
        <div className="lux-steps" data-lux-stagger="">
          {STEPS.map((s) => (
            <div key={s.n} className="lux-step">
              <div className="lux-step__n">{s.n}</div>
              <h3 className="lux-display lux-display--sm" style={{ marginTop: 14 }}>{s.t}</h3>
              <p className="lux-body" style={{ fontSize: '0.85rem', marginTop: 8 }}>{s.d}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <a href={wa('Namaste! I want to start planning Char Dham Yatra 2026.')} target="_blank" rel="nofollow noopener noreferrer" className="lux-wa">
            <WhatsAppIcon size={15} /> Start step one on WhatsApp
          </a>
        </div>
      </Section>

      {/* ═══ 12 · PREMIUM TESTIMONIALS ═══ */}
      <Section tone="paper-deep">
        <SectionHead eyebrow="Real stories" title="What our pilgrims say"
          lede="Verified reviews from pilgrims who trusted us with their sacred journey."
          aside={<a href={REVIEWS.url} target="_blank" rel="nofollow noopener noreferrer" className="lux-link">All {REVIEWS.count} on Google <Icon name="external" size={13} /></a>} />
        <Reveal><ReviewsWall reviews={REVIEWS} /></Reveal>
      </Section>

      {/* ═══ 13 · CONTENT FUNNEL ═══ */}
      <Section tone="paper">
        <SectionHead eyebrow="Plan your perfect yatra" title="Not sure where to start? We’ll guide you" />
        <div className="lux-grid lux-grid--3" data-lux-stagger="">
          {FUNNEL.map((col) => (
            <div key={col.n} className="lux-card" style={{ padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <span className="lux-figure" style={{ fontSize: '1.8rem', color: 'var(--gold)' }}>{col.n}</span>
                <span className="lux-display lux-display--sm">{col.head}</span>
              </div>
              <p className="lux-body" style={{ fontSize: '0.88rem', marginBottom: 16 }}>{col.body}</p>
              <div style={{ display: 'grid', gap: 8 }}>
                {col.links.map(([label, href]) => (
                  <Link key={href} href={href} className="lux-funnel-link">
                    <span>{label}</span><Icon name="arrowRight" size={13} />
                  </Link>
                ))}
              </div>
            </div>
          ))}
          {/* Book with confidence */}
          <div className="lux-card lux-card--dark" style={{ background: 'var(--ink)', padding: 24, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <span className="lux-figure" style={{ fontSize: '1.8rem', color: 'var(--gold)' }}>3</span>
              <span className="lux-display lux-display--sm" style={{ color: '#fff' }}>Book with confidence</span>
            </div>
            <p className="lux-body" style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.88rem', marginBottom: 20 }}>
              Zero commission. Free itinerary in two hours. 50,000+ pilgrims trusted us since 2010.
            </p>
            <div style={{ display: 'grid', gap: 10, marginTop: 'auto' }}>
              <a href={wa('Namaste! I want to plan Char Dham Yatra 2026.')} target="_blank" rel="nofollow noopener noreferrer" className="lux-wa lux-wa--sm" style={{ justifyContent: 'center' }}>
                <WhatsAppIcon size={14} /> Start on WhatsApp
              </a>
              <a href={tel} className="lux-btn lux-btn--ghost-light lux-btn--sm lux-btn--wide">
                <Icon name="phone" size={13} /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ 14 · PLAN TOOLS + LINK MESH ═══ */}
      <Section tone="paper-deep">
        <SectionHead eyebrow="Free planning tools" title="Plan your yatra properly"
          lede="The guides and tools pilgrims use most, before they ever call us." />
        <div className="lux-grid lux-grid--3" data-lux-stagger="">
          {TOOLS.map((l) => (
            <Link key={l.href} href={l.href} className="lux-card lux-lift" style={{ padding: 20, display: 'flex', gap: 14, alignItems: 'flex-start', textDecoration: 'none', color: 'inherit' }}>
              <span className="lux-ico-chip"><Icon name={l.icon} size={18} /></span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--ink)', marginBottom: 4 }}>{l.title}</div>
                <p className="lux-body" style={{ fontSize: '0.82rem', margin: 0 }}>{l.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="lux-inline-links" style={{ marginTop: 34, paddingTop: 26, borderTop: '1px solid var(--rule)', display: 'grid', gap: 14 }}>
          <p className="lux-body" style={{ fontSize: '0.9rem', margin: 0 }}>
            <strong style={{ color: 'var(--ink)' }}>Starting from your city:</strong>{' '}
            {CITY_LINKS.map(([c, h], i) => (
              <span key={h}><Link href={h}>{c}</Link>{i < CITY_LINKS.length - 1 ? ' · ' : ''}</span>
            ))}
          </p>
          <p className="lux-body" style={{ fontSize: '0.9rem', margin: 0 }}>
            <strong style={{ color: 'var(--ink)' }}>Temple guides &amp; more:</strong>{' '}
            {GUIDE_LINKS.map(([c, h], i) => (
              <span key={h}><Link href={h}>{c}</Link>{i < GUIDE_LINKS.length - 1 ? ' · ' : ''}</span>
            ))}
          </p>
        </div>
      </Section>

      {/* ═══ 15 · FAQ ═══ */}
      <Section tone="paper" wrapWidth="narrow">
        <SectionHead eyebrow="Have questions?" title="Everything you need to know"
          lede="Before booking your yatra — answered clearly." />
        <FaqList faqs={GLOBAL_FAQS} />
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href={wa('Namaste! I have a question about Char Dham Yatra.')} target="_blank" rel="nofollow noopener noreferrer" className="lux-btn lux-btn--ghost">
            <WhatsAppIcon size={14} /> Still have questions? Ask on WhatsApp
          </a>
        </div>
      </Section>

      {/* ═══ 16 · FINAL CTA ═══ */}
      <Section tone="ink">
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <Reveal variant="fade"><Pill tone="gold">Season 2026 · Apr 19 – Nov 13</Pill></Reveal>
          <Reveal>
            <h2 className="lux-display lux-display--lg" style={{ color: '#fff', margin: '22px 0 16px' }}>
              Plan your 2026 yatra <span className="lux-accent">with the operator</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.74)', margin: '0 auto' }}>
              Talk to the team that will actually run your journey. Free itinerary within two hours — and only a 25% advance to confirm your dates.
            </p>
          </Reveal>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', margin: '34px 0 44px' }}>
            <a href={wa('Namaste! I want to book Char Dham Yatra 2026.')} target="_blank" rel="nofollow noopener noreferrer" className="lux-wa" data-magnetic data-cursor="Chat">
              <WhatsAppIcon size={16} /> WhatsApp us now
            </a>
            <a href={tel} className="lux-btn lux-btn--ghost-light" data-magnetic>
              <Icon name="phone" size={15} /> {SITE.phone}
            </a>
          </div>
          <div style={{ borderTop: '1px solid var(--rule-light-soft)', paddingTop: 32, maxWidth: 480, margin: '0 auto' }}>
            <p style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, marginBottom: 6 }}>Not booking yet? Plan ahead by email.</p>
            <p className="lux-caption" style={{ color: 'rgba(255,255,255,0.55)', marginBottom: 14 }}>
              Season dates, month-by-month weather, cost guidance and preparation checklists — a few emails a season, nothing more.
            </p>
            <form action={`https://wa.me/${SITE.whatsapp}`} target="_blank" className="lux-news">
              <input type="email" placeholder="your@email.com" className="lux-input" required aria-label="Email address" />
              <button type="submit" className="lux-btn lux-btn--gold" style={{ flexShrink: 0 }}>Send me the guide</button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
