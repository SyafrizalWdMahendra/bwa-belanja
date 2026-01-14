import React from "react";
import NavHeader from "../../_components/nav-header";
import { DetailProductProps } from "@/types";
import { getProductById } from "./lib/data";
import PriceInfo from "./_components/price-info";
import OtherProducts from "./_components/other-products";
import Testimonials from "./_components/testimonials";
import { notFound, redirect } from "next/navigation";

export default async function DetailProductPage({
  params,
}: DetailProductProps) {
  const { id } = await params;

  const product = await getProductById(Number(id));

  if (!product) {
    return notFound();
  }

  return (
    <div className="bg-white text-black">
      <header className="bg-[#EFF3FA] pt-[30px] h-[480px] -mb-[310px]">
        <NavHeader />
      </header>
      <div
        id="title"
        className="container max-w-[1130px] mx-auto flex items-center justify-between"
      >
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">
              Shop
            </a>
            <span className="text-sm text-[#6A7789]">/</span>
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">
              Browse
            </a>
            <span className="text-sm text-[#6A7789]">/</span>
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">
              Details
            </a>
          </div>
          <h1 className="font-bold text-4xl leading-9">{product?.name}</h1>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <div className="flex items-center">
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star-gray.svg" alt="star" />
            </div>
          </div>
          <p className="font-semibold">{product?._count.orderItems}</p>
        </div>
      </div>
      <div id="details-images" className="main-carousel mt-[30px]">
        <div className="image-card pr-5 first-of-type:pl-[calc((100vw-1130px-20px)/2)]">
          <div className="bg-white w-[470px] h-[350px] p-10 flex shrink-0 border border-[#E5E5E5] justify-center items-center rounded-[30px] overflow-hidden">
            <img
              src={product?.image}
              className="w-full h-full object-contain"
              alt={product?.name}
            />
          </div>
        </div>
      </div>
      <div
        id="details-benefits"
        className="container max-w-[1130px] mx-auto flex items-center gap-[50px] justify-center mt-[50px]"
      >
        <div className="flex items-center gap-[10px]">
          <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
            <img src="/assets/icons/star-outline.svg" alt="icon" />
          </div>
          <p className="font-semibold text-sm">
            Include Official <br /> Warranty
          </p>
        </div>
        <div className="border-[0.5px] border-[#E5E5E5] h-12"></div>
        <div className="flex items-center gap-[10px]">
          <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
            <img src="/assets/icons/code-circle.svg" alt="icon" />
          </div>
          <p className="font-semibold text-sm">
            Bonus Mac OS <br /> Capitan Pro
          </p>
        </div>
        <div className="border-[0.5px] border-[#E5E5E5] h-12"></div>
        <div className="flex items-center gap-[10px]">
          <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
            <img src="/assets/icons/like.svg" alt="icon" />
          </div>
          <p className="font-semibold text-sm">
            100% Original <br /> From Factory
          </p>
        </div>
        <div className="border-[0.5px] border-[#E5E5E5] h-12"></div>
        <div className="flex items-center gap-[10px]">
          <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
            <img src="/assets/icons/tag.svg" alt="icon" />
          </div>
          <p className="font-semibold text-sm">
            Free Tax On <br /> Every Sale
          </p>
        </div>
      </div>
      <div
        id="details-info"
        className="container max-w-[1030px] mx-auto flex justify-between gap-5 mt-[50px]"
      >
        <div className="max-w-[650px] w-full flex flex-col gap-[30px]">
          <div id="about" className="flex flex-col gap-[10px]">
            <h3 className="font-semibold">About Product</h3>
            <p className="leading-[32px]">{product?.description}</p>
          </div>
          <div id="testi" className="flex flex-col gap-[10px]">
            <h3 className="font-semibold">Real Testimonials</h3>
            <Testimonials />
          </div>
        </div>
        <PriceInfo params={params} />
      </div>
      <div
        id="recommedations"
        className="container max-w-[1130px] mx-auto flex flex-col gap-[30px] pb-[100px] mt-[70px]"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl leading-[34px]">
            Other Products <br /> You Might Need
          </h2>
        </div>
        <OtherProducts />
      </div>
    </div>
  );
}
