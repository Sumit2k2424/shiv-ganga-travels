import Link from 'next/link';
import { SITE } from '@/data/packages';

const CAT_FALLBACK = {
  'char-dham':   'linear-gradient(160deg, #0F2B5B 0%, #1A3E75 50%, #0B7B8B 100%)',
  'do-dham':     'linear-gradient(160deg, #0B2C44 0%, #0B7B8B 60%, #16A993 100%)',
  'single-dham': 'linear-gradient(160deg, #1A0E3B 0%, #2D1B6E 50%, #4C3A9E 100%)',
  'helicopter':  'linear-gradient(160deg, #7B1D1D 0%, #B91C1C 60%, #F97316 100%)',
  'uttarakhand': 'linear-gradient(160deg, #14532D 0%, #15803D 60%, #16A34A 100%)',
};

const URGENCY = [
  { seats: 4,  text: '4 seats left', hot: true  },
  { seats: 6,  text: '6 seats left', hot: true  },
  { seats: 8,  text: '8 seats left', hot: false },
  { seats: 10, text: 'Filling fast', hot: false },
];
function getUrgency(slug) {
  const idx = slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % URGENCY.length;
  return URGENCY[idx];
}

const PROOF = ["2 hrs ago", "yesterday", "3 days ago", "1 day ago"];
function getProof(slug) { return PROOF[slug.length % PROOF.length]; }

function Stars() {
  return (
    <div style={{ display:"flex", gap:2 }} aria-label="5 stars">
      {[...Array(5)].map((_,i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill="#E8920A">
          <path d="M6 0l1.854 3.76 4.146.602-3 2.924.708 4.128L6 9.384l-3.708 2.03L3 7.286 0 4.362l4.146-.602z"/>
        </svg>
      ))}
    </div>
  );
}

