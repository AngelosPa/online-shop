import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../context";
import ProductList from "./innercomponents/ProductList";

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
    </div>
  );
};

export default MainShop;
