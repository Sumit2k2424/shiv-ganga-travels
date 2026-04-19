import Link from 'next/link';
import { SITE } from '@/data/packages';

const CAT_FALLBACK = {
  'char-dham':   'linear-gradient(160deg, #0F2B5B 0%, #1A3E75 50%, #0B7B8B 100%)',
  'do-dham':     'linear-gradient(160deg, #0B2C44 0%, #0B7B8B 60%, #16A993 100%)',
  'single-dham': 'linear-gradient(160deg, #1A0E3B 0%, #2D1B6E 50%, #4C3A9E 100%)',
};

/* ── Star rating ── */
function Stars({ n = 5 }) {
  return (
    <div style={{ display:'flex', gap:2 }}>
      {[...Array(n)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#E8920A">
          <path d="M6 0l1.854 3.76 4.146.602-3 2.924.708 4.128L6 9.384l-3.708 2.03L3 7.286 0 4.362l4.146-.602z"/>
        </svg>
      ))}
    </div>
  );
}

export default function PackageCard({ pkg }) {
  const savings = pkg.price.original - pkg.price.discounted;
  const fallBg  = CAT_FALLBACK[pkg.category] || CAT_FALLBACK['char-dham'];
  const msg = encodeURIComponent(`Namaste! I am interested in "${pkg.name}". Please share details and availability.`);

  return (
    <article className="pkg-card" style={{ display:'flex', flexDirection:'column' }}>

      {/* ── Image area ─────────────────────────────── */}
      <div style={{ height:200, position:'relative', overflow:'hidden', flexShrink:0 }}>
        <div className="card-img" style={{
          position:'absolute', inset:0,
          backgroundImage: pkg.photo
            ? `linear-gradient(180deg, rgba(15,43,91,0.08) 0%, rgba(15,43,91,0.65) 100%), url('${pkg.photo}')`
            : fallBg,
          backgroundSize:'cover', backgroundPosition:'center',
        }}/>

        {/* Badges top row */}
        <div style={{ position:'absolute', top:12, left:12, right:12, display:'flex', justifyContent:'space-between', zIndex:2 }}>
          {pkg.badge
            ? <span className="badge badge-gold">{pkg.badge}</span>
            : <span/>
          }
          <span style={{
            background:'rgba(0,0,0,0.45)', backdropFilter:'blur(6px)',
            color:'#fff', fontSize:11, fontWeight:600,
            padding:'4px 10px', borderRadius:8, letterSpacing:'0.02em',
          }}>{pkg.duration.nights}N / {pkg.duration.days}D</span>
        </div>

        {/* Tour name overlaid on image — Traveler theme style */}
        <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'14px 16px 16px', zIndex:2,
          background:'linear-gradient(to top, rgba(15,43,91,0.9) 0%, transparent 100%)',
        }}>
          <h3 style={{
            color:'#fff', fontWeight:700, fontSize:15, lineHeight:1.3,
            textShadow:'0 1px 4px rgba(0,0,0,0.5)',
          }}>{pkg.name}</h3>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:4 }}>
            <Stars/>
            <span style={{ fontSize:11, color:'rgba(255,255,255,0.7)' }}>5.0 · 200+ reviews</span>
          </div>
        </div>
      </div>

      {/* ── Content ─────────────────────────────────── */}
      <div style={{ padding:'16px', flex:1, display:'flex', flexDirection:'column', gap:12 }}>

        {/* Meta chips */}
        <div style={{ display:'flex', gap:7, flexWrap:'wrap' }}>
          <span className="chip">📍 {pkg.startCity}</span>
          <span className="chip">🚌 {pkg.transport}</span>
          <span className="chip">🎯 {pkg.difficulty}</span>
        </div>

        {/* Top 3 highlights */}
        <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:5, flex:1 }}>
          {pkg.highlights.slice(0,3).map((h,i) => (
            <li key={i} style={{
              fontSize:12.5, color:'var(--text-mid)', lineHeight:1.5,
              paddingLeft:16, position:'relative',
            }}>
              <span style={{ position:'absolute', left:0, color:'var(--teal)', fontWeight:700, fontSize:11, top:2 }}>✓</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Season */}
        <div style={{ fontSize:11.5, color:'var(--text-muted)', borderTop:'1px solid var(--border)', paddingTop:10 }}>
          📅 {pkg.season}
        </div>

        {/* Price + CTAs */}
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between' }}>
          <div>
            <div style={{ fontSize:11, color:'var(--text-muted)', textDecoration:'line-through' }}>
              ₹{pkg.price.original.toLocaleString('en-IN')}
            </div>
            <div style={{
              fontWeight:800, fontSize:24, color:'var(--navy)',
              lineHeight:1, letterSpacing:'-0.03em',
              fontFamily:'var(--font-display)',
            }}>
              ₹{pkg.price.discounted.toLocaleString('en-IN')}
              <span style={{ fontSize:12, fontWeight:500, color:'var(--text-muted)', fontFamily:'var(--font)' }}>/pp</span>
            </div>
            {savings > 0 && (
              <div style={{ fontSize:11, color:'var(--green)', fontWeight:600, marginTop:2 }}>
                ↓ Save ₹{savings.toLocaleString('en-IN')}
              </div>
            )}
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
            <Link href={`/packages/${pkg.slug}`}
              className="btn btn-navy"
              style={{ padding:'8px 16px', fontSize:12 }}>
              View Details
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                background:'#25D366', color:'#fff', padding:'8px 16px',
                borderRadius:'var(--r-sm)', fontSize:12, fontWeight:600,
                textDecoration:'none', textAlign:'center', display:'block',
                transition:'all .2s',
              }}>
              💬 Enquire
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
