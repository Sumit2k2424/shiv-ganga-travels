import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Ukhimath — Where Kedarnath Spends the Winter' },
  description: 'Ukhimath at 1,311 m holds the Kedarnath and Madhyamaheshwar idols from November to April. Road-accessible all winter, and almost nobody goes.',
  keywords: ['ukhimath','omkareshwar temple ukhimath','kedarnath winter seat','kedarnath winter abode','ukhimath temple timing','kedarnath in winter','ukhimath how to reach','ukhimath to chopta','madhyamaheshwar winter seat'],
  alternates: { canonical: `${SITE.baseUrl}/ukhimath` },
  openGraph: {
    title: 'Ukhimath — Where Kedarnath Spends the Winter',
    description: 'From November to April the Kedarnath idol is worshipped here, at 1,311 m, on a road that stays open. Almost nobody goes.',
    url: `${SITE.baseUrl}/ukhimath`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Ukhimath — Omkareshwar Temple, winter seat of Kedarnath' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ukhimath — Where Kedarnath Spends the Winter',
    description: 'The winter seat of Kedarnath and Madhyamaheshwar, at 1,311 m and open all year.',
    images: [{ url: '/opengraph-image', alt: 'Omkareshwar Temple, Ukhimath' }],
  },
};

const FAQS = [
  {
    q: 'What is Ukhimath famous for?',
    a: 'It is the winter seat of Kedarnath. When the Kedarnath temple closes around Bhai Dooj in November, the idol is carried down in a ceremonial palanquin procession and installed at the Omkareshwar Temple in Ukhimath, where it is worshipped for roughly six months until the temple reopens in late April. Madhyamaheshwar, one of the Panch Kedar, winters here too.',
  },
  {
    q: 'Can I see Kedarnath in winter?',
    a: 'Yes — at Ukhimath. This is the part most people never work out. From November to April the deity is not at Kedarnath; it is here, at 1,311 m, on a road that stays open all year. You can drive to the door in January and take darshan with almost nobody else present, which is the opposite of the June experience in every way.',
  },
  {
    q: 'What is the Omkareshwar Temple?',
    a: 'The main temple at Ukhimath, and the winter home of both Kedarnath and Madhyamaheshwar. It is a working temple with the same Rawal priesthood that serves Kedarnath, not a museum or a substitute shrine. The rituals performed here through winter are the Kedarnath rituals, continuing without interruption.',
  },
  {
    q: 'How do I reach Ukhimath?',
    a: 'It is about 41 km from Rudraprayag on the road towards Chopta, roughly an hour and a half. From Haridwar it is around 200 km, seven to eight hours via Rishikesh, Devprayag, Srinagar and Rudraprayag. The road is open through winter, unlike almost everything else in this valley.',
  },
  {
    q: 'When does the Kedarnath idol arrive at Ukhimath?',
    a: 'Within a few days of the Kedarnath temple closing, which falls around Bhai Dooj — mid-November most years. The idol travels in a procession over several days, halting overnight at villages along the way. Being on the route when the palanquin passes through is one of the more extraordinary things you can see in Garhwal, and hardly any outsider ever does.',
  },
  {
    q: 'Why is it called Ukhimath?',
    a: 'From Usha, daughter of the demon king Banasura, who by tradition married Aniruddha, the grandson of Krishna. The place was Ushamath and became Ukhimath. There is a temple to Usha in the complex, alongside ones to Aniruddha, Shiva and Parvati.',
  },
  {
    q: 'Is Ukhimath a good base for Chopta and Tungnath?',
    a: 'One of the best. Chopta is about 29 km up the road, so Tungnath and Chandrashila are an easy day trip, and Deoria Tal is close as well. Ukhimath has more places to stay than Chopta itself and sits lower, which makes for a better night\'s sleep before an early start.',
  },
  {
    q: 'What are the Omkareshwar Temple timings?',
    a: 'Broadly 6 AM to 7 PM with a break in the middle of the day, and the schedule shifts with the season and with ritual days. Winter hours are shorter. If you are driving up specially in January, ring ahead rather than trusting a timing published online, this page included.',
  },
  {
    q: 'Is Ukhimath worth visiting during the yatra season?',
    a: 'Honestly, less so. Between May and October the deity is up at Kedarnath and the temple here, while still active, is quieter in significance. Ukhimath in season is useful as a base for Chopta or a night halt. Ukhimath in winter is the reason to come.',
  },
  {
    q: 'How far is Ukhimath from Guptkashi and Gaurikund?',
    a: 'Guptkashi is close — roughly 13 km, across and up the valley. Gaurikund, the Kedarnath trailhead, is about 45 km. That proximity is exactly why Ukhimath works as a night halt on a Kedarnath itinerary as well as a winter destination in its own right.',
  },
];

