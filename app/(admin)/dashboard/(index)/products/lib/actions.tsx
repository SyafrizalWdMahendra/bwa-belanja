"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import type { ActionResult } from "@/types";
import { productSchema } from "./definition";
import { deleteFile, replaceFile, uploadFile } from "./storage";

export async function postProduct(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price");
  const stock = formData.get("stock") as string;
  const logoFile = formData.get("image") as File;

  const createSchema = productSchema.omit({ id: true });

  const validation = createSchema.safeParse({ name, image: logoFile });

  if (!validation.success) {
    return {
      error: validation.error.issues[0].message,
    };
  }

  let logoUrl = "";

  if (logoFile && logoFile.size > 0) {
    try {
      const { url } = await uploadFile(logoFile, "products");
      logoUrl = url;
    } catch (uploadError) {
      console.error("Upload Error:", uploadError);
      return { error: "Gagal mengupload gambar produk." };
    }
  }

  try {
    // await prisma.product.create({
    //   data: {
    //     name: validation.data.name,
    //     description: validation.data.description,
    //     price: validation.data.price,
    //     stock: validation.data.stock,
    //     createdAt: validation.data.createdAt,
    //     image: logoUrl,
    //   },
    // });
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
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price");
  const stock = formData.get("stock") as string;
  const logoFile = formData.get("logo") as File;

  const validation = productSchema.safeParse({ id, name, image: logoFile });

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

    if (logoFile && logoFile.size > 0) {
      try {
        const { url } = await replaceFile(
          existingProduct.image,
          logoFile,
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
        name: validation.data.name,
        image: logoUrl,
      },
    });
  } catch (error) {
    console.error("Error updating brand:", error);
    return {
      error: "Terjadi kesalahan saat mengupdate data merek.",
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

// export async function deleteBrand(id: number): Promise<ActionResult> {
//   try {
//     const brand = await prisma.brand.findUnique({
//       where: { id: Number(id) },
//       select: { logo: true },
//     });

//     if (!brand) {
//       return { error: "Brand tidak ditemukan." };
//     }

//     await prisma.brand.delete({
//       where: { id: Number(id) },
//     });

//     if (brand.logo) {
//       await deleteFile(brand.logo);
//     }
//   } catch (error) {
//     console.error("Error deleting brand:", error);
//     return {
//       error: "Terjadi kesalahan saat menghapus data merek.",
//     };
//   }
//   revalidatePath("/dashboard/brands");
//   return redirect("/dashboard/brands?deleted=true");
// }

// export async function getBrandById(id: number) {
//   const brand = await prisma.brand.findUnique({
//     where: { id },
//   });
//   return brand;
// }
