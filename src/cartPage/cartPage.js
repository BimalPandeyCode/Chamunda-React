import React from "react";
import "./cartPage.css";

import data from "../data.js";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const CartPage = () => {
  let cartInfo = useSelector((state) => state.counterReducer);
  const CartProducts = () => {
    if (cartInfo.productId.length > 0) {
      return cartInfo.productId.map((product) => {
        const currentProduct = data.find(({ id }) => id === product.id);
        return (
          <>
            <hr />
            <div className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems">
              <div className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-imageDiv">
                <img
                  className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-imageDiv-image"
                  alt=""
                  src={currentProduct.image}
                />
              </div>
              <div className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv">
                <span className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv-productName">
                  {currentProduct.name}
                </span>
                <br />
                <span className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv-noOfItemsLeft">
                  {`only ${currentProduct.noOfItems} items remaining, order soon`}
                </span>
                <br />
                <span className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv-shippedFrom">
                  {`Shipped from: ${"Kageshwori Manohora-9 Kathmandu"}`}
                </span>
                <br />
                <br />
                <div className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv-quantityDiv">
                  <button>+</button>
                  <input
                    type="number"
                    className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv-quantityDiv-inputNumber"
                  />
                  <button>-</button>
                </div>
                <br />
                <div
                  style={{
                    minWidth: "100%",
                    display: "grid",
                    placeItems: "end",
                  }}
                >
                  <button className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv-removeButton">
                    Remove
                  </button>
                </div>
              </div>
              <div className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-priceDiv">
                <span className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-priceDiv-price">
                  ${currentProduct.currPrice}
                </span>
              </div>
              {/* <div>{product.id}</div>
              <div>{product.noOfItems}</div> */}
            </div>
            <hr />
          </>
        );
      });
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
        <h2>Checkout({cartInfo.noOfCart})</h2>
      </div>
      <div className="cartPage-orders">
        <div className="cartPage-orders-orderSummary">
          <button className="cartPage-orders-orderSummary-checkoutButton">
            Proceed to checkout
          </button>
        </div>
        {/* <div className="cartPage-orders-usersInfoAndCartDetails">
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
           
          </div>
        </div>*/}
        <div className="cartPage-orders-cartDiv">
          <div className="cartPage-orders-cartDiv-cartItemsContainer">
            <h2>Shopping Cart</h2>
            <CartProducts />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CartPage;
