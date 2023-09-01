
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex min-h-screen max-w-5xl flex-col items-center mx-auto my-0 p-5">
            <Skeleton className="bg-muted-foreground w-[250px] h-10 mb-10" />
            <Skeleton className="bg-muted-foreground w-[120px] h-10 mb-5 self-end" />
            <Skeleton className="bg-muted-foreground w-full h-40 mb-5" />
            <Skeleton className="bg-muted-foreground w-full h-40 mb-5" />
            <Skeleton className="bg-muted-foreground w-full h-40 mb-5" />
            <Skeleton className="bg-muted-foreground w-full h-40 mb-5" />
            <Skeleton className="bg-muted-foreground w-full h-40 mb-5" />
        </div>
    )
  }