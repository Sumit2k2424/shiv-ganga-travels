import { Noto_Sans_Malayalam } from 'next/font/google';
import { SITE } from '@/data/packages';
import { malayalam } from '@/data/langContent/malayalam';
import CharDhamLanguagePage from '@/components/CharDhamLanguagePage';

const SLUG = 'char-dham-yatra-malayalam';
const noto = Noto_Sans_Malayalam({ subsets: ['malayalam'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata = {
  title: { absolute: `ചാർ ധാം യാത്ര ${SITE.season} | ₹13,900 മുതൽ | മലയാളത്തിൽ` },
  description: `ചാർ ധാം യാത്ര ${SITE.season} — ഹരിദ്വാറിൽ നിന്ന് 9 രാത്രി/10 ദിവസം ₹13,900 മുതൽ. നേരിട്ട് ഓപ്പറേറ്റർ, ഏജന്റ് കമ്മീഷനില്ല.`,
  keywords: ['ചാർ ധാം യാത്ര','char dham yatra in malayalam','ചാർ ധാം മലയാളം','chardham yatra malayalam guide','ബദരീനാഥ് കേദാർനാഥ് മലയാളം'],
  alternates: { canonical: `${SITE.baseUrl}/${SLUG}` },
  openGraph: {
    title: `ചാർ ധാം യാത്ര ${SITE.season} — പൂർണ്ണ വിവരങ്ങൾ മലയാളത്തിൽ | Shiv Ganga Travels`,
    description: 'യമുനോത്രി, ഗംഗോത്രി, കേദാർനാഥ്, ബദരീനാഥ്. ഹരിദ്വാറിൽ നിന്ന് ₹13,900 മുതൽ.',
    url: `${SITE.baseUrl}/${SLUG}`,
    type: 'website',
    locale: 'ml_IN',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Char Dham Yatra ${SITE.season} in Malayalam — Shiv Ganga Travels` }],
  },
};

export default function CharDhamMalayalam() {
  return <CharDhamLanguagePage content={malayalam} slug={SLUG} fontClassName={noto.className} />;
}
