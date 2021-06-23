import React, { useState } from "react";
//import Data from "./data.json";
import { Store, StoreContext } from "./context";
import Productlist from "./components/innercomponents/Productlist";
import HeroSection from "./components/HeroSection";
import MainShop from "./components/MainShop";
import Footer from "./components/Footer";
import "./scss/Main.scss";

const App = () => {
  return (
    <StoreContext.Provider value={Store}>
      <div className="body-container">
        <HeroSection />
        <Productlist />
        <MainShop />
        <Footer />
      </div>
    </StoreContext.Provider>
  );
};

export default App;
