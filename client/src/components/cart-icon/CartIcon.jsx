import React from "react";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./CartIcon.styles";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon/>
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
