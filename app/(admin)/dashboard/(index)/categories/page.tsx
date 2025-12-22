import { categoryColumns, CategoryDataTable } from "@/components/ui/data-table";
import { getCategories } from "./lib/data";

export default async function CategoriesPage() {
  const data = await getCategories();

  return (
    <>
      <CategoryDataTable columns={categoryColumns} data={data} />
    </>
  );
}
