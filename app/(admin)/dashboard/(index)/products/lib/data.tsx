import prisma from "@/lib/prisma";
import { ProductWithRelations } from "@/lib/types";

export async function getProducts(): Promise<ProductWithRelations[]> {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        id: "asc",
      },
      select: {
        id: true,
        name: true,
        createdAt: true,
        price: true,
        stock: true,
        image: true,
        description: true,
        brandId: true,
        categoryId: true,
        locationId: true,
        _count: {
          select: {
            orderItems: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
        brand: {
          select: {
            name: true,
          },
        },
        location: {
          select: {
            name: true,
          },
        },
      },
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductFormData() {
  try {
    const [brands, categories, locations] = await Promise.all([
      prisma.brand.findMany({
        select: { id: true, name: true },
        orderBy: { name: "asc" },
      }),
      prisma.category.findMany({
        select: { id: true, name: true },
        orderBy: { name: "asc" },
      }),
      prisma.location.findMany({
        select: { id: true, name: true },
        orderBy: { name: "asc" },
      }),
    ]);

    return { brands, categories, locations };
  } catch (error) {
    console.error("Error fetching form data:", error);
    return {
      brands: [],
      categories: [],
      locations: [],
    };
  }
}
