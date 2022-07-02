import React from "react";
import CustomButon from "../custom-button/CustomButton";

import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

function CartDropdown({ cartItems, toggleCartHidden }) {
  let navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.id} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButon
        onClick={() => {
          navigate("/checkout");
          toggleCartHidden();
        }}
      >
        CHECKOUT
      </CustomButon>
    </div>
  );
}

let mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
