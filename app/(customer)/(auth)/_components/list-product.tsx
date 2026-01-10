import React, { ReactNode } from "react";
import { getProducts } from "../lib/actions";
import Link from "next/link";
import { rupiahFormat } from "@/lib/utils";
import Image from "next/image";

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
          <Link
            key={`${item.name + item.id}`}
            href="details.html"
            className="product-card"
          >
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-contain w-full h-full "
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">{item.name}</p>
                  <p className="text-sm text-[#616369]">{item.category.name}</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  {rupiahFormat(item.price)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
