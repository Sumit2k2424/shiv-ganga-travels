import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal from '@/components/ScrollReveal';
import BlogHero from '@/components/BlogHero';
import ReadingProgress from '@/components/ReadingProgress';
import KeyTakeaways from '@/components/KeyTakeaways';
import BlogTOC from '@/components/BlogTOC';

export const H2 = ({ id, children }) => (
  <h2 id={id} style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:28 }}>{children}</h2>
);
export const P = ({ children }) => (
  <p style={{ fontSize:16, color:'#334155', lineHeight:1.9, marginBottom:16 }}>{children}</p>
);
export const UL = ({ items }) => (
  <ul style={{ margin:'0 0 18px', paddingLeft:22, color:'#334155', fontSize:15.5, lineHeight:1.85 }}>
    {items.map((it,i) => <li key={i} style={{ marginBottom:6 }}>{it}</li>)}
  </ul>
);
export const Callout = ({ children }) => (
  <div style={{ background:'var(--navy-light)', borderLeft:'4px solid var(--gold)', borderRadius:8, padding:'14px 18px', margin:'0 0 22px', fontSize:14.5, color:'#334155', lineHeight:1.8 }}>{children}</div>
);

/**
 * GuideArticle — shared shell for long-form guide pages.
 * Keeps every guide visually identical to the hand-built ones
 * (kedarnath-yatra-complete-guide pattern) while letting each page
 * supply only its own content. Carries the E-E-A-T author byline,
 * Article + FAQPage JSON-LD, quick-facts, FAQ accordion and related links.
 */
export default function GuideArticle({
  slug,
  badge,
  title,
  subtitle,
  pills = [],
  facts = [],
  takeaways = [],
  toc = [],
  readTime,
  updated = SITE.lastUpdated,
  author = 'sumit',
  ctaIntent = 'info',
  ctaHeading = 'Plan Your Char Dham Yatra 2026 — Direct from Haridwar',
  faqs = [],
  related = [],
  children,
}) {
  const authorName = author === 'dhanesh' ? 'Dhanesh Chandra Mishra' : 'Sumit Mishra';

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: subtitle,
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2026-04-01',
    dateModified: SITE.lastUpdatedISO,
    author: {
      '@type': 'Person',
      name: author === 'dhanesh' ? 'Dhanesh Chandra Mishra' : 'Sumit Mishra',
      jobTitle: author === 'dhanesh' ? 'Founder & Director, Shiv Ganga Travels' : 'Operations Manager, Shiv Ganga Travels',
      url: `${SITE.baseUrl}/about`,
      sameAs: author === 'dhanesh' ? [] : ['https://www.linkedin.com/in/sumit-mishra-863734171/', 'https://www.facebook.com/sumi2112'],
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
      logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` },
    },
    mainEntityOfPage: `${SITE.baseUrl}/blog/${slug}`,
  };

  const faqLd = faqs.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.plain || f.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

      <ReadingProgress />

      <BlogHero
        badge={badge}
        title={title}
        dek={subtitle}
        author={authorName}
        updated={`Updated ${updated}`}
        readTime={readTime}
        facts={facts.map(([label, value]) => ({ label, value }))}
      />

      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'9px 20px' }}>
        <div className="guide-breadcrumb" style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>{title}</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        <BlogAuthor variant="top" author={author} />
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> {updated} · Verified for current season</div>

        {takeaways.length > 0 && <KeyTakeaways points={takeaways} />}
        {toc.length > 0 && <BlogTOC items={toc} />}

        <ScrollReveal>{children}</ScrollReveal>

        <BlogCTA variant="inline" intent={ctaIntent} />

        {faqs.length > 0 && (
          <ScrollReveal style={{ marginTop:36 }}>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs.map(f => ({ q: f.q, a: f.a }))} />
          </ScrollReveal>
        )}

        <ScrollReveal className="lift-hover" style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>{ctaHeading}</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>15 years · 50,000+ pilgrims · Direct operator · Zero commission · {SITE.phone}</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am planning Char Dham Yatra 2026. Please share package details.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp Us</a>
            <Link href="/packages" style={{ background:'var(--gold)', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>View Packages →</Link>
          </div>
        </ScrollReveal>

        {related.length > 0 && (
          <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:32 }}>
            <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
            <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
              {related.map(([l,h]) => (
                <Link key={h} href={h} className="guide-chip" style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'8px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
              ))}
            </div>
          </div>
        )}

        <BlogCTA variant="footer" intent={ctaIntent} />
      </article>
    </>
  );
}
