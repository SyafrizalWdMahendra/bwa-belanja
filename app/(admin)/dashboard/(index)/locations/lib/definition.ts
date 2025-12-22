import { z } from "zod";

export const locationSchema = z.object({
  id: z.number(),
  name: z.string().min(2, "Category name must be at least 2 characters."),
});

export type LocationFormValues = z.infer<typeof locationSchema>;
