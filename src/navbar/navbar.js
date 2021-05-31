import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { increamentByValue, reset } from "../redux/reducers/counterReducer.js";

import "./navbar.css";
const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");

  let noOfCart = useSelector((state) => state.counterReducer.noOfCart);
  let dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  useEffect(() => {
    if (
      localStorage.getItem("noOfCart") !== null &&
      localStorage.getItem("productId") !== null
    ) {
      dispatch(
        increamentByValue({
          productId: JSON.parse(localStorage.getItem("productId")),
          noOfCart: localStorage.getItem("noOfCart"),
        })
      );
    }
  }, []);
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
      <Link
        to="/cart"
        className="navbar-cart"
        // onClick={() => {
        //   dispatch(increament());
        // console.log("Bimal");
        // }}
      >
        <span className="navbar-cart-number">{parseInt(noOfCart)}</span>
        <i className="fab fa-opencart fa-2x" id="navbar-cart-image"></i>
      </Link>
      <button
        className="navbar-signin"
        onClick={() => {
          dispatch(reset());
          localStorage.clear();
        }}
      >
        <i className="fas fa-sign-in-alt fa-2x"></i>
      </button>
    </header>
  );
};

export default withRouter(Navbar);
