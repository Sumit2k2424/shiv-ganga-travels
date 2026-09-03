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

      // ── Denied: crawlers that cost origin transfer and return nothing ──
      // Every page pull here is ~240 KB out of Vercel Compute, against a 10 GB
      // Fast Origin Transfer cap on Hobby. These three send no customers: the
      // audience is Char Dham yatris booking from India, and none of these
      // feeds a search or answer surface those people use.
      //
      // PetalBot   — Huawei Petal Search. No meaningful Indian search share.
      // Baiduspider— Baidu. Chinese-market index; not a source of yatra bookings.
      // AhrefsBot  — third-party SEO backlink index. Crawls the whole site to
      //              sell the data; nothing about it helps this site rank.
      //
      // AhrefsSiteAudit is deliberately NOT blocked — that is the crawler our
      // own Ahrefs site audits use, and it only runs when we trigger it.
      //
      // robots.txt is voluntary. All three publicly honour it, but if the
      // Observability bot table still shows them in a week, the next step is a
      // Vercel Firewall rule, which actually enforces.
      { userAgent: 'PetalBot',    disallow: '/' },
      { userAgent: 'Baiduspider', disallow: '/' },
      { userAgent: 'AhrefsBot',   disallow: '/' },
    ],
    // Both sitemaps are listed. The news sitemap is a different pipeline with a
    // rolling two-day window (see src/app/news-sitemap.xml/route.js) — it is
    // usually empty, which is valid and expected, and it must never be merged
    // into the main sitemap.
    sitemap: [
      `${SITE.baseUrl}/sitemap.xml`,
      `${SITE.baseUrl}/news-sitemap.xml`,
    ],
    host: SITE.baseUrl,
  };
}
