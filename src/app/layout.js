import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LeadPopup from '@/components/LeadPopup';
import ChatBot from '@/components/ChatBot';
import { SITE } from '@/data/packages';

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),

  title: {
    default: `${SITE.name} — Char Dham Yatra Packages 2025 from Haridwar`,
    template: `%s | ${SITE.name}`,
  },
  description: 'Book Char Dham, Do Dham & Single Dham Yatra packages from Haridwar. Zero commission, VIP darshan, expert Garhwali guides, all-inclusive. Registered operator trusted since 2010 by 50,000+ pilgrims.',
  keywords: [
    'Char Dham Yatra 2025', 'Char Dham Yatra package from Haridwar',
    'Chardham Yatra package', 'Kedarnath Yatra package 2025',
    'Badrinath Yatra package', 'Yamunotri Yatra package',
    'Gangotri Yatra package', 'Do Dham Yatra Haridwar',
    'Uttarakhand pilgrimage tour', 'Char Dham helicopter package',
    'Char Dham Yatra operator Haridwar', 'best Char Dham tour operator',
    'Char Dham Yatra 2025 price', 'cheap Char Dham package',
  ],
  authors: [{ name: SITE.name, url: SITE.baseUrl }],
  creator: SITE.name,
  publisher: SITE.name,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.baseUrl,
    siteName: SITE.name,
    title: `${SITE.name} — Char Dham Yatra 2025 from Haridwar`,
    description: 'Yamunotri · Gangotri · Kedarnath · Badrinath. Zero commission. All-inclusive. 50,000+ pilgrims trusted us. Book now.',
    images: [{
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kedarnathji-mandir.JPG/1200px-Kedarnathji-mandir.JPG',
      width: 1200, height: 630,
      alt: 'Kedarnath Temple - Char Dham Yatra',
    }],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — Char Dham Yatra Packages 2025`,
    description: 'Yamunotri · Gangotri · Kedarnath · Badrinath. All-inclusive from ₹5,299. Zero commission.',
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kedarnathji-mandir.JPG/1200px-Kedarnathji-mandir.JPG'],
  },

  alternates: {
    canonical: SITE.baseUrl,
    languages: { 'en-IN': SITE.baseUrl },
  },

  verification: {
    google: 'google2e29cf8ed6b82236',
  },

  category: 'travel',
  classification: 'Travel & Tourism',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0F2B5B',
};

// ── LocalBusiness schema at site level ──────────────────────────
function SiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness'],
    '@id': `${SITE.baseUrl}/#organization`,
    name: SITE.name,
    alternateName: ['Shiv Ganga Travels Haridwar', 'Shiv Ganga Char Dham Tours'],
    sameAs: ['https://share.google/gApTvZu1nEBnhjm3W','https://www.justdial.com/Haridwar/Shiv-Ganga-Tour-Travels/9999P1334-1334-110624154036-E1L3_BZDET'],
    url: SITE.baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.baseUrl}/logo.png`,
      width: 300, height: 100,
    },
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kedarnathji-mandir.JPG/1200px-Kedarnathji-mandir.JPG',
    description: 'Haridwar-based Char Dham Yatra specialist since 2010. Zero commission, all-inclusive packages, expert guides.',
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: String(SITE.established),
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala',
      addressLocality: 'Haridwar',
      addressRegion: 'Uttarakhand',
      postalCode: '249410',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.9457,
      longitude: 78.1642,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '07:00', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '08:00', closes: '20:00' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '850',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      `https://wa.me/${SITE.whatsapp}`,
      'https://www.google.com/maps/search/Shiv+Ganga+Travels+Haridwar',
    ],
    areaServed: {
      '@type': 'State',
      name: 'Uttarakhand',
    },
    hasMap: 'https://www.google.com/maps/search/Shiv+Ganga+Travels+Near+Har+Ki+Pauri+Haridwar',
    knowsAbout: ['Char Dham Yatra', 'Kedarnath Yatra', 'Badrinath Yatra', 'Uttarakhand Tourism'],
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.baseUrl}/#website`,
    url: SITE.baseUrl,
    name: SITE.name,
    description: 'Char Dham Yatra packages from Haridwar',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.baseUrl}/packages?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}/>
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link rel="dns-prefetch" href="https://images.unsplash.com"/>
        <link rel="dns-prefetch" href="https://images.pexels.com"/>
        <link rel="dns-prefetch" href="https://upload.wikimedia.org"/>
        {/* Mobile / PWA */}
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
        <meta name="apple-mobile-web-app-title" content="Shiv Ganga Travels"/>
        <meta name="format-detection" content="telephone=yes"/>
        <meta name="geo.region" content="IN-UT"/>
        <meta name="geo.placename" content="Haridwar, Uttarakhand"/>
        <meta name="geo.position" content="29.9457;78.1642"/>
        <meta name="ICBM" content="29.9457, 78.1642"/>
        {/* SVG favicon */}
        <link rel="icon" type="image/svg+xml" href={`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"><circle cx="22" cy="22" r="21" stroke="#0F2B5B" stroke-width="2" fill="none"/><circle cx="22" cy="22" r="14" fill="#0F2B5B"/><path d="M10 30 L17 18 L22 25 L27 16 L34 30 Z" fill="#E8920A"/></svg>`)}`}/>
        {/* Google Analytics G-FP0HXZ8068 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FP0HXZ8068"/>
        <script dangerouslySetInnerHTML={{ __html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FP0HXZ8068', { page_path: window.location.pathname });
        `}}/>
        <SiteSchema/>
      </head>
      <body style={{ display:'flex', flexDirection:'column', minHeight:'100vh' }}>
        <Navbar/>
        <main style={{ flex:1 }}>{children}</main>
        <Footer/>
        <WhatsAppButton/>
        <LeadPopup/>
        <ChatBot/>
      </body>
    </html>
  );
}
