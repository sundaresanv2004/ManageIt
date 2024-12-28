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
import {Pencil} from 'lucide-react'
import TaskForm from "@/components/shared/Tasks/TaskForm"
import {taskSchema, TaskSchemaType} from "@/lib/zodSchema"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useToast} from "@/hooks/use-toast";
import { mutate } from "swr";
import {Task} from "@prisma/client";

const EditTask = ({ task }: { task: Task }) => {
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
            console.log(sanitizedValues);

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
                <a className="flex items-center gap-2">
                    <Pencil className="h-4 w-4" />
                    Edit
                </a>
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
                <div className="h-full flex flex-col">
                    <TaskForm
                        defaultValues={{
                            title: task.title,
                            description: task.description || "",
                            status: task.status,
                            priority: task.priority,
                            dueDate: task.dueDate ? new Date(task.dueDate) : null
                        }}
                        handleSubmit={onSubmit}
                        isSubmitting={isSubmitting}
                    />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default EditTask

