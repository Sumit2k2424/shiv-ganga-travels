import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Kedarnath Festivals ${SITE.season} — Opening & Closing Dates` },
  description: `Every festival at Kedarnath temple: the ${SITE.season} opening (Apr 22) and closing (Bhai Dooj, Nov 11) ceremonies, the Bhairav puja and doli to Ukhimath, Badri-Kedar Utsav, and Shravan Somvar.`,
  keywords: ['kedarnath festivals','kedarnath opening date 2026','kedarnath closing date 2026','badri kedar utsav','kedarnath bhairav puja','kedarnath doli ukhimath'],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-festivals` },
  openGraph: { title: `Kedarnath Festivals ${SITE.season} — Full Calendar`, description: 'Opening, closing, Badri-Kedar Utsav and every festival observed at Kedarnath temple.', url: `${SITE.baseUrl}/kedarnath-festivals`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath festival calendar' }] },
  twitter: { card: 'summary_large_image', title: 'Kedarnath Festivals — Full Calendar', description: 'Opening, closing, Badri-Kedar Utsav and the festival calendar for Kedarnath.', images: [{ url: '/opengraph-image', alt: 'Kedarnath Festivals' }] },
};

const FAQS = [
  { q: 'When does Kedarnath temple open and close in 2026?', a: `Kedarnath opens 22 April 2026, its date fixed each year on Maha Shivratri, and closes around 11 November 2026 on Bhai Dooj. Both dates are provisional until the Badrinath-Kedarnath Temple Committee (BKTC) formally confirms them closer to the season.` },
  { q: 'What is the Kedarnath closing ceremony?', a: 'On the closing day, the temple\'s main deity remains in the sanctum through winter (unlike Badrinath, Gangotri and Yamunotri, whose processional idols travel to a winter seat), but a special Bhairav puja is performed first, invoking Bhairav as guardian of the shrine through the closed months. The temple doors are then sealed with elaborate floral decoration, and priests and staff descend for the winter, several relocating to Ukhimath.' },
  { q: 'What is Badri-Kedar Utsav?', a: 'An eight-day cultural festival held each June at both Badrinath and Kedarnath, organised by the Badrinath-Kedarnath Temple Committee, featuring classical and folk music and dance performances by renowned artists, along with spiritual discourses — a cultural celebration alongside the religious pilgrimage calendar rather than a ritual observance of the temple itself.' },
  { q: 'Where does the Kedarnath priesthood go for winter?', a: 'Many of the priests and temple staff relocate to Ukhimath, the traditional winter administrative base for Kedarnath temple affairs, where ceremonial worship connected to the shrine continues through the closed months.' },
  { q: 'What other festivals are observed at Kedarnath during the open season?', a: 'As a major Shiva shrine, Kedarnath observes the general Shaiva festival calendar with particular devotion — Shravan Somvar (the Mondays of the monsoon month of Shravan, considered especially auspicious for Shiva worship) draw heightened pilgrim numbers, alongside Guru Purnima and other pan-Hindu festivals that fall within the open season.' },
];

