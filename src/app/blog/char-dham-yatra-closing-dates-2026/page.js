import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Closing Dates 2026 – When Kedarnath, Badrinath & All 4 Temples Close',
  description: 'Official Char Dham Yatra 2026 closing dates: Gangotri Nov 10, Yamunotri Nov 11, Kedarnath Nov 11 (Bhai Dooj), Badrinath Nov 13. Plan your last-visit window to avoid missing any dham.',
  keywords: ['char dham closing dates 2026', 'kedarnath closing date 2026', 'badrinath closing date 2026', 'gangotri closing date 2026', 'yamunotri closing date 2026', 'char dham yatra last date 2026', 'when does char dham close'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-closing-dates-2026` },
  openGraph: {
    title: 'Char Dham Yatra Closing Dates 2026 – When Kedarnath, Badrinath & All 4 Temples Close',
    description: 'Confirmed 2026 Char Dham closing dates. Kedarnath closes Nov 11, Badrinath Nov 13, Gangotri Nov 10, Yamunotri Nov 11. Winter abodes and Kapat Band ceremony guide.',
    url: `${SITE.baseUrl}/blog/char-dham-yatra-closing-dates-2026`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Closing Dates 2026 — When Kedarnath, Badrinath, Gangotri & Y | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Closing Dates 2026 — When All 4 Dhams Close for Winter',
    description: 'Confirmed 2026 Char Dham closing dates. Kedarnath closes Nov 11, Badrinath Nov 13, Gangotri Nov 10, Yamunotri Nov 11. Winter abodes and Kapat Band ceremony',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Closing Dates 2026 — When All 4 Dhams Close for Wi | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'When does Kedarnath close in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath temple is tentatively closing on 11 November 2026 (Bhai Dooj, two days after Diwali). The exact closing date is confirmed on Vijayadashami (Dussehra). After closing, Lord Kedarnath\'s idol is taken in a ceremonial Doli procession to Ukhimath (Omkareshwar Temple) where it rests through the winter.' } },
      { '@type': 'Question', name: 'When does Badrinath close in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Badrinath temple is tentatively closing on 13 November 2026 — approximately 2 weeks after Diwali. The closing date is announced by the Badrinath-Kedarnath Temple Committee (BKTC) on Vijayadashami. Badrinath typically closes last among the four dhams and stays open the longest. After closing, the deity is moved to Pandukheshwar for winter worship.' } },
      { '@type': 'Question', name: 'When do Gangotri and Yamunotri close in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Gangotri closes on 10 November 2026 (Diwali day). Yamunotri closes on 11 November 2026 (Bhai Dooj). After Gangotri closes, the Goddess Ganga\'s idol is moved to Mukhba village for winter worship. After Yamunotri closes, Goddess Yamuna\'s idol is moved to Kharsali (Syana Chattra) village.' } },
      { '@type': 'Question', name: 'What happens to the temples when Char Dham closes?', acceptedAnswer: { '@type': 'Answer', text: 'The temples do not go empty — the deities are moved in ceremonial processions (Doli Yatra) to their winter abodes in lower villages: Kedarnath deity → Ukhimath, Badrinath deity → Pandukheshwar/Joshimath, Gangotri deity → Mukhba, Yamunotri deity → Kharsali. An Akhand Jyot (eternal flame) is lit inside Kedarnath before locking — it burns continuously for 6 months. The temples are buried under 20–30 feet of snow during winter.' } },
    ],
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Char Dham Closing Dates 2026', item: `${SITE.baseUrl}/blog/char-dham-yatra-closing-dates-2026` },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} /></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem,2.5vw,1.4rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 32 };
const p = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

export default function ClosingDates() {
  const dhams = [
    {
      name: 'Gangotri',
      opens: 'April 19, 2026',
      closes: 'November 10, 2026',
      occasion: 'Diwali',
      winterAbode: 'Mukhba village, Uttarkashi district',
      ceremony: 'The Goddess Ganga\'s brass idol is carried in a Doli (palanquin) from Gangotri to Mukhba — a 25km journey through the Bhagirathi valley. The Bhog (offering) ceremony takes place at sunrise, after which the temple doors are sealed. Thousands of devotees attend to witness the final aarti before the kapat closes.',
      tip: 'Last-chance visits in October see crystal-clear autumn skies and dramatically fewer crowds than May–June. The post-monsoon visibility from Gangotri is often the best of the entire season.',
    },
    {
      name: 'Yamunotri',
      opens: 'April 19, 2026',
      closes: 'November 11, 2026',
      occasion: 'Bhai Dooj (day after Diwali)',
      winterAbode: 'Kharsali village (Syana Chattra), Uttarkashi',
      ceremony: 'The 6km trek from Jankichatti to Yamunotri is done one final time by the officiating priests and a core group of devotees. Goddess Yamuna\'s idol is moved to Kharsali by Doli. The closing ceremony at Yamunotri includes the last Bhog, the last Aarti, and the symbolic sealing of the doors as winter descends on the valley.',
      tip: 'Yamunotri is the least-visited of the four dhams and the most underrated in October. The Surya Kund hot spring (47°C) near the temple is uniquely atmospheric with morning mist and autumn colours on the surrounding hillsides.',
    },
    {
      name: 'Kedarnath',
      opens: 'April 22, 2026',
      closes: 'November 11, 2026',
      occasion: 'Bhai Dooj',
      winterAbode: 'Ukhimath (Omkareshwar Temple), Rudraprayag district',
      ceremony: 'The most significant closing ceremony of the four dhams. Lord Kedarnath\'s Panchmukhi (five-faced) Doli leaves Kedarnath on a 4-day ceremonial journey to Ukhimath, stopping at Phata, Guptkashi, and Kund along the way — with celebrations at each village. Before the doors close, a priest lights the Akhand Jyot (eternal flame). This flame burns continuously inside the locked temple for all 6 months of winter. When the doors reopen in April, the flame is still burning — one of the most powerful symbols in Hindu pilgrimage.',
      tip: 'October at Kedarnath is the closest thing to a perfect visit. Temperatures are 2–10°C, crowds are 70% fewer than May, the snow has not yet arrived, and the Himalayan peaks visible from the temple are at their sharpest. We recommend October for returning pilgrims.',
    },
    {
      name: 'Badrinath',
      opens: 'April 23, 2026',
      closes: 'November 13, 2026',
      occasion: '~2 weeks after Diwali (exact date on Vijayadashami)',
      winterAbode: 'Pandukeshwar / Narsingh Temple, Joshimath',
      ceremony: 'The closing ceremony (Kapat Band) at Badrinath begins with the early morning Narada Kund bath, followed by the final Abhishek of Lord Vishnu\'s idol. The Narad Shila (a rock beside the temple) is symbolically worshipped as a farewell gesture. Lord Vishnu\'s idol is dressed for winter and moved in a ceremonial procession to Pandukheshwar/Joshimath. The Akhand Jyot at Badrinath is also lit at closing time.',
      tip: 'Badrinath closes last among all four dhams and is often accessible well into November. Late-season Badrinath visits combine cold, clear weather, empty roads, and the possibility of early snowfall on the surrounding peaks — a striking visual.',
    },
  ];

  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            2026 Season End · Kapat Band Dates
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.5rem)', fontWeight: 700, marginBottom: 14 }}>
            Char Dham Closing Dates 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, maxWidth: 640, margin: '0 auto 16px' }}>
            Gangotri Nov 10 · Yamunotri Nov 11 · Kedarnath Nov 11 · Badrinath Nov 13. Complete closing ceremony guide, winter abodes, and last-chance visit tips.
          </p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Blog</Link><span>›</span>
          <span>Char Dham Closing Dates 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 860, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> May 2026 — dates confirmed for 2026 season
        </div>

        {/* Quick reference table */}
        <div style={{ overflowX: 'auto', marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ background: 'var(--navy)' }}>
                {['Dham', 'Opens 2026', 'Closes 2026', 'Closing occasion', 'Winter abode'].map(h => (
                  <th key={h} style={{ padding: '10px 14px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dhams.map((d, i) => (
                <tr key={d.name} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 700, color: 'var(--navy)', fontSize: 15 }}>
                    {d.name === 'Gangotri' ? '🌿' : d.name === 'Yamunotri' ? '🌊' : d.name === 'Kedarnath' ? '🏔️' : '🕌'} {d.name}
                  </td>
                  <td style={{ padding: '10px 14px', color: '#1D9E75', fontWeight: 600 }}>{d.opens}</td>
                  <td style={{ padding: '10px 14px', fontWeight: 700, color: '#D85A30' }}>{d.closes}</td>
                  <td style={{ padding: '10px 14px', color: '#475569', fontSize: 13 }}>{d.occasion}</td>
                  <td style={{ padding: '10px 14px', color: '#64748b', fontSize: 13 }}>{d.winterAbode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: 28 }}>
          Note: Exact closing dates are confirmed by temple committees on Vijayadashami (Dussehra). Dates above are based on 2026 Hindu calendar calculations and are tentative until official confirmation. Gangotri and Yamunotri dates follow Diwali; Kedarnath follows Bhai Dooj; Badrinath is confirmed approximately 1–2 weeks post-Diwali.
        </p>

        <h2 style={h2}>Each Dham — Closing Ceremony & What Happens</h2>
        {dhams.map(d => (
          <div key={d.name} style={{ background: '#fff', borderRadius: 12, padding: '18px 20px', border: '1px solid var(--border)', borderLeft: '4px solid var(--navy)', marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>{d.name}</h3>
              <span style={{ background: 'rgba(216,90,48,0.1)', color: '#D85A30', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>Closes {d.closes}</span>
            </div>
            <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75, marginBottom: 10 }}>{d.ceremony}</p>
            <div style={{ background: 'rgba(232,146,10,0.07)', border: '1px solid rgba(232,146,10,0.2)', borderRadius: 8, padding: '10px 12px', fontSize: 13, color: '#7B3F00' }}>
              💡 <strong>October tip:</strong> {d.tip}
            </div>
          </div>
        ))}

        <h2 style={h2}>The Akhand Jyot — Kedarnath's Eternal Flame</h2>
        <p style={p}>
          Before the Kedarnath temple doors close for winter, the chief priest performs a final ritual: lighting the <strong>Akhand Jyot</strong> (eternal flame) inside the Garbha Griha (inner sanctum). This flame burns continuously for the entire 6 months while the temple is locked under 20–30 feet of snow. No human enters. No one tends it. When the doors reopen in April to the sounds of Vedic chanting and the first darshan of the season, the flame is still burning.
        </p>
        <p style={p}>
          For Hindu pilgrims, this is not merely symbolic — it is understood as evidence of the continuous divine presence at Kedarnath regardless of human access. Many pilgrims who attend the closing ceremony specifically come for this moment: the lighting of the Akhand Jyot and the sound of the doors sealing. It is, by many accounts, more moving than the opening ceremony.
        </p>

        <h2 style={h2}>Planning a Last-Season Visit? Book October</h2>
        <p style={p}>
          October is genuinely the best month for Char Dham Yatra — a fact that experienced pilgrims know but first-timers rarely consider. The monsoon has ended, the roads are freshly cleaned, the Himalayan skies are crystal clear, and pilgrim numbers drop by 70% from peak season. Hotels that are ₹3,000/night in May are ₹1,200–1,500 in October. Pony and palki availability is better. Darshan queues are shorter.
        </p>
        <p style={p}>
          The single consideration: temperature. Kedarnath in October reaches -2°C at night. Pack accordingly — thermals, a heavy jacket, and gloves. This is the trade-off, and for most pilgrims it is easily worth it.
        </p>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '24px 22px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 8 }}>Book October Char Dham — Best Season, Fewer Crowds</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>October batches fill fast. Fixed departures through October with guaranteed hotel availability.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra in October 2026. Please share package details.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Book October Package</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>Related guides</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              ['Opening Dates 2026', '/blog/char-dham-yatra-opening-dates-2026'],
              ['Best Time to Visit', '/blog/best-time-char-dham'],
              ['Char Dham Yatra in October', '/blog/char-dham-yatra-in-october'],
              ['Char Dham Package', '/char-dham-yatra'],
              ['Registration Guide', '/blog/char-dham-yatra-registration'],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '6px 12px', borderRadius: 7, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
