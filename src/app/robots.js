import { SITE } from '@/data/packages';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
      { userAgent: 'Googlebot',       allow: '/' },
      { userAgent: 'GPTBot',          allow: '/' },
      { userAgent: 'Claude-Web',      allow: '/' },
      { userAgent: 'PerplexityBot',   allow: '/' },
      { userAgent: 'anthropic-ai',    allow: '/' },
      { userAgent: 'CCBot',           allow: '/' },
      { userAgent: 'ChatGPT-User',    allow: '/' },
      { userAgent: 'cohere-ai',       allow: '/' },
      { userAgent: 'GoogleOther',     allow: '/' },
    ],
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
    host: SITE.baseUrl,
  };
}
