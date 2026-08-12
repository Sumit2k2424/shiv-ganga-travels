import { Noto_Sans_Tamil } from 'next/font/google';
import { SITE } from '@/data/packages';
import { tamil } from '@/data/langContent/tamil';
import CharDhamLanguagePage from '@/components/CharDhamLanguagePage';

const SLUG = 'char-dham-yatra-tamil';
const noto = Noto_Sans_Tamil({ subsets: ['tamil'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata = {
  title: { absolute: 'சார் தாம் யாத்திரை 2026 | ₹13,900 முதல் | தமிழில்' },
  description: 'சார் தாம் யாத்திரை 2026 — ஹரித்வாரிலிருந்து 9 இரவு/10 நாள் ₹13,900 முதல். நேரடி இயக்குநர், முகவர் கமிஷன் இல்லை.',
  keywords: ['சார் தாம் யாத்திரை','char dham yatra in tamil','சார் தாம் தமிழ்','chardham yatra tamil guide','பத்ரிநாத் கேதார்நாத் தமிழ்'],
  alternates: { canonical: `${SITE.baseUrl}/${SLUG}` },
  openGraph: {
    title: 'சார் தாம் யாத்திரை 2026 — முழு விவரங்கள் தமிழில் | Shiv Ganga Travels',
    description: 'யமுனோத்ரி, கங்கோத்ரி, கேதார்நாத், பத்ரிநாத். ஹரித்வாரிலிருந்து ₹13,900 முதல்.',
    url: `${SITE.baseUrl}/${SLUG}`,
    type: 'website',
    locale: 'ta_IN',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra 2026 in Tamil — Shiv Ganga Travels' }],
  },
};

export default function CharDhamTamil() {
  return <CharDhamLanguagePage content={tamil} slug={SLUG} fontClassName={noto.className} />;
}
