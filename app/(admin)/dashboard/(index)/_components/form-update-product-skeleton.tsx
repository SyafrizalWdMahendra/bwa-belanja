import { Skeleton } from "@/components/ui/skeleton";

export function FormUpdateProductSkeleton() {
  return (
    <div className="space-y-8 p-6 border rounded-lg shadow-sm">
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />

        <Skeleton className="h-10 w-full" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />

        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />

        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />

        <Skeleton className="h-20 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />

        <Skeleton className="h-10 w-full" />
      </div>

      <div className="flex gap-4">
        <Skeleton className="h-10 w-32" />

        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  );
}
