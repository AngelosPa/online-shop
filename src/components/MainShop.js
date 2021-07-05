import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Store } from "../context";
import ProductList from "./innercomponents/ProductList";
import Beauty from "./innercomponents/Beauty";
import Car from "./innercomponents/Car";
import Kids from "./innercomponents/Kids";
import Technologie from "./innercomponents/Technologie";
import Wellness from "./innercomponents/Wellness";
import Sports from "./innercomponents/Sports";
const MainShop = () => {
  const [val, setVal] = useState(0);

  return (
    <div className="mainmenu">
      <div className="item">
        gifts/ hadis goodies
        <div className="slider">
          <button
            onClick={() => setVal(val + 1)}
            disabled={Store.data.length - 1 == val}
          >
            ⬅
          </button>
          <ProductList val={val} />
          <button onClick={() => setVal(val - 1)} disabled={val == 0}>
            ➡
          </button>
          {/* <ProductList /> */}
        </div>
      </div>
      <Router>
        <Switch>
          <Route path="/kids" exact>
            <Kids />
            <div className="item">for the kids</div>
          </Route>
          <Route path="/car" exact>
            <Car />
            <div className="item">for the car</div>
          </Route>
          <Route path="/beauty" exact>
            <Beauty />
            <div className="item">beauty products</div>
          </Route>
          <Route path="/technology" exact>
            <Technologie />
            <div className="item">technology</div>
          </Route>
          <Route path="/wellness" exact>
            <Wellness />
            <div className="item">wellness</div>
          </Route>
          <Route path="/sports" exact>
            <Sports />
            <div className="item">Sports</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default MainShop;
