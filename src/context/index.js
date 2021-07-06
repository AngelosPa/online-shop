import React from "react";
import Data from "../data.json";

//an object with our data.json and the functions for the card add and for the total ammount

const Store = {
  data: Data,
  cart: [],
  print: (str) => console.log(str),
  bill: function () {
    return this.cart.reduce((acc, cur) => acc + cur.price, 0);
  },
  addToCart: (item) => Store.cart.push(item),
  lookUp: function (props) {
    let productarr = Store.data.map((e) => e.productName);
    let productpricearr = Store.data.map((item) => item.price);

    let result = Store.data.filter((item) => item.productName.includes(props));

    return result;
  },
};

const StoreContext = React.createContext(Store);

export { Store, StoreContext };
