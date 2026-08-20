import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Yamunotri Temple History & Legends — Sage Asit Muni, Yamuna and Yama' },
  description: 'The full story behind Yamunotri: sage Asit Muni\'s ashram, Yamuna as daughter of the sun god and sister of death, Surya Kund\'s boiling spring, and the temple built by Tehri\'s royal family.',
  keywords: ['yamunotri temple history','yamunotri legend','asit muni story','yamuna surya yama sister','surya kund yamunotri','yamunotri temple sudarshan shah'],
  alternates: { canonical: `${SITE.baseUrl}/yamunotri-history-legends` },
  openGraph: { title: 'Yamunotri Temple History & Legends', description: 'Sage Asit Muni\'s ashram, Yamuna as sister of Yama, and the temple built by Tehri\'s royal family.', url: `${SITE.baseUrl}/yamunotri-history-legends`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Yamunotri Temple history' }] },
  twitter: { card: 'summary_large_image', title: 'Yamunotri Temple History & Legends', description: 'The full history and mythology behind the Yamunotri shrine.', images: [{ url: '/opengraph-image', alt: 'Yamunotri Temple' }] },
};

const FAQS = [
  { q: 'What is the legend of sage Asit Muni at Yamunotri?', a: 'Tradition holds that the sage Asit Muni maintained an ashram at this spot and bathed daily in both the Ganga and the Yamuna as part of his devotional practice. In his old age, unable to make the journey to the Ganga, Yamuna herself is said to have begun flowing at Yamunotri as a stream so the sage could continue his daily ritual without hardship — an act of compassion that anchors the site\'s sanctity.' },
  { q: 'Why is bathing at Yamunotri said to protect against a painful death?', a: 'Yamuna is considered the daughter of Surya, the sun god, and the twin sister of Yama, the god of death. Tradition holds that because of this familial bond, bathing in her waters at Yamunotri grants protection from an untimely or painful death — one of the most distinctive devotional claims among the four dhams, tied directly to Yamuna\'s mythological relationship with death itself.' },
  { q: 'Who built Yamunotri temple?', a: 'The original temple was constructed in 1839 by Tehri Naresh Sudarshan Shah, the ruler of the Tehri princely state. The site is prone to earthquakes and has been damaged and rebuilt several times since, including a significant rebuilding in the 19th century credited to Maharani Gularia.' },
  { q: 'What is Surya Kund at Yamunotri?', a: 'A natural hot spring beside the temple, so hot it is used to boil rice and potatoes, which pilgrims then receive back as prasad. It sits alongside a second, cooler pool, Gauri Kund, suitable for bathing — the two together forming the practical and ritual centre of a Yamunotri visit beyond the temple itself.' },
  { q: 'Where is the actual source of the Yamuna river?', a: 'The glacial source is Yamunotri glacier and the nearby Champasar glacier, high above the temple and not accessible to pilgrims. The temple at Yamunotri marks the traditional and devotional point of worship, similar to how Gangotri temple marks Ganga\'s descent rather than her literal glacial mouth at Gaumukh.' },
];

const PAA = [
  { q: 'Why is Yamuna considered Yama\'s sister?', a: 'In Puranic tradition, both Yamuna and Yama are children of Surya, the sun god — making them twins by some tellings. This sibling bond between the river goddess and the god of death is the mythological basis for the belief that her waters offer protection from a painful or untimely death.' },
  { q: 'Is Surya Kund water safe to touch?', a: 'It is genuinely near-boiling and used specifically for cooking prasad, not bathing — pilgrims interact with it by lowering rice or potatoes tied in cloth rather than touching the water directly. The separate Gauri Kund nearby is the pool used for bathing.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Yamunotri Yatra', item: `${SITE.baseUrl}/yamunotri-yatra` },
    { '@type': 'ListItem', position: 3, name: 'History & Legends', item: `${SITE.baseUrl}/yamunotri-history-legends` },
  ]};
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Yamunotri Temple History & Legends', description: 'Sage Asit Muni\'s ashram, Yamuna as sister of Yama, Surya Kund, and the temple\'s founding by Tehri\'s royal family.', mainEntityOfPage: `${SITE.baseUrl}/yamunotri-history-legends`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

