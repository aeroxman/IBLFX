/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";

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
          className="h-10 w-10"
          src={require("../../assets/youtube.png")}
          alt=""
        />
      ),
    },
  ],
};

const FooterMobile = () => {
  return (
    <div className="px-6 pb-10">
      <div className="my-12">
        <h3 className="text-xl text-center font-semibold text-gray-200 tracking-wider uppercase">
          Newsletter
        </h3>
        <form className="mt-4 text-center">
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              className="bg-indigo-900 rounded-full shadow-sm py-2 px-4 text-base text-gray-200
                    placeholder-gray-400 w-full"
              placeholder="Nome"
            />
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="bg-indigo-900 rounded-full shadow-sm py-2 px-4 text-base text-gray-200
                    placeholder-gray-400 w-full"
              placeholder="E-mail"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="whitespace-nowrap items-center bg-realOrange bg-origin-border 
                py-1 w-full border border-transparent rounded-full text-base text-white"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="text-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-200 tracking-wider uppercase">
            Navigation
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {footerNavigation.navigation.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-lg text-gray-300">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-200 tracking-wider uppercase">
            Products
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {footerNavigation.products.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-lg text-gray-300">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <div className="flex justify-center">
            <img
              className="h-10"
              src={require("../../assets/LGO.png")}
              alt=""
            />
          </div>
          <p className="text-gray-300 text-lg px-10 py-6">
            Operations in an easy and affordable way with a focus on the
            decentralized finance market.
          </p>
          <div className="flex justify-center space-x-6 md:order-2">
            {footerNavigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-realOrange hover:text-orange-800"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-10 w-10" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
