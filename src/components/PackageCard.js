import Link from 'next/link';
import { SITE } from '@/data/packages';

const CAT_LABEL = {
  'char-dham':   'Char Dham Yatra',
  'do-dham':     'Do Dham Yatra',
  'single-dham': 'Single Dham',
};

/* ── Subtle shimmer pattern applied over the photo ── */
const OVERLAY = 'linear-gradient(to bottom, rgba(7,20,42,0.18) 0%, rgba(7,20,42,0.55) 60%, rgba(7,20,42,0.82) 100%)';

export default function PackageCard({ pkg }) {
  const savings = pkg.price.original - pkg.price.discounted;
  const msg = encodeURIComponent(`Namaste! I am interested in "${pkg.name}". Please share details.`);

  /* Fallback gradient if photo URL missing */
  const bgImage = pkg.photo
    ? `${OVERLAY}, url('${pkg.photo}')`
    : 'linear-gradient(135deg,#07142A 0%,#0D2748 35%,#1260CC 75%,#06B6D4 100%)';

  return (
    <article className="pkg-card" style={{
      display:'flex', flexDirection:'column',
      background:'#fff', borderRadius:14,
      overflow:'hidden', border:'1px solid var(--border)',
      boxShadow:'var(--shadow)',
    }}>

      {/* ── Image area with real photo + text overlay ── */}
      <div style={{
        height: 180,
        backgroundImage: bgImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '12px 14px',
        flexShrink: 0,
      }}>
        {/* Top row — category + badge */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
          <span style={{
            background:'rgba(255,255,255,0.18)',
            backdropFilter:'blur(6px)',
            color:'#fff',
            fontSize:10, fontWeight:600,
            padding:'4px 10px', borderRadius:20,
            letterSpacing:'0.05em',
            border:'1px solid rgba(255,255,255,0.2)',
          }}>
            {CAT_LABEL[pkg.category] || pkg.category}
          </span>
          {pkg.badge && (
            <span style={{
              background:'var(--blue)',
              color:'#fff', fontSize:10, fontWeight:700,
              padding:'4px 10px', borderRadius:20,
            }}>
              {pkg.badge}
            </span>
          )}
        </div>

        {/* Bottom — tour headline on the image */}
        <div>
          <h3 style={{
            color:'#fff',
            fontWeight:700,
            fontSize:15,
            lineHeight:1.3,
            marginBottom:4,
            textShadow:'0 1px 6px rgba(0,0,0,0.6)',
          }}>
            {pkg.name}
          </h3>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <span style={{
              color:'rgba(255,255,255,0.85)',
              fontSize:11,
              background:'rgba(0,0,0,0.3)',
              backdropFilter:'blur(4px)',
              padding:'3px 9px',
              borderRadius:12,
            }}>
              {pkg.duration.nights}N / {pkg.duration.days}D
            </span>
            <span style={{ color:'rgba(255,255,255,0.7)', fontSize:11 }}>
              📍 {pkg.startCity}
            </span>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ padding:'14px 16px', flex:1, display:'flex', flexDirection:'column' }}>

        {/* Meta chips */}
        <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:10 }}>
          <span style={{ fontSize:11, color:'var(--muted)' }}>🚌 {pkg.transport}</span>
          <span style={{ fontSize:11, color:'var(--muted)' }}>🌿 {pkg.season}</span>
          <span style={{ fontSize:11, color:'var(--muted)' }}>🎯 {pkg.difficulty}</span>
        </div>

        {/* Top 3 highlights */}
        <ul style={{ listStyle:'none', marginBottom:14, flex:1, display:'flex', flexDirection:'column', gap:5 }}>
          {pkg.highlights.slice(0,3).map((h,i) => (
            <li key={i} style={{
              fontSize:12.5, color:'var(--mid)',
              paddingLeft:14, position:'relative', lineHeight:1.45,
            }}>
              <span style={{ position:'absolute', left:0, color:'var(--cyan)', fontWeight:700 }}>✓</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Price + CTAs */}
        <div style={{
          display:'flex', alignItems:'flex-end',
          justifyContent:'space-between',
          paddingTop:12,
          borderTop:'1px solid var(--border)',
          marginTop:'auto',
        }}>
          <div>
            <div style={{ fontSize:11, color:'var(--muted)', textDecoration:'line-through' }}>
              ₹{pkg.price.original.toLocaleString('en-IN')}
            </div>
            <div style={{
              fontWeight:800, fontSize:22,
              color:'var(--blue)', lineHeight:1,
              letterSpacing:'-0.02em',
            }}>
              ₹{pkg.price.discounted.toLocaleString('en-IN')}/-
            </div>
            {savings > 0 && (
              <div style={{ fontSize:11, color:'var(--green)', fontWeight:600, marginTop:2 }}>
                Save ₹{savings.toLocaleString('en-IN')}
              </div>
            )}
            <div style={{ fontSize:10, color:'var(--muted)', marginTop:1 }}>per person</div>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
            <Link href={`/packages/${pkg.slug}`}
              className="btn-primary"
              style={{ padding:'8px 16px', fontSize:12, textAlign:'center' }}>
              View Details
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                background:'#25D366', color:'#fff',
                padding:'8px 16px', fontSize:12,
                borderRadius:10, textAlign:'center',
                fontWeight:600, textDecoration:'none',
              }}>
              Enquire
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
