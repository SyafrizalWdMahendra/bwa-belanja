import prisma from "@/lib/prisma";

export async function getBrands() {
  try {
    const brands = await prisma.brand.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return brands;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
