"use server";

import { ActionResult } from "@/types";
import { notFound, redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { error } from "console";
import { brandSchema } from "./definition";
import { supabase } from "@/lib/supabase";

export async function postBrand(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const name = formData.get("name") as string;
  const logoFile = formData.get("logo") as File;

  const createSchema = brandSchema.omit({ id: true });

  const validation = createSchema.safeParse({ name, logo: logoFile });

  if (!validation.success) {
    return {
      error: validation.error.issues[0].message,
    };
  }

  let logoPath = "";

  if (logoFile && logoFile.size > 0) {
    const fileName = `brands/${Date.now()}-${logoFile.name.replaceAll(
      " ",
      "_"
    )}`;

    const { error: uploadError } = await supabase.storage
      .from("belanja")
      .upload(fileName, logoFile, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      console.error("Upload Error:", uploadError);
      return { error: "Gagal mengupload gambar logo." };
    }

    logoPath = fileName;
  }

  try {
    await prisma.brand.create({
      data: {
        name: validation.data.name,
        logo: logoPath,
      },
    });
  } catch (error) {
    console.error("Error creating brand:", error);
    return {
      error: "Terjadi kesalahan saat menyimpan data merek.",
    };
  }

  revalidatePath("/dashboard/brands");
  return redirect("/dashboard/brands?created=true");
}

export async function getBrandById(id: number) {
  const brand = await prisma.brand.findUnique({
    where: { id },
  });
  return brand;
}

export async function updateBrand(
  id: number,
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  const rawData = Object.fromEntries(formData.entries());

  const updateSchema = brandSchema.omit({ id: true });

  const validation = updateSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      error: validation.error.issues[0].message,
    };
  }

  try {
    await prisma.brand.update({
      where: { id },
      data: {
        name: validation.data.name,
        logo: validation.data.logo,
      },
    });
  } catch (error) {
    console.error("Update error:", error);
    return {
      error: "Failed to update brand.",
    };
  }

  revalidatePath("/dashboard/brands");
  return redirect("/dashboard/brands?updated=true");
}

export async function deleteBrands(id: number): Promise<ActionResult> {
  try {
    await prisma.brand.delete({
      where: { id },
    });
  } catch (error) {
    console.log(error);
    return redirect("/dashboard/brands");
  }

  revalidatePath("/dashboard/brands");
  return redirect("/dashboard/brands?deleted=true");
}