const PAA = [
  { q: 'Which temples have winter seats in Uttarakhand?', a: 'All four dhams do. Kedarnath and Madhyamaheshwar winter at Ukhimath; Badrinath at Joshimath (Narsingh Temple) and Pandukeshwar; Gangotri at Mukhba near Harsil; Yamunotri at Kharsali near Janki Chatti. The whole circuit effectively relocates downhill for six months, and almost no yatra itinerary mentions it.' },
  { q: 'Can you do a winter Char Dham?', a: 'Yes, and it is a real thing — visiting the four winter seats instead of the four dhams, on roads that stay open, with no trekking and no crowds. It is a completely different trip from the summer yatra and suits people who cannot manage altitude or a 16 km climb.' },
  { q: 'How cold is Ukhimath in winter?', a: 'Cold but manageable. At 1,311 m it gets frosty and can see occasional snow, with daytime temperatures typically in single digits to low teens Celsius in January. Nothing like Kedarnath at 3,583 m, which is under metres of snow — that difference is the whole reason the deity comes down.' },
  { q: 'Is Deoria Tal near Ukhimath?', a: 'Yes. The trek starts from Sari village, roughly 15 km from Ukhimath, and it is a gentle 2.5 km walk up to the lake. Combined with Chopta and Tungnath it makes a straightforward two- or three-day loop from here.' },
  { q: 'Where do the Kedarnath priests go in winter?', a: 'They come down with the deity. The Rawal and the temple priests move to Ukhimath for the six months and continue the daily rituals here. It is the same priesthood, the same worship, in a warmer place — the temple does not pause, it relocates.' },
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
      { '@type': 'ListItem', position: 3, name: 'Ukhimath', item: `${SITE.baseUrl}/ukhimath` },
    ],
  };
  const place = {
    '@context': 'https://schema.org', '@type': 'PlaceOfWorship',
    name: 'Omkareshwar Temple, Ukhimath',
    alternateName: ['Ukhimath', 'Winter seat of Kedarnath'],
    description: 'Temple at Ukhimath, 1,311 m, in Rudraprayag district, Uttarakhand — the winter seat of Kedarnath and Madhyamaheshwar, where the idols are worshipped from November to April.',
    url: `${SITE.baseUrl}/ukhimath`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    address: { '@type': 'PostalAddress', addressLocality: 'Ukhimath', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 30.5167, longitude: 79.0833, elevation: '1311 m' },
    isAccessibleForFree: true,
    touristType: ['Pilgrims', 'Winter travellers'],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Ukhimath — Where Kedarnath Spends the Winter',
    description: 'A guide to Ukhimath and the Omkareshwar Temple: the winter seat of Kedarnath and Madhyamaheshwar, the November palanquin procession, and how to reach.',
    mainEntityOfPage: `${SITE.baseUrl}/ukhimath`,
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

const WINTER_SEATS = [
  { dham: 'Kedarnath', seat: 'Ukhimath (Omkareshwar)', alt: '1,311 m', href: '/ukhimath' },
  { dham: 'Badrinath', seat: 'Joshimath (Narsingh) & Pandukeshwar', alt: '1,890 m', href: null },
  { dham: 'Gangotri', seat: 'Mukhba, near Harsil', alt: '2,620 m', href: '/harsil-valley' },
  { dham: 'Yamunotri', seat: 'Kharsali, near Janki Chatti', alt: '2,675 m', href: null },
];

export default function Ukhimath() {
  const waText = encodeURIComponent('Namaste! I want to visit Ukhimath / the winter seats of Char Dham. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            1,311 m · Winter seat of Kedarnath · Open all year
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Ukhimath — Where Kedarnath Spends the Winter
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            November to April the idol is here, not up there · road-accessible all winter · and almost nobody goes
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🛕 Omkareshwar Temple', '❄️ Nov–Apr darshan', '🚗 41 km from Rudraprayag', '⛰️ 29 km to Chopta'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/kedarnath-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Kedarnath Yatra</Link><span>›</span>
          <span>Ukhimath</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '1,311 m'], ['District', 'Rudraprayag'], ['Deity here', 'Nov – Apr'], ['From Rudraprayag', '41 km'], ['To Chopta', '29 km'], ['Road', 'Open all year']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          <strong>For six months of the year, Kedarnath is not at Kedarnath.</strong> When the temple closes around Bhai Dooj in November, the idol is carried down by palanquin to Ukhimath and installed in the Omkareshwar Temple, where the same priests perform the same rituals until the doors reopen in late April. Ukhimath sits at 1,311 m on a road that stays open all winter. You can drive to it in January and stand alone in front of it.
        </p>

        <h2 style={h2}>What Is Ukhimath?</h2>
        <AnswerBox>
          Ukhimath is a town at 1,311 m in Rudraprayag district, Uttarakhand, and the winter seat of
          Kedarnath. From November to April the Kedarnath idol &mdash; and that of Madhyamaheshwar &mdash;
          is worshipped at its Omkareshwar Temple. It sits 41 km from Rudraprayag and 29 km from Chopta,
          on a road that remains open through winter.
        </AnswerBox>
        <p style={p}>
          The name comes from Usha, daughter of the demon king Banasura, who by tradition married Aniruddha, grandson of Krishna. Ushamath became Ukhimath. The complex holds temples to Usha and Aniruddha alongside Shiva and Parvati, which makes it an unusual mix &mdash; a Shaiva winter seat with a Vaishnava love story attached to its name.
        </p>

        <h2 style={h2}>The Six-Month Migration Nobody Tells You About</h2>
        <p style={p}>
          This is the fact that reframes the whole Char Dham circuit, and almost no itinerary mentions it: <strong>all four dhams relocate downhill for winter</strong>. The temples at altitude are buried in snow and physically unreachable, so the deities come down to villages that stay accessible, and worship continues without a day&rsquo;s interruption.
        </p>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Dham', 'Winter seat', 'Altitude'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {WINTER_SEATS.map((w, i) => (
                <tr key={w.dham} style={{ borderBottom: '1px solid hsl(var(--border))', background: w.dham === 'Kedarnath' ? '#F0FDF4' : (i % 2 === 0 ? '#fff' : 'var(--bg)') }}>
                  <td style={{ ...TD, fontWeight: w.dham === 'Kedarnath' ? 800 : 600, color: 'var(--navy)' }}>{w.dham}</td>
                  <td style={TD}>{w.href ? <Link href={w.href} style={{ color: 'var(--teal)' }}>{w.seat}</Link> : w.seat}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{w.alt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          Visiting the four winter seats instead of the four dhams is a real trip &mdash; no trekking, no altitude, no crowds, open roads. It is a completely different experience from the June yatra and it suits people who cannot manage a 16 km climb or 3,583 m. We run it as <Link href="/winter-char-dham-yatra">Winter Char Dham</Link>.
        </p>

        <ExpertNote variant="insider">
          If you can arrange your dates around it, be on the road when the Kedarnath palanquin comes down. The procession takes several days, halting overnight at villages, and every village turns out for it &mdash; drums, torches, the whole population of a hillside walking beside a covered palki in the cold. I have seen it a dozen times and it still does not feel like something outsiders are supposed to get to see. The date moves with Bhai Dooj, so ask in October rather than planning around a guess.
        </ExpertNote>

        <h2 style={h2}>Omkareshwar Temple</h2>
        <p style={p}>
          The temple itself is stone, low and unshowy, and in season it can look like an ordinary hill-town shrine. That is misleading. This is where the <strong>Kedarnath Rawal and the temple priests move for six months</strong>, and the rituals conducted here through winter are the Kedarnath rituals, unbroken. Madhyamaheshwar, fourth of the <Link href="/panch-kedar-yatra">Panch Kedar</Link>, winters here too, which makes Ukhimath the winter home of two significant Shiva shrines at once.
        </p>
        <p style={p}>
          Timings run broadly 6 AM to 7 PM with a midday break, shorter in deep winter, and they shift around ritual days. If you are driving up specially in January, ring ahead rather than trusting a published timing.
        </p>

        <h2 style={h2}>Ukhimath as a Base</h2>
        <p style={p}>
          Even outside winter, Ukhimath earns its place on an itinerary. It sits at the junction of two useful directions and has more beds than the places it serves.
        </p>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['To', 'Distance', 'Why'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Chopta', '29 km', 'Base for Tungnath and Chandrashila — Ukhimath sleeps better and lower'],
                ['Sari village (Deoria Tal)', '~15 km', 'Gentle 2.5 km walk up to the lake'],
                ['Guptkashi', '~13 km', 'Across the valley, on the Kedarnath road'],
                ['Gaurikund', '~45 km', 'The Kedarnath trailhead'],
                ['Rudraprayag', '41 km', 'Back on the main highway'],
                ['Haridwar', '~200 km', '7–8 hrs via Rishikesh and Devprayag'],
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
          For <Link href="/chopta-tungnath">Chopta and Tungnath</Link> in particular, staying at Ukhimath rather than at Chopta itself is the better call &mdash; more choice, lower altitude, and an easy pre-dawn drive up for the Chandrashila sunrise.
        </p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want the winter circuit instead of the summer one?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>Four winter seats, open roads, no trekking, no crowds. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>When to Go</h2>
        <p style={p}>
          <strong>November to April</strong> is the answer, and it is the opposite of the advice for everywhere else on this site. That is when the deity is here, when the temple carries its full significance, and when you will have it more or less to yourself. December and January are cold &mdash; frost, occasional snow, daytime temperatures in single digits &mdash; but the road stays open and the town keeps working.
        </p>
        <p style={p}>
          Between May and October the idol is back up at Kedarnath and Ukhimath reverts to being a pleasant hill town and a good base for <Link href="/chopta-tungnath">Chopta</Link>. Still worth a night; just not for the same reason.
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
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. He has watched the Kedarnath palanquin come down to Ukhimath more than a dozen times and rates it above anything the summer season offers. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Winter Char Dham — the four seats, no trekking</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Open roads · no crowds · free routed itinerary in 2 hours · direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Nearby and related</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Winter Char Dham', '/winter-char-dham-yatra'], ['Chopta & Tungnath', '/chopta-tungnath'], ['Guptkashi Guide', '/guptkashi-guide'], ['Gaurikund', '/gaurikund'], ['Rudraprayag', '/rudraprayag'], ['Devprayag', '/devprayag'], ['Kedarnath Temple', '/kedarnath-temple'], ['Kedarnath Yatra', '/kedarnath-yatra'], ['Panch Kedar Yatra', '/panch-kedar-yatra'], ['Harsil Valley', '/harsil-valley'], ['Dhari Devi Temple', '/dhari-devi-temple'], ['Char Dham Yatra', '/char-dham-yatra'], ['Do Dham Yatra', '/do-dham-yatra'], ['Closing Dates 2026', '/blog/char-dham-yatra-closing-dates-2026'], ['Road Status', '/char-dham-road-status'], ['Uttarakhand Packages', '/uttarakhand-tour-packages']].map(([l, href]) => (
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
