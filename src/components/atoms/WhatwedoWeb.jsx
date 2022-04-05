import React from "react";
import { Link } from "react-router-dom";

const WhatwedoWeb = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 lg:pb-16 lg:max-w-7xl">
      <h2 className="text-8xl font-bold text-white text-center tracking-tight italic">
        What we do
      </h2>
      <div className="mt-16 grid grid-cols-3 gap-x-8 gap-y-16">
        <div className="bg-black rounded-xl px-8 py-8 bg-opacity-50 shadow-lg grid">
          <h3 className="text-xl text-realOrange text-center font-bold">
            Lending & Borrowing
          </h3>
          <p className="mb-28 mt-12 text-base text-purple-200 font-medium">
            A Ledn, plataforma parceira da IBLF
            <span className="text-realOrange">x</span>, disponibiliza diversos
            produtos de empréstimo destinados a BTC e USDC. Empreste e desfrute
            das possibilidades de receber renda passiva ou aproveite o dinheiro
            da forma que preferir!
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

        <div className="bg-black rounded-xl px-8 py-8 bg-opacity-50 shadow-lg grid">
          <h3 className="text-xl text-realOrange text-center font-bold">
            OTC (Over the Counter)
          </h3>
          <p className="mb-20 mt-10 text-base text-purple-200 font-medium">
            A IBLF<span className="text-realOrange">x</span> possui vasta
            experiência com operações balcão, além de uma robusta estrutura para
            otimizar operações no mercado OTC. As operações ocorrem dentro do
            ambiente seguro IBLFx, sendo a principal alternativa para grandes
            transações fora dos livros de câmbio.
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

        <div className="bg-black rounded-xl px-8 py-8 bg-opacity-50 shadow-lg grid">
          <h3 className="text-xl text-realOrange text-center font-bold">
            DeFi Basket
          </h3>
          <p className="my-10 text-base text-purple-200 font-medium">
            Tenha exposição a diversas criptos com apenas uma! A plataforma do{" "}
            <span className="text-cyan-600">Greedyfi</span> fornece acesso a
            diferentes cestas de tokens, proporcionando uma oportunidade fácil e
            diversificada para qualquer pessoa. Cada cesta de tokens tem uma
            finalidade e exposição diferente, com base numa análise aprofundada
            de cada token.
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

      <div className="grid mt-16 grid-cols-3 gap-x-8 gap-y-16">
        <div className="bg-black rounded-xl px-8 py-8 bg-opacity-50 shadow-lg grid">
          <h3 className="text-xl text-realOrange text-center font-bold">
            Permissioned AMM & Pools
          </h3>
          <p className="my-9 text-base text-purple-200 font-medium">
            Explore o universo das Finanças Descentralizadas de forma segura e
            confiável! Aqui o preço dos ativos é definido pelo
            <span className="text-realOrange">"Automated Market Maker"</span>,
            um algoritmo blockchain que exclui a necessidade de terceiros para
            transacionar de forma simples e rápida.
          </p>
          <div className="text-center">
            <button
              type="submit"
              className="mt-12 whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white hover:bg-orange-800"
            >
              Conheça
            </button>
          </div>
        </div>

        <div className="bg-black rounded-xl px-8 py-8 bg-opacity-50 shadow-lg grid">
          <h3 className="text-xl text-realOrange text-center font-bold">
            LaunchPad
          </h3>
          <p className="my-8 pb-4 text-base text-purple-200 font-medium">
            O Launchpad IBLF<span className="text-realOrange">x</span> é o
            ambiente ideal para quem busca atuar como Market Maker, comprando
            tokens antes de serem disponibilizados no mercado. Nele, são
            lançados projetos devidamente diligenciados. Uma ótima oportunidade
            para diversificação de portfólio. O token nativo $IBLFX ainda
            garante inúmeras vantagens no ecossistema.
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

        <div className="bg-black rounded-xl px-8 py-8 bg-opacity-50 shadow-lg grid">
          <h3 className="text-xl text-realOrange text-center font-bold">
            Vault
          </h3>
          <p className="my-8 text-base text-purple-200 font-medium">
            A IBLF<span className="text-realOrange">x</span> armazena todos os
            ativos no sistema de custódia mais utilizado pelas grandes
            instituições ao redor do Mundo, garantindo o maior nível de
            segurança para a comunidade. Além disso, oferecemos o serviço de
            Sucessão de Ativos para aqueles que desejam proteger seus ativos em
            situações inesperadas.
          </p>
          <div className="text-center">
            <button
              type="submit"
              className="mt-10 whitespace-nowrap items-center bg-realOrange bg-origin-border 
              px-12 py-1 border border-transparent rounded-full text-base text-white hover:bg-orange-800"
            >
              <Link to="vault">Conheça</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-3xl rounded-xl shadow-orange-500/50 pb-8 max-w-7xl mx-auto py-8 px-4 hidden lg:block lg:px-8 lg:mt-20">
        <p className="text-4xl tracking-tight text-white text-center">
          <span className="tracking-tight font-bold text-realOrange italic">
            LAUNCHPAD
          </span>{" "}
          com projetos rigorosamente selecionados
        </p>
      </div>
    </div>
  );
};

export default WhatwedoWeb;
