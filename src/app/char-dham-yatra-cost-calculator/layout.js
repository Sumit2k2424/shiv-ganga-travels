import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Cost Calculator 2026 — Instant Price Estimate | Shiv Ganga Travels',
  description: 'Free Char Dham Yatra cost calculator 2026. Enter your group size, start city, and preferences to get an instant price estimate. Plans from ₹19,500 per person.',
  keywords: ['char dham yatra cost calculator','char dham yatra price calculator 2026','char dham yatra budget calculator','how much does char dham yatra cost'],
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
