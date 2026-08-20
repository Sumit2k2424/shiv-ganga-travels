import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Devi Temples in Uttarakhand — The Complete List, Mansa Devi to Surkanda Devi' },
  description: 'Every major Devi (goddess) temple in Uttarakhand in one place: Mansa Devi, Chandi Devi, Maya Devi (a Shakti Peeth), Dhari Devi and Surkanda Devi — legends, access and significance.',
  keywords: ['devi temples uttarakhand','shakti peeth uttarakhand','mansa devi temple haridwar','chandi devi temple','maya devi temple haridwar','dhari devi temple','surkanda devi temple'],
  alternates: { canonical: `${SITE.baseUrl}/uttarakhand-devi-temples` },
  openGraph: { title: 'Devi Temples in Uttarakhand — The Complete List', description: 'Every major goddess temple in Uttarakhand: Mansa Devi, Chandi Devi, Maya Devi, Dhari Devi and Surkanda Devi.', url: `${SITE.baseUrl}/uttarakhand-devi-temples`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Uttarakhand Devi temples' }] },
  twitter: { card: 'summary_large_image', title: 'Devi Temples in Uttarakhand', description: 'The complete list of major goddess temples across Uttarakhand.', images: [{ url: '/opengraph-image', alt: 'Devi Temples Uttarakhand' }] },
};

const TEMPLES = [
  { name: 'Mansa Devi', tag: 'Haridwar · Ropeway', note: 'Atop Bilwa Parvat above Har Ki Pauri, said to fulfil wishes (mansa); reached by ropeway or a steep trek.', href: '/mansa-devi-temple' },
  { name: 'Chandi Devi', tag: 'Haridwar · Ropeway', note: 'Atop Neel Parvat across the Ganga from Mansa Devi, installed by Adi Shankaracharya in the 8th century.', href: '/chandi-devi-temple' },
  { name: 'Maya Devi', tag: 'Haridwar · Shakti Peeth', note: 'One of the 51 or 52 Shakti Peeths — sites where parts of Sati\'s body are said to have fallen — genuinely uncommon in Haridwar itself.', href: '/maya-devi-temple' },
  { name: 'Dhari Devi', tag: 'Kalimath–Srinagar road', note: 'Guardian goddess of the Char Dham route, controversially relocated for the Srinagar hydro project; the idol changes form through the day.', href: '/dhari-devi-temple' },
  { name: 'Surkanda Devi', tag: 'Near Dhanaulti', note: 'A Shakti Peeth site (Sati\'s head) high above the Chamba–Mussoorie road, reached by a scenic ridge trek.', href: '/surkanda-devi-temple' },
];

const FAQS = [
  { q: 'What is a Shakti Peeth?', a: 'A Shakti Peeth is one of a set of sites — traditionally numbered 51 or 52 across the Indian subcontinent — believed to mark where a part of the goddess Sati\'s body fell after Shiva, grief-stricken, carried her corpse across the cosmos and Vishnu\'s discus cut it into pieces. Maya Devi in Haridwar and Surkanda Devi near Dhanaulti are both counted among them.' },
  { q: 'Which Haridwar temples can be visited together?', a: 'Mansa Devi and Chandi Devi are the classic pairing — both reached by ropeway, both overlooking Haridwar from opposite hills, and both commonly visited in a single day alongside Har Ki Pauri. Maya Devi, in the town itself, adds easily to the same day.' },
  { q: 'Why was Dhari Devi temple relocated?', a: 'The original Dhari Devi temple sat directly on the banks of the Alaknanda and was submerged by the reservoir of a hydroelectric project near Srinagar Garhwal; the temple was relocated to higher ground nearby, a move that drew significant local and religious controversy at the time.' },
  { q: 'What is unusual about the Dhari Devi idol?', a: 'Tradition holds that the idol\'s form changes through the day — appearing as a young girl in the morning, a full-grown woman at midday, and an elderly woman by evening — a devotional belief distinctive to this specific shrine among Uttarakhand\'s goddess temples.' },
  { q: 'Is Surkanda Devi difficult to reach?', a: 'It requires a trek of a few kilometres from the roadhead near Kaddukhal on the Chamba–Mussoorie road, moderate rather than difficult, rewarded with wide Himalayan views along the ridge — accessible to most reasonably fit visitors without technical trekking experience.' },
];

