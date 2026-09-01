import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Badrinath Festivals ${SITE.season} — Opening & Closing Dates` },
  description: `Every festival at Badrinath temple: the ${SITE.season} opening (Apr 23, fixed on Basant Panchami) and closing (~Nov 13, fixed on Vijayadashami) ceremonies, the Pandukeshwar winter-seat procession, and Badri-Kedar Utsav.`,
  keywords: ['badrinath festivals','badrinath opening date 2026','badrinath closing date 2026','badri kedar utsav','badrinath pandukeshwar procession'],
  alternates: { canonical: `${SITE.baseUrl}/badrinath-festivals` },
  openGraph: { title: `Badrinath Festivals ${SITE.season} — Full Calendar`, description: 'Opening, closing, the Pandukeshwar procession and every festival observed at Badrinath temple.', url: `${SITE.baseUrl}/badrinath-festivals`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Badrinath festival calendar' }] },
  twitter: { card: 'summary_large_image', title: 'Badrinath Festivals — Full Calendar', description: 'Opening, closing, Badri-Kedar Utsav and the festival calendar for Badrinath.', images: [{ url: '/opengraph-image', alt: 'Badrinath Festivals' }] },
};

const FAQS = [
  { q: 'When does Badrinath temple open and close in 2026?', a: `Badrinath opens 23 April 2026, its date fixed each year on Basant Panchami, and closes around 13 November 2026, its date fixed on Vijayadashami by the Badrinath-Kedarnath Temple Committee (BKTC) — typically about two weeks after Diwali. Both are provisional until formally confirmed closer to the season.` },
  { q: 'What happens to the Badrinath idol when the temple closes?', a: 'On closing day, the processional utsav murti of Badrinarayan is carried in formal procession down to Yogdhyan Badri temple at Pandukeshwar, on the highway between Joshimath and Badrinath, where it remains and continues to receive daily worship through the winter until the main temple reopens the following spring.' },
  { q: 'What is Badri-Kedar Utsav at Badrinath?', a: 'An eight-day cultural festival held each June at both Badrinath and Kedarnath, organised by the BKTC, with classical and folk music and dance performances by renowned artists alongside spiritual discourses — a cultural programme layered onto the pilgrimage season rather than a temple ritual itself.' },
  { q: 'Why is the Badrinath opening date fixed on Basant Panchami?', a: 'Basant Panchami, a spring festival on the Hindu lunar calendar, is when the BKTC formally announces that year\'s Badrinath opening date — the announcement, not the festival itself, sets the Gregorian calendar date, which is why the actual April opening date shifts slightly from year to year.' },
  { q: 'What other festivals are observed at Badrinath?', a: 'As a major Vishnu shrine, Badrinath observes Vaishnava festivals with particular devotion, including Ekadashi observances through the season and Nand Utsav (Krishna Janmashtami), alongside the general Char Dham yatra calendar shared across all four dhams.' },
];

const PAA = [
  { q: 'Why does Badrinath close later than Kedarnath?', a: 'Badrinath\'s closing date is fixed on Vijayadashami rather than Bhai Dooj, and its ceremony additionally involves the formal procession of the utsav murti to Pandukeshwar, which the BKTC schedules for a date roughly two weeks after Diwali — typically a day or two after Kedarnath\'s own closing.' },
  { q: 'Can pilgrims see Badrinath\'s deity during winter?', a: 'Yes — this is the entire purpose of the winter-seat system. The processional idol moves to Yogdhyan Badri temple at Pandukeshwar, on the main highway, where it remains fully accessible to pilgrims through the winter months when the main Badrinath temple itself is closed and inaccessible under snow.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Badrinath Yatra', item: `${SITE.baseUrl}/badrinath-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Festivals', item: `${SITE.baseUrl}/badrinath-festivals` },
  ]};
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: `Badrinath Festivals ${SITE.season} — Full Calendar`, description: 'Opening, closing, the Pandukeshwar procession and full festival calendar observed at Badrinath temple.', mainEntityOfPage: `${SITE.baseUrl}/badrinath-festivals`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

const TH = { padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 };
const TD = { padding: '10px 12px', color: '#475569', fontSize: 13 };
const SCROLL = { overflowX: 'auto', marginBottom: 24 };
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 480 };

