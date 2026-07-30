import BlogReveal from '@/components/BlogReveal';

// Wraps every /blog route (index + all posts). Mounts the scroll-reveal
// enhancer once so each page's premium blocks animate in as they enter view.
export default function BlogLayout({ children }) {
  return (
    <>
      {children}
      <BlogReveal />
    </>
  );
}
