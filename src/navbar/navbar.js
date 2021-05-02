import React, { useState } from "react";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [cart, setCart] = useState(0);
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <header className="navbar">
      <p className="navbar-title">
        <Link to="/">Chamunda</Link>
      </p>

      <div className="navbar-search-box">
        <input
          type="search"
          className="navbar-search-input"
          placeholder="Search"
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
      <button className="navbar-cart" onClick={() => setCart(cart + 1)}>
        <span className="navbar-cart-number">{cart}</span>
        <i className="fab fa-opencart fa-2x" id="navbar-cart-image"></i>
      </button>
      <button
        className="navbar-signin"
        onClick={() => {
          if (cart > 0) {
            setCart(cart - 1);
          }
        }}
      >
        <i className="fas fa-sign-in-alt fa-2x"></i>
      </button>
    </header>
  );
};

export default withRouter(Navbar);
