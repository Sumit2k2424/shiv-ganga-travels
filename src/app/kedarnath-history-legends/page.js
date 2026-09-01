import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Kedarnath Temple History & Legends — Pandavas to 2013` },
  description: 'The full story behind Kedarnath temple: the Pandava legend, Adi Shankaracharya\'s 8th-century revival and samadhi, dynastic patronage, and how the shrine survived the 2013 Himalayan floods.',
  keywords: ['kedarnath temple history','kedarnath legend','kedarnath pandava story','adi shankaracharya kedarnath samadhi','kedarnath temple 2013 flood survival','kedarnath origin story'],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-history-legends` },
  openGraph: { title: 'Kedarnath Temple History & Legends', description: 'The Pandava legend, Adi Shankaracharya\'s revival, and how the temple survived the 2013 flood.', url: `${SITE.baseUrl}/kedarnath-history-legends`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Temple history' }] },
  twitter: { card: 'summary_large_image', title: 'Kedarnath Temple History & Legends', description: 'The full history and mythology behind the Kedarnath shrine.', images: [{ url: '/opengraph-image', alt: 'Kedarnath Temple' }] },
};

const FAQS = [
  { q: 'What is the origin legend of Kedarnath temple?', a: 'The core legend ties Kedarnath to the Pandavas of the Mahabharata, who sought Shiva\'s forgiveness after the Kurukshetra war for the killing of kin on both sides. Shiva evaded them by taking the form of a bull and diving into the earth at this spot; his hump reappeared here, and the Pandavas built a shrine to it — the origin of Kedarnath as one of the five Panch Kedar temples.' },
  { q: 'Who rebuilt Kedarnath temple and when?', a: 'The present stone structure is generally attributed to a major renovation and revival led by Adi Shankaracharya in the 8th century CE, though some scholarly accounts hold the temple predates him by centuries and that his role was restoration and re-consecration rather than original construction. Subsequent Garhwal kings, including the Katyuri and Panwar dynasties, maintained and patronised the shrine over the following centuries.' },
  { q: 'What is Adi Shankaracharya\'s samadhi at Kedarnath?', a: 'A samadhi shrine directly behind the main Kedarnath temple marks the spot traditionally held to be where Adi Shankaracharya attained mahasamadhi (left his mortal body) in the 8th century, at the young age of around 32. It remains a site of reverence for pilgrims completing the temple visit.' },
  { q: 'How did Kedarnath temple survive the 2013 flood?', a: 'The June 2013 Kedarnath flood, triggered by a glacial lake outburst and torrential rain, devastated the town and killed thousands, yet the ancient stone temple itself sustained only minor damage. A large boulder, since named the Bhim Shila, lodged directly behind the temple and is widely credited with diverting the main force of the debris flow around the structure rather than through it — an event many pilgrims read as a sign of the temple\'s enduring sanctity.' },
  { q: 'Is Kedarnath one of the twelve Jyotirlingas?', a: 'Yes — Kedarnath is counted among the twelve Jyotirlingas, the most sacred Shiva shrines in Hindu tradition, and is the northernmost and highest-altitude of the twelve.' },
];

const PAA = [
  { q: 'Why did the Pandavas seek Shiva\'s forgiveness?', a: 'After the Kurukshetra war described in the Mahabharata, the Pandavas were troubled by the guilt of killing their own kinsmen — cousins, teachers and elders — on the opposing side. Seeking absolution, they set out to find Shiva, who avoided them, ultimately leading to the Panch Kedar legend.' },
  { q: 'What is the Bhim Shila at Kedarnath?', a: 'A massive rock that came to rest directly behind the Kedarnath temple during the 2013 flood, which pilgrims and locals credit with splitting the debris flow and sparing the shrine from destruction that devastated the surrounding town.' },
  { q: 'How old is Kedarnath temple really?', a: 'Historians and archaeologists differ — some date the current stone structure to the 8th century alongside Adi Shankaracharya\'s revival, while others argue the temple\'s core is considerably older, with Shankaracharya\'s role being restoration of an already-ancient shrine rather than new construction. No single dating is universally agreed.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Kedarnath Yatra', item: `${SITE.baseUrl}/kedarnath-yatra` },
    { '@type': 'ListItem', position: 3, name: 'History & Legends', item: `${SITE.baseUrl}/kedarnath-history-legends` },
  ]};
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Kedarnath Temple History & Legends', description: 'The Pandava legend, Adi Shankaracharya\'s revival and samadhi, dynastic history, and the 2013 flood at Kedarnath.', mainEntityOfPage: `${SITE.baseUrl}/kedarnath-history-legends`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

