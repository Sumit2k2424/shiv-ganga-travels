import { SITE } from '@/data/packages';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /opengraph-image is a generated PNG, not a page. Google was crawling
        // it (and its ?hash variant) as HTML and filing both under
        // "Crawled - currently not indexed" — pure wasted crawl budget.
        disallow: ['/api/', '/_next/', '/static/', '/ui-kit', '/opengraph-image'],
      },
      { userAgent: 'Googlebot',       allow: '/' },
      { userAgent: 'GPTBot',          allow: '/' },
      { userAgent: 'OAI-SearchBot',   allow: '/' },
      { userAgent: 'ChatGPT-User',    allow: '/' },
      { userAgent: 'ClaudeBot',       allow: '/' },
      { userAgent: 'Claude-Web',      allow: '/' },
      { userAgent: 'anthropic-ai',    allow: '/' },
      { userAgent: 'PerplexityBot',   allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'Google-Extended',  allow: '/' },
      { userAgent: 'CCBot',           allow: '/' },
      { userAgent: 'cohere-ai',       allow: '/' },
      { userAgent: 'GoogleOther',     allow: '/' },
    ],
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
    host: SITE.baseUrl,
  };
}
