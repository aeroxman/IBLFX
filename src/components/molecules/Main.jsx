import React from "react";

const Main = () => {
  return (
    <>
      <div className="pt-10 bg-black sm:pt-16 lg:pt-20 lg:pb-14 lg:overflow-hidden">
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
                <img
                  src={require("../../assets/quadro.png")}
                  alt="Customer profile user interface"
                />
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
