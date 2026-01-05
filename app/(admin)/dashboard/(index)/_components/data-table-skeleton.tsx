import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function DataTableSkeleton() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <Skeleton className="h-8 w-62.5 " />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-30 hidden lg:block" />{" "}
          <Skeleton className="h-9 w-32" />
        </div>
      </div>

      <div className="mx-4 flex flex-col gap-4 overflow-hidden rounded-lg border lg:mx-6">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              {Array.from({ length: 5 }).map((_, i) => (
                <TableHead key={i} className={i === 0 ? "w-12.5" : ""}>
                  <Skeleton className="h-4 w-full max-w-25" />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, rowIndex) => (
              <TableRow key={rowIndex}>
                {Array.from({ length: 5 }).map((_, cellIndex) => (
                  <TableCell key={cellIndex}>
                    <Skeleton
                      className={`h-4 w-full ${
                        cellIndex === 0
                          ? "w-4"
                          : cellIndex === 1
                          ? "max-w-50"
                          : "max-w-25"
                      }`}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between px-4 lg:px-6">
        <Skeleton className="hidden h-4 w-50 lg:block" />

        <div className="flex w-full items-center justify-between gap-4 lg:w-auto lg:justify-end">
          <div className="hidden items-center gap-2 lg:flex">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-16" />
          </div>

          <Skeleton className="h-4 w-24" />

          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8 hidden lg:block" />
          </div>
        </div>
      </div>
    </div>
  );
}
