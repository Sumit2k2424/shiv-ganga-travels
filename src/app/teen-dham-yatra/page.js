import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Teen Dham Yatra ${SITE.season} | From ₹11,600 | 3 Dham Package` },
  description: `Teen Dham Yatra ${SITE.season} from Haridwar — 7N/8D from ₹11,600/person. Pick the right 3 dhams, skip the Kedarnath trek. Direct operator, zero commission.`,
  keywords: ['teen dham yatra','teen dham yatra package','3 dham yatra package',`teen dham yatra ${SITE.season}`,'teen dham yatra from haridwar','teen dham yatra cost','teen dham package price','yamunotri gangotri badrinath package','gangotri kedarnath badrinath yatra','teen dham yatra itinerary'],
  alternates: { canonical: `${SITE.baseUrl}/teen-dham-yatra` },
  openGraph: {
    title: `Teen Dham Yatra ${SITE.season} — Which Three Dhams to Pick, from ₹11,600`,
    description: `Teen Dham Yatra ${SITE.season} from Haridwar. 7N/8D from ₹11,600. All four combinations compared, honest advice on which dham to drop. Zero commission.`,
    url: `${SITE.baseUrl}/teen-dham-yatra`, type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Teen Dham Yatra ${SITE.season} — 3 Dham Package from Haridwar` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Teen Dham Yatra ${SITE.season} — 3 Dham Package from ₹11,600`,
    description: 'Three dhams from Haridwar, 7N/8D from ₹11,600. All four combinations compared. Direct operator, zero commission.',
    images: [{ url: '/opengraph-image', alt: `Teen Dham Yatra ${SITE.season} — 3 Dham Package` }],
  },
};

/* ── The ten FAQs. Kept in one array so the accordion and the FAQPage schema
   can never drift apart — that split is how pages end up shipping schema for
   questions the page no longer answers. ─────────────────────────────────── */
const FAQS = [
  {
    q: 'What is Teen Dham Yatra and which three dhams does it cover?',
    a: 'Teen Dham Yatra means visiting three of the four Uttarakhand dhams instead of all four. The four are Yamunotri, Gangotri, Kedarnath and Badrinath. There is no fixed "official" set of three — you choose which one to leave out, and that single choice decides your route, your trekking load and your price. The most-booked version drops Kedarnath, because that removes the 16 km climb and opens the yatra to pilgrims who cannot walk it.',
  },
  {
    q: 'Which three dhams should I choose for Teen Dham Yatra?',
    a: 'Drop Kedarnath if anyone in your group cannot manage a 16 km mountain trek — that is the single biggest filter. Drop Yamunotri if you are short on days, because it sits at the far western end and costs you roughly two days of driving. Drop Gangotri if you want to save one day without losing a trek. Dropping Badrinath saves the least effort of the four, so we rarely recommend it.',
  },
  {
    q: 'How many days does Teen Dham Yatra take?',
    a: 'Seven nights and eight days from Haridwar for the standard road package. The combination that drops Yamunotri runs shorter at 6N/7D because it skips the western leg entirely. Anything advertised as Teen Dham in under six days is either helicopter-assisted or is cutting darshan time to the bone.',
  },
  {
    q: 'What is the cost of a Teen Dham Yatra package in 2026?',
    a: 'Our Teen Dham Yatra starts at ₹11,600 per person for 7N/8D from Haridwar on a shared Tempo Traveller, all-inclusive — vehicle, hotels on twin sharing, breakfast and dinner, darshan assistance and registration. A private Innova is ₹15,400. Adding the Kedarnath helicopter takes it to ₹19,900. Published rates from the large operators for the same three dhams run ₹23,000 to ₹41,900.',
  },
  {
    q: 'Can I do Teen Dham Yatra without the Kedarnath trek?',
    a: 'Yes, and it is the most common reason people book Teen Dham rather than Char Dham. The Yamunotri–Gangotri–Badrinath combination has no 16 km trek at all. Its only walk is the 6 km stretch from Janki Chatti to Yamunotri, and that one can be done by pony or palki. Badrinath temple is reachable by road right up to the steps.',
  },
  {
    q: 'Is registration mandatory for Teen Dham Yatra?',
    a: 'Yes. Every dham you enter needs the free Uttarakhand government registration, checked at police barriers on the way up. Three dhams means three registrations. It is free on the state portal and we complete it for everyone travelling with us, so nobody gets turned back at a checkpoint.',
  },
  {
    q: 'When do the temples open and close in 2026?',
    a: 'Gangotri and Yamunotri open 19 April 2026 on Akshaya Tritiya, Kedarnath 22 April and Badrinath 23 April. Closing runs 10–13 November 2026 around Bhai Dooj. Yamunotri and Gangotri close first, so a late-season Teen Dham that includes them needs to be booked before the first week of November.',
  },
  {
    q: 'Is Teen Dham Yatra suitable for senior citizens?',
    a: 'The Yamunotri–Gangotri–Badrinath route is one of the gentlest options in the whole Himalayan circuit. No 16 km trek, the highest overnight stop is Gangotri at 3,415 m, and Badrinath darshan is a short walk from the vehicle. We run this route slower for older groups — an extra night, shorter driving days. Carry a recent fitness certificate if anyone has a cardiac history.',
  },
  {
    q: 'What is the difference between Teen Dham and Do Dham Yatra?',
    a: 'Do Dham is two dhams, almost always Kedarnath and Badrinath, in 5N/6D from ₹8,200. Teen Dham is three in 7N/8D from ₹11,600. The jump is about two extra days and one more shrine. If you already have eight days free, Teen Dham is the better value per day on the road.',
  },
  {
    q: 'Can I add the Kedarnath helicopter to a Teen Dham package?',
    a: 'Yes. Helicopter shuttles run from Phata, Sersi and Guptkashi to Kedarnath — nine minutes each way instead of a five to seven hour climb. It costs about ₹8,000 per person round trip depending on the operator and season, and our helicopter-inclusive Teen Dham package is ₹19,900. Slots sell out early, so book it with the package rather than on arrival.',
  },
];

/* Real People-Also-Ask questions pulled from the SERP for "teen dham yatra
   package" — deliberately different from the FAQ block above so the two
   sections do not answer the same thing twice. */
const PAA = [
  { q: 'Is Teen Dham Yatra cheaper than Char Dham?', a: 'Yes, by roughly ₹2,300 per person on our rates — ₹11,600 against ₹13,900. The saving is smaller than most people expect, because the fixed costs of the trip (vehicle, driver, permits) barely change when you remove one shrine. What you really save is two days.' },
  { q: 'Which dham is the hardest to reach?', a: 'Kedarnath, by a wide margin. It is a 16 km climb from Gaurikund with roughly 1,500 m of ascent. Yamunotri is second at 6 km. Gangotri and Badrinath both have road access to within walking distance of the temple.' },
  { q: 'Can Teen Dham Yatra be done from Delhi?', a: 'Yes, but it adds a day at each end for the Delhi–Haridwar drive. Most operators quoting "ex-Delhi" simply bolt those two days on. Starting from Haridwar and taking a train or flight to Dehradun is usually cheaper and less tiring.' },
  { q: 'What is the best month for Teen Dham Yatra?', a: 'May, early June, and then late September through October. July and August are monsoon — landslides close the Gangotri and Kedarnath roads regularly and the mountain views vanish behind cloud. September after the rains clear is our own favourite window.' },
  { q: 'Do I need a medical certificate for Teen Dham Yatra?', a: 'Not for all three dhams, but Kedarnath has required health screening for pilgrims over a certain age in recent seasons, and a recent fitness certificate saves argument at the barrier. If your combination skips Kedarnath, this rarely comes up.' },
  { q: 'How much cash should I carry on Teen Dham Yatra?', a: 'Around ₹8,000–10,000 per person. Mobile network drops out above Uttarkashi and Guptkashi, UPI fails more often than it works, and ponies, palkis, prasad and the small dhabas are all cash. ATMs at Barkot and Joshimath run dry in peak season.' },
];

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Char Dham Yatra', item: `${SITE.baseUrl}/char-dham-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Teen Dham Yatra', item: `${SITE.baseUrl}/teen-dham-yatra` },
    ],
  };
  const trip = {
    '@context': 'https://schema.org', '@type': 'TouristTrip',
    name: `Teen Dham Yatra ${SITE.season} — Yamunotri, Gangotri & Badrinath`,
    description: `7N/8D Teen Dham Yatra from Haridwar covering three of the four Uttarakhand dhams. No 16 km Kedarnath trek on the standard route. AC vehicle, hotels, meals, darshan assistance and registration included. Direct operator since ${SITE.established}.`,
    url: `${SITE.baseUrl}/teen-dham-yatra`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    touristType: ['Pilgrims', 'Families', 'Senior citizens'],
    datePublished: SITE.lastUpdatedISO,
    dateModified: SITE.lastUpdatedISO,
    author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' },
    itinerary: {
      '@type': 'ItemList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Haridwar → Barkot' },
        { '@type': 'ListItem', position: 2, name: 'Barkot → Yamunotri darshan → Barkot' },
        { '@type': 'ListItem', position: 3, name: 'Barkot → Uttarkashi' },
        { '@type': 'ListItem', position: 4, name: 'Uttarkashi → Gangotri → Harsil' },
        { '@type': 'ListItem', position: 5, name: 'Harsil → Guptkashi via Tehri' },
        { '@type': 'ListItem', position: 6, name: 'Guptkashi → Joshimath → Badrinath' },
        { '@type': 'ListItem', position: 7, name: 'Badrinath darshan → Mana village' },
        { '@type': 'ListItem', position: 8, name: 'Rishikesh → Haridwar' },
      ],
    },
    provider: {
      '@type': 'TravelAgency', '@id': `${SITE.baseUrl}/#organization`,
      name: SITE.name, telephone: SITE.phone, url: SITE.baseUrl, image: `${SITE.baseUrl}/opengraph-image`,
      founder: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' },
    },
    offers: [
      { '@type': 'Offer', name: 'Teen Dham Standard 7N/8D', price: '11600', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: `${SITE.baseUrl}/teen-dham-yatra` },
      { '@type': 'Offer', name: 'Teen Dham Private 7N/8D', price: '15400', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: `${SITE.baseUrl}/teen-dham-yatra` },
      { '@type': 'Offer', name: 'Teen Dham Senior Special 8N/9D', price: '13800', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: `${SITE.baseUrl}/teen-dham-yatra` },
      { '@type': 'Offer', name: 'Teen Dham + Kedarnath Helicopter 7N/8D', price: '19900', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: `${SITE.baseUrl}/teen-dham-yatra` },
    ],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trip) }} />
  </>);
}

