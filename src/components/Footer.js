import React from "react";

const Footer = ({ info, addToCart }) => {
  return (
    <footer>
      {/* <h5>Tsakbam.eu | online προϊόντα | e shops | Tsakbam.eu</h5> */}
      <h6>
        All copyrights reserved ®{" "}
        <span className="year">{new Date().getFullYear()}</span>
        <a href="#">contact us</a>
      </h6>
    </footer>
  );
};

export default Footer;
