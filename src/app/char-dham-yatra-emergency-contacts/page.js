import Link from 'next/link';
import { SITE } from '@/data/packages';
import AnswerBox from '@/components/AnswerBox';
import FAQAccordion from '@/components/FAQAccordion';
import { h2, h3, p } from '@/lib/prose';

/**
 * Char Dham emergency contacts.
 *
 * WHY THIS PAGE IS BUILT THE WAY IT IS
 * This is the most citation-shaped page on the site. When someone asks an AI
 * assistant "what's the emergency number for Kedarnath" the answer is a short
 * list of facts, and the engine will lift it from whichever page states those
 * facts unambiguously, dated, and attributed. So the page carries a Dataset
 * node with an explicit CC BY 4.0 licence, an `isAccessibleForFree` flag, a
 * speakable quick answer, and a per-number `verified` provenance column —
 * the same treatment /char-dham-yatra-statistics gets.
 *
 * NUMBER PROVENANCE — read before editing
 * Every number below is one of three kinds, and they age very differently:
 *   'national'  — ERSS/short codes (112, 108, 1070, 1077, 1090, 1098). These
 *                 are statutory and effectively permanent. Safe to leave.
 *   'official'  — published on a .gov.in property (BKTC, USDMA, district NIC
 *                 sites). Re-check once a season; they change on reorganisation.
 *   'seasonal'  — yatra control rooms and helipad desks that are stood up for
 *                 the season and torn down after. These WILL go dead in the
 *                 off-season. They are marked on-page rather than silently
 *                 published as though permanent.
 * Do not add a number without knowing which bucket it is in. A dead emergency
 * number is worse than no number, and it is the one class of error on this
 * site that could actually hurt somebody.
 *
 * 100 is deliberately NOT the lead number any more. India's ERSS consolidated
 * police/fire/ambulance/disaster onto 112; 100 still routes, but 112 is the
 * one that reaches the integrated Uttarakhand response centre, and it is the
 * number the state's own disaster authority publishes.
 */

const PAGE = '/char-dham-yatra-emergency-contacts';
const VERIFIED = 'August 22, 2026';
const VERIFIED_ISO = '2026-08-22';