/* Shared cell styles — the tables below all use the same visual language as
   /do-dham-yatra so the two sibling pages read as one system. */
const TH = { padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 };
const TD = { padding: '10px 12px', color: '#475569', fontSize: 13 };
/* The WRAPPER scrolls, never the table itself — a table set to display:block
   loses header/column alignment on every phone. */
const SCROLL = { overflowX: 'auto', marginBottom: 24 };
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 560 };

const COMBOS = [
  {
    name: 'Yamunotri + Gangotri + Badrinath',
    drops: 'Kedarnath',
    days: '7N/8D',
    trek: '6 km (Yamunotri only)',
    price: '₹11,600',
    who: 'Seniors, families with children, anyone who cannot trek 16 km',
    pick: true,
  },
  {
    name: 'Gangotri + Kedarnath + Badrinath',
    drops: 'Yamunotri',
    days: '6N/7D',
    trek: '16 km (Kedarnath)',
    price: '₹11,900',
    who: 'Fit pilgrims short on time — saves the western leg',
    pick: false,
  },
  {
    name: 'Yamunotri + Kedarnath + Badrinath',
    drops: 'Gangotri',
    days: '7N/8D',
    trek: '16 km + 6 km',
    price: '₹12,400',
    who: 'Those who have already been to Gangotri',
    pick: false,
  },
  {
    name: 'Yamunotri + Gangotri + Kedarnath',
    drops: 'Badrinath',
    days: '7N/8D',
    trek: '16 km + 6 km',
    price: '₹11,900',
    who: 'Shaiva pilgrims who have done Badrinath before',
    pick: false,
  },
];

