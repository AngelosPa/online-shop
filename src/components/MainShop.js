import React, { useState, useContext } from "react";
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
      <div className="item">for the kids</div>
      <div className="item">for the car</div>
      <div className="item">beauty products</div>
      <div className="item">technology</div>
      <div className="item">wellness and beauty</div>
      <div className="item">Sports</div>
    </div>
  );
};

export default MainShop;
