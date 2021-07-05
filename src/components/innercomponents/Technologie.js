import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Technologie() {
  return (
    <div className="item-page">
      {" "}
      <Router>
        <Link className="item" to="/">
          <button>back to main MENU</button>
        </Link>
      </Router>
      im technology
    </div>
  );
}

export default Technologie;
