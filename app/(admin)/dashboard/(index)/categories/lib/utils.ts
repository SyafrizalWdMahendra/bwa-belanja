import { Category } from "@prisma/client";

export type PageProps = {
  params: Promise<{ id: string }>;
};

export interface FormUpdateCategoryProps {
  data: Category;
}
