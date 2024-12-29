'use client'

import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Plus, X } from 'lucide-react'
import TaskForm from "@/components/shared/Tasks/TaskForm"
import { taskSchema, TaskSchemaType } from "@/lib/zodSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/hooks/use-toast"
import { mutate } from "swr"

const CreateTask = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSheetOpen, setSheetOpen] = useState(false);
    const { toast } = useToast()

    const form = useForm<TaskSchemaType>({
        resolver: zodResolver(taskSchema),
    });

    const onSubmit = async (values: TaskSchemaType) => {
        setIsSubmitting(true);
        try {
            const sanitizedValues = {
                ...values,
                dueDate: values.dueDate ? new Date(values.dueDate) : null,
            };

            const res = await fetch('/api/tasks', {
                method: "POST",
                body: JSON.stringify(sanitizedValues),
                headers: { 'Content-Type': 'application/json' },
            });

            if (!res.ok) {
                throw new Error(`Server responded with status ${res.status}`);
            }

            toast({
                title: "Task Created",
                description: "Your task was successfully created.",
            });
            await mutate("/api/tasks");
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again later.';
            console.error(errorMessage);
            toast({
                title: "Error",
                description: `We encountered an issue while creating the task. Please try again later.`,
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
            setSheetOpen(false);
            form.reset();
        }
    };

    return (
        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
                <Button>
                    <Plus className="w-4 h-4 mr-2"/>
                    Add Task
                </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-[600px] p-0 sm:rounded-l-lg overflow-auto">
                <div className="h-full flex flex-col">
                    <SheetHeader className="flex-none p-6 sticky top-0 z-10 bg-background border-b">
                        <div className="flex items-center justify-between">
                            <SheetTitle className="text-2xl font-bold">Create New Task</SheetTitle>
                            <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </SheetHeader>
                    <div className="flex-1">
                        <TaskForm
                            defaultValues={{
                                title: "",
                                description: "",
                                status: "TODO",
                                priority: "MEDIUM",
                            }}
                            handleSubmit={onSubmit}
                            isSubmitting={isSubmitting}
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default CreateTask

