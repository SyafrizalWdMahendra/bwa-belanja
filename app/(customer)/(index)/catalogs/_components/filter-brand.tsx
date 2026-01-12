import React from "react";
import { getBrands } from "../../lib/actions";
import FilterCheckboxItem from "./filter-checkbox-item";

export default async function FilterBrand() {
  const brands = await getBrands();
  const brandList = Array.isArray(brands) ? brands : [];
  return (
    <div className="flex flex-col gap-[14px]">
      <p className="font-semibold leading-[22px]">Brands</p>
      {brandList.map((item) => (
        // <label
        //   key={`${item.name + item.id}`}
        //   className="font-semibold flex items-center gap-3"
        // >
        //   <input
        //     type="checkbox"
        //     name="brand"
        //     value="apple"
        //     className="w-6 h-6 flex shrink-0 appearance-none checked:border-[3px] checked:border-solid checked:border-white rounded-md checked:bg-[#0D5CD7] ring-1 ring-[#0D5CD7]"
        //   />
        //   <span>{item.name}</span>
        // </label>
        <FilterCheckboxItem
          type="brand"
          key={item.id + item.name}
          id={item.id.toString()}
          value={item.name}
        />
      ))}
    </div>
  );
}
