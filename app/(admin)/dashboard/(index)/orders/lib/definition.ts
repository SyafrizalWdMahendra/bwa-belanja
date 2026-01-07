import { z } from "zod";

const statusOrderEnum = z.enum([" pending", "success", "failed"]);

export const orderSchema = z.object({
  id: z.number(),
  code: z.number().optional(),
  userId: z.coerce.number().optional(),
  total: z.number(),
  status: statusOrderEnum,
});

export type OrderFormValues = z.infer<typeof orderSchema>;
