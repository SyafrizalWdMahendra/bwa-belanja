import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function getProductById(id: number) {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        _count: {
          select: {
            orderItems: true,
          },
        },
        image: true,
        description: true,
        price: true,
      },
    });

    if (!product) {
      return redirect("/");
    }

    return {
      ...product,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        image: true,
        category: {
          select: {
            name: true,
          },
        },
        price: true,
      },
    });

    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
}