const PAA = [
  { q: 'Why do Kedarnath opening dates change every year?', a: 'The date is fixed each year on Maha Shivratri, a lunar festival whose Gregorian calendar date shifts annually — so the precise April opening date for Kedarnath moves within a roughly two-week window from year to year, confirmed by the temple committee only a few months in advance.' },
  { q: 'Does the Kedarnath idol travel to a winter seat like Badrinath\'s?', a: 'No — this is a key difference. Kedarnath\'s main deity, a Shiva lingam, stays in the sealed sanctum through winter rather than being carried down in procession. Badrinath, Gangotri and Yamunotri each move a separate processional idol to a dedicated winter seat; Kedarnath does not follow the same practice.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Kedarnath Yatra', item: `${SITE.baseUrl}/kedarnath-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Festivals', item: `${SITE.baseUrl}/kedarnath-festivals` },
  ]};
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: `Kedarnath Festivals ${SITE.season} — Full Calendar`, description: 'Opening, closing, Badri-Kedar Utsav and the full festival calendar observed at Kedarnath temple.', mainEntityOfPage: `${SITE.baseUrl}/kedarnath-festivals`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
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

export default function KedarnathFestivals() {
  const waText = encodeURIComponent('Namaste! I want to plan my Kedarnath yatra around a specific festival date. Please share details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Kedarnath · Festival Calendar {SITE.season}</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Kedarnath Festivals — The Full Calendar</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>Opening on Maha Shivratri, closing on Bhai Dooj, Badri-Kedar Utsav in June, and every observance in between</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🚪 Opens 22 Apr 2026', '🔒 Closes ~11 Nov 2026', '🎶 Badri-Kedar Utsav', '🕉️ Shravan Somvar'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/kedarnath-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Kedarnath Yatra</Link><span>›</span>
          <span>Festivals</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <p style={p}><strong>Kedarnath's calendar has one date that matters more than any other: whether the temple is open at all.</strong> Sitting at 3,583 m, it is buried under snow and completely sealed for roughly five months of the year — so its festival calendar begins and ends with two ceremonies more elaborate than almost any other observance at the shrine.</p>

        <h2 style={h2}>Opening and Closing {SITE.season}</h2>
        <AnswerBox>
          Kedarnath temple opens 22 April 2026, a date fixed each year on Maha Shivratri, and closes around 11 November 2026, on Bhai Dooj. Both dates are provisional until formally confirmed by the Badrinath-Kedarnath Temple Committee closer to the season.
        </AnswerBox>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['Event', `${SITE.season} date`, 'Fixed on', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {[
                ['Opening', '22 April 2026', 'Maha Shivratri', 'Portals open to pilgrims'],
                ['Closing', '~11 November 2026', 'Bhai Dooj', 'Bhairav puja, doors sealed'],
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

        <h2 style={h2}>The Closing Ceremony — Bhairav Puja</h2>
        <p style={p}>Unlike Badrinath, Gangotri and Yamunotri, whose processional deities travel down to dedicated winter seats, Kedarnath's main Shiva lingam remains in the sealed sanctum through the winter months. Before the doors close, priests perform a special <strong>Bhairav puja</strong>, invoking Bhairav — a fierce guardian form of Shiva — to watch over the shrine through the closed season. The temple is then decorated elaborately with flowers, the doors are sealed, and priests and staff descend from the mountain for winter, many relocating to <Link href="/ukhimath">Ukhimath</Link>, the traditional winter administrative seat for Kedarnath affairs.</p>

        <ExpertNote variant="tip">
          If your priority is a quieter, less crowded darshan rather than catching a specific festival, the first ten days after opening and the final two weeks before closing are consistently the calmest windows — most pilgrim traffic concentrates in the peak May–June and September–October stretches.
        </ExpertNote>

        <h2 style={h2}>Badri-Kedar Utsav</h2>
        <p style={p}>Each June, the Badrinath-Kedarnath Temple Committee organises an <strong>eight-day cultural festival</strong> at both Badrinath and Kedarnath — classical and folk music, dance performances by well-known artists, and spiritual discourses running alongside the regular pilgrimage. It is a cultural celebration layered onto the yatra season rather than a ritual observance of the temple itself, and it draws a mix of pilgrims and visitors specifically interested in the performances.</p>

        <h2 style={h2}>Shravan Somvar and Other Observances</h2>
        <p style={p}>As one of the twelve Jyotirlingas, Kedarnath draws heightened devotion during <strong>Shravan Somvar</strong> — the Mondays of Shravan, the monsoon month considered especially sacred for Shiva worship across India. <strong>Guru Purnima</strong> and other pan-Hindu festivals falling within the open season are also observed with elevated footfall, though none carry the same temple-specific ceremony as the opening and closing dates.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want to time your Kedarnath yatra around a festival?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We can plan around opening, Badri-Kedar Utsav, or the quieter windows. Tell us your dates.</div>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has planned Kedarnath yatras around opening week and Badri-Kedar Utsav alike. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Kedarnath yatra?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>More on Kedarnath</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Kedarnath Yatra', '/kedarnath-yatra'], ['Kedarnath Temple', '/kedarnath-temple'], ['Kedarnath History & Legends', '/kedarnath-history-legends'], ['Kedarnath Dharamshala', '/kedarnath-dharamshala'], ['Ukhimath', '/ukhimath'], ['Char Dham Yatra Opening Dates', '/blog/char-dham-yatra-opening-dates-2026'], ['Char Dham Yatra Closing Dates', '/blog/char-dham-yatra-closing-dates-2026']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
