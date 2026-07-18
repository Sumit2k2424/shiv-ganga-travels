import { Noto_Sans_Kannada } from 'next/font/google';
import { SITE } from '@/data/packages';
import { kannada } from '@/data/langContent/kannada';
import CharDhamLanguagePage from '@/components/CharDhamLanguagePage';

const SLUG = 'char-dham-yatra-kannada';
const noto = Noto_Sans_Kannada({ subsets: ['kannada'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata = {
  title: 'ಚಾರ್ ಧಾಮ್ ಯಾತ್ರೆ 2026 ಕನ್ನಡದಲ್ಲಿ (Char Dham in Kannada)',
  description: 'ಚಾರ್ ಧಾಮ್ ಯಾತ್ರೆ 2026 ಸಂಪೂರ್ಣ ಮಾಹಿತಿ ಕನ್ನಡದಲ್ಲಿ — ಯಮುನೋತ್ರಿ, ಗಂಗೋತ್ರಿ, ಕೇದಾರನಾಥ, ಬದರಿನಾಥ. ಹರಿದ್ವಾರದಿಂದ 9 ರಾತ್ರಿ/10 ದಿನ ಪ್ಯಾಕೇಜ್ ₹18,500ದಿಂದ. ನೇರ ಆಪರೇಟರ್, ಕಮಿಷನ್ ಇಲ್ಲ.',
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
