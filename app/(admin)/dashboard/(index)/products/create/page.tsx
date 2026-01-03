import FormProduct from "../_components/form-product";

export default function CreatePage() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add Product</h1>
        <p className="text-muted-foreground">Make your product here.</p>
      </div>
      <FormProduct />
    </div>
  );
}
