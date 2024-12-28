import React from 'react'
import { Status } from "@prisma/client";
import { Badge } from "@/components/ui/badge"

const statusMap: Record<Status, { label: string; class: string }> = {
    TODO: { label: "To Do", class: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" },
    IN_PROGRESS: { label: "In Progress", class: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100" },
    DONE: { label: "Done", class: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" },
    ARCHIVED: { label: "Archived", class: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100" },
}

const TaskStatusBadge = ({ status }: { status: Status }) => {
    return (
        <Badge className={`font-semibold ${statusMap[status].class} hover:${statusMap[status].class}`}>
            {statusMap[status].label}
        </Badge>
    )
}

export default TaskStatusBadge
