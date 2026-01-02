import { notFound } from "next/navigation";
import { getLocationById } from "../lib/actions";
import FormUpdateCategory from "../../categories/_components/form-update-category";
import { PageProps } from "@/lib/utils";
import FormUpdateLocation from "../_components/form-update-location";

export default async function LocationFormWrapper({ params }: PageProps) {
  const { id } = await params;

  const data = await getLocationById(Number(id));

  if (!data) {
    return notFound();
  }

  return <FormUpdateLocation data={data} />;
}
