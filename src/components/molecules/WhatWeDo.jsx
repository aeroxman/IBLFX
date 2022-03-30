import React from "react";
import WhatwedoMobile from "../atoms/WhatwedoMobile";
import WhatwedoWeb from "../atoms/WhatwedoWeb";

const WhatWeDo = () => {
  return (
    <>
      <div className="hidden lg:block">
        <WhatwedoWeb />
      </div>
      <div className="lg:hidden">
        <WhatwedoMobile />
      </div>
      <div className="shadow-3xl rounded-xl shadow-orange-500/50 pb-8 max-w-7xl mx-auto py-8 px-4 hidden lg:block lg:px-8">
        <p className="text-4xl tracking-tight text-white text-center">
          <span className="tracking-tight font-bold text-realOrange italic">
            LAUNCHPAD
          </span>{" "}
          com projetos rigorosamente selecionados
        </p>
      </div>
    </>
  );
};

export default WhatWeDo;
