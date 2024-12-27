import React from "react";
import { clothes } from "../clothes-data";
import { getClothByCategory } from "./function";

const DashboardCard = ({ item, resultCloth }) => {
  const clothItem = getClothByCategory(item.category_aid, resultCloth);

  const activeCloth = clothItem
    ?.filter((item) => item.clothes_is_active == 1)
    .reduce((prev, cur) => prev + 1, 0);

  const inactiveCloth = clothItem
    ?.filter((item) => item.clothes_is_active == 0)
    .reduce((prev, cur) => prev + 1, 0);

  return (
    <>
      <div className="card bg-secondary p-4 rounded-md border border-line">
        <small>{item.category_title}</small>
        <h2 className="text-4xl mt-1 mb-2">
          {clothItem?.length} item{clothItem?.length > 1 ? "s" : ""}
        </h2>
        <ul className="flex gap-5 items-center">
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-success block"></span>
            {activeCloth} Active
          </li>
          <li className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-gray-500 block"></span>
            {inactiveCloth} Inactive
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashboardCard;
