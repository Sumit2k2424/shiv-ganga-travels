import './globals.css';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
// LeadPopup + ChatBot loaded via Client Component wrapper (Next.js 15: ssr:false requires 'use client')
import { LeadPopup, ChatBot } from '@/components/LayoutClientWidgets';
import { SITE } from '@/data/packages';

// ── next/font — zero render-blocking, self-hosted at build time ──
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
  variable: '--font-jakarta',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600','700'],
  variable: '--font-playfair',
  display: 'optional',
  preload: false,
  adjustFontFallback: true,
});

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),

  title: {
    default: `Shiv Ganga Travels — Char Dham Yatra 2026 Haridwar`,
    template: `%s | Shiv Ganga`,
  },
  description: 'Char Dham Yatra 2026 from Haridwar. Zero commission, direct operator. From ₹21,000. Kedarnath, Badrinath, Gangotri, Yamunotri. 50,000+ pilgrims. Founded by Retd. Army Officer.',
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
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.baseUrl,
    siteName: 'Shiv Ganga Travels',
    title: `Char Dham Yatra 2026 — Shiv Ganga Travels, Haridwar`,
    description: 'Yamunotri · Gangotri · Kedarnath · Badrinath. From ₹21,000. Zero commission. Direct operator. 50,000+ pilgrims.',
    images: [{
      url: '/opengraph-image',
      width: 1200, height: 630,
      alt: 'Kedarnath Temple — Char Dham Yatra 2026 with Shiv Ganga Travels, Haridwar',
    }],
  },

  twitter: {
    card: 'summary_large_image',
    title: `Shiv Ganga Travels — Char Dham Yatra 2026`,
    description: 'Char Dham Yatra 2026 from Haridwar from ₹21,000. Direct operator since 2010. Zero commission. 50,000+ pilgrims. Kedarnath, Badrinath, Gangotri, Yamunotri.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra 2026 from Haridwar — Shiv Ganga Travels, Direct Operator since 2010' }],
  },

  // NOTE: no `alternates` here on purpose. A canonical set in the root layout
  // cascades to every page that doesn't define its own, telling Google those
  // pages canonicalise to the homepage. Each page sets its own canonical.
  // hi-IN hreflang removed — /hi does not exist yet; broken hreflang gets the
  // whole set ignored. Re-add `languages` only when a real /hi section ships.
  other: {
    'description:hi': 'चार धाम यात्रा पैकेज 2026 — हरिद्वार से ₹21,000 से शुरू | शिव गंगा ट्रेवल्स | सीधे ऑपरेटर | शून्य कमीशन | 50,000+ तीर्थयात्री',
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
  minimumScale: 1,
  viewportFit: 'cover',
  themeColor: '#0F2B5B',
};

