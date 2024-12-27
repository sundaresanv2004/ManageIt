'use client';

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

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
        <div className="relative w-full p-4 sm:p-6 overflow-hidden border-b bg-gradient-to-br from-violet-500/20 to-violet-500/30 dark:from-violet-600/20 dark:to-violet-600/30">
            <div className="relative max-w-7xl mx-auto">
                <div className="space-y-2 sm:space-y-4">
                    <p className="text-xs sm:text-sm text-violet-700 dark:text-violet-300 font-medium">
                        {formatDate(currentTime)}
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-violet-800 dark:text-violet-200">
                        {getGreeting()}! John,
                    </h1>
                </div>

                <div className="mt-4 sm:mt-0 sm:absolute sm:top-0 sm:right-0 flex justify-end">
                    <Button>
                        <Plus className="w-4 h-4 mr-2"/>
                        Add Task
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero

