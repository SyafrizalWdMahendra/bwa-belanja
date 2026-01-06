"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import type { ActionResult } from "@/types";
import { productSchema } from "./definition";
import { deleteFile, replaceFile, uploadFile } from "./storage";
import { parseProductFormData } from "@/lib/utils";

export async function postProduct(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const parseRawData = parseProductFormData(formData);

  const ALLOW_MIME_TYPES = ["image/jpg", "image/jpeg", "image/png"];

  if (parseRawData.logoFile && parseRawData.logoFile.size > 0) {
    if (!ALLOW_MIME_TYPES.includes(parseRawData.logoFile.type)) {
      return {
        error: "Only .jpg, .jpeg, .png formats are supported.",
      };
    }
  }

  const definition = productSchema.omit({ id: true, image: true });
  const validation = definition.safeParse(parseRawData.textData);

  if (!validation.success) {
    return {
      error: validation.error.issues[0].message,
    };
  }

  let logoUrl = "";

  try {
    const { url } = await uploadFile(parseRawData.logoFile, "products");
    logoUrl = url;
  } catch (uploadError) {
    console.error("Upload Error:", uploadError);
    return { error: "Gagal mengupload gambar produk." };
  }

  try {
    await prisma.product.create({
      data: {
        ...validation.data,
        image: logoUrl,
      },
    });
  } catch (error) {
    if (logoUrl) {
      await deleteFile(logoUrl);
    }

    console.error("Error creating product:", error);
    return {
      error: "Terjadi kesalahan saat menyimpan data produk.",
    };
  }

  revalidatePath("/dashboard/products");
  return redirect("/dashboard/products?created=true");
}

export async function updateProduct(
  id: number,
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const parseRawData = parseProductFormData(formData);

  const ALLOW_MIME_TYPES = ["image/jpg", "image/jpeg", "image/png"];

  if (parseRawData.logoFile && parseRawData.logoFile.size > 0) {
    if (!ALLOW_MIME_TYPES.includes(parseRawData.logoFile.type)) {
      return {
        error: "Only .jpg, .jpeg, .png formats are supported.",
      };
    }
  }

  const definition = productSchema.omit({
    id: true,
    image: true,
    createdAt: true,
  });

  const validation = definition.safeParse(parseRawData.textData);

  if (!validation.success) {
    return {
      error: validation.error.issues[0].message,
    };
  }

  try {
    const existingProduct = await prisma.product.findUnique({
      where: { id: Number(id) },
      select: { image: true },
    });

    if (!existingProduct) {
      return { error: "Produk tidak ditemukan." };
    }

    let logoUrl = existingProduct.image;

    if (parseRawData.logoFile && parseRawData.logoFile.size > 0) {
      try {
        const { url } = await replaceFile(
          existingProduct.image,
          parseRawData.logoFile,
          "products"
        );
        logoUrl = url;
      } catch (uploadError) {
        console.error("Upload Error:", uploadError);
        return { error: "Gagal mengupload gambar logo." };
      }
    }

    await prisma.product.update({
      where: { id: Number(id) },
      data: {
        ...validation.data,
        image: logoUrl,
      },
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return {
      error: "Terjadi kesalahan saat mengupdate data produk.",
    };
  }

  revalidatePath("/dashboard/products");
  return redirect("/dashboard/products?updated=true");
}

export async function getProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  return product;
}

export async function deleteProduct(id: number): Promise<ActionResult> {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      select: { image: true },
    });

    if (!product) {
      return { error: "Produk tidak ditemukan." };
    }

    await prisma.product.delete({
      where: { id: Number(id) },
    });

    if (product.image) {
      await deleteFile(product.image);
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    return {
      error: "Terjadi kesalahan saat menghapus data produk.",
    };
  }
  revalidatePath("/dashboard/products");
  return redirect("/dashboard/products?deleted=true");
}
