import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Vridh Badri Temple — Animath, the Easiest Panch Badri Shrine | Full Guide' },
  description: 'Vridh Badri at Animath, 7 km from Joshimath, is where Vishnu appeared to Narada in aged form — the closest and easiest of the five Panch Badri shrines to visit.',
  keywords: ['vridh badri temple','vriddha badri','animath temple','panch badri vridh badri','vridh badri joshimath','narada vishnu darshan animath'],
  alternates: { canonical: `${SITE.baseUrl}/vridh-badri-temple` },
  openGraph: { title: 'Vridh Badri Temple — Animath, the Easiest Panch Badri Shrine', description: 'Where Vishnu appeared to Narada in aged form, 7 km from Joshimath.', url: `${SITE.baseUrl}/vridh-badri-temple`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Vridh Badri Temple, Animath' }] },
  twitter: { card: 'summary_large_image', title: 'Vridh Badri Temple — Animath', description: 'The easiest of the five Panch Badri shrines, 7 km from Joshimath.', images: [{ url: '/opengraph-image', alt: 'Vridh Badri Temple' }] },
};

const FAQS = [
  { q: 'What is Vridh Badri temple?', a: 'Vridh Badri (also spelt Vriddha Badri) is a small Vishnu temple at Animath village, about 7 km from Joshimath on the main Char Dham highway, at roughly 1,380 m. It is one of the five Panch Badri shrines and, unusually for the circuit, requires no trek and no detour — it sits right off the road.' },
  { q: 'What does the name Vridh Badri mean?', a: 'Vridh (or vriddha) means "old" or "aged". The temple enshrines Vishnu in the form he is said to have taken when he first appeared before the sage Narada at this spot — not as the youthful, richly adorned deity of Badrinath, but as an elderly figure. The legend holds that this aged form was the very first darshan of Vishnu at Badri, before the main Badrinarayan shrine further up the valley was ever established.' },
  { q: 'What is the Narada legend at Vridh Badri?', a: 'Narada, the celestial sage who appears throughout Puranic literature as a messenger between gods and mortals, is said to have had his first vision of Vishnu here, at Animath, in the god\'s aged form. Only afterward, tradition says, did the main Badrinath shrine come to be established higher up the Alaknanda valley — making Vridh Badri, by this account, the origin point of Badri worship rather than a later offshoot of it.' },
  { q: 'How far is Vridh Badri from Joshimath and Badrinath?', a: 'Just 7 km from Joshimath — a 20-30 minute drive — and about 40 km from Badrinath itself. Of the four secondary Panch Badri shrines, it is by far the easiest to reach: no trek, no long detour, directly accessible by road.' },
  { q: 'Is Vridh Badri open year-round?', a: 'Yes. At 1,380 m it sits well below the snow line that closes Badrinath each winter, so along with Adi Badri and Yogdhyan Badri it remains open through the off-season.' },
  { q: 'How long does a visit to Vridh Badri take?', a: 'About 30-45 minutes including the drive from Joshimath. It is a small, unhurried temple with none of the crowd management of the main dhams — most pilgrims combine it with a stop at Joshimath\'s Narsingh temple or Vishnu Prayag on the same day.' },
];

