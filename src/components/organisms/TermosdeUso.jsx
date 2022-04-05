import React from "react";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import TermosUso from "../molecules/TermosUso";

const TermosdeUso = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-t from-realPurple to-black">
      <Header />
      <div className="bg-gradient-to-br from-realPurple via-realPurple to-orange-900">
        <TermosUso />
        <Footer />
      </div>
    </div>
  );
};

export default TermosdeUso;