export default function KedarnathHistoryLegends() {
  const waText = encodeURIComponent('Namaste! I would like to plan a Kedarnath yatra. Please share package details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Kedarnath · History & Mythology</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>The Full History and Legends of Kedarnath</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>The Pandavas, Adi Shankaracharya's revival and samadhi, dynastic patronage, and how a stone temple survived a Himalayan catastrophe</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['📖 Mahabharata legend', '🕉️ Jyotirlinga', '🏛️ 8th-century revival', '🪨 Survived the 2013 flood'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/kedarnath-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Kedarnath Yatra</Link><span>›</span>
          <span>History &amp; Legends</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <p style={p}>Most pilgrims arrive at Kedarnath already knowing the shape of the story — Shiva, a bull, the Pandavas. Fewer know how the temple actually survived to the present day: nearly destroyed by centuries of Himalayan winters, rebuilt by kings whose names are barely remembered, and — improbably — spared almost untouched by a flood that killed thousands around it in 2013. This page goes past the summary on our <Link href="/kedarnath-temple">Kedarnath Temple guide</Link> into the full history.</p>

        <h2 style={h2}>The Pandava Legend, in Full</h2>
        <AnswerBox>
          After the Kurukshetra war, the Pandavas sought Shiva's forgiveness for killing their own kin. Shiva evaded them by taking the form of a bull and diving into the earth; his hump reappeared at Kedarnath, his arms at Tungnath, his face at Rudranath, his navel at Madhyamaheshwar, and his hair at Kalpeshwar — the five Panch Kedar shrines.
        </AnswerBox>
        <p style={p}>What the short version usually skips: the Pandavas, having won the war but consumed by guilt over the slaughter of teachers, elders and cousins on the opposing side, first travelled to Varanasi seeking Shiva, who avoided them there too — troubled, the stories suggest, by the same moral weight they carried. He fled to the Garhwal Himalayas and took bovine form to hide among ordinary cattle. Bhima, the second Pandava, straddled a ridge with legs planted on two mountains and recognised the fleeing bull among the herd by its refusal to pass beneath him. Cornered, Shiva dove into the ground, and where his body resurfaced across five sites, the Pandavas built shrines — completing the Panch Kedar and, tradition holds, finally receiving the release from guilt they had sought.</p>

        <h2 style={h2}>Adi Shankaracharya's Revival and Samadhi</h2>
        <p style={p}>Whatever shrine existed before him, the temple's documented history sharpens considerably around <strong>Adi Shankaracharya</strong>, the 8th-century philosopher credited with reviving and systematising pilgrimage across the subcontinent, including the establishment of the wider Char Dham circuit. Tradition holds he rebuilt or substantially restored the Kedarnath shrine during his time in the Himalayas — though historians differ on whether this was new construction or the revival of an already ancient site, since Shiva worship at this location plausibly predates any single named founder.</p>
        <p style={p}>Directly behind the main temple stands a small samadhi shrine, traditionally held to mark the spot where Shankaracharya attained <em>mahasamadhi</em> — a conscious departure from the body in deep meditation — at the age of around 32. Pilgrims completing darshan at the main shrine commonly pay respects here too, closing a loop between the temple's mythic origin and the historical figure most associated with its revival.</p>

        <ExpertNote variant="insider">
          Ask your priest or guide to point out the samadhi shrine specifically — it's easy to walk past behind the main structure without registering what it is. Most first-time pilgrims have no idea it's there until someone tells them, and it changes how the whole site reads once you know.
        </ExpertNote>

        <h2 style={h2}>Centuries of Dynastic Patronage</h2>
        <p style={p}>Between Shankaracharya's era and the present, the temple passed through the patronage of successive Garhwal ruling houses — the Katyuri dynasty in the early medieval period, and later the Panwar (Parmar) kings who governed Garhwal into the colonial era. Records of specific renovations are sparse, as is typical for remote Himalayan shrines maintained more by continuous local devotion and priestly lineages than by documented state building programmes — but the temple's survival through repeated harsh winters, at 3,583 m, across more than a millennium, is itself a form of evidence for the depth of that patronage.</p>

        <h2 style={h2}>The 2013 Flood — and the Rock That Split It</h2>
        <p style={p}>In June 2013, a glacial lake outburst combined with days of exceptionally heavy rainfall triggered flash floods and debris flows across the Kedarnath valley, killing thousands and destroying most of the town around the temple. The ancient stone structure itself, however, sustained comparatively minor damage — a fact that became one of the most widely discussed aspects of the disaster.</p>
        <p style={p}>A large boulder — since named the <strong>Bhim Shila</strong>, after the Pandava Bhima — lodged directly behind the temple during the flood and is widely credited with diverting the main force of the debris flow around the building rather than through it. Geologists note the temple's solid stone construction and elevated plinth also played a genuine structural role. For pilgrims, the outcome read as unmistakable: a shrine tied by legend to Bhima himself, spared by a boulder that took his name.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Planning your Kedarnath darshan?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We handle registration, trek logistics and the full itinerary. Tell us your dates.</div>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has led Kedarnath yatras across fifteen seasons, before and after the 2013 flood rebuilt the route. <Link href="/about">More about the team</Link>.</p>
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
            {[['Kedarnath Yatra', '/kedarnath-yatra'], ['Kedarnath Temple', '/kedarnath-temple'], ['Kedarnath Festivals', '/kedarnath-festivals'], ['Kedarnath Dharamshala', '/kedarnath-dharamshala'], ['Panch Kedar Yatra', '/panch-kedar-yatra'], ['Rudranath', '/rudranath-temple'], ['Kalpeshwar Temple', '/kalpeshwar-temple']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
