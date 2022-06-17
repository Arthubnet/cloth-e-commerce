import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  /* prettier-ignore */
  const publishableKey = "pk_test_51L9QQUE9r2n1N8end3s9Ot2HbaZoK4DjGmiNw77KEddGPv3EhlZaRakrtHtlsRQXXdu4pNPPkMeqcHmufCTArWXq00OIPEiJgT";
  let onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Fam eCommerce Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
}

export default StripeCheckoutButton;
