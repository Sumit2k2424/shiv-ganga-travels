import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: 'Tapt Kund — The Hot Spring Every Pilgrim Bathes In Before Badrinath | Guide' },
  description: 'Tapt Kund is the natural hot spring at the base of Badrinath temple, 45–55°C year-round, where Agni is said to reside. Legend, temperature, bathing rules, and why every pilgrim stops here first.',
  keywords: ['tapt kund','tapt kund badrinath','badrinath hot spring','tapt kund temperature','tapt kund legend agni','narad kund badrinath'],
  alternates: { canonical: `${SITE.baseUrl}/tapt-kund` },
  openGraph: { title: 'Tapt Kund — The Hot Spring Every Pilgrim Bathes In Before Badrinath', description: 'The natural hot spring at Badrinath, 45–55°C year-round, believed to be the abode of Agni.', url: `${SITE.baseUrl}/tapt-kund`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Tapt Kund hot spring, Badrinath' }] },
  twitter: { card: 'summary_large_image', title: 'Tapt Kund — Badrinath\'s Hot Spring', description: 'The hot spring every pilgrim bathes in before entering Badrinath temple.', images: [{ url: '/opengraph-image', alt: 'Tapt Kund' }] },
};

const FAQS = [
  { q: 'What is Tapt Kund?', a: 'Tapt Kund is a natural sulphur hot spring at the base of the steps leading up to Badrinath temple, in Chamoli district, Uttarakhand. Its water stays warm year-round even in the depths of Himalayan winter, and tradition holds that pilgrims should bathe here before entering the temple for darshan.' },
  { q: 'What is the temperature of Tapt Kund?', a: 'The water typically runs between about 45°C and 55°C, with readings fluctuating through the day and by season. That is a genuinely hot bath at 3,133 m elevation, where the surrounding air can be near freezing — which is exactly what makes the spring feel miraculous to pilgrims arriving cold from the trek up.' },
  { q: 'What is the legend behind Tapt Kund?', a: 'According to tradition, Tapt Kund is the earthly abode of Agni, the Vedic god of fire. The story holds that Agni performed a long penance here to please Lord Vishnu, and in reward was granted a permanent residence in the form of this ever-warm spring — which is why the water never runs cold, whatever the season.' },
  { q: 'Do pilgrims have to bathe at Tapt Kund before Badrinath darshan?', a: 'It is strongly traditional rather than compulsory. Most pilgrims do bathe or at least take a few handfuls of the water on their head and shoulders as a purification step before climbing to the temple, and many operators build a Tapt Kund halt directly into the darshan sequence.' },
  { q: 'Is Tapt Kund safe to bathe in?', a: 'Yes, for the vast majority of visitors — millions bathe here every season without incident. The water is naturally hot, not scalding, and there are separate bathing areas for men and women with steps down into the pool. As with any hot spring, those with heart conditions or very high blood pressure should take it gently and consult a doctor beforehand if unsure.' },
  { q: 'Is Narad Kund the same as Tapt Kund?', a: 'No — they are two different pools close to each other at Badrinath. Tapt Kund is the hot spring used for bathing. Narad Kund is a separate, cooler pool associated with the sage Narada, from which the Badrinath idol itself is traditionally said to have been recovered.' },
];

const PAA = [
  { q: 'Why is Tapt Kund always warm even in snow?', a: 'Geologically, it is a natural geothermal spring — heated groundwater rising through a fault or fracture in the rock, a phenomenon found at several points along the Himalayan belt. Devotionally, the explanation given is Agni\'s permanent residence in the water, granted by Vishnu as a boon.' },
  { q: 'Can you drink the water from Tapt Kund?', a: 'It is used for bathing, not drinking — as a sulphur spring, the water carries a distinct mineral content and smell that is considered medicinally beneficial for the skin when bathed in, but it is not treated as drinking water the way the temple\'s prasad or the nearby glacial streams are.' },
  { q: 'How close is Tapt Kund to Badrinath temple?', a: 'A few dozen steps — it sits directly at the base of the staircase leading up to the temple entrance, which is precisely why it functions as the customary first stop of the darshan.' },
];

function Schema() {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Badrinath Yatra', item: `${SITE.baseUrl}/badrinath-yatra` },
    { '@type': 'ListItem', position: 3, name: 'Tapt Kund', item: `${SITE.baseUrl}/tapt-kund` },
  ]};
  const place = { '@context': 'https://schema.org', '@type': 'TouristAttraction', name: 'Tapt Kund', alternateName: ['Badrinath Hot Spring'], description: 'A natural sulphur hot spring at the base of Badrinath temple, Uttarakhand, believed to be the abode of Agni, where pilgrims traditionally bathe before darshan.', url: `${SITE.baseUrl}/tapt-kund`, image: [`${SITE.baseUrl}/opengraph-image`], address: { '@type': 'PostalAddress', addressLocality: 'Badrinath', addressRegion: 'Uttarakhand', addressCountry: 'IN' }, geo: { '@type': 'GeoCoordinates', latitude: 30.7433, longitude: 79.4938, elevation: '3,133 m' }, isAccessibleForFree: true, touristType: ['Pilgrims'] };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Tapt Kund — The Hot Spring Every Pilgrim Bathes In Before Badrinath', description: 'A guide to Tapt Kund: temperature, the Agni legend, bathing etiquette, and its place in the Badrinath darshan sequence.', mainEntityOfPage: `${SITE.baseUrl}/tapt-kund`, image: [`${SITE.baseUrl}/opengraph-image`], datePublished: SITE.lastUpdatedISO, dateModified: SITE.lastUpdatedISO, author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' }, publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
  </>);
}

