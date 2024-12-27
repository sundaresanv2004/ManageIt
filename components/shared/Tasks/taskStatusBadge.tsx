import React from 'react'
import { Status } from "@prisma/client";
import { Badge } from "@/components/ui/badge"

const statusMap: Record<Status, { label: string; lightClass: string; darkClass: string }> = {
    TODO: { label: "To Do", lightClass: "bg-blue-100 text-blue-800", darkClass: "dark:bg-blue-900 dark:text-blue-100" },
    IN_PROGRESS: { label: "In Progress", lightClass: "bg-yellow-100 text-yellow-800", darkClass: "dark:bg-yellow-900 dark:text-yellow-100" },
    DONE: { label: "Done", lightClass: "bg-green-100 text-green-800", darkClass: "dark:bg-green-900 dark:text-green-100" },
    ARCHIVED: { label: "Archived", lightClass: "bg-gray-100 text-gray-800", darkClass: "dark:bg-gray-700 dark:text-gray-100" },
}

const TaskStatusBadge = ({ status }: { status: Status }) => {
    return (
        <Badge className={`font-semibold ${statusMap[status].lightClass} ${statusMap[status].darkClass}`}>
            {statusMap[status].label}
        </Badge>
    )
}

export default TaskStatusBadge
