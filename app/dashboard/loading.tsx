import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-4">
      <Skeleton className="h-10 w-[200px]" />
      <Skeleton className="h-[300px] w-full" />
    </div>
  )
}

