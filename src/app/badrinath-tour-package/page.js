import Link from 'next/link';
import { SITE, TRUST } from '@/data/packages';
import AnswerBox from '@/components/AnswerBox';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';

export const metadata = {
  title: 'Badrinath Tour Package 2026 — 2N/3D from ₹5,999 | Ex-Haridwar',
  description:
    'Badrinath tour package 2026 from Haridwar — 2N/3D from ₹5,999/person, no trek. Real day-by-day itinerary, honest cost breakdown, Mana village & Tapt Kund, 2026 registration. 4.6★ (38 reviews). ₹0 to enquire.',
  keywords: [
    'badrinath tour package', 'badrinath yatra package', 'badrinath tour package 2026',
    'badrinath package from haridwar', 'badrinath yatra package from haridwar', 'badrinath ek dham yatra',
    'badrinath darshan package', 'badrinath tour package price', 'badrinath 2n 3d itinerary',
  ],
  alternates: { canonical: `${SITE.baseUrl}/badrinath-tour-package` },
  openGraph: {
    title: 'Badrinath Tour Package 2026 — 2N/3D from ₹5,999 (Ex-Haridwar)',
    description:
      'No trek to the temple. Real itinerary, honest costs, Mana village & Tapt Kund, and 2026 registration help. Direct Haridwar operator since 2010 · 4.6★ from 38 reviews.',
    url: `${SITE.baseUrl}/badrinath-tour-package`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Badrinath Tour Package 2026 from Haridwar — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Badrinath Tour Package 2026 — from ₹5,999 | Direct Operator',
    description: 'Badrinath 2N/3D from Haridwar, no trek. Real itinerary, honest cost breakdown, Mana & Tapt Kund. ₹0 to enquire.',
    images: [{ url: '/opengraph-image', alt: 'Badrinath Tour Package 2026 from Haridwar' }],
  },
};

const URL = `${SITE.baseUrl}/badrinath-tour-package`;

// Final price depends on group size, hotel category & season — quote is free.
const TIERS = [
  { name: 'Group / Shared', stay: 'Budget hotels & guesthouses', vehicle: 'Tempo Traveller (shared)', price: '₹5,999', note: 'Best value · fixed-group departures' },
  { name: 'Deluxe', stay: '3★ hotels at Badrinath/Joshimath', vehicle: 'Innova / Ertiga', price: '₹8,499', note: 'Private cab · most-booked family option' },
  { name: 'Private / Premium', stay: 'Premium riverside hotels', vehicle: 'Innova Crysta (private)', price: '₹11,999', note: 'Fully customised · your pace, your route' },
];

const ITINERARY = [
  { day: 1, title: 'Haridwar → Joshimath → Badrinath (320 km · 10–11 hrs)', body: 'Early pickup from Haridwar — this is a long mountain drive, so we leave by 4–5 AM. The road follows the Alaknanda through Rishikesh, Devprayag (where the Ganga is born), Rudraprayag, Chamoli and Joshimath, the winter seat of Lord Badri. We reach Badrinath (3,133 m) by evening. A ritual dip in the Tapt Kund hot spring, then Mahabhishek darshan of Lord Badrinarayan. Dinner and overnight at Badrinath.' },
  { day: 2, title: 'Badrinath darshan + Mana village', body: 'Up before dawn for the 4:30 AM Maha Abhishek — the temple at first light, with Neelkanth peak glowing behind it, is the image you came for. After darshan we explore the temple complex (Brahmakapal ghat for ancestral rites, Garuda Shila), then drive 3 km to Mana — the "First Village of India". Vyas Gufa where the Mahabharata was composed, Ganesh Gufa, Bhim Pul over the roaring Saraswati, and the last tea shop in India. If your legs are willing, the 5 km trek to Vasudhara Falls (400 ft) is the quiet highlight nobody rushes you toward. Overnight Badrinath.' },
  { day: 3, title: 'Badrinath → Rishikesh → Haridwar (320 km)', body: 'A final morning darshan if there is time, then the drive back down via Joshimath and Rudraprayag. We stop at Rishikesh (Ram Jhula) when the schedule allows and aim to reach Haridwar by evening for the Har Ki Pauri Ganga Aarti. Tour ends with prasad and a completion certificate.' },
];

