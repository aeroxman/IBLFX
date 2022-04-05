import React from "react";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import PoliticasPriv from "../molecules/PoliticasPriv";

const Politicas = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-t from-realPurple to-black">
      <Header />
      <div className="bg-gradient-to-br from-realPurple via-realPurple to-orange-900">
        <PoliticasPriv />
        <Footer />
      </div>
    </div>
  );
};

export default Politicas;
