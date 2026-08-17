import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Kainchi Dham — Neem Karoli Baba\'s Ashram, Honestly' },
  description: 'Kainchi Dham near Nainital: what the ashram actually is, the Steve Jobs story people get wrong, the 15 June mela, and how to reach from Delhi or Haridwar.',
  keywords: ['kainchi dham','neem karoli baba','kainchi dham nainital','kainchi dham temple','neem karoli baba ashram','kainchi dham mela 15 june','kainchi dham steve jobs','how to reach kainchi dham','kainchi dham distance from nainital'],
  alternates: { canonical: `${SITE.baseUrl}/kainchi-dham` },
  openGraph: {
    title: 'Kainchi Dham — Neem Karoli Baba\'s Ashram, Honestly',
    description: 'The ashram near Nainital that Steve Jobs and Mark Zuckerberg visited. What it actually is, what the Jobs story gets wrong, and how to reach.',
    url: `${SITE.baseUrl}/kainchi-dham`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kainchi Dham — Neem Karoli Baba ashram, Nainital district' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kainchi Dham — Neem Karoli Baba\'s Ashram, Honestly',
    description: 'What the ashram actually is, and the Steve Jobs story people get wrong.',
    images: [{ url: '/opengraph-image', alt: 'Kainchi Dham ashram' }],
  },
};

const FAQS = [
  {
    q: 'What is Kainchi Dham?',
    a: 'An ashram and Hanuman temple in the Nainital district of Uttarakhand, founded in 1964 by Neem Karoli Baba on land donated by a local man named Purnanand. It sits on the Nainital–Almora road, 17 km from Nainital and 9 km from Bhowali. It is a working ashram rather than a monument, and the atmosphere is closer to a quiet village temple than a tourist site — except in June.',
  },
  {
    q: 'Why is it called Kainchi Dham?',
    a: 'Kainchi means scissors in Hindi. The road to the ashram makes two sharp hairpin bends that cross like an open pair of scissors, and the place is named after the bends rather than anything religious. Locals will point them out as you drive in.',
  },
  {
    q: 'Did Steve Jobs meet Neem Karoli Baba?',
    a: 'No, and almost every article about this gets it wrong. Steve Jobs travelled to India in 1974 with Daniel Kottke specifically to meet Neem Karoli Baba — but Baba had died in September 1973, several months before Jobs arrived. Jobs reached the ashram and found the man he came for was gone. The visit still shaped how he thought about simplicity and intuition, but he never met him.',
  },
  {
    q: 'Why did Mark Zuckerberg visit Kainchi Dham?',
    a: 'On Steve Jobs\'s advice. Zuckerberg has said Jobs told him to visit the ashram when Facebook was struggling in its early years, to reconnect with what the company was supposed to be for. Zuckerberg made the trip and spent time there, and mentioned it publicly during Narendra Modi\'s 2015 visit to Facebook headquarters.',
  },
  {
    q: 'When is the Kainchi Dham mela?',
    a: '15 June every year, marking the temple\'s founding. Thousands of devotees come and the whole valley is given over to it — free bhandara, and traffic on the Nainital–Almora road backed up for kilometres. It is extraordinary to see and a genuinely bad day to visit casually. If you want the ashram quiet, come any other day.',
  },
  {
    q: 'How do I reach Kainchi Dham?',
    a: 'It is 17 km from Nainital and 9 km from Bhowali on the Nainital–Almora road, so most people come as a half-day trip from Nainital. From further afield: Kathgodam is the nearest railhead at about 38 km, Pantnagar the nearest airport at about 70 km, and Delhi is roughly 300 km — a seven to eight hour drive.',
  },
  {
    q: 'Is there an entry fee or booking?',
    a: 'No entry fee and no ticket. The ashram is open to everyone. Photography is restricted inside the temple areas and you should assume it is not allowed unless told otherwise. Dress modestly, remove shoes, and keep your voice down — people are there to sit, not to sightsee.',
  },
  {
    q: 'What are the Kainchi Dham timings?',
    a: 'Broadly 6 AM to 6 PM, with a break in the early afternoon, though hours shift with the season and with ashram activity. Mornings are quieter and better. Winter hours are shorter. If you are driving up specially, it is worth ringing ahead rather than trusting a timing you read online.',
  },
  {
    q: 'Who was Neem Karoli Baba?',
    a: 'A Hindu saint from Uttar Pradesh, widely regarded by devotees as an incarnation of Hanuman, who died in Vrindavan in September 1973. He is best known in the West through Ram Dass, the American teacher whose book Be Here Now described him and brought a generation of Western seekers — including, eventually, Jobs — to his ashrams. He founded more than a hundred temples; Kainchi is the most visited.',
  },
  {
    q: 'Can Kainchi Dham be combined with a Char Dham trip?',
    a: 'Not easily. Kainchi is in Kumaon, in eastern Uttarakhand; Char Dham is in Garhwal, in the west. They are on opposite sides of the state and joining them means a long transfer day. It combines naturally with Nainital, Bhimtal, Almora, Ranikhet and Jim Corbett instead. We run that Kumaon circuit as a separate trip.',
  },
];

