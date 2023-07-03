import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>

      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li className="cart-item" key={item.id}>
                <div className="item-info">
                  <div className="item-icon">
                    {/* Add your item icon here */}
                  </div>
                  <div className="item-name">{item.name}</div>
                </div>
                <div className="item-price">{item.price/100}</div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button className="clear-button" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
