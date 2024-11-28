import { imgPath } from "@/components/helpers/functions-general";
import React from "react";

const SliderItem = ({ img, header, subheader }) => {
  return (
    <div className="slider-item relative">
      <img
        src={`${imgPath}/${img}`}
        alt=""
        className="h-screen w-full object-cover"
      />
      <div className="absolute bottom-14 left-10 md:left-20 text-white">
        <h6>{subheader}</h6>
        <h2>{header}</h2>
      </div>
    </div>
  );
};

export default SliderItem;
