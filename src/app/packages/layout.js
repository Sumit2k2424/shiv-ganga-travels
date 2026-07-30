import { SITE } from '@/data/packages';

export const metadata = {
  title: { absolute: 'All Char Dham Yatra Packages 2026 | Browse & Filter | Direct Operator' },
  description: 'Browse all Char Dham Yatra packages 2026 from Haridwar. Trusted operator, 15+ yrs experience, zero commission, instant confirmation.',
  alternates: { canonical: `${SITE.baseUrl}/packages` },
  openGraph: {
    title: 'All Char Dham Yatra Packages 2026 — Haridwar',
    description: 'All Char Dham packages 2026. Browse, filter by type, duration and price. Direct operator from Haridwar.',
    url: `${SITE.baseUrl}/packages`,
    type: 'website',
  },
};

export default function PackagesLayout({ children }) {
  return children;
}
