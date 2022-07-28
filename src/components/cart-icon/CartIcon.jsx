import React, { useState } from "react";
import "./cart-icon.styles.scss";
import CartDropdown from "./../cart-dropdown/CartDropdown";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

/* Redux */
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
/* Framer Motion */
import { motion } from "framer-motion";

function CartIcon({ itemCount }) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setIsOpen((isOpen = true))}
      onHoverEnd={() => setIsOpen((isOpen = false))}
      className="cart-icon "
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
      <CartDropdown isOpen={isOpen} />
    </motion.div>
  );
}

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps)(CartIcon);
