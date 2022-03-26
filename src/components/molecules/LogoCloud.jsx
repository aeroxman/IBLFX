import React from "react";

const LogoCloud = () => {
  return (
    <>
      <div className="bg-black pb-8">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 shadow-3xl rounded-xl shadow-orange-500/50">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <p className="text-3xl tracking-tight font-bold text-realOrange italic">
              Nossos Parceiros
            </p>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 mt-4">
              <img
                className="h-10"
                src={require("../../assets/DERIBIT.png")}
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 mt-4">
              <img
                className="h-10"
                src={require("../../assets/bybitlogo.png")}
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1 mt-4">
              <img
                className="h-10"
                src={require("../../assets/greedylgo.png")}
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1 mt-4">
              <img
                className="h-8"
                src={require("../../assets/TRANFERO.png")}
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-tl from-purple-800 to-black py-8" />
    </>
  );
};

export default LogoCloud;
