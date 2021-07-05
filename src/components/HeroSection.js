// import React from "react";
import React, { useState, useContext } from "react";
import Data from "../data.json";

import ProductItem from "./innercomponents/Productitem";
import { StoreContext } from "../context";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const [data, setData] = useState(Data);
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const store = useContext(StoreContext);

  const items = store.data.map((item, i) => (
    <ProductItem key={i} info={item} addToCart={store.addToCart} />
  ));

  const changeHandle = (e) => {
    setUserInput(() => e.target.value);
    //store.lookUp();
    lookUp();
  };
  //for the searchbar -> RE CREATE IT INSIDE THE CONTEXT FOLDER
  const lookUp = () => {
    const userText = userInput.toLowerCase().trim();
    const userTextLength = userText.length;
    // const searchText = userText ? userText : "";

    if (userTextLength === 0) {
      console.log("input", userTextLength);
      setFilteredData([]);
    } else {
      let newArr = data.filter((item) => {
        const slicedProductName = item.productName.slice(0, userTextLength);
        return slicedProductName === userText;
      });
      setFilteredData(newArr);
    }
  };

  // to stop the fort thing
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero-section">
      <nav>
        <div className="hamburgers-menus">
          <div className="hamburgerstyle-menu">
            <div className="first-l"></div>
            <div className="sec-l"></div>
            <div className="thr-l"></div>
          </div>
        </div>

        <ul>
          <li>
            <a href="#">online shops</a>
          </li>

          <li>
            <a href="#">contact us</a>
          </li>
          <li>
            <div>
              <button onClick={() => setTotalBill(store.bill())}>
                Total bill
              </button>
              <h6>{totalBill}€</h6>
            </div>
          </li>
        </ul>
      </nav>
      <h2>search for the products of your dreams </h2>

      <div className="searchbarteam">
        <form onSubmit={handleSubmit} class="searchBox">
          <input
            type="text"
            onChange={changeHandle}
            value={userInput}
            className="searchInput"
            placeholder="search ..."
          />
          <input type="submit" value="SEARCH" className="searchButton" />
        </form>
      </div>

      <div className="space-for-results">
        {/* this one displays everything and if the user typews something displays only that i want it to soplay only when the user rights */}
        {/* <ProductList data={userInput ? filteredData : store.data} /> */}
        {userInput ? items : null}
        {/* <ProductList data={filteredData} addToCart={addToCart} /> */}
      </div>
    </div>
  );
};
export default HeroSection;
