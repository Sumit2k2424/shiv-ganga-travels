import { Noto_Sans_Bengali } from 'next/font/google';
import { SITE } from '@/data/packages';
import { bengali } from '@/data/langContent/bengali';
import CharDhamLanguagePage from '@/components/CharDhamLanguagePage';

const SLUG = 'char-dham-yatra-bengali';
const noto = Noto_Sans_Bengali({ subsets: ['bengali'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata = {
  title: { absolute: `চার ধাম যাত্রা ${SITE.season} | ₹13,900 থেকে শুরু | বাংলায় সম্পূর্ণ গাইড` },
  description: `চার ধাম যাত্রা ${SITE.season} বাংলায় — হরিদ্বার থেকে ₹13,900 থেকে। বিশ্বস্ত অপারেটর, 15+ বছরের অভিজ্ঞতা, তাৎক্ষণিক নিশ্চিতকরণ।`,
  keywords: ['চার ধাম যাত্রা বাংলা', 'char dham yatra in bengali', 'char dham yatra bengali guide', 'chardham yatra bangla', 'হরিদ্বার থেকে চার ধাম যাত্রা', 'kedarnath yatra bengali'],
  alternates: { canonical: `${SITE.baseUrl}/${SLUG}` },
  openGraph: {
    title: `চার ধাম যাত্রা ${SITE.season} — সম্পূর্ণ তথ্য বাংলায় | Shiv Ganga Travels`,
    description: 'যমুনোত্রী, গঙ্গোত্রী, কেদারনাথ, বদ্রীনাথ। হরিদ্বার থেকে ₹13,900 থেকে শুরু। সরাসরি অপারেটর, বিনামূল্যে নিবন্ধন সহায়তা।',
    url: `${SITE.baseUrl}/${SLUG}`,
    type: 'website',
    locale: 'bn_IN',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Char Dham Yatra ${SITE.season} in Bengali — Shiv Ganga Travels` }],
  },
};

export default function CharDhamBengali() {
  return <CharDhamLanguagePage content={bengali} slug={SLUG} fontClassName={noto.className} />;
}
