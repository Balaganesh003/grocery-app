import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
  isCartOpen: false,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    addItemToCart(state, action) {},
    removeItemFromCart(state, action) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
