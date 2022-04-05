import React from "react";

const PoolsSection2 = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto hidden lg:block">
        <div className="pt-16 grid grid-cols-2 gap-x-8 gap-y-16">
          <div className="bg-black rounded-xl px-8 pt-8 bg-opacity-50 shadow-lg grid">
            <h3 className="text-xl text-realOrange text-center font-bold italic">
              Pools de Liquidez
            </h3>
            <p className="my-10 text-base text-purple-200 font-medium">
              Os pools de liquidez são ferramentas essenciais para garantir o
              funcionamento do mercado DeFI e principalmente as DEX.
              <p>
                Elas garantem a liquidez das negociações através de operações
                baseada em Smart Contracts no modelo de AMM (automated Market
                Makers).
              </p>
              <p>
                Os provedores de liquidez das Pools (LP) rentabilizam da
                participação nas taxas cobradas em cada transação.
              </p>
            </p>
          </div>

          <div className="bg-black rounded-xl px-8 pt-8 bg-opacity-50 shadow-lg grid">
            <h3 className="text-xl text-realOrange text-center font-bold italic">
              AMM
            </h3>
            <p className="my-10 text-base text-purple-200 font-medium">
              Os market makers automatizados, (AMMs na sigla em inglês) são
              definidos como um protocolo subjacente que oferece poderes a todas
              as exchanges descentralizadas. Em síntese, são mecanismos de
              negociação automatizados, que eliminam a necessidade de exchanges
              centralizadas.
              <p>
                Um poderoso algoritmo que define os preçõs dos ativos de forma
                independente através de calculos avançados.
              </p>
            </p>
          </div>
        </div>
      </div>

      <div
        id="carouselExampleCaptions"
        className="carousel slide relative lg:hidden mx-8"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div
            className="carousel-item active relative float-left w-full"
            data-bs-interval="15000"
          >
            <div className="bg-black rounded-xl px-8 pt-8 bg-opacity-50 shadow-lg grid">
              <h3 className="text-xl text-realOrange text-center font-bold italic">
                Pools de Liquidez
              </h3>
              <p className="my-10 mx-4 text-base text-purple-200 font-medium">
                Os pools de liquidez são ferramentas essenciais para garantir o
                funcionamento do mercado DeFI e principalmente as DEX.
                <p>
                  Elas garantem a liquidez das negociações através de operações
                  baseada em Smart Contracts no modelo de AMM (automated Market
                  Makers).
                </p>
                <p>
                  Os provedores de liquidez das Pools (LP) rentabilizam da
                  participação nas taxas cobradas em cada transação.
                </p>
              </p>
            </div>
          </div>

          <div
            className="carousel-item relative float-left w-full"
            data-bs-interval="15000"
          >
            <div className="bg-black rounded-xl px-8 pt-8 bg-opacity-50 shadow-lg grid">
              <h3 className="text-xl text-realOrange text-center font-bold italic">
                AMM
              </h3>
              <p className="my-10 mx-4 text-base text-purple-200 font-medium">
                Os market makers automatizados, (AMMs na sigla em inglês) são
                definidos como um protocolo subjacente que oferece poderes a
                todas as exchanges descentralizadas. Em síntese, são mecanismos
                de negociação automatizados, que eliminam a necessidade de
                exchanges centralizadas.
                <p>
                  Um poderoso algoritmo que define os preçõs dos ativos de forma
                  independente através de calculos avançados.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-indicators right-0 bottom-0 left-0 flex justify-center p-0 mb-4 mt-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="mx-4 text-center mt-12">
        <p className="text-white text-2xl font-bold italic">
          <span className="text-realOrange">Acesse agora</span> o aplicativo
          aproveite as vantagens do
          <p>mundo descentralizado!</p>
        </p>

        <div className="my-8 justify-center flex">
          <button
            type="submit"
            className="whitespace-nowrap inline-flex items-center justify-center bg-realOrange
                        bg-origin-border px-12 py-1 border border-transparent rounded-full
                        text-base text-white hover:bg-orange-800"
          >
            Acesse
          </button>
        </div>
        <p className="text-realOrange text-2xl font-bold italic">
          Se ainda tiver dúvidas você pode encontrar mais
          <p>respostas na sessão de Insights.</p>
        </p>
      </div>
    </>
  );
};

export default PoolsSection2;
