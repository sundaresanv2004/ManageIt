'use client'

import React, { useState, useMemo } from 'react'
import { Task, Status } from "@prisma/client"
import TaskCard from './TaskCard'

interface KanbanViewProps {
    tasks: Task[]
}

export default function KanbanView({ tasks: initialTasks }: KanbanViewProps) {
    const [tasks, setTasks] = useState(initialTasks)

    const columns = useMemo(() => {
        return {
            [Status.TODO]: tasks.filter(task => task.status === Status.TODO),
            [Status.IN_PROGRESS]: tasks.filter(task => task.status === Status.IN_PROGRESS),
            [Status.DONE]: tasks.filter(task => task.status === Status.DONE),
        }
    }, [tasks])

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
        e.preventDefault()
        const taskId = e.dataTransfer.getData('text/plain')
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, status } : task
        )
        setTasks(updatedTasks)
    }

    const handleEdit = (taskId: string) => {
        // Implement edit functionality
        console.log('Edit task', taskId)
    }

    const handleDelete = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    const handleStatusChange = (taskId: string, newStatus: Status) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, status: newStatus } : task
        ))
    }

    return (
        <div className="flex flex-col md:flex-row gap-4 p-4">
            {(Object.keys(columns) as Status[]).map((status) => (
                <div
                    key={status}
                    className="flex-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, status)}
                >
                    <h2 className="text-lg font-semibold mb-4">{status}</h2>
                    <div className="space-y-4">
                        {columns[status].map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                onStatusChange={handleStatusChange}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
