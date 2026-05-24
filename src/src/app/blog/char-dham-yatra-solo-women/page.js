import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Char Dham Yatra for Solo Women 2026 — Safety, Tips & Everything You Need to Know',
  description: 'Complete guide for women travelling solo on Char Dham Yatra 2026. Safety on trek, accommodation advice, solo group options, what to carry, and real experience from our women pilgrims.',
  keywords: ['char dham yatra solo women','solo women char dham yatra','is char dham safe for solo female travellers','kedarnath solo women','char dham yatra women safety','solo female pilgrimage uttarakhand','char dham yatra women guide 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-solo-women` },
  openGraph: {
    title: 'Char Dham Yatra for Solo Women 2026 — Safety & Complete Guide',
    description: 'Is Char Dham Yatra safe for solo women? Short answer: yes — and many of our most independent pilgrims are women travelling alone.',
    url: `${SITE.baseUrl}/blog/char-dham-yatra-solo-women`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra for Solo Women 2026 | Shiv Ganga Travels' }],
  },
  twitter: { card: 'summary_large_image', title: 'Char Dham Yatra for Solo Women 2026', description: 'Safety, accommodation, groups and everything solo women need to know.' },
};

const faqData = [
  { q: 'Is Char Dham Yatra safe for solo women?', a: 'Yes. Char Dham is a pilgrimage circuit, not a remote trekking expedition. The routes are well-populated with pilgrims, guides and support staff throughout the Yatra season. GMVN guesthouses and reputable private hotels offer safe, clean accommodation. Hundreds of solo women complete the Yatra every year — including many of our own customers who booked solo and travelled confidently.' },
  { q: 'Should I book a solo package or join a group?', a: 'Joining a small organised group (8–16 people) with a dedicated guide is the most practical option for solo women. You get the safety of company, shared transport, pre-booked hotels and a guide who handles logistics — without the need to find a travel companion. We specifically match solo women into groups with other solo pilgrims and always assign a female point-of-contact from our Haridwar office.' },
  { q: 'What documents do I need for Char Dham Yatra 2026?', a: 'A government photo ID (Aadhaar, passport or voter ID) is required for the mandatory Char Dham Yatra registration on the official portal. You also need an original ID for some GMVN check-ins. Solo women should carry at least two photocopies of their ID stored separately from the originals.' },
  { q: 'Are there women-only pilgrim groups for Char Dham?', a: 'Yes. Shiv Ganga Travels runs women-only Char Dham batches twice a season — one in May and one in September. These batches include a female co-guide, are limited to 15 participants, and include solo-specific accommodation arrangements. WhatsApp us to check availability.' },
  { q: 'What are the safest hotels for solo women at Kedarnath, Badrinath etc.?', a: 'GMVN Tourist Rest Houses at each Dham are government-operated, well-maintained and safe. In Haridwar, hotels near Har Ki Pauri on the main ghats are well-lit, close to activity and popular with solo women pilgrims. We pre-book reputable properties for all our customers and our team does a personal check before the season opens.' },
];

