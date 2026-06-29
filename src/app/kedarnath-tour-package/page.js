import Link from 'next/link';
import { SITE, TRUST } from '@/data/packages';
import AnswerBox from '@/components/AnswerBox';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';

export const metadata = {
  title: 'Kedarnath Tour Package 2026 — 3N/4D from ₹6,999 | Ex-Haridwar',
  description:
    'Kedarnath tour package 2026 from Haridwar — 3N/4D from ₹6,999/person. Real day-by-day itinerary, honest cost breakdown, pony & helicopter rates, 2026 registration. 4.6★ (38 reviews). ₹0 to enquire.',
  keywords: [
    'kedarnath tour package', 'kedarnath yatra package', 'kedarnath tour package 2026',
    'kedarnath package from haridwar', 'kedarnath trip cost', 'kedarnath tour package price',
    'kedarnath 3n 4d itinerary', 'kedarnath yatra package from haridwar', 'kedarnath dham yatra package',
  ],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-tour-package` },
  openGraph: {
    title: 'Kedarnath Tour Package 2026 — 3N/4D from ₹6,999 (Ex-Haridwar)',
    description:
      'Real itinerary, honest costs, pony & helicopter rates, and 2026 registration help. Direct Haridwar operator since 2010 · 4.6★ from 38 reviews.',
    url: `${SITE.baseUrl}/kedarnath-tour-package`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Tour Package 2026 from Haridwar — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath Tour Package 2026 — from ₹6,999 | Direct Operator',
    description: 'Kedarnath 3N/4D from Haridwar. Real itinerary, honest cost breakdown, pony/heli rates. ₹0 to enquire.',
    images: [{ url: '/opengraph-image', alt: 'Kedarnath Tour Package 2026 from Haridwar' }],
  },
};

const URL = `${SITE.baseUrl}/kedarnath-tour-package`;

// ── Pricing tiers (final price depends on group size, hotel category & season — quote is free) ──
const TIERS = [
  { name: 'Group / Shared', stay: 'Camps & guesthouses', vehicle: 'Tempo Traveller (shared)', price: '₹6,999', note: 'Best value · fixed-group departures' },
  { name: 'Deluxe', stay: '3★ hotels at Guptkashi', vehicle: 'Innova / Ertiga', price: '₹9,999', note: 'Private cab · most-booked family option' },
  { name: 'Private / Premium', stay: 'Premium hotels + Kedarnath night stay', vehicle: 'Innova Crysta (private)', price: '₹13,500', note: 'Fully customised · pace of your choosing' },
];

const ITINERARY = [
  { day: 1, title: 'Haridwar → Guptkashi (210 km · 7–8 hrs)', body: 'Pickup from Haridwar around 5:30 AM. The road climbs through Rishikesh, then Devprayag — where the Bhagirathi and Alaknanda meet to become the Ganga (a good photo and tea stop). On through Srinagar and Rudraprayag to Guptkashi at 1,319 m. Check in, rest, and if there is daylight left, walk up to the Vishwanath and Ardhanarishwar temples in town. Dinner and overnight at Guptkashi.' },
  { day: 2, title: 'Guptkashi → Gaurikund → Kedarnath trek (16 km)', body: 'The big day starts early — 3:30 AM. Drive to Sonprayag, switch to the government shuttle jeep to Gaurikund (the last 5 km the law makes you take a shuttle, ₹50 fixed). A dip in the Gaurikund hot spring, then the 16 km climb begins: Jungle Chatti, Bheem Bali, Linchauli, Base Camp, and finally the temple at 3,583 m. Evening darshan, then overnight near the shrine — staying up here is the whole point, because the 4 AM darshan is the one you will remember.' },
  { day: 3, title: 'Kedarnath darshan → descent → Guptkashi', body: 'Up at 4 AM for the rudrabhishek and morning aarti — the temple is quiet, cold, and at its most powerful before the day-trippers arrive. Pay respects at the Adi Shankaracharya Samadhi behind the temple. If your legs are willing, the 1 km detour to Gandhi Sarovar glacial lake is worth it. Start the descent around 9–10 AM, reach Gaurikund by early afternoon, drive back to Guptkashi. Overnight.' },
  { day: 4, title: 'Guptkashi → Rishikesh → Haridwar (210 km)', body: 'A relaxed drive back via Rudraprayag and Devprayag, with a stop at Rishikesh (Ram Jhula) if time allows. We aim to get you to Haridwar by evening for the Har Ki Pauri Ganga Aarti. Tour ends. You leave with prasad and a completion certificate.' },
];

const INCLUDED = [
  'Pickup and drop from Haridwar (railway station or your hotel)',
  'All road transfers in a clean, well-maintained vehicle (shared or private per tier)',
  '3 nights accommodation on twin/triple sharing (Guptkashi + Kedarnath night)',
  'Daily breakfast and dinner — simple, hot, vegetarian',
  'Kedarnath Yatra registration done for you (we handle the portal)',
  'Experienced driver who has run this route many seasons',
  'Toll, parking, state taxes and driver allowance',
  'On-ground support number you can call at any hour of the yatra',
];

const EXCLUDED = [
  'Pony / palki / porter for the 16 km trek (optional — rates below)',
  'Helicopter tickets (booked only through IRCTC HeliYatra — we assist)',
  'Lunch, snacks, mineral water and personal expenses',
  'Any special VIP puja booked at the temple',
  'Room heater, laundry, tips and phone bills',
  'Anything not listed under "What\'s included"',
  'Cost of delays from landslides, weather or roadblocks (force majeure)',
];

const COST_DIY = [
  ['Haridwar → Guptkashi shared transport (return)', '₹1,200 – ₹2,000'],
  ['3 nights budget stay (guesthouse / dharamshala)', '₹1,500 – ₹6,000'],
  ['Sonprayag → Gaurikund shuttle (return, govt-fixed)', '₹100'],
  ['Food — 4 days, 2–3 meals/day at trail dhabas', '₹1,000 – ₹2,000'],
  ['Yatra registration', 'Free'],
  ['Buffer for pony / weather / emergencies', '₹2,000 – ₹4,000'],
];

const FARES = [
  ['Pony (ghoda) — one way', '₹3,500 – ₹4,500', 'Most senior pilgrims ride up, walk down'],
  ['Palki / doli — round trip', '₹8,000 – ₹12,000', 'Four porters carry you both ways'],
  ['Pithoo (porter for luggage/child)', '₹1,500 – ₹3,000', 'Carries bags or a small child'],
  ['Helicopter — Sirsi → Kedarnath (round trip)', '₹6,390 + fees', 'Cheapest heli; 9 km, ~6 min flight'],
  ['Helicopter — Phata → Kedarnath (round trip)', '₹10,164 + fees', '30 km, ~7–9 min flight'],
  ['Helicopter — Guptkashi → Kedarnath (round trip)', '₹12,762 + fees', 'Best road access; most reliable slots'],
];

const FAQ = [
  { q: 'What is the cost of a Kedarnath tour package from Haridwar in 2026?', a: 'A Kedarnath tour package from Haridwar starts at ₹6,999 per person for a 3N/4D trip on shared transport with camp/guesthouse stay. Deluxe with a 3★ hotel and Innova runs around ₹9,999, and a fully private premium package is about ₹13,500. The exact price moves with your group size, hotel category and travel dates — so enquiring costs you nothing and we send a fixed quote, no advance needed.' },
  { q: 'How many days does the Kedarnath yatra take from Haridwar?', a: 'Four days by road from Haridwar is the comfortable standard: drive to Guptkashi (Day 1), trek up and stay at Kedarnath (Day 2), darshan and descend (Day 3), drive back (Day 4). With a helicopter from Phata or Guptkashi you can compress it to 2 days, and a same-day darshan is possible if you fly both ways and the weather holds.' },
  { q: 'Is the 16 km Kedarnath trek mandatory, or can I take a pony or helicopter?', a: 'The trek is not mandatory. The temple sits 16 km uphill from Gaurikund and you can cover it on foot, by pony (₹3,500–4,500 one way), by palki (₹8,000–12,000 round trip), or skip the climb entirely with a helicopter from Sirsi, Phata or Guptkashi. We arrange whichever suits your fitness and budget.' },
  { q: 'When does Kedarnath temple open in 2026 and is registration compulsory?', a: 'Kedarnath temple opened on 22 April 2026 at 8:00 AM and stays open until around 23 October (Bhai Dooj). Registration is compulsory for every pilgrim — no pass, no entry past the Sonprayag checkpoint. We complete the registration on the government portal for all package guests and hand you the QR e-pass.' },
  { q: 'How much does it cost to do Kedarnath on your own versus a package?', a: 'Done solo on a tight budget, Kedarnath from Haridwar works out to roughly ₹6,000–14,000 once you add transport, three nights stay, the Sonprayag shuttle, food and a weather buffer. A package at ₹6,999 covers the same ground with the stay, meals, transport and registration locked in — so for most pilgrims the package costs about the same as DIY but removes the hotel-hunting and last-minute price spikes during peak season.' },
  { q: 'Is the Kedarnath tour package suitable for senior citizens and families?', a: 'Yes — it is our most-booked family trip. We arrange ground-floor rooms, a slower pace, and pony or palki at the trek so elders never have to walk. For anyone over 55 or with a heart, BP, asthma or diabetes condition, carry a doctor\'s fitness note; the state advises a basic health check for that age group. Tell us in advance and we adjust the plan around your group.' },
];

const PAA = [
  { q: 'Which is better — Kedarnath by trek or by helicopter?', a: 'It depends on fitness and time. The 16 km trek is the traditional experience and far cheaper, but it is a real climb to 3,583 m and takes 5–7 hours up. The helicopter turns a four-day trip into a one- or two-day one and is the sensible choice for elders or anyone short on time — book only through IRCTC HeliYatra, never an agent.' },
  { q: 'How difficult is the Kedarnath trek?', a: 'Moderate. The path is paved and well-used, so it is not technical — the challenge is the steady 16 km uphill and the thin air near the top. A reasonably fit adult does it in 5–7 hours. Walk 3–5 km a day for two or three weeks beforehand and you will feel the difference on the trail.' },
  { q: 'What is the best time to visit Kedarnath in 2026?', a: 'Two windows: late April to mid-June, and September to late October. Days sit around 5–15°C with clear skies. Skip July and August — the monsoon brings landslides and slippery trails — and the temple is shut from November to April.' },
  { q: 'Do I need to register for Kedarnath, and how?', a: 'Yes, registration is mandatory. You can do it yourself at registrationandtouristcare.uk.gov.in or on the Tourist Care Uttarakhand app, or let us handle it — we register every package guest and give you the QR e-pass that gets scanned at Sonprayag.' },
  { q: 'Can I stay overnight at Kedarnath?', a: 'Yes, and we recommend it. We book a guesthouse or camp near the temple so you are there for the 4 AM rudrabhishek, which is the most peaceful darshan of the day. Rooms up top are basic and fill fast, so an overnight stay needs to be locked early in the season.' },
  { q: 'How far is Kedarnath from Haridwar?', a: 'About 235 km of road to Gaurikund (8–9 hours), then the 16 km trek. We break the drive with an overnight at Guptkashi so nobody attempts the climb after a full day in the car.' },
];

function Schema() {
  const trip = {
    '@context': 'https://schema.org', '@type': 'TouristTrip',
    name: 'Kedarnath Tour Package 2026 — 3N/4D from Haridwar', url: URL,
    description: 'A 3 nights / 4 days Kedarnath Dham yatra from Haridwar with stay, meals, transport, registration and trek or helicopter options.',
    touristType: ['Pilgrims', 'Families', 'Senior citizens'],
    itinerary: ITINERARY.map((d, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'TouristAttraction', name: d.title } })),
    offers: { '@type': 'Offer', priceCurrency: 'INR', price: '6999', availability: 'https://schema.org/InStock', url: URL, validFrom: '2026-04-22' },
    provider: { '@type': 'TravelAgency', name: SITE.name, url: SITE.baseUrl },
  };
  const agency = {
    '@context': 'https://schema.org', '@type': 'TravelAgency',
    '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl,
    telephone: SITE.phone, email: SITE.email, image: `${SITE.baseUrl}/opengraph-image`,
    address: { '@type': 'PostalAddress', streetAddress: 'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala', addressLocality: 'Haridwar', addressRegion: 'Uttarakhand', postalCode: '249410', addressCountry: 'IN' },
    areaServed: 'Kedarnath, Uttarakhand', foundingDate: '2010',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.6', reviewCount: '38', bestRating: '5' },
  };
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Kedarnath Yatra', item: `${SITE.baseUrl}/kedarnath-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Kedarnath Tour Package', item: URL },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trip) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agency) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${URL}#webpage`, url: URL, name: metadata.title, inLanguage: 'en-IN', dateModified: SITE.lastUpdatedISO, speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-answer'] } }) }} />
    </>
  );
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: 12, marginTop: 40 };
const h3 = { fontSize: 'clamp(1rem,2vw,1.2rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 8, marginTop: 22 };
const p = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };
const card = { background: '#fff', borderRadius: 12, padding: 16, border: '1px solid var(--border)' };
const thtd = { padding: '11px 12px', fontSize: 13.5, textAlign: 'left', borderBottom: '1px solid var(--border)', color: '#334155', lineHeight: 1.6 };

