import prisma from "@/lib/prisma";

async function getCategories() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: {
            products: true,
          },
        },
      },
    });
    return categories;
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to get categories data",
    };
  }
}

async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      select: {
        name: true,
        image: true,
        id: true,
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
    return {
      error: "Failed to get products",
    };
  }
}

async function getBrands() {
  try {
    const brands = await prisma.brand.findMany();
    return brands;
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to get brands",
    };
  }
}

async function getLocations() {
  try {
    const location = await prisma.location.findMany({
      orderBy: {
        id: "asc",
      },
      take: 3,
    });
    return location;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { getCategories, getProducts, getBrands, getLocations };
