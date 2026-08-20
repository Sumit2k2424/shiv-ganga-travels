import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Kalpeshwar Temple — Urgam Valley, the Only Year-Round Panch Kedar | Guide' },
  description: 'Kalpeshwar, in Urgam valley near Joshimath, is where Shiva\'s matted hair (jata) is worshipped in a natural rock cave — the only one of the five Panch Kedar open all year.',
  keywords: ['kalpeshwar temple','kalpeshwar urgam valley','panch kedar kalpeshwar','jateshwar mahadev','kalpeshwar trek joshimath','shiva jata temple'],
  alternates: { canonical: `${SITE.baseUrl}/kalpeshwar-temple` },
  openGraph: { title: 'Kalpeshwar Temple — Urgam Valley, the Only Year-Round Panch Kedar', description: 'Shiva\'s matted hair, worshipped in a natural cave — the only Panch Kedar open all year.', url: `${SITE.baseUrl}/kalpeshwar-temple`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kalpeshwar Temple, Urgam Valley' }] },
  twitter: { card: 'summary_large_image', title: 'Kalpeshwar Temple — Urgam Valley', description: 'The only Panch Kedar temple open all year, in Urgam valley.', images: [{ url: '/opengraph-image', alt: 'Kalpeshwar Temple' }] },
};

const FAQS = [
  { q: 'What is Kalpeshwar temple?', a: 'Kalpeshwar is a Shiva temple in a natural rock cave in Urgam valley, Chamoli district, at about 2,134 m. It is one of the five Panch Kedar shrines and the only one that stays open to pilgrims year-round — the other four close for winter under snow.' },
  { q: 'Why is Kalpeshwar unique among the Panch Kedar temples?', a: 'It enshrines Shiva not as an idol carved in stone but as jata — his matted hair — emerging from a natural rock formation inside a cave, worshipped under the name Jateshwar. And because it sits at a comparatively low 2,134 m, well below the snowline that shuts Kedarnath, Tungnath, Rudranath and Madhyamaheshwar each winter, it is the one Panch Kedar shrine accessible in every month of the year.' },
  { q: 'What is the Panch Kedar legend at Kalpeshwar?', a: 'The Pandavas, seeking Shiva\'s forgiveness after the Kurukshetra war, pursued him as he fled in the form of a bull. When they cornered him, he dived into the earth to escape, and his body reappeared in five places: the hump at Kedarnath, the arms at Tungnath, the face at Rudranath, the navel at Madhyamaheshwar — and the hair, here at Kalpeshwar, believed to have surfaced as he vanished.' },
  { q: 'How difficult is the trek to Kalpeshwar?', a: 'Easy by Panch Kedar standards — roughly 2 km on foot from Urgam village, on a relatively gentle path. It is the most accessible of the five temples after Kedarnath itself, and manageable for most reasonably fit pilgrims without technical trekking experience.' },
  { q: 'How far is Kalpeshwar from Joshimath?', a: 'About 12–13 km by road to Helang and then Urgam village, followed by the short 2 km trek. The full trip from Joshimath, including the walk, takes roughly half a day.' },
  { q: 'What does Jateshwar mean?', a: 'Jata means matted, uncut hair, of the kind ascetics and Shiva himself are traditionally depicted with; Jateshwar is "lord of the matted hair" — the name under which Shiva is worshipped at this specific shrine.' },
];

