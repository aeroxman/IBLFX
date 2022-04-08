import React from "react";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import IblfxSection2 from "../molecules/IblfxSection2";
import LaunchpadMain from "../molecules/LaunchpadMain";
import LaunchpadSection from "../molecules/LaunchpadSection";

const Launchpad = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-t from-realPurple to-black">
      <Header />
      <LaunchpadMain />
      <div className="bg-gradient-to-t from-realPurple via-realPurple to-black py-12">
        <LaunchpadSection />
      </div>
      <div className="bg-gradient-to-br from-realPurple via-realPurple to-orange-900">
        <IblfxSection2 />
        <Footer />
      </div>
    </div>
  );
};

export default Launchpad;
