import Link from 'next/link';

// Dense internal-linking mesh shared by every "Char Dham from <city>" page.
// Pass `current` = the city slug (e.g. "delhi") to exclude the current page
// and to nearby-bias the sibling cities shown.

// Only cities that still have a real 200 page. Eleven were consolidated into
// Delhi/Mumbai on 31 Aug 2026 and the seven templated ones that remained
// (Noida, Chandigarh, Kolkata, Pune, Hyderabad, Bangalore, Chennai) followed on
// 14 Sep 2026 — all 308 in data/redirects.js. Linking to a redirected slug
// here sent every crawl through a 308 hop on ~20 pages.
const CITIES = ['delhi','mumbai'];

const LABEL = { delhi:'Delhi & North India', mumbai:'Mumbai & South India', haridwar:'Haridwar' };

const chip = {
  background:'#fff', border:'1px solid hsl(var(--border))', color:'var(--navy)',
  padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none',
};
const heading = { fontWeight:700, fontSize:13.5, color:'var(--navy)', margin:'0 0 10px' };
const row = { display:'flex', gap:8, flexWrap:'wrap', marginBottom:18 };

export default function CityLinkMesh({ current = '' }) {
  // Show up to 8 sibling cities, starting just after the current one in the list.
  const others = CITIES.filter(c => c !== current);
  const start = Math.max(0, CITIES.indexOf(current));
  const siblings = [...others.slice(start), ...others.slice(0, start)].slice(0, 8);

  return (
    <nav aria-label="Related Char Dham pages" style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:36 }}>
      <p style={heading}>Char Dham Yatra from other cities</p>
      <div style={row}>
        {siblings.map(c => (
          <Link prefetch={false} key={c} href={`/char-dham-yatra-from-${c}`} style={chip}>From {LABEL[c]} →</Link>
        ))}
      </div>

      <p style={heading}>Plan &amp; book your yatra</p>
      <div style={row}>
        <Link prefetch={false} href="/packages/char-dham" style={chip}>Char Dham Packages →</Link>
        <Link prefetch={false} href="/packages/char-dham-yatra-9n-10d-haridwar" style={chip}>9N/10D from Haridwar →</Link>
        <Link prefetch={false} href="/packages/char-dham-yatra-from-delhi-10n-11d" style={chip}>10N/11D from Delhi →</Link>
        <Link prefetch={false} href="/char-dham-helicopter" style={chip}>By Helicopter →</Link>
        <Link prefetch={false} href="/do-dham-yatra" style={chip}>Do Dham Yatra →</Link>
        <Link prefetch={false} href="/char-dham-yatra-cost-calculator" style={chip}>Cost Calculator →</Link>
      </div>

      <p style={heading}>Stay, route &amp; logistics</p>
      <div style={row}>
        Char Dham Hotels →
        <Link prefetch={false} href="/char-dham-yatra-route-map" style={chip}>Route Map →</Link>
        <Link prefetch={false} href="/blog/char-dham-yatra-registration" style={chip}>2026 Registration →</Link>
        <Link prefetch={false} href="/blog/best-time-char-dham" style={chip}>Best Time to Go →</Link>
        <Link prefetch={false} href="/blog/char-dham-yatra-packing-list" style={chip}>Packing List →</Link>
        <Link prefetch={false} href="/blog/char-dham-yatra-cost" style={chip}>Cost Breakdown →</Link>
      </div>
    </nav>
  );
}
