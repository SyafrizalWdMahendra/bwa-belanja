import { rupiahFormat } from "@/lib/utils";
import { CardProductProps } from "@/types";
import Link from "next/link";

export default function CardProduct({ item }: CardProductProps) {
  return (
    <Link href={`/detail-product/${item.id}`} className="product-card">
      <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
        <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
          <img
            src={item.image_url}
            alt={item.name}
            width={100}
            height={100}
            className="object-contain w-full h-full "
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-1">
            <p className="font-semibold leading-5.5">{item.name}</p>
            <p className="text-sm text-[#616369]">{item.category_name}</p>
          </div>
          <p className="font-semibold text-[#0D5CD7] leading-5.5">
            {rupiahFormat(item.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}
