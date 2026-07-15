import { SITE } from '@/data/packages';

export const metadata = {
  title: 'All Char Dham Yatra Packages 2026 — Browse & Filter',
  description: 'Browse all Char Dham Yatra packages 2026 from Haridwar. Char Dham, Do Dham, helicopter, senior citizen and Uttarakhand tours. Direct operator, zero commission.',
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
