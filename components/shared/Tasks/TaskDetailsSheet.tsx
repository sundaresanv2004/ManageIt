'use client'

import React from 'react'
import { Task } from "@prisma/client"
import {
  Sheet,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet"
import { Calendar, Clock, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import PriorityBadge from "./PriorityBadge"
import TaskStatusBadge from "./taskStatusBadge"
import { Separator } from "@/components/ui/separator"
import EditTask from "@/components/shared/Tasks/EditTask";

interface TaskDetailsSheetProps {
  task: Task | null
  isOpen: boolean
  onClose: () => void
}

const TaskDetailsSheet: React.FC<TaskDetailsSheetProps> = ({ task, isOpen, onClose }) => {
  if (!task) return null

  const getTimeLeft = () => {
    if (!task.dueDate) return null
    const now = new Date()
    const due = new Date(task.dueDate)
    const diff = due.getTime() - now.getTime()

    if (diff <= 0) return "Overdue"

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    if (days > 0) return `${days} days left`
    if (hours > 0) return `${hours} hours left`
    return `${minutes} minutes left`
  }

  return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-[600px] p-6 sm:rounded-l-lg">
          <div className="h-full flex flex-col">
            {/* Header */}
            <SheetHeader className="flex-none space-y-0">
              <div className="flex items-center justify-between pb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span className="text-lg font-medium">Task Details</span>
                </div>
              </div>
            </SheetHeader>

            {/* Content */}
            <div className="flex-1 overflow-auto -mx-6 px-6">
              <div className="space-y-6">
                {/* Title */}
                <h2 className="text-2xl font-bold">
                  {task.title}
                </h2>

                {/* Status and Priority */}
                <div className="flex flex-wrap items-center gap-2">
                  <TaskStatusBadge status={task.status} />
                  <PriorityBadge priority={task.priority} />
                </div>

                {/* Time Information */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg border p-4 bg-background">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <span>Due Date</span>
                    </div>
                    <span className="font-medium">
                    {task.dueDate
                        ? new Date(task.dueDate).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })
                        : 'No due date set'
                    }
                  </span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4 bg-background">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <span>Time Remaining</span>
                    </div>
                    <span className="font-medium">
                    {task.dueDate ? getTimeLeft() : 'No due date set'}
                  </span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Description</h3>
                  <div className="text-muted-foreground">
                    {task.description || 'No description provided'}
                  </div>
                </div>

                {/* Metadata */}
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Created</span>
                    <span>{new Date(task.createdAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Last Modified</span>
                    <span>{new Date(task.updatedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex-none pt-3">
              <Separator className="mb-6" />
              <div className="flex justify-end gap-3">
                <Button
                    variant="outline"
                    onClick={() => {}}
                >
                  <EditTask task={task} />
                </Button>
                <Button
                    variant="destructive"
                    className="flex items-center gap-2"
                    onClick={() => {}}
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
  )
}

export default TaskDetailsSheet

