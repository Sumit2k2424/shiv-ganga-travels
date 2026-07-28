import { SITE } from '@/data/packages';

// Transactional wizard — noindex (thin, no ranking value; keeps the funnel clean).
export const metadata = {
  title: 'Plan & Book Your Yatra',
  description: 'Build your Char Dham or Do Dham yatra enquiry step by step and send it to Shiv Ganga Travels for an exact, itemised quote.',
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE.baseUrl}/book` },
};

export default function BookLayout({ children }) {
  return children;
}
