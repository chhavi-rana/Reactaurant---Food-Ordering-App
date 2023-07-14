import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addNewItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addNewItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
