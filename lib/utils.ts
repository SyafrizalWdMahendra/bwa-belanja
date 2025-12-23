import { brandSchema } from "@/app/(admin)/dashboard/(index)/brands/lib/definition";
import { categorySchema } from "@/app/(admin)/dashboard/(index)/categories/lib/definition";
import { locationSchema } from "@/app/(admin)/dashboard/(index)/locations/lib/definition";
import { ActionResult } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

export const initialState: ActionResult = { error: "" };
