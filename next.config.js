/** @type {import('next').NextConfig} */

// Disable Next.js anonymous telemetry
process.env.NEXT_TELEMETRY_DISABLED = '1';

// Single source of truth for 301 redirects, shared with src/app/sitemap.js so
// the sitemap can never list a URL that redirects. See src/data/redirects.js.
const { REDIRECTS } = require('./src/data/redirects');

const nextConfig = {
  staticPageGenerationTimeout: 180,

  // Next.js 16 enables Turbopack by default. An empty turbopack config tells
  // Next which builder to use and silences the "webpack config + no turbopack
  // config" build error. The webpack() block below is still honored whenever
  // the build runs under webpack (e.g. `next build --webpack`).
  turbopack: {},

  // Pin the workspace root to this project so Next.js doesn't pick up a
  // stray parent-directory lockfile (e.g. C:\Users\sumit\package-lock.json).
  outputFileTracingRoot: __dirname,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      // Reel posters. Serving them through next/image keeps the request
      // same-origin, so `img-src 'self'` in the CSP still covers it and
      // YouTube never sees a visitor who has not pressed play.
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },

  compress: true,
  poweredByHeader: false,

  // Reduce JS bundle size — tree-shake large barrel packages.
  // Only list packages that expose a barrel (index) file; react/react-dom
  // and next/* are NOT barrels and don't belong here.
  experimental: {
    optimizePackageImports: [
      'lucide-react',
    ],
    // Inline the page's CSS into the HTML instead of three render-blocking
    // <link rel=stylesheet> requests (13 Sep 2026). On PageSpeed's throttled
    // mobile those three files cost ~1.7 s before first paint — the largest
    // remaining item after the content-visibility fix.
    //
    // Measured cost, not estimated: Next inlines the CSS TWICE — once as a
    // <style> in <head> and again inside the RSC flight payload — so the
    // homepage HTML went 486 KB -> 946 KB raw, 84 KB -> 179 KB gzip. That is
    // ~+95 KB per page view and ~+33 MB of edge-cache fill per deploy across
    // 346 pages. Sumit chose it knowingly against the origin-transfer cap
    // ([[vercel-origin-transfer]] in memory), so batch deploys rather than
    // pushing single-line changes. `optimizeCss` (critters) was tried first
    // and does nothing for App Router pages.
    //
    // Turned OFF on 17 Sep 2026. Measured in the build: the CSS bundle is 228 KB,
    // and inlining it (twice) made the average page 623 KB — 237 KB of <style>
    // plus its copy in the flight payload — against 187 KB on 3 Sep. Every
    // production deploy then refilled ~100 MB of HTML+RSC per edge region, and
    // Fast Origin Transfer reached 11.5 GB of the 10 GB Hobby cap. Three
    // cacheable <link> stylesheets cost one round-trip on the first page of a
    // session; inlining cost 40% of every page on every visit and every deploy.
    // Re-enable only after the CSS bundle is cut to well under 50 KB.
    inlineCss: false,
  },

  // NOTE: Do NOT override webpack `optimization.splitChunks` here. The Next.js
  // App Router owns its chunk graph, and a custom cacheGroup named "nextjs"
  // collided with Next's own framework chunk — Next then emitted the CSS as
  // `nextjs.css` AND injected it as `<script src=".../nextjs.css">`. The
  // browser can't execute CSS as JS, so the client runtime crashed: no
  // hydration, dead nav dropdowns, and unrendered ssr:false widgets. Let Next
  // handle chunk splitting.

  async redirects() {
    // Defined in src/data/redirects.js so src/app/sitemap.js can exclude the
    // same sources and never list a redirecting URL.
    return REDIRECTS;
  },

  async headers() {
    return [
      {
        source: '/:asset(logo.png|logo-square.png|favicon.ico|manifest.json)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // 'unsafe-eval' is only for the Next dev runtime (eval sourcemaps).
              // Production ships without it: none of Maps/GA/GTM/motion need eval,
              // and allowing it sitewide is a real XSS amplifier.
              `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''} https://maps.googleapis.com https://maps.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com`,
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://upload.wikimedia.org https://images.pexels.com https://images.unsplash.com https://lh3.googleusercontent.com https://maps.googleapis.com https://maps.gstatic.com https://streetviewpixels-pa.googleapis.com https://www.google-analytics.com https://www.googletagmanager.com",
              "connect-src 'self' https://maps.googleapis.com https://places.googleapis.com https://www.google-analytics.com",
              // youtube-nocookie is the only video host allowed, and only
              // frames — no YouTube script runs on the page. The player is
              // inserted on click (ReelCard.js), so nothing loads from it
              // for a visitor who never plays a reel.
              "frame-src https://www.google.com https://maps.google.com https://www.youtube-nocookie.com",
              "worker-src blob: 'self'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
      {
        // The generated OG image is an asset, not a document. Google was
        // crawling it (and its ?hash variant) and filing both under "Crawled -
        // currently not indexed". noindex here — rather than a robots.txt
        // disallow — because every page's og:image/twitter:image points at this
        // URL, and the social crawlers that build link previews obey robots.txt.
        // Disallowing it broke WhatsApp/Facebook previews; this keeps the image
        // fetchable while keeping it out of the search index.
        source: '/opengraph-image',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
      {
        source: '/_next/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/_next/image(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        // Own photos (public/photos/). Immutable so the edge fills once per
        // region and keeps them across deploys — without this, every
        // production deploy re-pulls the whole set from origin and it counts
        // against Fast Origin Transfer. Filenames carry a date, so replacing
        // a photo means a new name, never a stale cache.
        source: '/photos/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(logo\\.png|logo-square\\.png|llms\\.txt)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' }],
      },
    ];
  },
};

module.exports = nextConfig;
