'use client'

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { XCircle, RotateCcw, Home, AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Error({ error, reset,}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const router = useRouter();
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="h-[calc(100vh-4rem)] flex items-center justify-center p-6">
            <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    <div className="relative mx-auto w-24 h-24">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <XCircle className="w-24 h-24 text-red-500/20" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <AlertCircle className="w-12 h-12 text-red-500" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Something went wrong!
                        </h1>
                        <p className="text-muted-foreground">
                            {error.message || "An unexpected error occurred. Please try again later."}
                        </p>
                        {error.digest && (
                            <p className="text-sm text-muted-foreground/60">
                                Error ID: {error.digest}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <Button
                            variant="default"
                            onClick={reset}
                            className="gap-2"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Try again
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => router.push('/')}
                            className="gap-2"
                        >
                            <Home className="w-4 h-4" />
                            Return home
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        Need help?{" "}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                console.log("Report issue clicked", error)
                            }}
                            className="underline underline-offset-2 hover:text-primary"
                        >
                            Contact support
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

