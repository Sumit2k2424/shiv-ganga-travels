import { SITE } from '@/data/packages';
import CostCalculator from './CostCalculatorClient';

export const metadata = {
  title: 'Char Dham Yatra Cost Calculator 2026',
  description: 'Calculate exact cost of Char Dham Yatra 2026. Add pilgrims, pony, helicopter, hotel upgrade. Packages from ₹19,500 per person from Haridwar.',
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-cost-calculator` },
  openGraph: {
    title: 'Char Dham Yatra Cost Calculator 2026',
    description: 'Estimate your Char Dham Yatra cost instantly. Packages from ₹19,500.',
    url: `${SITE.baseUrl}/char-dham-yatra-cost-calculator`,
    type: 'website',
  },
};

export default function Page() {
  return <CostCalculator />;
}
