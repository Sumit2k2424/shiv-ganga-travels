/** @type {import('next').NextConfig} */

// Disable Next.js anonymous telemetry
process.env.NEXT_TELEMETRY_DISABLED = '1';

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

  // Reduce JS bundle size — tree-shake large packages
  experimental: {
    optimizeCss: true,           // Critters: inline critical CSS, defer the rest
    optimizeServerReact: true,   // Tree-shake unused React server components
    optimizePackageImports: [
      'react',
      'react-dom',
      'next/link',
      'next/image',
    ],
  },

  // Webpack: split vendor chunks for better caching on mobile
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...(config.optimization.splitChunks?.cacheGroups || {}),
          // Separate React into its own cached chunk
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
          // Separate Next.js internals
          nextjs: {
            test: /[\\/]node_modules[\\/]next[\\/]/,
            name: 'nextjs',
            chunks: 'all',
            priority: 10,
          },
        },
      };
    }
    return config;
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
      { source: '/blog/char-dham-yatra-route-map',                  destination: '/char-dham-yatra-route-map',                    permanent: true },
      // ── Duplicate city pages (92% identical content) → main Char Dham page ──
      // Keeps: Delhi, Noida, Mumbai, Bangalore, Chennai, Kolkata, Pune, Hyderabad, Chandigarh
      // Redirects: all other city pages that add no unique value
      { source: '/char-dham-yatra-from-lucknow',     destination: '/char-dham-yatra-from-delhi', permanent: true },
      { source: '/char-dham-yatra-from-varanasi',    destination: '/char-dham-yatra-from-delhi', permanent: true },
      { source: '/char-dham-yatra-from-jaipur',      destination: '/char-dham-yatra-from-delhi', permanent: true },
      { source: '/char-dham-yatra-from-ahmedabad',   destination: '/char-dham-yatra-from-mumbai', permanent: true },
      { source: '/char-dham-yatra-from-indore',      destination: '/char-dham-yatra-from-mumbai', permanent: true },
      { source: '/char-dham-yatra-from-bhopal',      destination: '/char-dham-yatra-from-mumbai', permanent: true },
      { source: '/char-dham-yatra-from-nagpur',      destination: '/char-dham-yatra-from-mumbai', permanent: true },
      { source: '/char-dham-yatra-from-surat',       destination: '/char-dham-yatra-from-mumbai', permanent: true },
      { source: '/char-dham-yatra-from-patna',       destination: '/char-dham-yatra-from-delhi', permanent: true },
      { source: '/char-dham-yatra-from-rishikesh',   destination: '/char-dham-yatra-from-delhi', permanent: true },
      { source: '/char-dham-yatra-from-dehradun',    destination: '/char-dham-yatra-from-delhi', permanent: true },
      // Fix root-level 404s found in Search Console (pages exist under /blog/)
      { source: '/char-dham-yatra-kitna-kharcha',    destination: '/blog/char-dham-yatra-kitna-kharcha', permanent: true },
      { source: '/kedarnath-pehli-baar',             destination: '/blog/kedarnath-pehli-baar',          permanent: true },
      { source: '/char-dham-kab-jayen',              destination: '/blog/char-dham-kab-jayen',           permanent: true },
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
          // HSTS: forces HTTPS for 2 years, includeSubDomains + preload-eligible
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Cross-Origin-Opener-Policy: process isolation, better Lighthouse score
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          // Modern Permissions-Policy — explicitly disable features we never use
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self), payment=(), usb=(), magnetometer=(), accelerometer=(), gyroscope=(), interest-cohort=()' },
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
              "upgrade-insecure-requests",
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
