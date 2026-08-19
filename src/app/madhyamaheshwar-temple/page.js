import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Madhyamaheshwar Temple — The Quietest of the Panch Kedar' },
  description: 'Madhyamaheshwar at 3,497 m, where Shiva\'s navel is worshipped. The 16 km trek from Ransi, Buda Madmaheshwar above it, the Ukhimath winter seat, and why almost nobody goes.',
  keywords: ['madhyamaheshwar','madmaheshwar','madhyamaheshwar temple','madmaheshwar trek','madhyamaheshwar trek from ransi','ransi village','buda madmaheshwar','panch kedar','madhyamaheshwar altitude','madhyamaheshwar opening date','gaundhar','bantoli'],
  alternates: { canonical: `${SITE.baseUrl}/madhyamaheshwar-temple` },
  openGraph: {
    title: 'Madhyamaheshwar Temple — The Quietest of the Panch Kedar',
    description: 'Shiva\'s navel at 3,497 m, 16 km on foot from Ransi. The trek, the winter seat at Ukhimath, and the meadow above the temple almost nobody climbs to.',
    url: `${SITE.baseUrl}/madhyamaheshwar-temple`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Madhyamaheshwar Temple — fourth of the Panch Kedar, Garhwal Himalaya' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madhyamaheshwar Temple — The Quietest Panch Kedar',
    description: 'Shiva\'s navel at 3,497 m, 16 km on foot from Ransi. The trek, and the meadow above it.',
    images: [{ url: '/opengraph-image', alt: 'Madhyamaheshwar Temple, Garhwal' }],
  },
};

const FAQS = [
  {
    q: 'What is Madhyamaheshwar Temple?',
    a: 'Madhyamaheshwar — often written Madmaheshwar — is one of the Panch Kedar, the five Shiva temples of the Garhwal Himalaya, at about 3,497 m in Rudraprayag district. The navel of Shiva is worshipped here. It sits in a high meadow surrounded by the Chaukhamba peaks, reached only on foot, and it receives a tiny fraction of the pilgrims who go to Kedarnath.',
  },
  {
    q: 'Where does Madhyamaheshwar come in the Panch Kedar order?',
    a: 'Fourth, in the classical sequence: Kedarnath (the hump), Tungnath (the arms), Rudranath (the face), Madhyamaheshwar (the navel), Kalpeshwar (the hair). Some operators number it second, which is where the confusion online comes from. The order matters if you are doing the full circuit as a religious observance; it matters much less if you are going to one temple.',
  },
  {
    q: 'How long is the Madhyamaheshwar trek?',
    a: 'About 16 km each way from Ransi, the last motorable village, so roughly 32 km round trip. Most people take two days up with a night at Gaundhar or Bantoli, or push it in one long day if they are fit and start early. The gradient is moderate for the first half and steepens considerably in the last stretch to the temple.',
  },
  {
    q: 'Where does the Madhyamaheshwar trek start?',
    a: 'Ransi village in Rudraprayag district, which is the road head. From Ransi the path drops to Gaundhar, crosses the river at Bantoli where two streams meet, then climbs steadily through forest and meadow to the temple. Ransi is reached by road from Ukhimath, and Ukhimath from Guptkashi.',
  },
  {
    q: 'When does Madhyamaheshwar Temple open?',
    a: 'Around May, with the exact date set each year according to the Hindu calendar and announced by the temple committee — in 2026 the doors opened on 21 May. It closes in November, around the same period as the other Panch Kedar, after which the deity is worshipped at Ukhimath through the winter.',
  },
  {
    q: 'Where is the winter seat of Madhyamaheshwar?',
    a: 'Ukhimath, at 1,311 m — the same place that holds Kedarnath through the winter. When the temple closes in November the utsav doli is carried down and the deity is worshipped at the Omkareshwar Temple until the doors reopen in May. Ukhimath is road-accessible all year, which makes winter darshan genuinely easy and almost nobody does it.',
  },
  {
    q: 'What is Buda Madmaheshwar?',
    a: 'A shrine on a ridge about 2 km above the main temple, reached by a steep climb, and the reason to give Madhyamaheshwar a second day rather than turning straight round. The view takes in Chaukhamba, Kedarnath peak, Neelkanth and the Panchuli range on a clear morning. Most people who make it to the temple never go up there, which is their loss.',
  },
  {
    q: 'How hard is the Madhyamaheshwar trek?',
    a: 'Moderate by Himalayan standards and harder than most first-timers expect. It is 16 km with real height gain, on a path that is well trodden but rough, finishing at nearly 3,500 m. It is easier than Rudranath and harder than Tungnath. If you have done the Kedarnath trek comfortably you will manage this, though with fewer tea shops and far fewer people.',
  },
  {
    q: 'Is there anywhere to stay on the Madhyamaheshwar trek?',
    a: 'Basic accommodation at Gaundhar and Bantoli on the way up, and simple rooms and a dharamshala at the temple itself. Standards are minimal — think blankets, no heating and shared facilities. Carry a sleeping bag if you feel strongly about it, and do not expect to book anything in advance the way you would at Kedarnath.',
  },
  {
    q: 'Can you combine Madhyamaheshwar with Kedarnath or Tungnath?',
    a: 'Yes, and it is the sensible way to do it. Ukhimath is the hinge — from there Chopta and Tungnath are a short drive, Guptkashi and the Kedarnath valley are close, and Ransi is the road head for this trek. A week based around Ukhimath covers three of the five Panch Kedar without a great deal of driving.',
  },
];

