import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra 2026 New Rules – Phone Ban, Green Card, Medical Certificate & More',
  description: 'All new Char Dham Yatra 2026 rules: phone ban inside temples, mandatory medical certificate for pilgrims 55+, Green Card vehicle permit, real-time pilgrim caps, and IRCTC helicopter booking.',
  keywords: ['char dham yatra 2026 new rules', 'char dham yatra 2026 mobile phone ban', 'char dham yatra 2026 medical certificate', 'char dham green card 2026', 'kedarnath new rules 2026', 'char dham yatra 2026 regulations'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-2026-new-rules` },
  openGraph: {
    title: 'Char Dham Yatra 2026 New Rules – Phone Ban, Green Card, Medical Certificate & More',
    description: 'Phone ban, medical certificates, IRCTC helicopter booking, non-Hindu entry — all 2026 new rules explained.',
    url: `${SITE.baseUrl}/blog/char-dham-yatra-2026-new-rules`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra 2026 New Rules — Green Card, SpO2 Check, 10PM Ban & Al | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra 2026 New Rules — What Changed',
    description: 'Phone ban, medical certificates, IRCTC helicopter booking, non-Hindu entry — all 2026 new rules explained.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra 2026 New Rules — What Changed | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faqData = [
    { q: 'Is mobile phone allowed inside Kedarnath temple in 2026?', a: 'No. In 2026, mobile phones are banned inside the premises of Kedarnath and Badrinath temples. You must deposit your phone at the counter before entering the sanctum. Photography inside the inner shrine has been prohibited to preserve the spiritual atmosphere.' },
    { q: 'Is there an age limit for Char Dham Yatra 2026?', a: 'There is no absolute age ban, but the Uttarakhand government now requires a mandatory <Link href="/blog/char-dham-yatra-medical-certificate" style={{color:"var(--teal)",fontWeight:600,textDecoration:"underline",textDecorationColor:"rgba(11,123,139,0.3)",textUnderlineOffset:2}}>medical fitness certificate</Link> for all pilgrims aged 55 years and above, and for those with pre-existing health conditions. The certificate must be from a registered doctor and obtained before travel.' },
    { q: 'Can non-Hindus visit Kedarnath and Badrinath in 2026?', a: 'In 2026, entry restrictions for non-Hindus have been introduced at certain temples in the Char Dham circuit. Non-Hindus are advised to check the specific rules at each temple before visiting. Some temples now require proof of Hindu faith for entry to the inner sanctum.' },
    { q: 'How to book Kedarnath helicopter in 2026?', a: 'As per new 2026 rules, Kedarnath helicopter bookings must be made exclusively through the IRCTC portal (irctc.co.in). Private operator bookings at helipads on the day of travel are being phased out. Shiv Ganga Travels can assist you with IRCTC helicopter booking as part of our package.' },
    { q: 'What is the real-time tracking system for Char Dham Yatra 2026?', a: 'The Uttarakhand government has introduced a real-time GPS tracking system for all registered yatra vehicles. 177 ambulances are deployed along the Char Dham route, plus a helicopter ambulance operated by AIIMS Rishikesh for emergencies.' },
  ];
  const article = { '@context':'https://schema.org','@type':'NewsArticle', headline:'Char Dham Yatra 2026 New Rules — Phone Ban, Age Limit, IRCTC Helicopter', author:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl}, publisher:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl,logo:{'@type':'ImageObject',url:'https://www.shivgangatravels.com/logo.png'}}, datePublished:'2026-04-19', dateModified:'2026-04-27', mainEntityOfPage:`${SITE.baseUrl}/blog/char-dham-yatra-2026-new-rules` };
  const faq = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:faqData.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}})) };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(article) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };

export default function NewRules2026() {
  const rules = [
    {
      icon:'🚗',
      rule:'Green Card — Trip Permit for non-UK vehicles',
      status:'NEW 2026',
      color:'#fef9c3',
      border:'#fde047',
      detail:'All vehicles registered OUTSIDE Uttarakhand (Delhi DL, Haryana HR, UP, Rajasthan RJ, Maharashtra MH, and all other non-UK plates) must obtain a Green Card (Trip Permit) before entering Char Dham routes. Apply at greencard.uk.gov.in — fee ₹50, takes 5 minutes. Checked at route checkposts. Uttarakhand-registered (UK plate) vehicles are exempt.',
      impact:'Apply before you leave home. If you are self-driving from Delhi, Jaipur, or Lucknow — do this online the night before departure. If you book a Haridwar-based operator (UK plates), this is not required at all.',
    },
    {
      icon:'🩺',
      rule:'SpO2 oxygen screening at Sonprayag checkpoint',
      status:'NEW 2026',
      color:'#fce7f3',
      border:'#f9a8d4',
      detail:'All pilgrims heading to Kedarnath are health-screened at the Sonprayag checkpoint. Oxygen saturation (SpO2) below 85% means you may be restricted from proceeding to Kedarnath. The government has deployed 31 health check centres and 20 Medical Relief Posts (MRPs) along all Char Dham routes. Helicopter passengers are exempt from this trek-route screening.',
      impact:'Carry a pulse oximeter — available at any pharmacy for ₹300–800. Check your SpO2 at Haridwar (sea level) before departure and again at Sonprayag. If you are 55+, do the medical check your doctor recommends.',
    },
    {
      icon:'🌙',
      rule:'Vehicle movement banned 10 PM – 4 AM on all routes',
      status:'NEW 2026',
      color:'#e0e7ff',
      border:'#a5b4fc',
      detail:'All private and commercial vehicles are banned from Char Dham roads between 10:00 PM and 4:00 AM. Police checkposts enforce this at key points. Plan your daily driving to reach your overnight stop (Sonprayag, Guptkashi, Uttarkashi, Barkot) before 10 PM. Violations result in vehicle detention overnight.',
      impact:'This actually benefits pilgrims — roads are safer and less congested during the permit hours. Plan drives to end by 8–9 PM to have buffer time.',
    },
    {
      icon:'📱',
      rule:'Mobile phone ban inside temples',
      status:'NEW 2026',
      color:'#fee2e2',
      border:'#fca5a5',
      detail:'Mobile phones and cameras are now banned inside the inner sanctum (garbhagriha) of Kedarnath and Badrinath temples. Phone deposit counters are set up outside. Photography of the deity is strictly prohibited. Violators face removal from the premises.',
      impact:'High — plan your visit knowing you cannot take photos inside. Take photos of the exterior and surroundings before you enter.',
    },
    {
      icon:'🏥',
      rule:'Medical certificate mandatory for 55+ and health conditions',
      status:'NEW 2026',
      color:'#fef3c7',
      border:'#fcd34d',
      detail:'All pilgrims aged 55 years and above must carry a medical fitness certificate from a registered doctor. Anyone with pre-existing conditions (heart disease, BP, diabetes, COPD) must also carry a certificate regardless of age. Certificates will be checked at <Link href="/blog/char-dham-yatra-registration" style={{color:"var(--teal)",fontWeight:600,textDecoration:"underline",textDecorationColor:"rgba(11,123,139,0.3)",textUnderlineOffset:2}}>biometric registration</Link> checkpoints.',
      impact:'Plan ahead — get this certificate from your doctor at least 1 week before departure. Our team reminds all pilgrims about this during booking.',
    },
    {
      icon:'🚁',
      rule:'Kedarnath helicopter only through IRCTC',
      status:'NEW 2026',
      color:'#dbeafe',
      border:'#93c5fd',
      detail:'Helicopter bookings for Kedarnath must now be made exclusively through the IRCTC portal (irctc.co.in). Walk-in bookings at helipads are being eliminated. This applies to Phata, Sersi, and Guptkashi helipads. Private operators must route bookings through IRCTC.',
      impact:'Book in advance — IRCTC slots for peak season fill 60–90 days ahead. We assist all our pilgrims with IRCTC helicopter booking as part of our package service.',
    },
    {
      icon:'🙏',
      rule:'Non-Hindu entry restrictions at certain temples',
      status:'NEW 2026',
      color:'#ede9fe',
      border:'#c4b5fd',
      detail:'The Uttarakhand government has introduced entry restrictions for non-Hindus at certain temples in the Char Dham circuit. Non-Hindu visitors may be restricted from entering the inner sanctum. The specific temples and extent of restrictions are being implemented temple-by-temple.',
      impact:'Non-Hindu travelers should verify individual temple rules before visiting. The outer courtyards and temple premises generally remain accessible.',
    },
    {
      icon:'📍',
      rule:'Real-time GPS tracking of all yatra vehicles',
      status:'NEW 2026',
      color:'#dcfce7',
      border:'#86efac',
      detail:'All registered Char Dham Yatra vehicles must now carry a GPS tracker. The Uttarakhand traffic control center monitors all vehicles in real-time. This is part of the government\'s push to reduce accident rates on mountain roads.',
      impact:'Positive change — our fleet vehicles are already GPS-equipped. If your vehicle breaks down or encounters an issue, the traffic control center is notified automatically.',
    },
    {
      icon:'🚑',
      rule:'177 ambulances + helicopter ambulance on route',
      status:'NEW 2026',
      color:'#f0fdf4',
      border:'#86efac',
      detail:'The Uttarakhand government has deployed 177 ambulances along the complete Char Dham route, plus a helicopter ambulance service operated by AIIMS Rishikesh for critical medical emergencies at high altitude. Medical checkpoints are set up at Sonprayag (before Kedarnath) and other key points.',
      impact:'Significantly better safety net than previous years. All our vehicles also carry oxygen cylinders and first-aid kits as standard.',
    },
    {
      icon:'⏰',
      rule:'2026 confirmed temple opening & closing dates',
      status:'CONFIRMED',
      color:'#fff',
      border:'var(--border)',
      detail:'Yamunotri: April 19 → November 11 | Gangotri: April 19 → November 10 | Kedarnath: April 22 → November 11 | Badrinath: April 23 → November 13. All four temples are now open for the 2026 season.',
      impact:'The 2026 season is already open. May–June and September–October remain the best windows. Peak season (May–June) is booking up fast.',
    },
  ];

  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.25)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>
            🔴 Live — Updated May 21, 2026
          </span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Char Dham Yatra 2026 New Rules — What Changed
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Phone ban · Medical certificate for 55+ · IRCTC helicopter · Non-Hindu entry · Real-time tracking
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--navy)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>Char Dham Yatra 2026 New Rules</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        <div style={{ background:'#fee2e2', border:'1.5px solid #fca5a5', borderRadius:12, padding:'16px 20px', marginBottom:28 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'#9f1239', marginBottom:6 }}>⚠️ Important Notice for 2026 Pilgrims</div>
          <p style={{ margin:0, fontSize:14, color:'#7f1d1d', lineHeight:1.7 }}>
            The Char Dham Yatra 2026 season has already begun (April 19). Several <strong>new regulations</strong> are in effect this year that were not present in previous years. Please read this guide carefully before you travel — non-compliance can result in being turned away at temple checkpoints.
          </p>
        </div>

        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Every year, the Uttarakhand government and temple committees introduce changes to improve pilgrim safety and manage the growing footfall at the Char Dham shrines. The 2026 season has brought several significant rule changes — some controversial, some genuinely safety-improving. This guide covers every change confirmed as of May 2026.</p>

        <h2 style={h2}>All 7 Rule Changes for 2026</h2>

        <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:28 }}>
          {rules.map((rule, i) => (
            <div key={i} style={{ background:rule.color, border:`1px solid ${rule.border}`, borderRadius:12, padding:'18px 20px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:12, marginBottom:10, flexWrap:'wrap' }}>
                <div style={{ display:'flex', gap:10, alignItems:'center' }}>
                  <span style={{ fontSize:22 }}>{rule.icon}</span>
                  <div style={{ fontWeight:700, fontSize:14.5, color:'var(--text)' }}>{rule.rule}</div>
                </div>
                <span style={{ background:'var(--navy)', color:'#fff', fontSize:10.5, fontWeight:700, padding:'3px 10px', borderRadius:100, flexShrink:0 }}>{rule.status}</span>
              </div>
              <p style={{ fontSize:15.5, color:'#2D3748', lineHeight:1.7, marginBottom:10 }}>{rule.detail}</p>
              <div style={{ fontSize:13, color:'var(--text)', fontWeight:600 }}>
                <span style={{ color:'var(--teal)' }}>→ </span>What this means for you: <span style={{ fontWeight:400, color:'var(--text-mid)' }}>{rule.impact}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2}>How We Handle These Rules for Our Pilgrims</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>When you book a Char Dham Yatra with Shiv Ganga Travels, our team handles all compliance automatically:</p>
        <ul style={{ paddingLeft:20, color:'var(--text-mid)', fontSize:14.5, lineHeight:2.3, marginBottom:24 }}>
          <li>We obtain your biometric registration and remind you about documents needed</li>
          <li>We assist with IRCTC helicopter booking if you opt for the helicopter route</li>
          <li>We remind all 55+ pilgrims to get their medical certificate 10 days before departure</li>
          <li>Our guide at each temple briefs you on the specific rules at that dham before you enter</li>
          <li>Phone deposit bags are available in our vehicle — keep your phone safe while inside</li>
        </ul>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related 2026 Guides:</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[
              {label:'Char Dham Yatra 2026 Packages', href:'/char-dham-yatra'},
              {label:'Registration Guide', href:'/blog/char-dham-yatra-registration'},
              {label:'Best Time to Visit 2026', href:'/blog/best-time-char-dham'},
              {label:'Kedarnath Helicopter Guide', href:'/blog/kedarnath-helicopter-booking'},
              {label:'Senior Citizen Package', href:'/blog/senior-citizen-char-dham'},
            ].map(l=>(
              <Link key={l.href} href={l.href} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.label} →</Link>
            ))}
          </div>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center' }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Book for 2026 Season — We Handle All Compliance</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Medical certificate reminders · IRCTC helicopter booking · Biometric registration — all included.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 and need help with the new rules.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 WhatsApp Us</a>
            <a href='tel:+917017082807' style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </article>
    </>
  );
}
