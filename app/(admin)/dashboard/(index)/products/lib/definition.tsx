import { z } from "zod";

export const ALLOW_MIME_TYPES = ["image/jpg", "image/jpeg", "image/png"];
const StockEnum = z.enum(["ready", "preorder"]);

export const productSchema = z.object({
  id: z.number(),
  name: z.string().min(2, "Product name must be at least 2 characters."),

  description: z
    .string()
    .min(10, "Product description must be at least 10 characters"),

  price: z.number().min(1, "Product price is required"),

  stock: StockEnum,

  image: z.any().refine(
    (file) => {
      if (!file) return false;

      if (typeof file === "string") return true;

      if (file instanceof File) {
        return ALLOW_MIME_TYPES.includes(file.type);
      }

      return false;
    },
    {
      message: "File must be a valid image (jpg, jpeg, png) or a valid URL.",
    }
  ),

  createdAt: z.date().optional(),
});

export type ProductFormValues = z.infer<typeof productSchema>;
