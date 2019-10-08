import React, { memo } from "react";
import { CartItemContainer, ItemDetailContainer } from "./CartItem.style";
const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="item" />
      <ItemDetailContainer>
        <span>{name}</span>
        <span>
          ${price} x {quantity}
        </span>
      </ItemDetailContainer>
    </CartItemContainer>
  );
};

export default memo(CartItem);
