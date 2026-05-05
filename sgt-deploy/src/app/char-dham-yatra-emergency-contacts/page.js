import Link from 'next/link';
import { SITE } from '@/data/packages';
export const metadata = {
  title: 'Char Dham Yatra Emergency Contacts 2026 — Helpline, SDRF, Hospital Numbers',
  description: 'Complete Char Dham Yatra emergency contact list 2026. SDRF rescue, hospital numbers, helipad contacts, police, temple committee helplines for Kedarnath, Badrinath, Gangotri, Yamunotri.',
  keywords: ['char dham yatra emergency contacts','kedarnath helpline number','char dham yatra helpline 2026','badrinath temple committee number','char dham yatra police number'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-emergency-contacts` },
};
const contacts = [
  { category:'National Emergency', color:'#fee2e2', border:'#fca5a5', items:[
    { name:'Police (All India)', number:'100' },
    { name:'Ambulance (All India)', number:'108' },
    { name:'Disaster Management (NDMA)', number:'1078' },
    { name:'Tourist Helpline (India Tourism)', number:'1800-111-363' },
  ]},
  { category:'Uttarakhand State', color:'#fef3c7', border:'#fcd34d', items:[
    { name:'Uttarakhand Police', number:'0135-2655100' },
    { name:'Uttarakhand Tourism Helpline', number:'0135-2559898' },
    { name:'SDRF (State Disaster Response Force)', number:'9411112985' },
    { name:'Chamoli District Control Room', number:'01372-252124' },
    { name:'Rudraprayag District Control Room', number:'01364-233445' },
    { name:'Uttarkashi District Control Room', number:'01374-222626' },
  ]},
  { category:'Kedarnath', color:'#dbeafe', border:'#93c5fd', items:[
    { name:'Kedarnath Temple Committee (Samiti)', number:'01364-222210' },
    { name:'Sonprayag Police Post', number:'01364-233177' },
    { name:'Guptkashi Hospital', number:'01364-262130' },
    { name:'GMVN Guptkashi', number:'01364-262228' },
    { name:'Phata Helipad Booking', number:'1364-262222' },
  ]},
  { category:'Badrinath', color:'#ede9fe', border:'#c4b5fd', items:[
    { name:'Badrinath Temple Committee (Samiti)', number:'01381-222010' },
    { name:'Joshimath Hospital', number:'01389-222210' },
    { name:'Badrinath Police Post', number:'01381-222035' },
    { name:'GMVN Badrinath', number:'01381-222223' },
    { name:'Chamoli District Hospital', number:'01372-250230' },
  ]},
  { category:'Gangotri', color:'#dcfce7', border:'#86efac', items:[
    { name:'Gangotri Temple Committee', number:'01374-222480' },
    { name:'Uttarkashi District Hospital', number:'01374-222221' },
    { name:'Uttarkashi Police', number:'01374-222426' },
    { name:'GMVN Uttarkashi', number:'01374-222255' },
  ]},
  { category:'Yamunotri', color:'#fff7ed', border:'#fed7aa', items:[
    { name:'Yamunotri Temple Committee', number:'01374-222116' },
    { name:'Barkot Police Post', number:'01374-233133' },
    { name:'Janki Chatti Medical Post', number:'09639333333' },
  ]},
  { category:'Air Ambulance & Helicopter', color:'#fdf2f8', border:'#f0abfc', items:[
    { name:'AIIMS Rishikesh Air Ambulance', number:'0135-2462945' },
    { name:'Pawan Hans Helicopter (Kedarnath)', number:'1800-180-0422' },
    { name:'Himalayan Heli Services', number:'09897200801' },
    { name:'Utter Tourism Air Service', number:'0135-2624793' },
  ]},
];
export default function EmergencyContacts() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify({'@context':'https://schema.org','@type':'WebPage',name:'Char Dham Yatra Emergency Contacts 2026',url:`${SITE.baseUrl}/char-dham-yatra-emergency-contacts`,description:'Complete emergency contact list for Char Dham Yatra 2026'}) }}/>
    <section style={{ background:'linear-gradient(145deg,#7f1d1d 0%,#991f1f 60%,#b91c1c 100%)', padding:'52px 20px 40px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(255,255,255,0.15)', color:'#fff', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>🚨 Save Before You Travel</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:12 }}>Char Dham Yatra Emergency Contacts 2026</h1>
        <p style={{ color:'rgba(255,255,255,0.85)', fontSize:15 }}>Save these numbers in your phone before you leave home</p>
      </div>
    </section>
    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
        <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
        <span>Emergency Contacts</span>
      </div>
    </nav>
    <div style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
      <div style={{ background:'#fee2e2', border:'1px solid #fca5a5', borderRadius:12, padding:'14px 18px', marginBottom:28 }}>
        <div style={{ fontWeight:700, fontSize:14, color:'#9f1239', marginBottom:6 }}>⚠️ Before you travel</div>
        <p style={{ margin:0, fontSize:14, color:'#7f1d1d', lineHeight:1.7 }}>Save the 108 ambulance number and your nearest district control room number in your phone before departing. Mountain networks can be patchy — note numbers on paper too. Our team at Shiv Ganga Travels is also available 24/7 during your yatra at <strong>+91-7017082807</strong>.</p>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(380px,100%),1fr))', gap:16 }}>
        {contacts.map(cat => (
          <div key={cat.category} style={{ background:cat.color, border:`1px solid ${cat.border}`, borderRadius:12, padding:'16px 18px' }}>
            <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>{cat.category}</div>
            {cat.items.map(item => (
              <div key={item.name} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 0', borderBottom:'1px solid rgba(0,0,0,0.06)' }}>
                <span style={{ fontSize:13, color:'var(--text-mid)' }}>{item.name}</span>
                <a href={`tel:${item.number}`} style={{ fontWeight:700, fontSize:14, color:'var(--navy)', textDecoration:'none', fontFamily:'monospace' }}>{item.number}</a>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ marginTop:28, background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:8 }}>Travelling with Shiv Ganga Travels?</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:16 }}>Our team is your 24/7 support throughout the yatra. One call and we handle everything.</p>
        <a href='tel:+917017082807' style={{ background:'#25D366', color:'#fff', padding:'11px 28px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
      </div>
    </div>
  </>);
}
