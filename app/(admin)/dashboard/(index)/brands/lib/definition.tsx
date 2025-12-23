import { z } from "zod";

export const brandSchema = z.object({
  id: z.number(),
  name: z.string().min(2, "Brand name must be at least 2 characters."),
  logo: z.string().optional(),
});

export type CategoryFormValues = z.infer<typeof brandSchema>;
