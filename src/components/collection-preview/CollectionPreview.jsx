import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import { Link } from "react-router-dom";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, products }) => {
  return (
    <div className="collection-preview">
      <Link to={`/shop/${title.toLowerCase()}`}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </Link>
      <div className="preview">
        {products
          .filter((item, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
