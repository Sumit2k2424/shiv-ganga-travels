
import blogs from '@/data/blogs.json'
import Link from 'next/link'

export default function BlogListing() {
  return (
    <div style={{maxWidth:900,margin:'auto',padding:20}}>
      <h1>Travel Blogs</h1>

      <div style={{marginBottom:20,padding:15,background:'#fff3cd',borderRadius:10}}>
        <strong>Planning Kedarnath or Char Dham?</strong>
        <p>Get best packages with direct booking.</p>
        <a href="https://wa.me/917017082807" target="_blank">
          <button style={{padding:'10px 20px',background:'green',color:'#fff',border:'none',borderRadius:5}}>
            Get Quote on WhatsApp
          </button>
        </a>
      </div>

      {blogs.map(blog => (
        <div key={blog.slug} style={{marginBottom:20}}>
          <h2>
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </h2>
          <p>{blog.content.slice(0,120)}...</p>
        </div>
      ))}
    </div>
  )
}
