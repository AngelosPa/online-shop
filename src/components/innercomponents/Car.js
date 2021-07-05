import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Car() {
  return (
    <div className="item-page">
      {" "}
      <Router>
        <Link className="item" to="/">
          <button>back to main MENU</button>
        </Link>
      </Router>
      im car
    </div>
  );
}

export default Car;
