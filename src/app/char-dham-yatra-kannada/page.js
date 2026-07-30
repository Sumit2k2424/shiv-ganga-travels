import { Noto_Sans_Kannada } from 'next/font/google';
import { SITE } from '@/data/packages';
import { kannada } from '@/data/langContent/kannada';
import CharDhamLanguagePage from '@/components/CharDhamLanguagePage';

const SLUG = 'char-dham-yatra-kannada';
const noto = Noto_Sans_Kannada({ subsets: ['kannada'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata = {
  title: { absolute: 'ಚಾರ್ ಧಾಮ್ ಯಾತ್ರೆ 2026 | ₹18,500ದಿಂದ ಆರಂಭ | ಕನ್ನಡದಲ್ಲಿ ಸಂಪೂರ್ಣ ಗೈಡ್' },
  description: 'ಚಾರ್ ಧಾಮ್ ಯಾತ್ರೆ 2026 ಕನ್ನಡದಲ್ಲಿ — ಹರಿದ್ವಾರದಿಂದ ₹18,500ದಿಂದ. ವಿಶ್ವಾಸಾರ್ಹ ಆಪರೇಟರ್, 15+ ವರ್ಷಗಳ ಅನುಭವ, ತತ್ಕ್ಷಣ ದೃಢೀಕರಣ.',
  keywords: ['ಚಾರ್ ಧಾಮ್ ಯಾತ್ರೆ ಕನ್ನಡ', 'char dham yatra in kannada', 'char dham yatra kannada guide', 'chardham yatre kannada mahiti', 'ಹರಿದ್ವಾರದಿಂದ ಚಾರ್ ಧಾಮ್ ಯಾತ್ರೆ'],
  alternates: { canonical: `${SITE.baseUrl}/${SLUG}` },
  openGraph: {
    title: 'ಚಾರ್ ಧಾಮ್ ಯಾತ್ರೆ 2026 — ಕನ್ನಡದಲ್ಲಿ ಸಂಪೂರ್ಣ ಮಾಹಿತಿ | Shiv Ganga Travels',
    description: 'ಯಮುನೋತ್ರಿ, ಗಂಗೋತ್ರಿ, ಕೇದಾರನಾಥ, ಬದರಿನಾಥ. ಹರಿದ್ವಾರದಿಂದ ₹18,500ದಿಂದ ಆರಂಭ. ನೇರ ಆಪರೇಟರ್, ಉಚಿತ ನೋಂದಣಿ ಸಹಾಯ.',
    url: `${SITE.baseUrl}/${SLUG}`,
    type: 'website',
    locale: 'kn_IN',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra 2026 in Kannada — Shiv Ganga Travels' }],
  },
};

export default function CharDhamKannada() {
  return <CharDhamLanguagePage content={kannada} slug={SLUG} fontClassName={noto.className} />;
}
