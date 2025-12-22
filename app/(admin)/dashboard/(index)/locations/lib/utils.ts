import { Location } from "@prisma/client";

export type PageProps = {
  params: Promise<{ id: string }>;
};

export interface FormUpdateLocationProps {
  data: Location;
}
