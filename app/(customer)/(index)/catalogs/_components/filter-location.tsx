import React from "react";
import { getLocations } from "../../lib/actions";
import FilterCheckboxItem from "./filter-checkbox-item";

export default async function FilterLocation() {
  const locations = await getLocations();
  const locationList = Array.isArray(locations) ? locations : [];
  return (
    <div className="flex flex-col gap-[14px]">
      <p className="font-semibold leading-[22px]">Location</p>
      {locationList.map((item) => (
        // <label
        //   key={`${item.name + item.id}`}
        //   className="font-semibold flex items-center gap-3"
        // >
        //   <input
        //     type="checkbox"
        //     name="loc"
        //     value={`${item.name + item.id}`}
        //     className="w-6 h-6 flex shrink-0 appearance-none checked:border-[3px] checked:border-solid checked:border-white rounded-md checked:bg-[#0D5CD7] ring-1 ring-[#0D5CD7]"
        //   />
        //   <span>{item.name}</span>
        // </label>
        <FilterCheckboxItem
          type="location"
          key={item.id + item.name}
          id={item.id.toString()}
          value={item.name}
        />
      ))}
    </div>
  );
}