function Table({ head, rows }) {
  return (
    <div style={{ overflowX: 'auto', margin: '8px 0 20px', border: '1px solid var(--border)', borderRadius: 12 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 460 }}>
        <thead><tr style={{ background: 'var(--bg)' }}>{head.map((h) => <th key={h} style={{ ...thtd, fontWeight: 700, color: 'var(--navy)' }}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} style={thtd}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

export default function KedarnathTourPackage() {
  const wa = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
  return (
    <>
      <Schema />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '56px 20px 44px', textAlign: 'center' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 16 }}>3N/4D · Ex-Haridwar · Temple open Apr 22 – Oct 2026</span>
          <h1 className="display-title" style={{ color: '#fff', fontSize: 'clamp(1.8rem,4.5vw,3rem)', marginBottom: 16 }}>Kedarnath Tour Package 2026 — from Haridwar</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7 }}>
            A real 3N/4D yatra to the 12th Jyotirlinga — stay, meals, transport and registration handled.<br />
            From <strong style={{ color: '#FFD166' }}>₹6,999</strong>/person · Trek · Pony · Helicopter · Direct operator since 2010
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 20 }}>
            <a href={wa('Namaste! Please send me a Kedarnath tour package quote for 2026.')} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Get Free Quote</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
          <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap', marginTop: 22, color: 'rgba(255,255,255,0.8)', fontSize: 12.5, fontWeight: 600 }}>
            <span>⭐ 4.6/5 · 38 Google reviews</span><span>🙏 50,000+ pilgrims served</span><span>🛡️ Zero-incident record</span><span>₹0 advance to enquire</span>
          </div>
        </div>
      </section>

      <article style={{ maxWidth: 860, margin: '0 auto', padding: '8px 20px 56px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted, #64748b)', margin: '18px 0 6px', textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated} · Season: Apr 22 – Oct 2026</div>

        <AnswerBox>
          A Kedarnath tour package from Haridwar is a 3N/4D yatra to the 12th Jyotirlinga starting at <strong>₹6,999 per person</strong> — covering road transfers, three nights stay, breakfast and dinner, and your mandatory Yatra registration. The temple opened on <strong>22 April 2026</strong>; the shrine sits 16 km uphill from Gaurikund, reachable on foot, by pony, or by helicopter. Enquiring is free and needs no advance.
        </AnswerBox>

        <p style={p}>Let me be straight with you about what a Kedarnath tour package actually buys, because most pages dodge it. You are paying someone who knows the road to handle the boring, expensive-to-get-wrong parts — the Guptkashi hotel that does not exist on booking sites, the 3:30 AM start that gets you onto the trail before the crowd, the registration that turns pilgrims back at Sonprayag if it is missing. We have run this exact route every season since 2010. Here is everything, prices included.</p>

        <h2 style={h2}>What you actually get (and what you pay)</h2>
        <p style={p}>Three nights, four days, from Haridwar and back. You sleep one night at Kedarnath itself — that is deliberate, because the 4 AM darshan is worth the cold guesthouse. Below are our three tiers. The honest version: final price moves with group size, hotel category and travel dates, so the numbers are starting points. A quote costs you nothing and we never ask for an advance to send one.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14, margin: '8px 0 12px' }}>
          {TIERS.map((t) => (
            <div key={t.name} style={{ ...card, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: 15 }}>{t.name}</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--teal)', margin: '6px 0 2px' }}>{t.price}<span style={{ fontSize: 12, color: '#64748b', fontWeight: 600 }}> /person</span></div>
              <div style={{ fontSize: 12.5, color: '#475569', lineHeight: 1.7, marginTop: 6 }}>🏨 {t.stay}<br />🚗 {t.vehicle}</div>
              <div style={{ fontSize: 11.5, color: '#E8920A', fontWeight: 700, marginTop: 8 }}>{t.note}</div>
            </div>
          ))}
        </div>
        <p style={{ ...p, fontSize: 13.5, color: '#64748b' }}>Want the published bestseller version with full inclusions? See the <Link href="/packages/kedarnath-yatra-package-3n-4d-haridwar" style={{ color: 'var(--teal)', fontWeight: 600 }}>Kedarnath 3N/4D package details</Link>.</p>

        <h2 style={h2}>Kedarnath tour package price — compared to the field</h2>
        <p style={p}>Most operators quote a single shiny figure and bury what it excludes. We would rather show you the same three tiers everyone sells, side by side, so you can see where your money goes.</p>
        <Table head={['Tier', 'Stay', 'Vehicle', 'From (per person)']} rows={TIERS.map((t) => [t.name, t.stay, t.vehicle, t.price])} />
        <p style={{ ...p, fontSize: 13.5 }}>Prices shown are ex-Haridwar, twin/triple sharing, in the 2026 season. Pickup from Delhi, Rishikesh or other cities is arranged on request and quoted separately.</p>

        <h2 style={h2}>Day-by-day 3N/4D itinerary (real timings, real altitude)</h2>
        <p style={p}>This is the plan as it runs on the ground — not a brochure version. The early starts are not us being dramatic; the mountain weather turns by afternoon and you want to be off the high trail before it does.</p>
        {ITINERARY.map((d) => (
          <div key={d.day} style={{ ...card, marginBottom: 12, display: 'flex', gap: 14 }}>
            <div style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 9, background: 'var(--navy)', color: '#FFD166', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>D{d.day}</div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: 14.5, marginBottom: 4 }}>{d.title}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.8 }}>{d.body}</div>
            </div>
          </div>
        ))}

        <h2 style={h2}>What&apos;s included vs excluded — no hidden costs</h2>
        <p style={p}>The fastest way to lose trust is a surprise bill at Guptkashi. Here is the clean line between what the package covers and what it does not.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14 }}>
          <div style={{ ...card, borderTop: '3px solid #16a34a' }}>
            <div style={{ fontWeight: 800, color: '#16a34a', fontSize: 14, marginBottom: 8 }}>✓ Included</div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: '#334155', lineHeight: 1.9 }}>{INCLUDED.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div style={{ ...card, borderTop: '3px solid #dc2626' }}>
            <div style={{ fontWeight: 800, color: '#dc2626', fontSize: 14, marginBottom: 8 }}>✗ Not included</div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: '#334155', lineHeight: 1.9 }}>{EXCLUDED.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>

        <h2 style={h2}>DIY vs package: the honest Kedarnath trip cost breakdown</h2>
        <p style={p}>People ask whether they should just do it themselves. Fair question. Here is what a budget solo trip from Haridwar actually adds up to, so you can compare like for like.</p>
        <Table head={['Doing it yourself', 'Rough cost']} rows={COST_DIY} />
        <p style={p}>Add it up and a careful solo pilgrim lands somewhere around <strong>₹6,000–14,000</strong> — and that is before a single thing goes wrong with hotel availability in peak May. Our ₹6,999 package sits right at the bottom of that range with the stay, meals, transport and registration already locked, plus a number you can call when the road shuts. For most people the package is not more expensive than DIY; it just moves the risk off your shoulders. If you genuinely love planning logistics and have flexible dates, doing it yourself is a perfectly good option — and we will still help you with registration.</p>

        <h2 style={h2}>The 16 km trek, pony, palki &amp; helicopter — rates and reality</h2>
        <p style={p}>First, the distance, because the internet cannot agree on it. The official figure — the one on IRCTC&apos;s own HeliYatra portal — is <strong>16 km</strong> from Gaurikund to the temple. You will see 17, 18, even 20 km on competitor pages; that is old or sloppy data. It is 16 km, gaining roughly 1,600 m to 3,583 m, and a reasonably fit adult walks it in 5–7 hours.</p>
        <p style={p}>If walking is not on, here is what the alternatives cost. Pony and palki are paid in cash at Gaurikund; helicopters are a different system entirely — booked only through the government IRCTC HeliYatra portal, never an agent or &quot;offline&quot; ticket.</p>
        <Table head={['Option', 'Approx. fare', 'Notes']} rows={FARES} />
        <p style={{ ...p, fontSize: 13.5, color: '#64748b' }}>Helicopter fares are UCADA-regulated round-trip rates per passenger and add a convenience fee plus 18% GST. Book at <a href="https://heliyatra.irctc.co.in" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--teal)', fontWeight: 600 }}>heliyatra.irctc.co.in</a> — we will guide you through it, but the ticket has to be in your name. For a deeper comparison see our <Link href="/kedarnath-pony-palki-kandi-rates" style={{ color: 'var(--teal)', fontWeight: 600 }}>pony, palki &amp; kandi rates guide</Link> and <Link href="/kedarnath-vip-darshan" style={{ color: 'var(--teal)', fontWeight: 600 }}>VIP darshan options</Link>.</p>

        <h2 style={h2}>Kedarnath 2026 registration, opening date &amp; medical rules</h2>
        <p style={p}>Kedarnath temple opened on <strong>22 April 2026 at 8:00 AM</strong>, announced on Mahashivratri by the Badrinath-Kedarnath Temple Committee, and it closes around 23 October on Bhai Dooj. Three things you must know before you travel:</p>
        <ul style={{ ...p, paddingLeft: 20 }}>
          <li style={{ marginBottom: 8 }}><strong>Registration is mandatory.</strong> No pass, no entry past the Sonprayag checkpoint. Register at <a href="https://registrationandtouristcare.uk.gov.in" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--teal)', fontWeight: 600 }}>registrationandtouristcare.uk.gov.in</a> or the Tourist Care Uttarakhand app — or let us do it for you. The QR e-pass is scanned at Sonprayag and again before pony/palki.</li>
          <li style={{ marginBottom: 8 }}><strong>Health check for 55+.</strong> The state advises a basic fitness check for pilgrims over 55 or anyone with heart, BP, asthma or diabetes conditions. Carry a doctor&apos;s note. This is a high-altitude climb, not a temple visit on the plains.</li>
          <li style={{ marginBottom: 8 }}><strong>Daily darshan caps apply.</strong> Authorities limit numbers each day for safety, so peak-season dates and Kedarnath-night stays fill early. Book ahead.</li>
        </ul>
        <p style={{ ...p, fontSize: 13.5 }}>More detail: <Link href="/kedarnath-weather" style={{ color: 'var(--teal)', fontWeight: 600 }}>Kedarnath weather by month</Link> · <Link href="/char-dham-yatra-checklist" style={{ color: 'var(--teal)', fontWeight: 600 }}>what to pack</Link> · <Link href="/char-dham-yatra-emergency-contacts" style={{ color: 'var(--teal)', fontWeight: 600 }}>emergency contacts</Link>.</p>

        <h2 style={h2}>Who this package suits (and who should pick a different one)</h2>
        <p style={p}>Honesty sells better than a hard close, so here is the truth about fit.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14 }}>
          <div style={card}>
            <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: 14, marginBottom: 8 }}>👍 Book this if you</div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: '#334155', lineHeight: 1.9 }}>
              <li>Want Kedarnath alone, done well, in four days</li>
              <li>Are travelling as a family or with elders</li>
              <li>Would rather not chase Guptkashi hotels in peak season</li>
              <li>Want the night stay at Kedarnath for the 4 AM darshan</li>
            </ul>
          </div>
          <div style={card}>
            <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: 14, marginBottom: 8 }}>👉 Look elsewhere if you</div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: '#334155', lineHeight: 1.9 }}>
              <li>Want all four dhams — see <Link href="/char-dham-yatra" style={{ color: 'var(--teal)' }}>Char Dham Yatra</Link></li>
              <li>Want Kedarnath + Badrinath — see <Link href="/do-dham-yatra" style={{ color: 'var(--teal)' }}>Do Dham Yatra</Link></li>
              <li>Cannot trek at all and want to fly — ask about the <Link href="/char-dham-helicopter" style={{ color: 'var(--teal)' }}>helicopter yatra</Link></li>
              <li>Only need a cab — see <Link href="/haridwar-to-kedarnath-cab" style={{ color: 'var(--teal)' }}>Haridwar to Kedarnath cab</Link></li>
            </ul>
          </div>
        </div>

        <h2 style={h2}>Why book Kedarnath with us</h2>
        <p style={p}>We are not an aggregator reselling your booking to whoever bids lowest. Shiv Ganga Travels is a Haridwar family operator — the drivers, the Guptkashi rooms and the on-trail support are ours. That is why the price holds and the phone gets answered at 4 AM.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 12, margin: '8px 0 8px' }}>
          {TRUST.stats.map((s) => (
            <div key={s.label} style={{ ...card, textAlign: 'center' }}>
              <div style={{ fontSize: 22 }}>{s.icon}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--navy)' }}>{s.value}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--teal)' }}>{s.label}</div>
              <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Author / E-E-A-T */}
        <div style={{ ...card, display: 'flex', gap: 14, alignItems: 'flex-start', marginTop: 20, background: 'var(--bg)' }}>
          <div style={{ flexShrink: 0, width: 46, height: 46, borderRadius: '50%', background: 'var(--navy)', color: '#FFD166', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>DM</div>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: 14 }}>Reviewed by Dhanesh Chandra Mishra</div>
            <div style={{ fontSize: 12.5, color: '#475569', lineHeight: 1.7, marginTop: 3 }}>Founder, Shiv Ganga Travels · retired Army officer with 15+ Char Dham seasons on these roads. Every itinerary, fare and date on this page is checked against how the route actually ran this season.</div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <div style={{ color: '#FFD166', fontSize: 13, fontWeight: 700, marginBottom: 6 }}>🏔️ Kedarnath 2026 · Open till late October · Night stay slots fill early</div>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 10 }}>Get your free Kedarnath quote</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 20 }}>Direct operator. Registration handled. A fixed quote back in about 2 hours — and ₹0 to ask.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={wa('Namaste! Please send me a Kedarnath tour package quote for 2026.')} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 WhatsApp Us</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        {/* FAQ */}
        <h2 style={h2}>Kedarnath tour package — FAQ</h2>
        {FAQ.map((f) => (
          <div key={f.q} style={{ marginBottom: 14 }}>
            <h3 style={{ ...h3, marginTop: 10 }}>{f.q}</h3>
            <p style={{ ...p, marginBottom: 4 }}>{f.a}</p>
          </div>
        ))}

        {/* Related */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Plan the rest of your yatra</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Kedarnath Yatra Guide', '/kedarnath-yatra'], ['Haridwar → Kedarnath Cab', '/haridwar-to-kedarnath-cab'], ['Pony / Palki Rates', '/kedarnath-pony-palki-kandi-rates'], ['VIP Darshan', '/kedarnath-vip-darshan'], ['Kedarnath Hotels', '/kedarnath-hotels'], ['Kedarnath Weather', '/kedarnath-weather'], ['Char Dham Yatra', '/char-dham-yatra'], ['Do Dham Yatra', '/do-dham-yatra']].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}>
          <PeopleAlsoAsk items={PAA} />
        </div>
      </article>
    </>
  );
}
