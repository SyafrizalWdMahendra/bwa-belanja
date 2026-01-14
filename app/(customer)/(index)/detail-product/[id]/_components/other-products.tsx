import Link from "next/link";
import { getProducts } from "../lib/data";
import { rupiahFormat } from "@/lib/utils";

export default async function OtherProducts() {
  const products = await getProducts();
 
  return (
    <div className="grid grid-cols-5 gap-[30px]">
      {products.map((prod) => (
        <Link key={prod.id} href="" className="product-card">
          <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
            <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
              <img
                src={prod.image}
                className="w-full h-full object-contain"
                alt={prod.name}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-1">
                <p className="font-semibold leading-[22px]">{prod.name}</p>
                <p className="text-sm text-[#616369]">{prod.category.name}</p>
              </div>
              <p className="font-semibold text-[#0D5CD7] leading-[22px]">
                {rupiahFormat(prod.price) ?? 0}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
