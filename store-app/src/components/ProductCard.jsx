import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../features/cart/cartSlice";
import { toggleFavorite } from "../features/favorites/favoriteSlice";

import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const favorites = useSelector(
    state => state.favorites.items
  );

  const isFavorite = favorites.some(
    fav => fav.id === item.id
  );

  return (
    <div className="product-card">

      <button
        className="favorite-btn"
        onClick={() =>
          dispatch(toggleFavorite(item))
        }
      >
        {isFavorite ? (
          <FaHeart color="red" />
        ) : (
          <FaRegHeart />
        )}
      </button>

      {item.badge && (
        <span className="badge">
          {item.badge}
        </span>
      )}

      <img
        src={item.image}
        alt={item.title}
        className="product-image"
      />


      <div className="text">
        
        <h3>{item.title}</h3>

        <p>Category: {item.category}</p>
        
      
        {item.releaseYear && (
          <p>Released: {item.releaseYear}</p>
        )}

        {item.song && (
          <h4>title song: {item.song}</h4>
        )}

        {item.color && (
          <p>concept: {item.color}</p>
        )}

      
        <h4> price: {item.price || 19.99} $</h4>
      </div>
      
      <div className="card-buttons">

        <Link
          to={`/details/${item.id}`}
          className="details-btn"
        >
          Details
        </Link>

        <button
          className="cart-btn"
          onClick={() =>
            dispatch(addToCart(item))
          }
        >
          Add To Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;