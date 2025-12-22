"use server";

import { ActionResult } from "@/types";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { locationSchema } from "./definition";

export async function postLocation(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const name = formData.get("name") as string;
  const createSchema = locationSchema.omit({ id: true });
  const validation = createSchema.safeParse({ name });

  if (!validation.success) {
    return {
      error: validation.error.issues[0].message,
    };
  }

  try {
    await prisma.location.create({
      data: {
        name: validation.data.name,
      },
    });
  } catch (error) {
    console.error("Error creating location:", error);
    return {
      error: "Terjadi kesalahan saat membuat lokasi.",
    };
  }

  revalidatePath("/dashboard/locations");
  return redirect("/dashboard/locations?created=true");
}

export async function getLocationById(id: number) {
  const location = await prisma.location.findUnique({
    where: { id },
  });
  return location;
}

export async function updateLocation(
  id: number,
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  const rawData = Object.fromEntries(formData.entries());

  const updateSchema = locationSchema.omit({ id: true });

  const validation = updateSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      error: validation.error.issues[0].message,
    };
  }

  try {
    await prisma.location.update({
      where: { id },
      data: {
        name: validation.data.name,
      },
    });
  } catch (error) {
    console.error("Update error:", error);
    return {
      error: "Failed to update location.",
    };
  }

  revalidatePath("/dashboard/locations");
  return redirect("/dashboard/locations?updated=true");
}

export async function deleteLocation(id: number): Promise<ActionResult> {
  try {
    await prisma.location.delete({
      where: { id },
    });
  } catch (error) {
    console.log(error);
    return redirect("/dashboard/locations");
  }

  revalidatePath("/dashboard/locations");
  return redirect("/dashboard/locations?deleted=true");
}