const ITINERARY = [
  { day: 'Day 1', route: 'Haridwar → Barkot', km: '220 km · 7–8 hrs', alt: '1,352 m', desc: 'Leave Haridwar early. The road runs through Rishikesh, then climbs past Chamba and Naugaon. You lose phone signal somewhere after Chamba and mostly do not get it back until Uttarkashi. Check in at Barkot, eat, sleep early — tomorrow is the trek day.' },
  { day: 'Day 2', route: 'Barkot → Yamunotri → Barkot', km: '36 km drive + 6 km trek each way', alt: '3,293 m', desc: 'Drive to Janki Chatti and start the 6 km walk. It is a steady climb, not a scramble — most people take three hours up. At the top, cook rice in the Surya Kund hot spring and take it back as prasad, offer puja at the Divya Shila slab, then darshan. Ponies and palkis are available the whole way if legs give out. Back to Barkot for the night.' },
  { day: 'Day 3', route: 'Barkot → Uttarkashi', km: '100 km · 4 hrs', alt: '1,158 m', desc: 'A short, easy driving day, deliberately. Visit the Vishwanath temple in Uttarakashi with its enormous iron trident — the town is a mountaineering base, so the shops here are the last decent place to buy warm layers or a walking stick before Gangotri.' },
  { day: 'Day 4', route: 'Uttarkashi → Gangotri → Harsil', km: '100 km · 5 hrs', alt: '3,415 m', desc: 'Leave with packed breakfast. The road follows the Bhagirathi through the gorge at Gangnani, where there is a hot sulphur kund worth twenty minutes. At Gangotri, the temple sits right by the river — the dip is short and shockingly cold. Then down to Harsil, an old deodar village with apple orchards, for the night. This is the prettiest overnight stop on the whole circuit and almost nobody schedules it.' },
  { day: 'Day 5', route: 'Harsil → Guptkashi (via Tehri)', km: '270 km · 8–9 hrs', alt: '1,319 m', desc: 'The long haul. You cross the Tehri dam reservoir, drop to Devprayag where the Bhagirathi and Alaknanda meet to become the Ganga, then run up the Alaknanda valley through Rudraprayag. Start at first light — this is not a day to leave late.', link: ['Devprayag confluence guide', '/devprayag'] },
  { day: 'Day 6', route: 'Guptkashi → Joshimath → Badrinath', km: '210 km · 7 hrs', alt: '3,133 m', desc: 'Through Chamoli and Joshimath — stop at the Narsingh temple, where the idol\'s wrist is said to be thinning, and when it breaks the Badrinath route is prophesied to close. Arrive Badrinath by evening. Bathe in Tapt Kund, the 45°C spring below the temple, then evening aarti.' },
  { day: 'Day 7', route: 'Badrinath darshan → Mana → Srinagar', km: '190 km', alt: '—', desc: '4 AM Bal Bhog puja, before the buses. Then Mana village, 3 km on: Vyas Gufa where the Mahabharata was dictated, Bhim Pul, and the point where the Saraswati disappears underground. Afternoon drive back down. Overnight Srinagar or Rudraprayag.' },
  { day: 'Day 8', route: 'Srinagar → Rishikesh → Haridwar', km: '160 km · 5 hrs', alt: '249 m', desc: 'Down the Alaknanda, second look at Devprayag from the other bank, brief stop at Rishikesh. Reach Haridwar by afternoon, in time for the evening Ganga aarti at Har Ki Pauri if you want it. Tour ends.' },
];

