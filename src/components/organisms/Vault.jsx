import React from "react";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import VaultMain from "../molecules/VaultMain";

const Vault = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-t from-realPurple to-black">
      <Header />
      <VaultMain />
      <div className="bg-gradient-to-br from-realPurple via-realPurple to-orange-900">
        <div className="text-center max-w-xl mx-10 pt-8 lg:mx-auto mt-12 lg:pt-20 space-y-8">
          <p className="text-white font-bold italic">
            O IBFL<span className="text-realOrange">x</span> também resolve
            outro problema enorme para grandes players e UHW.
            <p className="text-lg lg:text-2xl">
              A necessidade de um{" "}
              <span className="text-realOrange">Cofre de Sucessão.</span>
            </p>
          </p>
          <p className="text-white font-bold italic">
            <span className="text-realOrange">
              Onde e como armazenar ativos
            </span>{" "}
            e como garantir a governança para que, em casos insólitos, seja
            necessário transferir estes ativos?
          </p>
          <p className="text-white text-lg font-bold italic bg-black bg-opacity-50 rounded-xl p-8">
            No formato de negócio da IBLF
            <span className="text-realOrange">x</span>, o processo de custódia
            de tecnologia e de sucessão são fornecidos, permitindo a
            transferência de ativos para outras entidades ou gerações do atual
            titular dos ativos.
          </p>

          <div className="my-8 justify-center flex">
            <button
              type="submit"
              className="whitespace-nowrap inline-flex items-center justify-center bg-realOrange
                        bg-origin-border px-12 py-1 border border-transparent rounded-full
                        text-base text-white hover:bg-orange-800"
            >
              Proteja-se
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Vault;
