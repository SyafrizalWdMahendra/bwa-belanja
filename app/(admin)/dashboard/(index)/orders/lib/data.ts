import prisma from "@/lib/prisma";
import { TOrderColumn } from "@/lib/types";
import { getImageUrl } from "../../brands/lib/storage";

export async function getOrders() {
  const data = await prisma.order.findMany({
    include: {
      user: true,
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const response: TOrderColumn[] = data.map((order) => {
    return {
      id: order.id,
      customer_name: order.user.username,
      price: Number(order.total),
      products: order.orderItems?.map((item) => {
        return {
          name: item.product.name,
          image: getImageUrl(item.product.image[0]),
        };
      }),
      status: order.status,
    };
  });

  return response;
}
