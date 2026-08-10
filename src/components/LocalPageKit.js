// Shared presentational pieces for the local Haridwar pages.
// Chrome only — every page supplies its own content. If two pages using this
// kit ever end up saying the same thing, the problem is the content, not the
// kit: merge them instead of shipping near-duplicates.

import Link from 'next/link';
import { SITE } from '@/data/packages';

export const H2 = ({ children }) => (
  <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:36 }}>
    {children}
  </h2>
);

export const P = ({ children }) => (
  <p style={{ fontSize:15, lineHeight:1.85, color:'var(--text-mid)', marginBottom:14 }}>{children}</p>
);

export const LI = ({ children }) => (
  <li style={{ fontSize:15, lineHeight:1.85, color:'var(--text-mid)', marginBottom:9 }}>{children}</li>
);

export function Hero({ eyebrow, title, children }) {
  return (
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
      <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
        {eyebrow && (
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            {eyebrow}
          </span>
        )}
        <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
          {title}
        </h1>
        <p style={{ color:'rgba(255,255,255,0.82)', fontSize:15.5, lineHeight:1.75, maxWidth:700, margin:'0 auto' }}>
          {children}
        </p>
      </div>
    </section>
  );
}

export function Crumbs({ trail }) {
  return (
    <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link>
        {trail.map(([label, href], i) => (
          <span key={label} style={{ display:'contents' }}>
            <span>›</span>
            {href && i < trail.length - 1
              ? <Link href={href} style={{ color:'var(--text-muted)', textDecoration:'none' }}>{label}</Link>
              : <span style={{ color:'var(--navy)', fontWeight:600 }}>{label}</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}

export const Updated = () => (
  <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>
    🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
  </div>
);

// Quick-facts grid — the block AI engines lift most readily.
export function FactGrid({ facts }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(210px,1fr))', gap:12, marginBottom:8 }}>
      {facts.filter(Boolean).map(([label, value]) => (
        <div key={label} style={{ background:'var(--bg)', border:'1px solid var(--border)', borderRadius:11, padding:'13px 15px' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)', marginBottom:5 }}>{label}</div>
          <div style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.65 }}>{value}</div>
        </div>
      ))}
    </div>
  );
}

export function Table({ head, rows }) {
  return (
    <div style={{ overflowX:'auto', marginBottom:10 }}>
      <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:480 }}>
        <thead><tr style={{ background:'var(--navy-light)' }}>
          {head.map(h => (
            <th key={h} style={{ padding:'10px', textAlign:'left', color:'var(--navy)', fontWeight:700, fontSize:11.5 }}>{h}</th>
          ))}
        </tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom:'1px solid var(--border)' }}>
              {r.map((c, j) => (
                <td key={j} style={{ padding:'9px 10px', color:j===0?'var(--navy)':'var(--text-muted)', fontWeight:j===0?600:400 }}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Note({ tone = 'info', title, children }) {
  const palette = {
    info : { bg:'var(--navy-light)', border:'transparent',  text:'var(--text-mid)', head:'var(--navy)' },
    warn : { bg:'#FFF7ED',           border:'#FDBA74',      text:'#9A3412',        head:'#9A3412'     },
    good : { bg:'#F0FDF4',           border:'#86EFAC',      text:'#166534',        head:'#15803D'     },
    alert: { bg:'#FEF2F2',           border:'#FCA5A5',      text:'#7F1D1D',        head:'#991B1B'     },
  }[tone];
  return (
    <div style={{ background:palette.bg, border:`1px solid ${palette.border}`, borderRadius:12, padding:'16px 19px', marginBottom:14 }}>
      {title && <div style={{ fontWeight:700, fontSize:14.5, color:palette.head, marginBottom:8 }}>{title}</div>}
      <div style={{ fontSize:14.5, color:palette.text, lineHeight:1.8 }}>{children}</div>
    </div>
  );
}

export function FAQBlock({ faqs }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
      {faqs.map(f => (
        <details key={f.q} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:11, overflow:'hidden' }}>
          <summary style={{ padding:'14px 17px', cursor:'pointer', listStyle:'none', fontWeight:700, fontSize:14.5, color:'var(--navy)' }}>
            {f.q}
          </summary>
          <div style={{ padding:'0 17px 15px', fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8 }}>{f.a}</div>
        </details>
      ))}
    </div>
  );
}

export function Sources({ items }) {
  return (
    <div style={{ background:'var(--bg)', border:'1px solid var(--border)', borderRadius:12, padding:'16px 18px', marginTop:32 }}>
      <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:9 }}>Sources &amp; official references</div>
      <ul style={{ paddingLeft:18, margin:0 }}>
        {items.map(([label, href]) => (
          <li key={href} style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.7, marginBottom:5 }}>
            <a href={href} target="_blank" rel="noopener noreferrer" style={{ color:'var(--teal)' }}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CTA({ title, blurb, waMessage }) {
  return (
    <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:32 }}>
      <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>{title}</h3>
      <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:20 }}>{blurb}</p>
      <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
        <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(waMessage)}`}
          target="_blank" rel="nofollow noopener noreferrer"
          style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>
          💬 WhatsApp Us
        </a>
        <a href="tel:+917817996730"
          style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>
          📞 {SITE.phone}
        </a>
      </div>
    </div>
  );
}

export function Related({ links }) {
  return (
    <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
      <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Pages</div>
      <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
        {links.map(([label, href]) => (
          <Link key={href} href={href} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>
            {label} →
          </Link>
        ))}
      </div>
    </div>
  );
}

export const Article = ({ children }) => (
  <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>{children}</article>
);

// Schema builders — every local page gets the same four blocks.
export function buildSchema({ slug, name, description, geo, faqs, crumbs, published = '2026-08-10', types }) {
  const out = [];
  if (faqs?.length) {
    out.push({
      '@context':'https://schema.org', '@type':'FAQPage',
      mainEntity: faqs.map(f => ({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })),
    });
  }
  if (types) {
    out.push({
      '@context':'https://schema.org',
      '@type': types,
      '@id': `${SITE.baseUrl}/${slug}#place`,
      name, description,
      address:{ '@type':'PostalAddress', addressLocality:'Haridwar', addressRegion:'Uttarakhand', addressCountry:'IN' },
      ...(geo ? { geo:{ '@type':'GeoCoordinates', latitude:geo[0], longitude:geo[1] } } : {}),
      isAccessibleForFree:true,
      publicAccess:true,
    });
  }
  out.push({
    '@context':'https://schema.org', '@type':'Article',
    headline:name, description,
    author:{ '@id': `${SITE.baseUrl}/#founder` },
    publisher:{ '@id': `${SITE.baseUrl}/#organization` },
    datePublished:published, dateModified:SITE.lastUpdatedISO,
    mainEntityOfPage:`${SITE.baseUrl}/${slug}`,
  });
  out.push({
    '@context':'https://schema.org', '@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      ...crumbs.map((c, i) => ({ '@type':'ListItem', position:i+2, name:c[0], item:`${SITE.baseUrl}${c[1]}` })),
    ],
  });
  return out;
}

export const SchemaBlocks = ({ blocks }) => (
  <>
    {blocks.map((b, i) => (
      <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }}/>
    ))}
  </>
);
