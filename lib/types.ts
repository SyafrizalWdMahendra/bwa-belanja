import { brandSchema } from "@/app/(admin)/dashboard/(index)/brands/lib/definition";
import { categorySchema } from "@/app/(admin)/dashboard/(index)/categories/lib/definition";
import { locationSchema } from "@/app/(admin)/dashboard/(index)/locations/lib/definition";
import { productSchema } from "@/app/(admin)/dashboard/(index)/products/lib/definition";
import { ActionResult } from "@/types";
import { Brand, Category, Location, Prisma, Product } from "@prisma/client";
import { ColumnDef, Table } from "@tanstack/react-table";
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
  columns: ColumnDef<ProductWithRelations>[];
  data: ProductWithRelations[];
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

export type ProductWithRelations = Prisma.ProductGetPayload<{
  select: {
    id: true;
    name: true;
    createdAt: true;
    price: true;
    stock: true;
    image: true;
    description: true;
    brandId: true;
    categoryId: true;
    locationId: true;
    brand: { select: { name: true } };
    category: { select: { name: true } };
    location: { select: { name: true } };
    _count: { select: { orderItems: true } };
  };
}>;

export const initialState: ActionResult = { error: "" };

export type DataTablePaginationProps<TData> = {
  table: Table<TData>;
};

export type DataTableToolbarProps<TData> = {
  table: Table<TData>;
};
