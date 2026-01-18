import z from "zod";

export const schemaShippingAddress = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(5, "Name should have 5 minimal characters"),
  address: z
    .string({ message: "Address is required" })
    .min(5, "Address should have 5 minimal characters"),
  city: z
    .string({ message: "City is required" })
    .min(5, "City should have 5 minimal characters"),
  postal_code: z
    .string({ message: "Postal Code is required" })
    .min(5, "Postal Code should have 5 minimal characters"),
  notes: z.string().nullable(),
  phone: z
    .string({ message: "Phone is required" })
    .min(5, "Phone should have 5 minimal characters"),
});
