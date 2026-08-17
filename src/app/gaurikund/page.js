import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Gaurikund — Where the Kedarnath Trek Starts' },
  description: 'Gaurikund at 1,982 m: the Sonprayag shuttle, what survived of the hot spring, the 16 km trek, and whether to sleep here or lower down.',
  keywords: ['gaurikund','gauri kund','gaurikund to kedarnath','gaurikund temple','gaurikund hot spring','sonprayag to gaurikund shuttle','gaurikund uttarakhand','kedarnath trek starting point','gaurikund altitude'],
  alternates: { canonical: `${SITE.baseUrl}/gaurikund` },
  openGraph: {
    title: 'Gaurikund — Where the Kedarnath Trek Starts',
    description: 'The Sonprayag shuttle, the hot spring after 2013, the 16 km trail, and where to actually sleep the night before.',
    url: `${SITE.baseUrl}/gaurikund`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Gaurikund — Kedarnath trek starting point, Uttarakhand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaurikund — Where the Kedarnath Trek Starts',
    description: 'Sonprayag shuttle, the hot spring after 2013, and the 16 km trail.',
    images: [{ url: '/opengraph-image', alt: 'Gaurikund, Kedarnath trek base' }],
  },
};

const FAQS = [
  {
    q: 'What is Gaurikund?',
    a: 'A small village at 1,982 m in Rudraprayag district, and the last motorable point on the Kedarnath route. The 16 km trek to the temple starts at its upper edge. It is named after Gauri — Parvati — who is said to have performed penance here to win Shiva. Practically speaking it is a trailhead: lodges, tea stalls, pony stands and a queue.',
  },
  {
    q: 'Can I drive my own car to Gaurikund?',
    a: 'No. Every private car, taxi and bus stops at Sonprayag, 5 km short. Only registered local shuttle jeeps are allowed on the narrow cliff road up to Gaurikund. The state transport department runs roughly 220 maxi cabs on that stretch during the season, in coordination with the local cab unions.',
  },
  {
    q: 'How much does the Sonprayag to Gaurikund shuttle cost?',
    a: 'Around ₹50 to ₹100 per person for the 5 km, and the ride takes about fifteen minutes. The cost is not the issue — the queue is. In May and June it can take an hour or more, which is why people are standing in line at 3:30 AM.',
  },
  {
    q: 'Is the Gaurikund hot spring still there?',
    a: 'Partly, and much reduced. The original tapt kund and its bathing complex were largely destroyed in the 2013 floods and the flow has never properly recovered. What operates now is a smaller rebuilt bathing point with warm rather than genuinely hot water. Most pilgrims take a symbolic sprinkle. If a real hot-spring bath matters to you, save it for Tapt Kund at Badrinath, which is unchanged.',
  },
  {
    q: 'How long is the trek from Gaurikund to Kedarnath?',
    a: '16 km on the rebuilt post-2013 trail, climbing from 1,982 m to 3,583 m. Stages are Jungle Chatti at 4 km, Bheembali at 7 km, Lincholi at 11 km and base camp at 15 km. Six to nine hours up for most people, five to seven down. Ponies, palkis, kandis and porters all work from the trailhead at rates fixed by the temple committee.',
  },
  {
    q: 'Should I stay at Gaurikund or Sonprayag?',
    a: 'Gaurikund if the earliest possible start matters more than comfort — the lodges are basic but you walk to the trail gate instead of queueing for a shuttle. Sonprayag or Sitapur if you want a decent room and food, at the cost of joining that queue before dawn. We put our groups at Sitapur or Sonprayag and time the shuttle deliberately, because a bad night before a 16 km climb costs more than the hour saved.',
  },
  {
    q: 'What time does the Kedarnath trek gate open?',
    a: 'Around 4 AM in peak season, though it moves with weather, crowd levels and the registration checks at Sonprayag. Nobody is allowed onto the trail before the gate opens regardless of when they arrive, so being there at 2 AM buys you position in a queue, not an earlier start.',
  },
  {
    q: 'How far is Gaurikund from Haridwar?',
    a: 'About 235 km to Sonprayag, which is eight to nine hours via Rishikesh, Devprayag, Srinagar, Rudraprayag and Guptkashi — then the 5 km shuttle. It is not a drive to attempt in one push if you can avoid it. Most sensible itineraries break it at Guptkashi or Sitapur the night before.',
  },
  {
    q: 'Is there a temple at Gaurikund?',
    a: 'Yes, a small Gauri Devi temple in the village. Most pilgrims stop for a short prayer before starting the climb — asking the mother\'s permission before walking up to the father, as people here put it. It takes five minutes and it is one of the few unhurried moments of the day.',
  },
  {
    q: 'Do I need registration before Gaurikund?',
    a: 'Yes. Uttarakhand government registration is checked at Sonprayag before you are allowed onto the shuttle, and again on the trail. It is free on the state portal. Arriving without it means being turned back at the barrier after a nine-hour drive, which happens to somebody every single day of the season.',
  },
];

