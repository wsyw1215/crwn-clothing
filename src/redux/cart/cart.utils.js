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

export const RemoveItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCardItem = cartItems.find(
    item => item.id === cartItemToRemove.id
  );
  if (existingCardItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItemToRemove.id);
  }
  return cartItems.map(item =>
    item.id === cartItemToRemove.id
      ? { ...cartItemToRemove, quantity: cartItemToRemove.quantity - 1 }
      : item
  );
};
