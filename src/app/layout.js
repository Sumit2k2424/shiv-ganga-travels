import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SITE } from '@/data/packages';

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: `${SITE.name} — Char Dham Yatra Packages 2025`,
    template: `%s | ${SITE.name}`,
  },
  description: 'Book Char Dham, Do Dham & Single Dham Yatra packages from Haridwar. VIP darshan, expert guides, all-inclusive. Trusted since 2010 by 50,000+ pilgrims.',
  keywords: [
    'Char Dham Yatra 2025', 'Char Dham package from Haridwar',
    'Kedarnath Yatra package', 'Badrinath Yatra package',
    'Yamunotri Gangotri tour', 'Char Dham Helicopter package',
    'Uttarakhand pilgrimage', 'Do Dham Yatra',
    'Chardham Yatra Haridwar', 'Senior citizen Char Dham',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.baseUrl,
    siteName: SITE.name,
    title: `${SITE.name} — Char Dham Yatra 2025`,
    description: 'Yamunotri · Gangotri · Kedarnath · Badrinath. All-inclusive packages from Haridwar.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — Char Dham Yatra 2025`,
    description: 'Yamunotri · Gangotri · Kedarnath · Badrinath. Zero commission, VIP darshan.',
  },
  verification: {
    // add 'google': 'YOUR_SEARCH_CONSOLE_CODE' here after Search Console setup
  },
  category: 'travel',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1260CC',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font optimization: preconnect to Google Fonts for faster load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for image CDNs — saves ~100-300ms on first render */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://upload.wikimedia.org" />

        {/* Favicon — inline SVG data URI (zero extra request) */}
        <link rel="icon" type="image/svg+xml" href={`data:image/svg+xml,${encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="17" fill="#1260CC"/>
            <text x="18" y="26" font-size="22" font-weight="700" font-family="serif" fill="#fff" text-anchor="middle">ॐ</text>
          </svg>
        `)}`} />
      </head>
      <body style={{ display:'flex', flexDirection:'column', minHeight:'100vh' }}>
        <Navbar />
        <main style={{ flex:1 }}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
