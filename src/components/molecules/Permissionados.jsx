import React from "react";

const Permissionados = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <img
          className=""
          src={require("../../assets/info.png")}
          alt="Customer profile user interface"
        />
      </div>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 shadow-3xl rounded-xl shadow-orange-500/50">
        <p className="text-5xl tracking-tight text-white italic text-center">
          Primeira{" "}
          <span className="tracking-tight font-bold text-realOrange italic">
            operação permissionada
          </span>{" "}
          da LATAM
        </p>
      </div>
    </>
  );
};

export default Permissionados;
