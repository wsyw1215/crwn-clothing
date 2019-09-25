import React from "react";
import "./Checkout.scss";
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
    <div className="checkout-page">
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
      {cartItems.map(item => (
        <CheckoutItem item={item} key={item.id} />
      ))}
      <div className="total">
        <span>Total: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payment
        <br/>
        4242 4242 4242 4242 - Exp: 01/20 - CVV:123 
      </div>
      <StripeButton price={total}/>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});
export default connect(mapStateToProps)(Checkout);
