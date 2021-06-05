import React, { useEffect } from "react";
import "./cartPage.css";

import data from "../data.js";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  increamentByValue,
  decreamentByValue,
  removeByID,
} from "../redux/reducers/counterReducer.js";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let cartInfo = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  const CartProducts = () => {
    if (cartInfo.productId.length > 0) {
      return cartInfo.productId.map((product, index) => {
        const currentProduct = data.find(({ id }) => id === product.id);
        return (
          <>
            <hr />
            <div
              className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems"
              key={index}
            >
              <div className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-imageDiv">
                <img
                  className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-imageDiv-image"
                  alt=""
                  src={currentProduct.image}
                />
              </div>
              <div className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv">
                <Link
                  to={`/product/${currentProduct.id}`}
                  className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv-productName"
                >
                  {currentProduct.name}
                </Link>
                <p className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv-noOfItemsLeft">
                  {`only ${currentProduct.noOfItems} left, order soon`}
                </p>
                <p className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv-shippedFrom">
                  {`Shipped from: ${"Kageshwori Manohora-9 Kathmandu"}`}
                </p>
                <p className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv-price">
                  ${currentProduct.currPrice}
                </p>
                <div className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv-quantityDiv">
                  <button
                    onClick={() =>
                      dispatch(
                        decreamentByValue({
                          productId: { id: currentProduct.id, noOfItems: 1 },
                          allProductId: currentProduct.id,
                          noOfCart: 1,
                        })
                      )
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv-quantityDiv-inputNumber"
                    value={
                      cartInfo.productId.find(
                        ({ id }) => id === currentProduct.id
                      ).noOfItems
                    }
                    onChange={(e) => e.stopPropagation()}
                    readOnly={true}
                  />
                  <button
                    onClick={() =>
                      dispatch(
                        increamentByValue({
                          productId: { id: currentProduct.id, noOfItems: 1 },
                          allProductId: currentProduct.id,
                          noOfCart: 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <div
                  className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv-removeButton-div"
                  style={{
                    minWidth: "100%",
                    display: "grid",
                    placeItems: "end",
                  }}
                >
                  <button
                    className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-productInfoDiv-removeButton"
                    onClick={() =>
                      dispatch(
                        removeByID({
                          productId: { id: currentProduct.id, noOfItems: 1 },
                          allProductId: currentProduct.id,
                          noOfCart: 1,
                        })
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-priceDiv">
                <span className="cartPage-orders-cartDiv-cartItemsContainer-eachCartItems-priceDiv-price">
                  ${currentProduct.currPrice}
                </span>
              </div>
            </div>
            <hr />
          </>
        );
      });
    } else {
      return (
        <div
          className="cartPage-orders-cartDiv-cartItemsContainer-cartIsEmpty"
          key="98"
        >
          <div style={{ marginTop: "10px" }}>
            <img
              src="https://tss-static-images.gumlet.io/emptyCart.png"
              width="75px"
              height="75px"
              alt=""
              className="cartPage-orders-cartDiv-cartItemsContainer-cartIsEmpty-image"
            />
            <span className="cartPage-orders-cartDiv-cartItemsContainer-cartIsEmpty-text">
              Your Chamunda cart is empty
            </span>
          </div>
        </div>
      );
    }
  };
  let totalprice = 0;
  cartInfo.productId.forEach((element) => {
    totalprice +=
      element.noOfItems * data.find(({ id }) => id === element.id).currPrice;
  });
  return (
    <React.Fragment>
      <div className="cartPage-orders">
        {cartInfo.productId.length > 0 ? (
          <div className="cartPage-orders-orderSummary">
            <div className="cartPage-orders-orderSummary-checkoutContainer">
              <div className="cartPage-orders-orderSummary-checkoutContainer-div">
                <span className="cartPage-orders-orderSummary-checkoutContainer-subTotal">{`Subtotal:$${totalprice}`}</span>
                <button className="cartPage-orders-orderSummary-checkoutButton">
                  {`Proceed to checkout(${cartInfo.noOfCart})`}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* <UserInfo /> */}
        <div className="cartPage-orders-cartDiv">
          <div className="cartPage-orders-cartDiv-cartItemsContainer">
            {cartInfo.productId.length > 0 ? <h2>Shopping Cart</h2> : <></>}
            <CartProducts />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const UserInfo = () => {
  return (
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

      <div></div>
    </div>
  );
};

export default CartPage;