const INCLUDED = [
  'Pickup and drop from Haridwar (railway station or your hotel)',
  'All road transfers in a clean, well-maintained vehicle (shared or private per tier)',
  '2 nights accommodation on twin/triple sharing at Badrinath/Joshimath',
  'Daily breakfast and dinner — simple, hot, vegetarian',
  'Char Dham / Badrinath Yatra registration done for you',
  'Experienced driver who runs this route every season',
  'Toll, parking, state taxes and driver allowance',
  'On-ground support number you can call at any hour',
];

const EXCLUDED = [
  'Special VIP puja or abhishek booked at the temple',
  'Helicopter tickets (Dehradun–Badrinath sector — booked separately)',
  'Lunch, snacks, mineral water and personal expenses',
  'Vasudhara Falls guide/porter if you want one',
  'Room heater, laundry, tips and phone bills',
  'Anything not listed under "What\'s included"',
  'Cost of delays from landslides, weather or roadblocks (force majeure)',
];

const COST_DIY = [
  ['Haridwar → Badrinath shared transport (return)', '₹1,600 – ₹2,800'],
  ['2 nights budget stay (guesthouse / dharamshala)', '₹1,200 – ₹4,000'],
  ['Food — 3 days, 2–3 meals/day', '₹800 – ₹1,600'],
  ['Tapt Kund / temple — entry free, puja optional', '₹0 – ₹1,500'],
  ['Yatra registration', 'Free'],
  ['Buffer for weather / landslide delays', '₹2,000 – ₹4,000'],
];

const REACH = [
  ['By road (own pace)', 'Rishikesh → Badrinath taxi ₹5,000–7,000 (car) / ₹8,000–12,000 (SUV) one way', 'What most pilgrims do'],
  ['By package', 'From ₹5,999 per person, 2N/3D, all transport handled', 'Best value, no logistics'],
  ['By helicopter', 'Dehradun (Sahastradhara) → Badrinath, ~60 min flight, ₹80,000–1,50,000 pp', 'Costly; for very limited time or health needs'],
];

const FAQ = [
  { q: 'What is the cost of a Badrinath tour package from Haridwar in 2026?', a: 'A Badrinath tour package from Haridwar starts at ₹5,999 per person for a 2N/3D trip on shared transport with budget stay. Deluxe with a 3★ hotel and Innova runs around ₹8,499, and a fully private premium package is about ₹11,999. Final price moves with your group size, hotel category and dates — enquiring is free and needs no advance.' },
  { q: 'How many days does the Badrinath yatra take from Haridwar?', a: 'Three days by road is the comfortable standard: drive up to Badrinath (Day 1), darshan plus Mana village (Day 2), and the drive back (Day 3). Badrinath is a long 320 km mountain road from Haridwar, so we do not try to rush it into two days — the extra night gives you the unhurried 4:30 AM darshan and time for Mana.' },
  { q: 'Is there any trek at Badrinath, or can elderly pilgrims reach the temple easily?', a: 'There is no trek to reach Badrinath — the road goes right up to the temple town, and the shrine is a short, flat walk from the parking. That is exactly why it suits senior citizens and families with young children. The only optional walk is the 5 km Vasudhara Falls trek from Mana, which you can skip entirely.' },
  { q: 'When does Badrinath temple open in 2026 and what are the darshan timings?', a: 'Badrinath temple opened on 23 April 2026 at 6:15 AM and stays open until around 13 November (Bhai Dooj). Darshan runs roughly 4:30 AM to 1:00 PM and 4:00 PM to 9:00 PM, with the Maha Abhishek aarti at 4:30 AM; the temple closes 1–4 PM for midday rituals.' },
  { q: 'Is registration mandatory for Badrinath, and how do I do it?', a: 'Yes — Char Dham registration is free and mandatory for every pilgrim. You get a QR-coded e-pass that is checked at Rishikesh, Rudraprayag and Joshimath. Register at registrationandtouristcare.uk.gov.in or the Tourist Care Uttarakhand app, or let us do it for you. Pilgrims aged 70+ upload a medical fitness certificate during registration.' },
  { q: 'How much does Badrinath cost on your own versus a package, and is Mana village worth it?', a: 'Done solo on a budget, Badrinath from Haridwar works out to roughly ₹6,000–14,000 once transport, two nights stay, food and a weather buffer are added. A package at ₹5,999 covers the same ground with stay, meals, transport and registration locked in. And yes — Mana is absolutely worth it: it is 3 km from the temple, free to enter, and home to the Vyas Gufa, Bhim Pul and the Saraswati origin. Skipping it leaves the story half-told.' },
];

