import React from "react";
import { getBrandById } from "../../lib/actions";
import { notFound } from "next/navigation";
import FormUpdateBrand from "../../_components/form-update-brand";
import { PageProps } from "../../lib/types";

export default async function EditPage({ params }: PageProps) {
  const { id } = await params;

  const data = await getBrandById(Number(id));

  if (!data) {
    return notFound();
  }

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Brand</h1>
        <p className="text-muted-foreground">
          Make changes to your brand here.
        </p>
      </div>
      <FormUpdateBrand data={data} />
    </div>
  );
}