function Schema() {
  const article = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: 'Char Dham Yatra for Solo Women 2026 — Safety, Tips & Complete Guide',
    description: 'Is Char Dham Yatra safe for women travelling alone? Complete safety guide, accommodation tips, group options, and what to pack.',
    author: { '@type': 'Person', name: 'Sumit Mishra', jobTitle: 'Co-Founder & Operations Manager, Shiv Ganga Travels', url: `${SITE.baseUrl}/about` },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    datePublished: '2026-01-20', dateModified: '2026-05-01',
    mainEntityOfPage: `${SITE.baseUrl}/blog/char-dham-yatra-solo-women`,
    image: '/opengraph-image',
  };
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function Page() {
  return (
    <main style={{ background:'var(--bg)', minHeight:'100vh' }}>
      <Schema/>
      <div style={{ maxWidth:820, margin:'0 auto', padding:'clamp(24px,5vw,60px) clamp(16px,4vw,24px)' }}>
        <nav style={{ fontSize:13, color:'var(--text-muted)', marginBottom:20 }}>
          <Link href="/" style={{ color:'var(--gold)', textDecoration:'none' }}>Home</Link> {' → '}
          <Link href="/blog" style={{ color:'var(--gold)', textDecoration:'none' }}>Blog</Link> {' → Char Dham Yatra for Solo Women'}
        </nav>

        <div style={{ marginBottom:32 }}>
          <span style={{ background:'rgba(232,146,10,0.15)', color:'var(--gold)', fontSize:12, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'4px 14px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Solo Travel</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.75rem,4vw,2.5rem)', fontWeight:700, color:'var(--navy)', lineHeight:1.2, letterSpacing:'-0.02em', marginBottom:16 }}>
            Char Dham Yatra for Solo Women 2026 — Safety, Groups &amp; What Nobody Tells You
          </h1>
          <p style={{ ...p, fontSize:17, color:'#475569', marginBottom:0 }}>
            One of our most memorable conversations last season was with Dr. Priya Menon from Bangalore — she had wanted to do the Yatra alone for three years but kept hesitating. She finally came on our September batch, completed all four Dhams, and sent us a voice note from the Kedarnath courtyard that our team still shares with new solo women customers. This guide is for every woman standing where she stood.
          </p>
        </div>

        <BlogAuthor/>

        <h2 style={h2}>Is Char Dham Actually Safe for Solo Women?</h2>
        <p style={p}>The honest answer, based on fifteen years of guiding: yes. Char Dham is a pilgrimage, not a wilderness expedition. The routes are busy with devotees throughout the season. The culture of a pilgrimage circuit is one of shared purpose — people look out for each other. In our experience, solo women on Yatra are treated with genuine respect and warmth by fellow pilgrims, pujaris, hotel staff and local people.</p>
        <p style={p}>That said, practical preparation makes a real difference. The biggest safety variable is not the route — it is the quality of your operator, the reliability of your accommodation and whether you have a contact number that actually picks up at 11 PM if something goes wrong. That is where booking through a ground operator with a physical presence at each Dham matters more than any other single decision.</p>

        <h2 style={h2}>Solo vs Group — What We Actually Recommend</h2>
        <p style={p}>Completely self-planned solo travel on Char Dham is doable but adds logistics burden on top of the physical and emotional intensity of the Yatra. Shared transport, pre-booked hotels and a guide who knows the route removes a large amount of stress. The sweet spot for most solo women customers: join a small organised group (8–15 people), which gives you company without the constraints of a large bus tour.</p>
        <p style={p}>We specifically group solo women travellers together in the same vehicle where possible. Our female pilgrims often bond quickly — sharing food, helping each other on the trek, and keeping in touch long after the Yatra ends. Several women who came to us as strangers now travel together every year.</p>

        <h2 style={h2}>Accommodation: Where Solo Women Should Stay</h2>
        <p style={p}>
          <strong>Haridwar base:</strong> Hotels on Har Ki Pauri Road and Rishi Nagar are well-lit, have 24-hour reception and are close to the main ghat. Avoid isolated budget lodges on the city outskirts.
          <br/><br/>
          <strong>At the Dhams:</strong> GMVN Tourist Rest Houses are government-run, clean, secure and offer single rooms. Private hotels close to the temple complex are equally good — we pre-vet all properties we book our customers into. At Kedarnath base camp and on route, avoid single-tent arrangements from unknown operators.
          <br/><br/>
          <strong>Guptkashi and Joshimath:</strong> These two transit towns have a good range of mid-budget hotels. Both are busy, well-lit towns with pilgrim infrastructure year-round.
        </p>

        <h2 style={h2}>Practical Safety Tips for Solo Women</h2>
        {[
          ['Share your itinerary', 'Leave a copy with a trusted person at home and check in with them daily.'],
          ['Keep multiple copies of ID', 'Two physical photocopies stored separately from originals. Screenshot on phone.'],
          ['Use USSD balance check or offline maps', 'Mobile signal is unreliable on mountain routes. Download offline maps of the Char Dham region before leaving Haridwar.'],
          ['Know your operator\'s emergency number', 'Our customers have our team\'s direct WhatsApp — not a call centre, but the person physically at the next Dham.'],
          ['Dress for the pilgrimage environment', 'Modest dress is culturally appropriate and avoids unwanted attention at religious sites. Salwar-kameez or churidar is comfortable and suitable.'],
          ['Trust your instincts on accommodation', 'If a hotel feels wrong, it is wrong. Our team is always reachable to rebook you into an alternative property.'],
        ].map(([t, d]) => (
          <div key={t} style={{ display:'flex', gap:14, marginBottom:14, padding:'14px 18px', background:'#f8fafc', borderRadius:'var(--r)' }}>
            <span style={{ color:'var(--gold)', fontSize:18, flexShrink:0 }}>✓</span>
            <div><strong style={{ color:'var(--navy)', display:'block', marginBottom:4 }}>{t}</strong><span style={{ fontSize:14.5, color:'#475569', lineHeight:1.7 }}>{d}</span></div>
          </div>
        ))}

        <h2 style={h2}>What to Pack as a Solo Woman Pilgrim</h2>
        <p style={p}>Everything in the standard packing list (thermal layers, waterproofs, trekking shoes) plus: personal sanitary supplies for the full duration (availability at remote Dhams is limited), a small personal lock for hostel-style storage at GMVN rooms, a torch or headlamp, and a basic first-aid kit including pain relief and altitude sickness tablets (consult your doctor before travel).</p>

        <h2 style={h2}>Frequently Asked Questions</h2>
        {faqData.map(f => (
          <div key={f.q} style={{ marginBottom:20, padding:'18px 20px', background:'#f8fafc', borderRadius:'var(--r)', borderLeft:'3px solid var(--gold)' }}>
            <p style={{ fontWeight:700, color:'var(--navy)', fontSize:15, marginBottom:6 }}>{f.q}</p>
            <p style={{ ...p, marginBottom:0 }}>{f.a}</p>
          </div>
        ))}

        <BlogCTA/>

        <div style={{ marginTop:40, padding:'20px 24px', background:'rgba(15,43,91,0.04)', borderRadius:'var(--r)', borderLeft:'3px solid var(--navy)' }}>
          <p style={{ ...p, marginBottom:8, fontWeight:600 }}>Related Reading</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
            {[['Char Dham First-Timer Guide','/blog/char-dham-yatra-first-timer-guide'],['Char Dham Packing List','/blog/char-dham-yatra-packing-list'],['Senior Citizen Char Dham','/blog/senior-citizen-char-dham'],['Char Dham Weather Guide','/blog/char-dham-weather-guide']].map(([t,h]) => (
              <Link key={h} href={h} style={{ fontSize:13.5, color:'var(--gold)', textDecoration:'none', fontWeight:600, background:'rgba(232,146,10,0.1)', padding:'6px 14px', borderRadius:8 }}>{t} →</Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
