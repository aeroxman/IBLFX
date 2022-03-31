/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "What we do", href: "#" },
  { name: "Insights", href: "#" },
  { name: "Projetos", href: "#" },
  { name: "Preços", href: "#" },
  { name: "DEX", href: "#" },
];

const MainHeader = () => {
  return (
    <>
      <div className="bg-black bg-opacity-60 pt-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 pb-4"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto"
                  src={require("../../assets/LGO.png")}
                  alt=""
                />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  className="whitespace-nowrap inline-flex items-center justify-center bg-realOrange
                    bg-origin-border px-4 py-2 border border-transparent rounded-full mr-16
                    text-base font-medium text-white"
                >
                  <img
                    className="h-4 w-auto mr-2"
                    src={require("../../assets/rocket.png")}
                    alt=""
                  />
                  APP
                </button>
                <Popover.Button
                  className="rounded-md p-2 inline-flex items-center justify-center text-realOrange 
                  hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                >
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
              text-base font-medium text-white hover:bg-orange-800"
            >
              <img
                className="h-4 w-auto mr-2"
                src={require("../../assets/rocket.png")}
                alt=""
              />
              Launch APP
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MainHeader;
