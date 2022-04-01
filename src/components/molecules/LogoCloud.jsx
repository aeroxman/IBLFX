import React from "react";
import CarouselLogos from "../atoms/CarouselLogos";
import LogosMobile from "../atoms/LogosMobile";

const LogoCloud = () => {
  return (
    <>
      <div className="bg-black pb-8 px-8 lg:px-0">
        <div className="max-w-7xl mx-auto py-8 px-4 lg:px-8 lg:shadow-3xl rounded-xl shadow-orange-500/50">
          <div className="hidden lg:block">
            <CarouselLogos />
          </div>
          <div className="lg:hidden">
            <LogosMobile />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoCloud;
