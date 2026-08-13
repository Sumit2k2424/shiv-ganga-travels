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
  author = 'dhanesh',
  ctaIntent = 'info',
  faqs = [],
  related = [],
  children,
}) {
  const authorName = author === 'sumit' ? 'Sumit Mishra' : 'Dhanesh Chandra Mishra';

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: subtitle,
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2026-04-01',
    dateModified: SITE.lastUpdatedISO,
    // Same canonical @ids as BlogAuthor and /about, so a guide byline resolves
    // to the one existing Person node rather than minting a fresh anonymous one.
    author: author === 'sumit' ? {
      '@type': 'Person',
      '@id': `${SITE.baseUrl}/about#sumit-mishra`,
      name: 'Sumit Mishra',
      jobTitle: 'Operations Manager, Shiv Ganga Travels',
      url: `${SITE.baseUrl}/about`,
      sameAs: ['https://www.facebook.com/sumi2112'],
    } : {
      '@type': 'Person',
      '@id': `${SITE.baseUrl}/#founder`,
      name: 'Dhanesh Chandra Mishra',
      jobTitle: 'Founder & Director, Shiv Ganga Travels',
      url: `${SITE.baseUrl}/about`,
      sameAs: ['https://www.linkedin.com/in/dhanesh-chandra-635564429/'],
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
