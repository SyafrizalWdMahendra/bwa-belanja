import React from "react";
import { getCategories } from "../lib/actions";
import Link from "next/link";

export default async function ListCategory() {
  const categories = await getCategories();
  const categoryList = Array.isArray(categories) ? categories : [];
  return (
    <div className="grid grid-cols-4 gap-7.5">
      {categoryList.map((item) => (
        <Link
          key={`${item.name + item.id}`}
          href=""
          className="categories-card"
        >
          <div className="bg-white flex items-center gap-3.5 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
            <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
              <img src="assets/icons/mobile.svg" alt="icon" />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="font-semibold leading-5.5">{item.name}</p>
              <p className="text-sm text-[#616369]">
                {item._count.products} products
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
