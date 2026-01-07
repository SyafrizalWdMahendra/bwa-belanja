// import { notFound } from "next/navigation";
// import { getCategoryById } from "../lib/actions";
// import FormUpdateCategory from "../_components/form-update-category";
// import { PageProps } from "@/lib/types";

// export default async function CategoriesFormWrapper({ params }: PageProps) {
//   const { id } = await params;

//   const data = await getCategoryById(Number(id));

//   if (!data) {
//     return notFound();
//   }

//   return <FormUpdateCategory data={data} />;
// }