const PAA = [
  { q: 'Why are there two major Devi temples on hills above Haridwar?', a: 'Mansa Devi and Chandi Devi sit on Bilwa Parvat and Neel Parvat respectively, the two hills flanking Haridwar on either side of the Ganga — their positions were chosen precisely to watch over the town from both directions, and both have become major pilgrimage draws with dedicated ropeways built to handle the volume.' },
  { q: 'Is Dhari Devi connected to the Char Dham yatra?', a: 'Yes — traditionally regarded as the guardian deity of the Char Dham route, with local belief holding that her presence protects pilgrims travelling the road toward Kedarnath and Badrinath, which is part of why her 2013 relocation drew such strong reaction.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Uttarakhand Tour Packages', item: `${SITE.baseUrl}/uttarakhand-tour-packages` },
    { '@type': 'ListItem', position: 3, name: 'Devi Temples', item: `${SITE.baseUrl}/uttarakhand-devi-temples` },
  ]};
  const list = { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Devi Temples in Uttarakhand', itemListElement: TEMPLES.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, url: `${SITE.baseUrl}${t.href}` })) };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Devi Temples in Uttarakhand — The Complete List', description: 'Every major goddess temple in Uttarakhand: Mansa Devi, Chandi Devi, Maya Devi, Dhari Devi and Surkanda Devi.', mainEntityOfPage: `${SITE.baseUrl}/uttarakhand-devi-temples`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(list) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

export default function UttarakhandDeviTemples() {
  const waText = encodeURIComponent('Namaste! I want to plan a Devi temple circuit in Uttarakhand. Please share options.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Devi Temples · Uttarakhand</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Every Major Devi Temple in Uttarakhand</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>From the twin hilltop shrines above Haridwar to two genuine Shakti Peeths and the guardian goddess of the Char Dham road</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🚡 2 ropeway temples', '🔱 2 Shakti Peeths', '🛣️ 1 route guardian', '📍 5 temples total'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/uttarakhand-tour-packages" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Uttarakhand Tour Packages</Link><span>›</span>
          <span>Devi Temples</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <p style={p}><strong>Uttarakhand's goddess temples span the full range of Shakti tradition</strong> — twin hilltop shrines watching over Haridwar, two genuine Shakti Peeths marking where the goddess Sati's body is said to have fallen, and a river-guardian deity whose relocation for a hydro project became a genuine controversy. This page brings the major ones together in one place.</p>

        <h2 style={h2}>The Complete List</h2>
        <AnswerBox>
          Uttarakhand's major Devi temples: Mansa Devi and Chandi Devi, the twin hilltop shrines above Haridwar; Maya Devi, a Shakti Peeth in Haridwar town itself; Dhari Devi, guardian goddess of the Char Dham route near Srinagar Garhwal; and Surkanda Devi, a Shakti Peeth near Dhanaulti reached by a ridge trek.
        </AnswerBox>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {TEMPLES.map((t, i) => (
            <Link key={t.name} href={t.href} style={{ display: 'block', background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))', borderLeft: '4px solid var(--teal)', textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)' }}>{i + 1}. {t.name}</div>
                <div style={{ fontSize: 11.5, color: 'var(--teal)', fontWeight: 700 }}>{t.tag}</div>
              </div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{t.note}</div>
            </Link>
          ))}
        </div>

        <h2 style={h2}>The Twin Hills of Haridwar</h2>
        <p style={p}><strong>Mansa Devi</strong>, atop Bilwa Parvat, and <strong>Chandi Devi</strong>, atop Neel Parvat across the river, watch over Haridwar from opposite hills — both reached by ropeway, both commonly visited together on the same day alongside <Link href="/har-ki-pauri-guide">Har Ki Pauri</Link>. Chandi Devi's installation is traditionally credited to Adi Shankaracharya in the 8th century, tying it directly to the same figure behind the wider Char Dham system. <strong>Maya Devi</strong>, in the town itself, is the quieter of the three — but genuinely significant, being one of the 51 or 52 recognised Shakti Peeths.</p>

        <ExpertNote variant="insider">
          Most visitors do Mansa Devi and Chandi Devi in one day and skip Maya Devi entirely, purely because it doesn't have a ropeway and sits inside the town rather than on a dramatic hilltop. That's a mistake if Shakti Peeth significance matters to you — it's a five-minute stop that most itineraries simply never mention.
        </ExpertNote>

        <h2 style={h2}>The Shakti Peeth Tradition</h2>
        <p style={p}>According to tradition, when Shiva carried Sati's corpse across the cosmos in grief after her self-immolation at Daksha's yagna, Vishnu's discus cut the body into pieces that fell across the subcontinent — each fall site became a <strong>Shakti Peeth</strong>. Both <strong>Maya Devi</strong> in Haridwar and <strong>Surkanda Devi</strong> near Dhanaulti, associated with Sati's head, are counted among this set, giving Uttarakhand two genuine Shakti Peeth sites within a relatively compact travel radius.</p>

        <h2 style={h2}>Dhari Devi — Guardian of the Char Dham Road</h2>
        <p style={p}>On the Alaknanda near <Link href="/srinagar-garhwal">Srinagar Garhwal</Link>, <strong>Dhari Devi</strong> holds a role distinct from any temple on this list: local tradition regards her as the protector of pilgrims travelling the Char Dham route itself. Her original riverside temple was submerged by a hydroelectric reservoir and relocated to higher ground — a move that drew significant controversy at the time, and the temple today carries a devotional detail found nowhere else on this list: the idol's form is said to change through the day, from a young girl in the morning to an elderly woman by evening.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Planning a Devi temple circuit?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We can route any combination — Haridwar's three temples in a day, or the full circuit including Surkanda Devi. Tell us your dates.</div>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has routed pilgrims to every temple on this list across fifteen yatra seasons. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Devi temple pilgrimage in Uttarakhand?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Related pilgrimage circuits</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Uttarakhand Shiva Temples', '/uttarakhand-shiva-temples'], ['Har Ki Pauri Guide', '/har-ki-pauri-guide'], ['Haridwar Sightseeing Places', '/haridwar-sightseeing-places'], ['Srinagar Garhwal', '/srinagar-garhwal'], ['Char Dham Yatra', '/char-dham-yatra']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
