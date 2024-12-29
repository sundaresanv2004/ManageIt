'use client'

import React, { useState } from 'react'
import { Task, Status } from "@prisma/client"
import TaskStatusBadge from "./taskStatusBadge"
import PriorityBadge from "./PriorityBadge"
import TaskDetailsSheet from "./TaskDetailsSheet"
import { Calendar, Clock, MoreHorizontal, Trash2, Check, Pencil } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
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
import { Checkbox } from "@/components/ui/checkbox"
import EditTask from "@/components/shared/Tasks/EditTask";

interface TaskGridProps {
    tasks: Task[]
}

const TaskGrid: React.FC<TaskGridProps> = ({ tasks }) => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null)
    const [isSheetOpen, setIsSheetOpen] = useState(false)
    const [isEditSheetOpen, setIsEditSheetOpen] = useState(false)

    const handleEditClick = (task: Task) => {
        setSelectedTask(task);
        setIsEditSheetOpen(true);
    }

    const handleTaskClick = (task: Task) => {
        setSelectedTask(task)
        setIsSheetOpen(true)
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.map((task) => (
                    <Card
                        key={task.id}
                        className="overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 cursor-pointer"
                        onClick={() => handleTaskClick(task)}
                    >
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        checked={task.status === Status.DONE}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    <h3 className="text-lg font-semibold line-clamp-2">{task.title}</h3>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <span className="sr-only">Open menu</span>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                                        <DropdownMenuItem onSelect={() => handleEditClick(task)}>
                                            <Pencil className="mr-2 h-4 w-4" />
                                            Edit
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-red-600 dark:text-red-400">
                                            <Trash2 className="mr-2 h-4 w-4" />
                                            Delete
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>
                                                <Check className="mr-2 h-4 w-4" />
                                                Change Status
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuSubContent>
                                                {Object.values(Status).map((status) => (
                                                    <DropdownMenuItem key={status}>{status}</DropdownMenuItem>
                                                ))}
                                            </DropdownMenuSubContent>
                                        </DropdownMenuSub>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                            <div className="flex flex-wrap gap-2 mb-2">
                                <TaskStatusBadge status={task.status as Status} />
                                <PriorityBadge priority={task.priority} />
                            </div>
                            {task.description && (
                                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-2">{task.description}</p>
                            )}
                        </CardContent>
                        <CardFooter className="flex justify-between items-center pt-2">
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                {task.dueDate ? (
                                    <>
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {new Date(task.dueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                    </>
                                ) : (
                                    <>
                                        <Clock className="w-4 h-4 mr-1" />
                                        No due date
                                    </>
                                )}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <TaskDetailsSheet
                task={selectedTask}
                isOpen={isSheetOpen}
                onClose={() => setIsSheetOpen(false)}
            />
            {selectedTask && (
                <EditTask
                    task={selectedTask}
                    isOpen={isEditSheetOpen}
                    onCloseSheet={() => setIsEditSheetOpen(false)}
                />
            )}
        </>
    )
}

export default TaskGrid

