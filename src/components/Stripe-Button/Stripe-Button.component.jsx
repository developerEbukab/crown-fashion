import React from 'react';
import "./Stripe-Button.styles.scss";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_kTapcITyJvtXfvGOtSLqvAkI00Xjinz8W3";

  const onToken = token => {
    console.log(token);
    alert("Payment success")
  }

  return (
    <div>
      <StripeCheckout
        label="Place My Order"
        name="CRWN Clothing Ltd"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
