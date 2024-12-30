"use client"

import { useState } from "react"
import { mutate } from "swr"
import { useToast } from "@/hooks/use-toast"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react'

interface DeleteTaskProps {
    id: string
    isOpen: boolean
    onClose: () => void
}

const DeleteTask = ({ id, isOpen, onClose }: DeleteTaskProps) => {
    const [isDeleting, setIsDeleting] = useState(false)
    const { toast } = useToast()

    const handleDelete = async () => {
        setIsDeleting(true)
        try {
            const response = await fetch(`/api/tasks?id=${id}`, {
                method: "DELETE",
            })

            if (response.ok) {
                console.log("Todo deleted successfully");
                await mutate("/api/tasks");
                toast({
                    title: "Success",
                    description: "Task has been deleted successfully.",
                })
            } else {
                console.error("Failed to delete task");
            }
        } catch (error) {
            console.error('Delete task error:', error)
            toast({
                title: "Error",
                description: "Failed to delete task. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsDeleting(false)
            onClose()
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Task</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this task? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="gap-2 sm:gap-0">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        disabled={isDeleting}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="destructive"
                        onClick={handleDelete}
                        disabled={isDeleting}
                    >
                        {isDeleting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Deleting...
                            </>
                        ) : (
                            "Delete"
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteTask
