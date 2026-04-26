import Link from 'next/link';
import { SITE } from '@/data/packages';

const COLS = [
  { heading:'Char Dham Packages', links:[
    {l:'Char Dham Yatra 2026',       h:'/char-dham-yatra'},
    {l:'Classic 9N/10D',             h:'/packages/char-dham-yatra-9n-10d-haridwar'},
    {l:'Deluxe 11N/12D',             h:'/packages/char-dham-yatra-11n-12d-haridwar'},
    {l:'Helicopter 5N/6D',           h:'/char-dham-helicopter'},
    {l:'Senior Special 12N/13D',     h:'/packages/char-dham-yatra-senior-citizen-12n-13d'},
    {l:'From Delhi',                 h:'/char-dham-yatra-from-delhi'},
    {l:'From Mumbai',                h:'/char-dham-yatra-from-mumbai'},
    {l:'From Bangalore',             h:'/char-dham-yatra-from-bangalore'},
  ]},
  { heading:'Single & Do Dham', links:[
    {l:'Kedarnath Yatra',            h:'/kedarnath-yatra'},
    {l:'Badrinath Yatra',            h:'/blog/badrinath-yatra-guide'},
    {l:'Gangotri Yatra',             h:'/gangotri-yatra'},
    {l:'Yamunotri Yatra',            h:'/yamunotri-yatra'},
    {l:'Do Dham Yatra',              h:'/do-dham-yatra'},
    {l:'Panch Kedar Yatra',          h:'/panch-kedar-yatra'},
    {l:'Uttarakhand Tours',          h:'/uttarakhand-tour-packages'},
    {l:'Valley of Flowers',          h:'/packages/valley-of-flowers-hemkund-sahib-5n-6d'},
  ]},
  { heading:'Cabs & Transport', links:[
    {l:'Char Dham Cab Booking',       h:'/char-dham-yatra-cab-booking'},
    {l:'Haridwar → Kedarnath Cab',    h:'/haridwar-to-kedarnath-cab'},
    {l:'Haridwar → Badrinath Cab',    h:'/haridwar-to-badrinath-cab'},
    {l:'Haridwar → Gangotri Cab',     h:'/haridwar-to-gangotri-cab'},
    {l:'Delhi → Haridwar Cab',        h:'/delhi-to-haridwar-cab'},
  ]},
  { heading:'Guides & Tools', links:[
    {l:'2026 New Rules 🆕',          h:'/blog/char-dham-yatra-2026-new-rules'},
    {l:'Cost Calculator 🧮',         h:'/char-dham-yatra-cost-calculator'},
    {l:'Route Map 🗺️',               h:'/char-dham-yatra-route-map'},
    {l:'Kedarnath Trek Guide',       h:'/blog/kedarnath-trek-guide'},
    {l:'Helicopter Booking',         h:'/blog/kedarnath-helicopter-booking'},
    {l:'Packing List',               h:'/blog/char-dham-yatra-packing-list'},
    {l:'Cost Breakdown',             h:'/blog/char-dham-yatra-cost'},
    {l:'All Blog Posts',             h:'/blog'},
  ]},
  { heading:'Company', links:[
    {l:'About Us',                   h:'/about'},
    {l:'Contact Us',                 h:'/contact'},
    {l:'All Packages',               h:'/packages'},
    {l:'Senior Citizen Package',     h:'/blog/senior-citizen-char-dham'},
    {l:'Online Puja Booking',          h:'/online-puja-booking'},
    {l:'Kedarnath Temple Guide',       h:'/kedarnath-temple'},
    {l:'Badrinath Temple Guide',       h:'/badrinath-temple'},
    {l:'Emergency Contacts',          h:'/char-dham-yatra-emergency-contacts'},
    {l:'Registration Guide',         h:'/blog/char-dham-yatra-registration'},
    {l:'Best Time to Visit',         h:'/blog/best-time-char-dham'},
  ]},
];

export default function Footer() {
  return (
    <footer style={{ background:'var(--navy)', color:'rgba(255,255,255,0.65)' }}>

      {/* Gold strip */}
      <div style={{ background:'var(--gold)', padding:'11px 20px', textAlign:'center' }}>
        <span style={{ color:'#fff', fontWeight:600, fontSize:13 }}>
          ✦ 2026 Season Open — Yamunotri & Gangotri Apr 19 · Kedarnath Apr 22 · Badrinath Apr 23
        </span>
      </div>

      {/* Brand + links grid */}
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'40px 20px 32px' }}>
        <div className="footer-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:'32px 24px' }}>

          {/* Brand col */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
              <div style={{
                width:40, height:40, borderRadius:10, flexShrink:0,
                background:'linear-gradient(135deg, var(--navy-mid), var(--gold))',
                display:'flex', alignItems:'center', justifyContent:'center',
                color:'#fff', fontSize:20, fontWeight:700,
              }}>ॐ</div>
              <div>
                <div style={{ fontWeight:700, fontSize:15, color:'#fff' }}>{SITE.name}</div>
                <div style={{ fontSize:11, color:'var(--gold)', fontWeight:500, marginTop:1 }}>{SITE.tagline}</div>
              </div>
            </div>
            <p style={{ fontSize:12.5, lineHeight:1.7, color:'rgba(255,255,255,0.55)', marginBottom:18, maxWidth:240 }}>
              Haridwar's trusted Char Dham Yatra specialist since {SITE.established}. 50,000+ blessed pilgrims. Zero commission.
            </p>
            <div style={{ display:'flex', gap:8 }}>
              <a href={`tel:${SITE.phone}`}
                style={{ background:'rgba(255,255,255,0.1)', color:'var(--gold)', padding:'8px 14px', borderRadius:8, fontSize:12, fontWeight:600, textDecoration:'none', border:'1px solid rgba(255,255,255,0.12)' }}>
                📞 Call
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
                style={{ background:'#25D366', color:'#fff', padding:'8px 14px', borderRadius:8, fontSize:12, fontWeight:600, textDecoration:'none' }}>
                💬 WhatsApp
              </a>
              <a href="https://www.instagram.com/shivgangatravels/" target="_blank" rel="noopener noreferrer"
                style={{ background:'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', color:'#fff', padding:'8px 14px', borderRadius:8, fontSize:12, fontWeight:600, textDecoration:'none' }}>
                📸 Instagram
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLS.map(col => (
            <div key={col.heading}>
              <h3 style={{
                color:'#fff', fontWeight:700, fontSize:11.5, marginBottom:14,
                textTransform:'uppercase', letterSpacing:'0.1em',
                paddingBottom:8, borderBottom:'1px solid rgba(255,255,255,0.1)',
              }}>
                {col.heading}
              </h3>
              <ul style={{ listStyle:'none' }}>
                {col.links.map(l => (
                  <li key={l.h}><Link href={l.h} className="footer-link">{l.l}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom" style={{ borderTop:'1px solid rgba(255,255,255,0.07)', maxWidth:'var(--container)', margin:'0 auto', padding:'16px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8 }}>
        <span style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved. Made with ❤️ in Haridwar.
        </span>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <span style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>{SITE.address}</span>
          <a href="https://www.instagram.com/shivgangatravels/" target="_blank" rel="noopener noreferrer"
            style={{ display:'inline-flex', alignItems:'center', gap:5, background:'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', color:'#fff', padding:'5px 12px', borderRadius:100, fontSize:11.5, fontWeight:700, textDecoration:'none', whiteSpace:'nowrap' }}>
            📸 @shivgangatravels
          </a>
        </div>
      </div>
    </footer>
  );
}
