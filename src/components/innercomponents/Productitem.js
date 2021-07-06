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

  // <li key={id}>
  //   {productName} <i>{icon}</i>
  //   <h5>{price}€</h5>
  //   <h6>{inventory} items in stock</h6>
  //   <button
  //     className="cardbutton"
  //     disabled={inventory === 0}
  //     onClick={() => {
  //       addToCart(info);
  //     }}
  //   >
  //     {inventory > 0 ? "Add to cart" : "Sold out"}
  //   </button>
  // </li>
};

export default ProductItem;
