import React from "react";
import ListCategory from "./list-category";
import ListProduct from "./list-product";
import ListBrand from "./list-brand";

export default function LandingPageSection() {
  return (
    <section
      id="content"
      className="container max-w-282.5 mx-auto flex flex-col gap-12.5 pt-12.5 pb-25"
    >
      <ListCategory />
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
