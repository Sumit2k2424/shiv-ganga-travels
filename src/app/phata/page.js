import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Phata — The Kedarnath Helicopter Base | Village & Helipad Guide' },
  description: 'Phata at 1,500 m is the busiest of the three Kedarnath helipads. Where it sits, why most operators fly from here, where to stay, and how it compares with Sersi and Guptkashi.',
  keywords: ['phata','phata kedarnath','phata helipad','phata to kedarnath helicopter','phata kedarnath distance','phata hotels','phata guptkashi distance','sersi','guptkashi helipad','kedarnath helicopter base'],
  alternates: { canonical: `${SITE.baseUrl}/phata` },
  openGraph: {
    title: 'Phata — The Kedarnath Helicopter Base',
    description: 'The busiest of the three Kedarnath helipads at 1,500 m. Where to stay, how it compares with Sersi and Guptkashi, and what a bad-weather day looks like.',
    url: `${SITE.baseUrl}/phata`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Phata — Kedarnath helicopter base village, Rudraprayag district' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phata — The Kedarnath Helicopter Base',
    description: 'The busiest Kedarnath helipad. Where to stay, and how it compares with Sersi and Guptkashi.',
    images: [{ url: '/opengraph-image', alt: 'Phata, Rudraprayag' }],
  },
};

const FAQS = [
  {
    q: 'What is Phata?',
    a: 'Phata is a small village in Rudraprayag district at about 1,500 m, on the road between Guptkashi and Sonprayag. It would be unremarkable except that it holds the busiest of the three helipads serving Kedarnath, and in season it turns into a staging area for several thousand pilgrims a day flying up to the temple.',
  },
  {
    q: 'How far is Phata from Kedarnath?',
    a: 'About 31 km in a straight line, which the helicopter covers in roughly 8 to 9 minutes. By road there is no route to Kedarnath at all — the road ends at Sonprayag, 16 km from Phata, and everything beyond that is the shuttle to Gaurikund and then the 16 km trek. The helicopter is not a shortcut on a road journey; it replaces the whole thing.',
  },
  {
    q: 'How far is Phata from Guptkashi and Sonprayag?',
    a: 'Roughly 14 km from Guptkashi and about 16 km from Sonprayag, on the same road. All three sit on the approach to the Kedarnath valley, in ascending order: Guptkashi, then Phata, then Sonprayag, then Gaurikund where the trek starts.',
  },
  {
    q: 'Why do most Kedarnath helicopter operators fly from Phata?',
    a: 'It has the most operators and the most slots of the three helipads, which makes it the easiest place to get a seat and the middle option on price. Sersi is closest to the temple and cheapest, so its slots go first. Guptkashi is the most expensive but has the best road access and accommodation. Phata is the compromise most people end up at, for good reason.',
  },
  {
    q: 'What does a Kedarnath helicopter from Phata cost?',
    a: `For the ${SITE.season} season the official UCADA-fixed round-trip fare from Phata is ₹10,164 per person, with the one-way at about ₹4,840, plus an IRCTC convenience fee and GST. Sersi is ₹6,390 round trip and Guptkashi ₹12,762. These are sold only on the IRCTC HeliYatra portal — nobody else has legitimate inventory.`,
  },
  {
    q: 'Can you book a Phata helicopter ticket at the helipad?',
    a: 'No. Every seat on the valley shuttle is sold in advance through the IRCTC HeliYatra portal, and turning up at Phata hoping to buy one at a counter does not work. People who tell you they can arrange a ticket on the spot at the helipad are describing something that is either a private charter at many times the price or a scam.',
  },
  {
    q: 'Where should you stay near Phata?',
    a: 'Phata itself has basic hotels and guesthouses, adequate for a night before an early flight. If you want a better room, Guptkashi 14 km back has considerably more choice and better food, and the drive to the helipad in the morning is manageable. We usually put groups at Guptkashi or Sitapur and time the run to Phata around the slot.',
  },
  {
    q: 'What happens if the weather cancels your Phata flight?',
    a: 'It happens often, and this is the part nobody plans for. Flights go when the valley is clear, which in practice means mornings, and cloud can shut the whole operation for a day or more. Operators reschedule where they can and refund per the portal rules where they cannot. Build a spare day into any helicopter itinerary — a single-day Kedarnath heli plan with a train home that night is a bet, not a plan.',
  },
  {
    q: 'Is there VIP darshan with the Phata helicopter?',
    a: 'Not automatically, and it is not part of the flight fare. Helicopter passengers land at the Kedarnath helipad and still walk the last stretch to the temple and join a queue like everyone else. Priority darshan is arranged separately. Any package quoting helicopter plus guaranteed instant darshan as one inclusive item is worth questioning closely.',
  },
  {
    q: 'How long do you get at Kedarnath on a Phata round trip?',
    a: 'Typically two to three hours on the ground, which is enough for the walk up from the helipad, darshan and coming back. It is not enough to explore Kedarnath, see Bhairavnath temple properly or feel unhurried. If you want time at the temple rather than a fast darshan, fly up and walk down, or plan a night at Kedarnath.',
  },
];

