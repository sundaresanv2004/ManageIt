import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import prisma from "@/lib/prisma";
import { Checkbox } from "@/components/ui/checkbox";
import TaskStatusBadge from "./taskStatusBadge";
import PriorityBadge from "./PriorityBadge";
import { MoreHorizontal, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ViewTasks = async () => {
    const tasks = await prisma.task.findMany()

    return (
        <div className="rounded-lg border shadow-sm overflow-hidden dark:border-gray-700">
            <Table>
                <TableHeader>
                    <TableRow className="bg-gray-100 dark:bg-gray-800">
                        <TableHead className="w-12"></TableHead>
                        <TableHead className="font-semibold">Title</TableHead>
                        <TableHead className="font-semibold hidden md:table-cell">Status</TableHead>
                        <TableHead className="font-semibold hidden lg:table-cell">Priority</TableHead>
                        <TableHead className="font-semibold hidden lg:table-cell">Due Date</TableHead>
                        <TableHead className="w-[70px]"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tasks.map((task) => (
                        <TableRow key={task.id} className="hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer">
                            <TableCell className="w-12">
                                <Checkbox checked={task.status === 'DONE'}/>
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
                                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                                        {new Date(task.dueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                    </div>
                                ) : (
                                    <span className="text-gray-500 dark:text-gray-400">No due date</span>
                                )}
                            </TableCell>
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <span className="sr-only">Open menu</span>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                        <DropdownMenuItem>Update Status</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="text-red-600 dark:text-red-400">Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default ViewTasks

