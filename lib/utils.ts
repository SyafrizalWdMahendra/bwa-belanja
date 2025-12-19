import { categorySchema } from "@/app/(admin)/dashboard/(index)/categories/lib/definition";
import { ActionResult } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<z.infer<typeof categorySchema>>[];
  data: z.infer<typeof categorySchema>[];
};

export const initialState: ActionResult = { error: "" };
