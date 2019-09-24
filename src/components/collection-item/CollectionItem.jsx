import React from "react";
import "./CollectionItem.scss";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { AddItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  const handleAddItem = () => {
    addItem(item);
  }
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(" ${imageUrl} ")` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={handleAddItem} inverted>ADD TO CART</CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(AddItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);
