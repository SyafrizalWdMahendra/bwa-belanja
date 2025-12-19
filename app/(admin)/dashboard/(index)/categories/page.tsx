import { categoryColumns, DataTable } from "@/components/ui/data-table";
import { getCategories } from "./lib/data";

export default async function CategoriesPage() {
  const data = await getCategories();

  return (
    <>
      <DataTable columns={categoryColumns} data={data} />
    </>
  );
}
