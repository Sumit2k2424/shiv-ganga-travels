import UiKitDemo from './UiKitDemo';

// Internal reference page — deliberately kept out of the index.
// (It is also invisible to sitemap.js, which only auto-discovers
//  `blog/*` and `char-dham-yatra-from-*` routes.)
export const metadata = {
  title: 'UI Kit — shadcn/ui + MagicUI',
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function UiKitPage() {
  return <UiKitDemo />;
}
