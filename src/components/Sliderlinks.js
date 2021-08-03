import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Sliderlinks() {
  return (
    <div className="categories-slider">
      <Link className="item" to="/car">
        <p className="skt">Car </p>
      </Link>
      <Link className="item" to="/kids">
        <p className="skt">kids</p>
      </Link>
      <Link className="item" to="/beauty">
        <p className="skt">beauty</p>
      </Link>
    </div>
  );
}

export default Sliderlinks;
