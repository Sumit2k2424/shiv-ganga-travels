import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Yamunotri Festivals ${SITE.season} — Opening, Closing, Makar Sankranti Calendar` },
  description: `Every festival at Yamunotri temple: the ${SITE.season} opening (Apr 19, Akshaya Tritiya) and closing (Bhai Dooj, ~Nov 11) ceremonies, the Kharsali winter-seat procession, and Makar Sankranti.`,
  keywords: ['yamunotri festivals','yamunotri opening date 2026','yamunotri closing date 2026','yamunotri kharsali procession','makar sankranti yamunotri'],
  alternates: { canonical: `${SITE.baseUrl}/yamunotri-festivals` },
  openGraph: { title: `Yamunotri Festivals ${SITE.season} — Full Calendar`, description: 'Opening, closing, the Kharsali procession and every festival observed at Yamunotri temple.', url: `${SITE.baseUrl}/yamunotri-festivals`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Yamunotri festival calendar' }] },
  twitter: { card: 'summary_large_image', title: 'Yamunotri Festivals — Full Calendar', description: 'Opening, closing and the festival calendar for Yamunotri.', images: [{ url: '/opengraph-image', alt: 'Yamunotri Festivals' }] },
};

const FAQS = [
  { q: 'When does Yamunotri temple open and close in 2026?', a: `Yamunotri opens 19 April 2026, on Akshaya Tritiya — the same day as Gangotri — and closes around 11 November 2026, on Bhai Dooj, the same closing date as Kedarnath. Both are provisional until formally confirmed closer to the season.` },
  { q: 'What happens to the Yamunotri idol when the temple closes?', a: 'On closing day, the processional idol of Yamuna is carried in formal procession down to Kharsali village, near Janki Chatti, where it remains and continues to receive worship through the winter, alongside the resident deity Someshwar Mahadev, until the main Yamunotri temple reopens the following Akshaya Tritiya.' },
  { q: 'What is Makar Sankranti at Yamunotri?', a: 'A significant festival observed in mid-January, marking the sun\'s transit into Capricorn — devotees at Yamunotri and across the region take holy dips and visit temples on this date, though the main Yamunotri temple itself is closed for winter at the time, so observance centres on the winter seat at Kharsali and on the wider regional celebration.' },
  { q: 'Why do Gangotri and Yamunotri open on the same day?', a: 'Both temples\' opening dates are fixed on Akshaya Tritiya, an auspicious day on the Hindu lunar calendar, which is also why Char Dham itineraries traditionally begin with these two western dhams before continuing east to Kedarnath and Badrinath, which open a few days later.' },
  { q: 'Are there other festivals observed at Yamunotri?', a: 'The general pan-Hindu festival calendar shared across the yatra season, alongside particular devotion during auspicious bathing dates given Yamunotri\'s specific association with purification and protection from untimely death.' },
];

const PAA = [
  { q: 'Why does Yamunotri close on the same date as Kedarnath?', a: 'Both temples\' closing ceremonies are fixed on Bhai Dooj, a festival celebrating the bond between brothers and sisters — a date that also happens to hold particular resonance for Yamunotri specifically, given Yamuna\'s own mythological status as Yama\'s sister.' },
  { q: 'Is Someshwar Mahadev connected to Yamunotri?', a: 'Yes — Someshwar Mahadev is the resident deity at Kharsali, the village that serves as Yamunotri\'s winter seat, and the temple there hosts the Yamuna processional idol through the winter months alongside its own established worship.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Yamunotri Yatra', item: `${SITE.baseUrl}/yamunotri-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Festivals', item: `${SITE.baseUrl}/yamunotri-festivals` },
  ]};
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: `Yamunotri Festivals ${SITE.season} — Full Calendar`, description: 'Opening, closing, the Kharsali procession and full festival calendar observed at Yamunotri temple.', mainEntityOfPage: `${SITE.baseUrl}/yamunotri-festivals`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
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

