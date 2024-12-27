import React from 'react'
import ViewTabs from "@/app/dashboard/ViewTabs";
import AppointmentSheet from "@/components/shared/Tasks/TaskSheet";

export default function Page() {

    return (
        <div className="h-auto">
            <div className="flex flex-1 flex-col gap-4 p-4 max-w-7xl mx-auto">
                <ViewTabs />
                <AppointmentSheet />
            </div>
        </div>
    )
}

