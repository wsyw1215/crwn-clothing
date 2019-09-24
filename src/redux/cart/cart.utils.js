export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCardItem = cartItems.find(item => item.id === cartItemToAdd.id);
  //  如果此項目已存在於購物車內
  if (existingCardItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
