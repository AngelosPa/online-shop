import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { IconButton } from "@material-ui/core/";
import axios from "axios";

function Technologie() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    let items = `https://asos2.p.rapidapi.com/v2/auto-complete
    `;
    axios(items)
      .then(({ data }) => setLista(data))
      .catch((err) => console.log(`Your had an ${err}`));
    console.log(lista);
    //;
  }, []);
  //console.log(items);
  return (
    <div className="item-page">
      <Link className="item" to={process.env.PUBLIC_URL + "/"}>
        <IconButton>
          <FaChevronLeft /> <p>back</p>
        </IconButton>
      </Link>
      zsdrfg
    </div>
  );
}

export default Technologie;
