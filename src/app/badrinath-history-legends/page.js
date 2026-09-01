import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Badrinath Temple History & Legends — Vishnu's Penance` },
  description: 'The full story behind Badrinath temple: Vishnu\'s penance under the badri tree, the Narad Kund idol recovery, Adi Shankaracharya\'s 8th-century establishment, and the debated Buddhist-era history.',
  keywords: ['badrinath temple history','badrinath legend','narad kund idol recovery','badrinath vishnu penance story','adi shankaracharya badrinath','badrinath temple origin'],
  alternates: { canonical: `${SITE.baseUrl}/badrinath-history-legends` },
  openGraph: { title: 'Badrinath Temple History & Legends', description: 'Vishnu\'s penance, the Narad Kund idol recovery, and Adi Shankaracharya\'s establishment of the shrine.', url: `${SITE.baseUrl}/badrinath-history-legends`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Badrinath Temple history' }] },
  twitter: { card: 'summary_large_image', title: 'Badrinath Temple History & Legends', description: 'The full history and mythology behind the Badrinath shrine.', images: [{ url: '/opengraph-image', alt: 'Badrinath Temple' }] },
};

const FAQS = [
  { q: 'What is the origin legend of Badrinath temple?', a: 'Tradition holds that Lord Vishnu came to this spot in the Himalayas to meditate, and that his consort Lakshmi took the form of a badri (Indian jujube) tree to shield him from the harsh mountain weather while he was absorbed in penance — which is where the name Badrinath, "Lord of the Badri tree," comes from.' },
  { q: 'What is the Narad Kund idol recovery legend?', a: 'Tradition holds that the original Badrinath idol, over time, came to lie submerged in a pool near the temple known as Narad Kund. Adi Shankaracharya, in the 8th century, is said to have recovered it from the waters — guided, the story holds, by a divine vision — and reinstalled it in the temple, restoring active worship at the site.' },
  { q: 'Was Badrinath temple originally a Buddhist shrine?', a: 'This is a genuinely debated historical claim rather than settled fact. Some historical accounts describe the site as having served as a Buddhist shrine or monastery in the centuries before Adi Shankaracharya\'s 8th-century revival, with his role including the re-establishment of Vaishnava worship there. Other scholars and traditional accounts dispute this framing entirely. Readers should treat it as a contested historical question, not a confirmed fact either way.' },
  { q: 'Who is credited with establishing the current Badrinath temple?', a: 'Adi Shankaracharya, in the 8th century CE, is traditionally credited with recovering the idol, re-establishing worship, and setting Badrinath as the fourth and final stop of the Char Dham pilgrimage circuit he is said to have organised across India.' },
  { q: 'What do the mountains Nar and Narayan have to do with Badrinath?', a: 'The temple sits in a valley flanked by two peaks, Nar and Narayan, named for a pair of sage-deities considered forms or companions of Vishnu in Puranic tradition. The peaks are said to guard the shrine, and their slow convergence over cosmic time is the basis of the Bhavishya Badri prophecy — that Badrinath will one day become inaccessible and worship will shift to a future shrine.' },
];

const PAA = [
  { q: 'Why is Lakshmi associated with a tree at Badrinath?', a: 'The legend holds that Lakshmi took the form of a badri (jujube) tree specifically to shelter Vishnu from the cold while he meditated, an act of devotion that gives the shrine both its name and one of its central devotional images — protection offered without being asked.' },
  { q: 'Is the Buddhist-origin theory of Badrinath widely accepted?', a: 'No — it remains a contested point among historians, with some accounts supporting it and others rejecting the framing entirely. It should not be repeated as settled fact in either direction.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Badrinath Yatra', item: `${SITE.baseUrl}/badrinath-yatra` },
    { '@type': 'ListItem', position: 3, name: 'History & Legends', item: `${SITE.baseUrl}/badrinath-history-legends` },
  ]};
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Badrinath Temple History & Legends', description: 'Vishnu\'s penance under the badri tree, the Narad Kund idol recovery, and Adi Shankaracharya\'s establishment of Badrinath.', mainEntityOfPage: `${SITE.baseUrl}/badrinath-history-legends`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

