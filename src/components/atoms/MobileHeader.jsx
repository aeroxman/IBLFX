/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "What we do", href: "#" },
  { name: "Insights", href: "#" },
  { name: "Projetos", href: "#" },
  { name: "Preços", href: "#" },
  { name: "DEX", href: "#" },
];

const MobileHeader = () => {
  return (
    <>
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
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden z-50"
        >
          <div className="rounded-lg shadow-md bg-realPurple ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div />
              <div className="-mr-2">
                <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-realOrange">
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
                    className="block px-3 py-2 rounded-md text-base font-medium text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 px-5">
                <button
                  className="whitespace-nowrap inline-flex justify-center items-center bg-realOrange px-4 py-1 rounded-full
                  text-base font-medium text-white w-full h-10"
                >
                  <img
                    className="h-4 w-auto mr-2"
                    src={require("../../assets/rocket.png")}
                    alt=""
                  />
                  Launch APP
                </button>
              </div>
              <div className="mt-6 px-5 flex justify-center space-x-6">
                <p className="text-center text-base font-medium text-white">
                  Login
                </p>
                <p className="text-center text-base font-medium text-white">
                  Registro
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </>
  );
};

export default MobileHeader;
