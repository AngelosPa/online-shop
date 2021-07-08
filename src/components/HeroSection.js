// import React from "react";
import React, { useState, useContext } from "react";
import Data from "../data.json";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core/";
import ProductItem from "./innercomponents/Productitem";

import { StoreContext } from "../context";
import { FaSearch, FaChevronLeft } from "react-icons/fa";

import { MdMenu } from "react-icons/md";
const HeroSection = () => {
  const [data, setData] = useState(Data);
  const [userInput, setUserInput] = useState("");

  const [totalBill, setTotalBill] = useState(0);
  const store = useContext(StoreContext);
  const menuHandle = () => {
    console.log("skata");
  };
  const changeHandle = (e) => {
    setUserInput(() => e.target.value);

    store.lookUp(userInput);
    //lookUp();
  };

  // to stop the fort thing
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="hero-section">
      <nav>
        <Link className="item" to="/hamburgermenu">
          <IconButton>
            <MdMenu className="hamburgers-menus" onClick={menuHandle} />
          </IconButton>
        </Link>

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
        {/* shopify pass */}
        {/* _LGG;E_g#W4D;Pq */}
        {/* api key =
          ec0290dfeb1d604804e75d35827a0d83 */}
        {/* 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 */}
      </nav>{" "}
      <div className={3 > 1 ? "hamburger-container" : "invisible-menu"}></div>
      <h2>search for the products of your dreams </h2>
      <div className="searchbarteam">
        <form onSubmit={handleSubmit} class="search-bar">
          <input
            type="search"
            name="search"
            onChange={changeHandle}
            value={userInput}
            className="searchInput"
            placeholder="search ..."
          />

          <IconButton>
            {" "}
            <button class="search-btn" type="submit">
              {" "}
              <FaSearch />
            </button>
          </IconButton>
        </form>{" "}
      </div>
      <div className="space-for-results">
        {/* this one displays everything and if the user typews something displays only that i want it to soplay only when the user rights */}

        {/* <ProductItem { userInput ? store.lookUp(userInput) : null }/>
         */}
        {userInput ? <ProductItem info={store.lookUp(userInput)} /> : null}
        {/* <ProductList data={filteredData} addToCart={addToCart} /> */}
      </div>
    </div>
  );
};
export default HeroSection;
