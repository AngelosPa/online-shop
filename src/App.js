import React, { useState } from "react";
//import Data from "./data.json";

import HeroSection from "./components/HeroSection";
import MainShop from "./components/MainShop";
import Footer from "./components/Footer";
import "./scss/Main.scss";
//the hooks
const App = () => {
  return (
    <div className="body-container">
      <HeroSection />
      <MainShop />
      <Footer />
    </div>
  );
};

export default App;
