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
    <div className="relative overflow-hidden bg-realPurple">
      <Header />
      <Main />
      <LogoCloud />
      <Permissionados />
      <div className="bg-gradient-to-br from-realPurple via-realPurple to-orange-900">
        <Greedyfy />
        <WhatWeDo />
      </div>
      <div className="bg-gradient-to-tr from-realPurple via-realPurple to-orange-900">
        <Insights />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
