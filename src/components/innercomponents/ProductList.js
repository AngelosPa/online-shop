import React, { useState, useContext } from "react";
import ProductItem from "../innercomponents/Productitem";
import { StoreContext } from "../../context";
import Slideritem from "./Slideritem";
const ProductList = (props) => {
  const store = useContext(StoreContext);

  const [totalBill, setTotalBill] = useState(0);

  const items = store.data.map((item, i) => (
    <Slideritem key={i} info={item} addToCart={store.addToCart} />
  ));

  return (
    <div className="carusel">
      <ul>{items[props.val]}</ul>
    </div>
  );
};
export default ProductList;
