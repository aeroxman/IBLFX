import React from "react";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import IblfxMain from "../molecules/IblfxMain";
import IblfxSection from "../molecules/IblfxSection";
import IblfxSection2 from "../molecules/IblfxSection2";

const IblfToken = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-t from-realPurple to-black">
      <Header />
      <IblfxMain />
      <div className="bg-gradient-to-t from-realPurple via-realPurple to-black py-12">
        <IblfxSection />
      </div>
      <div className="bg-gradient-to-br from-realPurple via-realPurple to-orange-900">
        <IblfxSection2 />
        <Footer />
      </div>
    </div>
  );
};

export default IblfToken;
