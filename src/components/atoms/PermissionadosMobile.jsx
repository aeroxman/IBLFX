import React from "react";

const PermissionadosMobile = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-8 py-8">
        <img
          className=""
          src={require("../../assets/infograficoMobile.png")}
          alt="Customer profile user interface"
        />
        <div className="text-center">
          <p className="text-realOrange font-bold italic pb-4">
            Ativos não permissionados{" "}
            <p className="text-white">disponíveis no mercado digital</p>
          </p>
          <p className="text-realOrange">
            No modelo tradicional não permissionado, conhecido como uma
            blockchain pública, não há nenhuma restrição e a participação é
            livre, sem controle de um administrador. As transações acontecem
            livremente entre carteiras anônimas sem qualquer tipo de
            autenticação ou identificação.
          </p>
        </div>

        <div className="text-center pt-8">
          <p className="text-white font-bold text-3xl italic flex justify-center pb-4">
            IBLF
            <p className="text-realOrange">x</p>
          </p>
          <p className="text-realOrange">
            A IBLFx age como um filtro de autenticação que garante a
            autenticidade de todos os players, criando um layer de proteção para
            transações de ativos digitais não permissionados, de forma segura e
            confiável.
          </p>
        </div>

        <div className="text-center pt-8">
          <p className="text-white font-bold text-3xl italic flex justify-center pb-4">
            Trader IBLF
            <p className="text-realOrange">x</p>
          </p>
          <p className="text-realOrange">
            O cliente IBLFx pode aproveitar do potencial lucrativo dos ativos
            digitais de forma mais segura, rápida e lucrativa, sem riscos quanto
            ao outro lado da operação.
          </p>
        </div>
      </div>
    </>
  );
};

export default PermissionadosMobile;
