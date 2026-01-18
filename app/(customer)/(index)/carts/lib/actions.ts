"use server";

import { getUser } from "@/lib/auth";
import { ActionResult, TCart } from "@/types";
import { redirect } from "next/navigation";
import { schemaShippingAddress } from "./definition";
import prisma from "@/lib/prisma";
import { generateRandomString } from "@/lib/utils";
import {
  PaymentRequestParameters,
  PaymentRequest,
} from "xendit-node/payment_request/models";
import xenditClient from "@/lib/xendit";
import { Prisma } from "@prisma/client";

export async function storeOrder(
  _: unknown,
  formData: FormData,
  total: number,
  products: TCart[],
): Promise<ActionResult> {
  const { session, user } = await getUser();

  if (!session) {
    return redirect("/");
  }

  const parse = schemaShippingAddress.safeParse({
    name: formData.get("name"),
    address: formData.get("address"),
    city: formData.get("city"),
    postal_code: formData.get("postal_code"),
    notes: formData.get("notes"),
    phone: formData.get("phone"),
  });

  if (!parse.success) {
    return {
      error: parse.error.issues[0].message,
    };
  }

  let redirectPaymentUrl = "/";

  const cleanTotal = Math.round(total);

  if (cleanTotal > 20000000) {
    return {
      error: "Total transaksi melebihi limit ShopeePay (Maks Rp 20.000.000)",
    };
  } else if (cleanTotal < 100) {
    return {
      error: "Total transaksi tidak valid (minimal Rp 100)",
    };
  }

  try {
    const order = await prisma.order.create({
      data: {
        total: total,
        status: "pending",
        user: {
          connect: {
            id: user.id,
          },
        },
        code: generateRandomString(15),
      },
    });

    const data: PaymentRequestParameters = {
      amount: total,
      paymentMethod: {
        ewallet: {
          channelProperties: {
            successReturnUrl: process.env.NEXT_PUBLIC_REDIRECT_URL,
          },
          channelCode: "SHOPEEPAY",
        },
        reusability: "ONE_TIME_USE",
        type: "EWALLET",
      },
      currency: "IDR",
      referenceId: order.code.toString(),
    };

    const response: PaymentRequest =
      await xenditClient.PaymentRequest.createPaymentRequest({
        data,
      });

    redirectPaymentUrl =
      response.actions?.find((val) => val.urlType === "DEEPLINK")?.url ?? "/";

    const queryCreateProductOrder: Prisma.OrderProductCreateManyInput[] = [];

    for (const product of products) {
      queryCreateProductOrder.push({
        orderId: order.id,
        productId: Number(product.id),
        quantity: product.quantity,
        subtotal: product.price,
      });
    }

    await prisma.orderProduct.createMany({
      data: queryCreateProductOrder,
    });

    await prisma.orderDetail.create({
      data: {
        address: parse.data.address,
        city: parse.data.city,
        name: parse.data.name,
        phone: parse.data.phone,
        postalCode: parse.data.postal_code,
        notes: parse.data.notes,
        orderId: order.id,
      },
    });
  } catch (error: any) {
    console.error("================ ERROR XENDIT DETAIL ================");

    if (error?.response?.data) {
      console.error(
        "RESPONSE DATA:",
        JSON.stringify(error.response.data, null, 2),
      );
    } else if (error?.errors) {
      console.error("ERRORS FIELD:", JSON.stringify(error.errors, null, 2));
    } else {
      console.error("RAW ERROR:", error);
    }

    console.error("=====================================================");

    return {
      error: "Failed to checkout",
    };
  }

  return redirect(redirectPaymentUrl);
}
