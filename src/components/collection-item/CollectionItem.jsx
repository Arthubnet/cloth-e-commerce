import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./collection-item.styles.scss";
/* redux */
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ addItem, item }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image">
        <img src={imageUrl} loading="lazy" alt={name} />
      </div>
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{`$${price}`}</div>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispathtoProps = (dispath) => ({
  addItem: (item) => dispath(addItem(item)),
});

export default connect(null, mapDispathtoProps)(CollectionItem);
