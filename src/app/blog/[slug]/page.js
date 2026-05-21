import BlogCTA from '@/components/BlogCTA';
import blogs from '@/data/blogs.json'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SITE } from '@/data/packages'

export function generateMetadata({ params }) {
  const blog = blogs.find(b => b.slug === params.slug)
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

export default function BlogPage({ params }) {
  const blog = blogs.find(b => b.slug === params.slug)
  if (!blog) notFound();

  const related = blogs.filter(b => b.slug !== params.slug).slice(0, 3)

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
