'use client'

import React, { useState } from 'react'
import { Task, Status } from "@prisma/client"
import TaskStatusBadge from "./taskStatusBadge"
import PriorityBadge from "./PriorityBadge"
import TaskDetailsSheet from "./TaskDetailsSheet"
import { Calendar, Clock } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import MoreOption from "@/components/shared/Tasks/MoreOption"
import CheckBox from "@/components/shared/Tasks/CheckBox"

interface TaskGridProps {
    tasks: Task[]
}

const TaskGrid: React.FC<TaskGridProps> = ({ tasks }) => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null)
    const [isSheetOpen, setIsSheetOpen] = useState(false)

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
                        onClick={(e) => {
                            // Don't open details if clicking more options or checkbox
                            if (!(e.target as HTMLElement).closest('[data-more-options]') &&
                                !(e.target as HTMLElement).closest('[data-checkbox]')) {
                                handleTaskClick(task)
                            }
                        }}
                    >
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center space-x-2">
                                    <div data-checkbox onClick={(e) => e.stopPropagation()}>
                                        <CheckBox task={task} />
                                    </div>
                                    <h3 className="text-lg font-semibold line-clamp-2">{task.title}</h3>
                                </div>
                                <div data-more-options onClick={(e) => e.stopPropagation()}>
                                    <MoreOption task={task} />
                                </div>
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
        </>
    )
}

export default TaskGrid
