import React from "react";

const Greedyfy = () => {
  return (
    <>
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 bg-black rounded-xl px-10 py-4 my-16 bg-opacity-50">
        <div className="mt-1 sm:mt-24 sm:ml-16">
          <img
            className=""
            src={require("../../assets/greedylogo.png")}
            alt="Customer profile user interface"
          />
        </div>
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <div>
            <div className="mt-6">
              <h2 className="text-4xl font-bold tracking-tight text-cyan-600 italic">
                Tenha acesso a todas as melhores cryptos em apenas uma!
              </h2>
              <p className="mt-4 text-lg text-cyan-600">
                Nossa plataforma parceira Greedyfi dá acesso a uma variedade de
                baskets com diferentes tokens. Uma incrível oportunidade para
                qualquer um. Cada uma das baskets tem um foco diferente, mas
                todas são compostas por tokens cuidadosamente selecionados para
                gerar o máximo de lucro.
              </p>
              <div className="mt-4">
                <button
                  type="submit"
                  className="whitespace-nowrap items-center bg-realOrange bg-origin-border h-10
              px-16 py-1 border border-transparent rounded-full text-xl text-white hover:bg-orange-800"
                >
                  Conheça
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Greedyfy;