export default function TaptKund() {
  const waText = encodeURIComponent('Namaste! I want a Badrinath itinerary that includes proper time at Tapt Kund before darshan. Please share details.');
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>Badrinath · 3,133 m · Sacred hot spring</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>Tapt Kund — The Spring That Never Runs Cold</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>A natural 45–55°C spring at the base of the Badrinath steps, believed to be Agni's earthly home — where every pilgrim bathes before darshan</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🔥 Agni legend', '🌡️ 45–55°C year-round', '🛕 At the temple steps', '🚿 Separate men/women areas'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/badrinath-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Badrinath Yatra</Link><span>›</span>
          <span>Tapt Kund</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Location', 'Base of Badrinath temple'], ['Temperature', '45–55°C'], ['Type', 'Natural sulphur spring'], ['Legend', 'Abode of Agni'], ['Access', 'Free, year-round'], ['Custom', 'Bathe before darshan']].map(([k, v]) => (
            <div key={k}><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}><strong>At 3,133 m, with snow-fed peaks on every side, there is a pool of water hot enough to bathe in comfortably — and it has never once run cold.</strong> Tapt Kund sits at the very base of the steps up to Badrinath temple, and for most pilgrims it is the true beginning of the darshan: cold from the drive or the trek, they step into water that steams in the mountain air, and climb to the temple warm.</p>

        <h2 style={h2}>What Is Tapt Kund?</h2>
        <AnswerBox>
          Tapt Kund is a natural hot spring at the foot of Badrinath temple in Uttarakhand, with water temperature typically between 45°C and 55°C year-round. Fed by geothermal activity beneath the Himalayas, it stays warm through the coldest winters and is where pilgrims traditionally bathe before entering the temple for darshan.
        </AnswerBox>

        <h2 style={h2}>The Legend of Agni's Spring</h2>
        <p style={p}>Tradition holds that Tapt Kund is the earthly residence of <strong>Agni</strong>, the Vedic god of fire. The story goes that Agni performed a long penance at this exact spot to win the favour of Vishnu — and in reward, Vishnu granted him a permanent home here, not as flame but as ever-warm water. It is a fitting inversion: the god of fire, present not as heat you see but as heat you feel, in a spring that a Himalayan winter has never managed to cool.</p>
        <p style={p}>The spring is also credited with medicinal properties in local tradition, particularly for skin conditions, owing to its natural sulphur content — a claim shared with several hot springs across the Himalayan belt, though pilgrims come first for the ritual purification, not the therapy.</p>

        <ExpertNote variant="usp">
          We build the Tapt Kund stop into the itinerary deliberately, not as an afterthought. After a long drive or the Kedarnath-side cold, arriving pilgrims are often chilled and stiff — five minutes in the spring before the temple steps changes the whole experience of the darshan that follows. It costs nothing and takes almost no time, and most first-time visitors don't even know it's there until someone tells them.
        </ExpertNote>

        <h2 style={h2}>Tapt Kund and Narad Kund — Not the Same Pool</h2>
        <p style={p}>Two named pools sit close together at Badrinath, and pilgrims often conflate them. <strong>Tapt Kund</strong> is the hot bathing spring described on this page. <strong>Narad Kund</strong>, a separate and cooler pool nearby, carries its own legend — that the current Badrinath idol was recovered from its waters by Adi Shankaracharya, after it had lain lost in the river for centuries. Bathing happens at Tapt Kund; the idol's origin story belongs to Narad Kund.</p>

        <h2 style={h2}>Bathing Etiquette</h2>
        <p style={p}>Separate bathing areas exist for men and women, with steps down into the pool on each side. The custom is a brief bath or a few handfuls of water over the head and shoulders — not a long soak — before proceeding up to the temple in fresh or dry clothes. As with any natural hot spring, ease in gradually rather than plunging, and if you have a heart condition or significant blood pressure concern, check with a doctor before bathing at altitude.</p>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Planning your Badrinath darshan?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>We build the Tapt Kund halt into every Badrinath itinerary. Tell us your dates.</div>
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
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Has led hundreds of pilgrims through the Tapt Kund–to–darshan sequence at Badrinath. <Link href="/about">More about the team</Link>.</p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Planning a Badrinath or Char Dham trip?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free routed itinerary in 2 hours · Zero commission · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Plan on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Around Badrinath</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Badrinath Yatra', '/badrinath-yatra'], ['Badrinath Temple', '/badrinath-temple'], ['Mana Village', '/mana-village-badrinath'], ['Panch Badri Yatra', '/panch-badri-yatra'], ['Yogdhyan Badri', '/yogdhyan-badri-temple'], ['Vridh Badri', '/vridh-badri-temple'], ['Joshimath Narsingh Temple', '/joshimath-narsingh-temple'], ['Char Dham Yatra', '/char-dham-yatra']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}><PeopleAlsoAsk items={PAA} /></div>
      </article>
    </>
  );
}
