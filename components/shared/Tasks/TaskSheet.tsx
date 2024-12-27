'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Calendar, Clock, Eye, Download, Star, Flower, Sun, Moon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TaskDetailsSheet() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
      <div className={`p-4 ${theme}`}>
        <Sheet>
          <SheetTrigger asChild>
            <Button>View Task Details</Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-[600px] lg:max-w-[800px] overflow-y-auto">
            <SheetHeader className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">Tasks</span>
                  </div>
                  <SheetTitle className="text-2xl font-bold">
                    Complete Project Documentation
                  </SheetTitle>
                </div>
                <Button variant="outline" size="icon" onClick={toggleTheme}>
                  {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                  Medium Priority
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Due: Jul 15
                </Badge>
              </div>
            </SheetHeader>

            <div className="mt-6 space-y-6">
              {/* Time Left Section */}
              <div className="flex items-center justify-between rounded-lg bg-slate-100 dark:bg-slate-800 p-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>Time Left on this task</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xl font-mono">03:45:00</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Clock className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Description Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Description</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Complete the project documentation including system architecture,
                    API endpoints, and user guide. Ensure all sections are up-to-date
                    with the latest features and changes.
                  </p>
                  <p>
                    Collaborate with team members to gather necessary information
                    and review the final document for accuracy and completeness.
                  </p>
                </div>
              </div>

              {/* Attachments Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Attachments</h2>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-3 gap-3 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 shrink-0">
                        <Flower className="h-5 w-5 text-blue-500 dark:text-blue-300" />
                      </div>
                      <div>
                        <p className="font-medium">Project_Outline.docx</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">10:32 AM, 18, June</p>
                      </div>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto justify-end">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-3 gap-3 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900 shrink-0">
                        <Star className="h-5 w-5 text-purple-500 dark:text-purple-300" />
                      </div>
                      <div>
                        <p className="font-medium">API_Documentation.pdf</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">14:45 PM, 20, June</p>
                      </div>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto justify-end">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <Tabs defaultValue="comments" className="w-full">
                <TabsList>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                  <TabsTrigger value="updates">Updates</TabsTrigger>
                </TabsList>
                <TabsContent value="comments" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Alice Smith</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">22nd Jun 2024</span>
                        </div>
                        <p>Can we include a section on the new feature rollout?</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>BJ</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Bob Johnson</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Just Now</span>
                        </div>
                        <p>I&#39;ve updated the API endpoints. Please review.</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                        className="w-full rounded-lg border p-3 pr-12 dark:bg-gray-800 dark:border-gray-700"
                        placeholder="Add a comment..."
                    />
                    <Button
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        size="sm"
                    >
                      Send
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </SheetContent>
        </Sheet>
      </div>
  )
}