const PAA = [
  { q: 'Which Panch Kedar temple is open in winter?', a: 'Kalpeshwar alone. Its 2,134 m elevation keeps it below the snowline that closes the other four each November, making it the only Panch Kedar shrine where a pilgrim can have darshan of a Shiva-form Panch Kedar deity in the off-season, alongside the separate winter-seat system used at the Char Dham temples.' },
  { q: 'Is Kalpeshwar easy to visit?', a: 'Yes, relatively — a short 2 km walk from Urgam village compares favourably to Rudranath\'s 20 km trek or Madhyamaheshwar\'s multi-day approach. It is a realistic add-on for pilgrims who are short on time or trekking experience but still want to complete part of the Panch Kedar circuit.' },
  { q: 'What is Urgam valley known for besides the temple?', a: 'Apple orchards and a scattering of small Garhwali villages relatively untouched by mass tourism — the valley itself, not just the temple, is a quiet detour off the main Joshimath–Badrinath road.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Panch Kedar Yatra', item: `${SITE.baseUrl}/panch-kedar-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Kalpeshwar', item: `${SITE.baseUrl}/kalpeshwar-temple` },
  ]};
  const place = { '@context': 'https://schema.org', '@type': 'HinduTemple', name: 'Kalpeshwar Temple', alternateName: ['Jateshwar Mahadev'], description: 'A Panch Kedar shrine in a natural rock cave in Urgam valley, Chamoli district, Uttarakhand, enshrining Shiva\'s matted hair. The only Panch Kedar temple open year-round.', url: `${SITE.baseUrl}/kalpeshwar-temple`, image: [`${SITE.baseUrl}/opengraph-image`], address: { '@type': 'PostalAddress', addressLocality: 'Urgam Valley, Chamoli', addressRegion: 'Uttarakhand', addressCountry: 'IN' }, geo: { '@type': 'GeoCoordinates', latitude: 30.5833, longitude: 79.6167, elevation: '2,134 m' }, isAccessibleForFree: true, touristType: ['Pilgrims'] };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Kalpeshwar Temple — Urgam Valley, the Only Year-Round Panch Kedar', description: 'A guide to Kalpeshwar: the jata legend, why it stays open all year, and how to reach Urgam valley.', mainEntityOfPage: `${SITE.baseUrl}/kalpeshwar-temple`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

export default function Kalpeshwar() {
  const waText = encodeURIComponent('Namaste! I want to visit Kalpeshwar temple in Urgam valley, possibly in the off-season. Please share details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Urgam Valley · 2,134 m · Panch Kedar</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Kalpeshwar — Shiva's Hair, Open All Year</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>A short walk into a rock cave in Urgam valley, where Shiva is worshipped as matted hair — the only Panch Kedar temple that never closes</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🛕 Rock-cave shrine', '❄️ Open every month', '🥾 2 km easy trek', '🚗 ~13 km from Joshimath'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/panch-kedar-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Panch Kedar Yatra</Link><span>›</span>
          <span>Kalpeshwar</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Altitude', '2,134 m'], ['Location', 'Urgam Valley'], ['Trek', '~2 km, easy'], ['From Joshimath', '~13 km + trek'], ['Open', 'Year-round'], ['Deity form', 'Jata (matted hair)']].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>Four of the five Panch Kedar shut down every winter under metres of snow. Kalpeshwar never does.</strong> Tucked into a rock cave at the head of the quiet, apple-growing Urgam valley near Joshimath, it is the one shrine in the entire Panch Kedar circuit where a pilgrim can walk in on any day of any month and find Shiva already there.</p>

        <h2 style={h2}>What Is Kalpeshwar Temple?</h2>
        <AnswerBox>
          Kalpeshwar is a Shiva temple built into a natural rock cave in Urgam valley, Chamoli district, at about 2,134 m. It is one of the five Panch Kedar shrines, enshrining Shiva's matted hair (jata) rather than a carved idol, and is the only Panch Kedar temple that remains open to pilgrims through every winter.
        </AnswerBox>
        <p style={p}>Inside the cave, Shiva is worshipped not as an image but as <em>jata</em> — locks of matted, uncut hair, of the kind associated with ascetics and with Shiva himself in his form as the great yogi — emerging from the rock. The temple's alternate name, <strong>Jateshwar Mahadev</strong>, comes directly from this: lord of the matted hair.</p>

        <h2 style={h2}>The Panch Kedar Legend</h2>
        <p style={p}>The Pandavas, after the Kurukshetra war, sought out Shiva to be absolved of the killing done on both sides of their own family. Shiva, avoiding them, took the form of a bull and, when finally cornered, dived into the ground. His body is said to have resurfaced in five places across Garhwal: the hump at <Link href="/kedarnath-temple">Kedarnath</Link>, the arms at <Link href="/chopta-tungnath">Tungnath</Link>, the face at <Link href="/rudranath-temple">Rudranath</Link>, the navel at <Link href="/madhyamaheshwar-temple">Madhyamaheshwar</Link> — and his hair, at Kalpeshwar, as he vanished from sight.</p>

        <ExpertNote variant="tip">
          If you are travelling in the Char Dham off-season — say, a December visit when Badrinath and the higher dhams are all closed — Kalpeshwar is one of the very few genuine pilgrimage darshans still available in the district. It won't replace a Char Dham yatra, but it is a real, working Shiva temple you can actually reach when almost everything around it is shut.
        </ExpertNote>

        <h2 style={h2}>How to Reach Kalpeshwar</h2>
        <p style={p}>From Joshimath, drive roughly 13 km to <strong>Helang</strong> and on to <strong>Urgam village</strong>, then walk the final stretch — about 2 km on a gentle, well-used path, the easiest approach of any Panch Kedar temple besides Kedarnath's motorable-adjacent trek. The full outing from Joshimath, including the walk, takes about half a day.</p>
        <p style={p}>There is no railway station or airport nearby; the nearest are Rishikesh (rail) and Dehradun/Jolly Grant (air), both roughly a full day's drive away via the standard <Link href="/char-dham-yatra-route-map">Char Dham road route</Link>.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Want Kalpeshwar added to your Joshimath route?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>It's an easy half-day addition, in-season or off-season. Tell us your dates.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>When to Go</h2>
        <p style={p}>Any month works — that is the entire point of Kalpeshwar. <strong>May–June and September–October</strong> line up with the main Badrinath season if you want to combine both. <strong>December–March</strong>, when everything higher up the valley is shut, Kalpeshwar and Urgam's apple-growing villages are worth the trip on their own terms, with far fewer visitors than any other month.</p>

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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Routes off-season Garhwal darshans to Kalpeshwar when the main dhams are closed. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Panch Kedar or off-season trip?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>The Panch Kedar circuit</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Panch Kedar Yatra', '/panch-kedar-yatra'], ['Kedarnath Temple', '/kedarnath-temple'], ['Chopta Tungnath', '/chopta-tungnath'], ['Rudranath', '/rudranath-temple'], ['Madhyamaheshwar Temple', '/madhyamaheshwar-temple'], ['Govindghat', '/govindghat'], ['Joshimath Narsingh Temple', '/joshimath-narsingh-temple'], ['Winter Char Dham Yatra', '/winter-char-dham-yatra']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
