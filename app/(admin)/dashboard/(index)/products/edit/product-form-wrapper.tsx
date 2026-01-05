import { notFound } from "next/navigation";
import { PageProps } from "@/lib/types";
import FormUpdateProduct from "../_components/form-update-product";
import { getProductById } from "../lib/actions";
import { getProductFormData } from "../lib/data";

export default async function ProductFormWrapper({ params }: PageProps) {
  const { id } = await params;

  const data = await getProductById(Number(id));

  if (!data) {
    return notFound();
  }

  const { brands, categories, locations } = await getProductFormData();

  return (
    <FormUpdateProduct
      brands={brands}
      categories={categories}
      locations={locations}
      product={data}
    />
  );
}
