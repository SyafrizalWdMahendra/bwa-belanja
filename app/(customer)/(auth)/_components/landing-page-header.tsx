import React from "react";
import { AuthSession } from "./auth-session";

export default function LandingPageHeader() {
  return (
    <header className="bg-[#EFF3FA] pt-7.5 pb-12.5 w-full">
      <nav className="container max-w-282.5 mx-auto flex items-center justify-between bg-[#0D5CD7] p-5 rounded-3xl">
        <div className="flex shrink-0">
          <img src="assets/logos/logo.svg" alt="icon" />
        </div>
        <ul className="flex items-center gap-7.5">
          <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 font-bold text-[#FFC736]">
            <a href="index.html">Shop</a>
          </li>
          <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
            <a href="">Categories</a>
          </li>
          <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
            <a href="">Testimonials</a>
          </li>
          <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
            <a href="">Rewards</a>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <a href="cart.html">
            <div className="w-12 h-12 flex shrink-0">
              <img src="assets/icons/cart.svg" alt="icon" />
            </div>
          </a>
          <AuthSession />
        </div>
      </nav>
      <div className="container max-w-282.5 mx-auto flex items-center justify-between gap-1 mt-12.5">
        <div className="flex flex-col gap-7.5">
          <div className="flex items-center gap-2.5 p-[8px_16px] rounded-full bg-white w-fit">
            <div className="w-5.5 h-5.5 flex shrink-0">
              <img src="assets/icons/crown.svg" alt="icon" />
            </div>
            <p className="font-semibold text-sm">
              Most Popular 100th Product in Belanja
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            <h1 className="font-bold text-[55px] leading-13.75">
              Working Faster 10x
            </h1>
            <p className="text-lg leading-8.5 text-[#6A7789]">
              Dolor si amet lorem super-power features riches than any other
              platform devices AI integrated.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href=""
              className="p-[18px_24px] rounded-full font-semibold bg-[#0D5CD7] text-white"
            >
              Add to Cart
            </a>
            <a
              href=""
              className="p-[18px_24px] rounded-full font-semibold bg-white"
            >
              View Details
            </a>
          </div>
        </div>
        <div className="w-147 h-90 flex shrink-0 overflow-hidden relative">
          <img
            src="assets/banners/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png"
            className="object-contain"
            alt="icon"
          />
          <div className="absolute top-[60%] bg-white p-[14px_16px] rounded-3xl flex items-center gap-2.5">
            <div className="w-12 h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736] overflow-hidden">
              <img
                src="assets/icons/code-circle.svg"
                className="w-6 h-6"
                alt="icon"
              />
            </div>
            <p className="font-semibold text-sm">
              Bonus Mac OS <br /> Capitan Pro
            </p>
          </div>
          <div className="absolute right-0 top-[30%] bg-white p-[14px_16px] rounded-3xl flex flex-col items-center gap-2.5">
            <div className="w-12 h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736] overflow-hidden">
              <img
                src="assets/icons/star-outline.svg"
                className="w-6 h-6"
                alt="icon"
              />
            </div>
            <p className="font-semibold text-sm text-center">
              Include <br /> Warranty
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-282.5 mx-auto flex items-center justify-center gap-10 mt-12.5">
        <div className="flex items-center gap-2.5">
          <div className="w-12.5 h-12.5 flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
            <img
              src="assets/photos/p1.png"
              className="w-full h-full object-cover"
              alt="photo"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-semibold text-sm leading-5.5">
              Awesome product!
            </p>
            <p className="text-xs leading-4.5">Jemmie Pemilia</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-12.5 h-12.5 flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
            <img
              src="assets/photos/p2.png"
              className="w-full h-full object-cover"
              alt="photo"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-semibold text-sm leading-5.5">Money saver 25%</p>
            <p className="text-xs leading-4.5">Angga Risky</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-12.5 h-12.5 flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
            <img
              src="assets/photos/p3.png"
              className="w-full h-full object-cover"
              alt="photo"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-semibold text-sm leading-5.5">
              I love the warranty
            </p>
            <p className="text-xs leading-4.5">Petina Malaka</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-12.5 h-12.5 flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
            <img
              src="assets/photos/p4.png"
              className="w-full h-full object-cover"
              alt="photo"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-semibold text-sm leading-5.5">Big deals ever!</p>
            <p className="text-xs leading-4.5">Udin Sarifun</p>
          </div>
        </div>
      </div>
    </header>
  );
}