const PAA = [
  { q: 'Is Badrinath easier than Kedarnath?', a: 'Much easier. Badrinath has no trek — the road reaches the temple town and the shrine is a flat walk away. Kedarnath needs a 16 km uphill climb (or pony/helicopter). For elders, families, or anyone short on fitness, Badrinath is the simpler of the two dhams.' },
  { q: 'What is the best time to visit Badrinath in 2026?', a: 'Mid-May to mid-June and mid-September to late October. Days sit around 10–18°C with clear skies and good road conditions. Avoid July–August — the Rishikesh–Badrinath highway is landslide-prone in the monsoon — and the temple is shut November to April.' },
  { q: 'How far is Badrinath from Haridwar?', a: 'About 320 km by road, 10–12 hours via Rishikesh, Devprayag, Rudraprayag, Chamoli and Joshimath. It is a full day in the car, which is why our package builds in an overnight rather than attempting it in one stretch.' },
  { q: 'What is Tapt Kund at Badrinath?', a: 'Tapt Kund is a natural hot spring just below the temple, around 45–55°C, fed by sulphur springs. Pilgrims take a ritual dip here before darshan — it is considered purifying, and after a cold mountain drive it is genuinely welcome.' },
  { q: 'Can I combine Badrinath with Kedarnath?', a: 'Yes — that is the Do Dham Yatra, the most popular pairing. It adds the Kedarnath leg (with its 16 km trek or helicopter) to the Badrinath trip. If you want both shrines in one journey, ask us about the Do Dham package instead of Badrinath alone.' },
  { q: 'Do I need a permit for Mana village?', a: 'No. The Char Dham Yatra e-pass is enough for Indian nationals to visit Mana and the temple. Only foreign nationals heading beyond Mana toward the Tibet border may need an Inner Line Permit — not for the temple or the village itself.' },
];

function Schema() {
  const trip = {
    '@context': 'https://schema.org', '@type': 'TouristTrip',
    name: 'Badrinath Tour Package 2026 — 2N/3D from Haridwar', url: URL,
    description: 'A 2 nights / 3 days Badrinath Dham yatra from Haridwar with stay, meals, transport, registration and Mana village — no trek to the temple.',
    touristType: ['Pilgrims', 'Families', 'Senior citizens'],
    itinerary: ITINERARY.map((d, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'TouristAttraction', name: d.title } })),
    offers: { '@type': 'Offer', priceCurrency: 'INR', price: '5999', availability: 'https://schema.org/InStock', url: URL, validFrom: '2026-04-23' },
    provider: { '@type': 'TravelAgency', name: SITE.name, url: SITE.baseUrl },
  };
  const agency = {
    '@context': 'https://schema.org', '@type': 'TravelAgency',
    '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl,
    telephone: SITE.phone, email: SITE.email, image: `${SITE.baseUrl}/opengraph-image`,
    address: { '@type': 'PostalAddress', streetAddress: 'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala', addressLocality: 'Haridwar', addressRegion: 'Uttarakhand', postalCode: '249410', addressCountry: 'IN' },
    areaServed: 'Badrinath, Uttarakhand', foundingDate: '2010',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.6', reviewCount: '38', bestRating: '5' },
  };
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Badrinath Yatra', item: `${SITE.baseUrl}/badrinath-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Badrinath Tour Package', item: URL },
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