const PAA = [
  { q: 'Which is the easiest Panch Badri temple to visit?', a: 'Vridh Badri, by a wide margin. It is only 7 km from Joshimath on a paved road, involves no trek, and can be visited in under an hour — compared to Bhavishya Badri\'s 6 km trek or Adi Badri\'s 17 km detour off the highway.' },
  { q: 'Why is Vishnu shown as elderly at Vridh Badri?', a: 'The legend explains it as the form Vishnu chose for his first appearance to the sage Narada — an aged, ascetic image rather than the youthful, ornamented one worshipped at the main Badrinath temple. It represents Vishnu before Badri worship, in a sense, at its very origin.' },
  { q: 'Can Vridh Badri be visited alongside Joshimath sightseeing?', a: 'Yes, easily — most itineraries pair it with the Narsingh temple in Joshimath itself and, road conditions permitting, Vishnu Prayag (the Alaknanda–Dhauliganga confluence) a short distance further on.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Panch Badri Yatra', item: `${SITE.baseUrl}/panch-badri-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Vridh Badri', item: `${SITE.baseUrl}/vridh-badri-temple` },
  ]};
  const place = { '@context': 'https://schema.org', '@type': 'HinduTemple', name: 'Vridh Badri Temple', alternateName: ['Vriddha Badri', 'Animath Temple'], description: 'A Panch Badri shrine at Animath village near Joshimath, Uttarakhand, where Vishnu is worshipped in an aged form tied to the legend of his first darshan to the sage Narada.', url: `${SITE.baseUrl}/vridh-badri-temple`, image: [`${SITE.baseUrl}/opengraph-image`], address: { '@type': 'PostalAddress', addressLocality: 'Animath, Chamoli', addressRegion: 'Uttarakhand', addressCountry: 'IN' }, geo: { '@type': 'GeoCoordinates', latitude: 30.5333, longitude: 79.5667, elevation: '1,380 m' }, isAccessibleForFree: true, touristType: ['Pilgrims'] };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Vridh Badri Temple — Animath, the Easiest Panch Badri Shrine', description: 'A guide to Vridh Badri: the Narada legend, why Vishnu is shown aged here, and how to reach Animath from Joshimath.', mainEntityOfPage: `${SITE.baseUrl}/vridh-badri-temple`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
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
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 480 };

export default function VridhBadri() {
  const waText = encodeURIComponent('Namaste! I want to add Vridh Badri / Animath to my Joshimath–Badrinath itinerary. Please share details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Animath · 1,380 m · Panch Badri</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Vridh Badri — Vishnu's First Darshan to Narada</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>Seven km from Joshimath, no trek required — the easiest of the five Panch Badri shrines, where Vishnu appeared in aged form</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🛕 Vishnu in aged form', '📖 Narada legend', '🚗 7 km from Joshimath', '❄️ Open year-round'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/panch-badri-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Panch Badri Yatra</Link><span>›</span>
          <span>Vridh Badri</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '1,380 m'], ['Village', 'Animath'], ['From Joshimath', '7 km'], ['From Badrinath', '~40 km'], ['Trek needed', 'None'], ['Open', 'Year-round']].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>Of the five Panch Badri shrines, this is the one with no excuse to skip.</strong> No 6 km trek like Bhavishya Badri, no 17 km detour like Adi Badri — just a 20-minute drive from Joshimath to the small village of Animath, where Vishnu is worshipped not as the ornamented god of the main temple but as an old man, in the form legend says he first showed himself to a sage.</p>

        <h2 style={h2}>What Is Vridh Badri?</h2>
        <AnswerBox>
          Vridh Badri (Vriddha Badri) is a Vishnu temple at Animath village, 7 km from Joshimath on the Badrinath highway, at about 1,380 m. It is one of the Panch Badri shrines, notable for depicting Vishnu in an aged form and for being the most accessible of the four secondary Badri temples — no trek is required.
        </AnswerBox>

        <h2 style={h2}>The Narada Legend</h2>
        <p style={p}>Tradition holds that the celestial sage <strong>Narada</strong> — a recurring figure in Puranic stories, forever travelling between worlds carrying news and mischief in equal measure — received his first vision of Vishnu at exactly this spot. Not the youthful deity worshipped up at the main Badrinath shrine, but an elderly, ascetic form: Vishnu as he is said to have appeared before Badri worship, in its grander form, had even been established.</p>
        <p style={p}>Read that way, Vridh Badri is not a lesser echo of Badrinath but something closer to its origin point — the place where, by legend, Vishnu was first seen at Badri at all, before the pilgrimage as we know it existed. It is a modest, unhurried temple, and that quietness is arguably the most fitting way to encounter a god shown in his oldest, most unadorned form.</p>

        <ExpertNote variant="insider">
          Pair it with the Narsingh temple in Joshimath and, if the road is open, Vishnu Prayag a short drive further — you can do all three in half a day without rushing any of them. Most Char Dham drivers won't suggest this unprompted because it isn't in the standard package; ask for it specifically if you have even one spare morning around Joshimath.
        </ExpertNote>

        <h2 style={h2}>How to Reach Vridh Badri</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['From', 'Distance', 'Drive time', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {[
                ['Joshimath', '7 km', '20–25 min', 'Paved road, no trek'],
                ['Badrinath', '~40 km', '1.5 hrs', 'Via Joshimath'],
                ['Haridwar', '~275 km', '9 hrs', 'Standard Char Dham road route'],
                ['Vishnu Prayag', '~10 km', '25 min', 'The Alaknanda–Dhauliganga confluence, on the same road'],
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

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want Vridh Badri added to your Badrinath trip?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>It costs almost nothing to add — one short stop near Joshimath. Tell us your itinerary.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>When to Go</h2>
        <p style={p}>Open year-round at 1,380 m. <strong>May–June and September–October</strong> line up with the main Badrinath season and are the easiest time to combine both stops. Outside that window, road access to Joshimath itself depends on winter snowfall further up the valley — check <Link href="/char-dham-road-status">current road status</Link> if travelling December to March.</p>

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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Routes the full Panch Badri circuit including its easy-to-skip stops. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Badrinath or Panch Badri trip?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>The Panch Badri circuit</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Panch Badri Yatra', '/panch-badri-yatra'], ['Badrinath Temple', '/badrinath-temple'], ['Yogdhyan Badri', '/yogdhyan-badri-temple'], ['Bhavishya Badri', '/bhavishya-badri-temple'], ['Adi Badri', '/adi-badri-temple'], ['Joshimath Narsingh Temple', '/joshimath-narsingh-temple'], ['Tapt Kund', '/tapt-kund'], ['Char Dham Yatra', '/char-dham-yatra']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
