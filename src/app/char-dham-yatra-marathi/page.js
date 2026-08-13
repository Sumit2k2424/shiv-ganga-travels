import { Noto_Sans_Devanagari } from 'next/font/google';
import { SITE } from '@/data/packages';
import { marathi } from '@/data/langContent/marathi';
import CharDhamLanguagePage from '@/components/CharDhamLanguagePage';

const SLUG = 'char-dham-yatra-marathi';
const noto = Noto_Sans_Devanagari({ subsets: ['devanagari'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata = {
  title: { absolute: `चार धाम यात्रा ${SITE.season} | ₹13,900 पासून | संपूर्ण माहिती मराठीत` },
  description: `चार धाम यात्रा ${SITE.season} — हरिद्वारहून 9 रात्री/10 दिवस ₹13,900 पासून. थेट ऑपरेटर, एजंट कमिशन नाही, नोंदणी मोफत.`,
  keywords: ['चार धाम यात्रा मराठी','char dham yatra in marathi','चार धाम यात्रा माहिती','चार धाम यात्रा खर्च मराठी','मुंबईहून चार धाम यात्रा','chardham yatra marathi guide'],
  alternates: { canonical: `${SITE.baseUrl}/${SLUG}` },
  openGraph: {
    title: `चार धाम यात्रा ${SITE.season} — संपूर्ण माहिती मराठीत | Shiv Ganga Travels`,
    description: 'यमुनोत्री, गंगोत्री, केदारनाथ, बद्रीनाथ. हरिद्वारहून ₹13,900 पासून. थेट ऑपरेटर, नोंदणी मोफत.',
    url: `${SITE.baseUrl}/${SLUG}`,
    type: 'website',
    locale: 'mr_IN',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Char Dham Yatra ${SITE.season} in Marathi — Shiv Ganga Travels` }],
  },
};

export default function CharDhamMarathi() {
  return <CharDhamLanguagePage content={marathi} slug={SLUG} fontClassName={noto.className} />;
}
