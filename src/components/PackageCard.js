import Link from 'next/link';
import { SITE } from '@/data/packages';
import { pxAt, pxSrcSet } from '@/lib/pximg';

const CAT_FALLBACK = {
  'char-dham':   'linear-gradient(160deg, #0F2B5B 0%, #1A3E75 50%, #0B7B8B 100%)',
  'do-dham':     'linear-gradient(160deg, #0B2C44 0%, #0B7B8B 60%, #16A993 100%)',
  'single-dham': 'linear-gradient(160deg, #1A0E3B 0%, #2D1B6E 50%, #4C3A9E 100%)',
  'helicopter':  'linear-gradient(160deg, #7B1D1D 0%, #B91C1C 60%, #F97316 100%)',
  'uttarakhand': 'linear-gradient(160deg, #14532D 0%, #15803D 60%, #16A34A 100%)',
};

export default function PackageCard({ pkg }) {
  const savings = pkg.price.original - pkg.price.discounted;
  const pct     = Math.round((savings / pkg.price.original) * 100);
  const fallBg  = CAT_FALLBACK[pkg.category] || CAT_FALLBACK['char-dham'];
  const msg     = encodeURIComponent(
    `Namaste! I am interested in "${pkg.name}" for Char Dham Yatra 2026. Please share details and availability.`
  );

  return (
    <article className="pkg-card" style={{ display:'flex', flexDirection:'column', position:'relative', background:'#fff' }}>

      {/* Image */}
      <Link href={`/packages/${pkg.slug}`} style={{ display:'block', textDecoration:'none' }}>
        <div style={{ height:182, position:'relative', overflow:'hidden', flexShrink:0, background:fallBg }}>
          {pkg.photo && (
            <img src={pxAt(pkg.photo, 480, 300)} alt={pkg.name} width={400} height={182}
              srcSet={pxSrcSet(pkg.photo, [[400,250],[800,500]])}
              sizes="(max-width:640px) 92vw, 400px"
              loading="lazy" decoding="async" className="card-img"
              style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', display:'block', transition:'transform .45s ease' }}/>
          )}
          {/* Bottom scrim for chip legibility (OTA style) */}
          <span aria-hidden="true" style={{
            position:'absolute', left:0, right:0, bottom:0, height:64, zIndex:1,
            background:'linear-gradient(180deg, rgba(2,10,26,0) 0%, rgba(2,10,26,0.55) 100%)', pointerEvents:'none',
          }}/>
          {/* OTA deal ribbon */}
          {pct >= 10 && (
            <span style={{
              position:'absolute', top:12, left:0, zIndex:2,
              background:'#16A34A', color:'#fff', fontSize:11, fontWeight:800,
              padding:'4px 12px 4px 10px', borderRadius:'0 6px 6px 0',
              boxShadow:'0 2px 6px rgba(22,163,74,0.35)', letterSpacing:'0.02em',
            }}>{pct}% OFF</span>
          )}
          {/* Duration chip */}
          <span style={{
            position:'absolute', top:12, right:12, zIndex:2,
            background:'rgba(15,23,42,0.62)', backdropFilter:'blur(6px)',
            color:'#fff', fontSize:11, fontWeight:700, padding:'4px 10px', borderRadius:6,
          }}>{pkg.duration.nights}N / {pkg.duration.days}D</span>
        </div>
      </Link>

      {/* Body */}
      <div style={{ padding:'13px 15px 15px', flex:1, display:'flex', flexDirection:'column', gap:9 }}>

        {/* Title + rating tile (Agoda-style) */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:10 }}>
          <Link href={`/packages/${pkg.slug}`} style={{ textDecoration:'none', flex:1 }}>
            <h3 style={{ color:'var(--navy)', fontWeight:700, fontSize:15, lineHeight:1.35, margin:0 }}>{pkg.name}</h3>
          </Link>
          <div style={{ textAlign:'right', flexShrink:0 }}>
            <span style={{
              display:'inline-block', background:'var(--navy)', color:'#fff',
              fontSize:12.5, fontWeight:800, padding:'4px 8px', borderRadius:'8px 8px 8px 0',
            }}>4.7</span>
            <div style={{ fontSize:9.5, color:'var(--text-muted)', marginTop:3, whiteSpace:'nowrap' }}>54 Google reviews</div>
          </div>
        </div>

        {/* Meta chips */}
        <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
          <span className="chip">📍 {pkg.startCity}</span>
          <span className="chip">🚌 {pkg.transport.split('/')[0].trim()}</span>
          <span className="chip">🎯 {pkg.difficulty}</span>
        </div>

        {/* Highlights */}
        <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:4, flex:1, margin:0, padding:0 }}>
          {pkg.highlights.slice(0,2).map((h,i) => (
            <li key={i} style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.5, paddingLeft:15, position:'relative' }}>
              <span style={{ position:'absolute', left:0, color:'#16A34A', fontWeight:700, fontSize:10, top:3 }}>✓</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Honest reassurance line (real policy) */}
        <div style={{ fontSize:11.5, color:'#15803D', fontWeight:600 }}>
          ✓ Free cancellation up to 30 days before departure
        </div>

        {/* Price + CTA — OTA layout */}
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:10, borderTop:'1px solid var(--border)', paddingTop:11, flexWrap:'wrap' }}>
          <div>
            <div style={{ fontSize:11.5, color:'var(--text-muted)' }}>
              <s style={{ color:'#DC2626', opacity:0.75 }}>₹{pkg.price.original.toLocaleString('en-IN')}</s>
              {savings > 0 && <span style={{ color:'#16A34A', fontWeight:700, marginLeft:6 }}>Save ₹{savings.toLocaleString('en-IN')}</span>}
            </div>
            <div style={{ fontWeight:800, fontSize:23, color:'var(--text)', lineHeight:1.15, letterSpacing:'-0.02em' }}>
              ₹{pkg.price.discounted.toLocaleString('en-IN')}
              <span style={{ fontSize:11.5, fontWeight:500, color:'var(--text-muted)' }}> /person</span>
            </div>
            <div style={{ fontSize:10.5, color:'var(--text-muted)' }}>All-inclusive · No hidden charges</div>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:6, flexShrink:0 }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{
                background:'linear-gradient(135deg,#F5A82A,#C67A08)', color:'#fff',
                padding:'10px 16px', borderRadius:8, fontSize:12.5, fontWeight:800,
                textDecoration:'none', textAlign:'center', letterSpacing:'0.02em',
                boxShadow:'0 3px 10px rgba(232,146,10,0.35)',
              }}>
              Get Free Quote
            </a>
            <Link href={`/packages/${pkg.slug}`}
              style={{
                color:'var(--navy)', border:'1px solid var(--border-dark)',
                padding:'7px 16px', borderRadius:8, fontSize:12, fontWeight:700,
                textDecoration:'none', textAlign:'center', background:'#fff',
              }}>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
