"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";
import React, { useActionState } from "react";
import { FormUpdateProductProps, initialState } from "@/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProduct } from "../lib/actions";
import { ProductFormValues, productSchema } from "../lib/definition";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function FormUpdateProduct({ data }: FormUpdateProductProps) {
  const updateActionWithId = async (state: any, formData: FormData) => {
    return updateProduct(data.id, state, formData);
  };

  const [state, formAction, isPending] = useActionState(
    updateActionWithId,
    initialState
  );

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      stock: "preorder",
      price: "" as unknown as number,
      createdAt: undefined,
      description: "",
      image: "",
    },
  });

  return (
    <Form {...form}>
      <form
        action={formAction}
        className="space-y-8 p-6 border rounded-lg shadow-sm"
      >
        {state.error && (
          <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <span>{state.error}</span>
          </div>
        )}

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Input Product Name"
                  {...field}
                  name="name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock Status</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                name="stock"
              >
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select stock status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    {/* Sesuaikan value dengan Zod schema ("ready" | "preorder") */}
                    <SelectItem value="ready">Ready Stock</SelectItem>
                    <SelectItem value="preorder">Pre-Order</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Price</FormLabel>
              <FormControl>
                <Input
                  placeholder="Input Product Price"
                  {...field}
                  name="price"
                  type="number"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Description</FormLabel>
              <Textarea placeholder="Type your product description here..." />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  placeholder="Input Brand Logo"
                  {...field}
                  name="image"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Updating..." : "Save Changes"}
          </Button>
          <Button
            variant="outline"
            type="button"
            onClick={() => window.history.back()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
