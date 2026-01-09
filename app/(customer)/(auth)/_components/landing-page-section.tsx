import React from "react";

export default function LandingPageSection() {
  return (
    <section
      id="content"
      className="container max-w-282.5 mx-auto flex flex-col gap-12.5 pt-12.5 pb-25"
    >
      <div id="categories" className="flex flex-col gap-7.5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl leading-8.5">
            Browse Products <br /> by Categories
          </h2>
          <a
            href="catalog.html"
            className="p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold"
          >
            Explore All
          </a>
        </div>
        <div className="grid grid-cols-4 gap-7.5">
          <a href="" className="categories-card">
            <div className="bg-white flex items-center gap-3.5 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                <img src="assets/icons/mobile.svg" alt="icon" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-semibold leading-5.5">Phones</p>
                <p className="text-sm text-[#616369]">4,583 products</p>
              </div>
            </div>
          </a>
          <a href="" className="categories-card">
            <div className="bg-white flex items-center gap-3.5 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                <img src="assets/icons/game.svg" alt="icon" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-semibold leading-5.5">Games</p>
                <p className="text-sm text-[#616369]">4,583 products</p>
              </div>
            </div>
          </a>
          <a href="" className="categories-card">
            <div className="bg-white flex items-center gap-3.5 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                <img src="assets/icons/airpods.svg" alt="icon" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-semibold leading-5.5">Headsets</p>
                <p className="text-sm text-[#616369]">4,583 products</p>
              </div>
            </div>
          </a>
          <a href="" className="categories-card">
            <div className="bg-white flex items-center gap-3.5 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                <img src="assets/icons/box.svg" alt="icon" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-semibold leading-5.5">Essenstials</p>
                <p className="text-sm text-[#616369]">4,583 products</p>
              </div>
            </div>
          </a>
          <a href="" className="categories-card">
            <div className="bg-white flex items-center gap-3.5 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                <img src="assets/icons/lamp.svg" alt="icon" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-semibold leading-5.5">Lights</p>
                <p className="text-sm text-[#616369]">4,583 products</p>
              </div>
            </div>
          </a>
          <a href="" className="categories-card">
            <div className="bg-white flex items-center gap-3.5 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                <img src="assets/icons/watch.svg" alt="icon" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-semibold leading-5.5">Watches</p>
                <p className="text-sm text-[#616369]">4,583 products</p>
              </div>
            </div>
          </a>
          <a href="" className="categories-card">
            <div className="bg-white flex items-center gap-3.5 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                <img src="assets/icons/monitor.svg" alt="icon" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-semibold leading-5.5">Desktops</p>
                <p className="text-sm text-[#616369]">4,583 products</p>
              </div>
            </div>
          </a>
          <a href="" className="categories-card">
            <div className="bg-white flex items-center gap-3.5 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                <img src="assets/icons/cup.svg" alt="icon" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="font-semibold leading-5.5">Awards</p>
                <p className="text-sm text-[#616369]">4,583 products</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div id="picked" className="flex flex-col gap-7.5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl leading-8.5">
            Most Picked <br /> Quality Products
          </h2>
          <a
            href="catalog.html"
            className="p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold"
          >
            Explore All
          </a>
        </div>
        <div className="grid grid-cols-5 gap-7.5">
          <a href="details.html" className="product-card">
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/thumbnails/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">iMac Green Energy</p>
                  <p className="text-sm text-[#616369]">Desktops</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  Rp 24.000.000
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="product-card">
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/thumbnails/iphone15pro-digitalmat-gallery-3-202309-Photoroom 1.png"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">Smartwei Pro 18</p>
                  <p className="text-sm text-[#616369]">Phones</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  Rp 11.000.000
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="product-card">
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/banners/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">MacBook Pro X</p>
                  <p className="text-sm text-[#616369]">Laptops</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  Rp 24.000.000
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="product-card">
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/thumbnails/airpods-max-select-skyblue-202011-Photoroom 1.png"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">Tuli Nyaman</p>
                  <p className="text-sm text-[#616369]">Headsets</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  Rp 3.500.000.000
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="product-card">
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/thumbnails/imac24-digitalmat-gallery-1-202310-Photoroom 1.png"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">Warna iMac Jadi</p>
                  <p className="text-sm text-[#616369]">Desktops</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  Rp 89.000.000
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
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
          <a href="" className="logo-card">
            <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-7.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/logos/microsoft.svg"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
            </div>
          </a>
          <a href="" className="logo-card">
            <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-7.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/logos/apple.svg"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
            </div>
          </a>
          <a href="" className="logo-card">
            <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-7.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/logos/samsung.svg"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
            </div>
          </a>
          <a href="" className="logo-card">
            <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-7.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/logos/huawei.svg"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
            </div>
          </a>
          <a href="" className="logo-card">
            <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-7.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/logos/nokia.svg"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div id="new-release" className="flex flex-col gap-7.5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl leading-8.5">
            New Releases <br /> From Official Stores
          </h2>
          <a
            href="catalog.html"
            className="p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold"
          >
            Explore All
          </a>
        </div>
        <div className="grid grid-cols-5 gap-7.5">
          <a href="details.html" className="product-card">
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/thumbnails/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">iMac Green Energy</p>
                  <p className="text-sm text-[#616369]">Desktops</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  Rp 24.000.000
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="product-card">
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/thumbnails/iphone15pro-digitalmat-gallery-3-202309-Photoroom 1.png"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">Smartwei Pro 18</p>
                  <p className="text-sm text-[#616369]">Phones</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  Rp 11.000.000
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="product-card">
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/banners/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">MacBook Pro X</p>
                  <p className="text-sm text-[#616369]">Laptops</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  Rp 24.000.000
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="product-card">
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/thumbnails/airpods-max-select-skyblue-202011-Photoroom 1.png"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">Tuli Nyaman</p>
                  <p className="text-sm text-[#616369]">Headsets</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  Rp 3.500.000.000
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="product-card">
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/thumbnails/imac24-digitalmat-gallery-1-202310-Photoroom 1.png"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">Warna iMac Jadi</p>
                  <p className="text-sm text-[#616369]">Desktops</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  Rp 89.000.000
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="product-card">
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/thumbnails/imac24-digitalmat-gallery-1-202310-Photoroom 1.png"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">Warna iMac Jadi</p>
                  <p className="text-sm text-[#616369]">Desktops</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  Rp 89.000.000
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="product-card">
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/thumbnails/airpods-max-select-skyblue-202011-Photoroom 1.png"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">Tuli Nyaman</p>
                  <p className="text-sm text-[#616369]">Headsets</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  Rp 3.500.000.000
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="product-card">
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/thumbnails/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">iMac Green Energy</p>
                  <p className="text-sm text-[#616369]">Desktops</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  Rp 24.000.000
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="product-card">
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/thumbnails/iphone15pro-digitalmat-gallery-3-202309-Photoroom 1.png"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">Smartwei Pro 18</p>
                  <p className="text-sm text-[#616369]">Phones</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  Rp 11.000.000
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="product-card">
            <div className="bg-white flex flex-col gap-6 p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
              <div className="w-full h-22.5 flex shrink-0 items-center justify-center overflow-hidden">
                <img
                  src="assets/banners/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png"
                  className="w-full h-full object-contain"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold leading-5.5">MacBook Pro X</p>
                  <p className="text-sm text-[#616369]">Laptops</p>
                </div>
                <p className="font-semibold text-[#0D5CD7] leading-5.5">
                  Rp 24.000.000
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
