import React from "react";
import Productlist from "./innercomponents/Productlist";
const MainShop = () => {
  return (
    <div className="mainmenu">
      <div className="item">
        gifts/ hadis goodies
        <div className="hadis">{/* <Productlist /> */}</div>
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
