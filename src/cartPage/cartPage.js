import React from "react";
import "./cartPage.css";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const CartPage = () => {
  let cartInfo = useSelector((state) => state.counterReducer);
  const CartProducts = () => {
    if (cartInfo.productId.length > 0) {
      return cartInfo.productId.map((product) => (
        <div>
          <div>{product.id}</div>
          <div>{product.noOfItems}</div>
        </div>
      ));
    } else {
      return <div>Cart is empty</div>;
    }
  };
  return (
    <React.Fragment>
      <div className="cartPage-navbar">
        <p className="cartPage-navbar-title">
          <Link to="/">Chamunda</Link>
        </p>
        <h2>Checkout (2)</h2>
      </div>
      <div className="cartPage-orders">
        <div className="cartPage-orders-orderSummary">order summary</div>
        <div className="cartPage-orders-usersInfoAndCartDetails">
          <div className="cartPage-orders-usersInfoAndCartDetails-shippingDetails">
            <div className="cartPage-orders-usersInfoAndCartDetails-shippingDetails-title">
              Shipping address
            </div>
            <div className="cartPage-orders-usersInfoAndCartDetails-shippingDetails-info">
              <h4>kageshwori, Manohara-9-Kathmandu Nepal</h4>
              <h4>Birendrachwok, Nursery, 9815</h4>
            </div>
            <div className="cartPage-orders-usersInfoAndCartDetails-shippingDetails-changeButton">
              <button>Change</button>
            </div>
          </div>
          <div className="cartPage-orders-usersInfoAndCartDetails-paymentMethod">
            <div className="cartPage-orders-usersInfoAndCartDetails-paymentMethod-title">
              Payment method
            </div>
            <div className="cartPage-orders-usersInfoAndCartDetails-paymentMethod-info">
              <h4>Credit card</h4>
              <h4>98565413216845321</h4>
            </div>
            <div className="cartPage-orders-usersInfoAndCartDetails-paymentMethod-changeButton">
              <button>Change</button>
            </div>
          </div>

          <div>
            <CartProducts />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CartPage;
