import React from "react";
import CustomButon from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";
/* redux */
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ addItem, item }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{`$${price}`}</div>
      </div>
      <CustomButon onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButon>
    </div>
  );
};

const mapDispathtoProps = (dispath) => ({
  addItem: (item) => dispath(addItem(item)),
});

export default connect(null, mapDispathtoProps)(CollectionItem);
