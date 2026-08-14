import { SITE } from '@/data/packages';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // NOTE: /opengraph-image is deliberately NOT disallowed here.
        // It is a generated PNG, not a page, and Google was filing it (plus its
        // ?hash variant) under "Crawled - currently not indexed". Blocking it in
        // robots.txt fixed the wrong layer: every page's og:image and
        // twitter:image point at /opengraph-image, and the social crawlers that
        // build link previews — facebookexternalhit (Facebook + WhatsApp),
        // Twitterbot, LinkedInBot, Slackbot — all match this '*' group and obey
        // robots.txt, so the disallow silently killed link-preview images.
        // Googlebot was unaffected: it matches its own group below, which has no
        // disallow. Since WhatsApp is a primary channel here, the image must stay
        // fetchable. Keeping it out of the index is now handled by an
        // `X-Robots-Tag: noindex` response header on that route (next.config.js),
        // which lets crawlers fetch the bytes while refusing to index them.
        disallow: ['/api/', '/_next/', '/static/', '/ui-kit'],
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
