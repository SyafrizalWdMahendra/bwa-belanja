import "dotenv/config";
import { RoleUser } from "../generated/prisma/client";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

async function main() {
  const passwordPlain = "superadmin123";
  const hashedPassword = await bcrypt.hash(passwordPlain, 10);

  const user = await prisma.user.upsert({
    where: { email: "superadmin@example.com" },
    update: {},
    create: {
      username: "super admin",
      email: "superadmin@example.com",
      password: hashedPassword,
      role: RoleUser.superadmin,
    },
  });

  console.log("✅ Seed success:", {
    email: user.email,
    password: passwordPlain,
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
