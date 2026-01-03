import React, { Suspense } from "react";
import { PageProps } from "@/lib/types";
import ProductFormWrapper from "../product-form-wrapper";
import { FormUpdateProductSkeleton } from "../../../_components/form-update-product-skeleton";

export default function EditPage({ params }: PageProps) {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Product</h1>
        <p className="text-muted-foreground">
          Make changes to your product here.
        </p>
      </div>
      <Suspense fallback={<FormUpdateProductSkeleton />}>
        <ProductFormWrapper params={params} />
      </Suspense>
    </div>
  );
}
