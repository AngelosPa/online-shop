import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Kids() {
  return (
    <div className="item-page">
      <Link className="item" to="/">
        <button>back to main MENU</button>
      </Link>
      im kids
    </div>
  );
}

export default Kids;
