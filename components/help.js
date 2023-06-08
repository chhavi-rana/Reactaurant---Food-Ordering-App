import "../help.css";

const Help = () => {
  return (
    <div className="help-page">
      <h1>Help Center</h1>
      <p>
        If you have any questions or need assistance, please check the
        frequently asked questions below:
      </p>

      <h2>Frequently Asked Questions</h2>
      <ul>
        <li>
          <h3>How can I place an order?</h3>
          <p>To place an order, follow these steps:</p>
          <ol>
            <li>Open the app and browse through the menu.</li>
            <li>Select the items you want to order.</li>
            <li>Customize your order if necessary (e.g., toppings, size).</li>
            <li>Review your order and proceed to checkout.</li>
            <li>Provide delivery address and payment information.</li>
            <li>Confirm your order.</li>
          </ol>
        </li>

        <li>
          <h3>Can I track my order?</h3>
          <p>
            Yes, you can track your order in real-time. Once your order is
            confirmed, you will receive a tracking link and notifications about
            the status of your order.
          </p>
        </li>

        <li>
          <h3>What payment methods are accepted?</h3>
          <p>
            We accept various payment methods, including credit/debit cards,
            digital wallets (e.g., Apple Pay, Google Pay), and cash on delivery.
          </p>
        </li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        If you need further assistance, please contact our customer support
        team:
      </p>
      <ul>
        <li>Email: support@example.com</li>
        <li>Phone: 123-456-7890</li>
      </ul>
    </div>
  );
};

export default Help;
