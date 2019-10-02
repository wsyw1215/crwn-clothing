import React from "react";
import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  WarningText
} from "./Checkout.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

const Checkout = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(item => (
        <CheckoutItem item={item} key={item.id} />
      ))}
      <Total>
        <span>Total: ${total}</span>
      </Total>
      <WarningText>
        *Please use the following test credit card for payment
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV:123
      </WarningText>
      <StripeButton price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});
export default connect(mapStateToProps)(Checkout);
