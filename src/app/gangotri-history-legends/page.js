import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Gangotri Temple History & Legends — Bhagirath's Penance` },
  description: 'The full story behind Gangotri: King Bhagirath\'s penance to bring Ganga to earth, Shiva catching the river in his matted hair, and the temple built by Gorkha general Amar Singh Thapa.',
  keywords: ['gangotri temple history','gangotri legend','bhagirath ganga story','shiva jata ganga descent','gangotri temple amar singh thapa','gangotri origin story'],
  alternates: { canonical: `${SITE.baseUrl}/gangotri-history-legends` },
  openGraph: { title: 'Gangotri Temple History & Legends', description: 'King Bhagirath\'s penance, Shiva catching the Ganga in his locks, and the temple\'s Gorkha-era founding.', url: `${SITE.baseUrl}/gangotri-history-legends`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Gangotri Temple history' }] },
  twitter: { card: 'summary_large_image', title: 'Gangotri Temple History & Legends', description: 'The full history and mythology behind the Gangotri shrine.', images: [{ url: '/opengraph-image', alt: 'Gangotri Temple' }] },
};

const FAQS = [
  { q: 'What is the legend of Ganga\'s descent to earth?', a: 'King Bhagirath, a descendant of King Sagara, performed intense penance for years to bring the celestial river Ganga down to earth, so her waters could purify the ashes of his 60,000 ancestors, who had been reduced to ash by the curse of a sage and could only be liberated by Ganga\'s touch. Ganga agreed, but her full descent would have devastated the earth — so Shiva agreed to catch her in his matted hair (jata), breaking her fall and releasing her gradually in braided streams.' },
  { q: 'Who built Gangotri temple?', a: 'The original Gangotri temple is generally dated to the early 19th century, built by the Gorkha general Amar Singh Thapa, and was later rebuilt and expanded by the Maharaja of Jaipur. The current structure uses white granite with shikharas in a Nepalese Katyuri-influenced style.' },
  { q: 'Why is the actual source of the Ganga not at Gangotri temple?', a: 'The temple sits at about 3,100 m, but the physical glacial source of the Bhagirathi river — the stream that becomes the Ganga — is at Gaumukh, the snout of the Gangotri glacier, roughly 18 km further upstream by trek. Gangotri temple marks the traditional and devotional point of descent, not the literal glacial mouth.' },
  { q: 'What is Bhagirath Shila?', a: 'A rock near the Gangotri temple traditionally held to be the exact spot where King Bhagirath performed his penance to bring Ganga down — a specific, physical anchor for the legend that pilgrims visit alongside the temple itself.' },
  { q: 'Why is the river above Devprayag not called the Ganga?', a: 'By tradition, the river is called the Bhagirathi from its glacial source at Gaumukh all the way to Devprayag, where it merges with the Alaknanda; only from that confluence downstream does it carry the name Ganga. See our full explanation on the Devprayag guide.' },
];

const PAA = [
  { q: 'Why did Ganga need Shiva to catch her fall?', a: 'Tradition holds that the force of Ganga\'s full, unbroken descent from the heavens would have shattered the earth. Shiva agreed to receive her in his matted locks first, absorbing and dispersing that force before releasing her as manageable streams — an act of protection built into the very geography pilgrims see today, since the Bhagirathi still descends in braided, broken channels rather than a single fall.' },
  { q: 'Is Gangotri temple older than the 19th century?', a: 'The current built structure dates to the early 19th century under Amar Singh Thapa, though worship and pilgrimage to this stretch of the Bhagirathi valley, tied to the Bhagirath legend, is understood to be far older than the standing temple building itself.' },
  { q: 'What happened to King Sagara\'s 60,000 sons?', a: 'According to the wider legend, they were reduced to ashes by the curse of the sage Kapila after disturbing his meditation while searching for a stolen sacrificial horse. Only the touch of Ganga\'s waters, brought down generations later by their descendant Bhagirath, could liberate their souls — which is the entire motivation behind Bhagirath\'s penance.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Gangotri Yatra', item: `${SITE.baseUrl}/gangotri-yatra` },
    { '@type': 'ListItem', position: 3, name: 'History & Legends', item: `${SITE.baseUrl}/gangotri-history-legends` },
  ]};
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Gangotri Temple History & Legends', description: 'King Bhagirath\'s penance, Shiva catching the Ganga in his matted hair, and the temple\'s founding by Amar Singh Thapa.', mainEntityOfPage: `${SITE.baseUrl}/gangotri-history-legends`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

