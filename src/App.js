import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Store, StoreContext } from "./context";
import Beauty from "./components/innercomponents/Beauty";
import Car from "./components/innercomponents/Car";
import Kids from "./components/innercomponents/Kids";
import Technologie from "./components/innercomponents/Technologie";
import Wellness from "./components/innercomponents/Wellness";

import HeroSection from "./components/HeroSection";
import MainShop from "./components/MainShop";
import Footer from "./components/Footer";
import "./scss/Main.scss";

const App = () => {
  return (
    <StoreContext.Provider value={Store}>
      <div className="body-container">
        <Router>
          <HeroSection />

          <Switch>
            <Route path="/" exact>
              <MainShop />
            </Route>
            <Route path="/kids" exact>
              <Kids />
            </Route>
            <Route path="/car" exact>
              <Car />
            </Route>
            <Route path="/beauty" exact>
              <Beauty />
            </Route>
            <Route path="/technology" exact>
              <Technologie />
            </Route>
            <Route path="/wellness" exact>
              <Wellness />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </div>
    </StoreContext.Provider>
  );
};

export default App;
