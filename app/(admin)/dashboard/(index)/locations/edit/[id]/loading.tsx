import { FormUpdateCategorySkeleton } from "../../../_components/form-update-category-skeleton";

export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-6 space-y-2">
        <div className="h-8 w-48 bg-muted animate-pulse rounded" />
        <div className="h-4 w-72 bg-muted animate-pulse rounded" />
      </div>

      <FormUpdateCategorySkeleton />
    </div>
  );
}
