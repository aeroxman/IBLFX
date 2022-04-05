import React from "react";

const IblfxSection2 = () => {
  return (
    <>
      <div class="max-w-7xl mx-auto lg:flex">
        <div className="mx-10 text-center lg:text-left lg:mx-auto lg:max-w-md lg:text-left lg:flex lg:items-center">
          <div>
            <h1 className="text-realOrange text-5xl font-bold italic mb-6 lg:mb-0">
              Quanto mais tokens, mais vantagens!
            </h1>
            <p className="text-xl text-white lg:pt-8">
              Os stakers de Tokens IBLFx são divididos em diferentes categorias
              dependendo da quantidade de tokens. Cada categoria oferece alguma
              nova vantagem, além das vantagens da categoria anterior. Confira
              na tabela ao lado!
            </p>
          </div>
        </div>

        {/* Table right side */}
        <div className="mt-10 lg:m-0 lg:flex lg:justify-center">
          <div className="lg:py-10 lg:px-20">
            <img
              src={require("../../assets/quadro.png")}
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-12 lg:mt-0">
        <p className="text-white text-2xl font-bold italic">
          <span className="text-realOrange">Compre agora</span> os suas tokens e
          aproveite ainda mais do
          <p>universo descentralizado!</p>
        </p>

        <div className="my-8 justify-center flex">
          <button
            type="submit"
            className="whitespace-nowrap inline-flex items-center justify-center bg-realOrange
                        bg-origin-border px-12 py-1 border border-transparent rounded-full
                        text-base text-white hover:bg-orange-800"
          >
            Cadastre-se
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

export default IblfxSection2;
