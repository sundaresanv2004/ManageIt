import React, {useState} from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Check, MoreHorizontal, Pencil, Trash2} from "lucide-react";
import {Status, Task} from "@prisma/client";
import TaskStatusBadge from "@/components/shared/Tasks/taskStatusBadge";
import EditTask from "@/components/shared/Tasks/EditTask";

const MoreOption = ({ task }: { task: Task }) => {
    const [isEditSheetOpen, setEditSheetOpen] = useState(false)

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={() => setEditSheetOpen(true)}>
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
                                <DropdownMenuItem key={status}>
                                    <TaskStatusBadge status={status} />
                                    {task.status === status && (
                                        <Check className="ml-2 h-4 w-4" />
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
        </>
    )
}
export default MoreOption
