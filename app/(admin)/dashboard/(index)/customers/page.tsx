import { CustomerDataTable } from "@/components/ui/data-table";
import { getCustomers } from "./lib/data";
import { customersColumns } from "@/components/ui/columns";

export default async function CustomersPage() {
  const data = await getCustomers();

  return (
    <>
      <CustomerDataTable columns={customersColumns} data={data} />
    </>
  );
}
