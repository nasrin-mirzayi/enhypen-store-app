import { useParams, Link } from "react-router-dom";
import { enhypenItems } from "../data/enhypenMapping";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";

import { FaArrowLeft } from "react-icons/fa";

export default function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const item = enhypenItems.find(
    p => p.id === Number(id)
  );

  const cartItem = useSelector(state =>
    item
      ? state.cart.items.find(
          i => i.id === item.id
        )
      : null
  );

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div className="details-page">

      <div className="details-nav">
        <Link to="/" className="back-btn">
          <FaArrowLeft /> Back
        </Link>
      </div>

      <div className="details-card">

        <h1>{item.title}</h1>

        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="product-image"
          />
        )}

        {item.badge && (
          <span className="badge">
            {item.badge}
          </span>
        )}

        <p>Category: {item.category}</p>

        {item.releaseYear && (
          <p>Released: {item.releaseYear}</p>
        )}

        {item.color && (
          <p>Concept: {item.color}</p>
        )}

        <p className="details-desc">
          ENHYPEN collectible representing the{" "}
          <b>{item.title}</b> era. A mix of
          music, emotion, and visual
          storytelling.
        </p>

        <h2>${item.price}</h2>

        {!cartItem ? (
          <button
            className="cart-btn"
            onClick={() =>
              dispatch(addToCart(item))
            }
          >
            Add To Cart
          </button>
        ) : (
          <div className="qty-controls">

            <button
              onClick={() =>
                dispatch(
                  decreaseQuantity(item.id)
                )
              }
            >
              -
            </button>

            <span>
              {cartItem.quantity}
            </span>

            <button
              onClick={() =>
                dispatch(
                  increaseQuantity(item.id)
                )
              }
            >
              +
            </button>

          </div>
        )}

      </div>
    </div>
  );
}