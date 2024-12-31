"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog, DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {Plus} from "lucide-react";
import * as React from "react";

export function ComingSoonDialog() {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4"/>
          New Project
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Project - Coming Soon!</DialogTitle>
          <DialogDescription>
            We&#39;re working on bringing you the ability to create projects, assign tasks to team members, and much more.
            This feature is currently under development and will be available soon. Stay tuned for updates!
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button>Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

