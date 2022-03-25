/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  PencilAltIcon,
  GlobeAltIcon,
  WifiIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

const footerNavigation = {
  navigation: [
    { name: "Home", href: "#" },
    { name: "What we do", href: "#" },
    { name: "Insights", href: "#" },
    { name: "Prices", href: "#" },
    { name: "DEX", href: "#" },
  ],
  products: [
    { name: "OTC", href: "#" },
    { name: "DeFi Basket", href: "#" },
    { name: "AMM & Pools", href: "#" },
    { name: "Tokenization", href: "#" },
    { name: "Vault", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "Youtube",
      href: "#",
      icon: (props) => (
        <img
          className="h-6 w-auto"
          src={require("../../Assets/youtube.png")}
          alt=""
        />
      ),
    },
  ],
};

const navigation = [
  { name: "Home", href: "#" },
  { name: "What we do", href: "#" },
  { name: "Insights", href: "#" },
  { name: "Projetos", href: "#" },
  { name: "Preços", href: "#" },
  { name: "DEX", href: "#" },
];

const LandingPage = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          {/* login header */}
          <div className="flex justify-between items-center bg-realBlue px-4 py-2 sm:px-6 md:justify-start md:space-x-10 lg:px-32">
            <div className="flex justify-start lg:w-0 lg:flex-1" />
            <nav className="hidden md:flex space-x-5">
              <a
                href="#"
                className="flex text-sm text-white hover:text-gray-300 pr-5 border-r-2 border-white"
              >
                <UserCircleIcon className="w-5 mr-2 text-realOrange" />
                Login
              </a>
              <a
                href="#"
                className="flex text-sm text-white hover:text-gray-300 pr-5 border-r-2 border-white"
              >
                <PencilAltIcon className="w-5 mr-2 text-realOrange" />
                Registro
              </a>
              <a
                href="#"
                className="flex text-sm text-white hover:text-gray-300 pr-5"
              >
                <GlobeAltIcon className="w-5 mr-2 text-realOrange" />
                PT
              </a>
            </nav>
          </div>

          {/* main header */}
          <div className="bg-black pt-6">
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto"
                      src={require("../../Assets/LGO.png")}
                      alt=""
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button
                      className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 
                    hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                    >
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <div className="hidden space-x-8 md:flex md:mr-5">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-white hover:text-gray-300 border-r-2 border-white pr-5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <button
                  className="ml-10 whitespace-nowrap inline-flex items-center justify-center bg-realOrange
                  bg-origin-border px-4 py-1 border border-transparent rounded-full
                  text-base font-medium text-white"
                >
                  <WifiIcon className="w-4 mr-4" />
                  Launch APP
                </button>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center 
                    text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 px-5">
                    <a
                      href="#"
                      className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600
                       text-white font-medium hover:from-teal-600 hover:to-cyan-700"
                    >
                      Start free trial
                    </a>
                  </div>
                  <div className="mt-6 px-5">
                    <p className="text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <a href="#" className="text-gray-900 hover:underline">
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main>
          {/* texts left side */}
          <div className="pt-10 bg-black sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <h1 className="mt-4 text-4xl tracking-tight font-bold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-8xl">
                      <span className="block bg-clip-text text-transparent bg-realOrange">
                        Permissioned
                      </span>
                      <span className="pb-3 block sm:pb-5">Digital Assets</span>
                    </h1>
                    <p className="mt-4 text-4xl tracking-tight font-bold text-white sm:mt-1 sm:text-3xl xl:text-4xl">
                      Uma comunidade feita por e para{" "}
                      <span className="text-realOrange">Market Makers</span>
                    </p>
                    <p className="text-base text-white sm:text-xl lg:text-lg xl:text-xl">
                      Aproveite de todos os beneficios dos ativos digitais de
                      forma segura e controlada, com alto ganho e menos riscos.
                    </p>
                    <div className="mt-10 sm:mt-5">
                      <div className="sm:flex">
                        <div className="mt-3 sm:mt-0">
                          <button
                            type="submit"
                            className="whitespace-nowrap inline-flex items-center justify-center bg-realOrange
                              bg-origin-border px-12 py-1 border border-transparent rounded-full
                              text-base text-white"
                          >
                            Cadastre-se
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table right side */}
                <div className="mt-12 -mb-16 sm:-mb-0 lg:m-0 lg:relative">
                  <div className="lg:py-10 lg:px-20">
                    <h1 className="flex justify-center mt-4 text-4xl tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl">
                      <span className="font-bold">
                        IBLF
                        <span className="bg-clip-text text-transparent bg-realOrange font-bold">
                          x
                        </span>
                      </span>
                      <span className="pb-3 block sm:pb-5 sm:pl-3 italic">
                        Tokens
                      </span>
                    </h1>
                    <div className="bg-black rounded-xl px-10 py-4 bg-opacity-50 border border-realOrange shadow-md shadow-orange-500/50">
                      <p className="text-base text-white sm:text-xl lg:text-lg xl:text-xl">
                        Os tokens IBLFx garantem diversos beneficios para os
                        seus stakers. De AirDrops a possibilidade de criar sua
                        propria Pool.
                      </p>
                      <p className="mt-4 text-4xl tracking-tight font-bold text-white sm:mt-2 sm:text-3xl xl:text-xl">
                        Quanto mais tokens,{" "}
                        <span className="text-realOrange">mais vantagens!</span>
                      </p>
                      <div className="text-realOrange text-center pt-4">
                        <div className="flex border-b-2 border-realOrange">
                          <WifiIcon className="w-16 p-2 border-r-2 border-realOrange" />
                          <p className="px-6 py-2 border-r-2 border-realOrange">
                            <span className="block">300.000</span> Staked
                          </p>
                          <p className="pl-16 pt-5">Airdrops</p>
                        </div>
                        <div className="flex border-b-2 border-realOrange">
                          <WifiIcon className="w-16 p-2 border-r-2 border-realOrange" />
                          <p className="px-6 py-6 border-r-2 border-realOrange">
                            <span className="block text-sm">1.000.000</span>{" "}
                            Staked
                          </p>
                          <p className="pl-8 pt-2">
                            <span className="block">Airdrops</span>{" "}
                            <span className="block">+</span> Access to Private
                          </p>
                        </div>
                        <div className="flex">
                          <WifiIcon className="w-16 p-2 border-r-2 border-realOrange" />
                          <p className="px-5 py-10 border-r-2 border-realOrange">
                            <span className="block text-sm">+1.000.000</span>{" "}
                            Staked
                          </p>
                          <p className="pl-4 py-2">
                            <span className="block">Airdrops</span>{" "}
                            <span className="block">+</span> Access to Private
                            <span className="block">+</span> Create Liquidity
                            Pools
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="sm:flex sm:justify-center mt-10 sm:mt-5">
                      <button
                        type="submit"
                        className="whitespace-nowrap inline-flex items-center justify-center bg-realOrange
                                  bg-origin-border px-12 py-1 border border-transparent rounded-full
                                  text-base text-white"
                      >
                        Compre Agora!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Cloud */}
          <div className="bg-black pb-16">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 shadow-3xl rounded-xl shadow-orange-500/50">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <p className="text-3xl tracking-tight font-bold text-realOrange italic">
                  Nossos Parceiros
                </p>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 mt-4">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1  mt-4">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1  mt-4">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1  mt-4">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-t from-purple-800 to-black py-8" />

          {/* img permissionados */}
          <div className="bg-gradient-to-bl from-purple-800 to-realPurple py-16">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 shadow-xl rounded-xl shadow-orange-500/50">
              <p className="text-3xl tracking-tight font-bold text-realOrange italic">
                img permissionados
              </p>
            </div>
          </div>

          {/* text latam */}
          <div className="bg-gradient-to-l from-purple-800 to-realPurple py-16">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 shadow-3xl rounded-xl shadow-orange-500/50">
              <p className="text-3xl tracking-tight text-white italic text-center">
                Primeira{" "}
                <span className="text-3xl tracking-tight font-bold text-realOrange italic">
                  operação permissionada
                </span>{" "}
                da LATAM
              </p>
            </div>
          </div>

          {/* greedyfi Sections */}
          <div className="relative bg-gradient-to-l from-purple-800 to-realPurple py-16">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 bg-black rounded-xl px-10 py-4 bg-opacity-50">
              <div className="mt-1 sm:mt-24 lg:col-start-1">
                <img
                  className=""
                  src={require("../../Assets/greedylogo.png")}
                  alt="Customer profile user interface"
                />
              </div>
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-cyan-600 italic">
                      Tenha acesso a todas as melhores cryptos em apenas uma!
                    </h2>
                    <p className="mt-4 text-lg text-cyan-600">
                      Nossa plataforma parceira Greedyfi dá acesso a uma
                      variedade de baskets com diferentes tokens. Uma incrível
                      oportunidade para qualquer um. Cada uma das baskets tem um
                      foco diferente, mas todas são compostas por tokens
                      cuidadosamente selecionados para gerar o máximo de lucro.
                    </p>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white"
                      >
                        Conheça
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* what we do Section */}
          <div className="bg-gradient-to-l from-purple-800 to-realPurple">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
              <h2 className="text-7xl font-extrabold text-white text-center tracking-tight">
                What we do
              </h2>
              <div className="grid mt-16 grid-cols-3 gap-x-8 gap-y-16">
                <div className="bg-black rounded-xl px-10 py-4 bg-opacity-50 shadow-lg grid">
                  <h3 className="text-xl text-realOrange text-center font-medium text-white">
                    Lending & Borrowing
                  </h3>
                  <p className="mb-24 mt-12 text-base text-purple-200 font-medium">
                    A Ledn, plataforma parceira da IBLF
                    <span className="text-realOrange">x</span>, disponibiliza
                    diversos produtos de empréstimo destinados a BTC e USDC.
                    Empreste e desfrute das possibilidades de receber renda
                    passiva ou aproveite o dinheiro da forma que preferir!
                  </p>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white"
                    >
                      Conheça
                    </button>
                  </div>
                </div>

                <div className="bg-black rounded-xl px-10 py-4 bg-opacity-50 shadow-lg grid">
                  <h3 className="text-xl text-realOrange text-center font-medium text-white">
                    OTC (Over the Counter)
                  </h3>
                  <p className="mb-20 mt-10 text-base text-purple-200 font-medium">
                    A IBLF<span className="text-realOrange">x</span> possui
                    vasta experiência com operações balcão, além de uma robusta
                    estrutura para otimizar operações no mercado OTC. As
                    operações ocorrem dentro do ambiente seguro IBLFx, sendo a
                    principal alternativa para grandes transações fora dos
                    livros de câmbio.
                  </p>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white"
                    >
                      Conheça
                    </button>
                  </div>
                </div>

                <div className="bg-black rounded-xl px-10 py-4 bg-opacity-50 shadow-lg grid">
                  <h3 className="text-xl text-realOrange text-center font-medium text-white">
                    DeFi Basket
                  </h3>
                  <p className="my-10 text-base text-purple-200 font-medium">
                    Tenha exposição a diversas criptos com apenas uma! A
                    plataforma do{" "}
                    <span className="text-cyan-600">Greedyfi</span> fornece
                    acesso a diferentes cestas de tokens, proporcionando uma
                    oportunidade fácil e diversificada para qualquer pessoa.
                    Cada cesta de tokens tem uma finalidade e exposição
                    diferente, com base numa análise aprofundada de cada token.
                  </p>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white"
                    >
                      Conheça
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid mt-16 grid-cols-3 gap-x-8 gap-y-16">
                <div className="bg-black rounded-xl px-10 py-4 bg-opacity-50 shadow-lg grid">
                  <h3 className="text-xl text-realOrange text-center font-medium text-white">
                    Permissioned AMM & Pools
                  </h3>
                  <p className="mb-9 mt-12 text-base text-purple-200 font-medium">
                    Explore o universo das Finanças Descentralizadas de forma
                    segura e confiável! Aqui o preço dos ativos é definido pelo
                    <span className="text-realOrange">
                      "Automated Market Maker"
                    </span>
                    , um algoritmo blockchain que exclui a necessidade de
                    terceiros para transacionar de forma simples e rápida.
                  </p>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white"
                    >
                      Conheça
                    </button>
                  </div>
                </div>

                <div className="bg-black rounded-xl px-10 py-4 bg-opacity-50 shadow-lg grid">
                  <h3 className="text-xl text-realOrange text-center font-medium text-white">
                    LaunchPad
                  </h3>
                  <p className="my-4 text-base text-purple-200 font-medium">
                    O Launchpad IBLF<span className="text-realOrange">x</span> é
                    o ambiente ideal para quem busca atuar como Market Maker,
                    comprando tokens antes de serem disponibilizados no mercado.
                    Nele, são lançados projetos devidamente diligenciados. Uma
                    ótima oportunidade para diversificação de portfólio. O token
                    nativo $IBLFX ainda garante inúmeras vantagens no
                    ecossistema.
                  </p>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white"
                    >
                      Conheça
                    </button>
                  </div>
                </div>

                <div className="bg-black rounded-xl px-10 py-4 bg-opacity-50 shadow-lg grid">
                  <h3 className="text-xl text-realOrange text-center font-medium text-white">
                    Vault
                  </h3>
                  <p className="my-4 text-base text-purple-200 font-medium">
                    A IBLF<span className="text-realOrange">x</span> armazena
                    todos os ativos no sistema de custódia mais utilizado pelas
                    grandes instituições ao redor do Mundo, garantindo o maior
                    nível de segurança para a comunidade. Além disso, oferecemos
                    o serviço de Sucessão de Ativos para aqueles que desejam
                    proteger seus ativos em situações inesperadas.
                  </p>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white"
                    >
                      Conheça
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-l from-purple-800 to-realPurple pb-8">
              <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 shadow-3xl rounded-xl shadow-orange-500/50">
                <p className="text-3xl tracking-tight text-white text-center">
                  <span className="text-3xl tracking-tight font-bold text-realOrange italic">
                    LAUNCHPAD
                  </span>{" "}
                  com projetos rigorosamente selecionados
                </p>
              </div>
            </div>
          </div>

          {/* greedyfi Sections */}
          <div className="relative bg-gradient-to-l from-purple-800 to-realPurple py-16">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2">
              <div className="mt-1 sm:mt-24">
                <p
                  className="text-white text-4xl font-bold pl-60 pr-4 py-14
                  bg-gradient-to-l from-realOrange to-realPurple bg-opacity-50"
                >
                  Mergulhe no mundo Crypto com a IBLFx
                </p>
              </div>
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-16 lg:col-start-2">
                <div>
                  <div className="mt-6">
                    <h2 className="text-9xl text-center font-bold tracking-tight text-white italic">
                      Insights
                    </h2>
                    <p className="mt-8 text-lg text-white">
                      O IBLF<span className="text-realOrange">X</span> Insights
                      é o nosso catálogo de vídeos e e-books totalmente
                      gratuitos para ajudar você a entrar de vez no mundo dos
                      Crypto Ativos, Blockchain e Finanças. Desde materiais
                      educativos até publicações que apresentam impactos nos
                      modelos regulatórios, normativos e contábeis.
                    </p>
                    <div className="mt-8 text-center">
                      <button
                        type="submit"
                        className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-12 py-1 border border-transparent rounded-full text-base text-white"
                      >
                        Aproveite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* footer section */}
        <footer
          className="bg-gradient-to-l from-purple-800 to-realPurple"
          aria-labelledby="footer-heading"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="space-y-6">
                  <img
                    className="h-8 w-auto"
                    src={require("../../Assets/LGO.png")}
                    alt=""
                  />
                  <p className="text-gray-300 pr-56">
                    Operations in an easy and affordable way with a focus on the
                    decentralized finance market.
                  </p>
                  <div className="flex space-x-6 md:order-2">
                    {footerNavigation.social.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-realOrange hover:text-orange-800"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                      Navigation
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.navigation.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-300 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                      Products
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.products.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-300 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-12 xl:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Newsletter
                </h3>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      required
                      className="bg-indigo-900 rounded-full shadow-sm py-2 px-4 text-base text-gray-200
                      placeholder-gray-400 focus:outline-none focus:placeholder-gray-400"
                      placeholder="Nome"
                    />
                    <input
                      type="email"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      required
                      className="bg-indigo-900 rounded-full shadow-sm py-2 px-4 text-base text-gray-200
                      placeholder-gray-400 focus:outline-none focus:placeholder-gray-400"
                      placeholder="E-mail"
                    />
                    <div className="mt-3 rounded-md sm:mt-0 sm:flex-shrink-0">
                      <button
                        type="submit"
                        className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                        px-20 py-1 border border-transparent rounded-full text-base text-white"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-realBlue py-2 w-screen">
            <p className="text-base text-gray-400 ml-60">
              &copy; 2022 | IBLFX - Todos os direitos reservados.
            </p>
            <img
              className="h-4 w-auto ml-56"
              src={require("../../Assets/LOGO-BDD.png")}
              alt=""
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
