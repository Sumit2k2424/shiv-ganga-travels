import Link from 'next/link';
import { SITE } from '@/data/packages';

const COLS = [
  { heading:'Char Dham Packages', links:[
    {l:'Classic 10N/11D',   h:'/packages/char-dham-yatra-10n-11d-haridwar'},
    {l:'Deluxe 11N/12D',    h:'/packages/char-dham-yatra-deluxe-11n-12d-haridwar'},
    {l:'Helicopter 5N/6D',  h:'/packages/char-dham-yatra-helicopter-5n-6d-dehradun'},
    {l:'Senior Special 14N',h:'/packages/char-dham-yatra-senior-citizen-14n-15d'},
  ]},
  { heading:'Do & Single Dham', links:[
    {l:'Kedarnath–Badrinath',h:'/packages/kedarnath-badrinath-do-dham-5n-6d'},
    {l:'Yamunotri–Gangotri', h:'/packages/yamunotri-gangotri-do-dham-4n-5d'},
    {l:'Kedarnath Yatra',    h:'/packages/kedarnath-yatra-package-3n-4d-haridwar'},
    {l:'Badrinath Yatra',    h:'/packages/badrinath-yatra-package-2n-3d-haridwar'},
    {l:'Yamunotri Yatra',    h:'/packages/yamunotri-yatra-package-2n-3d-haridwar'},
    {l:'Gangotri Yatra',     h:'/packages/gangotri-yatra-package-2n-3d-haridwar'},
  ]},
  { heading:'Quick Links', links:[
    {l:'All Packages',    h:'/packages'},
    {l:'About Us',        h:'/about'},
    {l:'Contact',         h:'/contact'},
    {l:'Privacy Policy',  h:'/privacy'},
    {l:'Terms',           h:'/terms'},
  ]},
];

export default function Footer() {
  return (
    <footer style={{ background:'var(--navy)', color:'rgba(255,255,255,0.65)' }}>

      {/* Gold strip */}
      <div style={{ background:'var(--gold)', padding:'11px 20px', textAlign:'center' }}>
        <span style={{ color:'#fff', fontWeight:600, fontSize:13 }}>
          ✦ Season 2025 Now Open — May–June & September–October · Book Early for Best Availability
        </span>
      </div>

      {/* Brand + links grid */}
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'40px 20px 32px' }}>
        <div className="footer-grid" style={{ display:'grid', gap:'32px 24px' }}>

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
        <span style={{ fontSize:12, color:'rgba(255,255,255,0.35)' }}>
          {SITE.address}
        </span>
      </div>
    </footer>
  );
}
