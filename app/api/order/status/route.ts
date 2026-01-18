import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const referenceId = body?.data?.reference_id;
    const paymentStatus = body?.data?.status;

    if (!referenceId || !paymentStatus) {
      return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
    }

    const status = paymentStatus === "SUCCEEDED" ? "success" : "failed";

    await prisma.order.upsert({
      where: {
        code: referenceId,
      },
      update: {
        status,
      },
      create: {
        code: referenceId,
        status,
        total: body?.data?.amount ?? 0,
        userId: body?.data?.user_id,
      },
    });

    return NextResponse.json({ status: true });
  } catch (error) {
    console.error("WEBHOOK ERROR:", error);

    return NextResponse.json({ status: true });
  }
}
