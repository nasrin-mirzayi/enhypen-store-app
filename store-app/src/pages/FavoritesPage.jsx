import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../features/favorites/favoriteSlice";

export default function FavoritesPage() {
  const dispatch = useDispatch();

  const favorites = useSelector(
    state => state.favorites.items
  );

  if (favorites.length === 0) {
    return (
      <div className="page">
        <h1>Favorites ❤️</h1>
        <h3>No favorites yet</h3>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Favorites ❤️</h1>

      <div className="favorites-grid">
        {favorites.map(item => (
          <div
            key={item.id}
            className="favorite-card"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="favorite-image"
              />
            )}

            <h3>{item.title}</h3>

            <p>{item.category}</p>

            {item.price && (
              <h4>${item.price}</h4>
            )}

            <button
              className="remove-favorite-btn"
              onClick={() =>
                dispatch(toggleFavorite(item))
              }
            >
              Remove ❤️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}