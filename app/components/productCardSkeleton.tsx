import { Skeleton } from "@/components/ui/skeleton"
export function ProductCardSkeleton() {
  return (
    <section className="flex gap-8 mt-8">
      <Skeleton className="h-[460px] w-2/3 rounded-xl" />
      <div className="space-y-5 w-1/3 flex flex-col items-center">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-10 w-[100px]" />
        <div className="flex gap-3 h-12 w-full">
          <Skeleton className="h-12 w-1/2" />
          <Skeleton className="h-12 w-1/2" />
        </div>

        <Skeleton className="h-60 w-[400px]" />
        <Skeleton className="h-12 w-[200px]" />
      </div>
    </section>
  )
}
