import { productsColumns } from "@/components/ui/columns";
import { ProductDataTable } from "@/components/ui/data-table";
import { getProducts } from "./lib/data";

export default async function ProductPage() {
  const data = await getProducts();

  return (
    <>
      <ProductDataTable columns={productsColumns} data={data} />
    </>
  );
}