const PAA = [
  { q: 'What is Gaurikund famous for?', a: 'Being the roadhead of the Kedarnath yatra, above everything else. Secondarily for the Gauri Devi temple and the hot spring — though the spring is a shadow of what it was before 2013. Local tradition also places the Ganesha story here: Parvati created him to guard her bath, Shiva beheaded the unknown guard, and then restored him with an elephant\'s head.' },
  { q: 'Is Gaurikund safe after the 2013 floods?', a: 'The trail was rebuilt and is far better engineered than what existed before — wider, better drained, with proper shelters at the chattis. The village itself remains in a narrow valley below steep ground, which is simply what it is. The real risk on this route is weather and altitude, not the infrastructure.' },
  { q: 'Can senior citizens manage the Gaurikund trek?', a: 'Many do, on ponies or in a palki rather than on foot. The decision is less about age than about heart and lung condition — 1,600 m of ascent in a day affects fit people too. If there is any cardiac history, take the helicopter from Phata or Sersi instead and skip the climb entirely.' },
  { q: 'Is there mobile network at Gaurikund?', a: 'Patchy and unreliable, and it disappears entirely on most of the trail above. Tell your family before you leave Guptkashi rather than from the trailhead, and carry cash — UPI does not work where there is no data, and the ponies and dhabas are cash anyway.' },
  { q: 'What should I carry on the Gaurikund trek?', a: 'A windproof layer even in June, a raincoat or poncho, a walking stick from the trailhead stalls, at least two litres of water, cash in small notes, your registration and photo ID, and any regular medication in your daypack rather than in luggage sent ahead.' },
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
      { '@type': 'ListItem', position: 2, name: 'Kedarnath Yatra', item: `${SITE.baseUrl}/kedarnath-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Gaurikund', item: `${SITE.baseUrl}/gaurikund` },
    ],
  };
  const place = {
    '@context': 'https://schema.org', '@type': 'TouristAttraction',
    name: 'Gaurikund',
    description: 'Village at 1,982 m in Rudraprayag district, Uttarakhand — the last motorable point on the Kedarnath route and the starting point of the 16 km trek to Kedarnath temple.',
    url: `${SITE.baseUrl}/gaurikund`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    address: { '@type': 'PostalAddress', addressLocality: 'Gaurikund', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 30.6549, longitude: 79.0166, elevation: '1982 m' },
    sameAs: ['https://en.wikipedia.org/wiki/Gaurikund'],
    touristType: ['Pilgrims', 'Trekkers'],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Gaurikund — Where the Kedarnath Trek Starts',
    description: 'The Sonprayag shuttle system, what survived of the hot spring after 2013, the 16 km trail to Kedarnath, and where to sleep the night before.',
    mainEntityOfPage: `${SITE.baseUrl}/gaurikund`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    datePublished: SITE.lastUpdatedISO,
    dateModified: SITE.lastUpdatedISO,
    author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' },
    publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl },
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

const TH = { padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 };
const TD = { padding: '10px 12px', color: '#475569', fontSize: 13 };
const SCROLL = { overflowX: 'auto', marginBottom: 24 };
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 520 };

export default function Gaurikund() {
  const waText = encodeURIComponent('Namaste! I want a Kedarnath package with the Sonprayag hotel and shuttle timing handled. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            1,982 m · Kedarnath trailhead · Rudraprayag district
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Gaurikund — Where the Kedarnath Trek Starts
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            The last motorable point · 5 km shuttle from Sonprayag · 16 km and 1,600 m of climbing above you
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🥾 16 km to Kedarnath', '🚙 Shuttle only from Sonprayag', '♨️ Hot spring, much reduced', '🕓 Gate opens ~4 AM'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/kedarnath-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Kedarnath Yatra</Link><span>›</span>
          <span>Gaurikund</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '1,982 m'], ['Trek to Kedarnath', '16 km'], ['From Sonprayag', '5 km shuttle'], ['From Haridwar', '235 km'], ['Ascent', '~1,600 m'], ['Trek gate', '~4 AM']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          <strong>Gaurikund is where the road ends and the walking starts.</strong> It sits at 1,982 m at the top of the Mandakini valley, and the 16 km trail to <Link href="/kedarnath-temple">Kedarnath</Link> begins at its upper edge. You cannot drive here — private vehicles stop 5 km below at Sonprayag and a shuttle covers the rest. Almost everything that goes wrong on a Kedarnath trip goes wrong in this five-kilometre stretch, and almost all of it is avoidable.
        </p>

        <h2 style={h2}>What Is Gaurikund?</h2>
        <AnswerBox>
          Gaurikund is a village at 1,982 m in Rudraprayag district, Uttarakhand — the last motorable
          point on the Kedarnath route and the start of the 16 km trek to the temple. Private vehicles
          stop at Sonprayag 5 km below; registered shuttle jeeps cover the final stretch for ₹50&ndash;100
          per person.
        </AnswerBox>
        <p style={p}>
          It is named after Gauri &mdash; Parvati &mdash; who by tradition performed penance here to win Shiva as her husband. Local telling also places the Ganesha story at this spot: Parvati created a boy from the sandalwood paste of her own body to guard her while she bathed, Shiva returned and beheaded the unknown guard who blocked him, and then restored the boy with an elephant&rsquo;s head. The small <strong>Gauri Devi temple</strong> in the village marks it, and most pilgrims stop for five minutes before climbing &mdash; asking the mother&rsquo;s permission, as people here say, before walking up to the father.
        </p>

        <h2 style={h2}>The Sonprayag Shuttle — Read This Part Properly</h2>
        <p style={p}>
          This catches out more first-timers than anything else on the route. <strong>You cannot drive to Gaurikund.</strong> Every private car, tourist taxi and bus parks at Sonprayag. The last 5 km runs on a narrow cliff road that only registered local jeeps are permitted on, and the state transport department runs roughly 220 maxi cabs on that stretch through the season, coordinated with the local cab unions.
        </p>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Stage', 'Distance', 'How', 'Cost', 'Time'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Haridwar → Sonprayag', '235 km', 'Own vehicle or taxi', 'Package / hire', '8–9 hrs'],
                ['Sonprayag parking → Gaurikund', '5 km', 'Shuttle jeep only', '₹50–100 pp', '15 min ride, 0–60+ min queue'],
                ['Gaurikund → Kedarnath', '16 km', 'Foot, pony, palki or kandi', 'Foot free; pony/palki extra', '6–9 hrs up'],
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
          The fare is trivial. The <strong>queue</strong> is the thing. In May and June it routinely runs over an hour, which is why serious pilgrims are standing in line by 3:30 AM. Your registration is also checked at Sonprayag before you board &mdash; no registration, no shuttle, and people are turned around at that barrier every day of the season after a nine-hour drive. Do it free on the <a href="https://registrationandtouristcare.uk.gov.in/" target="_blank" rel="noopener noreferrer">state portal</a> beforehand, or let us handle it.
        </p>

        <ExpertNote variant="warning">
          The single most common mistake we see: people book a hotel at Guptkashi, set an alarm for 5 AM thinking that is early, and reach the Sonprayag queue at 7. By then the wait is ninety minutes, they start the trek at 9:30 in full sun, and a walk that should have been done by early afternoon turns into a nine-hour ordeal finishing in the dark. Leave Guptkashi at 3:30 AM. It is a miserable alarm and it is the difference between a good day and a bad one.
        </ExpertNote>

        <h2 style={h2}>The Hot Spring, and What 2013 Left</h2>
        <p style={p}>
          Gaurikund was known for its <strong>tapt kund</strong>, a natural hot spring where pilgrims bathed before starting the climb. The 2013 floods destroyed most of the bathing complex and the flow never properly recovered. What operates today is a smaller rebuilt bathing point with warm rather than genuinely hot water, and most people take a symbolic sprinkle rather than a bath.
        </p>
        <p style={p}>
          Worth knowing before you plan around it, because a lot of pages still describe the old kund as if nothing happened. If a proper hot-spring bath is something you want from this trip, save it for <Link href="/badrinath-temple">Badrinath&rsquo;s Tapt Kund</Link> later in the circuit &mdash; that one runs at around 45&deg;C and is unchanged.
        </p>

        <h2 style={h2}>The Trek in Brief</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Point', 'From Gaurikund', 'What is there'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Jungle Chatti', '4 km', 'First real rest stop, tea and maggi'],
                ['Bheembali', '7 km', 'Shelter, food, medical post'],
                ['Lincholi', '11 km', 'The long grind is behind you here'],
                ['Base camp', '15 km', 'Temple comes into view'],
                ['Kedarnath', '16 km', '3,583 m — you have climbed ~1,600 m'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{r[1]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          Six to nine hours up, five to seven down. Ponies, palkis, kandis and porters all work from the trailhead at rates fixed by the temple committee &mdash; current figures are on our <Link href="/kedarnath-pony-palki-kandi-rates">pony and palki rate page</Link>, and the full trail description with preparation advice is in the <Link href="/blog/kedarnath-trek-guide">Kedarnath trek guide</Link>. If the climb is not realistic, the <Link href="/blog/kedarnath-helicopter-booking">helicopter from Phata or Sersi</Link> skips it entirely.
        </p>

        <h2 style={h2}>Where to Sleep the Night Before</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Base', 'Distance to trail gate', 'Rooms', 'Best for'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Gaurikund', 'Walking distance', 'Basic lodges, dharamshalas', 'Earliest possible start, no shuttle queue'],
                ['Sonprayag', '5 km + shuttle', 'Modest but decent', 'Balance of comfort and proximity'],
                ['Sitapur', '7 km + shuttle', 'The better hotels', 'Sleep and food quality'],
                ['Guptkashi', '~35 km + shuttle', 'Widest choice', 'Comfort, at the cost of a 3:30 AM start'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 600, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{r[1]}</td>
                  <td style={TD}>{r[2]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          We put our groups at <strong>Sitapur or Sonprayag</strong> and time the shuttle deliberately. Gaurikund&rsquo;s lodges save you the queue but the rooms are rough and the night before a 1,600 m ascent is not the night to sleep badly. Whichever you choose, book early &mdash; rooms across all four sell out forty-five to sixty days ahead in season, and turning up in May without a confirmed booking is how people end up sleeping in a car at Sonprayag. See the <Link href="/guptkashi-guide">Guptkashi guide</Link> and <Link href="/kedarnath-hotels">Kedarnath hotels</Link> for the wider picture.
        </p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want the shuttle timing handled for you?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>Registration, hotel placement and a departure time that actually works. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {FAQS.map(f => (
            <details key={f.q} style={{ background: '#fff', border: '1px solid hsl(var(--border))', borderRadius: 10, padding: '12px 16px' }}>
              <summary style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', cursor: 'pointer', lineHeight: 1.5 }}>{f.q}</summary>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.8, margin: '10px 0 0' }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', borderRadius: 12, padding: '18px 20px', marginBottom: 32, display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--navy)', color: '#FFD166', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 17, flexShrink: 0 }}>DM</div>
          <div style={{ flex: '1 1 240px' }}>
            <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)' }}>Dhanesh Chandra Mishra</div>
            <div style={{ fontSize: 12.5, color: 'var(--teal)', fontWeight: 600, marginBottom: 8 }}>Founder &amp; Director, {SITE.name}</div>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Fifteen seasons of putting groups into the Sonprayag shuttle queue at the right hour, and the 3:30 AM advice on this page is the result of watching what happens to the ones who leave at five. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Kedarnath package with hotel and shuttle timing handled</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Registration included · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>On this route</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Kedarnath Yatra', '/kedarnath-yatra'], ['Kedarnath Temple', '/kedarnath-temple'], ['Kedarnath Trek Guide', '/blog/kedarnath-trek-guide'], ['Pony & Palki Rates', '/kedarnath-pony-palki-kandi-rates'], ['Helicopter Booking', '/blog/kedarnath-helicopter-booking'], ['Kedarnath Hotels', '/kedarnath-hotels'], ['Kedarnath Height', '/kedarnath-height'], ['Guptkashi Guide', '/guptkashi-guide'], ['Ukhimath', '/ukhimath'], ['Rudraprayag', '/rudraprayag'], ['Devprayag', '/devprayag'], ['Haridwar to Kedarnath', '/blog/haridwar-to-kedarnath'], ['Registration 2026', '/blog/kedarnath-registration-2026'], ['Altitude Sickness', '/altitude-sickness-char-dham'], ['Do Dham Yatra', '/do-dham-yatra'], ['Char Dham Yatra', '/char-dham-yatra']].map(([l, href]) => (
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
