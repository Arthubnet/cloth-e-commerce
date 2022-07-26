import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./collection-item.styles.scss";
/* redux */
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { Link, useLocation } from "react-router-dom";

const CollectionItem = ({ addItem, item }) => {
  const { imageUrl, name, price, size } = item;
  let itemsLocation = useLocation().pathname;

  //checking how deep we are
  let counter = 0;
  for (let i = 0; i < itemsLocation.length; i++) {
    if (itemsLocation.charAt(i) == "/") counter++;
  }
  let linkFromShop = item.routeName + "/" + name;

  return (
    <>
      <div className={`${size ? "big" : ""} collection-item`}>
        <div className="image">
          <Link to={`${counter < 2 ? linkFromShop : name}`}>
            <img
              src={imageUrl
                .filter((image, i) => i < 1)
                .map((item) => {
                  return item.picture;
                })}
              loading="lazy"
              alt={name}
            />
          </Link>
          <CustomButton onClick={() => addItem(item)} inverted>
            Add to cart
          </CustomButton>
        </div>
        <div className="collection-footer">
          <div className="name">{name}</div>
          <div className="price">{`$${price}`}</div>
        </div>
      </div>
    </>
  );
};

const mapDispathtoProps = (dispath) => ({
  addItem: (item) => dispath(addItem(item)),
});

export default connect(null, mapDispathtoProps)(CollectionItem);
