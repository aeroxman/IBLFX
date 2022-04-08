import React from "react";

const LaunchpadMain = () => {
  return (
    <>
      <header class="relative flex justify-center h-screen hidden lg:flex">
        <div class="z-20 bg-black w-full h-2/3 bg-opacity-50 lg:h-full lg:pt-4">
          <div className="mx-20 rounded-xl lg:pt-80 2xl:mx-80 2xl:pt-96">
            <h1 className="text-5xl tracking-tight font-black text-white lg:mt-6 lg:text-7xl">
              <span className="text-realOrange">Launchpad</span>
            </h1>
            <p className="text-sm text-white font-bold italic lg:text-2xl lg:pt-16">
              Tenha acesso aos melhores lançamentos do mercado com
              <p>
                {" "}
                prioridade. Todos os projetos lançados em nosso launchpad säo
              </p>
              <p>rigorosamente avaliados antes de entrarem na plataforma.</p>
            </p>
          </div>
        </div>
        <img
          className="absolute z-10 w-auto min-w-full max-w-none cover h-2/3 lg:h-full"
          src={require("../../assets/iblfxToken.png")}
          alt=""
        />
      </header>

      <header class="relative flex justify-center lg:hidden bg-black h-full w-full mb-4 pt-24">
        <div class="z-20 bg-black bg-opacity-0">
          <div className="mx-8 rounded-xl text-center">
            <h1 className="text-5xl tracking-tight font-black text-white">
              <span className="text-realOrange">Launchpad</span>
            </h1>
            <p className="text-sm text-white italic pt-10">
              Tenha acesso aos melhores lançamentos do mercado com
              <p>
                {" "}
                prioridade. Todos os projetos lançados em nosso launchpad säo
              </p>
              <p>rigorosamente avaliados antes de entrarem na plataforma.</p>
            </p>
          </div>
        </div>
        <img
          className="absolute z-10 w-auto min-w-full max-w-none cover h-2/3"
          src={require("../../assets/iblfxToken.png")}
          alt=""
        />
      </header>
    </>
  );
};

export default LaunchpadMain;
