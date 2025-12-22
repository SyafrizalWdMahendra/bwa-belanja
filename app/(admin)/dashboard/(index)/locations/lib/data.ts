import prisma from "@/lib/prisma";

export async function getLocations() {
  try {
    const locations = await prisma.location.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return locations;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
