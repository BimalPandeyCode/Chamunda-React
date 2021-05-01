import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <React.Fragment>
      <header className="navbar">
        <p className="navbar-title">Chamunda</p>
        <div className="navbar-search-box">
          <input
            type="search"
            className="navbar-search-input"
            placeholder="Search"
          />
        </div>
        <button className="navbar-cart">
          <span className="navbar-cart-number">01</span>
          <i className="fab fa-opencart fa-2x" id="navbar-cart-image"></i>
        </button>
        <button className="navbar-signin">
          <i className="fas fa-sign-in-alt fa-2x"></i>
        </button>
      </header>
    </React.Fragment>
  );
};
export default Navbar;
