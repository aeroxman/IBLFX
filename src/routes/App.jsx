import * as React from "react";
import { Routes, Route } from "react-router-dom";
import IblfToken from "../components/organisms/iblfToken";
import LandingPage from "../components/organisms/LandingPage";
import Launchpad from "../components/organisms/Launchpad";
import Politicas from "../components/organisms/Politicas";
import Pools from "../components/organisms/Pools";
import TermosdeUso from "../components/organisms/TermosdeUso";
import Vault from "../components/organisms/Vault";

const App = () => {
  return (
    <div className="font-link">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="iblfxToken" element={<IblfToken />} />
        <Route path="politicas" element={<Politicas />} />
        <Route path="termos-de-uso" element={<TermosdeUso />} />
        <Route path="vault" element={<Vault />} />
        <Route path="pools" element={<Pools />} />
        <Route path="launchpad" element={<Launchpad />} />
      </Routes>
    </div>
  );
};

export default App;
