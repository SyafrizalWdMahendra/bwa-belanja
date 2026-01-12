import React from "react";
import { getCategories } from "../../lib/actions";

export default async function FilterCategory() {
  const categories = await getCategories();
  const categoryList = Array.isArray(categories) ? categories : [];
  return (
    <div className="flex flex-col gap-[14px]">
      <p className="font-semibold leading-[22px]">Category</p>
      {categoryList.map((item) => (
        <label
          key={`${item.name + item.id}`}
          className="font-semibold flex items-center gap-3"
        >
          <input
            type="checkbox"
            name="brand"
            value={`${item.name + item.id}`}
            className="w-6 h-6 flex shrink-0 appearance-none checked:border-[3px] checked:border-solid checked:border-white rounded-md checked:bg-[#0D5CD7] ring-1 ring-[#0D5CD7]"
          />
          <span>{item.name}</span>
        </label>
      ))}
    </div>
  );
}
