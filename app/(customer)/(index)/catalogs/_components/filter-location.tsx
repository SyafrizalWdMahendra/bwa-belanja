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
