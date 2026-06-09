import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";
import favoritesReducer from "../features/favorites/favoriteSlice";

const loadCart = () => {
  try {
    const savedCart = localStorage.getItem(
      "cart"
    );

    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.error(
      "Failed to load cart:",
      error
    );
  }

  return {
    items: [],
  };
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },

  preloadedState: {
    cart: loadCart(),
  },
});

store.subscribe(() => {
  try {
    localStorage.setItem(
      "cart",
      JSON.stringify(store.getState().cart)
    );
  } catch (error) {
    console.error(
      "Failed to save cart:",
      error
    );
  }
});