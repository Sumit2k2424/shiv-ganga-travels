import { redirect } from 'next/navigation';

// Canonical content lives at /blog/kedarnath-yatra-complete-guide
// This slug (kedarnath-yatra-guide) was referenced in sitemap — 301 redirect preserves SEO value
export default function Page() {
  redirect('/blog/kedarnath-yatra-complete-guide');
}