export default function YamunotriFestivals() {
  const waText = encodeURIComponent('Namaste! I want to plan my Yamunotri yatra around a specific festival date. Please share details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Yamunotri · Festival Calendar {SITE.season}</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Yamunotri Festivals — The Full Calendar</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>Opening on Akshaya Tritiya, closing on Bhai Dooj, the Kharsali procession, and Makar Sankranti</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🚪 Opens 19 Apr 2026', '🔒 Closes ~11 Nov 2026', '🚶 Kharsali procession', '☀️ Makar Sankranti'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/yamunotri-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Yamunotri Yatra</Link><span>›</span>
          <span>Festivals</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <p style={p}><strong>Yamunotri opens alongside Gangotri and closes alongside Kedarnath</strong> — its calendar sitting at the intersection of the other three dhams' dates, a reflection of its position as the westernmost stop most pilgrims visit first.</p>

        <h2 style={h2}>Opening and Closing {SITE.season}</h2>
        <AnswerBox>
          Yamunotri temple opens 19 April 2026, on Akshaya Tritiya, and closes around 11 November 2026, on Bhai Dooj. Both dates are provisional until formally confirmed closer to the season.
        </AnswerBox>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['Event', `${SITE.season} date`, 'Fixed on', 'Notes'].map(x => <th key={x} style={TH}>{x}</th>)}</tr></thead>
            <tbody>
              {[
                ['Opening', '19 April 2026', 'Akshaya Tritiya', 'Same day as Gangotri'],
                ['Closing', '~11 November 2026', 'Bhai Dooj', 'Idol processes to Kharsali'],
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

        <h2 style={h2}>The Closing Ceremony — the Walk to Kharsali</h2>
        <p style={p}>On Bhai Dooj — a festival celebrating the bond between brothers and sisters, and one that carries particular resonance here given Yamuna's own mythological status as Yama's twin — the processional idol of Yamuna is carried down to <Link href="/kharsali-yamunotri-winter-seat">Kharsali village near Janki Chatti</Link>, where it joins the resident deity <strong>Someshwar Mahadev</strong> and continues to receive worship through the winter, until the main temple reopens the following Akshaya Tritiya.</p>

        <ExpertNote variant="insider">
          Kharsali is a genuinely pleasant off-season stop in its own right, not just a formality — it sits at a comfortable altitude compared to the main temple, and pilgrims travelling in winter get a rare, uncrowded darshan experience that the peak May–October season simply doesn't offer.
        </ExpertNote>

        <h2 style={h2}>Makar Sankranti</h2>
        <p style={p}>Falling in mid-January, <strong>Makar Sankranti</strong> marks the sun's transit into Capricorn and is observed with holy dips and temple visits across the wider region. The main Yamunotri temple itself is sealed under snow by this date, so observance centres on the winter seat at Kharsali and the broader regional celebration rather than the high-altitude shrine directly — one of the clearest examples on the Char Dham circuit of a festival continuing to matter at a temple's winter address even while the primary shrine sits closed.</p>

        <h2 style={h2}>Why Yamunotri and Gangotri Share an Opening Date</h2>
        <p style={p}>Both temples' openings are fixed on <strong>Akshaya Tritiya</strong>, considered one of the most auspicious days on the Hindu lunar calendar for beginning new undertakings — which is also the underlying reason the traditional Char Dham circuit begins in the west, at Yamunotri and Gangotri, before moving east to <Link href="/kedarnath-festivals">Kedarnath</Link> and <Link href="/badrinath-festivals">Badrinath</Link>, which open a few days later.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want to time your Yamunotri yatra around a festival?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We can plan around opening, the closing procession, or a winter Kharsali visit. Tell us your dates.</div>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has planned Yamunotri yatras around opening week and the Kharsali winter seat alike. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Yamunotri yatra?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>More on Yamunotri</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Yamunotri Yatra', '/yamunotri-yatra'], ['Yamunotri Temple', '/yamunotri-temple'], ['Yamunotri History & Legends', '/yamunotri-history-legends'], ['Yamunotri Dharamshala', '/yamunotri-dharamshala'], ['Kharsali Winter Seat', '/kharsali-yamunotri-winter-seat'], ['Janki Chatti', '/janki-chatti'], ['Char Dham Yatra Opening Dates', '/blog/char-dham-yatra-opening-dates-2026']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
