import React from "react";
import SliderItem from "./SliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    waitForAnimate: true,
  };
  return (
    <section className="banner-slider">
      <Slider {...settings}>
        <SliderItem
          img="slider-1.jpg"
          header="GRAPHICS TEE CAPSULE"
          subheader="THE NEW DROP"
        />
        <SliderItem
          img="slider-2.jpg"
          header="THE QB LOUNGE TEE"
          subheader="RESTOCKED WITH NEW COLOURS"
        />
        <SliderItem
          img="slider-3.jpg"
          header="STICKED FOOTBALL TRACKPANT"
          subheader="LIMITED EDITION ONLINE EXCLUSIVE"
        />
      </Slider>
    </section>
  );
};

export default BannerSlider;
