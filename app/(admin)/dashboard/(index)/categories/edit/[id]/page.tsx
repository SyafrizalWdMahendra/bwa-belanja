import { notFound } from "next/navigation";
import FormUpdateCategory from "../../_components/form-update-category";
import { getCategoryById } from "../../lib/actions";
import { PageProps } from "../../lib/utils";

export default async function CategoryEdit({ params }: PageProps) {
  const { id } = await params;

  const data = await getCategoryById(Number(id));

  if (!data) {
    return notFound();
  }

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Category</h1>
        <p className="text-muted-foreground">
          Make changes to your category here.
        </p>
      </div>
      <FormUpdateCategory data={data} />
    </div>
  );
}
