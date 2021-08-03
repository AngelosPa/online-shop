import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { IconButton } from "@material-ui/core/";
function Beauty() {
  let text;
  for (let i = 0; i < 9; i++) {
    text += "The number is " + i + "<br>";
  }
  return (
    <div className="item-page">
      <Link className="item" to={process.env.PUBLIC_URL + "/"}>
        <IconButton>
          <FaChevronLeft /> <p>back</p>
        </IconButton>
      </Link>
      
      im beauty
    </div>
  );
}

export default Beauty;
