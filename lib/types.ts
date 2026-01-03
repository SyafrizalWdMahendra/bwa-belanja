import { brandSchema } from "@/app/(admin)/dashboard/(index)/brands/lib/definition";
import { categorySchema } from "@/app/(admin)/dashboard/(index)/categories/lib/definition";
import { locationSchema } from "@/app/(admin)/dashboard/(index)/locations/lib/definition";
import { productSchema } from "@/app/(admin)/dashboard/(index)/products/lib/definition";
import { ActionResult } from "@/types";
import { Brand, Category, Location, Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import z from "zod";

export type DataCategoryTableProps<TData, TValue> = {
  columns: ColumnDef<z.infer<typeof categorySchema>>[];
  data: z.infer<typeof categorySchema>[];
};

export type DataLocationTableProps<TData, TValue> = {
  columns: ColumnDef<z.infer<typeof locationSchema>>[];
  data: z.infer<typeof locationSchema>[];
};

export type DataBrandTableProps<TData, TValue> = {
  columns: ColumnDef<z.infer<typeof brandSchema>>[];
  data: z.infer<typeof brandSchema>[];
};

export type DataProductTableProps<TData, TValue> = {
  columns: ColumnDef<z.infer<typeof productSchema>>[];
  data: z.infer<typeof productSchema>[];
};

export type PageProps = {
  params: Promise<{ id: string }>;
};

export interface FormUpdateLocationProps {
  data: Location;
}

export type FormUpdateCategoryProps = {
  data: Category;
};

export type FormUpdateBrandProps = {
  data: Brand;
};

export type FormUpdateProductProps = {
  data: Product;
};

export const initialState: ActionResult = { error: "" };
