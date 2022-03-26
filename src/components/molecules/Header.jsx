/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Popover } from "@headlessui/react";
import HeaderLogin from "../atoms/HeaderLogin";
import MainHeader from "../atoms/MainHeader";
import MobileHeader from "../atoms/MobileHeader";

const Header = () => {
  return (
    <>
      <Popover as="header" className="relative">
        <div>
          <HeaderLogin />
          <MainHeader />
        </div>
        <MobileHeader />
      </Popover>
    </>
  );
};

export default Header;
