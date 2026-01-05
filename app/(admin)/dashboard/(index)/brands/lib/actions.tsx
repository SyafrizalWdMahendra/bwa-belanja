"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import type { ActionResult } from "@/types";
import { brandSchema } from "./definition";
import { deleteFile, replaceFile, uploadFile } from "./storage";

export async function postBrand(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const name = formData.get("name") as string;
  const logoFile = formData.get("logo") as File;

  const ALLOW_MIME_TYPES = ["image/jpg", "image/jpeg", "image/png"];

  if (logoFile && logoFile.size > 0) {
    if (!ALLOW_MIME_TYPES.includes(logoFile.type)) {
      return {
        error: "Only .jpg, .jpeg, .png formats are supported.",
      };
    }
  }

  const createSchema = brandSchema.omit({ id: true });

  const validation = createSchema.safeParse({ name, logo: logoFile });

  if (!validation.success) {
    return {
      error: validation.error.issues[0].message,
    };
  }

  let logoUrl = "";

  if (logoFile && logoFile.size > 0) {
    try {
      const { url } = await uploadFile(logoFile, "brands");
      logoUrl = url;
    } catch (uploadError) {
      console.error("Upload Error:", uploadError);
      return { error: "Gagal mengupload gambar logo." };
    }
  }

  try {
    await prisma.brand.create({
      data: {
        name: validation.data.name,
        logo: logoUrl,
      },
    });
  } catch (error) {
    if (logoUrl) {
      await deleteFile(logoUrl);
    }

    console.error("Error creating brand:", error);
    return {
      error: "Terjadi kesalahan saat menyimpan data merek.",
    };
  }

  revalidatePath("/dashboard/brands");
  return redirect("/dashboard/brands?created=true");
}

export async function updateBrand(
  id: number,
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const name = formData.get("name") as string;
  const logoFile = formData.get("logo") as File;

  const validation = brandSchema.safeParse({ id, name, logo: logoFile });

  if (!validation.success) {
    return {
      error: validation.error.issues[0].message,
    };
  }

  try {
    const existingBrand = await prisma.brand.findUnique({
      where: { id: Number(id) },
      select: { logo: true },
    });

    if (!existingBrand) {
      return { error: "Brand tidak ditemukan." };
    }

    let logoUrl = existingBrand.logo;

    if (logoFile && logoFile.size > 0) {
      try {
        const { url } = await replaceFile(
          existingBrand.logo,
          logoFile,
          "brands"
        );
        logoUrl = url;
      } catch (uploadError) {
        console.error("Upload Error:", uploadError);
        return { error: "Gagal mengupload gambar logo." };
      }
    }

    await prisma.brand.update({
      where: { id: Number(id) },
      data: {
        name: validation.data.name,
        logo: logoUrl,
      },
    });
  } catch (error) {
    console.error("Error updating brand:", error);
    return {
      error: "Terjadi kesalahan saat mengupdate data merek.",
    };
  }

  revalidatePath("/dashboard/brands");
  return redirect("/dashboard/brands?updated=true");
}

export async function deleteBrand(id: number): Promise<ActionResult> {
  try {
    const brand = await prisma.brand.findUnique({
      where: { id: Number(id) },
      select: { logo: true },
    });

    if (!brand) {
      return { error: "Brand tidak ditemukan." };
    }

    await prisma.brand.delete({
      where: { id: Number(id) },
    });

    if (brand.logo) {
      await deleteFile(brand.logo);
    }
  } catch (error) {
    console.error("Error deleting brand:", error);
    return {
      error: "Terjadi kesalahan saat menghapus data merek.",
    };
  }
  revalidatePath("/dashboard/brands");
  return redirect("/dashboard/brands?deleted=true");
}

export async function getBrandById(id: number) {
  const brand = await prisma.brand.findUnique({
    where: { id },
  });
  return brand;
}
