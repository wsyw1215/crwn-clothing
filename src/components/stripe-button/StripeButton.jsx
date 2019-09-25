import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  // 這裡因為是用美元計算，Stripe要求金額單位為cent，故要再乘上100
  const priceForStripe = price * 100;
  // 金流公鑰
  const publishableKey = "pk_test_vHlilv68K3j1HuvFHTGCfeUi00ssQc8MsH";
  const onToken = token => {
    console.log(token);
    alert('payment success');
  }
  return (
    <div>
      <StripeCheckout 
        label='Pay Now'
        name='Clothing Ltd.'
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeButton;
