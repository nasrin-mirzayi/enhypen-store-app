import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useSettings } from "../context/SettingsContext";
import { useState } from "react";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

export default function Navbar() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const { state, dispatch: settingsDispatch } = useSettings();

  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar ${state.theme}`}>

      <Link to="/" className="logo">
        ENHYPEN STORE
      </Link>

      <div className="nav-links">

        <Link to="/favorites">❤️</Link>


        <div className="cart-wrapper">

          <button
            className="cart-btn"
            onClick={() => setOpen(!open)}
          >
            🛒 Cart ({totalItems})
          </button>

          {open && (
            <div className="mini-cart">

              {items.length === 0 ? (
                <p>Cart is empty</p>
              ) : (
                <>
                  {items.map(item => (
                    <div
                      key={item.id}
                      className="mini-item"
                    >

                      <p>{item.title}</p>

                      <div className="mini-controls">

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
                          {item.quantity}
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

                        <button
                          onClick={() =>
                            dispatch(
                              removeFromCart(item.id)
                            )
                          }
                        >
                          ❌
                        </button>

                      </div>
                    </div>
                  ))}

                  <hr />

                  <p>Total: ${totalPrice}</p>

                  <Link
                    to="/cart"
                    onClick={() => setOpen(false)}
                    className="cart-page-link"
                  >
                    Go to Cart →
                  </Link>

                </>
              )}

            </div>
          )}

        </div>


        <button
          onClick={() =>
            settingsDispatch({ type: "TOGGLE_THEME" })
          }
        >
          {state.theme === "light" ? "🌙" : "☀️"}
        </button>

      </div>
    </nav>
  );
}