import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'VIP Darshan Kedarnath 2026 – ₹1,100 Parchi, How to Book & Garbha Griha Access',
  description: 'Kedarnath VIP darshan 2026: parchi costs ₹1,100 per person, includes Garbha Griha access and priority queue. How to book, when VIP is suspended in peak season, and what to expect inside.',
  keywords: ['VIP darshan kedarnath 2026', 'kedarnath VIP darshan price', 'kedarnath special darshan booking', 'kedarnath garbha griha access', 'kedarnath darshan parchi 2026', 'kedarnath priority darshan'],
  alternates: { canonical: `${SITE.baseUrl}/blog/vip-darshan-kedarnath-booking` },
  openGraph: {
    title: 'VIP Darshan Kedarnath 2026 – ₹1,100 Parchi, How to Book & Garbha Griha Access',
    description: 'Kedarnath VIP darshan parchi ₹1,100. What it includes, when it\'s suspended in peak season, how to book Rudrabhishek, and why NOT to pay ₹2,000+ to touts.',
    url: `${SITE.baseUrl}/blog/vip-darshan-kedarnath-booking`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'VIP Darshan Kedarnath 2026 — ₹1,100 Parchi, Booking Guide & Scam Warni | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath VIP Darshan 2026 — ₹1,100 Parchi, What It Includes & Fraud W',
    description: 'Kedarnath VIP darshan parchi ₹1,100. What it includes, when it',
    images: [{ url: '/opengraph-image', alt: 'Kedarnath VIP Darshan 2026 — ₹1,100 Parchi, What It Includes | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the VIP darshan price for Kedarnath in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The official Kedarnath VIP darshan receipt (parchi) costs ₹1,100 per person. This is the amount paid at the official temple committee counter. However, during peak season (May–June), the temple committee may SUSPEND VIP darshan entirely due to the volume of general darshan pilgrims — there is simply no capacity for a separate VIP queue. Check current availability on arrival at Kedarnath.' } },
      { '@type': 'Question', name: 'What does VIP darshan at Kedarnath include?', acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath VIP darshan (official parchi) provides: (1) Priority access — shorter queue lane, (2) Access to the inner Garbha Griha (sanctum) to touch the Shivling, (3) A brief Abhishek (ritual bathing of the Shivling) performed by a temple priest, (4) Prasad. It does NOT include the full Maha Abhishek or Rudrabhishek (those are separate bookings).' } },
      { '@type': 'Question', name: 'Can I touch the Shivling at Kedarnath?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — but only before 3:00 PM and only from within the Garbha Griha, which requires either a VIP darshan parchi or the Maha Abhishek booking. General darshan pilgrims have Shivling darshan from outside the inner sanctum. The daily Abhishek (milk, curd, ghee poured on the Shivling) during the 4 AM puja is accessible to Abhishek booking holders only.' } },
      { '@type': 'Question', name: 'How do I book Rudrabhishek at Kedarnath?', acceptedAnswer: { '@type': 'Answer', text: 'Rudrabhishek and Maha Abhishek at Kedarnath can be booked through the official Badrinath-Kedarnath Temple Committee website (badrinath-kedarnath.gov.in) and through the official Uttarakhand Tourism portal. Online booking is recommended and often required in peak season as slots are limited. Prices range from ₹1,100 to ₹3,000+ depending on the puja type.' } },
    ],
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'VIP Darshan Kedarnath', item: `${SITE.baseUrl}/blog/vip-darshan-kedarnath-booking` },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} /></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem,2.5vw,1.4rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 32 };
const p = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };


