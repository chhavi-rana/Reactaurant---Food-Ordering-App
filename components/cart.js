import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClear = () => {
    dispatch(clearCart());
  };


  // Calculate the order total
  const orderTotal = cartItems.reduce((total, item) => total + item.price, 0) / 100;

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
                <div className="item-price">{item.price / 100}</div>
                <button
                  className="remove-button"
                  onClick={() => {
                    dispatch(removeItem(item));
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="order-total-container">
            <div className="order-total-label">Order Total:</div>
            <div className="order-total-value">₹{orderTotal.toFixed(2)}</div>
          </div>
          <button className="clear-button" onClick={handleClear}>
            Clear Cart
          </button>
          <button className="order-button" onClick={() => navigate("/order")}>
            Order
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
