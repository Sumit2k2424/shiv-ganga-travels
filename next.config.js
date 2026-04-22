/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'commons.wikimedia.org' },
    ],
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // Canonicalise non-www -> www (prevents Google indexing both versions)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'shivgangatravels.com' }],
        destination: 'https://www.shivgangatravels.com/:path*',
        permanent: true,
      },
      // Forward old 2025 landing page to the evergreen char-dham-yatra page
      {
        source: '/char-dham-yatra-2025',
        destination: '/char-dham-yatra',
        permanent: true,
      },
      // Forward /char-dham-yatra-2026 search traffic to same canonical page
      {
        source: '/char-dham-yatra-2026',
        destination: '/char-dham-yatra',
        permanent: false,
      },
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
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

module.exports = nextConfig;
