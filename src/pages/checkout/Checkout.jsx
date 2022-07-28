import React from "react";

import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "./../../components/checkout-item/CheckoutItem";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import StripeCheckoutButton from "../../components/stripe/StripeButton";

import { motion } from "framer-motion";

const CheckoutPage = ({ cartItems, total }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="checkout-page"
  >
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="test-warning">
      Use the following <span>test</span> credit card for payments: <br /> 4242
      4242 4242 4242 - Exp: 01/23(as long as not expired) - CVV: 123(any)
    </div>
    <StripeCheckoutButton price={total} />
  </motion.div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
