import { Brand } from "@prisma/client";

export type PageProps = {
  params: Promise<{ id: string }>;
};

export type FormUpdateBrandProps = {
  data: Brand;
};