export default function VIPDarshan() {
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Kedarnath 2026 · Official ₹1,100 Parchi Only
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.5rem)', fontWeight: 700, marginBottom: 14 }}>
            Kedarnath VIP Darshan 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, maxWidth: 640, margin: '0 auto 16px' }}>
            Official VIP parchi ₹1,100 · Garbha Griha access · Shivling touch · Rudrabhishek booking guide · WARNING: Do not pay ₹2,000+ to touts — it is fraud.
          </p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>VIP Darshan Kedarnath 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 860, margin: '0 auto', padding: '40px 20px 60px' }}>

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026</div>

        <div style={{ background: '#FCEBEB', border: '1px solid #F09595', borderRadius: 12, padding: '14px 16px', marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: '#791F1F', marginBottom: 6 }}>⚠️ Fraud Warning — Read Before You Pay Anyone</div>
          <div style={{ fontSize: 13.5, color: '#7f1d1d', lineHeight: 1.75 }}>
            The single biggest scam at Kedarnath: priests, agents, and touts offering "VIP darshan" or "Garbha Griha entry" for ₹2,000–5,000. The official VIP parchi costs <strong>₹1,100</strong> from the temple committee counter. Anything above that is a scam. Do not pay anyone in cash before reaching the official counter. If you are caught using a backdoor entry, you may be removed from the temple premises and your Yatra Registration can be flagged.
          </div>
        </div>

        <h2 style={h2}>VIP Darshan at Kedarnath — What It Is</h2>
        <p style={p}>
          The official VIP darshan system at Kedarnath is managed by the Badrinath-Kedarnath Temple Committee (BKTC). For ₹1,100, you receive a receipt (parchi) that grants access to a dedicated priority queue — shorter and faster than the general darshan line. The VIP queue also provides access to the Garbha Griha (inner sanctum) for a brief puja and the opportunity to touch the Shivling directly. This is not available to general darshan pilgrims who view the Shivling from outside the inner chamber.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 12, marginBottom: 24 }}>
          <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: 12, padding: '14px 16px' }}>
            <div style={{ fontWeight: 700, fontSize: 13.5, color: '#15803D', marginBottom: 8 }}>✅ VIP Darshan (₹1,100) Includes</div>
            {['Priority queue — shorter wait than general darshan', 'Entry to Garbha Griha (inner sanctum)', 'Touch the Shivling directly (before 3 PM only)', 'Brief Abhishek puja by temple priest', 'Prasad (holy offering from the temple)'].map(item => (
              <div key={item} style={{ fontSize: 13, color: '#166534', padding: '3px 0', display: 'flex', gap: 6 }}>
                <span style={{ flexShrink: 0 }}>✓</span>{item}
              </div>
            ))}
          </div>
          <div style={{ background: '#FFF8F0', border: '1px solid #FDBA74', borderRadius: 12, padding: '14px 16px' }}>
            <div style={{ fontWeight: 700, fontSize: 13.5, color: '#92400E', marginBottom: 8 }}>📌 NOT Included (Separate Bookings)</div>
            {['Maha Abhishek — 4 AM puja (separate booking)', 'Rudrabhishek — specific puja ritual (₹1,500–3,000)', 'Sahasranamarchana — full name chanting puja', 'Extended Garbha Griha time (only brief access)', 'Photography inside the temple (strictly prohibited)'].map(item => (
              <div key={item} style={{ fontSize: 13, color: '#7c2d12', padding: '3px 0', display: 'flex', gap: 6 }}>
                <span style={{ flexShrink: 0 }}>→</span>{item}
              </div>
            ))}
          </div>
        </div>

        <h2 style={h2}>When VIP Darshan Is SUSPENDED</h2>
        <div style={{ background: '#FFF8F0', border: '1px solid #FDBA74', borderRadius: 12, padding: '14px 16px', marginBottom: 24 }}>
          <p style={{ fontSize: 13.5, color: '#78350F', lineHeight: 1.8, margin: 0 }}>
            During peak season — typically May and June when 15,000–18,000 pilgrims visit daily — the temple committee sometimes <strong>suspends VIP darshan entirely</strong>. The reason: even the priority queue creates congestion inside the narrow Garbha Griha passageway. When the temple is at absolute capacity, all darshan is general darshan. You will not know this in advance. Ask at the official BKTC counter when you arrive at Kedarnath. If VIP darshan is suspended, you will have general darshan — the Shivling is still visible and the darshan is spiritually complete.
          </p>
          <div style={{ marginTop: 12, fontSize: 13, color: '#854F0B', fontWeight: 600 }}>
            💡 Tip: September–October visitors almost never face VIP suspension — capacity is well within limits and VIP darshan is nearly always available.
          </div>
        </div>

        <h2 style={h2}>The Garbha Griha — Why It Matters</h2>
        <p style={p}>
          The Garbha Griha (literally "womb chamber") is the innermost sanctum of Kedarnath temple where the ancient Shivling sits. The Shivling at Kedarnath is unusual — it is a natural rock formation, not a carved idol, in the distinctive trapezoidal shape believed to be the hump of Lord Shiva's bull form (Nandi). The rock is covered in ghee, milk, and offerings during the morning puja, giving it a deep amber-brown colour.
        </p>
        <p style={p}>
          General darshan pilgrims stand at the outer hall and view the Shivling through the doorway of the Garbha Griha — perhaps 3–4 metres away. VIP darshan allows you to enter the inner chamber, stand directly before the Shivling, and place your hands on it. The difference is not about "VIP" status — it is about the physical proximity of the encounter. For most pilgrims who have trekked 16km through the Himalayas to be there, being allowed to touch the ancient stone is what the journey was for.
        </p>

        <h2 style={h2}>How to Book Rudrabhishek at Kedarnath</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          {[
            { title: 'Online — BKTC portal', detail: 'The Badrinath-Kedarnath Temple Committee website (badrinath-kedarnath.gov.in) offers online Rudrabhishek and Abhishek booking. This is the recommended method — online slots fill before the temple opens for the season. Prices: Rudrabhishek ₹1,500–3,000, Maha Abhishek ₹5,000+, Sahasranamarchana ₹3,500+.' },
            { title: 'At the BKTC counter in Kedarnath', detail: 'After arriving at Kedarnath temple, walk to the official BKTC counter on the right side of the temple complex. Present your Yatra Registration e-pass. Book the puja for the next morning (4 AM slot) or the current evening. Pay officially. Keep the receipt.' },
            { title: 'Through your tour operator', detail: 'If you are on a package with Shiv Ganga Travels, we can pre-arrange the VIP parchi and Abhishek booking as part of your Kedarnath overnight stay. This ensures you have the slot confirmed before arriving at the temple.' },
          ].map(item => (
            <div key={item.title} style={{ background: '#fff', borderRadius: 10, padding: '12px 14px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 5 }}>{item.title}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{item.detail}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Kedarnath Temple Darshan Timings 2026</h2>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead>
              <tr style={{ background: 'var(--navy)' }}>
                {['Time', 'What happens', 'Who can attend'].map(h => (
                  <th key={h} style={{ padding: '9px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['4:00 AM', 'Maha Abhishek puja begins — milk, curd, ghee, honey poured on Shivling', 'Abhishek booking holders only'],
                ['6:00 AM', 'General darshan opens — Shivling visible from outer hall', 'All pilgrims with Yatra Registration'],
                ['7:00 AM', 'VIP darshan begins — Garbha Griha access', 'VIP parchi holders (₹1,100)'],
                ['3:00 PM', 'Temple CLOSES for afternoon prayers — no entry', 'Nobody — doors sealed'],
                ['5:00 PM', 'Temple reopens for evening darshan', 'All pilgrims'],
                ['6:00 PM', 'Evening aarti — Shayan aarti ceremony with lamps', 'All pilgrims — free to attend'],
                ['9:00 PM', 'Temple closes for the night', 'Nobody'],
              ].map(([time, what, who], i) => (
                <tr key={time} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding: '9px 12px', fontWeight: 700, color: 'var(--navy)', whiteSpace: 'nowrap' }}>{time}</td>
                  <td style={{ padding: '9px 12px', color: '#334155' }}>{what}</td>
                  <td style={{ padding: '9px 12px', color: '#64748b', fontSize: 13 }}>{who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="kedarnath" />

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '24px 22px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 8 }}>We Arrange VIP Darshan for Our Pilgrims</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>All Shiv Ganga Travels Kedarnath overnight packages include VIP darshan coordination and Abhishek arrangement. You pay the official ₹1,100 at the counter — we make sure you are there at the right time.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra with VIP darshan and overnight stay. Please share details.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Book With VIP Darshan</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>Related guides</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              ['Kedarnath Darshan Timings', '/blog/kedarnath-darshan-timing'],
              ['Kedarnath Trek Guide', '/blog/kedarnath-trek-guide'],
              ['Pony & Palki Rates', '/blog/kedarnath-pony-palki-rates-2026'],
              ['Kedarnath Registration', '/blog/kedarnath-registration-2026'],
              ['Kedarnath Package', '/kedarnath-yatra'],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '6px 12px', borderRadius: 7, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="kedarnath" />
</article>
    </>
  );
}
