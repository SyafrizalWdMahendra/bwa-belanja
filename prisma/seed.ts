import prisma from "@/lib/prisma";
import { RoleUser } from "@prisma/client";
import bcrypt from "bcrypt";

async function main() {
  const hashedPassword = await bcrypt.hash("password123", 10);

  const superAdmin = await prisma.user.upsert({
    where: { email: "superadmin@example.com" },
    update: {},
    create: {
      email: "superadmin@example.com",
      username: "Super Admin",
      password: hashedPassword,
      role: RoleUser.superadmin,
    },
  });

  const customer = await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {},
    create: {
      email: "user@example.com",
      username: "Regular User",
      password: hashedPassword,
      role: RoleUser.customer,
    },
  });

  console.log("Seeding completed!");
  console.log({ superAdmin, customer });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
