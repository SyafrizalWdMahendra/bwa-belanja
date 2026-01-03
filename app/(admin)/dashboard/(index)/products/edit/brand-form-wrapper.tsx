// import { notFound } from "next/navigation";
// import { getBrandById } from "../lib/actions";
// import { PageProps } from "@/lib/utils";
// import FormUpdateBrand from "../_components/form-update-product";

// export default async function BrandFormWrapper({ params }: PageProps) {
//   const { id } = await params;

//   const data = await getBrandById(Number(id));

//   if (!data) {
//     return notFound();
//   }

//   return <FormUpdateBrand data={data} />;
// }
