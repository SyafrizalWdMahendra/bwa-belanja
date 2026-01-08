import prisma from "@/lib/prisma";
import { TCustomerColumn } from "@/lib/types";

export async function getCustomers() {
  try {
    const customers = await prisma.user.findMany({
      where: {
        role: "customer",
      },
      include: {
        _count: {
          select: {
            orders: true,
          },
        },
      },
    });

    const response: TCustomerColumn[] = customers.map((customer) => {
      return {
        id: customer.id,
        name: customer.username,
        email: customer.email,
        total_transactions: customer._count.orders ?? 0,
      };
    });

    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