// ── LocalBusiness schema — fully GBP-aligned ─────────────────
function SiteSchema() {

  // ── Primary organisation / local business — Haridwar ───────
  const org = {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness', 'TouristInformationCenter'],
    '@id': `${SITE.baseUrl}/#organization`,

    name: 'Shiv Ganga Travels',
    alternateName: [
      'Shiv Ganga Tour and Travels',
      'Shiv Ganga Travels Haridwar',
      'Shiv Ganga Char Dham Tours',
    ],
    url: SITE.baseUrl,
    telephone: ['+91-7817996730', '+91-8859123961'],
    email: 'support@shivgangatravels.com',

    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala',
      addressLocality: 'Haridwar',
      addressRegion: 'Uttarakhand',
      postalCode: '249410',
      addressCountry: 'IN',
    },

    // ── 5-decimal precision GPS — required for local pack ────
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.98968,
      longitude: 78.19274,
    },

    hasMap: 'https://www.google.com/maps?cid=16074078434377735602',

    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '07:00',
        closes: '21:00',
      },
    ],
    openingHours: ['Mo-Su 07:00-21:00'],

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.6,
      reviewCount: 38,
      bestRating: 5,
      worstRating: 1,
    },

    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        author: { '@type': 'Person', name: 'Rajesh Kumar' },
        datePublished: '2026-05-10',
        reviewBody: 'Best Char Dham operator in Haridwar. Everything was perfectly arranged — hotels, vehicles, darshan slots. The Kedarnath trek support was outstanding. Will do Do Dham next year with them.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        author: { '@type': 'Person', name: 'Sunita Sharma' },
        datePublished: '2026-04-28',
        reviewBody: 'We are a family of 8 including two senior citizens aged 72 and 69. Shiv Ganga arranged palki for both at Kedarnath. The driver Ramesh bhai was exceptional — calm, experienced, and deeply knowledgeable about the route. Highly recommended.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        author: { '@type': 'Person', name: 'Priya Mehta' },
        datePublished: '2026-05-15',
        reviewBody: 'Direct operator — no middleman, no commission. Price was exactly as quoted. VIP darshan at Badrinath was a blessing. Will recommend to everyone planning Char Dham Yatra.',
      },
    ],

    logo: {
      '@type': 'ImageObject',
      url: 'https://www.shivgangatravels.com/logo.png',
      width: 512,
      height: 512,
      '@id': 'https://www.shivgangatravels.com/logo.png',
    },
    image: [
      { '@type': 'ImageObject', url: 'https://www.shivgangatravels.com/logo.png', width: 512, height: 512 },
      { '@type': 'ImageObject', url: '/opengraph-image', caption: 'Kedarnath Temple — served by Shiv Ganga Travels' },
    ],

    description: 'Shiv Ganga Travels is a Haridwar-based Char Dham Yatra specialist founded in 2010 by Dhanesh Chandra Mishra, a retired Indian Army officer. Zero commission, all-inclusive packages for Char Dham, Do Dham, Kedarnath, Badrinath, Gangotri, Yamunotri and Uttarakhand tours. 50,000+ pilgrims served.',

    founder: {
      '@type': 'Person',
      name: 'Dhanesh Chandra Mishra',
      jobTitle: 'Founder & Director',
      description: 'Retired Indian Army Officer, founded Shiv Ganga Travels in 2010 in Roorkee, Uttarakhand.',
    },

    foundingDate: '2010',
    foundingLocation: { '@type': 'Place', name: 'Roorkee, Uttarakhand, India' },

    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Bank Transfer, Credit Card, Debit Card',

    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-7817996730',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['Hindi', 'English'],
      },
      {
        '@type': 'ContactPoint',
        url: 'https://wa.me/917817996730',
        contactType: 'sales',
        availableLanguage: ['Hindi', 'English'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-7817996730',
        contactType: 'customer support',
        name: 'Pragati Bhardwaj — Grievance Head',
        availableLanguage: ['Hindi', 'English'],
        areaServed: 'IN',
      },
    ],

    employee: [
      {
        '@type': 'Person',
        name: 'Pragati Bhardwaj',
        jobTitle: 'Grievance Head & Lead Content',
        worksFor: { '@id': `${SITE.baseUrl}/#organization` },
      },
    ],

    // ── Hybrid SAB — areaServed with named cities ─────────────
    areaServed: [
      { '@type': 'City', name: 'Haridwar',   containedInPlace: { '@type': 'AdministrativeArea', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Rishikesh',  containedInPlace: { '@type': 'AdministrativeArea', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Roorkee',    containedInPlace: { '@type': 'AdministrativeArea', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Dehradun',   containedInPlace: { '@type': 'AdministrativeArea', name: 'Uttarakhand' } },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Gurgaon' },
      { '@type': 'City', name: 'Ghaziabad' },
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Bangalore' },
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'City', name: 'Kolkata' },
      { '@type': 'City', name: 'Pune' },
      { '@type': 'City', name: 'Ahmedabad' },
      { '@type': 'City', name: 'Jaipur' },
      { '@type': 'City', name: 'Lucknow' },
      { '@type': 'City', name: 'Varanasi' },
      { '@type': 'AdministrativeArea', name: 'Uttarakhand' },
      { '@type': 'Country', name: 'India' },
    ],

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Char Dham Yatra Packages 2026',
      itemListElement: [
        { '@type': 'Offer', name: 'Char Dham Yatra Package',      price: '21000', priceCurrency: 'INR', url: `${SITE.baseUrl}/char-dham-yatra` },
        { '@type': 'Offer', name: 'Kedarnath Yatra Package',      price: '6499',  priceCurrency: 'INR', url: `${SITE.baseUrl}/kedarnath-yatra` },
        { '@type': 'Offer', name: 'Char Dham Helicopter Package', price: '85000', priceCurrency: 'INR', url: `${SITE.baseUrl}/char-dham-helicopter` },
        { '@type': 'Offer', name: 'Do Dham Yatra Package',        price: '10999', priceCurrency: 'INR', url: `${SITE.baseUrl}/do-dham-yatra` },
        { '@type': 'Offer', name: 'Char Dham Cab Booking',        price: '5500',  priceCurrency: 'INR', url: `${SITE.baseUrl}/char-dham-yatra-cab-booking` },
      ],
    },

    award: 'Uttarakhand Tourism Registered Tour Operator',
    knowsAbout: [
      { '@type': 'Thing', name: 'Char Dham Yatra', sameAs: 'https://en.wikipedia.org/wiki/Chota_Char_Dham' },
      { '@type': 'Thing', name: 'Kedarnath Yatra', sameAs: 'https://en.wikipedia.org/wiki/Kedarnath_Temple' },
      { '@type': 'Thing', name: 'Badrinath Yatra', sameAs: 'https://en.wikipedia.org/wiki/Badrinath_Temple' },
      { '@type': 'Thing', name: 'Gangotri Yatra', sameAs: 'https://en.wikipedia.org/wiki/Gangotri_Temple' },
      { '@type': 'Thing', name: 'Yamunotri Yatra', sameAs: 'https://en.wikipedia.org/wiki/Yamunotri' },
      { '@type': 'Thing', name: 'Uttarakhand Tourism', sameAs: 'https://en.wikipedia.org/wiki/Tourism_in_Uttarakhand' },
      { '@type': 'Thing', name: 'Hindu Pilgrimage', sameAs: 'https://en.wikipedia.org/wiki/Hindu_pilgrimage_sites' },
      'Himalayan Travel', 'Char Dham Helicopter',
    ],

    sameAs: [
      'https://www.google.com/maps?cid=16074078434377735602',
      'https://maps.app.goo.gl/Cup8TpduvDW6TaKf6',
      'https://www.instagram.com/shivgangatravels/',
      'https://www.justdial.com/Haridwar/Shiv-Ganga-Tour-Travels/9999P1334-1334-110624154036-E1L3_BZDET',
      `https://wa.me/${SITE.whatsapp}`,
      'https://www.shivgangatravels.com',
    ],
  };

  // ── Roorkee branch office — separate LocalBusiness with branchOf ──
  const roorkee = {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness'],
    '@id': `${SITE.baseUrl}/#organization-roorkee`,
    name: 'Shiv Ganga Travels — Roorkee',
    url: SITE.baseUrl,
    telephone: '+91-7817996730',
    email: 'support@shivgangatravels.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Roorkee',
      addressRegion: 'Uttarakhand',
      postalCode: '247667',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.86820,
      longitude: 77.89490,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    // Links this branch back to the parent Haridwar location
    branchOf: { '@id': `${SITE.baseUrl}/#organization` },
    parentOrganization: { '@id': `${SITE.baseUrl}/#organization` },
    priceRange: '₹₹',
    description: 'Roorkee branch of Shiv Ganga Travels — Char Dham Yatra specialist. Founded here in 2010. Serving pilgrims from Roorkee, Muzaffarnagar, Saharanpur and surrounding areas.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(roorkee) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}/>
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${playfair.variable}`}>
      <head>
        {/* Below-the-fold origins (reviews, maps, images) — dns-prefetch only, no socket cost on first paint */}
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com"/>
        <link rel="dns-prefetch" href="https://maps.googleapis.com"/>
        <link rel="dns-prefetch" href="https://images.pexels.com"/>
        {/* DNS prefetch for analytics — non-blocking */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com"/>
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
        {/* favicon.ico — Google uses this for search result icons (data: URIs are ignored) */}
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        {/* PNG favicons — for modern browsers and Google Search */}
        <link rel="icon" type="image/png" sizes="256x256" href="/logo-square.png"/>
        <link rel="icon" type="image/png" sizes="512x512" href="/logo.png"/>
        {/* Apple touch icon — required for iOS home screen & social sharing */}
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-square.png"/>
        <link rel="apple-touch-icon" sizes="512x512" href="/logo.png"/>
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
        {/* GA4 — deferred 2s after load so it never competes with LCP/INP */}
        <script dangerouslySetInnerHTML={{ __html:`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          window.gtag=gtag;
          gtag('js',new Date());
          gtag('config','G-FP0HXZ8068',{send_page_view:false});
          window.addEventListener('load',function(){
            setTimeout(function(){
              var s=document.createElement('script');
              s.async=true;
              s.src='https://www.googletagmanager.com/gtag/js?id=G-FP0HXZ8068';
              document.head.appendChild(s);
              gtag('event','page_view');
            },2000);
          });
        `}}/>
      </body>
    </html>
  );
}