export default function YamunotriHistoryLegends() {
  const waText = encodeURIComponent('Namaste! I would like to plan a Yamunotri yatra. Please share package details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Yamunotri · History &amp; Mythology</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>The Full History and Legends of Yamunotri</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>Sage Asit Muni's ashram, Yamuna as sister of death, the boiling Surya Kund, and the temple built by Tehri's royal family</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['📖 Asit Muni legend', '☀️ Daughter of Surya', '💀 Sister of Yama', '🏛️ Built 1839'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/yamunotri-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Yamunotri Yatra</Link><span>›</span>
          <span>History &amp; Legends</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <p style={p}>Yamunotri is the quietest legend of the four dhams — no epic war, no cosmic descent, just an old sage who could no longer travel, and a river who came to him. This page goes past the practical guide on our <Link href="/yamunotri-temple">Yamunotri Temple page</Link> into the full story and the temple's documented history.</p>

        <h2 style={h2}>Sage Asit Muni's Ashram</h2>
        <AnswerBox>
          Tradition holds that the sage Asit Muni maintained an ashram at Yamunotri and bathed daily in both the Ganga and the Yamuna as part of his devotional practice. In his old age, unable to make the arduous journey to the Ganga, Yamuna herself is said to have begun flowing at this spot so he could continue his daily ritual — an act of divine compassion for a devoted, ageing sage.
        </AnswerBox>
        <p style={p}>It is worth noticing what this legend is not: there is no confrontation here, no penance demanded, no cosmic threat averted. Compared to Ganga's dramatic descent at Gangotri or Shiva's flight from the Pandavas at Kedarnath, the Yamunotri story is almost domestic in scale — a goddess responding to the simple, ordinary hardship of an old man who could no longer walk as far as he once did. Pilgrims often describe Yamunotri as the most intimate of the four dhams, and the legend behind it explains why.</p>

        <h2 style={h2}>Daughter of the Sun, Sister of Death</h2>
        <p style={p}>Yamuna is held, in Puranic tradition, to be the daughter of <strong>Surya</strong>, the sun god, and the twin sister of <strong>Yama</strong>, the god of death. This sibling relationship is the basis of one of the most distinctive devotional claims attached to any of the four dhams: that bathing in Yamuna's waters at Yamunotri offers protection from an untimely or painful death — not because the river opposes death, but because of the bond of kinship between the goddess and the god who governs it. Where the other three dhams centre on purification, penance or liberation in more general terms, Yamunotri's central promise is unusually specific.</p>

        <ExpertNote variant="insider">
          Ask your priest to point out both kunds separately when you arrive — pilgrims sometimes assume Surya Kund and Gauri Kund are the same pool. Surya Kund is where you'll see rice and potatoes lowered in cloth bundles to be cooked as prasad; Gauri Kund, nearby, is the one actually meant for bathing. Mixing the two up is an easy and avoidable mistake.
        </ExpertNote>

        <h2 style={h2}>Surya Kund — the Boiling Spring</h2>
        <p style={p}>Beside the temple sits <strong>Surya Kund</strong>, a natural hot spring hot enough to genuinely cook food — rice and potatoes tied in cloth are lowered into the water and returned to pilgrims boiled, distributed as prasad. A second, cooler pool, <strong>Gauri Kund</strong>, sits nearby and serves the more conventional role of a bathing pool. Together the two springs form the practical centre of gravity at Yamunotri, as significant to the pilgrim experience as the temple itself.</p>

        <h2 style={h2}>The Temple's Documented History</h2>
        <p style={p}>The original Yamunotri temple was constructed in <strong>1839</strong> by <strong>Sudarshan Shah</strong>, the ruler of the Tehri princely state — placing its founding within living memory of colonial-era India, considerably more recent than Kedarnath's or Badrinath's traditional 8th-century origins. The site's exposure to earthquakes has meant repeated damage and rebuilding since, including a significant reconstruction credited to <strong>Maharani Gularia</strong> later in the 19th century. As with Gangotri, the built temple is a comparatively recent marker on ground whose devotional significance, tied to the Asit Muni legend, is understood to run considerably older.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Planning your Yamunotri darshan?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We handle the full itinerary, Surya Kund prasad ritual included. Tell us your dates.</div>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has led Yamunotri yatras across fifteen seasons. <Link href="/about">More about the team</Link>.</p>
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
            {[['Yamunotri Yatra', '/yamunotri-yatra'], ['Yamunotri Temple', '/yamunotri-temple'], ['Yamunotri Festivals', '/yamunotri-festivals'], ['Yamunotri Dharamshala', '/yamunotri-dharamshala'], ['Janki Chatti', '/janki-chatti'], ['Barkot', '/barkot'], ['Yamunotri Pony/Palki Rates', '/yamunotri-pony-palki-rates']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
