import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Shiva Temples in Uttarakhand — The Complete List, Panch Kedar to Neelkanth' },
  description: 'Every major Shiva temple in Uttarakhand in one place: Kedarnath and the five Panch Kedar, Neelkanth Mahadev, Daksh Mahadev, Tapt Kund and Vishnu-adjacent sites — altitude, access and significance.',
  keywords: ['shiva temples uttarakhand','uttarakhand shiva temple list','panch kedar temples list','neelkanth mahadev rishikesh','daksh mahadev haridwar','shiva temples garhwal'],
  alternates: { canonical: `${SITE.baseUrl}/uttarakhand-shiva-temples` },
  openGraph: { title: 'Shiva Temples in Uttarakhand — The Complete List', description: 'Every major Shiva temple in Uttarakhand: the Panch Kedar, Neelkanth Mahadev, Daksh Mahadev and more.', url: `${SITE.baseUrl}/uttarakhand-shiva-temples`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Uttarakhand Shiva temples' }] },
  twitter: { card: 'summary_large_image', title: 'Shiva Temples in Uttarakhand', description: 'The complete list of major Shiva temples across Uttarakhand.', images: [{ url: '/opengraph-image', alt: 'Shiva Temples Uttarakhand' }] },
};

const TEMPLES = [
  { name: 'Kedarnath', tag: 'Jyotirlinga · Panch Kedar #1', alt: '3,583 m', note: 'Shiva\'s hump; one of the twelve Jyotirlingas and the fourth stop of the Char Dham.', href: '/kedarnath-temple' },
  { name: 'Tungnath', tag: 'Panch Kedar #2', alt: '3,680 m', note: 'Shiva\'s arms; the highest Shiva temple in the world, a short trek from Chopta.', href: '/chopta-tungnath' },
  { name: 'Rudranath', tag: 'Panch Kedar #3', alt: '3,600 m', note: 'Shiva\'s face, worshipped as Neelkanth Mahadev; the hardest Panch Kedar trek.', href: '/rudranath-temple' },
  { name: 'Madhyamaheshwar', tag: 'Panch Kedar #4', alt: '3,497 m', note: 'Shiva\'s navel, reached via a trek through alpine meadows from Ransi.', href: '/madhyamaheshwar-temple' },
  { name: 'Kalpeshwar', tag: 'Panch Kedar #5', alt: '2,134 m', note: 'Shiva\'s matted hair, worshipped in a rock cave; the only Panch Kedar open year-round.', href: '/kalpeshwar-temple' },
  { name: 'Neelkanth Mahadev', tag: 'Near Rishikesh', alt: '~1,675 m', note: 'Where Shiva swallowed the poison of the cosmic ocean; a major pilgrimage near Rishikesh.', href: '/neelkanth-mahadev-temple' },
  { name: 'Daksh Mahadev', tag: 'Kankhal, Haridwar', alt: '~305 m', note: 'Site of Daksha\'s yagna and Sati\'s self-immolation, the origin of the Shiva-Sati legend.', href: '/daksh-mahadev-temple' },
];

const FAQS = [
  { q: 'What are the Panch Kedar temples?', a: 'The five Shiva shrines of the Panch Kedar circuit are Kedarnath, Tungnath, Rudranath, Madhyamaheshwar and Kalpeshwar, each said to enshrine a different part of Shiva\'s body — hump, arms, face, navel and hair respectively — that resurfaced after he fled the Pandavas in the form of a bull.' },
  { q: 'Which is the most important Shiva temple in Uttarakhand?', a: 'Kedarnath, both as one of the twelve Jyotirlingas — the most sacred category of Shiva shrine in Hindu tradition — and as the fourth stop of the Char Dham pilgrimage, making it the single most-visited Shiva temple in the state by a wide margin.' },
  { q: 'What is the highest Shiva temple in the world?', a: 'Tungnath, at 3,680 m, is widely cited as the highest Shiva temple in the world, reached by a roughly 3.5 km trek from Chopta — the most accessible of the Panch Kedar besides Kedarnath itself.' },
  { q: 'Is Neelkanth Mahadev part of the Panch Kedar?', a: 'No — Neelkanth Mahadev near Rishikesh is a separate, major Shiva pilgrimage site tied to the poison-swallowing legend (the same episode referenced in Rudranath\'s name), but it is not one of the five Panch Kedar shrines, which are all located deeper in the Garhwal Himalayas.' },
  { q: 'Which Shiva temple in Uttarakhand is easiest to reach?', a: 'Daksh Mahadev, in Kankhal near Haridwar, requires no trek or high-altitude travel at all — it sits at plains elevation and is accessible year-round by road, making it the most convenient on this list for pilgrims without time or fitness for the Panch Kedar circuit.' },
];

