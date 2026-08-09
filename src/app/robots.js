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
      // Assistants that answer travel questions but were falling through to
      // the '*' rule. Named explicitly so the grant is unambiguous and so a
      // future tightening of '*' can't silently cut off AI answer surfaces.
      { userAgent: 'Google-CloudVertexBot', allow: '/' },  // Gemini grounding
      { userAgent: 'Applebot',        allow: '/' },        // Siri / Spotlight
      { userAgent: 'Applebot-Extended', allow: '/' },      // Apple Intelligence
      { userAgent: 'Meta-ExternalAgent', allow: '/' },     // Meta AI
      { userAgent: 'meta-externalagent', allow: '/' },
      { userAgent: 'Amazonbot',       allow: '/' },        // Alexa
      { userAgent: 'DuckAssistBot',   allow: '/' },        // DuckDuckGo AI
      { userAgent: 'MistralAI-User',  allow: '/' },
      { userAgent: 'YouBot',          allow: '/' },        // You.com
      { userAgent: 'Bingbot',         allow: '/' },        // Copilot's index
    ],
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
    host: SITE.baseUrl,
  };
}
