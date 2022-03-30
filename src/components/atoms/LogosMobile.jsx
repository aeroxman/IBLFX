import React from "react";

const LogosMobile = () => {
  return (
    <>
      <p className="text-center text-5xl font-bold text-realOrange italic">
        Nossos Parceiros
      </p>
      <div className="flex-col justify-center">
        <img
          src={require("../../assets/DERIBIT.png")}
          class="w-60 h-16 mt-8 ml-8"
          alt="deribit"
        />
        <img
          src={require("../../assets/bybitlogo.png")}
          class="w-60 h-16 mt-8 ml-8"
          alt="bybitlogo"
        />
        <img
          src={require("../../assets/greedylgo.png")}
          class="w-60 h-16 mt-8 ml-8"
          alt="greedylogo"
        />
        <img
          src={require("../../assets/TRANFERO.png")}
          class="w-60 h-12 mt-8 ml-8"
          alt="tranfero"
        />
      </div>
    </>
  );
};

export default LogosMobile;
