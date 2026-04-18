import Link from 'next/link';
import { SITE } from '@/data/packages';

const ICONS = { kedarnath:'🏔️', badrinath:'🕌', yamunotri:'🌊', gangotri:'🌿', helicopter:'🚁' };

const CAT_GRADIENT = {
  'char-dham':   'linear-gradient(135deg,#07142A 0%,#0D2748 40%,#1260CC 80%,#06B6D4 100%)',
  'do-dham':     'linear-gradient(135deg,#0A2342 0%,#1260CC 60%,#0891B2 100%)',
  'single-dham': 'linear-gradient(135deg,#07142A 0%,#0D4A9F 50%,#06B6D4 100%)',
};

export default function PackageCard({ pkg }) {
  const icon  = ICONS[pkg.images?.[0]] || '🙏';
  const icon2 = ICONS[pkg.images?.[1]] || '';
  const savings = pkg.price.original - pkg.price.discounted;
  const msg = encodeURIComponent(`Namaste! I am interested in "${pkg.name}". Please share details.`);
  const grad = CAT_GRADIENT[pkg.category] || CAT_GRADIENT['char-dham'];

  return (
    <article className="pkg-card" style={{ display:'flex', flexDirection:'column', background:'#fff', border:'1px solid var(--border)', overflow:'hidden' }}>
      {/* Image area — gradient + emoji icons */}
      <div style={{ height:164, background:grad, display:'flex', alignItems:'center', justifyContent:'center', gap:14, fontSize:46, position:'relative', flexShrink:0 }}>
        {/* Subtle shimmer overlay */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(255,255,255,0.05) 0%,rgba(255,255,255,0) 60%)' }} />
        <span style={{ position:'relative' }}>{icon}</span>
        {icon2 && <span style={{ position:'relative' }}>{icon2}</span>}

        {/* Badge */}
        {pkg.badge && (
          <span style={{ position:'absolute', top:12, left:12, background:'var(--blue)', color:'#fff', fontSize:10, fontWeight:700, padding:'4px 10px', borderRadius:20, letterSpacing:'0.03em' }}>
            {pkg.badge}
          </span>
        )}
        {/* Duration chip */}
        <span style={{ position:'absolute', top:12, right:12, background:'rgba(255,255,255,0.18)', color:'#fff', fontSize:10, fontWeight:600, padding:'4px 10px', borderRadius:20, backdropFilter:'blur(4px)' }}>
          {pkg.duration.nights}N/{pkg.duration.days}D
        </span>
      </div>

      {/* Content */}
      <div style={{ padding:'16px', flex:1, display:'flex', flexDirection:'column' }}>
        {/* Meta */}
        <div style={{ display:'flex', gap:8, marginBottom:6, flexWrap:'wrap' }}>
          <span style={{ fontSize:11, color:'var(--muted)', display:'flex', alignItems:'center', gap:3 }}>📍 {pkg.startCity}</span>
          <span style={{ fontSize:11, color:'var(--muted)', display:'flex', alignItems:'center', gap:3 }}>🚌 {pkg.transport}</span>
        </div>

        {/* Name */}
        <h3 style={{ fontWeight:700, fontSize:15, color:'var(--text)', marginBottom:4, lineHeight:1.35, flex:1 }}>
          {pkg.name}
        </h3>
        <p style={{ fontSize:12, color:'var(--muted)', marginBottom:10 }}>{pkg.season}</p>

        {/* Highlights */}
        <ul style={{ listStyle:'none', marginBottom:14, display:'flex', flexDirection:'column', gap:4 }}>
          {pkg.highlights.slice(0,3).map((h,i) => (
            <li key={i} style={{ fontSize:12, color:'var(--mid)', paddingLeft:14, position:'relative', lineHeight:1.4 }}>
              <span style={{ position:'absolute', left:0, color:'var(--cyan)', fontWeight:700 }}>✓</span>{h}
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div style={{ borderTop:'1px solid var(--border)', paddingTop:12, marginTop:'auto', display:'flex', alignItems:'flex-end', justifyContent:'space-between' }}>
          <div>
            <div style={{ fontSize:11, color:'var(--muted)', textDecoration:'line-through' }}>₹{pkg.price.original.toLocaleString('en-IN')}</div>
            <div style={{ fontWeight:700, fontSize:22, color:'var(--blue)', lineHeight:1 }}>₹{pkg.price.discounted.toLocaleString('en-IN')}/-</div>
            {savings > 0 && <div style={{ fontSize:11, color:'var(--green)', fontWeight:600, marginTop:2 }}>Save ₹{savings.toLocaleString('en-IN')}</div>}
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            <Link href={`/packages/${pkg.slug}`} className="btn-primary" style={{ padding:'7px 16px', fontSize:12, textAlign:'center' }}>
              View Details
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'7px 16px', fontSize:12, borderRadius:10, textAlign:'center', fontWeight:600, textDecoration:'none', transition:'opacity .15s' }}>
              Enquire
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
