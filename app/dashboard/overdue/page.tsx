'use client'

import React from 'react'
import useSWR from "swr"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ViewTasks from "@/components/shared/Tasks/ViewTasks"
import { LayoutGrid, List, Columns } from 'lucide-react'
import TaskGrid from "@/components/shared/Tasks/TaskGrid"
import { Task } from "@prisma/client"
import Loading from "@/app/dashboard/loading"
import { useRouter } from 'next/navigation'
import Error from "@/app/dashboard/error"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function PendingOverdueTasks() {
    const router = useRouter()
    const {
        data: tasks,
        error,
        isLoading,
    } = useSWR<Task[]>("/api/tasks", fetcher)

    if (isLoading) return <Loading />
    if (error) return <Error error={error} reset={() => router.refresh()} />

    const now = new Date()
    now.setHours(0, 0, 0, 0) // Set to the start of today

    const pendingOverdueTasks = (tasks || []).filter(task => {
        if (!task.dueDate) return false
        const dueDate = new Date(task.dueDate)
        dueDate.setHours(0, 0, 0, 0) // Set to the start of the due date
        return dueDate < now && task.status !== 'DONE' // Tasks due before today and not completed
    })

    return (
        <div className="h-auto">
            <div className="flex flex-1 flex-col gap-4 p-4 max-w-7xl mx-auto">
                <Tabs defaultValue="grid">
                    <TabsList>
                        <TabsTrigger value="grid">
                            <LayoutGrid className="w-4 h-4 mr-2" />
                            Grid View
                        </TabsTrigger>
                        <TabsTrigger value="table">
                            <List className="w-4 h-4 mr-2" />
                            Table View
                        </TabsTrigger>
                        <TabsTrigger value="kanban">
                            <Columns className="w-4 h-4 mr-2" />
                            Kanban View
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="grid" className="mt-6">
                        {pendingOverdueTasks.length === 0 ? (
                            <div className="text-center text-gray-500 dark:text-gray-400">No pending or overdue tasks!</div>
                        ) : (
                            <TaskGrid tasks={pendingOverdueTasks} />
                        )}
                    </TabsContent>
                    <TabsContent value="table" className="mt-6">
                        {pendingOverdueTasks.length === 0 ? (
                            <div className="text-center text-gray-500 dark:text-gray-400">No pending or overdue tasks!</div>
                        ) : (
                            <ViewTasks tasks={pendingOverdueTasks} />
                        )}
                    </TabsContent>
                    <TabsContent value="kanban" className="mt-6">
                        <div className="text-center text-gray-500 dark:text-gray-400">Kanban View Coming Soon</div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
