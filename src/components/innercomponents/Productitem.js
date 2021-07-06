import React from "react";

const ProductItem = ({ info, addToCart }) => {
  const { id, productName, icon, price, inventory } = info;
  console.log(info);
  return (
    <>
      {info.length
        ? info.map((el) => {
            return (
              <li key={el.id}>
                {el.productName} <i>{el.icon}</i>
                <h5>{el.price}€</h5>
                <h6>{el.inventory} items in stock</h6>
              </li>
            );
          })
        : null}
    </>
  );
};

export default ProductItem;
