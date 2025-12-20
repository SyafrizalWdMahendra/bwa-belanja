"use server";

import { ActionResult } from "@/types";
import { redirect } from "next/navigation";
import { categorySchema } from "./definition";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

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
  return redirect("/dashboard/categories?created=true");
}

export async function getCategoryById(id: number) {
  const category = await prisma.category.findUnique({
    where: { id },
  });
  return category;
}

export async function updateCategory(
  id: number,
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  const rawData = Object.fromEntries(formData.entries());

  const updateSchema = categorySchema.omit({ id: true });

  const validation = updateSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      error: validation.error.issues[0].message,
    };
  }

  try {
    await prisma.category.update({
      where: { id },
      data: {
        name: validation.data.name,
      },
    });
  } catch (error) {
    console.error("Update error:", error);
    return {
      error: "Failed to update category.",
    };
  }

  revalidatePath("/dashboard/categories");
  return redirect("/dashboard/categories?updated=true");
}
