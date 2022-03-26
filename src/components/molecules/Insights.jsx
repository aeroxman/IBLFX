import React from "react";

const Insights = () => {
  return (
    <>
      <div className="relative bg-gradient-to-l from-purple-800 to-realPurple py-16">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2">
          <div className="mt-1 sm:mt-24">
            <p
              className="text-white text-4xl font-bold pl-60 pr-4 py-14
                  bg-gradient-to-l from-realOrange to-realPurple bg-opacity-50"
            >
              Mergulhe no mundo Crypto com a IBLFx
            </p>
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
      </div>
    </>
  );
};

export default Insights;
