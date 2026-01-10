import ListCategory from "./list-category";
import ListProduct from "./list-product";
import ListBrand from "./list-brand";

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
        {/* <Suspense fallback={<CardCategorySkeleton />}> */}
        <ListCategory />
        {/* </Suspense> */}
      </div>

      <ListProduct
        title={
          <>
            Most Picked <br /> Quality Products
          </>
        }
      ></ListProduct>
      <ListBrand />
      <ListProduct
        title={
          <>
            New Releases <br /> From Official Stores
          </>
        }
      ></ListProduct>
    </section>
  );
}
