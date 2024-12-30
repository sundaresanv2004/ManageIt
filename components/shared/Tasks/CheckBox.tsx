import React from 'react'
import {Checkbox} from "@/components/ui/checkbox";
import {Status, Task} from "@prisma/client";
import {mutate} from "swr";
import {useToast} from "@/hooks/use-toast";

const CheckBox = ({task} : {task: Task}) => {
    const {toast} = useToast();

    const handleChange = async () => {
        try {
            const newStatus = task.status === Status.DONE ? Status.TODO : Status.DONE
            const response = await fetch('/api/tasks', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...task,
                    status: newStatus
                })
            })

            if (!response.ok) {
                throw new Error('Failed to update status')
            }

            await mutate('/api/tasks')
            toast({
                title: "Status updated",
                description: `Task status changed to ${newStatus.toLowerCase()}.`,
            })
        } catch (error) {
            console.error('Update task status error:', error)
            toast({
                title: "Error",
                description: "Failed to update status. Please try again.",
                variant: "destructive",
            })
        }
    }

    return (
        <div>
            <Checkbox
                checked={task.status === Status.DONE}
                onCheckedChange={handleChange}
            />
        </div>
    )
}
export default CheckBox;
