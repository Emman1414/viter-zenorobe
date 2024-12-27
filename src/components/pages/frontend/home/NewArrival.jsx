import React from "react";
import Slider from "react-slick";
import { imgPath } from "../../../helpers/functions-general";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardItem from "./CardItem";
import { newArrivalArray } from "./new-arrival-data";
import useQueryData from "@/components/custom-hook/useQueryData";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const [isHover, setIsHover] = React.useState(false);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const {
    Fetching,
    Loading,
    status,
    data: collection,
  } = useQueryData(`/v2/clothes`, "get", "clothes");

  return (
    <section className="new-arrival py-10 !text-black ">
      <div className="container">
        <Slider {...settings}>
          {collection?.count > 0 &&
            collection.data.map((item, key) => (
                <CardItem item={item} key={key} />
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewArrival;
