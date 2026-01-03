import prisma from "@/lib/prisma";

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