export default function BadrinathTourPackage() {
  const wa = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '56px 20px 44px', textAlign: 'center' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 16 }}>2N/3D · No Trek · Temple open Apr 23 – Nov 2026</span>
          <h1 className="display-title" style={{ color: '#fff', fontSize: 'clamp(1.8rem,4.5vw,3rem)', marginBottom: 16 }}>Badrinath Tour Package 2026 — from Haridwar</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7 }}>
            A real 2N/3D yatra to Lord Vishnu&apos;s Himalayan abode — no trek, road right to the temple.<br />
            From <strong style={{ color: '#FFD166' }}>₹5,999</strong>/person · Tapt Kund · Mana village · Direct operator since 2010
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 20 }}>
            <a href={wa('Namaste! Please send me a Badrinath tour package quote for 2026.')} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Get Free Quote</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
          <div style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap', marginTop: 22, color: 'rgba(255,255,255,0.8)', fontSize: 12.5, fontWeight: 600 }}>
            <span>⭐ 4.6/5 · 38 Google reviews</span><span>🙏 50,000+ pilgrims served</span><span>🛡️ Zero-incident record</span><span>₹0 advance to enquire</span>
          </div>
        </div>
      </section>

      <article style={{ maxWidth: 860, margin: '0 auto', padding: '8px 20px 56px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted, #64748b)', margin: '18px 0 6px', textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated} · Season: Apr 23 – Nov 2026</div>

        <AnswerBox>
          A Badrinath tour package from Haridwar is a 2N/3D yatra to Lord Vishnu&apos;s abode starting at <strong>₹5,999 per person</strong> — covering road transfers, two nights stay, breakfast and dinner, and your mandatory Yatra registration. <strong>There is no trek</strong>: the road runs right to the temple, which is why it suits elders and families. The temple opened on <strong>23 April 2026</strong> and the trip includes Tapt Kund and Mana village. Enquiring is free and needs no advance.
        </AnswerBox>

        <p style={p}>Here is the honest pitch for a Badrinath package, because most pages bury it under poetry. The single biggest thing to know: there is no climb. Unlike Kedarnath, the road goes all the way to the temple, so anyone who can walk a few flat minutes can have darshan. What you are paying us for is the 320 km mountain drive done safely, a warm room at 3,133 m, the Tapt Kund and Mana logistics, and the registration that gets scanned at three checkpoints on the way up. We have run this route every season since 2010. Prices and all, here is the whole thing.</p>

        <h2 style={h2}>What you actually get (and what you pay)</h2>
        <p style={p}>Two nights, three days, from Haridwar and back, both nights at Badrinath or Joshimath. Below are our three tiers. The honest version: the final figure shifts with group size, hotel category and travel dates, so treat these as starting points. A quote costs nothing and we never ask for an advance to send one.</p>
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
        <p style={{ ...p, fontSize: 13.5, color: '#64748b' }}>Want the published version with full inclusions? See the <Link href="/packages/badrinath-yatra-package-2n-3d-haridwar" style={{ color: 'var(--teal)', fontWeight: 600 }}>Badrinath 2N/3D package details</Link>.</p>

        <h2 style={h2}>Badrinath tour package price — compared to the field</h2>
        <p style={p}>Most operators flash one figure and hide the rest. Here are the same three tiers everyone really sells, side by side, so you can see where the money goes.</p>
        <Table head={['Tier', 'Stay', 'Vehicle', 'From (per person)']} rows={TIERS.map((t) => [t.name, t.stay, t.vehicle, t.price])} />
        <p style={{ ...p, fontSize: 13.5 }}>Prices are ex-Haridwar, twin/triple sharing, 2026 season. Pickup from Delhi, Rishikesh or other cities is arranged on request and quoted separately.</p>

        <h2 style={h2}>Day-by-day 2N/3D itinerary (real timings, real altitude)</h2>
        <p style={p}>This is the plan as it runs, not a brochure. The early Day 1 start is not us being dramatic — 320 km of mountain road takes a full day, and we want you at Badrinath before dark.</p>
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
        <p style={p}>A surprise bill at Badrinath is the fastest way to lose your trust. Here is the clean line between what the package covers and what it does not.</p>
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

        <h2 style={h2}>Mana village, Tapt Kund &amp; Vasudhara — what to actually see</h2>
        <p style={p}>Most packages drop you at the temple and call it done. The good stuff is a short drive past it. Day 2 is built around these, and they are the reason two nights beats a rushed one.</p>
        <h3 style={h3}>Tapt Kund</h3>
        <p style={p}>A natural sulphur hot spring right below the temple, 45–55°C even when the air outside is near freezing. Pilgrims bathe here before darshan — it is part of the ritual and, after a cold drive, a genuine relief.</p>
        <h3 style={h3}>Mana — the First Village of India</h3>
        <p style={p}>Three kilometres past Badrinath, the last village before the Tibet border. This is where Ved Vyas dictated the Mahabharata in the Vyas Gufa while Lord Ganesh wrote it down in the cave next door. Bhim Pul — a single rock slab the Pandavas are said to have thrown across the gorge — spans the Saraswati where it bursts out of the mountain with a roar you feel in your chest. Free to enter, and worth two unhurried hours.</p>
        <h3 style={h3}>Vasudhara Falls (optional)</h3>
        <p style={p}>A 5 km trek from Mana brings you to a 400-foot waterfall that scatters into mist before it lands. Local belief says the water will not fall on the impure of heart. It is the one bit of real walking on this trip, and entirely optional — skip it without guilt if the altitude is telling on you.</p>

        <h2 style={h2}>DIY vs package: the honest Badrinath trip cost breakdown</h2>
        <p style={p}>People ask whether they should just drive up themselves. Fair. Here is what a budget solo trip from Haridwar actually adds up to.</p>
        <Table head={['Doing it yourself', 'Rough cost']} rows={COST_DIY} />
        <p style={p}>Totalled up, a careful solo pilgrim lands around <strong>₹6,000–14,000</strong> — and that is before peak-season hotel scarcity at Badrinath bites. Our ₹5,999 package sits at the bottom of that range with stay, meals, transport and registration already locked, plus a number you can call when the highway shuts (and on this route, it does). For most people the package is not pricier than DIY; it just takes the logistics off your plate. If you love planning and have flexible dates, doing it solo is a fine choice — we will still help with registration.</p>

        <h2 style={h2}>Road or helicopter — and the no-trek advantage</h2>
        <p style={p}>Badrinath&apos;s quiet superpower is accessibility. The road reaches the temple town, the shrine is a flat walk from the parking, and there is no Kedarnath-style climb. That makes it the easiest of the four dhams for senior citizens. Here is how people reach it and what each costs.</p>
        <Table head={['How', 'Cost', 'Best for']} rows={REACH} />
        <p style={{ ...p, fontSize: 13.5, color: '#64748b' }}>A word on the helicopter: unlike Kedarnath&apos;s short shuttle hops, Badrinath flights run from Dehradun and are a premium charter — count on ₹80,000 and up per person. For most pilgrims the road is the sensible choice, since there is no trek to skip anyway. Planning to add Kedarnath too? See our <Link href="/do-dham-yatra" style={{ color: 'var(--teal)', fontWeight: 600 }}>Do Dham Yatra</Link> and <Link href="/char-dham-helicopter" style={{ color: 'var(--teal)', fontWeight: 600 }}>helicopter yatra</Link> options.</p>

        <h2 style={h2}>Badrinath 2026 — opening date, darshan timings &amp; registration</h2>
        <p style={p}>Badrinath temple opened on <strong>23 April 2026 at 6:15 AM</strong>, with the date set on Basant Panchami by the Badrinath-Kedarnath Temple Committee, and it closes around 13 November on Bhai Dooj. Three things to lock before you travel:</p>
        <ul style={{ ...p, paddingLeft: 20 }}>
          <li style={{ marginBottom: 8 }}><strong>Registration is mandatory and free.</strong> Get the QR e-pass at <a href="https://registrationandtouristcare.uk.gov.in" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--teal)', fontWeight: 600 }}>registrationandtouristcare.uk.gov.in</a> or the Tourist Care Uttarakhand app — or let us handle it. It is scanned at Rishikesh, Rudraprayag and Joshimath.</li>
          <li style={{ marginBottom: 8 }}><strong>Darshan timings.</strong> Roughly 4:30 AM–1:00 PM and 4:00 PM–9:00 PM; the temple closes 1–4 PM for midday rituals. The 4:30 AM Maha Abhishek is the one to aim for.</li>
          <li style={{ marginBottom: 8 }}><strong>Fitness note for 70+.</strong> Pilgrims aged 70 and above upload a medical fitness certificate during registration. Badrinath sits at 3,133 m, so give yourself a slow first evening to acclimatise.</li>
        </ul>
        <p style={{ ...p, fontSize: 13.5 }}>More: <Link href="/how-to-reach-badrinath" style={{ color: 'var(--teal)', fontWeight: 600 }}>how to reach Badrinath</Link> · <Link href="/badrinath-weather" style={{ color: 'var(--teal)', fontWeight: 600 }}>Badrinath weather by month</Link> · <Link href="/badrinath-temple" style={{ color: 'var(--teal)', fontWeight: 600 }}>the temple &amp; its legends</Link> · <Link href="/badrinath-hotels" style={{ color: 'var(--teal)', fontWeight: 600 }}>where to stay</Link>.</p>

        <h2 style={h2}>Who this package suits (and who should pick a different one)</h2>
        <p style={p}>Honesty closes better than a hard sell, so here is the truth about fit.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14 }}>
          <div style={card}>
            <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: 14, marginBottom: 8 }}>👍 Book this if you</div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: '#334155', lineHeight: 1.9 }}>
              <li>Want Badrinath alone, done well, in three days</li>
              <li>Are travelling with elders or young children (no trek)</li>
              <li>Want time for Mana village, not a drive-by darshan</li>
              <li>Would rather not chase Badrinath hotels in peak season</li>
            </ul>
          </div>
          <div style={card}>
            <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: 14, marginBottom: 8 }}>👉 Look elsewhere if you</div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: '#334155', lineHeight: 1.9 }}>
              <li>Want Badrinath + Kedarnath — see <Link href="/do-dham-yatra" style={{ color: 'var(--teal)' }}>Do Dham Yatra</Link></li>
              <li>Want all four dhams — see <Link href="/char-dham-yatra" style={{ color: 'var(--teal)' }}>Char Dham Yatra</Link></li>
              <li>Want the five Badri shrines — see <Link href="/panch-badri-yatra" style={{ color: 'var(--teal)' }}>Panch Badri Yatra</Link></li>
              <li>Only need a cab — see <Link href="/haridwar-to-badrinath-cab" style={{ color: 'var(--teal)' }}>Haridwar to Badrinath cab</Link></li>
            </ul>
          </div>
        </div>

        <h2 style={h2}>Why book Badrinath with us</h2>
        <p style={p}>We are not an aggregator reselling your booking to the lowest bidder. Shiv Ganga Travels is a Haridwar family operator — the drivers, the Badrinath rooms and the on-road support are ours. That is why the price holds and the phone gets answered when a landslide changes the plan.</p>
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

        <div style={{ ...card, display: 'flex', gap: 14, alignItems: 'flex-start', marginTop: 20, background: 'var(--bg)' }}>
          <div style={{ flexShrink: 0, width: 46, height: 46, borderRadius: '50%', background: 'var(--navy)', color: '#FFD166', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>DM</div>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: 14 }}>Reviewed by Dhanesh Chandra Mishra</div>
            <div style={{ fontSize: 12.5, color: '#475569', lineHeight: 1.7, marginTop: 3 }}>Founder, Shiv Ganga Travels · retired Army officer with 15+ Char Dham seasons on these roads. Every itinerary, fare and date on this page is checked against how the route actually ran this season.</div>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <div style={{ color: '#FFD166', fontSize: 13, fontWeight: 700, marginBottom: 6 }}>🛕 Badrinath 2026 · Open till mid-November · Peak-week rooms fill early</div>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 10 }}>Get your free Badrinath quote</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 20 }}>Direct operator. Registration handled. A fixed quote back in about 2 hours — and ₹0 to ask.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={wa('Namaste! Please send me a Badrinath tour package quote for 2026.')} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 WhatsApp Us</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <h2 style={h2}>Badrinath tour package — FAQ</h2>
        {FAQ.map((f) => (
          <div key={f.q} style={{ marginBottom: 14 }}>
            <h3 style={{ ...h3, marginTop: 10 }}>{f.q}</h3>
            <p style={{ ...p, marginBottom: 4 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Plan the rest of your yatra</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Badrinath Yatra Guide', '/badrinath-yatra'], ['Haridwar → Badrinath Cab', '/haridwar-to-badrinath-cab'], ['How to Reach Badrinath', '/how-to-reach-badrinath'], ['Badrinath Temple', '/badrinath-temple'], ['Badrinath Hotels', '/badrinath-hotels'], ['Badrinath Weather', '/badrinath-weather'], ['Do Dham Yatra', '/do-dham-yatra'], ['Char Dham Yatra', '/char-dham-yatra'], ['Panch Badri Yatra', '/panch-badri-yatra']].map(([l, h]) => (
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
