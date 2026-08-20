import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Bhavishya Badri Temple — Subhain Trek, the Future Badrinath | Full Guide' },
  description: 'Bhavishya Badri at Subhain, a 6 km trek from Tapovan, is prophesied to become the main Badri shrine when the mountains close Badrinath in the Kali Yuga — the most remote of the five Panch Badri.',
  keywords: ['bhavishya badri temple','bhavishya badri trek','subhain temple tapovan','panch badri bhavishya badri','future badrinath prophecy','bhavishya badri joshimath'],
  alternates: { canonical: `${SITE.baseUrl}/bhavishya-badri-temple` },
  openGraph: { title: 'Bhavishya Badri Temple — Subhain Trek, the Future Badrinath', description: 'Prophesied to become the main Badri shrine when the mountains close Badrinath — the most remote of the five Panch Badri.', url: `${SITE.baseUrl}/bhavishya-badri-temple`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Bhavishya Badri Temple, Subhain' }] },
  twitter: { card: 'summary_large_image', title: 'Bhavishya Badri Temple — the Future Badrinath', description: 'The most remote of the five Panch Badri shrines, prophesied to become the main seat one day.', images: [{ url: '/opengraph-image', alt: 'Bhavishya Badri Temple' }] },
};

const FAQS = [
  { q: 'What is Bhavishya Badri temple?', a: 'Bhavishya Badri is a small Vishnu temple at Subhain village, reached by a roughly 6 km trek from Tapovan near Joshimath, at about 2,744 m. It is one of the five Panch Badri shrines and the most remote and least visited of them.' },
  { q: 'What does the name Bhavishya Badri mean?', a: 'Bhavishya means "future". According to prophecy, the two mountains flanking the current Badrinath temple — Nar and Narayan — are slowly closing together, and when they finally seal the path completely, the main Badrinath shrine will become permanently inaccessible. At that point, tradition holds, Vishnu will manifest as Bhavishya Badri — the "future Badrinath" — and worship will shift here.' },
  { q: 'Is Bhavishya Badri linked to the Kali Yuga?', a: 'Yes — the prophecy is set at the end of the current cosmic age, the Kali Yuga, when the Nar-Narayan peaks are said to finally meet and block the route to Badrinath entirely. Bhavishya Badri is understood as the seat prepared in advance for that eventuality, already sanctified and waiting.' },
  { q: 'How difficult is the trek to Bhavishya Badri?', a: 'It is a roughly 6 km trek from Tapovan village near Joshimath, gaining significant altitude through forest and steep sections. It is manageable for a reasonably fit adult in a day trip but is not suitable for elderly pilgrims or anyone with mobility concerns — of the four secondary Panch Badri shrines, only Rudranath (a separate Panch Kedar temple) is harder to reach.' },
  { q: 'When is Bhavishya Badri open?', a: 'Roughly May to November, in line with the Badrinath season — snow closes the higher trek sections through winter, and the village of Subhain itself is only lightly inhabited outside the trekking months.' },
  { q: 'How far is Bhavishya Badri from Joshimath?', a: 'About 22 km by road to Tapovan, then a roughly 6 km trek on foot to Subhain and the temple. Allow a full day for the round trip from Joshimath.' },
];

