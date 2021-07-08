import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Store, StoreContext } from "./context";
import Beauty from "./components/innercomponents/Beauty";
import Car from "./components/innercomponents/Car";
import Kids from "./components/innercomponents/Kids";
import Technologie from "./components/innercomponents/Technologie";
import Wellness from "./components/innercomponents/Wellness";
import HamburgerMenu from "./components/HamburgerMenu";
import HeroSection from "./components/HeroSection";
import MainShop from "./components/MainShop";
import Footer from "./components/Footer";
import "./scss/Main.scss";
// useeffect SOS-> array of dependences[] trigger every state , if its something on array it will run the function (if u are fetching can be an infinity loop, if not it will run only once at the beggining
const App = () => {
  return (
    <StoreContext.Provider value={Store}>
      <div className="body-container">
        <Router>
          <Switch>
            <Route path={process.env.PUBLIC_URL + "/"} exact>
              <HeroSection />
              <MainShop />
            </Route>
            {/* <Route path="/productlist" exact>
              <ProductList />
            </Route> */}

            <Route path="/hamburgermenu" exact>
              <HamburgerMenu />
            </Route>

            <Route path="/kids" exact>
              <HeroSection />
              <Kids />
            </Route>
            <Route path="/car" exact>
              <HeroSection />
              <Car />
            </Route>
            <Route path="/beauty" exact>
              <HeroSection />
              <Beauty />
            </Route>
            <Route path="/technology" exact>
              <HeroSection />
              <Technologie />
            </Route>
            <Route path="/wellness" exact>
              <HeroSection />
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
