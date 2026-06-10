import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import blogs from '@/data/blogs.json'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SITE } from '@/data/packages'

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug)
  if (!blog) return { title: 'Blog | Shiv Ganga Travels' }

  const rawTitle = blog.title || ''
  const title = rawTitle.length <= 57
    ? rawTitle + ' | SGT'
    : rawTitle.slice(0, 54).replace(/\s\S+$/, '') + '…'

  const rawDesc = blog.description || blog.content || ''
  const description = rawDesc.length <= 155
    ? rawDesc
    : rawDesc.slice(0, 152).replace(/\s\S+$/, '') + '…'

  return {
    title,
    description,
    alternates: { canonical: `${SITE.baseUrl}/blog/${blog.slug}` },
    openGraph: { title, description, url: `${SITE.baseUrl}/blog/${blog.slug}`, type: 'article' },
  }
}

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Blog',
    description: '',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2025-01-01',
    dateModified: '2026-05-21',
    author: {
      '@type': 'Person',
      name: 'Sumit Mishra',
      jobTitle: 'Co-Founder & Co-Founder & Operations Manager, Shiv Ganga Travels',
      url: `${SITE.baseUrl}/about`,
      sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/', 'https://www.facebook.com/sumi2112'],
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
      logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` },
    },
    mainEntityOfPage: `${SITE.baseUrl}/blog/[slug]`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />;
}


export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug)
  if (!blog) notFound();

  const related = blogs.filter(b => b.slug !== slug).slice(0, 3)

  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20, lineHeight: 1.7 }}>

      <h1>{blog.title}</h1>

      <p>{blog.content}</p>

      {/* Mid-article CTA */}
      <BlogCTA variant="inline" intent="info" />

      {/* Footer booking CTA */}
      <BlogCTA variant="footer" intent="info" />

      {/* Related Guides */}
      <div style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', margin: '0 0 12px' }}>Related Guides</h2>
        {related.map(r => (
          <div key={r.slug} style={{ marginBottom: 6 }}>
            <Link href={`/blog/${r.slug}`} style={{ color: 'var(--teal)', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>{r.title} →</Link>
          </div>
        ))}
      </div>

    </div>
  )
}

export async function generateStaticParams() {
  return blogs.map(blog => ({ slug: blog.slug }))
}
