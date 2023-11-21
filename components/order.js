import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { placeOrder } from "../redux/orderSlice";

const OrderComponent = () => {
  const dispatch = useDispatch();

  // State for order details
  const [orderDetails, setOrderDetails] = useState({
    contact: {
      name: "",
      email: "",
      phone: "",
    },
    shipping: {
      address: "",
      city: "",
      postalCode: "",
    },
    payment: {
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    },
  });

  const handleInputChange = (section, field, value) => {
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [section]: {
        ...prevDetails[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch an action to place the order
    dispatch(placeOrder(orderDetails));
    // Reset the form or navigate to a confirmation page
    setOrderDetails({
      contact: {
        name: "",
        email: "",
        phone: "",
      },
      shipping: {
        address: "",
        city: "",
        postalCode: "",
      },
      payment: {
        cardNumber: "",
        expirationDate: "",
        cvv: "",
      },
    });
  };

  return (
    <div className="order-component">
      <h2>Order Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <h3>Contact Information</h3>
        <label>
          Name:
          <input
            type="text"
            value={orderDetails.contact.name}
            onChange={(e) => handleInputChange("contact", "name", e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={orderDetails.contact.email}
            onChange={(e) => handleInputChange("contact", "email", e.target.value)}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={orderDetails.contact.phone}
            onChange={(e) => handleInputChange("contact", "phone", e.target.value)}
            required
          />
        </label>

        {/* Shipping Information */}
        <h3>Shipping Information</h3>
        <label>
          Address:
          <textarea
            value={orderDetails.shipping.address}
            onChange={(e) => handleInputChange("shipping", "address", e.target.value)}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={orderDetails.shipping.city}
            onChange={(e) => handleInputChange("shipping", "city", e.target.value)}
            required
          />
        </label>
        <label>
          Postal Code:
          <input
            type="text"
            value={orderDetails.shipping.postalCode}
            onChange={(e) => handleInputChange("shipping", "postalCode", e.target.value)}
            required
          />
        </label>

        {/* Payment Method */}
        <h3>Payment Method</h3>
        <label>
          Card Number:
          <input
            type="text"
            value={orderDetails.payment.cardNumber}
            onChange={(e) => handleInputChange("payment", "cardNumber", e.target.value)}
            required
          />
        </label>
        <label>
          Expiration Date:
          <input
            type="text"
            value={orderDetails.payment.expirationDate}
            onChange={(e) => handleInputChange("payment", "expirationDate", e.target.value)}
            required
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            value={orderDetails.payment.cvv}
            onChange={(e) => handleInputChange("payment", "cvv", e.target.value)}
            required
          />
        </label>

        {/* Submit Button */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderComponent;
