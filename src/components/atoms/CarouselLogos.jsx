import React from "react";
import Slider from "react-slick";

function SampleNextArrow() {
  return <div />;
}

const CarouselLogos = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  return (
    <div className="grid grid-cols-3 gap-8">
      <p className="text-5xl px-4 tracking-tight font-bold text-realOrange italic ml-16">
        Nossos Parceiros
      </p>
      <div className="col-span-2 -ml-20">
        <Slider {...settings}>
          <div>
            <img
              src={require("../../assets/DERIBIT.png")}
              class="block w-36 h-10 mt-8 mr-14"
              alt="deribit"
            />
          </div>
          <div>
            <img
              src={require("../../assets/bybitlogo.png")}
              class="block w-36 h-10 mt-8 mr-14"
              alt="bybitlogo"
            />
          </div>
          <div>
            <img
              src={require("../../assets/greedylgo.png")}
              class="block w-36 h-10 mt-8 mr-14"
              alt="greedylogo"
            />
          </div>
          <div>
            <img
              src={require("../../assets/TRANFERO.png")}
              class="block w-36 h-7 mt-9"
              alt="tranfero"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselLogos;
