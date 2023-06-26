import React, { useState, useEffect } from "react";

const Instamart = () => {
  const [panes, setPanes] = useState([
    "Emergency supplies",
    "Fresh fruits & veggies",
    "Dairy, bread & eggs",
    "Snacks & indulgences",
    "Daily essentials",
  ]);
  const [currentPaneIndex, setCurrentPaneIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPaneIndex((prevIndex) => (prevIndex + 1) % panes.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [panes.length]);

  return (
    <div className="instamart">
      <div className="instamart-container">
        <div className="active-pane">
          <h3 className="pane-title">{panes[currentPaneIndex]}</h3>
          <p className="pane-description">
            Delivered in minutes, from the house of ❤️ Chhavi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instamart;
