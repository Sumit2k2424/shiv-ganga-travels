import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Yogdhyan Badri, Pandukeshwar — Badrinath's Winter Seat` },
  description: 'Yogdhyan Badri at Pandukeshwar is where the Badrinath deity moves each winter, and where the Pandavas are said to have meditated after the Mahabharata. Legend, history and how to reach.',
  keywords: ['yogdhyan badri temple','yogadhyan badri','pandukeshwar temple','badrinath winter seat','panch badri yogdhyan badri','pandukeshwar badrinath'],
  alternates: { canonical: `${SITE.baseUrl}/yogdhyan-badri-temple` },
  openGraph: { title: 'Yogdhyan Badri Temple — Pandukeshwar, Winter Seat of Badrinath', description: 'Where the Badrinath deity moves each winter, and where the Pandavas are said to have meditated.', url: `${SITE.baseUrl}/yogdhyan-badri-temple`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Yogdhyan Badri Temple, Pandukeshwar' }] },
  twitter: { card: 'summary_large_image', title: 'Yogdhyan Badri Temple — Winter Seat of Badrinath', description: 'Where the Badrinath deity moves each winter at Pandukeshwar.', images: [{ url: '/opengraph-image', alt: 'Yogdhyan Badri Temple' }] },
};

const FAQS = [
  { q: 'What is Yogdhyan Badri temple?', a: 'Yogdhyan Badri is a temple to Vishnu at Pandukeshwar, on the road between Joshimath and Badrinath, at about 1,920 m. It is one of the five Panch Badri shrines and holds a unique role: it is the official winter seat of the Badrinath deity — when the main temple closes each November, the utsav murti (processional idol) is carried down and worshipped here until the temple reopens the following spring.' },
  { q: 'Why is it called the winter seat of Badrinath?', a: 'Badrinath temple, at 3,133 m, is buried under snow and completely inaccessible from mid-November to late April. Rather than leave the deity unworshipped for five months, the tradition — mirrored at the other three dhams with their own winter seats — moves a processional form of the god down to a lower, accessible shrine. For Badrinath, that shrine is Yogdhyan Badri at Pandukeshwar, roughly 1,200 m lower and reachable by road all winter.' },
  { q: 'What is the Pandava legend at Yogdhyan Badri?', a: 'Pandukeshwar takes its name from Pandu, father of the five Pandavas, who is said to have done penance here. A stronger and more commonly told version ties the site to Yudhishthira, the eldest Pandava, who is believed to have practised yoga and meditation (dhyan) at this spot after the Kurukshetra war — which is where the temple\'s name, Yogdhyan Badri, comes from: Vishnu worshipped here in the posture of one deep in yogic meditation.' },
  { q: 'How far is Yogdhyan Badri from Badrinath and Joshimath?', a: 'About 24 km from Badrinath and roughly 22–24 km from Joshimath, on the same NH-7 road that connects the two. It sits directly on the main Char Dham highway, unlike Adi Badri or Bhavishya Badri, which require detours.' },
  { q: 'Is Yogdhyan Badri open year-round?', a: 'Yes — it has to be, given its role as the winter seat. Pandukeshwar sits low enough (1,920 m) to stay accessible through the winter months when Badrinath itself is shut, which is precisely why the tradition chose it.' },
  { q: 'Is there anything else to see at Pandukeshwar?', a: 'Yes — right beside the Yogdhyan Badri temple stands a second, older shrine, the Yogbadri or Vasudev temple, along with a set of inscribed copper plates from the Katyuri dynasty (9th century) documenting land grants to the temple, among the oldest surviving historical records in Garhwal. The village itself is small, quiet, and rarely visited outside the winter darshan season.' },
];

