import { Noto_Sans_Telugu } from 'next/font/google';
import { SITE } from '@/data/packages';
import { telugu } from '@/data/langContent/telugu';
import CharDhamLanguagePage from '@/components/CharDhamLanguagePage';

const SLUG = 'char-dham-yatra-telugu';
const noto = Noto_Sans_Telugu({ subsets: ['telugu'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata = {
  title: { absolute: `చార్ ధామ్ యాత్ర ${SITE.season} | ₹13,900 నుండి ప్రారంభం | తెలుగులో పూర్తి గైడ్` },
  description: `చార్ ధామ్ యాత్ర ${SITE.season} తెలుగులో — హరిద్వార్ నుండి ₹13,900 నుండి. విశ్వసనీయ ఆపరేటర్, 15+ సంవత్సరాల అనుభవం, తక్షణ నిర్ధారణ.`,
  keywords: ['చార్ ధామ్ యాత్ర తెలుగు', 'char dham yatra in telugu', 'char dham yatra telugu guide', 'chardham yatra telugu vivaralu', 'హరిద్వార్ నుండి చార్ ధామ్ యాత్ర'],
  alternates: { canonical: `${SITE.baseUrl}/${SLUG}` },
  openGraph: {
    title: `చార్ ధామ్ యాత్ర ${SITE.season} — తెలుగులో సంపూర్ణ సమాచారం | Shiv Ganga Travels`,
    description: 'యమునోత్రి, గంగోత్రి, కేదారనాథ్, బద్రీనాథ్. హరిద్వార్ నుండి ₹13,900 నుండి ప్రారంభం. ప్రత్యక్ష ఆపరేటర్, ఉచిత రిజిస్ట్రేషన్ సహాయం.',
    url: `${SITE.baseUrl}/${SLUG}`,
    type: 'website',
    locale: 'te_IN',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Char Dham Yatra ${SITE.season} in Telugu — Shiv Ganga Travels` }],
  },
};

export default function CharDhamTelugu() {
  return <CharDhamLanguagePage content={telugu} slug={SLUG} fontClassName={noto.className} />;
}
