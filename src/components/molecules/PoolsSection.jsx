import React from "react";

const PoolsSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-8 mx-4 mb-10 lg:mb-10 lg:mx-0 lg:px-8 shadow-3xl rounded-xl shadow-orange-500/50">
        <p className="lg:text-xl lg:text-5xl tracking-tight text-white italic text-center">
          Uma plataforma completa para operações{" "}
          <span className="text-realOrange">DeFi</span>
        </p>
      </div>
      <p className="text-center text-white mx-4 lg:mx-20">
        A IBLFx conta com um pacote completo de soluções DeFi, que oferece mais
        agilidade e possibilidades de rentabilização, com toda a segurança para
        os envolvidos. Entenda as diferenças entre o sistema tradicional e o
        DeFi:
      </p>
      <div className="lg:flex lg:space-x-6 justify-center text-center pt-8 max-w-7xl mx-8 lg:mx-auto">
        <div className="space-y-3">
          <p className="text-realOrange font-bold text-xl mb-4">
            Sistema Centralizado
          </p>
          <p className="text-realOrange border border-realOrange p-2 rounded">
            Administrado por indivíduos ou empresas
          </p>
          <p className="text-realOrange border border-realOrange p-2 rounded">
            Livros de controle. O valor de um ativo é suscetivel à arbitragem e
            manipulação dos Market Makers
          </p>
          <p className="text-realOrange border border-realOrange p-2 rounded">
            As transações e compra de ativos sao intermediadas pela corretora.
          </p>
          <p className="text-realOrange border border-realOrange p-2 rounded">
            Não permite geração de renda passiva.
          </p>
          <p className="text-realOrange border border-realOrange p-2 rounded">
            Taxas mais altas
          </p>
          <p className="text-realOrange border border-realOrange p-2 rounded">
            A operadora é o agente de custódia
          </p>
          <p className="text-realOrange border border-realOrange p-2 rounded">
            Ambiente controlado. Não permite transações entre operadoras.
          </p>
        </div>

        <div className="space-y-3 pt-10 lg:pt-0">
          <p className="text-realOrange font-bold text-xl mb-4">
            Sistema Descentralizado (DeFi)
          </p>
          <p className="text-realOrange border border-realOrange p-2 rounded">
            Administrado por protocolos inteligentes, código aberto e
            transparência
          </p>
          <p className="text-realOrange border border-realOrange p-2 rounded">
            Market Maker automatizado, ou seja, o valor dos ativos é definido
            pelas transações, evitando manipulações
          </p>
          <p className="text-realOrange border border-realOrange p-2 rounded">
            Negociações P2C (Peer to Contract), sem intermediários envolvidos.
          </p>
          <p className="text-realOrange border border-realOrange p-2 rounded">
            Permite geração de renda passiva.
          </p>
          <p className="text-realOrange border border-realOrange p-2 rounded">
            Taxas mais baixas
          </p>
          <p className="text-realOrange border border-realOrange p-2 rounded">
            O usuário é o agente de custódia
          </p>
          <p className="text-realOrange border border-realOrange p-2 rounded">
            Ambiente de transação livre. Acesso livre a todas as pools no
            Blockchain
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoolsSection;
