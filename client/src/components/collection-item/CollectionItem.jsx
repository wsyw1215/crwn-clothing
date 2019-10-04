import React from "react";
import {
  CollectionItemContainer,
  BackgroundImage,
  AddToCartButton,
  FooterContainer,
  Name
} from "./CollectionItem.styles";
import { connect } from "react-redux";
import { AddItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  const handleAddItem = () => {
    addItem(item);
  };
  return (
    <CollectionItemContainer>
      <BackgroundImage
        className="image"
        style={{ backgroundImage: `url(" ${imageUrl} ")` }}
      ></BackgroundImage>
      <FooterContainer>
        <Name>{name}</Name>
        <span>${price}</span>
      </FooterContainer>
      <AddToCartButton onClick={handleAddItem} inverted>
        ADD TO CART
      </AddToCartButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(AddItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
