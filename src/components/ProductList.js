import React, { useState } from "react";
import ProductItem from "./Productitem";

const ProductList = ({ data }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevStat) => [...prevStat, item]);
    console.log(cart);
  };

  const items = data.map((item, i) => (
    <ProductItem key={i} info={item} addToCart={addToCart} />
  ));

  return (
    <React.Fragment>
      <ul>{items}</ul>
    </React.Fragment>
  );
};
export default ProductList;
