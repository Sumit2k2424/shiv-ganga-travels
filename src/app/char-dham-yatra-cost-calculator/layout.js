import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Cost Calculator 2026 — Instant Price Range',
  description: 'Free Char Dham Yatra cost calculator 2026. Get a realistic price range by group size, season & city: budget ₹21,000–28,000, deluxe ₹28,000–40,000, luxury ₹45,000–65,000 per person.',
  keywords: ['char dham yatra cost calculator','char dham yatra price calculator 2026','char dham yatra budget calculator','how much does char dham yatra cost','char dham yatra cost per person 2026','char dham yatra price range'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-cost-calculator` },
  openGraph: {
    title: 'Char Dham Yatra Cost Calculator 2026 — Free Instant Estimate',
    description: 'Calculate your exact Char Dham Yatra cost instantly. Personalised for your group size, city, and preferences.',
    url: `${SITE.baseUrl}/char-dham-yatra-cost-calculator`,
    type: 'website',
  },
};

export default function Layout({ children }) {
  return children;
}
