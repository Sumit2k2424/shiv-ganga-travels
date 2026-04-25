import Link from 'next/link';
import { SITE } from '@/data/packages';
export const metadata = {
  title: 'Online Puja Booking — Kedarnath, Badrinath Abhishek & Rudrabhishek 2026',
  description: 'Book puja online for Kedarnath, Badrinath, Gangotri and Yamunotri 2026. Mahabhishek, Rudrabhishek, Sahastra Naam, Shringaar Aarti. Conducted by temple-registered pandits. WhatsApp booking.',
  keywords: ['online puja booking kedarnath','badrinath abhishek booking','kedarnath mahabhishek','rudrabhishek kedarnath','char dham puja booking 2026','badrinath online puja'],
  alternates: { canonical: `${SITE.baseUrl}/online-puja-booking` },
};
const pujas = [
  { temple:'Kedarnath', deity:'Lord Shiva', pujas:[
    { name:'Maha Abhishek', price:'₹3,100', time:'4:00–6:00 AM', desc:'Milk, curd, honey, ghee, sacred water — most powerful Shiva puja. Conducted at pre-dawn.', popular:true },
    { name:'Rudrabhishek', price:'₹1,500', time:'Morning', desc:'Panchamrit abhishek with chanting of Rudrashtadhyayi. Highly auspicious for health and prosperity.' },
    { name:'Sahastra Naam Archana', price:'₹1,200', time:'Afternoon', desc:'1,008 names of Lord Shiva recited. Tulsi, bael leaves, flowers offered to the lingam.' },
    { name:'Shringaar Aarti', price:'₹2,100', time:'7:30 PM', desc:'Lord Shiva adorned with flowers and jewels. One of the most beautiful rituals at Kedarnath.' },
  ]},
  { temple:'Badrinath', deity:'Lord Vishnu', pujas:[
    { name:'Maha Abhishek', price:'₹3,500', time:'4:30 AM', desc:'Pre-dawn abhishek — the holiest puja at Badrinath. Panchamrit + holy water from Alaknanda.', popular:true },
    { name:'Balabhog Archana', price:'₹750', time:'7:00 AM', desc:'Morning offering to Lord Badrinarayan. Flowers, tulsi, dry fruits.' },
    { name:'Shodashopachaar Puja', price:'₹2,100', time:'Morning/Afternoon', desc:'16-step worship ritual — full traditional Vaishnav puja at Badrinath.' },
    { name:'Sandhya Aarti', price:'₹1,500', time:'7:00 PM', desc:'Evening aarti with conch shells, bells, and incense.' },
  ]},
  { temple:'Gangotri', deity:'Goddess Ganga', pujas:[
    { name:'Ganga Abhishek', price:'₹1,100', time:'Morning', desc:'Abhishek with holy water from the Bhagirathi river — deeply purifying ritual.' },
    { name:'Rudrabhishek', price:'₹1,500', time:'Morning', desc:'Shiva puja as Gangadhar (bearer of Ganga). Conducted near Surya Kund.' },
  ]},
  { temple:'Yamunotri', deity:'Goddess Yamuna', pujas:[
    { name:'Yamuna Archana', price:'₹750', time:'Morning', desc:'Flowers and offerings to Goddess Yamuna. Prasad cooked in Surya Kund hot spring.' },
    { name:'Vishesh Puja', price:'₹1,500', time:'Morning/Afternoon', desc:'Special puja with pandit. Includes jal abhishek from the Yamuna source.' },
  ]},
];
export default function PujaBooking() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify({'@context':'https://schema.org','@type':'Service',name:'Char Dham Online Puja Booking',provider:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl,telephone:SITE.phone},url:`${SITE.baseUrl}/online-puja-booking`,areaServed:'Uttarakhand',description:'Book advance puja at Kedarnath, Badrinath, Gangotri and Yamunotri temples for Char Dham Yatra 2026'}) }}/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🙏 Advance Booking · 2026</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Online Puja Booking — Char Dham 2026</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Mahabhishek · Rudrabhishek · Sahastra Naam · Shringaar Aarti · All temples · Temple-registered pandits</p>
        <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book a puja at Char Dham temples. Please share availability and prices.')}`} target="_blank" rel="noopener noreferrer"
          style={{ display:'inline-block', background:'#25D366', color:'#fff', padding:'13px 32px', borderRadius:10, fontWeight:700, fontSize:15, textDecoration:'none', marginTop:20 }}>💬 Book Puja on WhatsApp</a>
      </div>
    </section>
    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
        <span>Online Puja Booking</span>
      </div>
    </nav>
    <div style={{ maxWidth:960, margin:'0 auto', padding:'40px 20px 60px' }}>
      <div style={{ background:'#fff9f0', border:'1px solid rgba(232,146,10,0.3)', borderRadius:12, padding:'14px 18px', marginBottom:28 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>📋 How puja booking works</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:12, fontSize:13, color:'var(--text-mid)' }}>
          {['1. WhatsApp us your name, date of travel & chosen puja','2. We confirm availability with temple pandit','3. Pay advance (50%) to secure your slot','4. Pandit conducts puja in your name on the day','5. Video of puja shared on WhatsApp if requested'].map(s=>(
            <div key={s} style={{ padding:'8px 10px', background:'#fff', borderRadius:8, border:'1px solid var(--border)' }}>{s}</div>
          ))}
        </div>
      </div>
      {pujas.map(temple => (
        <div key={temple.temple} style={{ marginBottom:32 }}>
          <div style={{ fontFamily:'var(--font-display)', fontSize:'1.3rem', fontWeight:600, color:'var(--navy)', marginBottom:14, paddingBottom:10, borderBottom:'2px solid var(--navy-light)' }}>
            🕌 {temple.temple} — {temple.deity}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))', gap:12 }}>
            {temple.pujas.map(puja => (
              <div key={puja.name} style={{ background:'#fff', borderRadius:12, border:`${puja.popular ? '2px solid var(--navy)' : '1px solid var(--border)'}`, padding:'16px', position:'relative' }}>
                {puja.popular && <div style={{ position:'absolute', top:-1, right:-1, background:'var(--gold)', color:'#fff', fontSize:10, fontWeight:700, padding:'3px 10px', borderRadius:'0 12px 0 8px' }}>POPULAR</div>}
                <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:4 }}>{puja.name}</div>
                <div style={{ fontWeight:800, fontSize:18, color:'var(--gold)', marginBottom:3 }}>{puja.price}</div>
                <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:8 }}>⏰ {puja.time}</div>
                <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.6, marginBottom:12 }}>{puja.desc}</div>
                <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Namaste! I want to book ${puja.name} at ${temple.temple} (${puja.price}). Please confirm availability.`)}`} target="_blank" rel="noopener noreferrer"
                  style={{ background: puja.popular ? '#25D366' : 'var(--navy-light)', color: puja.popular ? '#fff' : 'var(--navy)', padding:'8px 14px', borderRadius:8, fontWeight:700, fontSize:12.5, textDecoration:'none', display:'block', textAlign:'center' }}>
                  Book {puja.name} →
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Kedarnath Temple Guide',h:'/kedarnath-temple'},{l:'Badrinath Temple Guide',h:'/badrinath-temple'},{l:'Char Dham Package',h:'/char-dham-yatra'},{l:'Kedarnath Yatra',h:'/kedarnath-yatra'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
          ))}
        </div>
      </div>
    </div>
  </>);
}
