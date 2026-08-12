import { Noto_Sans_Devanagari } from 'next/font/google';
import { SITE } from '@/data/packages';
import { hindi } from '@/data/langContent/hindi';
import CharDhamLanguagePage from '@/components/CharDhamLanguagePage';

const SLUG = 'char-dham-yatra-hindi';
const noto = Noto_Sans_Devanagari({ subsets: ['devanagari'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata = {
  title: { absolute: 'चार धाम यात्रा 2026 | ₹13,900 से | पूरी जानकारी हिन्दी में' },
  description: 'चार धाम यात्रा 2026 — हरिद्वार से 9 रात/10 दिन ₹13,900 से। सीधे ऑपरेटर, कोई एजेंट कमीशन नहीं, रजिस्ट्रेशन मुफ़्त। खर्च, तारीखें और रास्ता।',
  // Cost queries deliberately excluded — /blog/char-dham-yatra-kitna-kharcha
  // already owns 'चार धाम यात्रा 2026 खर्चा' and the per-person cost terms.
  // This page takes the broad head term; that blog keeps the cost long-tail.
  keywords: [
    'चार धाम यात्रा', 'चार धाम यात्रा 2026', 'चार धाम यात्रा कितने दिन की है',
    'चार धाम पैकेज हरिद्वार', 'चार धाम यात्रा हिंदी में जानकारी',
    'चार धाम कपाट बंद होने की तारीख 2026', 'char dham yatra in hindi', 'chardham yatra hindi guide',
  ],
  alternates: { canonical: `${SITE.baseUrl}/${SLUG}` },
  openGraph: {
    title: 'चार धाम यात्रा 2026 — पूरी जानकारी हिन्दी में | Shiv Ganga Travels',
    description: 'यमुनोत्री, गंगोत्री, केदारनाथ, बद्रीनाथ। हरिद्वार से ₹13,900 से शुरू। सीधे ऑपरेटर, रजिस्ट्रेशन मुफ़्त।',
    url: `${SITE.baseUrl}/${SLUG}`,
    type: 'website',
    locale: 'hi_IN',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra 2026 in Hindi — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'चार धाम यात्रा 2026 — पूरी जानकारी हिन्दी में',
    description: 'हरिद्वार से ₹13,900 से। सीधे ऑपरेटर, कोई एजेंट कमीशन नहीं।',
    images: [{ url: '/opengraph-image', alt: 'चार धाम यात्रा 2026 | Shiv Ganga Travels' }],
  },
};

export default function CharDhamHindi() {
  return <CharDhamLanguagePage content={hindi} slug={SLUG} fontClassName={noto.className} />;
}
