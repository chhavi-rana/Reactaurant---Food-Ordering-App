import { useState } from "react";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  return (
    <div className="nav-bar">
      <div className="logo">
        <a href="/">
          <img src={require("../images/logo.png")} alt="logo" />
        </a>
      </div>
      <div className="nav-link">
        <ul>
          <li className="nav-items">Offers</li>
          <li className="nav-items">Help</li>
          <li className="nav-items">Sign In</li>
          <li className="nav-items">Cart</li>
          {loggedInUser? (
          <button className="auth" onClick={() => setLoggedInUser(false)}>
            LogOut
          </button>
          ): (
          <button className="auth" onClick={() => setLoggedInUser(true)}>
            LogIn
          </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
