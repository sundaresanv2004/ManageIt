'use client'

import { useState, useEffect } from 'react'

import { ThemeProvider } from 'next-themes'
import Navbar from "@/components/shared/Navbar";
import HowItWorks from "@/components/shared/HowItWorks";
import Hero from "@/components/shared/Hero";
import Features from "@/components/shared/Features";
import Pricing from "@/components/shared/Pricing";
import Testimonials from "@/components/shared/Testimonials";
import Footer from "@/components/shared/Footer";

export default function Home() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/80">
                <Navbar />
                <Hero />
                <Features />
                <HowItWorks />
                <Pricing />
                <Testimonials />
                <Footer />
            </div>
        </ThemeProvider>
    )
}

