import UiKitDemo from './UiKitDemo';
import RegistryDemo from './RegistryDemo';

// Internal reference page — deliberately kept out of the index.
// (It is also invisible to sitemap.js, which only auto-discovers
//  `blog/*` and `char-dham-yatra-from-*` routes.)
export const metadata = {
  title: 'UI Kit — shadcn/ui + Magic UI + Aceternity + React Bits',
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function UiKitPage() {
  return (
    <>
      <UiKitDemo />
      {/* Registry additions. Server component, so the zero-JS claims in
          UI_COMPONENT_GUIDE.md are exercised in the mode they describe. */}
      <RegistryDemo />
    </>
  );
}
