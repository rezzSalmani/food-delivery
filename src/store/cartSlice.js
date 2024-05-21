import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          title: newItem.title,
          id: newItem.id,
          image: newItem.image,
          price: +newItem.price,
          quantity: 1,
          totalPrice: +newItem.price,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== itemId);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    clearCart: state => {
      state.items = [];
    },
    removeWholeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);
      if (existingItem) {
        state.items = state.items.filter(item => item.id !== itemId);
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
