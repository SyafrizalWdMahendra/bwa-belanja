import { brandsColumns } from "@/components/ui/columns";
import { BrandDataTable } from "@/components/ui/data-table";
import { getBrands } from "./lib/data";

export default async function BrandPage() {
  const data = await getBrands();
  return (
    <>
      <BrandDataTable columns={brandsColumns} data={data} />
    </>
  );
}
