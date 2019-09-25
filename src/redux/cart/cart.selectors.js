import { createSelector } from "reselect";

const selectCart = state => state.cart;
export const selectHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((pre, cur) => pre + cur.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((pre, cur) => pre + (cur.quantity*cur.price), 0)
);
