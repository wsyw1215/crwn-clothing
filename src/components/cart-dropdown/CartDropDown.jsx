import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./CartDropDown.scss";
import CartItem from "../cart-item/CartItem.jsx";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
const CartDropDown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps =createStructuredSelector({
  cartItems: selectCartItems
});
export default connect(mapStateToProps)(CartDropDown);
