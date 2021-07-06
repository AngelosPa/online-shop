import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Car() {
  return (
    <div className="item-page">
      <Link className="item" to="/">
        <button>back to main MENU</button>
      </Link>
      im car
    </div>
  );
}

export default Car;
