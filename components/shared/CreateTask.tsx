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
import TaskForm from "@/components/shared/TaskForm"
import {taskSchema, TaskSchemaType} from "@/lib/zodSchema"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const CreateTask = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSheetOpen, setSheetOpen] = useState(false);

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
            console.log(values)
            form.reset();
            setSheetOpen(false);
        } catch (error) {
            console.error("Error creating todo:", error);
        } finally {
            setIsSubmitting(false);
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

