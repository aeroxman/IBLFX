/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  PencilAltIcon,
  GlobeAltIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

const HeaderLogin = () => {
  return (
    <>
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
    </>
  );
};

export default HeaderLogin;
