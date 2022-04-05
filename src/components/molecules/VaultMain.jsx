import React from "react";

const VaultMain = () => {
  return (
    <>
      <header class="relative flex justify-center h-screen hidden lg:flex -mb-28 lg:-mb-44">
        <div class="z-20 bg-black w-full h-2/3 bg-opacity-0 lg:h-full lg:pt-4">
          <div className="mx-20 rounded-xl lg:pt-60 2xl:mx-80 2xl:pt-96">
            <h1 className="text-5xl tracking-tight font-black text-white lg:text-7xl">
              <span className="text-realOrange">Vault</span>
            </h1>
            <p className="text-sm text-white font-bold italic lg:text-2xl lg:pt-16">
              Contamos com a parceria do maior player global na área
              <p> para assegurar nosssas transações contra qualquer tipo de</p>
              <p>fraude. Mais segurança pra você.</p>
            </p>
          </div>
        </div>
        <img
          className="absolute z-10 w-auto min-w-full max-w-none cover h-2/3 lg:h-full"
          src={require("../../assets/vault.png")}
          alt=""
        />
      </header>

      <header class="relative flex justify-center lg:hidden bg-black h-full w-full mb-5 pt-16">
        <div class="z-20 bg-black bg-opacity-0">
          <div className="mx-8 rounded-xl text-center">
            <h1 className="text-3xl tracking-tight font-black text-white pt-12 mb-4">
              <span className="text-realOrange">Vault</span>
            </h1>
            <p className="text-sm text-white italic pt-6">
              Contamos com a parceria do maior player global na área
              <p> para assegurar nosssas transações contra qualquer tipo de</p>
              <p>fraude. Mais segurança pra você.</p>
            </p>
          </div>
        </div>
        <img
          className="absolute z-10 max-w-none cover h-full"
          src={require("../../assets/vault.png")}
          alt=""
        />
      </header>
    </>
  );
};

export default VaultMain;
