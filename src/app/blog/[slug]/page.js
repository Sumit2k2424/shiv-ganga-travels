import BlogCTA from '@/components/BlogCTA';

import blogs from '@/data/blogs.json'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SITE } from '@/data/packages'

export function generateMetadata({ params }) {
  const blog = blogs.find(b => b.slug === params.slug)
  if (!blog) return { title: 'Blog | Shiv Ganga Travels' }

  // Title: keep under 60 chars — truncate at word boundary
  const rawTitle = blog.title || ''
  const title = rawTitle.length <= 57
    ? rawTitle + ' | SGT'
    : rawTitle.slice(0, 54).replace(/\s\S+$/, '') + '…'

  // Description: keep under 155 chars
  const rawDesc = blog.description || blog.content || ''
  const description = rawDesc.length <= 155
    ? rawDesc
    : rawDesc.slice(0, 152).replace(/\s\S+$/, '') + '…'

  return {
    title,
    description,
    alternates: { canonical: `${SITE.baseUrl}/blog/${blog.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE.baseUrl}/blog/${blog.slug}`,
      type: 'article',
    },
  }
}

export default function BlogPage({ params }) {
  const blog = blogs.find(b => b.slug === params.slug)

  if (!blog) {
    notFound();
  }

  const related = blogs.filter(b => b.slug !== params.slug).slice(0,3)

  return (
    <div style={{maxWidth:800,margin:'auto',padding:20,lineHeight:1.7}}>


        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />
      <h1>{blog.title}</h1>

      <p>{blog.content}</p>

      {/* CTA */}
      <div style={{marginTop:30,padding:20,background:'#f5f5f5',borderRadius:10}}>
        <h2 style={{fontSize:"1.25rem",fontWeight:600,margin:"2rem 0 0.5rem"}}>Plan Your Trip Now</h2>
        <p>Get best price, no middleman, direct booking support.</p>
        <BlogCTA variant="footer" intent="info" />
      </div>

      {/* Related Blogs */}
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
