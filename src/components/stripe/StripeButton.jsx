import React from "react";
import StripeCheckout from "react-stripe-checkout";

import { useNavigate } from "react-router-dom";

/* redux */
import { connect } from "react-redux";
import { clearCart } from "../../redux/cart/cart.actions";

function StripeCheckoutButton({ price, clearItems }) {
  let navigate = useNavigate();
  const priceForStripe = price * 100;
  /* prettier-ignore */
  const publishableKey = `${process.env.REACT_APP_STRIPE}`;
  let onToken = (token) => {
    clearItems();
    alert("Payment Successful");
    navigate("/");
  };

  return (
    <>
      <StripeCheckout
        label="Pay Now"
        name="Fam eCommerce Ltd."
        billingAddress
        shippingAddress
        image="https://www.emquartier.co.th/wp-content/uploads/2019/12/fred-perry-logo.jpg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      ></StripeCheckout>
    </>
  );
}

const mapDispathtoProps = (dispatch) => ({
  clearItems: (items) => dispatch(clearCart(items)),
});

export default connect(null, mapDispathtoProps)(StripeCheckoutButton);
