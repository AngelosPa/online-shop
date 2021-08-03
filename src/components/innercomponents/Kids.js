import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { IconButton } from "@material-ui/core/";
function Kids() {
  return (
    <div className="item-page">
      <Link className="item" to={process.env.PUBLIC_URL + "/"}>
        <IconButton>
          <FaChevronLeft /> <p>back</p>
        </IconButton>
      </Link>
     
      im kids
    </div>
  );
}

export default Kids;
