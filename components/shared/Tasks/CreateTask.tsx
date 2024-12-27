'use client'

import React, {useState} from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import TaskForm from "@/components/shared/Tasks/TaskForm"
import {taskSchema, TaskSchemaType} from "@/lib/zodSchema"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useToast} from "@/hooks/use-toast";

const CreateTask = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSheetOpen, setSheetOpen] = useState(false);
    const { toast } = useToast()

    const form = useForm<TaskSchemaType>({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            title: "",
            description: "",
            status: "TODO",
            priority: "MEDIUM",
        },
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
            <SheetContent
                className={"flex flex-col w-full sm:max-w-[540px] sm:rounded-l-[10px] mt-auto sm:mt-0"}
            >
                <SheetHeader className="space-y-2">
                    <SheetTitle>Create Task</SheetTitle>
                    <SheetDescription>
                        Add a new task to your list.
                    </SheetDescription>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto pr-1">
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
            </SheetContent>
        </Sheet>
    )
}

export default CreateTask

