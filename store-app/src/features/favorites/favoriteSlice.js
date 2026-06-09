import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,

  reducers: {
    toggleFavorite: (state, action) => {
      const exists = state.items.find(
        item => item.id === action.payload.id
      );

      if (exists) {
        state.items = state.items.filter(
          item => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const {
  toggleFavorite,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;