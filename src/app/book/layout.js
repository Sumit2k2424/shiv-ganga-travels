// Transactional wizard — noindex (thin, no ranking value; keeps the funnel clean).
// No canonical on purpose: every `/book?pkg=…` variant inherits this metadata,
// and a canonical pointing at a noindexed URL is a contradictory signal Google
// ignores (Screaming Frog: "Non-Indexable Canonical"). Noindex alone is enough.
export const metadata = {
  title: 'Plan & Book Your Yatra',
  description: 'Build your Char Dham or Do Dham yatra enquiry step by step and send it to Shiv Ganga Travels for an exact, itemised quote.',
  robots: { index: false, follow: true },
};

export default function BookLayout({ children }) {
  return children;
}