const PAA = [
  { q: 'Which Panch Badri temple is hardest to reach?', a: 'Bhavishya Badri, among the four secondary Badri shrines — it is the only one requiring a genuine trek rather than a road stop. Adi Badri needs a 17 km road detour but no walking; Bhavishya Badri needs both a drive to Tapovan and then a climb on foot.' },
  { q: 'Will Badrinath temple really become inaccessible one day?', a: 'This is a matter of religious prophecy, not a claim about near-term geology — the Nar-Narayan peaks are described in tradition as slowly closing over an immense span of time tied to the end of the Kali Yuga, not a change anyone alive would witness. It is a devotional and cosmological belief, not a travel-planning consideration.' },
  { q: 'Is Bhavishya Badri worth the trek?', a: 'For pilgrims completing the full Panch Badri circuit, yes — it is the one shrine that genuinely rewards the effort with solitude; visitor numbers here are a fraction of the main temple\'s. For a first Char Dham trip, it is entirely optional and better skipped in favour of resting for the main circuit.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Panch Badri Yatra', item: `${SITE.baseUrl}/panch-badri-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Bhavishya Badri', item: `${SITE.baseUrl}/bhavishya-badri-temple` },
  ]};
  const place = { '@context': 'https://schema.org', '@type': 'HinduTemple', name: 'Bhavishya Badri Temple', alternateName: ['Subhain Temple'], description: 'A Panch Badri shrine at Subhain village near Joshimath, Uttarakhand, prophesied to become the main Badri seat when the current Badrinath temple becomes inaccessible.', url: `${SITE.baseUrl}/bhavishya-badri-temple`, image: [`${SITE.baseUrl}/opengraph-image`], address: { '@type': 'PostalAddress', addressLocality: 'Subhain, Chamoli', addressRegion: 'Uttarakhand', addressCountry: 'IN' }, geo: { '@type': 'GeoCoordinates', latitude: 30.5667, longitude: 79.6167, elevation: '2,744 m' }, isAccessibleForFree: true, touristType: ['Pilgrims', 'Trekkers'] };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Bhavishya Badri Temple — Subhain Trek, the Future Badrinath', description: 'A guide to Bhavishya Badri: the prophecy behind its name, the trek from Tapovan, and when to go.', mainEntityOfPage: `${SITE.baseUrl}/bhavishya-badri-temple`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
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

export default function BhavishyaBadri() {
  const waText = encodeURIComponent('Namaste! I want to trek to Bhavishya Badri from Tapovan as part of my Badrinath trip. Please share details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Subhain · 2,744 m · Panch Badri</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Bhavishya Badri — The Future Badrinath</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>A 6 km trek from Tapovan to the shrine prophesied to become the main Badri seat when the mountains close</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['📜 Kali Yuga prophecy', '🥾 6 km trek from Tapovan', '🏔️ Most remote Panch Badri', '🚗 22 km from Joshimath'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/panch-badri-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Panch Badri Yatra</Link><span>›</span>
          <span>Bhavishya Badri</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '2,744 m'], ['Village', 'Subhain'], ['Trek from', 'Tapovan, ~6 km'], ['From Joshimath', '~22 km + trek'], ['Season', 'May–Nov'], ['Difficulty', 'Moderate']].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>Every other Char Dham shrine describes the present. Bhavishya Badri describes the future.</strong> A small stone temple perched above the village of Subhain, reached only by a steep trek from Tapovan, it is not a lesser Badri shrine but a prophecy — the place where, tradition says, Vishnu will be worshipped once the road to the current Badrinath temple is gone for good.</p>

        <h2 style={h2}>What Is Bhavishya Badri?</h2>
        <AnswerBox>
          Bhavishya Badri is a Vishnu temple at Subhain village near Tapovan, Chamoli district, at about 2,744 m, reached by a roughly 6 km trek. It is one of the Panch Badri shrines, distinguished by a prophecy that it will become the primary Badri seat once the current Badrinath temple becomes permanently inaccessible.
        </AnswerBox>

        <h2 style={h2}>The Prophecy — Bhavishya Means "Future"</h2>
        <p style={p}>Badrinath temple sits in a narrow gap between two peaks known as <strong>Nar and Narayan</strong>. According to tradition, these two mountains are moving slowly closer together across the span of the current cosmic age, the <strong>Kali Yuga</strong>, and will eventually seal the gap entirely — cutting off the route to the main shrine for good. When that happens, the prophecy holds, Vishnu will manifest at Subhain instead, and this temple — already sanctified, already waiting — will become the new Badrinath.</p>
        <p style={p}>It is worth being precise about what kind of claim this is. It belongs to the same category as the eschatological prophecies found across most major religious traditions — a statement about the end of an age, not a geological forecast anyone could act on in a human lifetime. What it does, practically, is give Bhavishya Badri a status none of the other secondary Badri shrines have: it is not a footnote to Badrinath, but its heir apparent.</p>

        <ExpertNote variant="insider">
          Go early. The trek from Tapovan climbs through forest before opening onto bare hillside, and the last stretch to Subhain is exposed with no shade — starting by 7-8am means you're back down before the afternoon sun gets uncomfortable. There's no facility at the top beyond the temple itself, so carry your own water.
        </ExpertNote>

        <h2 style={h2}>How to Reach Bhavishya Badri</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['Leg', 'Distance', 'Mode', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {[
                ['Joshimath → Tapovan', '~13 km', 'Road', '30–40 min drive'],
                ['Tapovan → Subhain / temple', '~6 km', 'Trek on foot', '3–4 hrs each way, steep sections'],
                ['Haridwar → Joshimath', '~250 km', 'Road', 'Standard Char Dham road route'],
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
        <p style={p}>This is a full-day round trip from Joshimath — drive to Tapovan, trek up and back, drive home. It is not compatible with a same-day Badrinath darshan; plan it as its own day, ideally with a night either side in Joshimath so you are not rushing the descent before dark.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want the full Panch Badri circuit, trek included?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We build the Bhavishya Badri day into a proper itinerary with rest either side. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>When to Go</h2>
        <p style={p}><strong>May–June and September–October</strong> are the best windows — snow-free trail, stable weather, and it lines up with the main Badrinath season if you're combining both. Avoid the monsoon months of July–August, when the trek path is at its most treacherous, and the temple is inaccessible entirely once winter snow sets in, typically from late November.</p>

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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Plans the full Panch Badri circuit, treks included, for pilgrims wanting the complete pilgrimage. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Panch Badri circuit?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>The Panch Badri circuit</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Panch Badri Yatra', '/panch-badri-yatra'], ['Badrinath Temple', '/badrinath-temple'], ['Yogdhyan Badri', '/yogdhyan-badri-temple'], ['Vridh Badri', '/vridh-badri-temple'], ['Adi Badri', '/adi-badri-temple'], ['Joshimath Narsingh Temple', '/joshimath-narsingh-temple'], ['Valley of Flowers Trek', '/blog/valley-of-flowers-trek'], ['Char Dham Yatra', '/char-dham-yatra']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
