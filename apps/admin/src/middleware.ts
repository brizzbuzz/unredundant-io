import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  console.log(request.cookies.get('auth_token'))

  // if on home page and logged in, redirect to dashboard
  if (request.nextUrl.pathname === '/' && request.cookies.get('auth_token')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (request.cookies.get('auth_token')) {
    return NextResponse.next()
  }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|dashboard).*)',
}
