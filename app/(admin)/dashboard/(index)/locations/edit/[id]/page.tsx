import { Suspense } from "react";
import { FormUpdateSkeleton } from "../../../_components/form-update-skeleton";
import LocationFormWrapper from "../location-form-wrapper";
import { PageProps } from "@/lib/utils";

export default function LocationEdit({ params }: PageProps) {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Location</h1>
        <p className="text-muted-foreground">
          Make changes to your location here.
        </p>
      </div>
      <Suspense fallback={<FormUpdateSkeleton />}>
        <LocationFormWrapper params={params} />
      </Suspense>
    </div>
  );
}
