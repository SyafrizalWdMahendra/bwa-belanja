import { LocationDataTable } from "@/components/ui/data-table";
import { getLocations } from "./lib/data";
import { locationColumns } from "@/components/ui/columns";

export default async function CategoriesPage() {
  const data = await getLocations();

  return (
    <>
      <LocationDataTable columns={locationColumns} data={data} />
    </>
  );
}