const PAA = [
  { q: 'How much time do you need at Kainchi Dham?', a: 'An hour is enough to see it. Most people who come for the ashram rather than the story stay two or three, sitting rather than walking around. If you drive up from Nainital, budget half a day including the road.' },
  { q: 'Is Kainchi Dham crowded?', a: 'Very, on 15 June and through the summer holiday weeks when Nainital fills up. Quiet on weekday mornings outside those periods, and almost empty in winter. The single biggest thing you control is what day you go.' },
  { q: 'Is there accommodation at the ashram?', a: 'Limited, and it is intended for devotees rather than tourists, with its own rules and no online booking. Most visitors stay in Nainital or Bhowali and come across for the morning. Bhimtal and Mukteshwar are also within easy reach.' },
  { q: 'What else is nearby?', a: 'Bhowali is 9 km, Nainital 17 km, Bhimtal about 20 km, Mukteshwar around 45 km and Almora roughly 45 km on the same road. Jim Corbett National Park is a couple of hours away. A Kumaon loop of Nainital, Kainchi, Bhimtal, Mukteshwar and Almora works well over four or five days.' },
  { q: 'What is the best time to visit Kainchi Dham?', a: 'March to June and September to November. The monsoon brings landslides to the Nainital–Almora road, and winter is cold but clear and by far the quietest. Avoid mid-June unless the mela is specifically why you are going.' },
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
      { '@type': 'ListItem', position: 2, name: 'Uttarakhand Tour Packages', item: `${SITE.baseUrl}/uttarakhand-tour-packages` },
      { '@type': 'ListItem', position: 3, name: 'Kainchi Dham', item: `${SITE.baseUrl}/kainchi-dham` },
    ],
  };
  const place = {
    '@context': 'https://schema.org', '@type': 'PlaceOfWorship',
    name: 'Kainchi Dham',
    alternateName: ['Neem Karoli Baba Ashram', 'Kainchi Dham Hanuman Temple'],
    description: 'Ashram and Hanuman temple founded in 1964 by Neem Karoli Baba, on the Nainital–Almora road in Nainital district, Uttarakhand. Known for its annual 15 June mela and for visits by Steve Jobs and Mark Zuckerberg.',
    url: `${SITE.baseUrl}/kainchi-dham`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    address: { '@type': 'PostalAddress', addressLocality: 'Kainchi', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 29.4225, longitude: 79.5125 },
    foundingDate: '1964',
    isAccessibleForFree: true,
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Kainchi Dham — Neem Karoli Baba\'s Ashram, Honestly',
    description: 'A guide to Kainchi Dham near Nainital: what the ashram is, the 15 June mela, the Steve Jobs story people get wrong, and how to reach it.',
    mainEntityOfPage: `${SITE.baseUrl}/kainchi-dham`,
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

export default function KainchiDham() {
  const waText = encodeURIComponent('Namaste! I want a Kumaon trip covering Kainchi Dham and Nainital. Please share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Kumaon · Nainital district · Est. 1964
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Kainchi Dham — Neem Karoli Baba&rsquo;s Ashram, Honestly
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            17 km from Nainital · founded 1964 · the 15 June mela · and the Steve Jobs story almost everyone tells wrong
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🛕 Hanuman temple', '✂️ Kainchi = scissors', '🎪 15 June mela', '🚗 300 km from Delhi'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/uttarakhand-tour-packages" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Uttarakhand</Link><span>›</span>
          <span>Kainchi Dham</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Founded', '1964'], ['District', 'Nainital'], ['From Nainital', '17 km'], ['From Bhowali', '9 km'], ['Entry', 'Free'], ['Annual mela', '15 June']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          <strong>Kainchi Dham is a working ashram, not an attraction</strong> — a Hanuman temple on a bend of the Nainital&ndash;Almora road, founded in 1964 by Neem Karoli Baba, where a few hundred people sit quietly on an ordinary weekday. It is also, thanks to Steve Jobs and Mark Zuckerberg, one of the most-searched temples in Uttarakhand. Those two facts sit awkwardly together, and how you handle that gap determines whether the visit is worth your time.
        </p>

        <h2 style={h2}>What Is Kainchi Dham?</h2>
        <AnswerBox>
          Kainchi Dham is an ashram and Hanuman temple in Nainital district, Uttarakhand, founded in
          1964 by the saint Neem Karoli Baba. It sits 17 km from Nainital and 9 km from Bhowali on the
          Nainital&ndash;Almora road. Entry is free, and its annual mela falls on 15 June.
        </AnswerBox>
        <p style={p}>
          The name is unglamorous and worth knowing: <em>kainchi</em> means scissors, and it refers to two sharp hairpin bends in the road below the ashram that cross like an open pair. No deity, no legend &mdash; just the road. The site was established on land donated by a local man called Purnanand, and the complex grew from there.
        </p>
        <p style={p}>
          <strong>Neem Karoli Baba</strong> was a saint from Uttar Pradesh, regarded by his devotees as an incarnation of Hanuman, who founded more than a hundred temples and died in Vrindavan in September 1973. In India he was known within a particular devotional world. In the West he became known almost entirely through one book &mdash; Ram Dass&rsquo;s <em>Be Here Now</em> &mdash; which sent a generation of American seekers looking for him, and which is the reason a Silicon Valley founder ever heard the name.
        </p>

        <h2 style={h2}>The Steve Jobs Story, Correctly</h2>
        <p style={p}>
          Here is the version you will read almost everywhere: Steve Jobs went to India, met Neem Karoli Baba, and came back changed. It is a good story and it is not true.
        </p>
        <p style={p}>
          Jobs travelled to India in <strong>1974</strong> with his friend Daniel Kottke, specifically to find Neem Karoli Baba. Baba had died in <strong>September 1973</strong>. Jobs arrived months too late, reached the ashram, and the man he had crossed the world for was not there. What he got instead was several months wandering in India, an experience he talked about for the rest of his life as formative &mdash; but he never met the guru.
        </p>
        <p style={p}>
          <strong>Mark Zuckerberg</strong> came in 2015, and that part of the story is straightforward. Jobs had told him to visit the ashram when Facebook was struggling in its early years, to think about what the company was actually for. Zuckerberg went, spent time there, and mentioned it publicly during Narendra Modi&rsquo;s visit to Facebook headquarters that year. Julia Roberts has also spoken about Neem Karoli Baba&rsquo;s influence on her.
        </p>

        <ExpertNote variant="warning">
          Say the quiet part: a lot of people now come here because two billionaires did, and they arrive expecting something to happen. It is a small temple where people sit. If you go looking for the place that made Apple, you will be disappointed within twenty minutes. If you go on a weekday morning, sit at the back, and let it be an ordinary Kumaoni ashram, it is genuinely one of the more peaceful places in the hills. The visitors who come away with something are almost always the second kind.
        </ExpertNote>

        <h2 style={h2}>The 15 June Mela</h2>
        <p style={p}>
          Every year on <strong>15 June</strong>, the ashram marks its founding with a mela that draws tens of thousands of people. There is a free bhandara, the temple runs all day, and the Nainital&ndash;Almora road backs up for kilometres in both directions. It is a real event with real devotion behind it, and if that is what you have come for, it is unforgettable.
        </p>
        <p style={p}>
          If it is not what you came for, this is the single worst day of the year to turn up. Parking is impossible, the road is at a standstill, and you will see crowd rather than ashram. Plan around it deliberately, in one direction or the other.
        </p>

        <h2 style={h2}>How to Reach Kainchi Dham</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['From', 'Distance', 'Time', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Bhowali', '9 km', '20 min', 'Nearest town on the Nainital–Almora road'],
                ['Nainital', '17 km', '40 min', 'The usual base — an easy half-day trip'],
                ['Bhimtal', '20 km', '45 min', 'Quieter alternative base to Nainital'],
                ['Kathgodam', '38 km', '1.5 hrs', 'Nearest railhead, direct trains from Delhi'],
                ['Almora', '45 km', '1.5 hrs', 'Same road, continuing east'],
                ['Pantnagar', '70 km', '2.5 hrs', 'Nearest airport'],
                ['Delhi', '300 km', '7–8 hrs', 'Overnight train to Kathgodam is easier'],
                ['Haridwar', '270 km', '7–8 hrs', 'Long transfer — Kumaon is the far side of the state'],
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
          The practical route from most of India is an overnight train to Kathgodam, then a car for the last ninety minutes. Driving the whole way from Delhi is possible but it is a long day and the last stretch is mountain road.
        </p>

        <h2 style={h2}>Kainchi Dham Is Not Near Char Dham</h2>
        <p style={p}>
          Worth stating plainly, because people ask us this constantly. <strong>Kainchi Dham is in Kumaon; Char Dham is in Garhwal.</strong> They are on opposite sides of Uttarakhand, and joining them means a full transfer day of seven or eight hours through the middle of the state for no scenic reward.
        </p>
        <p style={p}>
          If you want both, treat them as two trips. What Kainchi <em>does</em> combine with is the rest of Kumaon &mdash; Nainital, Bhimtal, Mukteshwar, Almora, Ranikhet and Jim Corbett all sit within a couple of hours, and a four or five day loop covers them comfortably. If Garhwal is what you are planning, see <Link href="/char-dham-yatra">Char Dham</Link>, <Link href="/do-dham-yatra">Do Dham</Link> or <Link href="/teen-dham-yatra">Teen Dham</Link> instead.
        </p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want the Kumaon loop rather than just the temple?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>Nainital, Kainchi, Bhimtal, Mukteshwar, Almora — we run it from Kathgodam or Delhi. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>Practical Notes Before You Go</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            { t: 'Timings shift — ring ahead', d: 'Broadly 6 AM to 6 PM with an afternoon break, but hours move with the season and with what the ashram is doing. If you are driving up specially, confirm rather than trusting a number you read online, this page included.' },
            { t: 'Photography is restricted', d: 'Assume not allowed inside temple areas unless you are told otherwise. Nobody will be rude about it, but it is an active place of worship and people are praying, not posing.' },
            { t: 'Dress and behave as you would in any temple', d: 'Covered shoulders and knees, shoes off, voices down. The Silicon Valley association brings a certain kind of visitor who forgets this.' },
            { t: 'Go on a weekday morning', d: 'The single decision that most affects your visit. Weekday mornings outside the summer holidays are quiet. Summer weekends, when Nainital is full, are not.' },
            { t: 'There is no ticket and no queue system', d: 'Entry is free and open. There is nothing to book, nothing to pay, and anyone charging you for access is not connected to the ashram.' },
          ].map(x => (
            <div key={x.t} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))', borderLeft: '4px solid var(--teal)' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 6 }}>{x.t}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75 }}>{x.d}</div>
            </div>
          ))}
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
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Garhwal is home ground, but we have run the Kumaon circuit &mdash; Nainital, Kainchi, Almora, Corbett &mdash; for years, and the advice above about which day to go is earned from taking groups there on the wrong ones. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Kumaon trip?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Elsewhere in Uttarakhand</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Uttarakhand Packages', '/uttarakhand-tour-packages'], ['Chitai Golu Devta, Almora', '/chitai-golu-devta-temple'], ['Rajaji National Park', '/rajaji-national-park'], ['Chopta & Tungnath', '/chopta-tungnath'], ['Auli Skiing', '/auli-skiing-package'], ['Mussoorie Packages', '/mussoorie-tour-packages'], ['Rishikesh Packages', '/rishikesh-tour-packages'], ['Surkanda Devi Temple', '/surkanda-devi-temple'], ['Char Dham Yatra', '/char-dham-yatra'], ['Do Dham Yatra', '/do-dham-yatra'], ['Teen Dham Yatra', '/teen-dham-yatra'], ['Devprayag Sangam', '/devprayag'], ['Rudraprayag', '/rudraprayag'], ['All Packages', '/packages'], ['Cabs in Uttarakhand', '/cabs'], ['Contact Us', '/contact']].map(([l, href]) => (
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