export default function BadrinathFestivals() {
  const waText = encodeURIComponent('Namaste! I want to plan my Badrinath yatra around a specific festival date. Please share details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Badrinath · Festival Calendar {SITE.season}</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Badrinath Festivals — The Full Calendar</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>Opening on Basant Panchami, closing on Vijayadashami, the Pandukeshwar procession, and Badri-Kedar Utsav in June</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🚪 Opens 23 Apr 2026', '🔒 Closes ~13 Nov 2026', '🚶 Pandukeshwar procession', '🎶 Badri-Kedar Utsav'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/badrinath-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Badrinath Yatra</Link><span>›</span>
          <span>Festivals</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <p style={p}><strong>Badrinath's calendar is built around a single deity that lives in two places a year.</strong> Six months at the main shrine, five-plus months at a village called Pandukeshwar — the temple's opening and closing ceremonies exist to move that deity, formally, between the two.</p>

        <h2 style={h2}>Opening and Closing {SITE.season}</h2>
        <AnswerBox>
          Badrinath temple opens 23 April 2026, fixed each year on Basant Panchami, and closes around 13 November 2026, fixed on Vijayadashami — roughly two weeks after Diwali. Both dates are provisional until formally confirmed by the Badrinath-Kedarnath Temple Committee closer to the season.
        </AnswerBox>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['Event', `${SITE.season} date`, 'Fixed on', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {[
                ['Opening', '23 April 2026', 'Basant Panchami', 'Portals open to pilgrims'],
                ['Closing', '~13 November 2026', 'Vijayadashami', 'Idol processes to Pandukeshwar'],
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

        <h2 style={h2}>The Closing Ceremony — the Walk to Pandukeshwar</h2>
        <p style={p}>Unlike Kedarnath's Shiva lingam, which stays sealed in the sanctum through winter, Badrinath's worship follows a processional idol — the <strong>utsav murti</strong> — that must actually travel. On closing day, after elaborate rituals at the main temple, the utsav murti is carried in formal procession down the valley to <Link href="/yogdhyan-badri-temple">Yogdhyan Badri temple at Pandukeshwar</Link>, roughly 24 km down the road toward Joshimath. There it remains, receiving full daily worship, until the main Badrinath temple reopens the following spring — meaning pilgrims travelling in the off-season can still have genuine darshan of the deity, just at a different address.</p>

        <ExpertNote variant="insider">
          If you're travelling specifically to witness the closing ceremony, don't plan to leave immediately after — the procession to Pandukeshwar itself, on foot alongside the idol, is a moving, unhurried event that takes hours, and rushing it defeats the point of coming for it in the first place.
        </ExpertNote>

        <h2 style={h2}>Badri-Kedar Utsav</h2>
        <p style={p}>Each June, the Badrinath-Kedarnath Temple Committee organises an <strong>eight-day cultural festival</strong> spanning both Badrinath and Kedarnath — classical and folk music, dance performances by well-known artists, and spiritual discourses running alongside the regular pilgrimage season. It sits apart from the ritual calendar as a deliberate cultural celebration, drawing visitors specifically for the performances as much as for darshan.</p>

        <h2 style={h2}>Vaishnava Observances</h2>
        <p style={p}>As the principal Vishnu shrine of the Char Dham, Badrinath observes the Vaishnava festival calendar with particular devotion — <strong>Ekadashi</strong> days through the open season draw heightened footfall, as does <strong>Nand Utsav</strong> (Krishna Janmashtami), alongside the broader festivals shared across the pilgrimage season.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want to time your Badrinath yatra around a festival?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We can plan around opening, the closing procession, or Badri-Kedar Utsav. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has planned Badrinath yatras around opening week and the closing procession alike. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Badrinath yatra?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>More on Badrinath</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Badrinath Yatra', '/badrinath-yatra'], ['Badrinath Temple', '/badrinath-temple'], ['Badrinath History & Legends', '/badrinath-history-legends'], ['Badrinath Dharamshala', '/badrinath-dharamshala'], ['Yogdhyan Badri', '/yogdhyan-badri-temple'], ['Char Dham Yatra Opening Dates', '/blog/char-dham-yatra-opening-dates-2026'], ['Char Dham Yatra Closing Dates', '/blog/char-dham-yatra-closing-dates-2026']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
