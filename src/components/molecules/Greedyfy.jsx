import React from "react";

const Greedyfy = () => {
  return (
    <div
      className="bg-black bg-opacity-50 rounded-xl px-6 py-10 my-8 mx-8
        lg:my-16 lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2"
    >
      <div className="mt-1 flex justify-center lg:hidden lg:mt-28 lg:ml-16">
        <img
          className="w-52 lg:w-96"
          src={require("../../assets/greedylogo.png")}
          alt="Customer profile user interface"
        />
      </div>
      <div className="mt-1 lg:mt-28 lg:ml-16 hidden lg:block">
        <img
          className="w-52 lg:w-96"
          src={require("../../assets/greedylogo.png")}
          alt="Customer profile user interface"
        />
      </div>
      <div className="max-w-xl mx-auto lg:max-w-none lg:col-start-2">
        <h2
          className="text-2xl font-bold tracking-tight text-cyan-600 italic text-center mt-6
               lg:text-4xl lg:text-left lg:mt-0"
        >
          Tenha acesso a todas as melhores cryptos em apenas uma!
        </h2>
        <p className="mt-4 text-lg text-cyan-600 text-center lg:space-y-2 lg:text-left lg:mt-6">
          <p>Nossa plataforma parceira Greedyfi dá acesso a uma variedade de</p>
          <p>
            baskets com diferentes tokens. Uma incrível oportunidade para
            qualquer
          </p>
          <p>um. Cada uma das baskets tem um foco diferente, mas todas são</p>
          <p>compostas por tokens cuidadosamente selecionados para gerar o</p>
          <p>máximo de lucro.</p>
        </p>
        <div className="mt-8 text-center lg:text-left">
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
  );
};

export default Greedyfy;
