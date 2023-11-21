import React, { useContext } from "react";
import store from "../redux/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { removeItem, clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items)
  const dispatch = useDispatch();
  
  const handleClear = () => {
    dispatch(clearCart());
  }

  const handleOrder = () =>{
    
  }

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
                  onClick={() => {
                    dispatch(removeItem(item))
                  }}
                >
                  Remove 
                </button>
              </li>
            ))}
          </ul>
          <button className="clear-button" onClick={
             handleClear
          }>
            Clear Cart
          </button>
          <button className="order-button" onClick={
             handleOrder
          }>
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
