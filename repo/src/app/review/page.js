import { redirect } from 'next/navigation';

// Short, memorable link to drop into WhatsApp follow-ups, invoices, business
// cards and vehicle stickers. Sends pilgrims straight to the Google
// "write a review" form — the single biggest lever for review growth, which
// in turn feeds Google rankings and AI citation trust.
export const metadata = {
  title: 'Leave a Review — Shiv Ganga Travels',
  description: 'Share your Char Dham Yatra experience with Shiv Ganga Travels on Google.',
  robots: { index: false, follow: false },
};

const WRITE_REVIEW_URL = 'https://www.google.com/maps?cid=16074078434377735602&action=writeareview';

export default function ReviewRedirect() {
  redirect(WRITE_REVIEW_URL);
}
