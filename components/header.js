import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  return (
    <div className="nav-bar">
      <div className="logo">
        <Link to="/">
          <img src={require("../images/logo.png")} alt="logo" />
        </Link>
      </div>
      <div className="nav-link">
        <ul>
          <Link to="/instamart">
            <li className="nav-items">InstaMart</li>
          </Link>
          <Link to="/offer">
            <li className="nav-items">Offers</li>
          </Link>
          <Link to="/help">
            <li className="nav-items">Help</li>
          </Link>
          {/* <li className="nav-items">Sign In</li> */}
          <Link to="/cart">
            <li className="nav-items">Cart</li>
          </Link>

          {loggedInUser ? (
            <button className="auth nav-itmes" onClick={() => setLoggedInUser(false)}>
              LogOut
            </button>
          ) : (
            <button className="auth nav-items" onClick={() => setLoggedInUser(true)}>
              LogIn
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
