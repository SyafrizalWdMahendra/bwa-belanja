import { OrderDataTable } from "@/components/ui/data-table";
import { getOrders } from "./lib/data";
import { orderColumns } from "@/components/ui/columns";

export default async function OrdersPage() {
  const data = await getOrders();

  return (
    <>
      <OrderDataTable columns={orderColumns} data={data} />
    </>
  );
}
