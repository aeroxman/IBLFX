import React from "react";

const LogosMobile = () => {
  return (
    <>
      <p className="text-center text-5xl font-bold text-realOrange italic">
        Nossos Parceiros
      </p>
      <div className="flex justify-center space-x-6">
        <div>
          <img
            src={require("../../assets/greedylgo.png")}
            class="w-32 h-10 mt-8"
            alt="greedylogo"
          />
          <img
            src={require("../../assets/TRANFERO.png")}
            class="w-32 h-10 mt-8"
            alt="tranfero"
          />
        </div>
        <div>
          <img
            src={require("../../assets/DERIBIT.png")}
            class="w-32 h-10 mt-8"
            alt="deribit"
          />
          <img
            src={require("../../assets/bybitlogo.png")}
            class="w-32 h-10 mt-8"
            alt="bybitlogo"
          />
        </div>
      </div>
    </>
  );
};

export default LogosMobile;
