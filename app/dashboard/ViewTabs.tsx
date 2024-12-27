import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ViewTasks from "@/components/shared/Tasks/ViewTasks"
import { LayoutGrid, List, Columns } from 'lucide-react'
import prisma from "@/lib/prisma";
import TaskGrid from "@/components/shared/Tasks/TaskGrid";
import KanbanView from "@/components/shared/Tasks/KanbanView";

const ViewTabs = async () => {
    const tasks = await prisma.task.findMany()

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
                    <TaskGrid tasks={tasks} />
                </TabsContent>
                <TabsContent value="table" className="mt-6">
                    <ViewTasks tasks={tasks} />
                </TabsContent>
                <TabsContent value="kanban" className="mt-6">
                    <KanbanView tasks={tasks} />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default ViewTabs