const PAA = [
  { q: 'Which is better, Phata or Guptkashi for Kedarnath helicopter?', a: 'Phata for availability and price; Guptkashi for comfort and road access. Guptkashi has proper hotels, better food and a shorter drive from the main road, but costs about ₹2,600 more per person round trip. If you are travelling with elderly parents and want a decent night before the flight, the Guptkashi premium buys something real.' },
  { q: 'Is Sersi closer to Kedarnath than Phata?', a: 'Yes, and it is correspondingly cheaper — ₹6,390 round trip against ₹10,164 from Phata. The catch is that Sersi has the fewest slots and they sell out first, so the cheapest helipad is also the hardest to get onto. If your dates are fixed and you cannot flex, Phata is the more realistic booking.' },
  { q: 'How many minutes is the Phata to Kedarnath flight?', a: 'Eight to nine minutes each way. It is genuinely startling the first time — you lift off from a terraced field in a warm valley and are set down in a stone bowl below the temple in under ten minutes, having skipped a 16 km climb that takes most people six to eight hours.' },
  { q: 'Can senior citizens fly from Phata to Kedarnath?', a: 'Yes, and this is exactly who the service is for. There is no upper age limit, though at 3,583 m the altitude at Kedarnath still applies and going straight from 1,500 m to that in nine minutes gives your body no adjustment time at all. Anyone with heart or lung conditions should read our altitude and heart-patient guidance before booking.' },
  { q: 'Is Triyuginarayan near Phata?', a: 'Reasonably — it sits above the Sonprayag side of the valley, a short detour off the road beyond Phata. It is the temple where Shiva and Parvati are said to have married, with a fire that is held to have burned since. Most helicopter pilgrims fly over it without knowing it is there.' },
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
      { '@type': 'ListItem', position: 3, name: 'Phata', item: `${SITE.baseUrl}/phata` },
    ],
  };
  const place = {
    '@context': 'https://schema.org', '@type': 'TouristAttraction',
    name: 'Phata',
    alternateName: ['Phata Helipad', 'Phata Kedarnath'],
    description: 'Village in Rudraprayag district, Uttarakhand, at about 1,500 m between Guptkashi and Sonprayag, site of the busiest of the three helipads serving Kedarnath.',
    url: `${SITE.baseUrl}/phata`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    address: { '@type': 'PostalAddress', addressLocality: 'Phata', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 30.5461, longitude: 79.0086, elevation: '1500 m' },
    isAccessibleForFree: true,
    touristType: ['Pilgrims', 'Senior citizens'],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Phata — The Kedarnath Helicopter Base',
    description: 'A guide to Phata: the helipad, why most operators fly from here, fares against Sersi and Guptkashi, where to stay, and what happens when the weather closes in.',
    mainEntityOfPage: `${SITE.baseUrl}/phata`,
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
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 580 };

const HELIPADS = [
  { name: 'Sersi', rt: '₹6,390', ow: '₹3,043', flight: '~11 min', pros: 'Cheapest, closest to Kedarnath', cons: 'Fewest slots, sells out first' },
  { name: 'Phata', rt: '₹10,164', ow: '₹4,840', flight: '~9 min', pros: 'Most operators, best availability', cons: 'Basic accommodation in the village' },
  { name: 'Guptkashi', rt: '₹12,762', ow: '₹6,077', flight: '~10 min', pros: 'Best hotels and road access', cons: 'Most expensive by a clear margin' },
];

