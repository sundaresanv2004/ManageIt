'use client'

import React, { useState } from 'react'
import { Task } from "@prisma/client"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Calendar, Clock, Pencil, Trash2, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import PriorityBadge from "./PriorityBadge"
import TaskStatusBadge from "./taskStatusBadge"
import EditTask from "@/components/shared/Tasks/EditTask"

interface TaskDetailsSheetProps {
  task: Task | null
  isOpen: boolean
  onClose: () => void
}

const TaskDetailsSheet: React.FC<TaskDetailsSheetProps> = ({ task, isOpen, onClose }) => {
  const [isEditSheetOpen, setIsEditSheetOpen] = useState<boolean>(false)

  if (!task) return null

  const getTimeLeft = () => {
    if (!task.dueDate) return null
    const now = new Date()
    const due = new Date(task.dueDate)
    due.setHours(23, 59, 59, 999)
    const diff = due.getTime() - now.getTime()

    if (diff < 0) return "Overdue"
    if (diff === 0) return "Due today"

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} left`
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} left`
    return `${minutes} min${minutes > 1 ? '\'s' : ''} left`
  }

  const handleEditClick = () => {
    onClose();
    setIsEditSheetOpen(true)
  }

  return (
      <>
        <Sheet open={isOpen} onOpenChange={onClose}>
          <SheetContent className="w-full sm:max-w-[600px] p-0 sm:rounded-l-lg overflow-auto">
            <div className="h-full flex flex-col">
              <SheetHeader className="flex-none p-6 sticky top-0 z-10 bg-background border-b">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-2xl font-bold">{task.title}</SheetTitle>
                  <Button variant="ghost" size="icon" onClick={onClose}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <TaskStatusBadge status={task.status} />
                  <PriorityBadge priority={task.priority} />
                </div>
              </SheetHeader>

              <div className="flex-1 p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between rounded-lg border p-3 bg-muted/50">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">Due Date</span>
                    </div>
                    <span className="text-sm">
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

                  <div className="flex items-center justify-between rounded-lg border p-3 bg-muted/50">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">Time Remaining</span>
                    </div>
                    <span className="text-sm">
                    {task.dueDate ? getTimeLeft() : 'No due date'}
                  </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Description</h3>
                  <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-4">
                    {task.description || 'No description provided'}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-row items-center justify-between bg-muted/50 rounded-lg p-3">
                      <span className="font-medium">Created</span>
                      <span className="text-muted-foreground">
                      {new Date(task.createdAt).toLocaleString('en-US', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                      })}
                    </span>
                    </div>
                    <div className="flex flex-row items-center justify-between bg-muted/50 rounded-lg p-3">
                      <span className="font-medium">Last Modified</span>
                      <span className="text-muted-foreground">
                      {new Date(task.updatedAt).toLocaleString('en-US', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                      })}
                    </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-none p-4 bg-muted/50 border-t">
                <div className="flex justify-between gap-3">
                  <Button
                      variant="outline"
                      className="w-full"
                      onClick={handleEditClick}
                  >
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button
                      variant="destructive"
                      className="w-full"
                      onClick={() => {}}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <EditTask
            task={task}
            isOpen={isEditSheetOpen}
            onCloseSheet={() => setIsEditSheetOpen(false)}
        />
      </>
  )
}

export default TaskDetailsSheet
