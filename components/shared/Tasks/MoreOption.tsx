'use client'

import { useState } from 'react'
import { mutate } from 'swr'
import { useToast } from "@/hooks/use-toast"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Check, Loader2, MoreHorizontal, Pencil, Trash2 } from 'lucide-react'
import { Status, Task } from "@prisma/client"
import TaskStatusBadge from "./taskStatusBadge"
import EditTask from "./EditTask"
import DeleteTask from "./DeleteTask"

interface MoreOptionProps {
    task: Task
}

export default function MoreOption({ task }: MoreOptionProps) {
    const [isEditSheetOpen, setEditSheetOpen] = useState(false)
    const [isDeleteOpen, setDeleteIsOpen] = useState(false)
    const [isUpdatingStatus, setIsUpdatingStatus] = useState(false)
    const { toast } = useToast()

    const handleStatusUpdate = async (status: Status) => {
        setIsUpdatingStatus(true)
        try {
            const response = await fetch('/api/tasks', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...task,
                    status
                })
            })

            if (!response.ok) {
                throw new Error('Failed to update status')
            }

            await mutate('/api/tasks')
            toast({
                title: "Status updated",
                description: `Task status changed to ${status.toLowerCase()}.`,
            })
        } catch (error) {
            console.error('Delete task error:', error)
            toast({
                title: "Error",
                description: "Failed to update status. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsUpdatingStatus(false)
        }
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 p-0 hover:bg-muted"
                    >
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                        onSelect={() => setEditSheetOpen(true)}
                        className="cursor-pointer"
                    >
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onSelect={() => setDeleteIsOpen(true)}
                        className="cursor-pointer text-destructive focus:text-destructive"
                    >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger
                            className="cursor-pointer"
                            disabled={isUpdatingStatus}
                        >
                            {isUpdatingStatus ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Updating...
                                </>
                            ) : (
                                <>Status</>
                            )}
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="w-48">
                            {Object.values(Status).map((status) => (
                                <DropdownMenuItem
                                    key={status}
                                    className="cursor-pointer"
                                    disabled={isUpdatingStatus}
                                    onSelect={() => handleStatusUpdate(status)}
                                >
                                    <TaskStatusBadge status={status} />
                                    {task.status === status && (
                                        <Check className="ml-auto h-4 w-4" />
                                    )}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                </DropdownMenuContent>
            </DropdownMenu>

            <EditTask
                task={task}
                isOpen={isEditSheetOpen}
                onCloseSheet={() => setEditSheetOpen(false)}
            />

            <DeleteTask
                id={task.id}
                isOpen={isDeleteOpen}
                onClose={() => setDeleteIsOpen(false)}
            />
        </>
    )
}
