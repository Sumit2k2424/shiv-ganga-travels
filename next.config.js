/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 180,

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

  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },

  async redirects() {
    return [
      // Redirect stale 2025 guide URL → main char dham page (2026 content)
      { source: '/char-dham-yatra-2025', destination: '/char-dham-yatra', permanent: true },
      // Fix internal 404s found by Screaming Frog
      { source: '/packages/char-dham-yatra-senior-citizen-14n-15d', destination: '/packages/char-dham-yatra-senior-citizen-12n-13d', permanent: true },
      { source: '/packages/char-dham-yatra-10n-11d-haridwar',       destination: '/packages/char-dham-yatra-11n-12d-haridwar',       permanent: true },
      { source: '/how-to-reach-kedarnath',                           destination: '/blog/how-to-reach-kedarnath',                    permanent: true },
      { source: '/blog/char-dham-yatra',                             destination: '/char-dham-yatra',                                permanent: true },
      // Redirect blog Badrinath guide to new proper landing page
      { source: '/blog/badrinath-yatra-guide',                       destination: '/badrinath-yatra',                                permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
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
              "connect-src 'self' https://maps.googleapis.com https://places.googleapis.com https://www.google-analytics.com https://api.anthropic.com",
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
        source: '/(logo\\.png|logo-square\\.png|sitemap\\.xml|robots\\.txt|llms\\.txt)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' }],
      },
    ];
  },
};

module.exports = nextConfig;
