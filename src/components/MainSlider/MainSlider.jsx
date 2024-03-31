import React from "react";
import Slider from "react-slick";
import "./MainSlider.css";
import slider1 from "../../assets/images/slider-image-1.jpeg";
import slider2 from "../../assets/images/slider-image-2.jpeg";
import slider3 from "../../assets/images/slider-image-3.jpeg";

export default function MainSlider() {
  var settings = {
    // dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="main_slider">
      <Slider {...settings} className="main-slider">
        <div className="img">
          <img src={slider1} />
        </div>
        <div className="img">
          <img src={slider2} />
        </div>
        <div className="img">
          <img src={slider3} />
        </div>
      </Slider>
    </div>
  );
}
