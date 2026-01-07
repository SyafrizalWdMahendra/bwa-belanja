import { PageProps } from "@/lib/types";
import { FormUpdateSkeleton } from "../../../_components/form-update-skeleton";
import { Suspense } from "react";
import CategoriesFormWrapper from "../categories-form-wrapper";

export default function CategoryEdit({ params }: PageProps) {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Category</h1>
        <p className="text-muted-foreground">
          Make changes to your category here.
        </p>
      </div>
      <Suspense fallback={<FormUpdateSkeleton />}>
        <CategoriesFormWrapper params={params} />
      </Suspense>
    </div>
  );
}
