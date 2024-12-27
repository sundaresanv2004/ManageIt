"use client";

import React from 'react'
import useSWR from "swr";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ViewTasks from "@/components/shared/Tasks/ViewTasks"
import { LayoutGrid, List, Columns } from 'lucide-react'
import TaskGrid from "@/components/shared/Tasks/TaskGrid";
import {Task} from "@prisma/client";
import Loading from "@/app/dashboard/loading";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ViewTabs = () => {
    const {
        data: tasks,
        error,
        isLoading,
    } = useSWR<Task[]>("/api/tasks", fetcher);

    if (isLoading) return <Loading />;

    const tasksList = tasks || [];
    console.log(tasks);
    return (
        <div className="w-full max-w-7xl mx-auto">
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
                    <TaskGrid tasks={tasksList} />
                </TabsContent>
                <TabsContent value="table" className="mt-6">
                    <ViewTasks tasks={tasksList} />
                </TabsContent>
                <TabsContent value="kanban" className="mt-6">
                    <div className="text-center text-gray-500 dark:text-gray-400">Kanban View Coming Soon</div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default ViewTabs

