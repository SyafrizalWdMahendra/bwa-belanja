"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { lucia } from "@/lib/auth";
import { ActionResult } from "@/types";
import { loginSchema } from "./definitions";

export async function SignIn(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validation = loginSchema.safeParse({ email, password });

  if (!validation.success) {
    return {
      error: validation.error.issues[0].message,
    };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      return { error: "Email atau password salah" };
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return { error: "Email atau password salah" };
    }

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    (await cookies()).set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  } catch (err) {
    console.error("Login error:", err);
    return { error: "Terjadi kesalahan internal server" };
  }

  return redirect("/dashboard");
}
