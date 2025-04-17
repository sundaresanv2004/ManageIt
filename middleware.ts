import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

const AUTHENTICATED_ROUTES = ["/dashboard"]

export async function middleware(req: NextRequest) {
    try {
        const { pathname } = req.nextUrl

        // Skip auth routes to prevent interference with the auth flow
        if (pathname.startsWith("/api/auth")) {
            return NextResponse.next()
        }

        // Get the token and parse it
        const token = await getToken({
            req,
            secret: process.env.AUTH_SECRET,
            secureCookie: process.env.NODE_ENV === "production",
        })

        // 1. Restrict routes for unauthenticated users
        if ([...AUTHENTICATED_ROUTES].some((route) => pathname.startsWith(route))) {
            if (!token) {
                console.log("Redirecting unauthenticated user to home")
                const loginUrl = new URL("/", req.url)
                return NextResponse.redirect(loginUrl)
            }
        }


        return NextResponse.next()
    } catch (error) {
        console.error("Middleware error:", error)
        // In case of error, allow the request to proceed
        return NextResponse.next()
    }
}

export const config = {
    // Update matcher to explicitly exclude auth routes
    matcher: [
        // Include all paths except static assets and auth routes
        "/((?!_next/static|_next/image|favicon.ico|.*\\.png$|api/auth).*)",
    ],
}

