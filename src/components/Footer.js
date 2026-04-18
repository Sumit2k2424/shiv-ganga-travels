import Link from 'next/link';
import { SITE } from '@/data/packages';

const COLS = [
  { heading:'Product Offering', links:[
    {l:'Char Dham Yatra',      h:'/packages/char-dham'},
    {l:'Do Dham Yatra',        h:'/packages/do-dham'},
    {l:'Single Dham',          h:'/packages/single-dham'},
    {l:'Helicopter Packages',  h:'/packages/char-dham-helicopter-5n-6d'},
    {l:'Senior Citizen Yatra', h:'/packages/char-dham-senior-citizen-14n-15d'},
    {l:'All Packages',         h:'/packages'},
    {l:'Travel Blog',          h:'/blog'},
  ]},
  { heading:'Char Dham Packages', links:[
    {l:'Classic 11N/12D',      h:'/packages/char-dham-classic-11n-12d'},
    {l:'Helicopter 5N/6D',     h:'/packages/char-dham-helicopter-5n-6d'},
    {l:'Senior Special 14N',   h:'/packages/char-dham-senior-citizen-14n-15d'},
    {l:'Kedarnath–Badrinath',  h:'/packages/kedarnath-badrinath-5n-6d'},
    {l:'Yamunotri–Gangotri',   h:'/packages/yamunotri-gangotri-4n-5d'},
    {l:'Kedarnath Only',       h:'/packages/kedarnath-3n-4d'},
    {l:'Badrinath Only',       h:'/packages/badrinath-2n-3d'},
  ]},
  { heading:'Destinations', links:[
    {l:'Kedarnath',            h:'/packages/kedarnath-3n-4d'},
    {l:'Badrinath',            h:'/packages/badrinath-2n-3d'},
    {l:'Yamunotri',            h:'/packages/yamunotri-2n-3d'},
    {l:'Gangotri',             h:'/packages/gangotri-2n-3d'},
    {l:'Haridwar',             h:'/contact'},
    {l:'Rishikesh',            h:'/contact'},
    {l:'Mana Village',         h:'/packages/badrinath-2n-3d'},
  ]},
  { heading:'Quick Links', links:[
    {l:'About Us',             h:'/about'},
    {l:'Contact Us',           h:'/contact'},
    {l:'Send Enquiry',         h:'/contact'},
    {l:'Privacy Policy',       h:'/privacy'},
    {l:'Terms & Conditions',   h:'/terms'},
    {l:'Feedback',             h:'/contact'},
  ]},
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background:'var(--deep)', color:'#8BA4C0' }}>
      {/* Ocean blue top strip */}
      <div style={{ background:'linear-gradient(90deg,var(--blue) 0%,var(--cyan-dark) 100%)', padding:'11px 16px', textAlign:'center' }}>
        <span style={{ color:'#fff', fontWeight:500, fontSize:13 }}>
          ✦ Season 2025 Open: May–June &amp; September–October &nbsp;|&nbsp; {SITE.phone}
        </span>
      </div>

      {/* Brand strip */}
      <div style={{ background:'var(--deep-mid)', padding:'20px 16px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <div style={{ width:40, height:40, background:'linear-gradient(135deg,var(--blue),var(--cyan))', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:20, fontWeight:700 }}>ॐ</div>
            <div>
              <div style={{ fontWeight:700, fontSize:15, color:'#fff' }}>{SITE.name}</div>
              <div style={{ fontSize:11, color:'var(--cyan)', fontWeight:500 }}>{SITE.tagline}</div>
            </div>
          </div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            <a href={`tel:${SITE.phone}`} style={{ background:'rgba(18,96,204,0.3)', color:'var(--cyan)', padding:'7px 16px', borderRadius:8, fontSize:12, fontWeight:600, textDecoration:'none', border:'1px solid rgba(6,182,212,0.25)' }}>
              📞 Call Us
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'7px 16px', borderRadius:8, fontSize:12, fontWeight:600, textDecoration:'none' }}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 4-col links */}
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'32px 16px 24px', display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:'24px 20px' }}>
        {COLS.map(col => (
          <div key={col.heading}>
            <h3 style={{ color:'#fff', fontWeight:700, fontSize:12, marginBottom:14, textTransform:'uppercase', letterSpacing:'0.08em', borderBottom:'2px solid var(--blue)', paddingBottom:7, display:'inline-block' }}>
              {col.heading}
            </h3>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:7, marginTop:4 }}>
              {col.links.map(l => (
                <li key={l.h}><Link href={l.h} className="footer-link">{l.l}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Address */}
      <div style={{ borderTop:'1px solid rgba(255,255,255,0.07)', maxWidth:1200, margin:'0 auto', padding:'16px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8 }}>
        <div style={{ fontSize:12, color:'#5A7A9A' }}>
          📍 {SITE.address} &nbsp;|&nbsp; ✉️ {SITE.email}
        </div>
      </div>

      {/* Copyright */}
      <div style={{ borderTop:'1px solid rgba(255,255,255,0.05)', padding:'14px 16px', textAlign:'center', fontSize:12, color:'#3A5570' }}>
        © {year} {SITE.name}. All rights reserved. &nbsp;|&nbsp; Made with ❤️ in Haridwar, Uttarakhand.
      </div>
    </footer>
  );
}