const PAA = [
  { q: 'Why is it called Madhyamaheshwar?', a: 'From madhya, meaning middle. In the Panch Kedar story the Pandavas pursued Shiva, who took the form of a bull and sank into the ground, surfacing in five parts across Garhwal. The navel — the middle of the body — came up here. The name is a description of anatomy, not geography, though the temple does sit roughly in the middle of the five sites.' },
  { q: 'How many people visit Madhyamaheshwar?', a: 'A very small number compared with Kedarnath, which takes lakhs in a season. Madhyamaheshwar sees a few thousand, mostly Panch Kedar pilgrims and trekkers. On a weekday outside peak weeks you can have the temple courtyard largely to yourself, which is close to impossible at any other Shiva shrine of this standing in Uttarakhand.' },
  { q: 'What is the best time for the Madhyamaheshwar trek?', a: 'May and June before the monsoon, and mid-September to late October after it. The post-monsoon window is the better of the two — the meadows are still green, the air is clear enough to see Chaukhamba properly from Buda Madmaheshwar, and the path is not slick. Avoid July and August, when the trail is leech-ridden and the views are cloud.' },
  { q: 'Is Madhyamaheshwar harder than Tungnath?', a: 'Considerably. Tungnath is around 3.5 km from Chopta on a paved path and can be done in a morning. Madhyamaheshwar is 16 km each way with an overnight stop and no paving. They are both Panch Kedar temples and they are not remotely the same undertaking.' },
  { q: 'Do you need a guide for Madhyamaheshwar?', a: 'Not strictly — the path is established and there are villages on it. A local guide or porter is still worth taking, partly for the load and partly because the last section and the climb to Buda Madmaheshwar are much easier with someone who knows the ground. Arrange it at Ransi rather than in advance.' },
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
      { '@type': 'ListItem', position: 2, name: 'Panch Kedar Yatra', item: `${SITE.baseUrl}/panch-kedar-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Madhyamaheshwar Temple', item: `${SITE.baseUrl}/madhyamaheshwar-temple` },
    ],
  };
  const place = {
    '@context': 'https://schema.org', '@type': 'PlaceOfWorship',
    name: 'Madhyamaheshwar Temple',
    alternateName: ['Madmaheshwar Temple', 'Madhyamaheshwar Mandir'],
    description: 'One of the Panch Kedar Shiva temples of the Garhwal Himalaya, at about 3,497 m in Rudraprayag district, Uttarakhand, where the navel of Shiva is worshipped. Reached by a 16 km trek from Ransi village.',
    url: `${SITE.baseUrl}/madhyamaheshwar-temple`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    address: { '@type': 'PostalAddress', addressLocality: 'Madhyamaheshwar', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 30.6383, longitude: 79.2222, elevation: '3497 m' },
    isAccessibleForFree: true,
    touristType: ['Pilgrims', 'Trekkers'],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Madhyamaheshwar Temple — The Quietest of the Panch Kedar',
    description: 'A guide to Madhyamaheshwar: the 16 km trek from Ransi via Gaundhar and Bantoli, Buda Madmaheshwar above the temple, opening dates and the Ukhimath winter seat.',
    mainEntityOfPage: `${SITE.baseUrl}/madhyamaheshwar-temple`,
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
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 560 };

const PANCH_KEDAR = [
  { n: '1', name: 'Kedarnath', part: 'The hump', alt: '3,583 m', access: '16 km trek from Gaurikund', href: '/kedarnath-temple' },
  { n: '2', name: 'Tungnath', part: 'The arms', alt: '3,680 m', access: '~3.5 km from Chopta', href: '/chopta-tungnath' },
  { n: '3', name: 'Rudranath', part: 'The face', alt: '3,600 m', access: 'Long trek from Sagar village' },
  { n: '4', name: 'Madhyamaheshwar', part: 'The navel', alt: '3,497 m', access: '16 km trek from Ransi' },
  { n: '5', name: 'Kalpeshwar', part: 'The hair', alt: '2,200 m', access: 'Short walk from Urgam' },
];

export default function MadhyamaheshwarTemple() {
  const waText = encodeURIComponent('Namaste! I want to trek to Madhyamaheshwar from Ransi, possibly with Tungnath and Ukhimath. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Rudraprayag · 3,497 m · Fourth Panch Kedar
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Madhyamaheshwar Temple — Where Shiva&rsquo;s Navel Is Worshipped
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            16 km on foot from Ransi · a meadow under Chaukhamba · a few thousand pilgrims a season against Kedarnath&rsquo;s lakhs
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🥾 16 km from Ransi', '🛕 Panch Kedar #4', '❄️ Winters at Ukhimath', '🏔️ Buda Madmaheshwar above'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/panch-kedar-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Panch Kedar Yatra</Link><span>›</span>
          <span>Madhyamaheshwar</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '3,497 m'], ['District', 'Rudraprayag'], ['Road head', 'Ransi'], ['Trek', '16 km each way'], ['Winter seat', 'Ukhimath'], ['Season', 'May – Nov']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          <strong>Madhyamaheshwar is the Panch Kedar temple people mean to visit and never do.</strong> It is sixteen kilometres on foot from the nearest road, it takes two days properly, and there is no helicopter, no shortcut and no way to tick it off in an afternoon. Which is exactly why, standing in the courtyard at 3,497 m with Chaukhamba filling the skyline behind it, you may well be one of a handful of people there — at a Shiva shrine of the same lineage as <Link href="/kedarnath-temple">Kedarnath</Link>, which takes lakhs.
        </p>

        <h2 style={h2}>What Is Madhyamaheshwar?</h2>
        <AnswerBox>
          Madhyamaheshwar, also written Madmaheshwar, is the fourth of the Panch Kedar — the five
          Shiva temples of Garhwal — at about 3,497 m in Rudraprayag district, Uttarakhand. The navel
          of Shiva is worshipped here. It is reached by a 16 km trek from Ransi village, opens around
          May and closes in November, and the deity winters at Ukhimath.
        </AnswerBox>
        <p style={p}>
          The name comes from <em>madhya</em>, the middle. In the Panch Kedar story the Pandavas came to the Himalaya seeking Shiva, who avoided them by taking the form of a bull and sinking into the ground — surfacing again in five parts across Garhwal. The hump came up at Kedarnath, the arms at Tungnath, the face at Rudranath, the hair at Kalpeshwar. The navel came up here.
        </p>

        <h2 style={h2}>Where It Sits Among the Five</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['#', 'Temple', 'Part of Shiva', 'Altitude', 'Access'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {PANCH_KEDAR.map((r, i) => (
                <tr key={r.name} style={{ borderBottom: '1px solid hsl(var(--border))', background: r.name === 'Madhyamaheshwar' ? '#F0FDF4' : (i % 2 === 0 ? '#fff' : 'var(--bg)') }}>
                  <td style={{ ...TD, fontWeight: 700, color: 'var(--teal)' }}>{r.n}</td>
                  <td style={{ ...TD, fontWeight: r.name === 'Madhyamaheshwar' ? 800 : 600, color: 'var(--navy)' }}>
                    {r.href ? <Link href={r.href} style={{ color: 'var(--teal)' }}>{r.name}</Link> : r.name}
                  </td>
                  <td style={TD}>{r.part}</td>
                  <td style={TD}>{r.alt}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r.access}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          You will find operators listing Madhyamaheshwar as the second Panch Kedar rather than the fourth. Both orderings circulate; the sequence above is the classical one, and it is the order a full <Link href="/panch-kedar-yatra">Panch Kedar yatra</Link> is traditionally walked in. If you are visiting one temple rather than completing the circuit as an observance, the numbering is academic.
        </p>

        <h2 style={h2}>The Trek from Ransi</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Leg', 'Distance', 'What it is like'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Ransi → Gaundhar', '~6 km', 'Descends first, which is demoralising on the way back. Village and fields.'],
                ['Gaundhar → Bantoli', '~3 km', 'River crossing at the confluence. Basic stays here and at Gaundhar.'],
                ['Bantoli → Khatara / Nanu', '~4 km', 'The climb begins in earnest. Forest, then thinning cover.'],
                ['Khatara → Madhyamaheshwar', '~3 km', 'Steepest section, opening into meadow. The temple appears late.'],
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
          The honest way to do it is over two days with a night at Gaundhar or Bantoli. Fit walkers push it in one long day and pay for it.
        </p>
        <p style={p}>
          One caveat on the distance, because you will see it quoted differently everywhere. Published figures for Ransi to Madhyamaheshwar run from about <strong>16 km to 22 km</strong>, and both are defensible — it depends on whether the count starts at Ransi village or at the vehicle drop below it, and on which line the path is taking that season after landslide repair. Sixteen is the figure most commonly given and the one we plan on. Treat the leg table as shape rather than survey, and assume the day is longer than the number suggests.
        </p>

        <ExpertNote variant="insider">
          The first stretch out of Ransi goes <em>down</em>. Everyone finds this pleasant on day one and nobody thinks about it again until the last hour of the walk out, when they are climbing six kilometres uphill on tired legs to reach the vehicle. Plan the return day as a real day, not a formality, and do not book anything in Guptkashi or Rudraprayag for that afternoon.
        </ExpertNote>

        <h2 style={h2}>Buda Madmaheshwar — the Reason to Stay a Night</h2>
        <p style={p}>
          About two kilometres above the temple, up a steep ridge, is a small shrine called <strong>Buda Madmaheshwar</strong> — old Madmaheshwar. It is a hard forty-five minutes to an hour of climbing from the courtyard and it is the best thing on this trek.
        </p>
        <p style={p}>
          From the top, on a clear morning, you get Chaukhamba almost overhead, Kedarnath peak, Neelkanth, and on exceptional days the Panchuli range far to the east. Most people who complete the sixteen kilometres to the temple take darshan and turn round the next morning without going up. If you have walked two days to get here, give it the extra half-day. Go at first light, before the cloud builds.
        </p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want Madhyamaheshwar with Tungnath and Ukhimath?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>Three of the five Panch Kedar from one base, in about a week. Tell us your dates and fitness.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>Opening Dates and the Winter Seat</h2>
        <p style={p}>
          The doors open around <strong>May</strong> — the exact date is fixed each year on the Hindu calendar and announced by the temple committee, and in 2026 it was 21 May. They close in November. When they do, the utsav doli is carried down the same sixteen kilometres and the deity is installed at the <strong>Omkareshwar Temple in Ukhimath</strong>, which also holds Kedarnath through the winter.
        </p>
        <p style={p}>
          This is the part worth knowing if you cannot manage the trek. <Link href="/ukhimath">Ukhimath</Link> sits at 1,311 m, is road-accessible every month of the year, and holds two of the Panch Kedar deities from November to April. Winter darshan of Madhyamaheshwar involves no walking whatsoever, and hardly anybody does it.
        </p>

        <h2 style={h2}>Getting to Ransi</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['From', 'Distance', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Ukhimath', '~25 km', 'The natural base. Winter seat of the temple you are walking to.'],
                ['Guptkashi', '~35 km', 'Bigger town, more rooms, on the Kedarnath road.'],
                ['Rudraprayag', '~75 km', 'Where the Kedarnath valley road leaves the Alaknanda.'],
                ['Haridwar', '~215 km', 'Full driving day. Break it at Guptkashi or Ukhimath.'],
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
          Distances on the Ransi road vary with which surface is open and it is a rough final stretch. <Link href="/ukhimath">Ukhimath</Link> is the sensible base for this trek and for <Link href="/chopta-tungnath">Chopta and Tungnath</Link> — a week built around it covers three of the five Panch Kedar without much driving. Check the <Link href="/char-dham-road-status">road status page</Link> before you set out.
        </p>

        <h2 style={h2}>When to Go</h2>
        <p style={p}>
          <strong>Mid-September to late October</strong> is the best window, comfortably. The meadows are still green from the monsoon, the air is clear enough to actually see Chaukhamba from Buda Madmaheshwar, and the path is dry. <strong>May and June</strong> work too, warmer and busier, with the season opening ceremony in late May worth timing for if the ritual interests you.
        </p>
        <p style={p}>
          Skip July and August. The trail is leech-ridden, the river crossings run high, the meadows are in cloud, and you will have walked thirty-two kilometres to look at fog. Our <Link href="/blog/char-dham-monsoon-safety">monsoon safety guide</Link> applies to this valley as much as the main yatra routes.
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
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. He sends every Madhyamaheshwar group up to Buda Madmaheshwar at first light, and treats anyone who skips it as having done four-fifths of the trek. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning the Madhyamaheshwar trek?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Ransi transport · guide and porter · Ukhimath base · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>The Panch Kedar country</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Panch Kedar Yatra', '/panch-kedar-yatra'], ['Kedarnath Temple', '/kedarnath-temple'], ['Chopta & Tungnath', '/chopta-tungnath'], ['Ukhimath', '/ukhimath'], ['Guptkashi Guide', '/guptkashi-guide'], ['Gaurikund Guide', '/gaurikund'], ['Rudraprayag', '/rudraprayag'], ['Kedarnath Yatra', '/kedarnath-yatra'], ['Kedarnath Trek Guide', '/blog/kedarnath-trek-guide'], ['Triyuginarayan Temple', '/blog/triyuginarayan-temple'], ['Phata Helipad', '/phata'], ['Panch Badri Yatra', '/panch-badri-yatra'], ['Char Dham Yatra', '/char-dham-yatra'], ['Altitude Sickness Guide', '/altitude-sickness-char-dham'], ['Monsoon Safety', '/blog/char-dham-monsoon-safety'], ['Road Status', '/char-dham-road-status']].map(([l, href]) => (
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
