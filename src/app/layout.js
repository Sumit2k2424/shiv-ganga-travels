import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SITE } from '@/data/packages';

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: { default: `${SITE.name} — Char Dham Yatra Packages 2025`, template: `%s | ${SITE.name}` },
  description: 'Book Char Dham, Do Dham & Single Dham Yatra packages from Haridwar. VIP darshan, expert guides, all-inclusive. Trusted since 2010.',
  keywords: ['Char Dham Yatra','Kedarnath package','Badrinath package','Uttarakhand pilgrimage','Chardham 2025','Haridwar tour'],
  openGraph: { type:'website', locale:'en_IN', siteName: SITE.name },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ display:'flex', flexDirection:'column', minHeight:'100vh' }}>
        <Navbar />
        <main style={{ flex:1 }}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
