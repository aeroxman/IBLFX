import React from "react";

const Insights = () => {
  return (
    <>
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 py-16">
        <div className="mt-1 sm:mt-24">
          <img
            className=""
            src={require("../../assets/fundofade.png")}
            alt="Customer profile user interface"
          />
          <div className="-mt-4">
            <p className="text-white text-5xl font-bold absolute -mt-64 ml-52">
              Mergulhe no
            </p>
            <p className="text-white text-5xl font-bold absolute -mt-52 ml-52">
              mundo Crypto
            </p>
            <p className="text-white text-5xl font-bold absolute -mt-40 ml-52">
              com a IBLFx
            </p>
          </div>
        </div>
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-16 lg:col-start-2">
          <div>
            <div className="mt-6">
              <h2 className="text-9xl text-center font-bold tracking-tight text-white italic">
                Insights
              </h2>
              <p className="mt-8 text-lg text-white">
                O IBLF<span className="text-realOrange">X</span> Insights é o
                nosso catálogo de vídeos e e-books totalmente gratuitos para
                ajudar você a entrar de vez no mundo dos Crypto Ativos,
                Blockchain e Finanças. Desde materiais educativos até
                publicações que apresentam impactos nos modelos regulatórios,
                normativos e contábeis.
              </p>
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white hover:bg-orange-800"
                >
                  Aproveite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
