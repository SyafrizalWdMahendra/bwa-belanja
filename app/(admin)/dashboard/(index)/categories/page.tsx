import { CategoryDataTable } from "@/components/ui/data-table";
import { getCategories } from "./lib/data";
import { categoryColumns } from "@/components/ui/columns";

export default async function CategoriesPage() {
  const data = await getCategories();

  return (
    <>
      <CategoryDataTable columns={categoryColumns} data={data} />
    </>
  );
}
