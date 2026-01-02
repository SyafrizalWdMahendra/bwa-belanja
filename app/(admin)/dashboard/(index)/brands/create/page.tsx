import React from "react";
import FormBrand from "../_components/form-brand";

export default function CreatePage() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add Brand</h1>
        <p className="text-muted-foreground">Make your brand here.</p>
      </div>
      <FormBrand />
    </div>
  );
}
