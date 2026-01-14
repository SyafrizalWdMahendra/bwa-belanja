export type ActionResult = {
  error?: string;
  success?: string;
  data?: any;
};

export type TProduct = {
  id: number;
  image_url: string;
  name: string;
  category_name: string;
  price: number;
};

export interface CardProductProps {
  item: TProduct;
}

// export type TParams = {
//   id: number;
// };

export type DetailProductProps = {
  params: Promise<{ id: number }>;
};
