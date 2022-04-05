import React from "react";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import PoolsMain from "../molecules/PoolsMain";
import PoolsSection from "../molecules/PoolsSection";
import PoolsSection2 from "../molecules/PoolsSection2";

const Pools = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-t from-realPurple to-black">
      <Header />
      <PoolsMain />
      <div className="bg-gradient-to-t from-realPurple via-realPurple to-black py-12">
        <PoolsSection />
      </div>
      <div className="bg-gradient-to-br from-realPurple via-realPurple to-orange-900">
        <PoolsSection2 />
        <Footer />
      </div>
    </div>
  );
};

export default Pools;