export default function BadrinathHistoryLegends() {
  const waText = encodeURIComponent('Namaste! I would like to plan a Badrinath yatra. Please share package details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Badrinath · History &amp; Mythology</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>The Full History and Legends of Badrinath</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>Vishnu's penance, Lakshmi as the sheltering tree, the Narad Kund idol recovery, and the debated history before Adi Shankaracharya</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['📖 Vishnu penance legend', '🌳 The badri tree', '💧 Narad Kund idol', '🏛️ 8th-century revival'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/badrinath-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Badrinath Yatra</Link><span>›</span>
          <span>History &amp; Legends</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <p style={p}>Badrinath's name carries its own origin story in plain sight — <em>Badri-nath</em>, lord of the badri tree — but the fuller history behind the shrine spans a Vishnu legend, a submerged idol, an 8th-century philosopher, and a historical question scholars still argue about. This page goes past the practical guide on our <Link href="/badrinath-temple">Badrinath Temple page</Link> into the full story.</p>

        <h2 style={h2}>Vishnu's Penance and the Sheltering Tree</h2>
        <AnswerBox>
          Tradition holds that Vishnu came to this Himalayan valley to meditate, and that Lakshmi, his consort, took the form of a badri (jujube) tree to shield him from the harsh mountain cold and snow while he remained absorbed in penance — an act of protective devotion that gives the shrine its name, Badrinath, "Lord of the Badri."
        </AnswerBox>
        <p style={p}>It is a quieter legend than the dramatic confrontations at Kedarnath or Gangotri — no bull chase, no descending river. Just a god in meditation and a goddess taking the humblest possible form, a tree, to protect him without interrupting what he was doing. Pilgrims are often struck by how the story matches the site itself: Badrinath sits in one of the most sheltered valleys on the entire Char Dham circuit, flanked by the Nar and Narayan peaks, oddly gentle by comparison with Kedarnath's exposed ridge or Gangotri's glacial approach.</p>

        <h2 style={h2}>The Narad Kund Idol Recovery</h2>
        <p style={p}>Over time, tradition holds, the original idol of Badri Narayan came to lie submerged in a pool near the temple, known as <strong>Narad Kund</strong> — a separate pool from the nearby hot spring <Link href="/tapt-kund">Tapt Kund</Link>. <strong>Adi Shankaracharya</strong>, arriving in the 8th century CE, is said to have recovered the idol from the waters, guided by a divine vision, and reinstalled it in the temple — restoring active worship at a site that had, by this account, fallen into neglect.</p>
        <p style={p}>This recovery is the hinge point of Badrinath's documented history: everything before it belongs largely to legend and disputed historical reconstruction; everything after it — the temple's continuous worship, its place as the fourth and final stop of the Char Dham circuit Shankaracharya is credited with organising, its centuries of patronage by Garhwal kings — follows a clearer historical line.</p>

        <ExpertNote variant="warning">
          You will find confident claims online that Badrinath was originally a Buddhist monastery, converted by Shankaracharya in the 8th century. Treat this carefully — it is a real historical argument made by some scholars and popular accounts, but it is genuinely disputed, not settled fact. We've included it below because it's a common question, but present it as a debated claim, not history.
        </ExpertNote>

        <h2 style={h2}>The Debated Buddhist-Era Question</h2>
        <p style={p}>Some historical accounts hold that the site served as a Buddhist shrine or monastery in the centuries before Shankaracharya's arrival, and that part of his work in the 8th century involved re-establishing it as a Vaishnava temple. Other historians and traditional accounts reject this reading of the evidence entirely, arguing for continuous or much older Hindu worship at the site. Neither position has settled the question definitively, and readers researching Badrinath's history should treat the Buddhist-origin claim as one contested argument among several, not an established fact.</p>

        <h2 style={h2}>Nar and Narayan — the Guardian Peaks</h2>
        <p style={p}>The temple sits between two peaks named <strong>Nar</strong> and <strong>Narayan</strong>, after a pair of sage-deities considered inseparable companions and forms of Vishnu in Puranic tradition. Beyond their symbolic role as guardians of the shrine, these two peaks are the basis of the <Link href="/bhavishya-badri-temple">Bhavishya Badri prophecy</Link> — the belief that they are slowly converging across the span of the current cosmic age, and that when they finally close the gap, the current temple will become inaccessible and worship will shift permanently to the future shrine at Subhain.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Planning your Badrinath darshan?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We handle the full itinerary, Tapt Kund stop included. Tell us your dates.</div>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has led Badrinath yatras across fifteen seasons. <Link href="/about">More about the team</Link>.</p>
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
            {[['Badrinath Yatra', '/badrinath-yatra'], ['Badrinath Temple', '/badrinath-temple'], ['Tapt Kund', '/tapt-kund'], ['Badrinath Festivals', '/badrinath-festivals'], ['Badrinath Dharamshala', '/badrinath-dharamshala'], ['Panch Badri Yatra', '/panch-badri-yatra'], ['Bhavishya Badri', '/bhavishya-badri-temple']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
