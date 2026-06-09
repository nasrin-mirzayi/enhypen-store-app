import { useSettings } from "../context/SettingsContext";

const categories = [
  "all",
  "Albums",
  "Photocards",
  "Collections",
];

const CategoryFilter = () => {
  const { state, dispatch } = useSettings();

  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category}
          className={
            state.category === category
              ? "active-category"
              : ""
          }
          onClick={() =>
            dispatch({
              type: "SET_CATEGORY",
              payload: category,
            })
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;