import React from "react";
import {AppSidebar} from "@/components/Navbar/app-sidebar";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {NavBar} from "@/components/Navbar/nav-bar";

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <NavBar />
                <main>
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

