import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();

  const items = useSelector(
    state => state.cart.items
  );

  const totalPrice = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {items.length === 0 ? (
        <h3>Cart is empty</h3>
      ) : (
        <>
          <div className="cart-list">

            {items.map(item => (
              <div
                key={item.id}
                className="cart-item"
              >

                <img className="cartimagee"
                  src={item.image || item.thumbnail}
                  alt={item.title}
                />

                <div className="cart-info">
                  <h3>{item.title}</h3>

                  <p>${item.price}</p>

                  <div className="qty-controls">

                    <button
                      className="qty-btn"
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      -
                    </button>

                    <button
                      className="qty-btn"
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

          <div className="cart-summary">
            <h2>Total Items: {totalItems}</h2>
            <h2>Total: ${totalPrice}</h2>

            <button
              className="clear-btn"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>

          </div>
        </>
      )}
    </div>
  );
}