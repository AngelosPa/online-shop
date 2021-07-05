import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
        <Link className="item" to="/kids">
          <p>For the Kids</p>
        </Link>
        <Link className="item" to="/car">
          <p>Car accessories</p>
        </Link>
        <Link className="item" to="/beauty">
          <p>Beauty Products</p>
        </Link>
        <Link className="item" to="/technology">
          <p>all about technology</p>
        </Link>
        <Link className="item" to="/wellness">
          <p>Wellness and Health</p>
        </Link>
        <Link className="item" to="/sports">
          <p>Sports</p>
        </Link>
        <Switch>
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
          <Route path="/sports" exact>
            <Sports />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default MainShop;