export default function Phata() {
  const waText = encodeURIComponent('Namaste! I want a Kedarnath helicopter trip from Phata with the hotel and slot timing handled. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Rudraprayag · ~1,500 m · Kedarnath helipad
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Phata — The Busiest Kedarnath Helicopter Base
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            Nine minutes to Kedarnath · most operators, best availability · ₹10,164 round trip on the official portal
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🚁 ~9 min flight', '🎫 IRCTC HeliYatra only', '📍 14 km from Guptkashi', '⛅ Weather-dependent'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/kedarnath-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Kedarnath Yatra</Link><span>›</span>
          <span>Phata</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '~1,500 m'], ['District', 'Rudraprayag'], ['To Kedarnath', '~9 min by air'], ['From Guptkashi', '14 km'], ['To Sonprayag', '16 km'], ['Round trip', '₹10,164']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          <strong>Phata is a small village that happens to have the busiest helipad in the Kedarnath valley.</strong> Nine minutes of flying replaces a 16 km climb that takes most people the better part of a day, and for a great many pilgrims — the elderly, the unwell, anyone with a knee that will not take it — that nine minutes is the difference between darshan and not. This page is about the place itself: where it sits, why the operators cluster here, and what actually happens on the ground.
        </p>

        <h2 style={h2}>What Is Phata?</h2>
        <AnswerBox>
          Phata is a village in Rudraprayag district, Uttarakhand, at about 1,500 m, on the road between
          Guptkashi and Sonprayag. It holds the busiest of the three helipads serving Kedarnath, with a
          flight time of roughly 9 minutes to the temple helipad at 3,583 m. Tickets are sold only on the
          IRCTC HeliYatra portal at a UCADA-fixed fare.
        </AnswerBox>
        <p style={p}>
          Its position on the road is the whole story. Going up the Mandakini valley you pass <Link href="/guptkashi-guide">Guptkashi</Link>, then Phata, then Sonprayag where the road ends, then the shuttle to <Link href="/gaurikund">Gaurikund</Link> where the trek starts. Phata sits far enough up to make the flight short and far enough down to have flat ground to fly from — which in this valley is not a small thing.
        </p>

        <h2 style={h2}>Phata, Sersi or Guptkashi?</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Helipad', 'Round trip', 'One way', 'Flight', 'Why choose it', 'The catch'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {HELIPADS.map((r, i) => (
                <tr key={r.name} style={{ borderBottom: '1px solid hsl(var(--border))', background: r.name === 'Phata' ? '#F0FDF4' : (i % 2 === 0 ? '#fff' : 'var(--bg)') }}>
                  <td style={{ ...TD, fontWeight: r.name === 'Phata' ? 800 : 600, color: 'var(--navy)' }}>{r.name}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{r.rt}</td>
                  <td style={TD}>{r.ow}</td>
                  <td style={TD}>{r.flight}</td>
                  <td style={TD}>{r.pros}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r.cons}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          Fares are fixed by <strong>UCADA</strong> for the {SITE.season} season and sold only through the IRCTC HeliYatra portal, plus a convenience fee and GST. The pricing looks odd until you see the geography: Sersi is closest to the temple and cheapest, Guptkashi furthest and dearest. Phata is the middle on both counts, and it has the most operators — which is why, when your dates are fixed and Sersi has nothing, Phata is where you end up.
        </p>
        <p style={p}>
          The full booking process, operator list and the common ticketing frauds are covered on our <Link href="/blog/kedarnath-helicopter-booking">Kedarnath helicopter booking guide</Link>.
        </p>

        <ExpertNote variant="warning">
          Nobody can sell you a valley-shuttle seat at the Phata helipad. Every ticket comes from the IRCTC
          HeliYatra portal, in advance, in the passenger&rsquo;s own name with ID that gets checked. If someone
          offers to &ldquo;arrange&rdquo; a Phata seat on the day for cash, it is either a private charter at
          several times the fare or it is a fraud — and in peak season it is usually the second. See our
          <Link href="/char-dham-yatra-scams"> Char Dham scams page</Link>.
        </ExpertNote>

        <h2 style={h2}>The Weather Day Nobody Budgets For</h2>
        <p style={p}>
          Helicopters fly when the valley is clear, and in the Kedarnath valley that mostly means mornings. Cloud builds through the day and can shut the whole operation — not just your flight, everyone&rsquo;s — for a day or more at a stretch. This is normal. It is not an operator failing and no amount of paying extra changes it.
        </p>
        <p style={p}>
          What it means for planning is simple and widely ignored: <strong>put a spare day in.</strong> A Kedarnath helicopter itinerary with a same-night train out of Haridwar is a bet on the weather, and every season a lot of people lose it. If your schedule genuinely has no slack, the honest advice is to walk or ride up instead, because the trek does not get cancelled by cloud.
        </p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want the Phata slot and the hotel timed together?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We build the buffer day in and stage groups at Guptkashi or Sitapur the night before. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>Where to Sleep the Night Before</h2>
        <p style={p}>
          Phata has basic hotels and guesthouses. They are fine for a short night before an early slot and nobody is staying for the ambience. If you want a decent room, hot water that works and food worth eating, <strong>Guptkashi</strong> fourteen kilometres back has considerably more, and Sitapur is another option on the same road.
        </p>
        <p style={p}>
          We generally stage groups at Guptkashi or Sitapur and drive to Phata for the slot, for the same reason we send Yamunotri groups to sleep at Barkot: a bad night immediately before the thing you came for is a poor trade for thirty minutes of extra sleep. The exception is a very early first slot, where being in Phata itself saves a fraught pre-dawn drive.
        </p>

        <h2 style={h2}>What Happens When You Land</h2>
        <p style={p}>
          The helicopter sets you down at the Kedarnath helipad, below and short of the temple. <strong>You still walk from there</strong>, and you still queue for darshan. A ticket does not carry priority access, whatever a package description implies — VIP or priority darshan is a separate arrangement, covered on our <Link href="/kedarnath-vip-darshan">Kedarnath VIP darshan page</Link>.
        </p>
        <p style={p}>
          A standard round trip gives you roughly two to three hours on the ground. Enough for the walk up, darshan and back. Not enough to see Bhairavnath temple, or the Samadhi behind the shrine, or to sit anywhere without watching the clock. If time at Kedarnath is what you actually want, fly up and walk down, or plan a night up there.
        </p>

        <ExpertNote variant="insider">
          You go from 1,500 m at Phata to 3,583 m at Kedarnath in about nine minutes. Nothing in the human body adjusts that fast. Most people are fine; a meaningful minority get headaches, nausea or breathlessness within the first half hour of landing, and it is worse in those who flew in from sea level two days earlier. Move slowly at the top, drink water, and read our <Link href="/altitude-sickness-char-dham">altitude sickness guide</Link> before you book — particularly if there is heart or lung history in the group.
        </ExpertNote>

        <h2 style={h2}>Getting to Phata</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['From', 'Distance', 'Drive time', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Guptkashi', '14 km', '~40 min', 'The usual overnight base'],
                ['Sonprayag', '16 km', '~45 min', 'Further up; where the road ends'],
                ['Rudraprayag', '~60 km', '2.5 hrs', 'Where the Kedarnath road splits off the Alaknanda'],
                ['Haridwar', '~215 km', '8–9 hrs', 'Full driving day. Do not attempt to fly the same day'],
                ['Dehradun', '~230 km', '9 hrs', 'Jolly Grant is the nearest airport'],
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
          Uttarakhand registration is mandatory and gets checked, helicopter or not — see our <Link href="/blog/char-dham-yatra-registration">registration guide</Link>. Check the <Link href="/char-dham-road-status">road status page</Link> before travelling; the Mandakini valley road takes monsoon damage badly and a closure below Phata strands you as effectively as cloud above it.
        </p>

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
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. He insists on a buffer day in every helicopter itinerary, having spent enough seasons watching cloud sit on the Mandakini valley for forty-eight hours at a time. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning Kedarnath by helicopter?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Official portal fares · buffer day built in · hotel timed to your slot · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Up the Mandakini valley</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Kedarnath Yatra', '/kedarnath-yatra'], ['Kedarnath Temple', '/kedarnath-temple'], ['Kedarnath Helicopter Booking', '/blog/kedarnath-helicopter-booking'], ['Kedarnath VIP Darshan', '/kedarnath-vip-darshan'], ['Guptkashi Guide', '/guptkashi-guide'], ['Gaurikund Guide', '/gaurikund'], ['Kedarnath Hotels', '/kedarnath-hotels'], ['Kedarnath Pony & Palki Rates', '/kedarnath-pony-palki-kandi-rates'], ['Kedarnath Trek Guide', '/blog/kedarnath-trek-guide'], ['Pony vs Helicopter', '/blog/kedarnath-pony-vs-helicopter'], ['Triyuginarayan Temple', '/blog/triyuginarayan-temple'], ['Ukhimath', '/ukhimath'], ['Char Dham Helicopter', '/char-dham-helicopter'], ['Char Dham Scams', '/char-dham-yatra-scams'], ['Altitude Sickness Guide', '/altitude-sickness-char-dham'], ['Road Status', '/char-dham-road-status']].map(([l, href]) => (
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
