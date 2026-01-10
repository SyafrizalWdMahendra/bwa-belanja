import NavHeader from "../_components/nav-header";
import FilterBrand from "./_components/filter-brand";
import FilterCategory from "./_components/filter-category";
import FilterLocation from "./_components/filter-location";
import FilterPrice from "./_components/filter-price";
import FilterStock from "./_components/filter-stock";
import ProductListing from "./_components/product-listing";
import SearchBar from "./_components/search-bar";

export default function CatalogPage() {
  return (
    <div className="bg-white text-black">
      <header className="bg-[#EFF3FA] pt-[30px] h-[351px] -mb-[181px]">
        <NavHeader />
      </header>
      <SearchBar />
      <div
        id="catalog"
        className="container max-w-282.5 mx-auto flex gap-[30px] mt-[50px] pb-[100px]"
      >
        <form className="flex flex-1 flex-col bg-white p-[30px] gap-5 h-fit border border-[#E5E5E5] rounded-[30px]">
          <h2 className="font-bold text-2xl leading-[34px]">Filters</h2>

          <FilterPrice />

          <hr className="border-[#E5E5E5]" />

          <FilterStock />

          <hr className="border-[#E5E5E5]" />

          <FilterBrand />

          <hr className="border-[#E5E5E5]" />

          <FilterLocation />

          <hr className="border-[#E5E5E5]" />

          <FilterCategory />
        </form>

        <div className="w-[780px] flex flex-col bg-white p-[30px] gap-[30px] h-fit border border-[#E5E5E5] rounded-[30px]">
          <h2 className="font-bold text-2xl leading-[34px]">Products</h2>
          <ProductListing />
        </div>
      </div>
    </div>
  );
}
