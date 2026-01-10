import React, { ReactNode } from "react";
import { getProducts } from "../lib/actions";
import Link from "next/link";
import { rupiahFormat } from "@/lib/utils";
import Image from "next/image";
import CardProduct from "./card-product";

interface ListProductProps {
  title: ReactNode;
}
export default async function ListProduct({ title }: ListProductProps) {
  const products = await getProducts();
  const productList = Array.isArray(products) ? products : [];
  return (
    <div id="picked" className="flex flex-col gap-7.5">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl leading-8.5">{title}</h2>
        <a
          href="catalog.html"
          className="p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold"
        >
          Explore All
        </a>
      </div>
      <div className="grid grid-cols-5 gap-7.5">
        {productList.map((item) => (
          <CardProduct
            key={`${item.name + item.id}`}
            item={{
              category_name: item.category.name,
              id: item.id,
              image_url: item.image,
              name: item.name,
              price: Number(item.price),
            }}
          />
        ))}
      </div>
    </div>
  );
}
