import { Noto_Sans_Oriya } from 'next/font/google';
import { SITE } from '@/data/packages';
import { odia } from '@/data/langContent/odia';
import CharDhamLanguagePage from '@/components/CharDhamLanguagePage';

const SLUG = 'char-dham-yatra-odia';
const noto = Noto_Sans_Oriya({ subsets: ['oriya'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata = {
  title: 'ଚାର ଧାମ ଯାତ୍ରା 2026 ଓଡ଼ିଆରେ (Char Dham in Odia)',
  description: 'ଚାର ଧାମ ଯାତ୍ରା 2026 ସମ୍ପୂର୍ଣ୍ଣ ସୂଚନା ଓଡ଼ିଆରେ — ଯମୁନୋତ୍ରୀ, ଗଙ୍ଗୋତ୍ରୀ, କେଦାରନାଥ, ବଦ୍ରୀନାଥ। ହରିଦ୍ୱାରରୁ 9 ରାତି/10 ଦିନ ପ୍ୟାକେଜ ₹18,500ରୁ। ସିଧାସଳଖ ଅପରେଟର, କମିଶନ ନାହିଁ।',
  keywords: ['ଚାର ଧାମ ଯାତ୍ରା ଓଡ଼ିଆ', 'char dham yatra in odia', 'char dham yatra odia guide', 'chardham yatra odia', 'ପୁରୀ ଧାମ ଓ ଚାର ଧାମ ଯାତ୍ରା'],
  alternates: { canonical: `${SITE.baseUrl}/${SLUG}` },
  openGraph: {
    title: 'ଚାର ଧାମ ଯାତ୍ରା 2026 — ଓଡ଼ିଆରେ ସମ୍ପୂର୍ଣ୍ଣ ସୂଚନା | Shiv Ganga Travels',
    description: 'ଯମୁନୋତ୍ରୀ, ଗଙ୍ଗୋତ୍ରୀ, କେଦାରନାଥ, ବଦ୍ରୀନାଥ। ହରିଦ୍ୱାରରୁ ₹18,500ରୁ ଆରମ୍ଭ। ସିଧାସଳଖ ଅପରେଟର, ମାଗଣା ପଞ୍ଜୀକରଣ ସହାୟତା।',
    url: `${SITE.baseUrl}/${SLUG}`,
    type: 'website',
    locale: 'or_IN',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra 2026 in Odia — Shiv Ganga Travels' }],
  },
};

export default function CharDhamOdia() {
  return <CharDhamLanguagePage content={odia} slug={SLUG} fontClassName={noto.className} />;
}
