import { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useAuth from "../utils/useAuth";
import useLocalStorage from "../utils/useLocalStorage";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartCount = cartItems.length;
  const navigate = useNavigate();

  // call custom hook useLocalStorage for getting localStorage value of user
  const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");

  // call custom hook useAuth for user is loggedin or not
  const [isLoggedin, setIsLoggedin] = useAuth();

  useEffect(() => {
    // if value of getLocalStorage is equal to null setIsLoggedin to false
    if (getLocalStorage === null) {
      setIsLoggedin(false);
    }
  }, [getLocalStorage]);

  // call custom hook useOnline if user is online or not
  const isOnline = useOnline();
  console.log(isOnline);
  return (
    <div className="nav-bar">
      <div className="logo">
        <Link to="/">
          <img className="logo-image" src={require("../images/logo.png")} alt="logo" />
        </Link>
      </div>
      {/* if user is logged in then display userName */}
      {isLoggedin && <div className="user-name">Hi {getLocalStorage?.userName}!</div>}
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
            <li className="nav-items">
              Cart [<span style={{ color: "aliceblue" }}>{cartCount}</span>]{" "}
            </li>
          </Link>
          <li className="nav-items">
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => {
                  clearLocalStorage()
                  setIsLoggedin(false);
                }}
              >
                Logout<span className={isLoggedin ? "login-btn-green" : "login-btn-red"}> ●</span>
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login<span className={isLoggedin ? "login-btn-green" : "login-btn-red"}> ●</span>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
