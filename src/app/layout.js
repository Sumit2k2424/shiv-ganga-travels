import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SITE } from '@/data/packages';

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: { default:`${SITE.name} — Char Dham Yatra Packages 2025`, template:`%s | ${SITE.name}` },
  description:'Book Char Dham, Do Dham & Single Dham Yatra from Haridwar. Zero commission, VIP darshan, expert guides. Trusted since 2010 by 50,000+ pilgrims.',
  keywords:['Char Dham Yatra 2025','Char Dham package Haridwar','Kedarnath Yatra package','Badrinath Yatra','Uttarakhand pilgrimage','Do Dham Yatra','Chardham 2025','helicopter Char Dham'],
  openGraph:{ type:'website', locale:'en_IN', url:SITE.baseUrl, siteName:SITE.name },
  robots:{ index:true, follow:true },
  category:'travel',
};
export const viewport = { width:'device-width', initialScale:1, themeColor:'#0F2B5B' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link rel="dns-prefetch" href="https://images.unsplash.com"/>
        <link rel="dns-prefetch" href="https://images.pexels.com"/>
        <link rel="dns-prefetch" href="https://upload.wikimedia.org"/>
        <link rel="icon" type="image/svg+xml" href={`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="20" cy="20" r="19" fill="#0F2B5B"/><text x="20" y="28" font-size="20" font-weight="700" font-family="serif" fill="#E8920A" text-anchor="middle">ॐ</text></svg>`)}`}/>
      </head>
      <body style={{ display:'flex', flexDirection:'column', minHeight:'100vh' }}>
        <Navbar/>
        <main style={{ flex:1 }}>{children}</main>
        <Footer/>
        <WhatsAppButton/>
      </body>
    </html>
  );
}
