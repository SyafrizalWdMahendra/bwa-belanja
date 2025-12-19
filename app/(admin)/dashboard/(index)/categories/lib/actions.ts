"use server";

import { ActionResult } from "@/types";
import { redirect } from "next/navigation";
import { categorySchema } from "./definition";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache"; // 1. Import ini

export async function postCategory(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const name = formData.get("name") as string;
  const validation = categorySchema.safeParse({ name });

  if (!validation.success) {
    return {
      error: validation.error.issues[0].message,
    };
  }

  try {
    await prisma.category.create({
      data: {
        name: validation.data.name,
      },
    });
  } catch (error) {
    console.error("Error creating category:", error);
    return {
      error: "Terjadi kesalahan saat membuat kategori.",
    };
  }

  revalidatePath("/dashboard/categories");

  return redirect("/dashboard/categories?success=true");
}
