import './globals.css';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LeadPopup from '@/components/LeadPopup';
import ChatBot from '@/components/ChatBot';
import { SITE } from '@/data/packages';

// ── next/font — zero render-blocking, self-hosted at build time ──
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800'],
  style: ['normal','italic'],
  variable: '--font-jakarta',
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500','600','700'],
  style: ['normal','italic'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
});

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),

  title: {
    default: `Shiv Ganga Travels — Char Dham Yatra Packages 2026 from Haridwar`,
    template: `%s | Shiv Ganga Travels`,
  },
  description: 'Book Char Dham Yatra 2026 from Haridwar. Zero commission, VIP darshan, all-inclusive. Kedarnath, Badrinath, Gangotri, Yamunotri. Direct operator since 2010. 50,000+ pilgrims served.',
  keywords: [
    'Char Dham Yatra 2026', 'Char Dham Yatra package from Haridwar',
    'Kedarnath Yatra package 2026', 'Badrinath Yatra package',
    'Do Dham Yatra Haridwar', 'Char Dham helicopter package',
    'Char Dham Yatra operator Haridwar', 'Shiv Ganga Travels Haridwar',
    'char dham yatra haridwar', 'kedarnath yatra haridwar',
    'tour operator haridwar', 'pilgrimage tour haridwar',
  ],
  authors: [{ name: 'Shiv Ganga Travels', url: SITE.baseUrl }],
  creator: 'Shiv Ganga Travels',
  publisher: 'Shiv Ganga Travels',

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
    siteName: 'Shiv Ganga Travels',
    title: `Shiv Ganga Travels — Char Dham Yatra 2026 from Haridwar`,
    description: 'Yamunotri · Gangotri · Kedarnath · Badrinath. Zero commission. Direct operator since 2010. 50,000+ pilgrims served.',
    images: [{
      url: '/opengraph-image',
      width: 1200, height: 630,
      alt: 'Kedarnath Temple — Char Dham Yatra 2026 with Shiv Ganga Travels, Haridwar',
    }],
  },

  twitter: {
    card: 'summary_large_image',
    title: `Shiv Ganga Travels — Char Dham Yatra 2026`,
    description: 'Yamunotri · Gangotri · Kedarnath · Badrinath. All-inclusive from ₹5,299. Zero commission. Haridwar.',
    images: ['/opengraph-image'],
  },

  alternates: {
    canonical: SITE.baseUrl,
    languages: { 'en-IN': SITE.baseUrl, 'hi-IN': SITE.baseUrl },
  },
  other: {
    'description:hi': 'चार धाम यात्रा पैकेज 2026 — हरिद्वार से ₹19,500 से शुरू | शिव गंगा ट्रेवल्स | सीधे ऑपरेटर | शून्य कमीशन | 50,000+ तीर्थयात्री',
    'keywords:hi': 'चार धाम यात्रा हरिद्वार, केदारनाथ यात्रा, बद्रीनाथ यात्रा, चार धाम यात्रा पैकेज 2026',
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

// ── LocalBusiness schema — fully GBP-aligned ─────────────────
function SiteSchema() {

  // ── Primary organisation / local business ──────────────────
  const org = {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness'],
    '@id': `${SITE.baseUrl}/#organization`,

    // ── Identity — must match GBP character-for-character ───
    name: 'Shiv Ganga Travels',
    alternateName: [
      'Shiv Ganga Tour and Travels',
      'Shiv Ganga Travels Haridwar',
      'Shiv Ganga Char Dham Tours',
    ],
    url: SITE.baseUrl,
    telephone: ['+91-7017082807', '+91-8859123961'],
    email: 'support@shivgangatravels.com',

    // ── Address — must match GBP field-for-field ─────────────
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala',
      addressLocality: 'Haridwar',
      addressRegion: 'Uttarakhand',
      postalCode: '249410',
      addressCountry: 'IN',
    },

    // ── Exact GPS coordinates from your GBP Place ID ─────────
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.9896838,
      longitude: 78.1927454,
    },

    // ── Maps link — use Place ID for exact match ─────────────
    hasMap: 'https://www.google.com/maps/place/?q=place_id:ChIJcbRpbaBHCTkRsh3aBCyZEt8',

    // ── Opening hours — must match GBP exactly ───────────────
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '07:00',
        closes: '21:00',
      },
    ],
    // Human-readable version Google also reads
    openingHours: ['Mo-Su 07:00-21:00'],

    // ── Ratings — match actual GBP numbers exactly ───────────
    // Update these whenever your GBP review count changes
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.3',
      reviewCount: '21',
      bestRating: '5',
      worstRating: '1',
    },

    // ── Logo & image ──────────────────────────────────────────
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.baseUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    image: [
      {
        '@type': 'ImageObject',
        url: `${SITE.baseUrl}/logo.png`,
        width: 512,
        height: 512,
      },
      {
        '@type': 'ImageObject',
        url: '/opengraph-image',
        caption: 'Kedarnath Temple — served by Shiv Ganga Travels',
      },
    ],

    // ── Description ───────────────────────────────────────────
    description: 'Shiv Ganga Travels is a Haridwar-based Char Dham Yatra specialist founded in 2010 by Dhanesh Chandra Mishra, a retired Indian Army officer. Zero commission, all-inclusive packages for Char Dham, Do Dham, Kedarnath, Badrinath, Gangotri, Yamunotri and Uttarakhand tours. 50,000+ pilgrims served.',

    // ── Founder — Army officer story in structured data ───────
    founder: {
      '@type': 'Person',
      name: 'Dhanesh Chandra Mishra',
      jobTitle: 'Founder & Director',
      description: 'Retired Indian Army Officer, founded Shiv Ganga Travels in 2010 in Roorkee, Uttarakhand.',
    },

    foundingDate: '2010',
    foundingLocation: {
      '@type': 'Place',
      name: 'Roorkee, Uttarakhand, India',
    },

    // ── Business details ──────────────────────────────────────
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Bank Transfer, Credit Card, Debit Card',

    // ── Contact points ────────────────────────────────────────
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-7017082807',
        alternateName: '+91-8859123961',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['Hindi', 'English'],
        contactOption: 'TollFree',
      },
      {
        '@type': 'ContactPoint',
        url: 'https://wa.me/917017082807',
        contactType: 'sales',
        contactOption: 'HearingImpairedSupported',
        availableLanguage: ['Hindi', 'English'],
      },
    ],

    // ── Service area — matches GBP service areas ─────────────
    areaServed: [
      { '@type': 'City',  name: 'Haridwar',    containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City',  name: 'Rishikesh',   containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City',  name: 'Roorkee',     containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City',  name: 'Dehradun',    containedInPlace: { '@type': 'State', name: 'Uttarakhand' } },
      { '@type': 'City',  name: 'Delhi' },
      { '@type': 'City',  name: 'Mumbai' },
      { '@type': 'City',  name: 'Bangalore' },
      { '@type': 'City',  name: 'Hyderabad' },
      { '@type': 'City',  name: 'Chennai' },
      { '@type': 'State', name: 'Uttarakhand' },
    ],

    // ── Services offered ──────────────────────────────────────
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Char Dham Yatra Packages 2026',
      itemListElement: [
        { '@type': 'Offer', name: 'Char Dham Yatra Package',       price: '19500', priceCurrency: 'INR', url: `${SITE.baseUrl}/char-dham-yatra` },
        { '@type': 'Offer', name: 'Kedarnath Yatra Package',       price: '6499',  priceCurrency: 'INR', url: `${SITE.baseUrl}/kedarnath-yatra` },
        { '@type': 'Offer', name: 'Char Dham Helicopter Package',  price: '85000', priceCurrency: 'INR', url: `${SITE.baseUrl}/char-dham-helicopter` },
        { '@type': 'Offer', name: 'Do Dham Yatra Package',        price: '10999', priceCurrency: 'INR', url: `${SITE.baseUrl}/do-dham-yatra` },
        { '@type': 'Offer', name: 'Char Dham Cab Booking',        price: '5500',  priceCurrency: 'INR', url: `${SITE.baseUrl}/char-dham-yatra-cab-booking` },
      ],
    },

    // ── Awards / accreditations ───────────────────────────────
    award: 'Uttarakhand Tourism Registered Tour Operator',
    knowsAbout: [
      'Char Dham Yatra', 'Kedarnath Yatra', 'Badrinath Yatra',
      'Gangotri Yatra', 'Yamunotri Yatra', 'Uttarakhand Tourism',
      'Hindu Pilgrimage', 'Himalayan Travel', 'Char Dham Helicopter',
    ],

    // ── Cross-platform links — all must match GBP "sameAs" ───
    sameAs: [
      'https://share.google/gApTvZu1nEBnhjm3W',
      'https://www.google.com/maps/place/?q=place_id:ChIJcbRpbaBHCTkRsh3aBCyZEt8',
      'https://www.instagram.com/shivgangatravels/',
      'https://www.justdial.com/Haridwar/Shiv-Ganga-Tour-Travels/9999P1334-1334-110624154036-E1L3_BZDET',
      `https://wa.me/${SITE.whatsapp}`,
    ],
  };

  // ── WebSite schema with SearchAction ──────────────────────
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.baseUrl}/#website`,
    url: SITE.baseUrl,
    name: 'Shiv Ganga Travels',
    description: 'Char Dham Yatra packages from Haridwar — Kedarnath, Badrinath, Gangotri, Yamunotri. Zero commission. Est. 2010.',
    publisher: { '@id': `${SITE.baseUrl}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE.baseUrl}/packages?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-IN',
  };


  // ── Founder — Person schema for LLM entity recognition ────
  const founder = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.baseUrl}/#founder`,
    name: 'Dhanesh Chandra Mishra',
    jobTitle: 'Founder & Managing Director',
    description: 'Retired Indian Army Officer who founded Shiv Ganga Travels in 2010. Pioneered the zero-commission model for Char Dham Yatra operators in Haridwar.',
    worksFor: { '@id': `${SITE.baseUrl}/#organization` },
    alumniOf: { '@type': 'Organization', name: 'Indian Army' },
    knowsAbout: ['Char Dham Yatra', 'Kedarnath Yatra', 'Badrinath Yatra', 'Uttarakhand pilgrimage', 'Mountain travel logistics'],
    nationality: { '@type': 'Country', name: 'India' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founder) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}/>
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${playfair.variable}`}>
      <head>
        {/* Fonts now self-hosted via next/font — no Google Fonts preconnect needed */}
        {/* Preconnect to image CDNs used in hero and package cards */}
        <link rel="preconnect" href="https://images.pexels.com"/>
        <link rel="preconnect" href="https://upload.wikimedia.org"/>
        <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
        <link rel="dns-prefetch" href="https://maps.googleapis.com"/>
        {/* Preload LCP hero image — eliminates largest contentful paint delay */}
        <link
          rel="preload"
          as="image"
          href="/opengraph-image"
          fetchPriority="high"
        />
        {/* Mobile / PWA */}
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
        <meta name="apple-mobile-web-app-title" content="Shiv Ganga Travels"/>
        <meta name="format-detection" content="telephone=yes"/>
        <meta name="geo.region" content="IN-UT"/>
        <meta name="geo.placename" content="Haridwar, Uttarakhand, India"/>
        <meta name="geo.position" content="29.9896838;78.1927454"/>
        <meta name="ICBM" content="29.9896838, 78.1927454"/>
        <meta name="geo.country" content="IN"/>
        <meta name="ICBM" content="29.9457, 78.1642"/>
        {/* SVG favicon */}
        <link rel="icon" type="image/svg+xml" href={`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"><circle cx="22" cy="22" r="21" stroke="#0F2B5B" stroke-width="2" fill="none"/><circle cx="22" cy="22" r="14" fill="#0F2B5B"/><path d="M10 30 L17 18 L22 25 L27 16 L34 30 Z" fill="#E8920A"/></svg>`)}`}/>
        {/* DNS prefetch for third-party domains used on this site */}
        <link rel="dns-prefetch" href="//www.google-analytics.com"/>
        <link rel="dns-prefetch" href="//ajax.googleapis.com"/>
        <link rel="dns-prefetch" href="//images.pexels.com"/>
        <link rel="dns-prefetch" href="//upload.wikimedia.org"/>
        <link rel="preconnect" href="https://www.google-analytics.com"/>
        {/* Preload LCP hero image */}
        <link rel="preload" as="image" href="/opengraph-image" fetchPriority="high"/>
        <SiteSchema/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM guidance"/>
      </head>
      <body style={{ display:'flex', flexDirection:'column', minHeight:'100vh' }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar/>
        <main id="main-content" style={{ flex:1 }} role="main">{children}</main>
        <Footer/>
        <WhatsAppButton/>
        <LeadPopup/>
        <ChatBot/>
        {/* GA4 — loaded last, never blocks render */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FP0HXZ8068"/>
        <script dangerouslySetInnerHTML={{ __html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-FP0HXZ8068');`}}/>
      </body>
    </html>
  );
}
