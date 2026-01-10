import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getBrands } from "../lib/actions";

export default async function ListBrand() {
  const brands = await getBrands();
  const brandList = Array.isArray(brands) ? brands : [];
  return (
    <div id="brands" className="flex flex-col gap-7.5">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl leading-8.5">
          Explore Our <br /> Popular Brands
        </h2>
        <a
          href="catalog.html"
          className="p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold"
        >
          Explore All
        </a>
      </div>
      <div className="grid grid-cols-5 gap-7.5">
        {brandList.map((item) => (
          <Link key={`${item.name}`} href="" className="logo-card">
            <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-7.5 flex shrink-0 items-center justify-center overflow-hidden">
                <Image
                  src={item.logo || ""}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-contain w-full h-full "
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
