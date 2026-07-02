import Link from 'next/link';
import { SITE } from '@/data/packages';

const COLS = [
  { heading:'Char Dham Packages', links:[
    {l:'Char Dham Yatra 2026',       h:'/char-dham-yatra'},
    {l:'Char Dham Guide 2026',       h:'/blog/char-dham-guide'},
    {l:'Classic 9N/10D',             h:'/packages/char-dham-yatra-9n-10d-haridwar'},
    {l:'Deluxe 11N/12D',             h:'/packages/char-dham-yatra-11n-12d-haridwar'},
    {l:'Helicopter 5N/6D',           h:'/char-dham-helicopter'},
    {l:'Senior Special 12N/13D',     h:'/packages/char-dham-yatra-senior-citizen-12n-13d'},
    {l:'From Delhi',                 h:'/char-dham-yatra-from-delhi'},
    {l:'From Noida',                 h:'/char-dham-yatra-from-noida'},
    {l:'From Mumbai',                h:'/char-dham-yatra-from-mumbai'},
    {l:'From Bangalore',             h:'/char-dham-yatra-from-bangalore'},
  ]},
  { heading:'Single & Do Dham', links:[
    {l:'Kedarnath Yatra',            h:'/kedarnath-yatra'},
    {l:'Kedarnath Package 3N/4D',    h:'/kedarnath-tour-package'},
    {l:'Badrinath Package 2N/3D',    h:'/badrinath-tour-package'},
    {l:'Badrinath Yatra',            h:'/badrinath-yatra'},
    {l:'Gangotri Yatra',             h:'/gangotri-yatra'},
    {l:'Yamunotri Yatra',            h:'/yamunotri-yatra'},
    {l:'Do Dham Yatra',              h:'/do-dham-yatra'},
    {l:'Panch Kedar Yatra',          h:'/panch-kedar-yatra'},
    {l:'Panch Badri Yatra',          h:'/panch-badri-yatra'},
    {l:'Chopta & Tungnath',          h:'/chopta-tungnath'},
    {l:'Uttarakhand Tours',          h:'/uttarakhand-tour-packages'},
    {l:'Valley of Flowers',          h:'/packages/valley-of-flowers-hemkund-sahib-5n-6d'},
  ]},
  { heading:'Cabs & Transport', links:[
    {l:'All Uttarakhand Cabs',         h:'/cabs'},
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
    {l:'Leave a Review',             h:'/review'},
    {l:'Site Map',                   h:'/sitemap-page'},
    {l:'Contact Us',                 h:'/contact'},
    {l:'All Packages',               h:'/packages'},
    {l:'Senior Citizen Package',     h:'/blog/senior-citizen-char-dham'},
    {l:'Online Puja Booking',          h:'/online-puja-booking'},
    {l:'Kedarnath Hotels',            h:'/kedarnath-hotels'},
    {l:'Badrinath Hotels',            h:'/badrinath-hotels'},
    {l:'Kedarnath Temple Guide',       h:'/kedarnath-temple'},
    {l:'Badrinath Temple Guide',       h:'/badrinath-temple'},
    {l:'Gangotri Temple Guide',        h:'/gangotri-temple'},
    {l:'Yamunotri Temple Guide',       h:'/yamunotri-temple'},
    {l:'Kedarnath Weather',            h:'/kedarnath-weather'},
    {l:'Yamunotri Weather',            h:'/yamunotri-weather'},
    {l:'Gangotri Weather',             h:'/gangotri-weather'},
    {l:'Badrinath Weather',            h:'/badrinath-weather'},
    {l:'How to Reach Kedarnath',        h:'/blog/how-to-reach-kedarnath'},
    {l:'How to Reach Yamunotri',       h:'/how-to-reach-yamunotri'},
    {l:'How to Reach Gangotri',        h:'/how-to-reach-gangotri'},
    {l:'How to Reach Badrinath',       h:'/how-to-reach-badrinath'},
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
            <div style={{ display:'flex', gap:8, flexWrap:'wrap', alignItems:'center' }}>
              <a href='tel:+917817996730' aria-label="Call us"
                style={{ background:'rgba(255,255,255,0.1)', color:'var(--gold)', padding:'8px 12px', borderRadius:8, fontSize:12, fontWeight:600, textDecoration:'none', border:'1px solid rgba(255,255,255,0.12)', whiteSpace:'nowrap' }}>
                📞 Call
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="nofollow noopener noreferrer" aria-label="WhatsApp"
                style={{ background:'#25D366', color:'#fff', padding:'8px 12px', borderRadius:8, fontSize:12, fontWeight:600, textDecoration:'none', whiteSpace:'nowrap' }}>
                💬 WhatsApp
              </a>
              <div style={{ display:'flex', gap:6 }}>
                <a href="https://www.instagram.com/shivgangatravels/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"
                  style={{ width:34, height:34, borderRadius:'50%', background:'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100083198213052" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"
                  style={{ width:34, height:34, borderRadius:'50%', background:'#1877F2', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
                </a>
                <a href="https://www.youtube.com/@Shivgangatravelsharidwar" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube"
                  style={{ width:34, height:34, borderRadius:'50%', background:'#FF0000', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <svg width="17" height="12" viewBox="0 0 24 17" fill="currentColor" aria-hidden="true"><path d="M23.495 2.656A3.016 3.016 0 0 0 21.37.516C19.505 0 12 0 12 0S4.495 0 2.63.516A3.016 3.016 0 0 0 .505 2.656C0 4.532 0 8.45 0 8.45s0 3.918.505 5.794a3.016 3.016 0 0 0 2.125 2.14C4.495 16.9 12 16.9 12 16.9s7.505 0 9.37-.516a3.016 3.016 0 0 0 2.125-2.14C24 12.368 24 8.45 24 8.45s0-3.918-.505-5.794zM9.545 12.027V4.873l6.272 3.577-6.272 3.577z"/></svg>
                </a>
              </div>
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
            style={{ display:'inline-flex', alignItems:'center', gap:6, background:'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', color:'#fff', padding:'5px 12px', borderRadius:100, fontSize:11.5, fontWeight:700, textDecoration:'none', whiteSpace:'nowrap' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            @shivgangatravels
          </a>
          <a href="https://www.facebook.com/profile.php?id=100083198213052" target="_blank" rel="noopener noreferrer"
            style={{ display:'inline-flex', alignItems:'center', gap:6, background:'#1877F2', color:'#fff', padding:'5px 12px', borderRadius:100, fontSize:11.5, fontWeight:700, textDecoration:'none', whiteSpace:'nowrap' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
            Facebook
          </a>
          <a href="https://www.youtube.com/@Shivgangatravelsharidwar" target="_blank" rel="noopener noreferrer"
            style={{ display:'inline-flex', alignItems:'center', gap:6, background:'#FF0000', color:'#fff', padding:'5px 12px', borderRadius:100, fontSize:11.5, fontWeight:700, textDecoration:'none', whiteSpace:'nowrap' }}>
            <svg width="15" height="11" viewBox="0 0 24 17" fill="currentColor" aria-hidden="true">
              <path d="M23.495 2.656A3.016 3.016 0 0 0 21.37.516C19.505 0 12 0 12 0S4.495 0 2.63.516A3.016 3.016 0 0 0 .505 2.656C0 4.532 0 8.45 0 8.45s0 3.918.505 5.794a3.016 3.016 0 0 0 2.125 2.14C4.495 16.9 12 16.9 12 16.9s7.505 0 9.37-.516a3.016 3.016 0 0 0 2.125-2.14C24 12.368 24 8.45 24 8.45s0-3.918-.505-5.794zM9.545 12.027V4.873l6.272 3.577-6.272 3.577z"/>
            </svg>
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
