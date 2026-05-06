
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

      <h1>{blog.title}</h1>

      <p>{blog.content}</p>

      {/* CTA */}
      <div style={{marginTop:30,padding:20,background:'#f5f5f5',borderRadius:10}}>
        <h3>Plan Your Trip Now</h3>
        <p>Get best price, no middleman, direct booking support.</p>
        <a href="https://wa.me/917017082807" target="_blank" rel="nofollow noopener noreferrer">
          <button style={{padding:'10px 20px',background:'green',color:'#fff',border:'none',borderRadius:5}}>
            WhatsApp Now
          </button>
        </a>
      </div>

      {/* Related Blogs */}
      <div style={{marginTop:40}}>
        <h3>Related Blogs</h3>
        {related.map(r => (
          <div key={r.slug}>
            <Link href={`/blog/${r.slug}`}>{r.title}</Link>
          </div>
        ))}
      </div>

    </div>
  )
}

export async function generateStaticParams() {
  return blogs.map(blog => ({ slug: blog.slug }))
}
