import { z } from "zod";

export const ALLOW_MIME_TYPES = ["image/jpg", "image/jpeg", "image/png"];

export const brandSchema = z.object({
  id: z.number(),
  name: z.string().min(2, "Brand name must be at least 2 characters."),
  logo: z
    .any()
    .refine((file: File) => ALLOW_MIME_TYPES.includes(file.type), {
      message: "File is not valid.",
    })
    .refine((file: File) => file?.name, { message: "Image is required" }),
});

export type BrandFormValues = z.infer<typeof brandSchema>;
