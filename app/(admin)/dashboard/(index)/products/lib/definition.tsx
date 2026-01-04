import { z } from "zod";

export const ALLOW_MIME_TYPES = ["image/jpg", "image/jpeg", "image/png"];
const StockEnum = z.enum(["ready", "preorder"]);

export const productSchema = z.object({
  id: z.number().optional(),

  name: z.string().min(2, "Product name must be at least 2 characters."),

  description: z
    .string()
    .min(10, "Product description must be at least 10 characters"),

  price: z.coerce.number().min(1, "Product price is required"),

  stock: StockEnum,

  brandId: z.coerce.number().min(1, "Brand is required"),
  categoryId: z.coerce.number().min(1, "Category is required"),
  locationId: z.coerce.number().min(1, "Location is required"),

  image: z
    .any()
    .refine((file) => file?.size > 0, "Image is required")
    .refine(
      (file) => ALLOW_MIME_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png formats are supported."
    ),

  createdAt: z.date().optional(),
});

export const productFormSchema = z.object({
  id: z.number().optional(),

  name: z.string().min(2, "Product name must be at least 2 characters."),

  description: z
    .string()
    .min(10, "Product description must be at least 10 characters"),

  price: z.number().min(1, "Product price is required"),

  stock: StockEnum,

  brandId: z.number().min(1, "Brand is required"),
  categoryId: z.number().min(1, "Category is required"),
  locationId: z.number().min(1, "Location is required"),

  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Image is required")
    .refine(
      (file) => ALLOW_MIME_TYPES.includes(file.type),
      "Only .jpg, .jpeg, .png formats are supported."
    )
    .optional(),

  createdAt: z.date().optional(),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;
