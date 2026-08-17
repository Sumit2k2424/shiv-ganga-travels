import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Uttarkashi Hotels ${SITE.season} | Where to Stay for Gangotri` },
  description: `Where to stay for Gangotri ${SITE.season} — Uttarkashi, Harsil, Bhatwari and Gangotri compared on altitude, rooms and drive time to the temple.`,
  keywords: ['uttarkashi hotels','hotels in uttarkashi','uttarkashi accommodation','harsil hotels','gangotri hotels','where to stay gangotri','uttarkashi gmvn','bhatwari hotels','uttarkashi hotel booking'],
  alternates: { canonical: `${SITE.baseUrl}/uttarkashi-hotels` },
  openGraph: {
    title: `Uttarkashi Hotels ${SITE.season} — Where to Stay for Gangotri`,
    description: 'Uttarkashi, Harsil, Bhatwari and Gangotri compared — altitude, rooms, and the one overnight almost every itinerary skips.',
    url: `${SITE.baseUrl}/uttarkashi-hotels`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Uttarkashi hotels ${SITE.season} — where to stay for Gangotri` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Uttarkashi Hotels ${SITE.season} — Where to Stay for Gangotri`,
    description: 'Four bases compared, plus the Harsil night nobody schedules.',
    images: [{ url: '/opengraph-image', alt: 'Uttarkashi hotels' }],
  },
};

const STAYS = [
  {
    loc: 'Uttarkashi', alt: '1,158 m', toGangotri: '100 km', drive: '4–5 hrs',
    band: '₹1,200–₹4,500', tier: 'Standard base',
    desc: 'The district town and the default halt on this leg. By far the widest choice of rooms, from GMVN and plain guesthouses up to comfortable mid-range hotels along the Bhagirathi. It is a mountaineering town — the Nehru Institute of Mountaineering is here — so the shops actually stock warm layers, walking sticks and boots, which is not true further up.',
    rec: 'The safe, sensible choice, and what most itineraries use. Two nights here works well if you are doing Gangotri as a day return.',
    good: true,
  },
  {
    loc: 'Harsil', alt: '~2,620 m', toGangotri: '25 km', drive: '1 hr',
    band: '₹1,500–₹5,000', tier: 'The one worth planning around',
    desc: 'An old deodar and apple-orchard village on the Bhagirathi, an hour short of Gangotri. Limited rooms — a few guesthouses, homestays and a GMVN property — and they go early. The setting is the best of any overnight on the entire Char Dham circuit, and almost no operator schedules it because Uttarkashi is easier to fill.',
    rec: 'If you can get a room and your group handles 2,620 m, take it. Nobody regrets this night.',
    good: true,
  },
  {
    loc: 'Bhatwari', alt: '~1,500 m', toGangotri: '~75 km', drive: '3–4 hrs',
    band: '₹900–₹2,500', tier: 'Quieter alternative',
    desc: 'A small town between Uttarkashi and Harsil with a handful of guesthouses. Fewer options and less food choice, but genuinely quiet and useful when Uttarkashi is full in peak week.',
    rec: 'A reasonable fallback that shortens the next morning slightly.',
    good: false,
  },
  {
    loc: 'Gangotri', alt: '3,415 m', toGangotri: 'At the temple', drive: '—',
    band: '₹800–₹3,000', tier: 'Highest, most basic',
    desc: 'Ashrams, dharamshalas, a GMVN property and a few simple lodges around the temple. Cold, thin air, limited food, and power that comes and goes. What you get is the temple at dawn before anyone drives up, and the sound of the Bhagirathi all night.',
    rec: 'For pilgrims who want early darshan and do not mind roughing it. Not for a first night at altitude.',
    good: false,
  },
  {
    loc: 'Gangnani', alt: '~1,900 m', toGangotri: '~55 km', drive: '2.5 hrs',
    band: '₹800–₹2,000', tier: 'Hot spring stop',
    desc: 'Small settlement built around a sulphur hot spring on the Bhagirathi. A handful of very basic rooms. Most people stop for the kund for twenty minutes rather than staying.',
    rec: 'Worth the stop, rarely worth the night.',
    good: false,
  },
];

const FAQS = [
  {
    q: 'Where should I stay for Gangotri?',
    a: 'Uttarkashi for convenience, Harsil if you can get a room. Uttarkashi at 1,158 m has the widest choice and is 100 km from the temple — a four to five hour drive each way, which makes for a long day. Harsil at 2,620 m is only 25 km out, cuts that drive to an hour, and is the most beautiful overnight on the whole circuit. It has very few rooms and they go early.',
  },
  {
    q: 'How far is Uttarkashi from Gangotri?',
    a: 'About 100 km, and four to five hours each way on mountain road following the Bhagirathi gorge. Doing Gangotri as a day return from Uttarkashi means eight to ten hours in the car. Leave by 5 AM if that is your plan, or break the journey at Harsil.',
  },
  {
    q: 'What do hotels in Uttarkashi cost?',
    a: 'Roughly ₹1,200 to ₹4,500 a room a night depending on standard and season, with peak May–June at the top of that range. GMVN and simpler guesthouses sit lower. Harsil runs a little higher for what you get because supply is so limited.',
  },
  {
    q: 'Is it worth staying at Harsil instead of Uttarkashi?',
    a: 'If your group is comfortable at 2,620 m, yes, and it is one of the few genuinely easy upgrades on a Char Dham itinerary. You shave three hours off the Gangotri day and you spend a night in a deodar valley with apple orchards instead of a district town. The catch is room supply — book well ahead or it will not be available.',
  },
  {
    q: 'Can I stay at Gangotri itself?',
    a: 'Yes — ashrams, dharamshalas, a GMVN property and a few basic lodges. It is 3,415 m, so it is cold and the air is thin, food is limited and power is unreliable. Worth it for dawn darshan before the day traffic arrives. Not somewhere to spend your first night at altitude.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Thirty to forty-five days for Uttarkashi in May and June. Harsil needs longer — sixty days or more, because there are so few rooms. September and October are much easier and two to three weeks is usually enough anywhere on this leg.',
  },
  {
    q: 'Is there a GMVN guest house at Uttarkashi?',
    a: 'Yes, and at Harsil, Gangnani and Gangotri too. GMVN is the Uttarakhand state tourism corporation — plain, clean, honestly priced rooms that you can book directly on their site. They are a reliable fallback when private hotels are full, though peak-season availability is still tight.',
  },
  {
    q: 'Does Uttarkashi have good food and shops?',
    a: 'The best on this leg by some distance. It is a proper district town with a working bazaar, and because the Nehru Institute of Mountaineering is based here the shops genuinely stock warm layers, gloves, walking sticks and boots. If you are underprepared for the cold, buy here rather than hoping to find something at Gangotri.',
  },
  {
    q: 'Is there mobile network at Uttarkashi and Harsil?',
    a: 'Reliable at Uttarkashi, patchy at Harsil, and weak to absent at Gangotri. Uttarkashi is the last place on this leg where you can count on making a call or moving money. Carry cash from here up.',
  },
  {
    q: 'How does the Gangotri leg fit into a Char Dham itinerary?',
    a: 'It usually comes second, after Yamunotri. The standard sequence is Haridwar to Barkot for Yamunotri, then across to Uttarkashi for Gangotri, then the long day east towards the Kedarnath and Badrinath valleys. Uttarkashi is typically nights three and four.',
  },
];

const PAA = [
  { q: 'Which is the best hotel in Uttarkashi?', a: 'Not a question worth answering by name — ownership and standards shift season to season, and a list published today ages badly. What matters is whether the property is on the Gangotri side of town, whether the kitchen runs early, and whether it will hold a booking in peak week. We choose on those.' },
  { q: 'Is Uttarkashi cold?', a: 'Mild by Char Dham standards — it sits at 1,158 m, so nights are cool rather than cold and a blanket is enough. Harsil at 2,620 m is a different matter, and Gangotri at 3,415 m is properly cold even in June.' },
  { q: 'Can I do Gangotri and come back the same day?', a: 'From Uttarkashi, yes, but it is eight to ten hours of driving plus temple time and it makes for a punishing day. From Harsil it is comfortable — an hour each way. This is the single strongest argument for the Harsil night.' },
  { q: 'What is there to see in Uttarkashi itself?', a: 'The Kashi Vishwanath temple with its large iron trident, the Shakti temple beside it, and the riverfront in the evening. An hour covers it. The town is a staging post rather than a destination, but it is a pleasant one.' },
  { q: 'Are there dharamshalas on the Gangotri route?', a: 'Yes, at Uttarkashi and more at Gangotri itself, plus ashram accommodation near the temple. They are inexpensive and basic and mostly do not take advance bookings, which makes them better suited to flexible solo travellers than to groups on a schedule.' },
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
      { '@type': 'ListItem', position: 2, name: 'Gangotri Yatra', item: `${SITE.baseUrl}/gangotri-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Uttarkashi Hotels', item: `${SITE.baseUrl}/uttarkashi-hotels` },
    ],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: `Uttarkashi Hotels ${SITE.season} — Where to Stay for Gangotri`,
    description: 'Uttarkashi, Harsil, Bhatwari, Gangnani and Gangotri compared on altitude, room supply, price band and drive time to the Gangotri temple.',
    mainEntityOfPage: `${SITE.baseUrl}/uttarkashi-hotels`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    datePublished: SITE.lastUpdatedISO,
    dateModified: SITE.lastUpdatedISO,
    author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' },
    publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl },
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

