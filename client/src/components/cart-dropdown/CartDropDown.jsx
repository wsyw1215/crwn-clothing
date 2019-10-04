import React from "react";
import CustomButton from "../custom-button/CustomButton";
import {
  CartDropDownContainer,
  CartItemContainer,
  EmptyMessage
} from "./CartDropDown.styles";
import CartItem from "../cart-item/CartItem.jsx";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
const CartDropDown = ({
  cartItems,
  history,
  toggleCartHidden,
  ...otherProps
}) => {
  const handleClick = () => {
    console.log(history);
    toggleCartHidden();
    history.push("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItemContainer>
        {cartItems.length ? (
          cartItems.map(item => <CartItem item={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is Empty</EmptyMessage>
        )}
      </CartItemContainer>
      <CustomButton onClick={handleClick}>CHECKOUT</CustomButton>
    </CartDropDownContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartDropDown)
);
