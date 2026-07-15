import Link from 'next/link';
import { SITE } from '@/data/packages';

/**
 * BlogAuthor — E-E-A-T author byline for all blog posts
 * variant: 'top' (compact, above article) | 'bottom' (full bio card, after article)
 */
export default function BlogAuthor({ variant = 'top', author = 'sumit', article = null }) {
  // article: { slug, title, description, datePublished, dateModified } — when
  // provided on the 'top' variant, emits BlogPosting JSON-LD so every post gets
  // Article rich-result eligibility + clear freshness signals for AI crawlers.

  const authors = {
    sumit: {
      name: 'Sumit Mishra',
      role: 'Operations Manager & Content Lead, Shiv Ganga Travels',
      bio: `Sumit Mishra manages day-to-day operations at Shiv Ganga Travels and has personally accompanied pilgrim groups on the Char Dham circuit since 2015. He handles route planning, hotel pre-blocking during peak season, and yatra coordination for 500+ pilgrims annually. Everything published on this site is written from first-hand experience on these routes.`,
      credentials: [
        '10+ years on Char Dham routes',
        '500+ pilgrim groups coordinated',
        'Native Uttarakhand — Haridwar based',
      ],
      linkedin: 'https://www.linkedin.com/in/sumit-mishra-863734171/',
      facebook: 'https://www.facebook.com/sumi2112',
      initials: 'SM',
    },
    dhanesh: {
      name: 'Dhanesh Chandra Mishra',
      role: 'Founder & Director, Shiv Ganga Travels',
      bio: `Dhanesh Chandra Mishra is a retired Indian Army officer who founded Shiv Ganga Travels in Roorkee, Uttarakhand in 2010. His military background — precision, accountability, zero tolerance for shortcuts — defines how the company operates. He has personally driven the Kedarnath and Badrinath routes hundreds of times and remains actively involved in every yatra season.`,
      credentials: [
        'Retired Indian Army Officer',
        'Founded Shiv Ganga Travels 2010',
        '50,000+ pilgrims served',
        '15 seasons on Char Dham routes',
      ],
      linkedin: null,
      facebook: null,
      initials: 'DM',
    },
  };

  const a = authors[author] || authors.sumit;

  if (variant === 'top') {
    const posting = article && article.slug && article.title ? {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${SITE.baseUrl}/blog/${article.slug}#article`,
      headline: article.title,
      description: article.description || undefined,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.baseUrl}/blog/${article.slug}` },
      url: `${SITE.baseUrl}/blog/${article.slug}`,
      image: [`${SITE.baseUrl}/opengraph-image`],
      inLanguage: article.lang || 'en-IN',
      datePublished: article.datePublished || '2025-08-15',
      dateModified: article.dateModified || '2026-06-20',
      author: {
        '@type': 'Person',
        name: a.name,
        jobTitle: a.role,
        url: a.linkedin || SITE.baseUrl,
        worksFor: { '@id': `${SITE.baseUrl}/#organization` },
      },
      publisher: { '@id': `${SITE.baseUrl}/#organization` },
    } : null;
    return (
      <>
      {posting && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(posting) }}/>}
      <div style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 0', borderBottom:'1px solid var(--border)', marginBottom:24 }}>
        <div style={{ width:40, height:40, borderRadius:'50%', background:'var(--navy)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontWeight:800, fontSize:14, color:'#FFD166' }}>
          {a.initials}
        </div>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
            <span style={{ fontWeight:700, fontSize:14, color:'var(--navy)' }}>{a.name}</span>
            {a.linkedin && (
              <a href={a.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${a.name} on LinkedIn`}
                style={{ display:'inline-flex', alignItems:'center', gap:3, fontSize:11.5, color:'#0A66C2', textDecoration:'none', fontWeight:600 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            )}
            {a.facebook && (
              <a href={a.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${a.name} on Facebook`}
                style={{ display:'inline-flex', alignItems:'center', gap:3, fontSize:11.5, color:'#1877F2', textDecoration:'none', fontWeight:600 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
            )}
          </div>
          <div style={{ fontSize:12.5, color:'var(--text-muted)', marginTop:2 }}>{a.role}</div>
        </div>
        <div style={{ fontSize:11.5, color:'var(--text-muted)', textAlign:'right', flexShrink:0 }}>
          <Link href="/about" style={{ color:'var(--teal)', textDecoration:'none', fontWeight:600 }}>About us →</Link>
        </div>
      </div>
      </>
    );
  }

  // variant === 'bottom'
  return (
    <div style={{ background:'var(--navy-light)', border:'1px solid var(--border)', borderRadius:14, padding:'20px 22px', marginTop:36 }}
      itemScope itemType="https://schema.org/Person">
      <div style={{ display:'flex', gap:16, alignItems:'flex-start', flexWrap:'wrap' }}>
        <div style={{ width:56, height:56, borderRadius:'50%', background:'var(--navy)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontWeight:800, fontSize:18, color:'#FFD166' }}>
          {a.initials}
        </div>
        <div style={{ flex:'1 1 200px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap', marginBottom:4 }}>
            <strong style={{ fontSize:15.5, color:'var(--navy)' }} itemProp="name">{a.name}</strong>
            {a.linkedin && (
              <a href={a.linkedin} target="_blank" rel="noopener noreferrer" itemProp="sameAs"
                style={{ display:'inline-flex', alignItems:'center', gap:4, fontSize:12, color:'#0A66C2', textDecoration:'none', fontWeight:600, background:'rgba(10,102,194,0.08)', padding:'3px 10px', borderRadius:20 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            )}
            {a.facebook && (
              <a href={a.facebook} target="_blank" rel="noopener noreferrer" itemProp="sameAs"
                style={{ display:'inline-flex', alignItems:'center', gap:4, fontSize:12, color:'#1877F2', textDecoration:'none', fontWeight:600, background:'rgba(24,119,242,0.08)', padding:'3px 10px', borderRadius:20 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
            )}
          </div>
          <div style={{ fontSize:13, color:'var(--text-muted)', marginBottom:8 }} itemProp="jobTitle">{a.role}</div>
          <p style={{ fontSize:14, color:'#334155', lineHeight:1.75, margin:'0 0 10px' }} itemProp="description">{a.bio}</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
            {a.credentials.map(c => (
              <span key={c} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:6, fontSize:12, color:'var(--navy)', padding:'3px 10px', fontWeight:600 }}>✓ {c}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
