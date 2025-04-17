import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {ThemeProvider} from "@/components/ui/theme-provider";
import {Toaster} from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react"
import type { ReactNode } from "react"
import { auth } from "@/auth"

const SpaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.woff",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "ManageIt",
  description: "Manage you task with ManageIt",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
    const session = await auth()

    return (
        <html lang="en">
        <SessionProvider session={session}>
            <body
                className={`${SpaceGrotesk.className} antialiased`}
            >
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
                <Toaster />
            </ThemeProvider>
            </body>
        </SessionProvider>
        </html>
    );
}

export default RootLayout;
