import { Noto_Sans_Gurmukhi } from 'next/font/google';
import { SITE } from '@/data/packages';
import { punjabi } from '@/data/langContent/punjabi';
import CharDhamLanguagePage from '@/components/CharDhamLanguagePage';

const SLUG = 'char-dham-yatra-punjabi';
const noto = Noto_Sans_Gurmukhi({ subsets: ['gurmukhi'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata = {
  title: { absolute: 'ਚਾਰ ਧਾਮ ਯਾਤਰਾ 2026 | ₹13,900 ਤੋਂ | ਪੰਜਾਬੀ ਵਿੱਚ' },
  description: 'ਚਾਰ ਧਾਮ ਯਾਤਰਾ 2026 — ਹਰਿਦੁਆਰ ਤੋਂ 9 ਰਾਤ/10 ਦਿਨ ₹13,900 ਤੋਂ। ਸਿੱਧਾ ਓਪਰੇਟਰ, ਏਜੰਟ ਕਮਿਸ਼ਨ ਨਹੀਂ, ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਮੁਫ਼ਤ।',
  keywords: ['ਚਾਰ ਧਾਮ ਯਾਤਰਾ','char dham yatra in punjabi','ਚਾਰ ਧਾਮ ਪੰਜਾਬੀ','ਹੇਮਕੁੰਟ ਸਾਹਿਬ ਬਦਰੀਨਾਥ','chardham yatra punjabi guide'],
  alternates: { canonical: `${SITE.baseUrl}/${SLUG}` },
  openGraph: {
    title: 'ਚਾਰ ਧਾਮ ਯਾਤਰਾ 2026 — ਪੂਰੀ ਜਾਣਕਾਰੀ ਪੰਜਾਬੀ ਵਿੱਚ | Shiv Ganga Travels',
    description: 'ਯਮੁਨੋਤਰੀ, ਗੰਗੋਤਰੀ, ਕੇਦਾਰਨਾਥ, ਬਦਰੀਨਾਥ। ਹਰਿਦੁਆਰ ਤੋਂ ₹13,900 ਤੋਂ।',
    url: `${SITE.baseUrl}/${SLUG}`,
    type: 'website',
    locale: 'pa_IN',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra 2026 in Punjabi — Shiv Ganga Travels' }],
  },
};

export default function CharDhamPunjabi() {
  return <CharDhamLanguagePage content={punjabi} slug={SLUG} fontClassName={noto.className} />;
}
