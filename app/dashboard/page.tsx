import React from 'react'
import Hero from "./Hero";
import ViewTasks from "@/components/shared/Tasks/ViewTasks";

export default function Page() {

    return (
        <div className="h-auto">
            <Hero />
            <div className="flex flex-1 flex-col gap-4 p-4 max-w-7xl mx-auto">
                <ViewTasks />
            </div>
        </div>
    )
}

