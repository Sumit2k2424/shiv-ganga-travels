// Serves 410 Gone for the pages removed on 14 Sep 2026 (src/data/gone.js).
//
// Next has no way to declare a 410 in next.config.js — `redirects` can only
// emit 3xx — and a deleted route otherwise falls through to the 404 page.
// Google treats 404 as "maybe it comes back" and keeps re-crawling for weeks;
// 410 is "deliberately removed" and the URL leaves the index on the next
// visit. For a cleanup whose whole point is telling Google the thin pages
// are gone, the status code is the message.
//
// The matcher skips Next internals, the API, and static files, so this runs
// only on page requests. The check is one Set lookup against a trimmed path
// (with or without a trailing slash), then the request continues untouched.
import { NextResponse } from 'next/server';
import { GONE_PATHS } from '@/data/gone';

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  if (GONE_PATHS.has(path)) {
    return new NextResponse('Gone', {
      status: 410,
      headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/|api/|static/|.*\\.[a-zA-Z0-9]{2,5}$).*)'],
};