const TH = { padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 };
const TD = { padding: '10px 12px', color: '#475569', fontSize: 13 };
const SCROLL = { overflowX: 'auto', marginBottom: 24 };
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 660 };

export default function UttarkashiHotels() {
  const waText = encodeURIComponent('Namaste! I need Uttarkashi or Harsil accommodation for the Gangotri leg. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Gangotri leg · Uttarkashi district
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Uttarkashi Hotels — Where to Stay for Gangotri
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            The safe answer is Uttarkashi. The better one, if you can get a room, is Harsil — and almost nobody schedules it.
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🛏️ ₹1,200–4,500 typical', '🏔️ 1,158 m', '🚗 100 km to Gangotri', '🍎 Harsil: 25 km out'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/gangotri-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Gangotri Yatra</Link><span>›</span>
          <span>Uttarkashi Hotels</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <p style={p}>
          <strong>Uttarkashi is the sensible base for Gangotri. Harsil is the better one.</strong> The difference is a hundred kilometres against twenty-five, which on this road means a nine-hour day against a three-hour one. Uttarkashi wins on room supply, food and shops; Harsil wins on everything else and loses on availability. Most itineraries use Uttarkashi because it is easier to fill, not because it is better.
        </p>

        <h2 style={h2}>Where to Stay for Gangotri</h2>
        <AnswerBox>
          Uttarkashi at 1,158 m is the standard base for Gangotri &mdash; widest choice of rooms, best
          shops and food, but 100 km and four to five hours from the temple. Harsil at 2,620 m is only
          25 km out, cutting that to an hour, with far fewer rooms. Expect ₹1,200&ndash;4,500 a night.
        </AnswerBox>

        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Base', 'Altitude', 'To Gangotri', 'Drive', 'Typical rate', 'Verdict'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {STAYS.map((s, i) => (
                <tr key={s.loc} style={{ borderBottom: '1px solid hsl(var(--border))', background: s.good ? '#F0FDF4' : (i % 2 === 0 ? '#fff' : 'var(--bg)') }}>
                  <td style={{ ...TD, fontWeight: s.good ? 800 : 600, color: 'var(--navy)' }}>{s.loc}</td>
                  <td style={TD}>{s.alt}</td>
                  <td style={TD}>{s.toGangotri}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#93701C' }}>{s.drive}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#1D9E75' }}>{s.band}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{s.tier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 28 }}>
          Rates are typical per-room bands for the 2026 season and swing hard with demand. May and June sit at the top; September and October well below. A planning guide, not a quote.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {STAYS.map(s => (
            <div key={s.loc} style={{ background: '#fff', borderRadius: 10, padding: '15px 17px', border: '1px solid hsl(var(--border))', borderLeft: `4px solid ${s.good ? '#1D9E75' : 'var(--navy)'}` }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
                <strong style={{ fontSize: 14.5, color: 'var(--navy)' }}>{s.loc}</strong>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{s.alt} · {s.band}</span>
                {s.good && <span style={{ background: 'rgba(29,158,117,0.12)', color: '#1D9E75', fontSize: 11, fontWeight: 700, padding: '2px 9px', borderRadius: 20 }}>Recommended</span>}
              </div>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75, margin: '0 0 6px' }}>{s.desc}</p>
              <div style={{ fontSize: 12.5, color: '#64748b' }}><strong>Verdict:</strong> {s.rec}</div>
            </div>
          ))}
        </div>

        <ExpertNote variant="insider">
          The Harsil night is the best-value change you can make to a Char Dham itinerary and hardly anyone offers it. Operators default to Uttarkashi because it has the rooms to absorb a coachload, and Harsil has perhaps a few dozen beds in total. But an hour from Gangotri instead of five, in an apple-orchard valley under deodar, with the Bhagirathi outside the window &mdash; guests talk about that night more than they talk about some of the temples. We build it in whenever we can get the rooms, which means asking in February for a June trip. Read more on <Link href="/harsil-valley">Harsil valley</Link>.
        </ExpertNote>

        <h2 style={h2}>The Day-Return Problem</h2>
        <p style={p}>
          This is the thing to understand before you pick. From Uttarkashi, <Link href="/gangotri-yatra">Gangotri</Link> is a day return of eight to ten hours in the vehicle plus temple time. It is done constantly and it is perfectly survivable, but it means a 5 AM start and getting back after dark, on a road cut into the side of the Bhagirathi gorge.
        </p>
        <div style={SCROLL}>
          <table style={{ ...TABLE, minWidth: 540 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['From', 'Leave by', 'Drive each way', 'Back by', 'Verdict'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Uttarkashi', '5:00 AM', '4–5 hrs', 'After dark', 'Long but standard'],
                ['Bhatwari', '6:00 AM', '3–4 hrs', 'Early evening', 'Slightly better'],
                ['Harsil', '7:30 AM', '1 hr', 'Early afternoon', 'Comfortable'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: r[0] === 'Harsil' ? '#F0FDF4' : (i % 2 === 0 ? '#fff' : 'var(--bg)') }}>
                  <td style={{ ...TD, fontWeight: r[0] === 'Harsil' ? 800 : 600, color: 'var(--navy)' }}>{r[0]}</td>
                  <td style={{ ...TD, fontWeight: 700, color: '#93701C' }}>{r[1]}</td>
                  <td style={TD}>{r[2]}</td>
                  <td style={TD}>{r[3]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want us to try for the Harsil night?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>It needs booking months ahead and we cannot always get it. Tell us your dates early and we will try.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>Buy Your Warm Layers Here</h2>
        <p style={p}>
          Worth a paragraph of its own. Uttarkashi is a mountaineering town &mdash; the Nehru Institute of Mountaineering is based here &mdash; which means the bazaar genuinely stocks fleeces, gloves, caps, walking sticks and boots at sensible prices. Above Uttarkashi that stops being true; at Gangotri you will find a stall selling overpriced shawls and not much else.
        </p>
        <p style={p}>
          Most people underestimate the cold at 3,415 m, particularly in April and October. If you are short of a layer, this is the last place to fix it, and the same applies to cash: the ATMs work here and they are unreliable above.
        </p>

        <h2 style={h2}>When to Book</h2>
        <p style={p}>
          <strong>Thirty to forty-five days</strong> for Uttarkashi in May and June. <strong>Sixty days or more for Harsil</strong>, because the total room stock is tiny and it is spoken for early. September and October are far easier &mdash; two to three weeks is usually enough anywhere on this leg.
        </p>
        <p style={p}>
          GMVN properties at Uttarkashi, Harsil, Gangnani and Gangotri are a reliable fallback and can be booked directly with the state corporation. Plain rooms, honest pricing, and they hold a share of inventory that private operators cannot block.
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
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. He has been arguing for the Harsil night for fifteen seasons and gets the rooms perhaps half the time. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Gangotri with the accommodation sorted</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Pre-blocked rooms · Harsil where we can get it · registration handled · direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>The Gangotri leg</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Gangotri Yatra', '/gangotri-yatra'], ['Gangotri Temple', '/gangotri-temple'], ['How to Reach Gangotri', '/how-to-reach-gangotri'], ['Gangotri Weather', '/gangotri-weather'], ['Harsil Valley', '/harsil-valley'], ['Mukhba Winter Seat', '/mukhba-gangotri-winter-seat'], ['Barkot Hotels', '/barkot-hotels'], ['Barkot Guide', '/barkot'], ['Char Dham Hotels', '/char-dham-hotels'], ['Char Dham Yatra', '/char-dham-yatra'], ['Teen Dham Yatra', '/teen-dham-yatra'], ['Ek Dham Yatra', '/ek-dham-yatra'], ['Gangotri to Yamunotri', '/gangotri-to-yamunotri-distance'], ['Haridwar to Gangotri', '/haridwar-to-gangotri-distance'], ['Packing List', '/blog/char-dham-yatra-packing-list'], ['Road Status', '/char-dham-road-status']].map(([l, href]) => (
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
