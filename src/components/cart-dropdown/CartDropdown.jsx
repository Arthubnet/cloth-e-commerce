import React from "react";
import CustomButon from "../custom-button/CustomButton";

import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/CartItem";
/* Redux */
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useNavigate } from "react-router-dom";

/* Framer motion */
import { motion } from "framer-motion";

function CartDropdown({ cartItems, isOpen }) {
  let navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        scale: isOpen ? 1 : 0,
      }}
      className="cart-dropdown"
    >
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
        }}
      >
        CHECKOUT
      </CustomButon>
    </motion.div>
  );
}

let mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
