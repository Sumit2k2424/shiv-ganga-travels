import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Best Time for Char Dham Yatra 2026 — Month-by-Month Guide',
  description: 'When is the best time to do Char Dham Yatra? Complete month-by-month weather guide, temple opening dates, peak vs off-season tips for 2026.',
  keywords: ['best time for char dham yatra','char dham yatra best time','char dham yatra season','char dham yatra months','char dham yatra weather','char dham opening date 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/best-time-char-dham` },
  openGraph: {
    title: 'Best Time for Char Dham Yatra 2026',
    description: 'Month-by-month guide to the best time for Char Dham Yatra — weather, crowds, opening dates.',
    url: `${SITE.baseUrl}/blog/best-time-char-dham`,
    type: 'article',
  },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };

export default function BestTimeCharDham() {
  const months = [
    { month:'April', status:'Opening', color:'#fef9c3', border:'#fde047', note:'Temples opened April 19 (Yamunotri/Gangotri), April 22 (Kedarnath), April 23 (Badrinath). Late April is less crowded but still cold.' },
    { month:'May', status:'Peak ⭐', color:'#dcfce7', border:'#86efac', note:'Most popular month. Spring blooms, pleasant weather. Highly recommended. Book 90 days ahead — fills fast.' },
    { month:'June', status:'Good', color:'#dcfce7', border:'#86efac', note:'Good first half. Pre-monsoon showers start mid-June. Still manageable but carry rain gear.' },
    { month:'July', status:'Avoid ⚠️', color:'#fee2e2', border:'#fca5a5', note:'Peak monsoon. Heavy rains, frequent landslides, road closures. Not recommended.' },
    { month:'August', status:'Avoid ⚠️', color:'#fee2e2', border:'#fca5a5', note:'Continues heavy rainfall. Kedarnath trek especially risky. Many operators suspend batches.' },
    { month:'September', status:'Very Good ⭐', color:'#dcfce7', border:'#86efac', note:'Post-monsoon. Rain stops, skies clear dramatically. Himalayan views at their best. Less crowded.' },
    { month:'October', status:'Best ⭐⭐', color:'#dcfce7', border:'#86efac', note:'Ideal season. Crystal clear views, comfortable temperature, vibrant autumn colours. Temples close Bhai Dooj.' },
    { month:'Nov–Apr', status:'Closed ❌', color:'#f1f5f9', border:'#cbd5e1', note:'Temples closed for winter. Priests and idols moved to valley temples. Roads blocked by snow.' },
  ];


  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question',
        name: 'What is the best month for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'May and September–October are the best months. May offers good weather (8–18°C at dhams), clear skies, and blooming rhododendrons. September–October has post-monsoon crystal clarity, fewer crowds than May, and excellent photography conditions. Both windows avoid monsoon risk (July–August). The 2026 season opens April 19 (Yamunotri/Gangotri), April 22 (Kedarnath), April 23 (Badrinath).' },
      },
      { '@type': 'Question',
        name: 'Is August safe for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'August is monsoon peak in Uttarakhand and carries significant landslide risk, especially on the Kedarnath route (Sonprayag–Gaurikund) and Gangotri highway. Road blockages are frequent. Shiv Ganga Travels advises against August travel for first-time pilgrims and senior citizens. If you must travel in August, build 2–3 buffer days into your itinerary and travel with an experienced operator who monitors road conditions daily.' },
      }
    ],
  };
  return (
    <>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Travel Guide · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Best Time for Char Dham Yatra 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Month-by-month weather guide · Temple opening dates · Peak vs off-season</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link>
          <span>›</span>
          <Link href="/blog" style={{ color:'var(--navy)', textDecoration:'none' }}>Blog</Link>
          <span>›</span>
          <span>Best Time for Char Dham Yatra</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The <strong>best time for Char Dham Yatra</strong> is either <strong>May–June</strong> or <strong>September–October</strong>. In 2026, temples opened on April 19 (Yamunotri & Gangotri), April 22 (Kedarnath), and April 23 (Badrinath). Closing dates: Gangotri Nov 10, Yamunotri & Kedarnath Nov 11, Badrinath Nov 13. This guide breaks down each month so you can plan your ideal yatra.</p>

        <h2 style={h2}>Month-by-Month Guide</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:28 }}>
          {months.map(m => (
            <div key={m.month} style={{ background:m.color, border:`1px solid ${m.border}`, borderRadius:10, padding:'14px 18px', display:'grid', gridTemplateColumns:'120px 1fr', gap:14, alignItems:'start' }}>
              <div>
                <div style={{ fontWeight:700, fontSize:14, color:'var(--text)' }}>{m.month}</div>
                <div style={{ fontSize:12, fontWeight:600, color:'var(--navy)', marginTop:3 }}>{m.status}</div>
              </div>
              <div style={{ fontSize:15, color:'#334155', lineHeight:1.6 }}>{m.note}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Char Dham Temple Opening Dates 2026</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The exact opening dates change every year based on the Hindu calendar and are announced a few months before. Approximate dates for 2026:</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:10, marginBottom:24 }}>
          {[
            { temple:'Yamunotri', opens:'April 19, 2026', closes:'November 11, 2026' },
            { temple:'Gangotri', opens:'April 19, 2026', closes:'November 10, 2026' },
            { temple:'Kedarnath', opens:'April 22, 2026', closes:'November 11, 2026' },
            { temple:'Badrinath', opens:'April 23, 2026', closes:'November 13, 2026' },
          ].map(t => (
            <div key={t.temple} style={{ background:'#fff', borderRadius:10, padding:'14px', border:'1px solid var(--border)', textAlign:'center' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:6 }}>{t.temple}</div>
              <div style={{ fontSize:12, color:'var(--green)', fontWeight:600 }}>Opens: {t.opens}</div>
              <div style={{ fontSize:12, color:'var(--text-muted)', marginTop:2 }}>Closes: {t.closes}</div>
            </div>
          ))}
        </div>
        <p style={{ ...p, fontSize:13.5, background:'var(--navy-light)', padding:'12px 16px', borderRadius:10 }}>
          📌 <strong>We send WhatsApp alerts</strong> to all our past customers when exact 2026 opening dates are announced. Save our number: <a href='tel:+917017082807' style={{ color:'var(--navy)', fontWeight:600 }}>+91-7017082807 / +91-8859123961</a>
        </p>

        {/* Internal links & CTA */}
        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:32, marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Useful Links:</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[
              { label:'Char Dham Packages 2026 →', href:'/char-dham-yatra' },
              { label:'Complete Yatra Guide →',     href:'/blog/char-dham-guide' },
              { label:'Kedarnath Yatra →',          href:'/kedarnath-yatra' },
              { label:'View All Packages →',        href:'/packages' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center' }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Book Before Dates Fill Up</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Peak season (May–June) slots fill 90 days ahead. Secure yours now.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026.')}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 WhatsApp Us</a>
            <Link href="/char-dham-yatra" style={{ background:'var(--gold)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>View Packages →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Packages','/char-dham-yatra'],['Weather Guide','/blog/uttarakhand-weather-guide'],['Opening Dates 2026','/blog/char-dham-yatra-opening-dates-2026'],['Road Status','/char-dham-road-status'],['Packing List','/blog/char-dham-yatra-packing-list'],['Registration Guide','/blog/char-dham-yatra-registration']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
