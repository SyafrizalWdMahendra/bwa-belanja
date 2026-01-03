import { notFound } from "next/navigation";
import { PageProps } from "@/lib/types";
import FormUpdateProduct from "../_components/form-update-product";
import { getProductById } from "../lib/actions";

export default async function ProductFormWrapper({ params }: PageProps) {
  const { id } = await params;

  const data = await getProductById(Number(id));

  if (!data) {
    return notFound();
  }

  return <FormUpdateProduct data={data} />;
}
