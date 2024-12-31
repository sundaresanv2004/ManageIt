"use client"

import * as React from "react"
import {
  Bell, LogIn,
  LogOut,
  Menu,
  Settings,
  Sparkles,
  User
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Breadcrumb from "@/components/shared/Breadcrumb";
import {ComingSoonDialog} from "@/components/shared/coming-soon-dialog";
import {useSession} from "next-auth/react";
import Link from "next/link";


export function NavBar() {
  const { status, data: session } = useSession()

  return (
      <div className="border-b">
        <div className="flex h-16 items-center px-4 justify-between">
          <div className="flex items-center">
            <div className="flex items-center justify-center space-x-4">
              <SidebarTrigger className="-ml-1"/>
              <Separator orientation="vertical" className="mr-2 h-4"/>
              <Breadcrumb />
            </div>
          </div>

          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <Menu className='h-4 w-4'/>
                </Button>
              </SheetTrigger>
              <SheetContent side="top">
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg" alt="User"/>
                    <AvatarFallback>AK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Akkshay Kumar</p>
                    <p className="text-xs text-muted-foreground">sundaresanv16@gmail.com</p>
                  </div>
                </div>
                <div className="grid gap-4 py-4">
                  <ComingSoonDialog />
                  <Button variant="ghost" className="justify-start" onClick={() => {
                  }}>
                    <Bell className="mr-2 h-5 w-5"/>
                    Notifications
                  </Button>
                  <Separator/>
                  <Button variant="ghost" className="justify-start" onClick={() => {
                  }}>
                    <Sparkles className="mr-2 h-4 w-4"/>
                    Upgrade to Pro
                  </Button>
                  <Button variant="ghost" className="justify-start" onClick={() => {
                  }}>
                    <User className="mr-2 h-4 w-4"/>
                    Profile
                  </Button>
                  <Button variant="ghost" className="justify-start" onClick={() => {
                  }}>
                    <Settings className="mr-2 h-4 w-4"/>
                    Settings
                  </Button>
                  <Separator/>
                  <Button variant="ghost" className="justify-start" onClick={() => {
                  }}>
                    <LogOut className="mr-2 h-4 w-4"/>
                    Log out
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="ml-auto flex items-center space-x-4 max-md:hidden">
            <ComingSoonDialog />
            <Button variant="ghost">
              <Bell className="h-5 w-5"/>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src={session?.user?.image || ""} alt="User"/>
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  align="end"
                  sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={session?.user?.image || ""} alt="User"/>
                      <AvatarFallback className="rounded-lg">{session?.user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{session?.user?.name}</span>
                      <span className="truncate text-xs">{session?.user?.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                  { status === "authenticated" ?
                      <Link href="/api/auth/signout" className="flex items-center justify-center">
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </Link> :
                      <Link href="/api/auth/signin" className="flex items-center justify-center">
                        <LogIn className="mr-2 h-4 w-4" />
                        Log In
                      </Link>
                  }
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
  )
}

