import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname

    // Check if the path starts with /dashboard
    if (path.startsWith('/dashboard')) {
        const session = await getToken({
            req,
            secret: process.env.NEXTAUTH_SECRET,
        })

        // Redirect to login if there is no session
        if (!session) {
            return NextResponse.redirect(new URL('/auth/login', req.url))
        }
    }

    // Continue to the requested page
    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*'],
}

