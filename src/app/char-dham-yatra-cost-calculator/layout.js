import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Cost Calculator 2026 — Instant Price Range',
  description: 'Free Char Dham Yatra cost calculator 2026. Realistic price ranges by group size and season: budget ₹18,500–28,000, deluxe ₹28,000–40,000/person.',
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
