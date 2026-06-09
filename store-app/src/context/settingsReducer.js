export const initialState = {
  theme: "light",
  category: "all",
  layout: "list",
};

export function settingsReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };

    case "SET_LAYOUT":
      return {
        ...state,
        layout: action.payload,
      };

    default:
      return state;
  }
}