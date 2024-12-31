"use client"

import * as React from "react"
import {
  Calendar,
  Home,
  ListChecks,
  User,
  Bookmark,
  LaptopMinimalCheck,
  Frame,
  Map,
  PieChart,
  FileWarning
} from 'lucide-react'
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavFooter} from "./nav-footer"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"


const data = {
  navMain: [
    {
      title: "Home",
      url: "/dashboard/",
      icon: Home,
    },
    {
      title: "Completed",
      url: "/dashboard/completed/",
      icon: ListChecks,
    },
    {
      title: "Today",
      url: "/dashboard/today/",
      icon: Calendar,
    },
    {
      title: "Important",
      url: "/dashboard/important/",
      icon: Bookmark,
    },
    {
      title: "Overdue",
      url: "/dashboard/overdue/",
      icon: FileWarning,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <LaptopMinimalCheck className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Acme Inc</span>
                <span className="truncate text-xs">Free</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

