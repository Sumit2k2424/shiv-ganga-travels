import { Noto_Sans_Bengali } from 'next/font/google';
import { SITE } from '@/data/packages';
import { assamese } from '@/data/langContent/assamese';
import CharDhamLanguagePage from '@/components/CharDhamLanguagePage';

const SLUG = 'char-dham-yatra-assamese';
// Assamese shares the Bengali-Assamese Unicode block (adds ৰ/ৱ), so
// Noto Sans Bengali renders it correctly — there is no separate
// "Noto Sans Assamese" family in the Google Fonts catalog.
const noto = Noto_Sans_Bengali({ subsets: ['bengali'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata = {
  title: 'চাৰ ধাম যাত্ৰা 2026 অসমীয়াত (Char Dham in Assamese)',
  description: 'চাৰ ধাম যাত্ৰা 2026 সম্পূৰ্ণ তথ্য অসমীয়াত — যমুনোত্ৰী, গংগোত্ৰী, কেদাৰনাথ, বদ্ৰীনাথ। হৰিদ্বাৰৰ পৰা 9 ৰাতি/10 দিন পেকেজ ₹18,500ৰ পৰা। প্ৰত্যক্ষ অপাৰেটৰ, কমিশন নাই।',
  keywords: ['চাৰ ধাম যাত্ৰা অসমীয়া', 'char dham yatra in assamese', 'char dham yatra assamese guide', 'chardham yatra oxomiya', 'হৰিদ্বাৰৰ পৰা চাৰ ধাম যাত্ৰা'],
  alternates: { canonical: `${SITE.baseUrl}/${SLUG}` },
  openGraph: {
    title: 'চাৰ ধাম যাত্ৰা 2026 — অসমীয়াত সম্পূৰ্ণ তথ্য | Shiv Ganga Travels',
    description: 'যমুনোত্ৰী, গংগোত্ৰী, কেদাৰনাথ, বদ্ৰীনাথ। হৰিদ্বাৰৰ পৰা ₹18,500ৰ পৰা আৰম্ভ। প্ৰত্যক্ষ অপাৰেটৰ, বিনামূলীয়া পঞ্জীয়ন সহায়।',
    url: `${SITE.baseUrl}/${SLUG}`,
    type: 'website',
    locale: 'as_IN',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra 2026 in Assamese — Shiv Ganga Travels' }],
  },
};

export default function CharDhamAssamese() {
  return <CharDhamLanguagePage content={assamese} slug={SLUG} fontClassName={noto.className} />;
}
