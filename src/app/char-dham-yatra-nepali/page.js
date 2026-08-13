import { Noto_Sans_Devanagari } from 'next/font/google';
import { SITE } from '@/data/packages';
import { nepali } from '@/data/langContent/nepali';
import CharDhamLanguagePage from '@/components/CharDhamLanguagePage';

const SLUG = 'char-dham-yatra-nepali';
const noto = Noto_Sans_Devanagari({ subsets: ['devanagari'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata = {
  title: { absolute: `चार धाम यात्रा ${SITE.season} | ₹13,900 देखि | नेपालीमा` },
  description: `चार धाम यात्रा ${SITE.season} — हरिद्वारबाट 9 रात/10 दिन ₹13,900 देखि। सिधै सञ्चालक, एजेन्ट कमिसन छैन, दर्ता निःशुल्क।`,
  keywords: ['चार धाम यात्रा नेपाली','char dham yatra in nepali','नेपालबाट चार धाम','केदारनाथ पशुपतिनाथ','chardham yatra nepali guide'],
  alternates: { canonical: `${SITE.baseUrl}/${SLUG}` },
  openGraph: {
    title: `चार धाम यात्रा ${SITE.season} — पूरा जानकारी नेपालीमा | Shiv Ganga Travels`,
    description: 'यमुनोत्री, गंगोत्री, केदारनाथ, बद्रीनाथ। हरिद्वारबाट ₹13,900 देखि।',
    url: `${SITE.baseUrl}/${SLUG}`,
    type: 'website',
    locale: 'ne_NP',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Char Dham Yatra ${SITE.season} in Nepali — Shiv Ganga Travels` }],
  },
};

export default function CharDhamNepali() {
  return <CharDhamLanguagePage content={nepali} slug={SLUG} fontClassName={noto.className} />;
}
