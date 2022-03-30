/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import FooterMobile from "../atoms/FooterMobile";
import FooterWeb from "../atoms/FooterWeb";

const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="hidden lg:block">
        <FooterWeb />
      </div>
      <div className="lg:hidden">
        <FooterMobile />
      </div>
      <div className="flex justify-center items-center bg-realBlue py-2 w-screen">
        <p className="text-sm text-gray-400 lg:ml-60 lg:text-base">
          &copy; 2022 | <span className="text-white font-semibold">IBLFX</span>{" "}
          - Todos os direitos reservados.
        </p>
        <img
          className="h-4 w-auto lg:ml-56"
          src={require("../../assets/LOGO-BDD.png")}
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;
