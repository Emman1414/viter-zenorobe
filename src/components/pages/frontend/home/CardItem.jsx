import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgPath } from "@/components/helpers/functions-general";
import { Link } from "react-router-dom";

const CardItem = ({ item, key }) => {
  const title = item.title;

  return (
    <Link to={`/product/${title.toLowerCase().replaceAll(" ", "-")}`}>
      <div className="new-arrival-card px-4 " key={key}>
        {/* image */}
        <div className="mb-4 relative group">
          <p className="absolute top-3 left-5 bg-white font-bold text-[10px] px-4 py-1 border rounded-full text-xs z-20 hover:opacity-0">
            New
          </p>
          {/* HOVERING */}
          <img
            src={`${imgPath}/${item.img1}`}
            alt=""
            className="transition-opacity group-hover:opacity-1"
          />
          <img
            src={`${imgPath}/${item.img2}`}
            alt=""
            className="transition-opacity absolute left-0 top-0 group-hover:opacity-0"
          />
        </div>
        {/* details */}
        <div className="text-center space-y-4">
          <h5>{item.title}</h5>
          <h6>${item.price} AUD</h6>
          <ul className="flex gap-5 justify-center">
            <li className="tooltip" data-tooltip="in stock">
              29
            </li>
            <li className="tooltip" data-tooltip="in stock">
              30
            </li>
            <li className="tooltip" data-tooltip="in stock">
              31
            </li>
            <li className="tooltip" data-tooltip="in stock">
              32
            </li>
            <li className="tooltip" data-tooltip="out of stock">
              33
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
