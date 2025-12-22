import FormLocation from "../_components/form-location";

export default async function CreatePage() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add Location</h1>
        <p className="text-muted-foreground">Make your location here.</p>
      </div>
      <FormLocation />
    </div>
  );
}
