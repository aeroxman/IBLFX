/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../molecules/Header";
import Main from "../molecules/Main";
import LogoCloud from "../molecules/LogoCloud";
import Permissionados from "../molecules/Permissionados";
import Greedyfy from "../molecules/Greedyfy";
import WhatWeDo from "../molecules/WhatWeDo";
import Insights from "../molecules/Insights";
import Footer from "../molecules/Footer";

const LandingPage = () => {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <Main />
      <LogoCloud />
      <div className="bg-gradient-to-br from-realPurple via-realPurple to-orange-900">
        <Permissionados />
        <Greedyfy />
        <WhatWeDo />
        <Insights />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
