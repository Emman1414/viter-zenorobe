import React from "react";
import Slider from "react-slick";
import { imgPath } from "../../../helpers/functions-general";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardItem from "./CardItem";

const WinterCollection = () => {
  const winterCollectionArray = [
    {
      img1: "na-card-a1.jpg",
      img2: "na-card-a2.jpg",
      title: "1Lorem ipsum dolor sit amet",
      price: "499.99",
    },
    {
      img1: "na-card-a2.jpg",
      img2: "na-card-a1.jpg",
      title: "2Lorem ipsum dolor sit amet",
      price: "149.99",
    },
    {
      img1: "na-card-a1.jpg",
      img2: "na-card-a2.jpg",
      title: "3Lorem ipsum dolor sit amet",
      price: "199.99",
    },
    {
      img1: "na-card-a2.jpg",
      img2: "na-card-a1.jpg",
      title: "4Lorem ipsum dolor sit amet",
      price: "1499.99",
    },
    {
      img1: "na-card-a1.jpg",
      img2: "na-card-a2.jpg",
      title: "666Lorem ipsum dolor sit amet",
      price: "1499423.99",
    },
  ];

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
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="new-arrival py-10 !text-black ">
      <div className="container">
        <Slider {...settings}>
          {winterCollectionArray.map((item, key) => (
            <CardItem item={item} key={key} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WinterCollection;
