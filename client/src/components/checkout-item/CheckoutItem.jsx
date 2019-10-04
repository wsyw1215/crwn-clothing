import React from "react";
import { connect } from "react-redux";
import {
  ClearItemFromCart,
  AddItem,
  RemoveItem
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Price,
  Value,
  Arrow,
  RemoveButton
} from "./CheckoutItem.styles";

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = item;
  const handleRemove = () => {
    clearItem(item);
  };
  const handleSub = () => {
    removeItem(item);
  };
  const handleAdd = () => {
    addItem(item);
  };
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="" />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={handleSub}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAdd}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={handleRemove}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
const mapDispatchToProp = dispatch => ({
  clearItem: state => dispatch(ClearItemFromCart(state)),
  addItem: state => dispatch(AddItem(state)),
  removeItem: state => dispatch(RemoveItem(state))
});
export default connect(
  null,
  mapDispatchToProp
)(CheckoutItem);
