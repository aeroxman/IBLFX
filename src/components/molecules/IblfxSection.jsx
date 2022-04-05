import React from "react";

const IblfxSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-8 mx-4 mb-10 lg:mb-10 lg:mx-0 lg:px-8 shadow-3xl rounded-xl shadow-orange-500/50">
        <p className="text-xl lg:text-5xl tracking-tight text-white italic text-center">
          Garanta vantagens dentro da plataforma
        </p>
      </div>

      <div className="hidden lg:block">
        <div className="mt-16 grid grid-cols-4 gap-x-8 gap-y-16">
          <div className="bg-black rounded-xl px-8 pt-8 bg-opacity-50 shadow-lg grid">
            <h3 className="text-xl text-realOrange text-center font-bold italic">
              Airdrops e Rewards de Novos Lançamentos
            </h3>
            <p className="my-10 text-base text-purple-200 font-medium">
              Todo projeto novo lançado em nossa plataforma precisa separar
              certa quantia de tokens para os detentores do token IBLFx.
            </p>
          </div>

          <div className="bg-black rounded-xl px-8 pt-8 bg-opacity-50 shadow-lg grid">
            <h3 className="text-xl text-realOrange text-center font-bold italic">
              Acesso a Private Placements
            </h3>
            <p className="my-10 text-base text-purple-200 font-medium">
              Primeiro contato de qualquer projeto com o mercado cripto.
            </p>
          </div>

          <div className="bg-black rounded-xl px-8 pt-8 bg-opacity-50 shadow-lg grid">
            <h3 className="text-xl text-realOrange text-center font-bold italic">
              Maior Participação em Private/Pre-Sales
            </h3>
            <p className="my-10 text-base text-purple-200 font-medium">
              Quanto mais tokens IBLFx maior é seu limite de compra de tokens de
              novos projetos.
            </p>
          </div>

          <div className="bg-black rounded-xl px-8 pt-8 bg-opacity-50 shadow-lg grid">
            <h3 className="text-xl text-realOrange text-center font-bold italic">
              Criação de Pools de Liquidez na DEX
            </h3>
            <p className="my-10 text-base text-purple-200 font-medium">
              Ser um provedor de liquidez em nossa Exchange Descentralizada.
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
            <div className="bg-black rounded-xl px-12 pt-8 bg-opacity-50 shadow-lg grid">
              <h3 className="text-xl text-realOrange text-center font-bold italic">
                Airdrops e Rewards de Novos Lançamentos
              </h3>
              <p className="my-10 text-base text-purple-200 font-medium">
                Todo projeto novo lançado em nossa plataforma precisa separar
                certa quantia de tokens para os detentores do token IBLFx.
              </p>
            </div>
          </div>

          <div
            className="carousel-item relative float-left w-full"
            data-bs-interval="15000"
          >
            <div className="bg-black rounded-xl px-12 pt-8 bg-opacity-50 shadow-lg grid">
              <h3 className="text-xl text-realOrange text-center font-bold italic">
                Acesso a Private Placements
              </h3>
              <p className="my-10 text-base text-purple-200 font-medium">
                Primeiro contato de qualquer projeto com o mercado cripto.
              </p>
            </div>
          </div>

          <div
            className="carousel-item relative float-left w-full"
            data-bs-interval="15000"
          >
            <div className="bg-black rounded-xl px-12 pt-8 bg-opacity-50 shadow-lg grid">
              <h3 className="text-xl text-realOrange text-center font-bold italic">
                Maior Participação em Private/Pre-Sales
              </h3>
              <p className="my-10 text-base text-purple-200 font-medium">
                Quanto mais tokens IBLFx maior é seu limite de compra de tokens
                de novos projetos.
              </p>
            </div>
          </div>

          <div
            className="carousel-item relative float-left w-full"
            data-bs-interval="15000"
          >
            <div className="bg-black rounded-xl px-12 pt-8 bg-opacity-50 shadow-lg grid">
              <h3 className="text-xl text-realOrange text-center font-bold italic">
                Criação de Pools de Liquidez na DEX
              </h3>
              <p className="my-10 text-base text-purple-200 font-medium">
                Ser um provedor de liquidez em nossa Exchange Descentralizada.
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
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
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
    </div>
  );
};

export default IblfxSection;
