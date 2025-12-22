import { locationColumns, LocationDataTable } from "@/components/ui/data-table";
import { getLocations } from "./lib/data";

export default async function CategoriesPage() {
  const data = await getLocations();

  return (
    <>
      <LocationDataTable columns={locationColumns} data={data} />
    </>
  );
}
