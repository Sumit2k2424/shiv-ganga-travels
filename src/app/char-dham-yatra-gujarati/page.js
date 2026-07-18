import { Noto_Sans_Gujarati } from 'next/font/google';
import { SITE } from '@/data/packages';
import { gujarati } from '@/data/langContent/gujarati';
import CharDhamLanguagePage from '@/components/CharDhamLanguagePage';

const SLUG = 'char-dham-yatra-gujarati';
const noto = Noto_Sans_Gujarati({ subsets: ['gujarati'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata = {
  title: 'ચાર ધામ યાત્રા 2026 ગુજરાતીમાં (Char Dham in Gujarati)',
  description: 'ચાર ધામ યાત્રા 2026 સંપૂર્ણ માહિતી ગુજરાતીમાં — યમુનોત્રી, ગંગોત્રી, કેદારનાથ, બદ્રીનાથ. હરિદ્વારથી 9 રાત/10 દિવસ પેકેજ ₹18,500થી. સીધા ઓપરેટર, કોઈ કમિશન નહીં.',
  keywords: ['ચાર ધામ યાત્રા ગુજરાતી', 'char dham yatra in gujarati', 'char dham yatra gujarati guide', 'chardham yatra gujarati mahiti', 'હરિદ્વારથી ચાર ધામ યાત્રા'],
  alternates: { canonical: `${SITE.baseUrl}/${SLUG}` },
  openGraph: {
    title: 'ચાર ધામ યાત્રા 2026 — સંપૂર્ણ માહિતી ગુજરાતીમાં | Shiv Ganga Travels',
    description: 'યમુનોત્રી, ગંગોત્રી, કેદારનાથ, બદ્રીનાથ. હરિદ્વારથી ₹18,500થી શરૂ. સીધા ઓપરેટર, મફત રજિસ્ટ્રેશન સહાય.',
    url: `${SITE.baseUrl}/${SLUG}`,
    type: 'website',
    locale: 'gu_IN',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra 2026 in Gujarati — Shiv Ganga Travels' }],
  },
};

export default function CharDhamGujarati() {
  return <CharDhamLanguagePage content={gujarati} slug={SLUG} fontClassName={noto.className} />;
}
