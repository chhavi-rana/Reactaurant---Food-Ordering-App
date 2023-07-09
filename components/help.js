import React, { useState } from "react";
import "../help.css";

const AccordionItem = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion-item">
      <h3
        className={`accordion-title ${isExpanded ? "expanded" : ""}`}
        onClick={toggleAccordion}
      >
        {title}
      </h3>
      {isExpanded && <div className="accordion-content">{content}</div>}
    </div>
  );
};

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
          <AccordionItem
            title="How can I place an order?"
            content={
              <ol>
                <li>Open the app and browse through the menu.</li>
                <li>Select the items you want to order.</li>
                <li>
                  Customize your order if necessary (e.g., toppings, size).
                </li>
                <li>Review your order and proceed to checkout.</li>
                <li>Provide delivery address and payment information.</li>
                <li>Confirm your order.</li>
              </ol>
            }
          />
        </li>

        <li>
          <AccordionItem
            title="Can I track my order?"
            content="Yes, you can track your order in real-time. Once your order is confirmed, you will receive a tracking link and notifications about the status of your order."
          />
        </li>

        <li>
          <AccordionItem
            title="What payment methods are accepted?"
            content="We accept various payment methods, including credit/debit cards, digital wallets (e.g., Apple Pay, Google Pay), and cash on delivery."
          />
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