export default function GangotriHistoryLegends() {
  const waText = encodeURIComponent('Namaste! I would like to plan a Gangotri yatra. Please share package details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Gangotri · History &amp; Mythology</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>The Full History and Legends of Gangotri</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>King Bhagirath's penance, Shiva catching the falling river in his locks, and the Gorkha general who built the temple</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['📖 Bhagirath\'s penance', '🌊 Ganga\'s descent', '🕉️ Shiva\'s jata', '🏛️ Early 19th-century temple'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/gangotri-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Gangotri Yatra</Link><span>›</span>
          <span>History &amp; Legends</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <p style={p}>Every other Char Dham shrine marks a god's presence. Gangotri marks an arrival — the moment a river came down from heaven to earth, and the mountain who agreed to break its fall. This page goes past the practical guide on our <Link href="/gangotri-temple">Gangotri Temple page</Link> into the full legend and the temple's documented history.</p>

        <h2 style={h2}>King Bhagirath's Penance</h2>
        <AnswerBox>
          King Bhagirath performed years of intense penance to bring the celestial river Ganga down to earth, so her purifying waters could liberate the souls of his 60,000 ancestors, reduced to ashes by a sage's curse. Ganga agreed, but her full force would have destroyed the earth — so Shiva caught her in his matted hair, releasing her gradually. Gangotri marks this point of descent.
        </AnswerBox>
        <p style={p}>The backstory runs deeper than the penance alone. Bhagirath's ancestor, King Sagara, had sent his 60,000 sons in search of a stolen sacrificial horse; they disturbed the meditating sage Kapila, who reduced them all to ash with a glance. Only Ganga's water, the story holds, could liberate their trapped souls — and no one in the line of Sagara's descendants had the will to undertake the penance required to bring her down, until Bhagirath. His name literally attached itself to the river's upper course: the Bhagirathi, flowing from Gaumukh down past Gangotri, carries his name to this day, distinct from the Alaknanda until the two merge at <Link href="/devprayag">Devprayag</Link>.</p>

        <h2 style={h2}>Shiva's Matted Locks</h2>
        <p style={p}>Ganga's descent posed a real problem: unleashed at full force from the heavens, tradition holds she would have shattered the earth on impact. Shiva agreed to intervene, receiving the falling river first in his <em>jata</em> — his matted, uncut ascetic's hair — and letting her wind through the locks before releasing her as a network of gentler, braided streams rather than a single catastrophic torrent. It is not incidental myth-making: the Bhagirathi still descends from its glacial source in exactly that character, broken and braided across the high valley rather than falling as one channel, and pilgrims standing at Gangotri are, by the logic of the legend, looking at the river exactly as Shiva chose to release it.</p>

        <ExpertNote variant="insider">
          Ask to be shown Bhagirath Shila, a specific rock near the temple held to be the exact spot of the king's penance — it's a small, easy-to-miss stop that most pilgrims walk past on the way to the main shrine, but it grounds the whole legend in one physical place rather than leaving it abstract.
        </ExpertNote>

        <h2 style={h2}>The Temple's Documented History</h2>
        <p style={p}>Where Kedarnath and Badrinath trace to Adi Shankaracharya's 8th-century revival, Gangotri's built temple has a comparatively recent and well-documented origin: the early 19th century, when the Gorkha general <strong>Amar Singh Thapa</strong> is credited with constructing the original structure during the period of Gorkha expansion into Garhwal. It was later rebuilt and expanded under the patronage of the <strong>Maharaja of Jaipur</strong>, giving the temple its current form — white granite construction with shikharas built in a style showing Nepalese Katyuri influence, distinct from the older stonework found at some of the other Char Dham sites.</p>
        <p style={p}>What this means in practice: the devotional geography of Gangotri — the point of Ganga's mythic descent, the site of Bhagirath's penance — long predates the specific 19th-century building that pilgrims visit today. The temple is, in a sense, a comparatively modern marker on a very old sacred site.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Planning your Gangotri darshan?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We handle the full itinerary, Bhagirath Shila stop included. Tell us your dates.</div>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has led Gangotri yatras across fifteen seasons. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Gangotri yatra?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>More on Gangotri</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Gangotri Yatra', '/gangotri-yatra'], ['Gangotri Temple', '/gangotri-temple'], ['Gangotri Festivals', '/gangotri-festivals'], ['Gangotri Dharamshala', '/gangotri-dharamshala'], ['Devprayag', '/devprayag'], ['Harsil Valley', '/harsil-valley'], ['Gaumukh', '/gaumukh']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
