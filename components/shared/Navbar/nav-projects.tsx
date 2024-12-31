

import {Clock, Plus } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar"

export function NavProjects() {
  return (
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
        <div className="flex items-center justify-between px-2">
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Plus className="h-4 w-4" />
            <span className="sr-only">New Project</span>
          </Button>
        </div>
        <SidebarMenu>
          <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-900 p-4 shadow-md mx-2">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200/50 dark:bg-slate-700/50">
                <Clock className="h-4 w-4 text-gray-600 dark:text-slate-300"/>
              </div>
              <h3 className="text-sm font-medium text-gray-800 dark:text-slate-200">Projects Coming Soon!</h3>
            </div>
            <div
                className="absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                      "radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent 70%)",
                }}
            />
          </div>
        </SidebarMenu>
      </SidebarGroup>
  )
}

