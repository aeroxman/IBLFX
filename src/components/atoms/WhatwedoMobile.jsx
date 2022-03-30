import React from "react";

const WhatwedoMobile = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-16">
      <h2 className="text-6xl font-bold text-white text-center tracking-tight italic pb-8">
        What we do
      </h2>
      <div
        id="carouselExampleControls"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <div className="bg-black rounded-xl px-14 py-4 bg-opacity-50 shadow-lg grid">
              <h3 className="text-xl text-realOrange text-center font-bold text-white">
                Lending & Borrowing
              </h3>
              <p className="mb-24 mt-4 text-base text-purple-200 font-medium">
                A Ledn, plataforma parceira da IBLF
                <span className="text-realOrange">x</span>, disponibiliza
                diversos produtos de empréstimo destinados a BTC e USDC.
                Empreste e desfrute das possibilidades de receber renda passiva
                ou aproveite o dinheiro da forma que preferir!
              </p>
              <div className="text-center">
                <button
                  type="submit"
                  className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white hover:bg-orange-800"
                >
                  Conheça
                </button>
              </div>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <div className="bg-black rounded-xl px-14 py-4 bg-opacity-50 shadow-lg grid">
              <h3 className="text-xl text-realOrange text-center font-bold text-white">
                OTC (Over the Counter)
              </h3>
              <p className="mb-20 mt-4 text-base text-purple-200 font-medium">
                A IBLF<span className="text-realOrange">x</span> possui vasta
                experiência com operações balcão, além de uma robusta estrutura
                para otimizar operações no mercado OTC. As operações ocorrem
                dentro do ambiente seguro IBLFx, sendo a principal alternativa
                para grandes transações fora dos livros de câmbio.
              </p>
              <div className="text-center">
                <button
                  type="submit"
                  className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white hover:bg-orange-800"
                >
                  Conheça
                </button>
              </div>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <div className="bg-black rounded-xl px-14 py-4 bg-opacity-50 shadow-lg grid">
              <h3 className="text-2xl text-realOrange text-center font-bold text-white">
                DeFi Basket
              </h3>
              <p className="my-10 text-base text-purple-200 font-medium">
                Tenha exposição a diversas criptos com apenas uma! A plataforma
                do <span className="text-cyan-600">Greedyfi</span> fornece
                acesso a diferentes cestas de tokens, proporcionando uma
                oportunidade fácil e diversificada para qualquer pessoa. Cada
                cesta de tokens tem uma finalidade e exposição diferente, com
                base numa análise aprofundada de cada token.
              </p>
              <div className="text-center">
                <button
                  type="submit"
                  className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white hover:bg-orange-800"
                >
                  Conheça
                </button>
              </div>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <div className="bg-black rounded-xl px-14 py-4 bg-opacity-50 shadow-lg grid">
              <h3 className="text-xl text-realOrange text-center font-bold text-white">
                Permissioned AMM & Pools
              </h3>
              <p className="mb-9 mt-14 text-base text-purple-200 font-medium">
                Explore o universo das Finanças Descentralizadas de forma segura
                e confiável! Aqui o preço dos ativos é definido pelo
                <span className="text-realOrange">
                  "Automated Market Maker"
                </span>
                , um algoritmo blockchain que exclui a necessidade de terceiros
                para transacionar de forma simples e rápida.
              </p>
              <div className="text-center">
                <button
                  type="submit"
                  className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white hover:bg-orange-800"
                >
                  Conheça
                </button>
              </div>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <div className="bg-black rounded-xl px-14 py-4 bg-opacity-50 shadow-lg grid">
              <h3 className="text-2xl text-realOrange text-center font-bold text-white">
                LaunchPad
              </h3>
              <p className="my-4 text-base text-purple-200 font-medium">
                O Launchpad IBLF<span className="text-realOrange">x</span> é o
                ambiente ideal para quem busca atuar como Market Maker,
                comprando tokens antes de serem disponibilizados no mercado.
                Nele, são lançados projetos devidamente diligenciados. Uma ótima
                oportunidade para diversificação de portfólio. O token nativo
                $IBLFX ainda garante inúmeras vantagens no ecossistema.
              </p>
              <div className="text-center">
                <button
                  type="submit"
                  className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white hover:bg-orange-800"
                >
                  Conheça
                </button>
              </div>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <div className="bg-black rounded-xl px-14 py-4 bg-opacity-50 shadow-lg grid">
              <h3 className="text-2xl text-realOrange text-center font-bold text-white">
                Vault
              </h3>
              <p className="my-4 text-base text-purple-200 font-medium">
                A IBLF<span className="text-realOrange">x</span> armazena todos
                os ativos no sistema de custódia mais utilizado pelas grandes
                instituições ao redor do Mundo, garantindo o maior nível de
                segurança para a comunidade. Além disso, oferecemos o serviço de
                Sucessão de Ativos para aqueles que desejam proteger seus ativos
                em situações inesperadas.
              </p>
              <div className="text-center">
                <button
                  type="submit"
                  className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white hover:bg-orange-800"
                >
                  Conheça
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 
          hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 
          hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default WhatwedoMobile;
