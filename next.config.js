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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://maps.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://upload.wikimedia.org https://images.pexels.com https://images.unsplash.com https://lh3.googleusercontent.com https://maps.googleapis.com https://maps.gstatic.com https://streetviewpixels-pa.googleapis.com https://www.google-analytics.com",
              "connect-src 'self' https://maps.googleapis.com https://places.googleapis.com https://www.google-analytics.com",
              "frame-src https://www.google.com https://maps.google.com",
              "worker-src blob: 'self'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
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
        source: '/(logo\\.png|logo-square\\.png|llms\\.txt)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' }],
      },
    ];
  },
};

module.exports = nextConfig;
