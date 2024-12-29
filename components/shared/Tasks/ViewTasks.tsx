'use client'

import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import TaskStatusBadge from "./taskStatusBadge"
import PriorityBadge from "./PriorityBadge"
import { Calendar, MoreHorizontal, Trash2, Pencil } from 'lucide-react'
import { Status, Task } from "@prisma/client"
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
import TaskDetailsSheet from "./TaskDetailsSheet"
import EditTask from "@/components/shared/Tasks/EditTask";

interface TaskTableProps {
    tasks: Task[]
}

const ViewTasks: React.FC<TaskTableProps> = ({ tasks }) => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null)
    const [isDetailsSheetOpen, setIsDetailsSheetOpen] = useState(false)
    const [isEditSheetOpen, setEditSheetOpen] = useState(false)

    const handleTaskClick = (task: Task) => {
        setSelectedTask(task)
        setIsDetailsSheetOpen(true)
    }

    const handleEditClick = (task: Task) => {
        setSelectedTask(task)
        setEditSheetOpen(true)
    }

    return (
        <>
            <div className="rounded-lg border shadow-sm overflow-hidden dark:border-gray-800">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-gray-50 dark:bg-gray-800">
                            <TableHead className="w-[50px]"></TableHead>
                            <TableHead className="font-semibold">Title</TableHead>
                            <TableHead className="font-semibold hidden md:table-cell">Status</TableHead>
                            <TableHead className="font-semibold hidden lg:table-cell">Priority</TableHead>
                            <TableHead className="font-semibold hidden lg:table-cell">Due Date</TableHead>
                            <TableHead className="font-semibold text-right"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tasks.map((task) => (
                            <TableRow
                                key={task.id}
                                className="hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"
                                onClick={() => handleTaskClick(task)}
                            >
                                <TableCell onClick={(e) => e.stopPropagation()}>
                                    <Checkbox
                                        checked={task.status === "DONE"}
                                    />
                                </TableCell>
                                <TableCell className="font-medium">{task.title}</TableCell>
                                <TableCell className="hidden md:table-cell">
                                    <TaskStatusBadge status={task.status} />
                                </TableCell>
                                <TableCell className="hidden lg:table-cell">
                                    <PriorityBadge priority={task.priority} />
                                </TableCell>
                                <TableCell className="hidden lg:table-cell">
                                    {task.dueDate ? (
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                                            {new Date(task.dueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                        </div>
                                    ) : (
                                        <span className="text-gray-500 dark:text-gray-400">No due date</span>
                                    )}
                                </TableCell>
                                <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
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
                                                <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger>
                                                <DropdownMenuSubContent>
                                                    {Object.values(Status).map((status) => (
                                                        <DropdownMenuItem key={status}>{status}</DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuSubContent>
                                            </DropdownMenuSub>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <TaskDetailsSheet
                task={selectedTask}
                isOpen={isDetailsSheetOpen}
                onClose={() => setIsDetailsSheetOpen(false)}
            />
            {selectedTask && (
                <EditTask
                    task={selectedTask}
                    isOpen={isEditSheetOpen}
                    onCloseSheet={() => setEditSheetOpen(false)}
                />
            )}
        </>
    )
}

export default ViewTasks