const PAA = [
  { q: 'Which temple houses the Badrinath deity in winter?', a: 'Yogdhyan Badri temple at Pandukeshwar. The processional idol is escorted down in a formal ceremony after the Badrinath temple\'s closing rites each November and stays there, receiving daily worship, until the main temple reopens.' },
  { q: 'Can pilgrims visit Yogdhyan Badri in winter?', a: 'Yes, and this is exactly the point of the winter seat system — pilgrims who cannot reach Badrinath itself between November and April can still have darshan of the deity at Pandukeshwar, on a road that stays open.' },
  { q: 'Is Yogdhyan Badri part of the standard Char Dham itinerary?', a: 'Not by default — most Char Dham packages drive past Pandukeshwar without stopping, since it sits en route but isn\'t a required halt. Pilgrims doing the fuller Panch Badri circuit, or anyone travelling in winter, should ask specifically for the stop.' },
  { q: 'What does "Yogdhyan" mean?', a: 'Yog (yoga) plus dhyan (meditation) — Vishnu worshipped in the posture of deep meditative absorption, tied to the legend of Yudhishthira meditating here after the Mahabharata war.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Panch Badri Yatra', item: `${SITE.baseUrl}/panch-badri-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Yogdhyan Badri', item: `${SITE.baseUrl}/yogdhyan-badri-temple` },
  ]};
  const place = { '@context': 'https://schema.org', '@type': 'HinduTemple', name: 'Yogdhyan Badri Temple', alternateName: ['Yogadhyan Badri', 'Pandukeshwar Temple'], description: 'The winter seat of the Badrinath deity, at Pandukeshwar on the Joshimath–Badrinath road, Uttarakhand. One of the Panch Badri shrines, tied to the legend of Yudhishthira\'s meditation after the Mahabharata.', url: `${SITE.baseUrl}/yogdhyan-badri-temple`, image: [`${SITE.baseUrl}/opengraph-image`], address: { '@type': 'PostalAddress', addressLocality: 'Pandukeshwar, Chamoli', addressRegion: 'Uttarakhand', addressCountry: 'IN' }, geo: { '@type': 'GeoCoordinates', latitude: 30.5833, longitude: 79.5333, elevation: '1,920 m' }, isAccessibleForFree: true, touristType: ['Pilgrims', 'Winter yatra pilgrims'] };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Yogdhyan Badri Temple — Pandukeshwar, Winter Seat of Badrinath', description: 'A guide to Yogdhyan Badri: its role as Badrinath\'s winter seat, the Pandava legend, and how to reach Pandukeshwar.', mainEntityOfPage: `${SITE.baseUrl}/yogdhyan-badri-temple`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
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

export default function YogdhyanBadri() {
  const waText = encodeURIComponent('Namaste! I want a Char Dham or Panch Badri itinerary that stops at Yogdhyan Badri / Pandukeshwar. Please share details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Pandukeshwar · 1,920 m · Panch Badri</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Yogdhyan Badri — Where Badrinath Winters</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>The winter seat of the Badrinath deity, on the main highway at Pandukeshwar, tied to Yudhishthira's meditation after the Mahabharata</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🛕 Winter seat of Badrinath', '🧘 Pandava legend', '🚗 On NH-7, 24 km from Badrinath', '❄️ Open year-round'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/panch-badri-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Panch Badri Yatra</Link><span>›</span>
          <span>Yogdhyan Badri</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '1,920 m'], ['Village', 'Pandukeshwar'], ['From Badrinath', '24 km'], ['From Joshimath', '~22 km'], ['On highway', 'NH-7'], ['Open', 'Year-round']].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>Every winter, Badrinath moves.</strong> Not the mountain, not the temple building — the deity. When snow seals the road above Joshimath each November, the processional idol of Badrinarayan is carried down to a small village on the highway called Pandukeshwar and installed in the Yogdhyan Badri temple, where it stays until the following spring. It is one of the few places on the entire Char Dham circuit where you can have proper, unhurried darshan of a Char Dham deity in the dead of winter.</p>

        <h2 style={h2}>What Is Yogdhyan Badri?</h2>
        <AnswerBox>
          Yogdhyan Badri is a Vishnu temple at Pandukeshwar, on NH-7 between Joshimath and Badrinath, at 1,920 m. It is one of the Panch Badri shrines and functions as the official winter seat of the Badrinath deity — the processional idol is moved here each year when the main Badrinath temple closes for winter, and stays until it reopens in spring.
        </AnswerBox>
        <p style={p}>Because it sits directly on the Char Dham highway rather than up a side road, Yogdhyan Badri is the most accessible of the four secondary Badri shrines — no detour, no trek, just a short stop on the way to or from Badrinath itself.</p>

        <h2 style={h2}>The Pandava Legend</h2>
        <p style={p}>Pandukeshwar's name comes from <strong>Pandu</strong>, father of the five Pandavas of the Mahabharata, who tradition says came here to do penance. The temple's own name, though, points to his son: <strong>Yudhishthira</strong>, the eldest Pandava, is said to have practised yoga and deep meditation (<em>dhyan</em>) at this exact spot after the Kurukshetra war — seeking to atone for the bloodshed of the battle he had won. Yogdhyan Badri is Vishnu worshipped in that meditative form: not the standing, richly dressed image at Badrinath, but a quieter, more inward one.</p>

        <ExpertNote variant="insider">
          The real reason to stop here isn't just the temple — it's the copper plates. Right beside the main shrine is a second, older structure holding inscribed copper-plate grants from the Katyuri dynasty, dated to around the 9th century. They're some of the oldest surviving written records anywhere in Garhwal, documenting land given to the temple by Katyuri kings centuries before the current Badrinath structure existed. Ask the priest to point them out — most pilgrims walk straight past.
        </ExpertNote>

        <h2 style={h2}>How to Reach Yogdhyan Badri</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['From', 'Distance', 'Drive time', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {[
                ['Joshimath', '~22 km', '45 min', 'Direct on NH-7 towards Badrinath'],
                ['Badrinath', '24 km', '45 min–1 hr', 'Same road, opposite direction'],
                ['Haridwar', '~290 km', '9–10 hrs', 'The standard Char Dham road route'],
                ['Govindghat', '18 km', '35 min', 'Turn-off for the Hemkund Sahib / Valley of Flowers road'],
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
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Travelling to Badrinath in the off-season?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We can route a winter darshan trip to Pandukeshwar when Badrinath itself is closed. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>When to Go</h2>
        <p style={p}>Yogdhyan Badri is worth visiting on two very different calendars. <strong>April–June and September–October</strong> catch it as a quiet stop on the way to a crowded Badrinath. <strong>Late November through April</strong>, when Badrinath itself is shut, is when the temple actually matters most — it is, for those months, the only place to have darshan of the deity at all. Winter road access depends on snowfall; check <Link href="/char-dham-road-status">current road status</Link> before travelling between December and March.</p>

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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has routed winter darshan trips to Pandukeshwar when the main Badrinath road was closed. <Link href="/about">More about the team</Link>.</p>
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
            {[['Panch Badri Yatra', '/panch-badri-yatra'], ['Badrinath Temple', '/badrinath-temple'], ['Adi Badri', '/adi-badri-temple'], ['Bhavishya Badri', '/bhavishya-badri-temple'], ['Vridh Badri', '/vridh-badri-temple'], ['Tapt Kund', '/tapt-kund'], ['Joshimath Narsingh Temple', '/joshimath-narsingh-temple'], ['Govindghat', '/govindghat'], ['Char Dham Road Status', '/char-dham-road-status'], ['Char Dham Yatra', '/char-dham-yatra']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
