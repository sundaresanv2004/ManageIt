'use client';

import React, { useEffect, useState } from 'react'
import CreateTask from "@/components/shared/Tasks/CreateTask";

const Hero = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    };

    const getGreeting = () => {
        const hour = currentTime.getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    };

    return (
        <div className="relative w-full p-4 sm:p-6 overflow-hidden border-b">
            <div className="relative max-w-7xl mx-auto">
                <div className="space-y-2 sm:space-y-4">
                    <p className="text-xs sm:text-sm font-medium">
                        {formatDate(currentTime)}
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                        {getGreeting()}! John,
                    </h1>
                </div>

                <div className="mt-4 sm:mt-0 sm:absolute sm:top-0 sm:right-0 flex justify-end">
                    <CreateTask />
                </div>
            </div>
        </div>
    )
}

export default Hero