export default function PackageCard({ pkg }) {
  const savings = pkg.price.original - pkg.price.discounted;
  const pct     = Math.round((savings / pkg.price.original) * 100);
  const fallBg  = CAT_FALLBACK[pkg.category] || CAT_FALLBACK["char-dham"];
  const urgency = getUrgency(pkg.slug);
  const proof   = getProof(pkg.slug);
  const msg     = encodeURIComponent(
    `Namaste! I am interested in "${pkg.name}" for Char Dham Yatra 2026. Please share details and availability.`
  );

  return (
    <article className="pkg-card" style={{ display:"flex", flexDirection:"column", position:"relative" }}>

      {/* Image */}
      <Link href={`/packages/${pkg.slug}`} style={{ display:"block", textDecoration:"none" }}>
        <div style={{ height:200, position:"relative", overflow:"hidden", flexShrink:0 }}>
          <div className="card-img" style={{
            position:"absolute", inset:0,
            backgroundImage: pkg.photo
              ? `linear-gradient(180deg,rgba(15,43,91,0.06) 0%,rgba(15,43,91,0.7) 100%),url('${pkg.photo}')`
              : fallBg,
            backgroundSize:"cover", backgroundPosition:"center",
          }}/>

          {/* Top badges */}
          <div style={{ position:"absolute", top:10, left:10, right:10, display:"flex", justifyContent:"space-between", zIndex:2 }}>
            <span style={{
              background: urgency.hot ? "#DC2626" : "rgba(0,0,0,0.5)",
              backdropFilter:"blur(6px)", color:"#fff",
              fontSize:10.5, fontWeight:700, padding:"4px 9px", borderRadius:7,
              display:"flex", alignItems:"center", gap:4,
            }}>
              {urgency.hot ? "🔥" : "⏳"} {urgency.text}
            </span>
            <span style={{
              background:"rgba(0,0,0,0.45)", backdropFilter:"blur(6px)",
              color:"#fff", fontSize:10.5, fontWeight:600, padding:"4px 9px", borderRadius:7,
            }}>
              {pkg.duration.nights}N / {pkg.duration.days}D
            </span>
          </div>

          {/* Savings badge */}
          {pct >= 10 && (
            <div style={{
              position:"absolute", top:10, left:"50%", transform:"translateX(-50%)",
              background:"#16A34A", color:"#fff", fontSize:10, fontWeight:800,
              padding:"3px 10px", borderRadius:100, zIndex:2, whiteSpace:"nowrap",
            }}>
              {pct}% OFF
            </div>
          )}

          {/* Name + stars overlay */}
          <div style={{
            position:"absolute", bottom:0, left:0, right:0,
            padding:"12px 14px 14px", zIndex:2,
            background:"linear-gradient(to top,rgba(15,43,91,0.95) 0%,transparent 100%)",
          }}>
            <h3 style={{
              color:"#fff", fontWeight:700, fontSize:14.5, lineHeight:1.3,
              textShadow:"0 1px 4px rgba(0,0,0,0.5)", marginBottom:5,
            }}>{pkg.name}</h3>
            <div style={{ display:"flex", alignItems:"center", gap:7 }}>
              <Stars/>
              <span style={{ fontSize:11, color:"rgba(255,255,255,0.75)" }}>
                4.9 · Last booked {proof}
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Body */}
      <div style={{ padding:"14px", flex:1, display:"flex", flexDirection:"column", gap:10 }}>

        {/* Meta chips */}
        <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
          <span className="chip">📍 {pkg.startCity}</span>
          <span className="chip">🚌 {pkg.transport.split("/")[0].trim()}</span>
          <span className="chip">🎯 {pkg.difficulty}</span>
        </div>

        {/* Highlights */}
        <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:4, flex:1 }}>
          {pkg.highlights.slice(0,3).map((h,i) => (
            <li key={i} style={{
              fontSize:12.5, color:"var(--text-mid)", lineHeight:1.5,
              paddingLeft:15, position:"relative",
            }}>
              <span style={{ position:"absolute", left:0, color:"var(--teal)", fontWeight:700, fontSize:10, top:3 }}>✓</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Season */}
        <div style={{ fontSize:11.5, color:"var(--text-muted)", borderTop:"1px solid var(--border)", paddingTop:9 }}>
          📅 {pkg.season}
        </div>

        {/* Price + CTA */}
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", gap:8 }}>
          <div>
            <div style={{ fontSize:11, color:"var(--text-muted)", textDecoration:"line-through" }}>
              ₹{pkg.price.original.toLocaleString("en-IN")}
            </div>
            <div style={{
              fontWeight:800, fontSize:22, color:"var(--navy)",
              lineHeight:1, letterSpacing:"-0.03em", fontFamily:"var(--font-display)",
            }}>
              ₹{pkg.price.discounted.toLocaleString("en-IN")}
              <span style={{ fontSize:11.5, fontWeight:500, color:"var(--text-muted)", fontFamily:"var(--font)" }}>/pp</span>
            </div>
            {savings > 0 && (
              <div style={{ fontSize:11, color:"#16A34A", fontWeight:700, marginTop:2 }}>
                ↓ Save ₹{savings.toLocaleString("en-IN")}
              </div>
            )}
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:6, flexShrink:0 }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                background:"#25D366", color:"#fff",
                padding:"9px 14px", borderRadius:8,
                fontSize:12.5, fontWeight:700,
                textDecoration:"none", textAlign:"center",
                display:"flex", alignItems:"center", justifyContent:"center", gap:5,
                boxShadow:"0 2px 8px rgba(37,211,102,0.3)",
              }}>
              💬 Book Now
            </a>
            <Link href={`/packages/${pkg.slug}`}
              style={{
                color:"var(--navy)", border:"1px solid var(--border)",
                padding:"7px 14px", borderRadius:8,
                fontSize:12, fontWeight:600, textDecoration:"none",
                textAlign:"center", background:"var(--bg)",
              }}>
              View Details →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
