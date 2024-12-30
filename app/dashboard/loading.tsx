import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 p-4">
            <div className="flex gap-1">
                <Skeleton className="h-10 w-[120px]" />
                <Skeleton className="h-10 w-[120px]" />
                <Skeleton className="h-10 w-[120px]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="border rounded-lg p-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-4 w-4 rounded-sm" />
                                <Skeleton className="h-6 w-[160px]" />
                            </div>
                            <Skeleton className="h-8 w-8 rounded-full" />
                        </div>
                        <div className="flex gap-2">
                            <Skeleton className="h-5 w-[100px]" />
                            <Skeleton className="h-5 w-[70px]" />
                        </div>
                        <Skeleton className="h-4 w-[90%]" />
                        <Skeleton className="h-4 w-[40%]" />
                        <div className="flex items-center pt-2">
                            <Skeleton className="h-4 w-4 mr-2" />
                            <Skeleton className="h-4 w-[100px]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

