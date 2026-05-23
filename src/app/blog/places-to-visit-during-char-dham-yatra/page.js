import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Top 10 Places to Visit During Char Dham Yatra 2026 – Beyond the 4 Dhams',
  description: 'Best places to visit during Char Dham Yatra 2026 beyond the temples: Harsil Valley, Mana Village, Triyuginarayan, Devprayag, Chopta, and Lakhamandal — with route tips and timings.',
  keywords: ['places to visit during char dham yatra', 'char dham yatra sightseeing 2026', 'tourist places char dham route', 'attractions near kedarnath', 'places near badrinath', 'harsil valley char dham', 'char dham yatra side trips'],
  alternates: { canonical: `${SITE.baseUrl}/blog/places-to-visit-during-char-dham-yatra` },
  openGraph: {
    title: 'Top 10 Places to Visit During Char Dham Yatra 2026 – Beyond the 4 Dhams',
    description: 'Go beyond the 4 dhams: Harsil Valley, Mana Village (last Indian village), Triyuginarayan, Devprayag Panch Prayag, Dhari Devi. What to see without adding extra days.',
    url: `${SITE.baseUrl}/blog/places-to-visit-during-char-dham-yatra`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Top Places to Visit During Char Dham Yatra 2026 — Beyond the 4 Dhams | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Places to Visit During Char Dham Yatra 2026 — Insider Guide',
    description: 'Go beyond the 4 dhams: Harsil Valley, Mana Village (last Indian village), Triyuginarayan, Devprayag Panch Prayag, Dhari Devi. What to see without adding ex',
    images: [{ url: '/opengraph-image', alt: 'Top Places to Visit During Char Dham Yatra 2026 — Insider Gu | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Places to Visit During Char Dham Yatra', item: `${SITE.baseUrl}/blog/places-to-visit-during-char-dham-yatra` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />;
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem,2.5vw,1.4rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 32 };
const p = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

const places = [
  {
    name: 'Harsil Valley',
    near: 'Gangotri route (18km before Gangotri)',
    detour: 'No detour — directly on route',
    addTime: '30-min stop',
    type: 'Scenic',
    desc: 'A lush valley on the banks of the Bhagirathi at 2,620m. Apple orchards, ancient deodar forests, and the clearest mountain water anywhere on the route. The Wilson Cottage (built by British adventurer Frederick "Pahari Wilson" in the 1850s) still stands. Harsil is where many pilgrims have their first real "I am in the Himalayas" moment. Do not skip this.',
    tip: 'The apple orchards are visible September–October when the fruit is on the trees. May–June, the valley is lush green. Stop at the river for 10 minutes — the Bhagirathi here is turquoise, not the brown it becomes lower down.',
  },
  {
    name: 'Mana Village',
    near: 'Badrinath (3km beyond the temple)',
    detour: '3km drive from Badrinath temple',
    addTime: '1.5–2 hrs',
    type: 'Cultural/Historic',
    desc: 'The last village of India before the Indo-Tibet border. A cluster of stone houses inhabited year-round by Mana villagers — one of the few communities that has stayed despite the altitude (3,200m). Inside the village: Vyas Gufa (cave where Maharishi Vyas dictated the Mahabharata), Bhim Pul (a single massive rock spanning the Saraswati River, placed by Bhima of the Pandavas), and the visible source of the Saraswati river. Spend at least 90 minutes here.',
    tip: 'The last chai shop in India is at Mana. Get a cup. The owner will tell you proudly that this is the last chai before Tibet. It is genuinely good chai.',
  },
  {
    name: 'Devprayag — The Ganga Confluence',
    near: 'Haridwar to Badrinath route (NH58)',
    detour: 'Directly on route — 5-minute walk from road',
    addTime: '20–30 min stop',
    type: 'Sacred',
    desc: 'Where the Bhagirathi (from Gangotri) and Alaknanda (from Badrinath valley) merge to become the Ganga. The color difference between the two rivers — one greenish, one greyish-blue — is visually striking and is where the sacred Ganga officially begins. Worth stopping both on the outward and return journey: the two banks offer different views. There is a small Raghunathji temple at the confluence point. This is where pilgrims traditionally take the Ganga snan (holy bath) at the start or end of the yatra.',
    tip: 'On the return journey, stop on the opposite bank (cross the suspension bridge) for the full face-on view of the confluence. The going-direction view is from above; the return-direction view is at eye level with the merging rivers.',
  },
  {
    name: 'Triyuginarayan Temple',
    near: 'Kedarnath route (12km from Sonprayag)',
    detour: '12km side road from Sonprayag',
    addTime: '1.5 hrs including drive',
    type: 'Sacred/Mythological',
    desc: 'The temple where Lord Shiva and Goddess Parvati were married. An eternal fire (Akhand Dhuni) in the temple courtyard has been burning since the wedding — the same fire. Pilgrims collect ash from this fire as sacred prasad. The temple is ancient, the surroundings are quiet, and the priest here tells the complete wedding story in a way that makes it feel very immediate and real. Almost never crowded even in peak season.',
    tip: 'Many pilgrims miss this entirely because tour operators do not build it into standard itineraries (it adds a side trip). If you are doing Kedarnath with overnight stay, ask your driver to route via Triyuginarayan on Day 6 morning before reaching Sonprayag.',
  },
  {
    name: 'Gangnani Hot Spring',
    near: 'Gangotri route (Uttarkashi to Gangotri, 90km before Gangotri)',
    detour: 'Directly on route — parking on NH108',
    addTime: '20–30 min stop',
    type: 'Ritual/Natural',
    desc: 'Natural hot spring at 49°C on the banks of the Bhagirathi River, considered sacred to Lord Shiva (Gangeshwar Mahadev temple adjacent). Pilgrims take a ritual bath here before Gangotri darshan. The contrast of the hot spring water and the cold mountain air in October is extraordinary. Less crowded than Gaurikund at Kedarnath, more spiritually intimate. A small bathing ghat is maintained.',
    tip: 'Most operators stop here for 15 minutes on the way to Gangotri. Ask for 30 minutes minimum if you want a proper bath. Bring a change of clothes — the spring water leaves you smelling of sulfur.',
  },
  {
    name: 'Dhari Devi Temple',
    near: 'Srinagar (Pauri Garhwal) — Haridwar to Badrinath route',
    detour: 'Directly on NH58 — short walk from road',
    addTime: '20 min stop',
    type: 'Sacred/Shakti Peetha',
    desc: 'One of the most powerful Shakti shrines in Uttarakhand, built in the middle of the Alaknanda river on a rock platform. The idol of Dhari Devi (Goddess Kali) was famously relocated during the Srinagar hydroelectric project construction in 2013 — and within hours, the Kedarnath floods occurred (June 16, 2013). Whether coincidence or causation, this story is deeply embedded in Uttarakhand spiritual consciousness. The current temple is elevated on a platform above the river and is accessible by a short bridge.',
    tip: 'If you pass Srinagar after 7 PM, the temple is lit and the river reflections are beautiful. The aarti here is small and intimate — far more accessible than the Haridwar Ganga Aarti.',
  },
  {
    name: 'Lakhamandal Temple',
    near: 'Barkot route (Mussoorie to Barkot)',
    detour: '15km off main route near Chakrata',
    addTime: '1 hr including drive',
    type: 'Mythological/Archaeological',
    desc: 'A temple complex containing thousands of Shivalingas and ancient stone carvings dating to the Gupta period (4th–6th century CE). According to the Mahabharata, this is where the Kauravas built the lac (wax) house (Lakshagriha) to trap and burn the Pandavas. The Pandavas escaped through an underground tunnel. The archaeological site has genuine Mahabharata-era significance and is maintained by the Archaeological Survey of India. Rarely visited, entirely uncrowded.',
    tip: 'This is a 15km detour and genuinely worth it only if you have an extra half-day. Most pilgrims skip it. For those interested in Mahabharata geography, it is one of the most compelling authenticated sites on the Char Dham route.',
  },
  {
    name: 'Chopta & Tungnath Temple',
    near: 'Between Kedarnath and Badrinath (Ukhimath road)',
    detour: '35km side road from Ukhimath junction',
    addTime: 'Half day + 3.5km trek',
    type: 'Sacred/Scenic',
    desc: 'Chopta (2,680m) is the meadow base for the trek to Tungnath (3,680m) — the highest Shiva temple in the world, and one of the five Panch Kedar shrines. A 3.5km trek from Chopta through rhododendron forests to the ancient stone temple. The 360° Himalayan views from the temple (Nanda Devi, Trishul, Chaukhamba visible on clear days) are among the best accessible from any Uttarakhand trek. Chandrashila peak is another 1.5km above Tungnath for the most complete panorama.',
    tip: 'This is a half-day add-on best done between Kedarnath and Badrinath on a non-driving day. Many deluxe and premium packages include it. If yours does not, ask — Chopta is 35km from the main Badrinath highway.',
  },
];

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 10 Places to Visit During Char Dham Yatra 2026 – Beyond the 4 Dhams',
    description: '',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2025-01-01',
    dateModified: '2026-05-21',
    author: {
      '@type': 'Person',
      name: 'Sumit Mishra',
      jobTitle: 'Operations Manager, Shiv Ganga Travels',
      url: `${SITE.baseUrl}/about`,
      sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/', 'https://www.facebook.com/sumi2112'],
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
      logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` },
    },
    mainEntityOfPage: `${SITE.baseUrl}/blog/places-to-visit-during-char-dham-yatra`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />;
}


export default function PlacesToVisit() {
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Go Beyond the 4 Dhams · Operator Insider Guide
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.5rem)', fontWeight: 700, marginBottom: 14 }}>
            Top Places to Visit During Char Dham Yatra 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, maxWidth: 640, margin: '0 auto 16px' }}>
            The 4 dhams are the destination. But the route has 8 places that most pilgrims miss — and several of them are more memorable than the darshan itself.
          </p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Places to Visit During Char Dham Yatra</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> May 21, 2026 · ✍️ Shiv Ganga Travels — 15 seasons on this route
        </div>

        <p style={p}>
          Most pilgrims arrive at Haridwar, do the 4 dhams in 10 days, and return home. The darshan is complete but the Himalayas remain unseen. After 15 seasons of operating Char Dham Yatras, the places listed below are the ones our pilgrims most frequently say they wished they had known about before the trip. None require additional days — most are directly on route or minor detours.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
          {places.map((place, i) => (
            <div key={place.name} style={{ background: '#fff', borderRadius: 14, padding: '18px 20px', border: '1px solid var(--border)', borderLeft: '4px solid var(--navy)' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ background: 'var(--navy)', color: '#FFD166', fontWeight: 700, fontSize: 12, padding: '3px 9px', borderRadius: 20 }}>#{i + 1}</span>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>{place.name}</h2>
                </div>
                <span style={{ fontSize: 11, background: 'rgba(11,123,139,0.1)', color: 'var(--teal)', padding: '2px 9px', borderRadius: 20, fontWeight: 700 }}>{place.type}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 8, marginBottom: 10 }}>
                {[['📍 Near', place.near], ['↩️ Detour', place.detour], ['⏱ Time needed', place.addTime]].map(([k, v]) => (
                  <div key={k} style={{ background: 'var(--bg)', borderRadius: 7, padding: '6px 10px' }}>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 2 }}>{k}</div>
                    <div style={{ fontSize: 12.5, color: '#334155', fontWeight: 500 }}>{v}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75, marginBottom: 8 }}>{place.desc}</p>
              <div style={{ background: 'rgba(232,146,10,0.07)', border: '1px solid rgba(232,146,10,0.2)', borderRadius: 8, padding: '9px 12px', fontSize: 13, color: '#7B3F00' }}>
                💡 <strong>Operator tip:</strong> {place.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Which Stops Can You Fit Without Adding Days?</h2>
        <div style={{ overflowX: 'auto', marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Place', 'Works on which day', 'Adds to journey', 'Worth it?'].map(h => (
                <th key={h} style={{ padding: '9px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Devprayag', 'Day 1 (going) and Day 10 (return)', '20 min', '✅ Always — directly on route'],
                ['Gangnani Hot Spring', 'Day 4 (Gangotri day, en route)', '30 min', '✅ Always — on route'],
                ['Harsil Valley', 'Day 4 (Gangotri day, en route)', '30 min', '✅ Always — on route'],
                ['Dhari Devi Temple', 'Day 5 or Day 10 (Srinagar)', '20 min', '✅ Yes — on route'],
                ['Mana Village', 'Day 8 or 9 (Badrinath day)', '1.5–2 hrs', '✅ Always — 3km from Badrinath'],
                ['Triyuginarayan', 'Day 6 morning (before Kedarnath trek)', '1.5 hrs', '✅ If itinerary allows'],
                ['Chopta/Tungnath', 'Day between Kedarnath and Badrinath', '4–5 hrs', '✅ If itinerary has a buffer day'],
                ['Lakhamandal', 'Day 1 (Haridwar to Barkot)', '+2 hrs, detour', '⬜ Only for Mahabharata enthusiasts'],
              ].map(([place, day, adds, worth], i) => (
                <tr key={place} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 600, color: 'var(--navy)' }}>{place}</td>
                  <td style={{ padding: '8px 12px', color: '#475569', fontSize: 12.5 }}>{day}</td>
                  <td style={{ padding: '8px 12px', color: '#1D9E75', fontWeight: 600 }}>{adds}</td>
                  <td style={{ padding: '8px 12px', color: '#475569', fontSize: 12.5 }}>{worth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '24px 22px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 8 }}>Want These Stops Built Into Your Itinerary?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>All our packages include Devprayag, Gangnani, Harsil, and Mana Village as standard. Triyuginarayan and Chopta added on request.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra with extra sightseeing stops. Please share details.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Book with Custom Stops</a>
            View Char Dham Packages →
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>Related guides</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[['Route Map 2026', '/blog/char-dham-yatra-route-map'], ['Kedarnath Trek', '/blog/kedarnath-trek-guide'], ['Char Dham Packing List', '/blog/char-dham-yatra-packing-list'], ['Char Dham Package', '/char-dham-yatra'], ['Chopta Tungnath Trek', '/packages/chopta-tungnath-chandrashila-trek-2n-3d']].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '6px 12px', borderRadius: 7, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
    </>
  );
}
