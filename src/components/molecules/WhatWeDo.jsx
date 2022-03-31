import React from "react";
import WhatwedoMobile from "../atoms/WhatwedoMobile";
import WhatwedoWeb from "../atoms/WhatwedoWeb";

const WhatWeDo = () => {
  return (
    <>
      <div className="hidden lg:block">
        <WhatwedoWeb />
      </div>
      <div className="lg:hidden">
        <WhatwedoMobile />
      </div>
    </>
  );
};

export default WhatWeDo;
