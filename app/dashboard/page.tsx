import React from 'react'
import Hero from "./Hero";

export default function Page() {

    return (
        <div className="min-h-screen">
            <Hero />

            <div className="flex flex-1 flex-col gap-4 p-4 max-w-7xl mx-auto">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="aspect-video rounded-xl bg-muted"/>
                    <div className="aspect-video rounded-xl bg-muted"/>
                    <div className="aspect-video rounded-xl bg-muted"/>
                </div>
                <div className="min-h-[50vh] flex-1 rounded-xl bg-muted md:min-h-[30vh]"/>
            </div>
        </div>
    )
}

