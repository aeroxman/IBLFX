import React from "react";

const Main = () => {
  return (
    <>
      {/* <video loop autoPlay>
        <source src="../../assets/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* texts left side */}
      <div className="pt-10 bg-black sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl tracking-tight font-bold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-8xl">
                  <span className="block bg-clip-text text-transparent bg-realOrange">
                    Permissioned
                  </span>
                  <span className="pb-3 block sm:pb-5">Digital assets</span>
                </h1>
                <p className="mt-4 text-4xl tracking-tight font-bold text-white sm:mt-1 sm:text-3xl xl:text-4xl">
                  Uma comunidade feita por e para{" "}
                  <span className="text-realOrange">Market Makers</span>
                </p>
                <p className="text-base text-white sm:text-xl lg:text-lg xl:text-xl">
                  Aproveite de todos os beneficios dos ativos digitais de forma
                  segura e controlada, com alto ganho e menos riscos.
                </p>
                <div className="mt-10 sm:mt-5">
                  <div className="sm:flex">
                    <div className="mt-3 sm:mt-0">
                      <button
                        type="submit"
                        className="whitespace-nowrap inline-flex items-center justify-center bg-realOrange
                    bg-origin-border px-12 py-1 border border-transparent rounded-full
                    text-base text-white hover:bg-orange-800"
                      >
                        Cadastre-se
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table right side */}
            <div className="mt-12 -mb-16 sm:-mb-0 lg:m-0 lg:relative">
              <div className="lg:py-10 lg:px-20">
                <h1 className="flex justify-center mt-4 text-4xl tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl">
                  <span className="font-bold">
                    IBLF
                    <span className="bg-clip-text text-transparent bg-realOrange font-bold">
                      x
                    </span>
                  </span>
                  <span className="pb-3 block sm:pb-5 sm:pl-3 italic">
                    Tokens
                  </span>
                </h1>
                <div className="bg-black rounded-xl px-10 py-4 bg-opacity-50 border border-realOrange shadow-3xl rounded-xl shadow-orange-500/50">
                  <p className="text-base text-white sm:text-xl lg:text-lg xl:text-xl">
                    Os tokens IBLFx garantem diversos beneficios para os seus
                    stakers. De AirDrops a possibilidade de criar sua propria
                    Pool.
                  </p>
                  <p className="mt-4 text-4xl tracking-tight font-bold text-white sm:mt-2 sm:text-3xl xl:text-xl">
                    Quanto mais tokens,{" "}
                    <span className="text-realOrange">mais vantagens!</span>
                  </p>
                  <div className="text-realOrange text-center pt-4">
                    <div className="flex border-b-2 border-realOrange">
                      <img
                        className="w-16 p-2 border-r-2 border-realOrange"
                        src={require("../../assets/table1.png")}
                        alt=""
                      />
                      <p className="px-6 py-2 border-r-2 border-realOrange">
                        <span className="block">300.000</span> Staked
                      </p>
                      <p className="pl-16 pt-5">Airdrops</p>
                    </div>
                    <div className="flex border-b-2 border-realOrange">
                      <img
                        className="w-16 p-2 border-r-2 border-realOrange"
                        src={require("../../assets/table2.png")}
                        alt=""
                      />
                      <p className="px-6 py-6 border-r-2 border-realOrange">
                        <span className="block text-sm">1.000.000</span> Staked
                      </p>
                      <p className="pl-8 pt-2">
                        <span className="block">Airdrops</span>{" "}
                        <span className="block">+</span> Access to Private
                      </p>
                    </div>
                    <div className="flex">
                      <img
                        className="w-16 p-2 border-r-2 border-realOrange"
                        src={require("../../assets/table3.png")}
                        alt=""
                      />
                      <p className="px-5 py-10 border-r-2 border-realOrange">
                        <span className="block text-sm">+1.000.000</span> Staked
                      </p>
                      <p className="pl-4 py-2">
                        <span className="block">Airdrops</span>{" "}
                        <span className="block">+</span> Access to Private
                        <span className="block">+</span> Create Liquidity Pools
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:flex sm:justify-center mt-10 sm:mt-5">
                  <button
                    type="submit"
                    className="whitespace-nowrap inline-flex items-center justify-center bg-realOrange
                        bg-origin-border px-12 py-1 border border-transparent rounded-full
                        text-base text-white hover:bg-orange-800"
                  >
                    Compre Agora!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
