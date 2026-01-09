import { loginSchema } from "@/app/(admin)/dashboard/(auth)/sign-in/lib/definitions";
import { z } from "zod";

export const registerSchema = loginSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters."),
});