export default function TeenDhamYatra() {
  const waText = encodeURIComponent('Namaste! I want to book Teen Dham Yatra 2026. Please share details and help me pick the right 3 dhams.');

  return (
    <>
      <Schema />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            3 Dhams · 7N/8D · No 16 km trek
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Teen Dham Yatra {SITE.season} — Which Three Dhams to Pick, and What It Costs
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            3 Dham Yatra from Haridwar · <strong style={{ color: '#FFD166' }}>₹11,600/person</strong> · 7N/8D · all four combinations compared · zero commission
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 22 }}>
            {['🕉️ 3 of the 4 dhams', '🚶 No Kedarnath trek', '🎖️ 15 yrs · 50k pilgrims', '⭐ 4.7/5 · 54 reviews'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>💬 Book Now</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '13px 24px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb (visible trail matching BreadcrumbList schema) ─── */}
      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>Teen Dham Yatra</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Duration', '7N/8D'], ['Dhams', '3 of 4'], ['Longest trek', '6 km'], ['Highest point', '3,415 m'], ['Package from', '₹11,600/person'], ['Season', 'Apr 19 – Nov 2026']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Direct answer, first thing after the fact strip */}
        <p style={p}>
          <strong>Teen Dham Yatra means visiting three of Uttarakhand&apos;s four dhams instead of all four</strong> — and unlike Char Dham, there is no fixed list. You decide which one to leave out. Our 7N/8D package from Haridwar is ₹11,600 per person and drops Kedarnath, which removes the 16 km trek and makes the whole yatra possible for people who would otherwise have to sit out the hardest day. That one decision matters more than anything else on this page, so it is the first thing we deal with.
        </p>

        {/* ── What it is ───────────────────────────────────────────────── */}
        <h2 style={h2}>What Is Teen Dham Yatra?</h2>
        <AnswerBox>
          Teen Dham Yatra is a pilgrimage to any three of the four Uttarakhand dhams — Yamunotri,
          Gangotri, Kedarnath and Badrinath. It takes 7 nights and 8 days from Haridwar and starts at
          ₹11,600 per person all-inclusive. Which three you pick is your choice, and it changes the
          route, the trekking and the price.
        </AnswerBox>
        <p style={p}>
          The four Himalayan dhams sit on one long arc across Garhwal. Yamunotri is the westernmost, then Gangotri, then Kedarnath, and Badrinath at the eastern end near the Tibet border. Visiting all four in the traditional clockwise order is the <Link href="/char-dham-yatra">Char Dham Yatra</Link> — nine to ten days, two treks, roughly 1,600 km of mountain road. <Link href="/do-dham-yatra">Do Dham</Link> is two of them, usually Kedarnath and Badrinath.
        </p>
        <p style={p}>
          Teen Dham sits between the two, and it is the least well-explained of the three. Search for it and you will find operator after operator listing route permutations with prices attached — but not one of them tells you how to choose. That is the actual question. So here is the honest version, from fifteen seasons of routing these trips ourselves.
        </p>

        {/* ── THE differentiator: which dham to drop ───────────────────── */}
        <h2 style={h2}>Which Three Dhams Should You Drop?</h2>
        <p style={p}>
          Start from the geography, not from the deity. The circuit is a line running west to east, and every dham you keep or cut moves your route along that line. Once you see it that way the decision makes itself.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {[
            { title: 'Drop Kedarnath — if anyone in your group cannot trek', color: '#1D9E75', body: 'This is the big one. Kedarnath is a 16 km climb from Gaurikund with about 1,500 m of ascent, and there is no road. Pony, palki and helicopter all exist, but they cost extra and the pony ride is genuinely rough on a bad back. Cut Kedarnath and your hardest day becomes a 6 km walk to Yamunotri. This is the version we sell most, and it is not close.' },
            { title: 'Drop Yamunotri — if you are short on days', color: 'var(--navy)', body: 'Yamunotri is at the far western end. Reaching it and coming back eats roughly two days of driving that do not overlap with anything else on the route. Cut it and your yatra shortens to 6N/7D and starts from Uttarkashi instead of Barkot. You keep the Kedarnath trek, so only do this if your group can walk.' },
            { title: 'Drop Gangotri — if you want one day back without losing a trek', color: '#8B5CF6', body: 'Gangotri is a 100 km spur off Uttarkashi. Skipping it saves a day and no walking, because the temple has road access anyway. The catch is that Gangotri is arguably the most beautiful of the four — the temple sits right on the Bhagirathi with Sudarshan peak behind it. People who cut it to save a day are the ones who most often tell us afterwards that they regret it.' },
            { title: 'Drop Badrinath — rarely worth it', color: '#DC2626', body: 'Badrinath is the most road-accessible of the four. You drive to within a few hundred metres of the temple. Cutting it saves you distance but almost no effort, and you lose Mana village and Tapt Kund with it. The only sound reason is that you have already been.' },
          ].map(c => (
            <div key={c.title} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))', borderLeft: `4px solid ${c.color}` }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: c.color, marginBottom: 6 }}>{c.title}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75 }}>{c.body}</div>
            </div>
          ))}
        </div>

        <ExpertNote variant="insider">
          Here is the part nobody puts in writing. Almost every pilgrim who asks us to build a Teen Dham is really asking one question — can we do this without the Kedarnath climb? The answer is yes, and you do not lose spiritual standing for it. There is no scriptural rule that three dhams count less than four, and dropping the one your body cannot manage is not a shortcut. It is planning. I have watched too many families push a seventy-year-old up that trail because a brochure made them feel they had to.
        </ExpertNote>

        {/* ── Combination table ────────────────────────────────────────── */}
        <h2 style={h2}>The Four Teen Dham Combinations Compared</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Combination', 'Drops', 'Days', 'Trekking', 'From', 'Best for'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {COMBOS.map((c, i) => (
                <tr key={c.name} style={{ borderBottom: '1px solid hsl(var(--border))', background: c.pick ? '#F0FDF4' : (i % 2 === 0 ? '#fff' : 'var(--bg)') }}>
                  <td style={{ ...TD, fontWeight: c.pick ? 800 : 600, color: 'var(--navy)' }}>{c.name}{c.pick && <span style={{ display: 'block', fontSize: 11, color: '#1D9E75', fontWeight: 700 }}>Most booked</span>}</td>
                  <td style={TD}>{c.drops}</td>
                  <td style={TD}>{c.days}</td>
                  <td style={TD}>{c.trek}</td>
                  <td style={{ ...TD, fontWeight: 800, color: '#1D9E75', fontSize: 15 }}>{c.price}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{c.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 24 }}>
          Prices are per person on a shared Tempo Traveller, all-inclusive, ex-Haridwar. The itinerary below follows the most-booked combination — Yamunotri, Gangotri and Badrinath.
        </p>

        {/* ── Itinerary ────────────────────────────────────────────────── */}
        <h2 style={h2}>Teen Dham Yatra Itinerary — 7N/8D from Haridwar</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {ITINERARY.map(item => (
            <div key={item.day} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))', borderLeft: '4px solid var(--navy)' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
                <span style={{ background: 'var(--navy)', color: '#FFD166', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>{item.day}</span>
                <strong style={{ fontSize: 14, color: 'var(--navy)' }}>{item.route}</strong>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{item.km}</span>
                {item.alt !== '—' && <span style={{ fontSize: 12, color: '#1D9E75', fontWeight: 600 }}>↑ {item.alt}</span>}
              </div>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              {item.link && (
                <Link href={item.link[1]} style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--teal)', textDecoration: 'none', display: 'inline-block', marginTop: 8 }}>
                  {item.link[0]} →
                </Link>
              )}
            </div>
          ))}
        </div>
        <p style={p}>
          Two notes on this itinerary. First, Day 5 is long — nine hours of driving is not fun, and there is no way around it because the Bhagirathi and Alaknanda valleys only connect low down at Tehri. Operators who hide this by splitting it across two days are being honest with you; ones who claim it takes five hours are not. Second, the Harsil overnight on Day 4 is a deliberate choice of ours. Most itineraries turn straight back to Uttarkashi. Harsil costs nothing extra and it is the best night on the trip.
        </p>

        {/* ── Pricing ──────────────────────────────────────────────────── */}
        <h2 style={h2}>Teen Dham Yatra Package Price {SITE.season}</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Package', 'Duration', 'Price/person', 'Vehicle', 'Best for'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Teen Dham Standard', '7N/8D', '₹11,600', 'Shared Tempo Traveller', 'Solo travellers, groups'],
                ['Teen Dham Private', '7N/8D', '₹15,400', 'Private Innova Crysta', 'Couples, small families'],
                ['Teen Dham Senior Special', '8N/9D', '₹13,800', 'Private Innova, slower pace', '60+ pilgrims'],
                ['Teen Dham + Kedarnath Heli', '7N/8D', '₹19,900', 'Innova + Kedarnath helicopter', 'All four dhams without the climb'],
              ].map(([pkg, dur, price, veh, best], i) => (
                <tr key={pkg} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{pkg}</td>
                  <td style={TD}>{dur}</td>
                  <td style={{ ...TD, fontWeight: 800, color: '#1D9E75', fontSize: 15 }}>{price}</td>
                  <td style={TD}>{veh}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 24 }}>
          All rates include AC vehicle, hotels on twin sharing, breakfast and dinner, driver allowance, tolls, parking, darshan assistance and government registration. GST included. Ponies and palkis at Yamunotri are extra. Zero commission — you are booking the operator, not an agent.
        </p>

        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 10, marginTop: 8 }}>How this compares to published rates</h3>
        <p style={p}>
          The Teen Dham prices you see from the big portals are real quotes — you are simply paying for a brand and a chain of intermediaries between you and the driver who actually takes you up. Here is the same three-dham yatra across published 2026 rates.
        </p>
        <div style={{ ...SCROLL, background: '#fff', borderRadius: 12, border: '1px solid hsl(var(--border))' }}>
          <table style={{ ...TABLE, minWidth: 480 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Operator', 'Teen Dham 2026 from', 'Booking'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Shiv Ganga Travels (us — direct operator)', '₹11,600 / person', 'Direct, zero commission'],
                ['Shrine Yatra (tempo, 7D/6N)', '₹17,500 / person', 'Agency'],
                ['The Vacation Holidays (standard tier)', '₹14,000–22,900 / person', 'Agency'],
                ['The Vacation Holidays (premium/luxury)', '₹23,000–41,900 / person', 'Agency'],
                ['Kishore Travels (Haridwar)', '₹19,500–22,500 / person', 'Agency'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i === 0 ? '#F0FDF4' : (i % 2 === 0 ? '#fff' : 'var(--bg)') }}>
                  <td style={{ ...TD, fontWeight: i === 0 ? 800 : 600, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={{ ...TD, fontWeight: 800, color: i === 0 ? '#1D9E75' : '#475569', fontSize: i === 0 ? 15 : 13.5 }}>{r[1]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 24 }}>
          Competitor figures are their own published 2026 starting prices, read from their websites in August 2026. We have run this route from Haridwar since {SITE.established} — same hotels, same temples, same registration handled, without the markup.
        </p>

        {/* ── Inline conversion surface (the smaller of the two on this page) ── */}
        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Not sure which three dhams suit your group?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>Tell us the ages and how many days you have. We will send back one routed itinerary, not a brochure.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        {/* ── Teen vs Do vs Char ───────────────────────────────────────── */}
        <h2 style={h2}>Teen Dham vs Do Dham vs Char Dham</h2>
        <p style={p}>
          People arrive at this page having already half-decided between two of the three. The differences are smaller than the marketing suggests, and they come down to days available and legs available.
        </p>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Yatra', 'Dhams', 'Duration', 'Treks', 'From', 'Choose it when'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Do Dham', 'Kedarnath, Badrinath', '5N/6D', '16 km', '₹8,200', 'You have under a week and can walk'],
                ['Teen Dham', 'Any 3 of 4', '7N/8D', '6 km or 16 km', '₹11,600', 'You have 8 days, or need to skip a trek'],
                ['Char Dham', 'All 4', '9N/10D', '16 km + 6 km', '₹13,900', 'You have 10 days and want the full circuit'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i === 1 ? '#F0FDF4' : (i % 2 === 0 ? '#fff' : 'var(--bg)') }}>
                  <td style={{ ...TD, fontWeight: i === 1 ? 800 : 600, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={TD}>{r[1]}</td>
                  <td style={TD}>{r[2]}</td>
                  <td style={TD}>{r[3]}</td>
                  <td style={{ ...TD, fontWeight: 800, color: '#1D9E75', fontSize: 15 }}>{r[4]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          Look at the price column and you will notice the gaps are small — about ₹2,300 between each step. That is because the expensive parts of a yatra are the vehicle, the driver and the permits, and those barely move when you add or remove a shrine. What you are really buying with each step up is days. If you have ten days free, do the <Link href="/char-dham-yatra">full Char Dham</Link>; the marginal cost is trivial. If you have eight, Teen Dham. If your group cannot trek, Teen Dham regardless of how many days you have.
        </p>

        {/* ── Dates & registration ─────────────────────────────────────── */}
        <h2 style={h2}>2026 Opening Dates, Closing Dates and Registration</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Dham', 'Opens 2026', 'Closes 2026', 'Altitude', 'Access'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Yamunotri', '19 April', '11 November', '3,293 m', '6 km trek from Janki Chatti'],
                ['Gangotri', '19 April', '10 November', '3,415 m', 'Road to temple'],
                ['Kedarnath', '22 April', '11 November', '3,583 m', '16 km trek from Gaurikund'],
                ['Badrinath', '23 April', '13 November', '3,133 m', 'Road to temple'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{r[1]}</td>
                  <td style={TD}>{r[2]}</td>
                  <td style={TD}>{r[3]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          Registration is compulsory and free. Every pilgrim needs it for each dham they enter, and it is checked at police barriers on the way up — no registration, no passage, and arguing at a barrier at 2,000 m is a losing game. Do it on the state portal at{' '}
          <a href="https://registrationandtouristcare.uk.gov.in/" target="_blank" rel="noopener noreferrer">registrationandtouristcare.uk.gov.in</a>, or let us handle it, which we do for everyone booked with us. Temple timings and puja bookings come from the{' '}
          <a href="https://badrinath-kedarnath.gov.in/" target="_blank" rel="noopener noreferrer">Shri Badarinath Kedarnath Temple Committee</a>, and season advisories are published by{' '}
          <a href="https://uttarakhandtourism.gov.in/" target="_blank" rel="noopener noreferrer">Uttarakhand Tourism</a>. Those three are the only sources worth trusting on dates — everything else, including this page, is downstream of them.
        </p>
        <p style={p}>
          On timing: May and early June are peak, which means crowds and full hotels but reliable roads. July and August are monsoon and we advise against them — the Gangotri road in particular closes for landslides most seasons. Late September through October is the window we recommend. The air is clear after the rains, the crowds thin out, and the peaks are visible almost every morning. Detail on all of this is in our <Link href="/blog/best-time-char-dham">best time to visit guide</Link> and the <Link href="/blog/char-dham-yatra-closing-dates-2026">2026 closing dates</Link> page.
        </p>

        {/* ── Inclusions / what goes wrong ─────────────────────────────── */}
        <h2 style={h2}>What&apos;s Included, What&apos;s Not, and What Actually Goes Wrong</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 12, marginBottom: 24 }}>
          {[
            {
              title: 'Included',
              color: '#1D9E75',
              bg: 'rgba(29,158,117,0.06)',
              points: ['AC vehicle with driver for the full circuit', 'Hotels on twin sharing at every halt', 'Breakfast and dinner daily', 'Government registration for all three dhams', 'Darshan assistance at each temple', 'Tolls, parking, driver allowance, state permits', 'GST'],
            },
            {
              title: 'Not included',
              color: '#DC2626',
              bg: 'rgba(220,38,38,0.05)',
              points: ['Lunch (we stop at dhabas — budget ₹200–300/day)', 'Pony or palki at Yamunotri (₹1,800–3,000 each way)', 'Kedarnath helicopter, if you add that combination', 'Personal puja, VIP darshan tickets, prasad', 'Travel insurance', 'Anything caused by a road closure or landslide delay'],
            },
          ].map(card => (
            <div key={card.title} style={{ background: card.bg, borderRadius: 12, padding: 16, border: `1px solid ${card.color}`, borderTop: `3px solid ${card.color}` }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: card.color, marginBottom: 12 }}>{card.title}</div>
              {card.points.map(pt => (
                <div key={pt} style={{ display: 'flex', gap: 8, fontSize: 13.5, color: '#334155', padding: '5px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ color: card.color, fontWeight: 700, flexShrink: 0 }}>→</span>{pt}
                </div>
              ))}
            </div>
          ))}
        </div>

        <p style={p}>
          Now the part most operators leave out. Things go wrong on this route, and they go wrong in predictable ways.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            { t: 'Road closures on the Gangotri highway', d: 'The stretch between Uttarkashi and Gangotri is cut into unstable rock and closes for hours after heavy rain. It usually reopens the same day. Build a buffer day if you are catching a flight home — we have seen pilgrims miss departures because they planned to land in Delhi the evening they came off the mountain.' },
            { t: 'Hotels at Badrinath are basic, everywhere', d: 'Badrinath is at 3,133 m in a place where construction is hard and the season is seven months long. There is no luxury tier there worth paying for, whatever the brochure calls it. Anyone selling you a "premium" Badrinath room is selling you the same building with a different label.' },
            { t: 'The network dies and stays dead', d: 'From Barkot to Uttarkashi and again above Guptkashi, expect no usable signal. Tell your family before you go rather than from the road. Download offline maps and carry cash — UPI does not work where there is no data.' },
            { t: 'Altitude hits people who were fine last year', d: 'Gangotri at 3,415 m and Badrinath at 3,133 m are high enough to cause headaches and breathlessness in perfectly fit people. It is not correlated with age or fitness the way you would expect. Go slow on the first day at altitude, drink more water than feels necessary, and read up on the symptoms before you travel.' },
          ].map(x => (
            <div key={x.t} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 6 }}>{x.t}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75 }}>{x.d}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13.5, color: '#64748b', marginBottom: 28 }}>
          More on the last one in our <Link href="/altitude-sickness-char-dham">altitude sickness guide</Link>, and on what to carry in the <Link href="/char-dham-yatra-checklist">yatra checklist</Link>.
        </p>

        {/* ── Where we operate from (map — no competitor has one) ───────── */}
        <h2 style={h2}>Where We Operate From</h2>
        <p style={p}>
          Every Teen Dham departure starts at our office in Bhupatwala, Haridwar, a few minutes from Shantikunj and about ten from Har Ki Pauri. If you are already in town, come in and look at the vehicles before you pay for one — we would rather you did.
        </p>
        <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 12, border: '1px solid hsl(var(--border))' }}>
          <GoogleMapEmbed height={320} />
        </div>
        <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 28 }}>
          {SITE.address} · <a href={`tel:${SITE.phone}`}>{SITE.phone}</a> · <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <h2 style={h2}>Teen Dham Yatra — Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {FAQS.map(f => (
            <details key={f.q} style={{ background: '#fff', border: '1px solid hsl(var(--border))', borderRadius: 10, padding: '12px 16px' }}>
              <summary style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', cursor: 'pointer', lineHeight: 1.5 }}>{f.q}</summary>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.8, margin: '10px 0 0' }}>{f.a}</p>
            </details>
          ))}
        </div>

        {/* ── Author (0/7 competitors have one) ────────────────────────── */}
        <div style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', borderRadius: 12, padding: '18px 20px', marginBottom: 32, display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--navy)', color: '#FFD166', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 17, flexShrink: 0 }}>DM</div>
          <div style={{ flex: '1 1 240px' }}>
            <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)' }}>Dhanesh Chandra Mishra</div>
            <div style={{ fontSize: 12.5, color: 'var(--teal)', fontWeight: 600, marginBottom: 8 }}>Founder &amp; Director, {SITE.name}</div>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>
              Retired Indian Army officer. Founded {SITE.name} in {SITE.established} and has routed Char Dham, Teen Dham and Do Dham itineraries for fifteen seasons, personally driving the Gangotri and Badrinath roads hundreds of times. The routing advice on this page — including the Harsil overnight and the case against dropping Gangotri — is his.{' '}
              <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        {/* ── Footer conversion surface (the larger of the two) ─────────── */}
        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Book Teen Dham Yatra {SITE.season} — ₹11,600/person</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Registration handled · 7N/8D all-inclusive</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Book on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        {/* ── Internal link mesh ───────────────────────────────────────── */}
        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>The three dhams on this route</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
            {[['Yamunotri Yatra', '/yamunotri-yatra'], ['Yamunotri Temple', '/yamunotri-temple'], ['How to Reach Yamunotri', '/how-to-reach-yamunotri'], ['Gangotri Yatra', '/gangotri-yatra'], ['Gangotri Temple', '/gangotri-temple'], ['How to Reach Gangotri', '/how-to-reach-gangotri'], ['Badrinath Yatra', '/badrinath-yatra'], ['Badrinath Temple', '/badrinath-temple'], ['How to Reach Badrinath', '/how-to-reach-badrinath'], ['Badrinath VIP Darshan', '/badrinath-vip-darshan'], ['Harsil Valley', '/harsil-valley'], ['Mana Village', '/blog/mana-village-badrinath']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>

          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Other yatra combinations</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
            {[['Char Dham Yatra', '/char-dham-yatra'], ['Do Dham Yatra', '/do-dham-yatra'], ['Ek Dham Yatra', '/ek-dham-yatra'], ['Kedarnath Yatra', '/kedarnath-yatra'], ['Panch Kedar Yatra', '/panch-kedar-yatra'], ['Panch Badri Yatra', '/panch-badri-yatra'], ['Char Dham by Helicopter', '/char-dham-helicopter'], ['All Packages', '/packages'], ['Char Dham from Haridwar', '/char-dham-yatra-from-haridwar'], ['Char Dham from Delhi', '/char-dham-yatra-from-delhi'], ['Winter Char Dham', '/winter-char-dham-yatra'], ['Do Dham vs Char Dham', '/blog/char-dham-vs-do-dham'], ['Types of Packages', '/blog/types-of-char-dham-yatra-packages']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>

          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Before you book</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
            {[['Registration Guide', '/blog/char-dham-yatra-registration'], ['Cost Breakdown', '/blog/char-dham-yatra-cost'], ['Opening Dates 2026', '/blog/char-dham-yatra-opening-dates-2026'], ['Packing List', '/blog/char-dham-yatra-packing-list'], ['Best Time to Go', '/blog/best-time-char-dham'], ['Road Conditions 2026', '/blog/char-dham-yatra-road-conditions-2026'], ['Senior Citizens', '/blog/senior-citizen-char-dham'], ['First-Timer Guide', '/blog/char-dham-yatra-first-timer-guide'], ['Medical Certificate', '/blog/char-dham-yatra-medical-certificate'], ['Yatra Scams', '/char-dham-yatra-scams'], ['Cost Calculator', '/char-dham-yatra-cost-calculator'], ['Route Map', '/char-dham-yatra-route-map'], ['Emergency Contacts', '/char-dham-yatra-emergency-contacts'], ['Mobile Network', '/char-dham-yatra-mobile-network'], ['Hotels on Route', '/char-dham-hotels'], ['Haridwar Hotels', '/haridwar-hotels'], ['Cab Booking', '/char-dham-yatra-cab-booking'], ['How to Choose an Operator', '/how-to-choose-char-dham-tour-operator'], ['Contact Us', '/contact'], ['Reviews', '/review']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
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
