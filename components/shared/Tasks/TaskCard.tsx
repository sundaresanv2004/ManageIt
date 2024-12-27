import React from 'react'
import { Task, Status } from "@prisma/client"
import { MoreHorizontal, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import TaskStatusBadge from "./taskStatusBadge"
import PriorityBadge from "./PriorityBadge"

interface TaskCardProps {
    task: Task
    onEdit: (taskId: string) => void
    onDelete: (taskId: string) => void
    onStatusChange: (taskId: string, newStatus: Status) => void
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete, onStatusChange }) => {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text/plain', task.id)
    }

    return (
        <Card
            className="cursor-move"
            draggable
            onDragStart={handleDragStart}
        >
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold line-clamp-2">{task.title}</h3>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => onEdit(task.id)}>Edit</DropdownMenuItem>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>Change Status</DropdownMenuSubTrigger>
                                <DropdownMenuSubContent>
                                    {Object.values(Status).map((status) => (
                                        <DropdownMenuItem key={status} onClick={() => onStatusChange(task.id, status)}>
                                            <TaskStatusBadge status={status} />
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => onDelete(task.id)} className="text-red-600 dark:text-red-400">
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardContent className="pb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                    <TaskStatusBadge status={task.status} />
                    <PriorityBadge priority={task.priority} />
                </div>
                {task.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-2">{task.description}</p>
                )}
            </CardContent>
            <CardFooter className="pt-2">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    {task.dueDate && (
                        <>
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(task.dueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </>
                    )}
                </div>
            </CardFooter>
        </Card>
    )
}

export default TaskCard

