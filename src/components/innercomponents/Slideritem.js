import React from "react";

const Slideritem = ({ info, contextObj }) => {
  const { id, productName, icon, price, inventory } = info;
  console.log(info);

  return (
    <li key={id}>
      {productName} <i>{icon}</i>
      <h5>{price}€</h5>
      <h6>{inventory} items in stock</h6>
      <button
        disabled={inventory === 0}
        onClick={() => {
          contextObj.setStore((prevState) => {
            return { ...prevState, cart: [...prevState.cart, info] };
          });
        }}
      >
        {inventory > 0 ? "Add to cart" : "Sold out"}
      </button>
    </li>
  );
};

export default Slideritem;