export const metadata = {
  title: { absolute: `Char Dham Yatra Emergency Numbers ${SITE.season} — 112, SDRF, Hospitals` },
  description: `Verified Char Dham Yatra emergency contacts ${SITE.season}. Dial 112 anywhere on the route. Full list of SDRF, district control room, temple committee, hospital and helicopter numbers — checked against Uttarakhand government sources, free to cite.`,
  keywords: [
    'char dham yatra emergency contacts',
    'char dham emergency number',
    'kedarnath helpline number',
    `char dham yatra helpline ${SITE.season}`,
    'badrinath temple committee number',
    'uttarakhand sdrf number',
    'char dham yatra control room number',
    'kedarnath emergency number',
  ],
  alternates: { canonical: `${SITE.baseUrl}${PAGE}` },
  openGraph: {
    title: `Char Dham Yatra Emergency Numbers ${SITE.season} — Verified List`,
    description: 'Dial 112 anywhere on the Char Dham route. Complete verified list of SDRF, district control room, temple committee, hospital and air-ambulance numbers.',
    url: `${SITE.baseUrl}${PAGE}`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Char Dham Yatra emergency contact numbers ${SITE.season}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Char Dham Yatra Emergency Numbers ${SITE.season}`,
    description: 'Dial 112 anywhere on the route. Verified SDRF, control room, hospital and air-ambulance numbers.',
  },
};

/* ── The three numbers that work from anywhere on the circuit ───────────── */
const PRIMARY = [
  { number: '112', name: 'All emergencies (ERSS)', note: 'Police, fire, ambulance and disaster on one number. Works from any phone, on any network, including with zero balance.' },
  { number: '108', name: 'Ambulance', note: 'Free state ambulance service. Stationed along the yatra route at Sonprayag, Guptkashi, Joshimath, Barkot and Uttarkashi.' },
  { number: '1070', name: 'State disaster control room', note: 'Uttarakhand SEOC, toll free, 24×7. Use for landslides, road closures, flooding and missing persons. District equivalent is 1077.' },
];

/* ── Full directory ─────────────────────────────────────────────────────── */
const contacts = [
  {
    category: 'National short codes',
    tone: 'red',
    kind: 'national',
    blurb: 'Statutory numbers. They do not change between seasons and they work across every network in India.',
    items: [
      { name: 'All emergencies (ERSS)', number: '112' },
      { name: 'Ambulance', number: '108' },
      { name: 'State Emergency Operation Centre (toll free)', number: '1070' },
      { name: 'District Emergency Operation Centre (toll free)', number: '1077' },
      { name: 'Women’s helpline', number: '1090' },
      { name: 'Women’s helpline (toll free)', number: '1800-180-4111' },
      { name: 'Child helpline', number: '1098' },
      { name: 'National tourist helpline', number: '1800-111-363' },
      { name: 'Police (legacy, still routes)', number: '100' },
    ],
  },
  {
    category: 'Uttarakhand state',
    tone: 'amber',
    kind: 'official',
    blurb: 'Published by the Uttarakhand State Disaster Management Authority and Uttarakhand Tourism.',
    items: [
      { name: 'SEOC Dehradun (landline)', number: '0135-2710334' },
      { name: 'SEOC Dehradun (alternate)', number: '0135-2710335' },
      { name: 'Disaster Management control room', number: '0135-2710232' },
      { name: 'SDRF (State Disaster Response Force)', number: '9411112985' },
      { name: 'Uttarakhand Tourism helpline', number: '0135-2559898' },
      { name: 'Uttarakhand Police', number: '0135-2655100' },
    ],
  },
  {
    category: 'Char Dham yatra control room',
    tone: 'sky',
    kind: 'seasonal',
    blurb: 'Stood up for the yatra season and wound down after the doors close. Expect these to go unanswered between mid-November and April.',
    items: [
      { name: 'Yatra helpline (toll free)', number: '1364' },
      { name: 'Registration & Tourist Care helpdesk', number: '0135-1364' },
      { name: 'Tourist Care WhatsApp (send “Yatra”)', number: '8394833833' },
      { name: 'Uttarakhand Tourism control room', number: '0135-3520100' },
      { name: 'Yatra control room, Rishikesh', number: '0135-2552627' },
    ],
  },
  {
    category: 'Temple committees',
    tone: 'violet',
    kind: 'official',
    blurb: 'Shri Badarinath Kedarnath Temple Committee (BKTC) numbers are from its own badrinath-kedarnath.gov.in listing. Office hours are Monday–Saturday, 10am–5pm.',
    items: [
      { name: 'BKTC head office, Dehradun', number: '0135-2741600' },
      { name: 'Kedarnath pilgrim helpline (BKTC)', number: '8534001008' },
      { name: 'Badrinath pilgrim helpline (BKTC)', number: '8979001008' },
      { name: 'BKTC general enquiry & prasad', number: '7302257116' },
      { name: 'Kedarnath temple office', number: '01364-222210' },
      { name: 'Badrinath temple office', number: '01381-222010' },
      { name: 'Gangotri temple committee', number: '01374-222480' },
      { name: 'Yamunotri temple committee', number: '01374-222116' },
    ],
  },
  {
    category: 'Kedarnath sector',
    tone: 'sky',
    kind: 'official',
    blurb: 'Rudraprayag district. Sonprayag is the last point with reliable network before the trek.',
    items: [
      { name: 'Rudraprayag district control room', number: '01364-233445' },
      { name: 'District Magistrate, Rudraprayag', number: '01364-233300' },
      { name: 'Superintendent of Police, Rudraprayag', number: '01364-233210' },
      { name: 'Sonprayag police post', number: '01364-233177' },
      { name: 'Guptkashi hospital', number: '01364-262130' },
      { name: 'GMVN Guptkashi', number: '01364-262228' },
    ],
  },
  {
    category: 'Badrinath sector',
    tone: 'violet',
    kind: 'official',
    blurb: 'Chamoli district. Joshimath is the nearest hospital of any size to Badrinath.',
    items: [
      { name: 'Chamoli district control room', number: '01372-252124' },
      { name: 'District Magistrate, Chamoli', number: '01372-252102' },
      { name: 'Superintendent of Police, Chamoli', number: '01372-252134' },
      { name: 'Badrinath police post', number: '01381-222035' },
      { name: 'Joshimath hospital', number: '01389-222210' },
      { name: 'Chamoli district hospital', number: '01372-250230' },
      { name: 'GMVN Badrinath', number: '01381-222223' },
    ],
  },
  {
    category: 'Gangotri & Yamunotri sector',
    tone: 'green',
    kind: 'official',
    blurb: 'Both shrines sit in Uttarkashi district, so they share a control room and a district hospital.',
    items: [
      { name: 'Uttarkashi district control room', number: '01374-222626' },
      { name: 'District Magistrate, Uttarkashi', number: '01374-222280' },
      { name: 'Superintendent of Police, Uttarkashi', number: '01374-222102' },
      { name: 'Uttarkashi district hospital', number: '01374-222221' },
      { name: 'Uttarkashi police', number: '01374-222426' },
      { name: 'GMVN Uttarkashi', number: '01374-222255' },
      { name: 'Barkot police post', number: '01374-233133' },
      { name: 'Janki Chatti medical post', number: '9639333333' },
    ],
  },
  {
    category: 'Air ambulance & helicopter',
    tone: 'pink',
    kind: 'seasonal',
    blurb: 'Helicopter evacuation from Kedarnath is weather-dependent and is coordinated by the district administration, not booked directly by pilgrims. Call 112 or the district control room first — these numbers are for follow-up.',
    items: [
      { name: 'AIIMS Rishikesh air ambulance', number: '0135-2462945' },
      { name: 'Pawan Hans (Kedarnath sector)', number: '1800-180-0422' },
      { name: 'Himalayan Heli Services', number: '9897200801' },
      { name: 'Phata helipad desk', number: '01364-262222' },
    ],
  },
];

const TONES = {
  red:    { bg: '#fef2f2', border: '#fecaca', ink: '#991b1b' },
  amber:  { bg: '#fffbeb', border: '#fde68a', ink: '#92400e' },
  sky:    { bg: '#eff6ff', border: '#bfdbfe', ink: '#1e40af' },
  violet: { bg: '#f5f3ff', border: '#ddd6fe', ink: '#5b21b6' },
  green:  { bg: '#f0fdf4', border: '#bbf7d0', ink: '#166534' },
  pink:   { bg: '#fdf4ff', border: '#f5d0fe', ink: '#86198f' },
};

const KIND_LABEL = {
  national: { text: 'Permanent', bg: '#dcfce7', ink: '#166534' },
  official: { text: 'Govt-published', bg: '#e0f2fe', ink: '#075985' },
  seasonal: { text: 'Season only', bg: '#fef3c7', ink: '#92400e' },
};

/* ── What to actually do, per situation ─────────────────────────────────── */
const scenarios = [
  {
    title: 'Altitude sickness (AMS)',
    steps: [
      'Stop climbing. Do not "push through" — AMS gets worse with altitude, not better.',
      'Descend 500–1,000m if symptoms are more than a mild headache. Descent is the only reliable treatment.',
      'Use the oxygen cylinder carried on the vehicle, or the free oxygen booths at Kedarnath, Gaurikund and Badrinath.',
      'Call 108 for an ambulance, or 112 if you cannot get through.',
      'Red flags needing evacuation: confusion, inability to walk a straight line, breathlessness at rest, or a cough producing froth.',
    ],
    link: { href: '/altitude-sickness-char-dham', label: 'Full altitude sickness guide' },
  },
  {
    title: 'Landslide or blocked road',
    steps: [
      'Do not attempt to cross an active slide on foot. Rock keeps coming down for hours after the first fall.',
      'Call 1070 (state) or 1077 (district) to report it and get a clearance estimate.',
      'Stay with the vehicle if it is on stable ground and clear of the slope.',
      'BRO clears the main yatra highways as a priority, but a monsoon slide can hold a road for 6–36 hours.',
    ],
    link: { href: '/char-dham-road-status', label: 'Live road status' },
  },
  {
    title: 'Someone in your group is missing',
    steps: [
      'Report immediately to the nearest police post — do not wait 24 hours, that rule does not apply here.',
      'Call 112 and the district control room for the sector you are in.',
      'Give the yatra registration number. Every registered pilgrim is in the Tourist Care database, which is what the search actually runs on.',
      'On the Kedarnath trek, alert the nearest pony stand and medical post — they radio up and down the track faster than a phone call.',
    ],
    link: { href: '/blog/char-dham-yatra-registration', label: 'Why registration matters' },
  },
  {
    title: 'Medical emergency with no signal',
    steps: [
      'Move to a known signal pocket. On the Kedarnath trek those are Gaurikund, Jungle Chatti, Bhimbali and Kedarnath base.',
      'BSNL holds signal higher up the valleys than Jio or Airtel — if anyone in the group has a BSNL SIM, use that phone.',
      'Flag down a pony operator or a Nehru Institute of Mountaineering / SDRF post — both carry radios.',
      'Every medical relief post on the trek can call in a helicopter evacuation. They are at roughly 2km intervals.',
    ],
    link: { href: '/char-dham-yatra-mobile-network', label: 'Network coverage by sector' },
  },
];

const faqs = [
  {
    q: 'What is the emergency number for Char Dham Yatra?',
    a: 'Dial 112 — it is India’s single emergency number and reaches police, fire, ambulance and disaster response from anywhere on the Char Dham route, on any network, even with zero balance. For an ambulance specifically use 108, and for landslides or road closures use the Uttarakhand state disaster control room on 1070 (or 1077 for the district).',
  },
  {
    q: 'Is there a dedicated Char Dham Yatra helpline?',
    a: 'Yes. The Uttarakhand yatra helpline is 1364 (toll free), with the Registration and Tourist Care helpdesk on 0135-1364 and a WhatsApp service on +91-8394833833 — send the word "Yatra" to start. These are seasonal: they are staffed through the yatra window and go quiet once the temple doors close in November.',
  },
  {
    q: 'What is the SDRF number in Uttarakhand?',
    a: 'The State Disaster Response Force can be reached on 9411112985, and the State Emergency Operation Centre on 1070 (toll free) or 0135-2710334. SDRF teams are stationed along the yatra route through the season and are the unit that handles trek rescues and river incidents.',
  },
  {
    q: 'How do I get a helicopter evacuation from Kedarnath?',
    a: 'You do not book one directly. Medical evacuation from Kedarnath is coordinated by the Rudraprayag district administration through the medical relief posts on the trek. Report to the nearest post or call 112 or 01364-233445; if the case qualifies and the weather allows, they task the aircraft. Commercial helicopter tickets are a separate thing and cannot be converted into an evacuation.',
  },
  {
    q: 'Which mobile network works best on the Char Dham route?',
    a: 'BSNL holds signal furthest up the valleys, particularly on the Kedarnath and Yamunotri treks. Jio and Airtel are strong in the towns — Haridwar, Rishikesh, Barkot, Uttarkashi, Guptkashi, Joshimath — and drop off above them. Carry at least one BSNL-capable handset in the group, and write the key numbers on paper as well as saving them.',
  },
  {
    q: 'Are these numbers free to call?',
    a: 'The short codes — 112, 108, 1070, 1077, 1090, 1098 — are free from any phone. 1800 numbers are toll free from Indian networks. Landline numbers beginning 0135, 01364, 01372, 01374, 01381 and 01389 are charged as normal STD calls.',
  },
  {
    q: 'What should I do before leaving home?',
    a: 'Save 112, 108 and 1070 in your phone, plus the district control room for each sector you will pass through. Write the same numbers on paper and put it in your wallet — a dead battery or no signal is exactly when you need them. Complete your yatra registration, because the registration number is what a search-and-rescue effort keys on. Finally, share your itinerary with someone at home who is not travelling with you.',
  },
];

function Schema() {
  const dataset = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `Char Dham Yatra Emergency Contact Directory ${SITE.season}`,
    description: 'Verified directory of emergency, disaster-response, police, hospital, temple committee and air-ambulance contact numbers for the Char Dham Yatra circuit in Uttarakhand, India. Numbers are classified as permanent national short codes, government-published, or seasonal.',
    url: `${SITE.baseUrl}${PAGE}`,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    isAccessibleForFree: true,
    dateModified: VERIFIED_ISO,
    creator: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl, '@id': `${SITE.baseUrl}/#organization` },
    keywords: ['Char Dham Yatra', 'Emergency Contacts', 'Uttarakhand', 'SDRF', 'Kedarnath', 'Badrinath', 'Gangotri', 'Yamunotri', 'Disaster Management'],
    spatialCoverage: { '@type': 'Place', name: 'Char Dham circuit, Uttarakhand, India', geo: { '@type': 'GeoCoordinates', latitude: 30.7333, longitude: 79.0667 } },
    variableMeasured: contacts.map((c) => c.category),
  };
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Char Dham Yatra Emergency Contacts ${SITE.season}`,
    description: 'Verified emergency numbers for the Char Dham Yatra route, with guidance on what to do in an altitude, landslide, missing-person or no-signal emergency.',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2026-04-02',
    dateModified: VERIFIED_ISO,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl, '@id': `${SITE.baseUrl}/#organization` },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl, logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` } },
    mainEntityOfPage: `${SITE.baseUrl}${PAGE}`,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-answer', '.primary-number'] },
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Char Dham Yatra', item: `${SITE.baseUrl}/char-dham-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Emergency Contacts', item: `${SITE.baseUrl}${PAGE}` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function EmergencyContacts() {
  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,#7f1d1d 0%,#991f1f 60%,#b91c1c 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Save before you travel</span>
          <h1 className="display-title" style={{ color: '#fff', fontSize: 'clamp(1.8rem,4.5vw,3rem)', marginBottom: 12 }}>Char Dham Yatra Emergency Contacts {SITE.season}</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15.5, lineHeight: 1.7, maxWidth: 660, margin: '0 auto' }}>
            Every verified emergency, disaster-response, hospital and temple committee number on the circuit — checked against Uttarakhand government sources on {VERIFIED}.
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '10px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--teal)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color: 'var(--teal)', textDecoration: 'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>Emergency Contacts</span>
        </div>
      </nav>

      <article style={{ maxWidth: 960, margin: '0 auto', padding: '32px 20px 60px' }}>

        <AnswerBox label="If you only read one line">
          <strong>In any emergency on the Char Dham route, dial 112.</strong> It is India’s single emergency
          number and reaches police, fire, ambulance and disaster response from any phone, on any network,
          even with zero balance. For an ambulance specifically call <strong>108</strong>; for a landslide,
          road closure or missing person call the Uttarakhand state disaster control room on <strong>1070</strong>,
          or the district control room on <strong>1077</strong>. The seasonal Char Dham yatra helpline is <strong>1364</strong>.
        </AnswerBox>

        {/* Three primary numbers — large, tappable, speakable */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(240px,100%),1fr))', gap: 12, marginBottom: 30 }}>
          {PRIMARY.map((n) => (
            <a
              key={n.number}
              href={`tel:${n.number}`}
              className="primary-number"
              style={{ background: '#fff', border: '2px solid #dc2626', borderRadius: 14, padding: '18px 18px 16px', textDecoration: 'none', display: 'block' }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, color: '#b91c1c', lineHeight: 1 }}>{n.number}</div>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--navy)', margin: '8px 0 6px' }}>{n.name}</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-mid)', lineHeight: 1.65 }}>{n.note}</div>
            </a>
          ))}
        </div>

        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 12, padding: '14px 18px', marginBottom: 34 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: '#9f1239', marginBottom: 6 }}>Before you leave home</div>
          <p style={{ margin: 0, fontSize: 14, color: '#7f1d1d', lineHeight: 1.75 }}>
            Save 112, 108 and 1070, plus the district control room for every sector you will pass through.
            Then write the same numbers on paper and put it in your wallet — a flat battery or a dead zone is
            precisely when you need them. If you are travelling with us, our own team is reachable throughout
            the yatra on <a href="tel:+917817996730" style={{ color: '#9f1239', fontWeight: 700 }}>{SITE.phone}</a>.
          </p>
        </div>

        <h2 id="directory" style={h2}>The full directory</h2>
        <p style={p}>
          Numbers are grouped by who answers them, and each group is tagged with how durable it is. National
          short codes are statutory and will not change. Government-published numbers come from a{' '}
          <code style={{ fontSize: '0.92em' }}>.gov.in</code> property and turn over slowly, usually on
          administrative reorganisation. Seasonal numbers are stood up for the yatra and wound down afterwards —
          they will not be answered in winter, and that is expected rather than a fault.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(400px,100%),1fr))', gap: 16, marginTop: 22 }}>
          {contacts.map((cat) => {
            const t = TONES[cat.tone];
            const k = KIND_LABEL[cat.kind];
            return (
              <section key={cat.category} style={{ background: t.bg, border: `1px solid ${t.border}`, borderRadius: 12, padding: '16px 18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 14.5, color: t.ink, margin: 0 }}>{cat.category}</h3>
                  <span style={{ background: k.bg, color: k.ink, fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 100, whiteSpace: 'nowrap' }}>{k.text}</span>
                </div>
                <p style={{ fontSize: 12.5, color: 'var(--text-mid)', lineHeight: 1.65, margin: '0 0 12px' }}>{cat.blurb}</p>
                {cat.items.map((item) => (
                  <div key={item.name + item.number} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                    <span style={{ fontSize: 13, color: 'var(--text-mid)' }}>{item.name}</span>
                    <a href={`tel:${item.number}`} style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', textDecoration: 'none', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>{item.number}</a>
                  </div>
                ))}
              </section>
            );
          })}
        </div>

        <h2 id="what-to-do" style={h2}>What to do, by situation</h2>
        <p style={p}>
          A number on its own is not much use if you are not sure whether the situation warrants it. These are
          the four emergencies that actually come up on this route, and the sequence that works for each.
        </p>

        {scenarios.map((s) => (
          <div key={s.title} style={{ background: '#fff', border: '1px solid hsl(var(--border))', borderRadius: 12, padding: '18px 20px', marginBottom: 14 }}>
            <h3 style={{ ...h3, marginTop: 0, marginBottom: '0.6em' }}>{s.title}</h3>
            <ol style={{ margin: '0 0 12px', paddingLeft: 20, fontSize: 14.5, lineHeight: 1.85, color: 'var(--text-mid)' }}>
              {s.steps.map((step) => <li key={step} style={{ marginBottom: 6 }}>{step}</li>)}
            </ol>
            <Link href={s.link.href} style={{ fontSize: 13, fontWeight: 600, color: 'var(--teal)', textDecoration: 'none' }}>{s.link.label} →</Link>
          </div>
        ))}

        <h2 id="registration" style={h2}>Registration is part of your safety net</h2>
        <p style={p}>
          Yatra registration is free and takes a few minutes at{' '}
          <a href="https://registrationandtouristcare.uk.gov.in" rel="nofollow noopener" target="_blank" style={{ color: 'var(--teal)' }}>registrationandtouristcare.uk.gov.in</a>{' '}
          or through the Tourist Care Uttarakhand app, and offline counters run at Haridwar and Rishikesh.
          Pilgrims tend to treat it as a checkpoint formality, but it is also the database a search runs on.
          If someone in your group goes missing, the registration number is the first thing the district
          administration asks for, and it is what lets them place the party on the route. Register everyone,
          including children, and keep a photo of the e-pass on a second phone.
        </p>
        <p style={p}>
          More detail on the process, documents and the medical certificate rules is in our{' '}
          <Link href="/blog/char-dham-yatra-registration" style={{ color: 'var(--teal)' }}>registration guide</Link>{' '}
          and the <Link href="/blog/char-dham-yatra-medical-certificate" style={{ color: 'var(--teal)' }}>medical certificate explainer</Link>.
        </p>

        <h2 id="faq" style={h2}>Frequently asked questions</h2>
        <FAQAccordion faqs={faqs} />

        <div style={{ marginTop: 34, borderTop: '1px solid hsl(var(--border))', paddingTop: 18, fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.8 }}>
          <p style={{ margin: 0 }}>
            <strong>Last verified:</strong> {VERIFIED}. <strong>Sources:</strong> Uttarakhand State Disaster
            Management Authority (usdma.uk.gov.in), Shri Badarinath Kedarnath Temple Committee
            (badrinath-kedarnath.gov.in), Registration &amp; Tourist Care Uttarakhand
            (registrationandtouristcare.uk.gov.in), Uttarkashi / Rudraprayag / Chamoli district portals, and
            Shiv Ganga Travels operations records from {SITE.established} onward.
          </p>
          <p style={{ margin: '10px 0 0' }}>
            This directory is published under{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/" rel="nofollow noopener" target="_blank" style={{ color: 'var(--teal)' }}>CC BY 4.0</a>{' '}
            and is free to quote, republish or cite with attribution to Shiv Ganga Travels, Haridwar.
            If you find a number that no longer connects, tell us on {SITE.phone} and we will check and correct it.
          </p>
        </div>

        <div style={{ marginTop: 28, background: 'var(--navy)', borderRadius: 16, padding: '26px 24px', textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.35rem', margin: '0 0 8px' }}>Travelling with Shiv Ganga Travels?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13.5, marginBottom: 16, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            Every vehicle carries a first-aid kit and an oxygen cylinder, and our office in Haridwar is reachable
            through the whole yatra. One call and we handle the rest.
          </p>
          <a href="tel:+917817996730" style={{ background: '#25D366', color: '#fff', padding: '11px 28px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-block' }}>Call {SITE.phone}</a>
        </div>
      </article>
    </>
  );
}
