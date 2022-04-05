import React from "react";

const PoolsMain = () => {
  return (
    <>
      <header class="relative flex justify-center h-screen hidden lg:flex">
        <div class="z-20 bg-black w-full h-2/3 bg-opacity-50 lg:h-full lg:pt-4">
          <div className="mx-20 rounded-xl lg:pt-80 2xl:mx-80 2xl:pt-96">
            <h1 className="text-5xl tracking-tight font-black text-white lg:mt-6 lg:text-7xl">
              <span className="text-realOrange">AMM Permissionada e Pools</span>
            </h1>
            <p className="text-sm text-white font-bold italic lg:text-2xl lg:pt-16">
              Explore as Finanças Descentralizadas com menores riscos.
              <p>
                Aproveite das operações não permissionadas com o filtro
                permissionado
              </p>
              <p>que a IBLFx fornece, reforçando a segurança das operações.</p>
            </p>
          </div>
        </div>
        <img
          className="absolute z-10 w-auto min-w-full max-w-none cover h-2/3 lg:h-full"
          src={require("../../assets/pools.png")}
          alt=""
        />
      </header>

      <header class="relative flex justify-center lg:hidden bg-black h-full w-full -mb-4 pt-20">
        <div class="z-20 bg-black bg-opacity-0">
          <div className="mx-8 rounded-xl text-center mt-8">
            <h1 className="text-3xl tracking-tight font-black text-white">
              <span className="text-realOrange">AMM Permissionada e Pools</span>
            </h1>
            <p className="text-sm text-white italic pt-8 mb-14">
              Explore as Finanças Descentralizadas com menores riscos.
              <p>
                Aproveite das operações não permissionadas com o filtro
                permissionado
              </p>
              <p>que a IBLFx fornece, reforçando a segurança das operações.</p>
            </p>
          </div>
        </div>
        <img
          className="absolute z-10 w-auto min-w-full max-w-none cover h-2/3"
          src={require("../../assets/pools.png")}
          alt=""
        />
      </header>
    </>
  );
};

export default PoolsMain;
