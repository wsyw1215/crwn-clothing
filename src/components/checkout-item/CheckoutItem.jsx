import React from "react";
import "./CheckoutItem.scss";
import { connect } from "react-redux";
import {
  ClearItemFromCart,
  AddItem,
  RemoveItem
} from "../../redux/cart/cart.actions";

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
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleSub}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAdd}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleRemove}>
        &#10005;
      </div>
    </div>
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
