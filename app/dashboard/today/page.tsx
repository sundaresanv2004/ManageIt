'use client'
import React from 'react'
import prisma from "@/lib/prisma"
import TaskGrid from "@/components/shared/Tasks/TaskGrid"
import KanbanView from "@/components/shared/Tasks/KanbanView";

const TasksPage = async () => {
    const tasks = await prisma.task.findMany()

    return (
        <div className="container mx-auto py-8">
            <TaskGrid tasks={tasks} />
        </div>
    )
}

export default TasksPage

