import React from "react";
import "./polos-link.styles.scss";
import { Link } from "react-router-dom";

function PolosLink() {
  return (
    <div className="polos-container">
      <div className="content">
        <h3>Style</h3>
        <h1>Polo Shirts</h1>
        <Link to={"/shop/polos"}>
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default PolosLink;
