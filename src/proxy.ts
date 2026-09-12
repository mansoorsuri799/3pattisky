import { NextRequest, NextResponse } from 'next/server';

/**
 * The homepage's WebSite schema used to advertise a Sitelinks Search Box
 * pointing at /blog?q={search_term_string}. Google can crawl that template
 * as a real URL, and /blog's search box is client-side only (it never reads
 * the `q` param on the server), so every crawled variant renders identical
 * content to plain /blog — pure duplicate-URL noise in Search Console.
 *
 * The schema's `potentialAction`/SearchAction has been removed from
 * src/app/page.tsx so Google stops learning about this pattern going
 * forward, but this redirect also cleans up any such URL Google may have
 * already crawled: 301 to the same path without `s`/`q` so Search Console
 * drops the "alternate page with proper canonical" entry after recrawl.
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hadSearchParam = url.searchParams.has('s') || url.searchParams.has('q');
  if (!hadSearchParam) {
    return NextResponse.next();
  }

  url.searchParams.delete('s');
  url.searchParams.delete('q');
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|api/|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|woff|woff2|json|xml|txt|js|css|map)$).*)',
  ],
};
