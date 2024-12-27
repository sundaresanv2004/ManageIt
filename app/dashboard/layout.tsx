import React from "react";
import {AppSidebar} from "@/components/shared/Navbar/app-sidebar";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {NavBar} from "@/components/shared/Navbar/nav-bar";
import Hero from "@/app/dashboard/Hero";

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <NavBar />
                <main>
                    <Hero />
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

