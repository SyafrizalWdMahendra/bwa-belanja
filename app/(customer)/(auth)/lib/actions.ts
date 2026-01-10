"use server";

import { loginSchema } from "@/app/(admin)/dashboard/(auth)/sign-in/lib/definitions";
import { ActionResult } from "@/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { getUser, lucia } from "@/lib/auth";
import { registerSchema } from "./definition";

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
    const user = await prisma.user.findFirst({
      where: { email: validation.data.email, role: "customer" },
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

  return redirect("/");
}

export async function SignUp(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const parse = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parse.success) {
    return {
      error: parse.error.issues[0].message,
    };
  }

  const hashedPassword = bcrypt.hashSync(parse.data.password, 12);

  try {
    await prisma.user.create({
      data: {
        username: parse.data.name,
        email: parse.data.email,
        password: hashedPassword,
        role: "customer",
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to sign up",
    };
  }

  return redirect("/?login=true");
}

export async function Logout(
  _: unknown,
  data: FormData
): Promise<ActionResult> {
  console.log("Logout action called");

  const { session } = await getUser();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();

  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/");
}

export async function getCategories() {
  try {
    const categories = prisma.category.findMany({
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