const PAA = [
  { q: 'Why is Kedarnath called a Jyotirlinga?', a: 'A Jyotirlinga is a shrine where Shiva is believed to have manifested as a column of light — twelve such sites exist across India, and Kedarnath, the northernmost and highest, is counted among them, distinct from (though connected to) its role in the separate Panch Kedar legend.' },
  { q: 'What is the connection between Rudranath and Neelkanth Mahadev?', a: 'Both are worshipped under the name Neelkanth ("blue-throated"), referencing the same legend of Shiva swallowing the poison from the churning of the cosmic ocean — but they are two entirely separate temples in different parts of Uttarakhand, not the same site.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Uttarakhand Tour Packages', item: `${SITE.baseUrl}/uttarakhand-tour-packages` },
    { '@type': 'ListItem', position: 3, name: 'Shiva Temples', item: `${SITE.baseUrl}/uttarakhand-shiva-temples` },
  ]};
  const list = { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Shiva Temples in Uttarakhand', itemListElement: TEMPLES.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, url: `${SITE.baseUrl}${t.href}` })) };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Shiva Temples in Uttarakhand — The Complete List', description: 'Every major Shiva temple in Uttarakhand: the Panch Kedar, Neelkanth Mahadev, Daksh Mahadev and more.', mainEntityOfPage: `${SITE.baseUrl}/uttarakhand-shiva-temples`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(list) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

export default function UttarakhandShivaTemples() {
  const waText = encodeURIComponent('Namaste! I want to plan a Shiva temple circuit in Uttarakhand. Please share options.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Shiva Temples · Uttarakhand</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Every Major Shiva Temple in Uttarakhand</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>From the Jyotirlinga at Kedarnath and the full Panch Kedar circuit to Neelkanth Mahadev and Daksh Mahadev at the plains</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🕉️ 1 Jyotirlinga', '🛕 5 Panch Kedar', '🏞️ 2 plains-accessible', '📍 7 temples total'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/uttarakhand-tour-packages" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Uttarakhand Tour Packages</Link><span>›</span>
          <span>Shiva Temples</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <p style={p}><strong>Uttarakhand holds one of the densest concentrations of significant Shiva temples anywhere in India</strong> — a Jyotirlinga, an entire five-temple circuit built around a single Puranic legend, and major shrines at both extreme altitude and plains level. This page brings all of them together in one place.</p>

        <h2 style={h2}>The Complete List</h2>
        <AnswerBox>
          Uttarakhand's major Shiva temples: Kedarnath (Jyotirlinga, Panch Kedar), Tungnath, Rudranath, Madhyamaheshwar and Kalpeshwar (the remaining four Panch Kedar), Neelkanth Mahadev near Rishikesh, and Daksh Mahadev at Kankhal, Haridwar — spanning altitudes from 305 m to 3,680 m.
        </AnswerBox>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {TEMPLES.map((t, i) => (
            <Link key={t.name} href={t.href} style={{ display: 'block', background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))', borderLeft: '4px solid var(--teal)', textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)' }}>{i + 1}. {t.name}</div>
                <div style={{ fontSize: 11.5, color: 'var(--teal)', fontWeight: 700 }}>{t.tag} · {t.alt}</div>
              </div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{t.note}</div>
            </Link>
          ))}
        </div>

        <h2 style={h2}>The Panch Kedar — One Legend, Five Temples</h2>
        <p style={p}>Five of the seven temples above belong to a single unified legend: after the Kurukshetra war, the Pandavas sought Shiva's forgiveness; he fled as a bull and dove into the earth; his body resurfaced across five sites in the Garhwal Himalayas. Completing the full <Link href="/panch-kedar-yatra">Panch Kedar circuit</Link> — Kedarnath, Tungnath, Rudranath, Madhyamaheshwar and Kalpeshwar — is one of the more demanding multi-site pilgrimages in Indian tradition, involving several separate treks across different districts.</p>

        <ExpertNote variant="insider">
          Most pilgrims complete Kedarnath alone and call it done — which is completely reasonable given the Jyotirlinga status makes it the most significant stop on its own. But if you have genuine interest in the wider legend, Kalpeshwar and Tungnath are comparatively easy additions (short treks, no multi-day commitment) that most operators never suggest because they're not part of the standard Char Dham package.
        </ExpertNote>

        <h2 style={h2}>Beyond the Panch Kedar</h2>
        <p style={p}><strong>Neelkanth Mahadev</strong>, near Rishikesh, ties to the same poison-swallowing legend referenced in Rudranath's alternate name, but is an entirely separate, hugely popular pilgrimage site in its own right, easily combined with a Rishikesh or Haridwar trip without any Himalayan trekking required. <strong>Daksh Mahadev</strong>, at Kankhal near Haridwar, sits at the opposite extreme — plains elevation, year-round accessible, and tied to one of Shaivism's foundational stories: the destruction of Daksha's yagna and Sati's self-immolation, the mythological root of the Shiva-Shakti tradition.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Planning a Shiva temple circuit?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We can route any combination — Kedarnath alone, the full Panch Kedar, or Neelkanth and Daksh Mahadev alongside Haridwar/Rishikesh. Tell us your dates.</div>
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
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Shiva temple pilgrimage in Uttarakhand?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Related pilgrimage circuits</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Panch Kedar Yatra', '/panch-kedar-yatra'], ['Uttarakhand Devi Temples', '/uttarakhand-devi-temples'], ['Char Dham Yatra', '/char-dham-yatra'], ['Panch Badri Yatra', '/panch-badri-yatra'], ['Kumbh Mela Haridwar', '/kumbh-mela-haridwar']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
