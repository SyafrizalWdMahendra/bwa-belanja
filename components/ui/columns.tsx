"use client";

import { categorySchema } from "@/app/(admin)/dashboard/(index)/categories/lib/definition";
import { ColumnDef } from "@tanstack/react-table";
import z from "zod";
import { Checkbox } from "./checkbox";
import { Pencil } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";
import { IconDotsVertical } from "@tabler/icons-react";
import Link from "next/link";
import FormDeleteCategory from "@/app/(admin)/dashboard/(index)/categories/_components/form-delete-category";
import { DragHandle, TableCellViewer } from "./data-table";
import { Badge } from "./badge";
import { locationSchema } from "@/app/(admin)/dashboard/(index)/locations/lib/definition";
import FormDeleteLocation from "@/app/(admin)/dashboard/(index)/locations/_components/form-delete-location";
import Image from "next/image";
import { brandSchema } from "@/app/(admin)/dashboard/(index)/brands/lib/definition";
import FormDeleteBrand from "@/app/(admin)/dashboard/(index)/brands/_components/form-brand-delete";
import { dateFormat, rupiahFormat } from "@/lib/utils";
import { productSchema } from "@/app/(admin)/dashboard/(index)/products/lib/definition";

const categoryColumns: ColumnDef<z.infer<typeof categorySchema>>[] = [
  {
    id: "drag",
    header: () => null,
    cell: ({ row }) => <DragHandle id={row.original.id} />,
  },
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "category",
    header: "Categories",
    cell: ({ row }) => {
      return <TableCellViewer item={row.original} />;
    },
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Section name",
    cell: ({ row }) => (
      <div className="w-32">
        <Badge variant="outline" className="text-muted-foreground px-1.5">
          {row.original.name}
        </Badge>
      </div>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const category = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
              size="icon"
            >
              <IconDotsVertical />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <Link href={`/dashboard/categories/edit/${category.id}`}>
              <DropdownMenuItem>
                <Pencil className="w-4 h-4 mr-2" />
                <span>Edit</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <FormDeleteCategory id={category.id} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const locationColumns: ColumnDef<z.infer<typeof locationSchema>>[] = [
  {
    id: "drag",
    header: () => null,
    cell: ({ row }) => <DragHandle id={row.original.id} />,
  },
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "location",
    header: "Locations",
    cell: ({ row }) => {
      return <TableCellViewer item={row.original} />;
    },
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Section name",
    cell: ({ row }) => (
      <div className="w-32">
        <Badge variant="outline" className="text-muted-foreground px-1.5">
          {row.original.name}
        </Badge>
      </div>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const location = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
              size="icon"
            >
              <IconDotsVertical />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <Link href={`/dashboard/locations/edit/${location.id}`}>
              <DropdownMenuItem>
                <Pencil className="w-4 h-4 mr-2" />
                <span>Edit</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <FormDeleteLocation id={location.id} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const brandsColumns: ColumnDef<z.infer<typeof brandSchema>>[] = [
  {
    id: "drag",
    header: () => null,
    cell: ({ row }) => <DragHandle id={row.original.id} />,
  },
  {
    id: "logo",
    header: "Brands Logo",
    cell: ({ row }) => {
      const brand = row.original;

      return (
        <Image
          src={brand.logo}
          alt={brand.name}
          width={100}
          height={100}
          className="object-contain w-25 h-auto"
        />
      );
    },
  },
  {
    accessorKey: "brand",
    header: "Brands Name",
    cell: ({ row }) => {
      return <TableCellViewer item={row.original} />;
    },
    enableHiding: false,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const brand = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
              size="icon"
            >
              <IconDotsVertical />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <Link href={`/dashboard/brands/edit/${brand.id}`}>
              <DropdownMenuItem>
                <Pencil className="w-4 h-4 mr-2" />
                <span>Edit</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <FormDeleteBrand id={brand.id} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const productsColumns: ColumnDef<z.infer<typeof productSchema>>[] = [
  {
    id: "drag",
    header: () => null,
    cell: ({ row }) => <DragHandle id={row.original.id} />,
  },
  {
    id: "name",
    header: "Name",
    cell: ({ row }) => {
      const brand = row.original;

      return (
        <Image
          src={brand.image}
          alt={brand.name}
          width={100}
          height={100}
          className="object-contain w-25 h-auto"
        />
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const product = row.original;

      return rupiahFormat(product.price);
    },
  },
  {
    accessorKey: "stock",
    header: "Status",
    cell: ({ row }) => {
      const product = row.original;

      return <Badge variant={"outline"}>{product.stock}</Badge>;
    },
  },
  {
    accessorKey: "total_sales",
    header: "Total Sales",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ row }) => {
      const product = row.original;

      return dateFormat(product.createdAt ?? null);
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
              size="icon"
            >
              <IconDotsVertical />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <Link href={`/dashboard/products/edit/${product.id}`}>
              <DropdownMenuItem>
                <Pencil className="w-4 h-4 mr-2" />
                <span>Edit</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            {/* <FormDeleteBrand id={product.id} /> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export { categoryColumns, locationColumns, brandsColumns, productsColumns };
