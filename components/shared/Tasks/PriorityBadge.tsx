import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Flag } from 'lucide-react'
import {Priority} from "@prisma/client";

const priorityMap: Record<Priority, { label: string, class: string }> = {
  LOW: { label: "Low", class: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100" },
  MEDIUM: { label: "Medium", class: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100" },
  HIGH: { label: "High", class: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100" },
}

const PriorityBadge = ({ priority }: { priority: Priority }) => {
  return (
    <Badge className={`font-semibold ${priorityMap[priority].class}`}>
      <Flag className="w-3 h-3 mr-1" />
      {priorityMap[priority].label}
    </Badge>
  )
}

export default PriorityBadge
