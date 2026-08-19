import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Barkot — Night One of Every Char Dham Yatra' },
  description: 'Barkot at 1,220 m is the base for Yamunotri: 36 km to Janki Chatti, then the trek. Where to stay, why the 4 AM start matters, and how to reach.',
  keywords: ['barkot','barkot uttarakhand','barkot to yamunotri distance','barkot hotels','barkot to janki chatti','yamunotri base camp','barkot altitude','haridwar to barkot','barkot weather'],
  alternates: { canonical: `${SITE.baseUrl}/barkot` },
  openGraph: {
    title: 'Barkot — Night One of Every Char Dham Yatra',
    description: 'The Yamunotri base at 1,220 m. 36 km to Janki Chatti, then a 6 km trek. Where to stay and why the early start matters.',
    url: `${SITE.baseUrl}/barkot`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Barkot — Yamunotri base town, Uttarakhand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barkot — Night One of Every Char Dham Yatra',
    description: 'The Yamunotri base at 1,220 m. Where to stay and why the early start matters.',
    images: [{ url: '/opengraph-image', alt: 'Barkot, Yamunotri base' }],
  },
};

const FAQS = [
  {
    q: 'What is Barkot known for?',
    a: 'Being the base for Yamunotri. It sits at 1,220 m in Uttarkashi district on the Yamuna, and it is where almost every Char Dham itinerary spends its first night. From here it is 36 km by road to Janki Chatti and then a 5–6 km trek to the temple. Barkot itself is a modest market town — apple orchards, deodar on the slopes above, and a lot of pilgrim traffic between late April and November.',
  },
  {
    q: 'How far is Barkot from Yamunotri?',
    a: 'About 36 km by road to Janki Chatti, roughly an hour and a half on mountain road, then 5–6 km on foot to the temple at 3,293 m. Allow a full day for the round trip from Barkot and start early — most groups leave between 4 and 5 AM.',
  },
  {
    q: 'How do I reach Barkot from Haridwar?',
    a: 'About 220 km, seven to eight hours via Rishikesh, Narendranagar, Chamba and Naugaon. The alternative route via Dehradun and Mussoorie is scenic and passes Kempty Falls, but it is slower and busier in season. Most operators, us included, run the Rishikesh road.',
  },
  {
    q: 'Should I stay at Barkot or Janki Chatti?',
    a: 'Barkot, in almost every case. It has far more rooms, better food, mobile signal that works, and pharmacies. Janki Chatti is closer to the trek but the accommodation is basic and limited, and it fills up first. The 36 km drive at 4 AM is the price of a decent night\'s sleep, and it is worth paying.',
  },
  {
    q: 'What is the altitude of Barkot?',
    a: 'About 1,220 m. Low enough that altitude is not an issue here, which is exactly why it works as a first night — you sleep comfortably before going up to 3,293 m at Yamunotri the next day. Janki Chatti, by contrast, is around 2,650 m.',
  },
  {
    q: 'Is the Yamunotri trek difficult?',
    a: 'It is the gentler of the two Char Dham treks — 5–6 km from Janki Chatti against 16 km at Kedarnath, with a steady rather than brutal gradient. Most reasonably fit people manage it in two to three hours. Ponies and palkis are available the whole way for those who cannot walk it.',
  },
  {
    q: 'What is there to do in Barkot itself?',
    a: 'Not a great deal, and that is fine — it is a staging post, not a destination. The apple orchards on the slopes above are worth a walk in season, and the Yamuna running through the town is pleasant at dusk. Most people arrive in the evening, eat, and are gone before dawn.',
  },
  {
    q: 'When is the best time to visit Barkot?',
    a: 'Late April to June and September to early November, matching the Yamunotri season. The temple opens around 19 April and closes near Bhai Dooj in November. Avoid July and August — the road through Naugaon and up to Janki Chatti is landslide-prone and the trek is miserable in heavy rain.',
  },
  {
    q: 'Is there mobile network at Barkot?',
    a: 'Yes, generally reliable, which is more than can be said for most of what follows. Signal deteriorates sharply on the road up to Janki Chatti and is largely absent on the Yamunotri trek. Barkot is a good place to make the calls you need to make.',
  },
  {
    q: 'Does Barkot work as a base for Gangotri too?',
    a: 'Not really. Gangotri is reached from Uttarkashi, about 100 km further on, and that is where you should sleep for it. Barkot is a Yamunotri base. The standard sequence is Barkot for Yamunotri, then move to Uttarkashi for Gangotri the following day.',
  },
];

