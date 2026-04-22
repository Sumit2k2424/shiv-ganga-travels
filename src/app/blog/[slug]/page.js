
import blogs from '@/data/blogs.json'

export function generateMetadata({ params }) {
  const blog = blogs.find(b => b.slug === params.slug)
  return {
    title: blog?.title,
    description: blog?.content?.slice(0,150)
  }
}

export default function BlogPage({ params }) {
  const blog = blogs.find(b => b.slug === params.slug)

  if (!blog) return <div>Blog not found</div>

  return (
    <div style={{maxWidth:800,margin:'auto',padding:20,lineHeight:1.6}}>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  )
}

export async function generateStaticParams() {
  return blogs.map(blog => ({ slug: blog.slug }))
}
