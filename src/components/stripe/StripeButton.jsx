import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  let API = process.env.REACT_APP_STRIPE;
  const priceForStripe = price * 100;
  /* prettier-ignore */
  const publishableKey = API;
  let onToken = (token) => {
    alert("Payment Successful");
  };
  return (
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
  );
}

export default StripeCheckoutButton;
