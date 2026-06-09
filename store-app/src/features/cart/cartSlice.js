import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        item => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(
        i => i.id === action.payload
      );
      if (item) item.quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        i => i.id === action.payload
      );

      if (item) {
        item.quantity -= 1;

        if (item.quantity <= 0) {
          state.items = state.items.filter(
            i => i.id !== action.payload
          );
        }
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },

    clearCart: state => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;