const PAA = [
  { q: 'How many days do you need at Barkot?', a: 'One night before Yamunotri and, on a slower itinerary, a second night after. Two nights at Barkot with the Yamunotri day between them is the comfortable version and the one we recommend for older groups. Nobody stays longer than that.' },
  { q: 'Can you drive to Yamunotri temple?', a: 'No. The road ends at Janki Chatti and the last 5–6 km is on foot, by pony, or in a palki. There is no vehicle access to the temple itself, and no helicopter service comparable to Kedarnath\'s.' },
  { q: 'What is Kharsali near Barkot?', a: 'The winter seat of Yamunotri, just across the river from Janki Chatti. From November to April the Yamunotri deity is worshipped there instead of at the temple. It is a short detour from the Janki Chatti roadhead and almost nobody visits it in season.' },
  { q: 'Is Barkot on the way to Kedarnath?', a: 'Only in the sense that the full Char Dham circuit passes through it first. Barkot sits in the Yamuna valley in the west; Kedarnath is in the Mandakini valley in the east, and getting between them is a long day via Tehri and Rudraprayag. If you are skipping Yamunotri, you skip Barkot.' },
  { q: 'Are there ATMs at Barkot?', a: 'A few, and they run dry in peak season. Draw cash at Rishikesh or Dehradun before you come up. Ponies, palkis, dhabas and prasad on the Yamunotri leg are all cash, and UPI fails as soon as the signal does.' },
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
      { '@type': 'ListItem', position: 2, name: 'Yamunotri Yatra', item: `${SITE.baseUrl}/yamunotri-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Barkot', item: `${SITE.baseUrl}/barkot` },
    ],
  };
  const place = {
    '@context': 'https://schema.org', '@type': 'TouristAttraction',
    name: 'Barkot',
    description: 'Town at 1,220 m in Uttarkashi district, Uttarakhand, on the Yamuna river — the standard overnight base for the Yamunotri leg of the Char Dham Yatra, 36 km from Janki Chatti.',
    url: `${SITE.baseUrl}/barkot`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    address: { '@type': 'PostalAddress', addressLocality: 'Barkot', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 30.8092, longitude: 78.2064, elevation: '1220 m' },
    touristType: ['Pilgrims', 'Families'],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Barkot — Night One of Every Char Dham Yatra',
    description: 'A guide to Barkot, the Yamunotri base: distances to Janki Chatti and the temple, where to stay, why the early start matters, and how to reach from Haridwar.',
    mainEntityOfPage: `${SITE.baseUrl}/barkot`,
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

export default function Barkot() {
  const waText = encodeURIComponent('Namaste! I want a Char Dham itinerary with a proper Barkot / Yamunotri plan. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            1,220 m · Uttarkashi district · Yamunotri base
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Barkot — Night One of Every Char Dham Yatra
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            220 km from Haridwar · 36 km to Janki Chatti · then 5&ndash;6 km on foot to Yamunotri
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🛏️ The standard first night', '🚗 36 km to Janki Chatti', '🥾 5–6 km trek', '📶 Signal still works here'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/yamunotri-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Yamunotri Yatra</Link><span>›</span>
          <span>Barkot</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '1,220 m'], ['District', 'Uttarkashi'], ['From Haridwar', '220 km'], ['To Janki Chatti', '36 km'], ['Trek to Yamunotri', '5–6 km'], ['Season', 'Apr – Nov']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          <strong>Barkot is where the Char Dham Yatra actually begins.</strong> Not spiritually &mdash; that is Yamunotri, the next morning &mdash; but practically. After seven or eight hours of driving from Haridwar you arrive here in the evening at 1,220 m, eat, and sleep badly because you are getting up at four. Almost every itinerary on the circuit has this night in it, and almost nobody writes about the town, because there is not much to write. What there is, is worth getting right.
        </p>

        <h2 style={h2}>What Is Barkot?</h2>
        <AnswerBox>
          Barkot is a market town at 1,220 m in Uttarkashi district, Uttarakhand, on the Yamuna river.
          It is the standard overnight base for the Yamunotri leg of the Char Dham Yatra &mdash; 36 km
          by road to Janki Chatti, then a 5&ndash;6 km trek to the temple at 3,293 m.
        </AnswerBox>
        <p style={p}>
          The town sits in a broad part of the Yamuna valley with apple orchards on the terraces and deodar on the slopes above. Between late April and November it is full of pilgrims and the hotels run at capacity; the rest of the year it goes back to being a quiet district town. There is no great monument here and no reason to pretend otherwise. Barkot&rsquo;s value is entirely in where it sits.
        </p>

        <h2 style={h2}>Barkot to Yamunotri — the Actual Day</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Stage', 'Distance', 'How', 'Time'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Barkot → Janki Chatti', '36 km', 'Road, via Hanuman Chatti', '1.5 hrs'],
                ['Janki Chatti → Yamunotri', '5–6 km', 'Foot, pony or palki', '2–3 hrs up'],
                ['At the temple', '—', 'Surya Kund, Divya Shila, darshan', '1–1.5 hrs'],
                ['Yamunotri → Janki Chatti', '5–6 km', 'Descent', '1.5–2 hrs'],
                ['Janki Chatti → Barkot', '36 km', 'Road', '1.5 hrs'],
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
          That is a nine to eleven hour day, round trip, and it is why the 4 AM departure is not operator sadism. Leave at seven and you are trekking down in the dark. At the top there is the <strong>Surya Kund</strong> hot spring, where people cook rice tied in cloth and carry it back as prasad, and the <strong>Divya Shila</strong> rock slab that is worshipped before entering the temple. Full detail on the shrine itself is in our <Link href="/yamunotri-temple">Yamunotri temple guide</Link>.
        </p>

        <ExpertNote variant="tip">
          Take the pony from Janki Chatti even if you intend to walk. Not for the way up &mdash; for the way down. The descent is where knees give out, and by then you have already been on your feet for six hours. Booking it at the bottom in the morning costs the same as booking it at the top in the afternoon and saves you the negotiation when you are exhausted. Every experienced yatri does this.
        </ExpertNote>

        <h2 style={h2}>Barkot or Janki Chatti?</h2>
        <p style={p}>
          A genuine choice, and most people get told the wrong answer.
        </p>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Base', 'Altitude', 'Rooms', 'The trade'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Barkot', '1,220 m', 'Plenty, decent, real food', 'A 36 km drive at 4 AM, and a proper night\'s sleep'],
                ['Janki Chatti', '~2,650 m', 'Limited and basic', 'Start at the trailhead — but colder, thinner air, worse beds'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: r[0] === 'Barkot' ? '#F0FDF4' : (i % 2 === 0 ? '#fff' : 'var(--bg)') }}>
                  <td style={{ ...TD, fontWeight: r[0] === 'Barkot' ? 800 : 600, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{r[1]}</td>
                  <td style={TD}>{r[2]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          We use Barkot for essentially every group. The 1,400 m difference in sleeping altitude matters more than the drive does, especially on night one when nobody is acclimatised yet, and the food and rooms are not close. Janki Chatti makes sense only if you are travelling very light and very early in the season when Barkot is full.
        </p>

        <h2 style={h2}>How to Reach Barkot</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['From', 'Distance', 'Time', 'Route'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Haridwar', '220 km', '7–8 hrs', 'Rishikesh → Narendranagar → Chamba → Naugaon'],
                ['Rishikesh', '200 km', '7 hrs', 'The standard operator route'],
                ['Dehradun', '130 km', '5 hrs', 'Via Mussoorie and Kempty Falls — scenic, slower'],
                ['Mussoorie', '100 km', '4 hrs', 'Kempty Falls en route'],
                ['Uttarkashi', '100 km', '4 hrs', 'The onward leg towards Gangotri'],
                ['Janki Chatti', '36 km', '1.5 hrs', 'The Yamunotri roadhead'],
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
          Nearest railheads are Rishikesh and Haridwar; nearest airport is Jolly Grant at Dehradun. The Mussoorie route is prettier and passes Kempty Falls, but it is slower and clogged in season &mdash; we run the Rishikesh road and stop at Kempty on the way back instead, when nobody is in a hurry.
        </p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Planning the Yamunotri leg?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>Barkot hotel, pony booking and a departure time that gets you down in daylight. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>Where Barkot Sits on the Circuit</h2>
        <p style={p}>
          On a full <Link href="/char-dham-yatra">Char Dham</Link> itinerary the sequence is fixed by geography: Haridwar to Barkot, Yamunotri and back, then on to <Link href="/gangotri-yatra">Uttarkashi for Gangotri</Link>, then the long crossing east to the Kedarnath and Badrinath valleys. Barkot is nights one and two, and if you drop Yamunotri &mdash; which is one of the standard <Link href="/teen-dham-yatra">Teen Dham</Link> choices &mdash; you drop Barkot with it and start from Uttarkashi instead.
        </p>
        <p style={p}>
          One thing worth knowing while you are here: <strong>Kharsali</strong>, just across the river from Janki Chatti, is the winter seat of Yamunotri. From November to April the deity is worshipped there rather than at the temple, in the same arrangement that sends Kedarnath down to <Link href="/ukhimath">Ukhimath</Link>. Almost no one visits it in season, and it is a five-minute detour from the roadhead.
        </p>

        <h2 style={h2}>When to Go</h2>
        <p style={p}>
          The Yamunotri season, roughly <strong>19 April to mid-November</strong>. May and June are peak and Barkot&rsquo;s hotels sell out well ahead. <strong>September and October</strong> are better in every way except that the days are shorter, which matters on a trek day.
        </p>
        <p style={p}>
          Avoid July and August. The road through Naugaon and up to Janki Chatti is landslide-prone, the trek is genuinely unpleasant in heavy rain, and the Yamuna runs high and brown. See our <Link href="/blog/char-dham-monsoon-safety">monsoon safety notes</Link> and the <Link href="/char-dham-road-status">road status page</Link> before travelling in the rains.
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
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Fifteen seasons of first nights at Barkot, and the advice about booking the pony before you climb rather than after comes from watching a lot of people learn it the hard way. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Char Dham with the Yamunotri day planned properly</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>The Yamunotri leg</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Barkot Hotels', '/barkot-hotels'], ['Janki Chatti Guide', '/janki-chatti'], ['Yamunotri Pony & Palki Rates', '/yamunotri-pony-palki-rates'], ['Yamunotri Yatra', '/yamunotri-yatra'], ['Yamunotri Temple', '/yamunotri-temple'], ['How to Reach Yamunotri', '/how-to-reach-yamunotri'], ['Yamunotri Weather', '/yamunotri-weather'], ['Gangotri Yatra', '/gangotri-yatra'], ['Harsil Valley', '/harsil-valley'], ['Surkanda Devi Temple', '/surkanda-devi-temple'], ['Char Dham Yatra', '/char-dham-yatra'], ['Teen Dham Yatra', '/teen-dham-yatra'], ['Devprayag', '/devprayag'], ['Ukhimath', '/ukhimath'], ['Mussoorie Packages', '/mussoorie-tour-packages'], ['Char Dham Route Map', '/char-dham-yatra-route-map'], ['Road Status', '/char-dham-road-status'], ['Packing List', '/blog/char-dham-yatra-packing-list'], ['Char Dham from Haridwar', '/char-dham-yatra-from-haridwar']].map(([l, href]) => (
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
