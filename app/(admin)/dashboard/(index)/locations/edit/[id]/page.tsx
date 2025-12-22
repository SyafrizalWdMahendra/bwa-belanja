import { notFound } from "next/navigation";
import { PageProps } from "../../lib/utils";
import { getLocationById } from "../../lib/actions";
import FormUpdateLocation from "../../_components/form-update-location";

export default async function LocationEdit({ params }: PageProps) {
  const { id } = await params;

  const data = await getLocationById(Number(id));

  if (!data) {
    return notFound();
  }

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Location</h1>
        <p className="text-muted-foreground">
          Make changes to your location here.
        </p>
      </div>
      <FormUpdateLocation data={data} />
    </div>
  );
}
