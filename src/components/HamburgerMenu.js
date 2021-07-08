import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { IconButton } from "@material-ui/core/";
function HamburgerMenu() {
  return (
    <div className="hamburger-menu-container">
      <ul>
        <li>
          <Link className="item" to={process.env.PUBLIC_URL + "/"}>
            <IconButton>
              <FaChevronLeft />
            </IconButton>
          </Link>
        </li>
        <li>
          <a href="#">online shops</a>
        </li>

        <li>
          <a href="#">contact us</a>
        </li>
      </ul>
      <div className="main item list on hamburger">
        <h5>Categories</h5>
        <aside>
          <Link className="item" to="/kids">
            <p>For the Kids</p>
          </Link>
          <Link className="item" to="/car">
            <p>Car accessories</p>
          </Link>
          <Link className="item" to="/beauty">
            <p>Beauty Products</p>
          </Link>
          <Link className="item" to="/technology">
            <p>all about technology</p>
          </Link>
          <Link className="item" to="/wellness">
            <p>Wellness and Health</p>
          </Link>
        </aside>
      </div>
    </div>
  );
}

export default HamburgerMenu;
