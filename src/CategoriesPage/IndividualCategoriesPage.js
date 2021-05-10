import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import "./IndividualCategoriesPage.css";
import data from "../data.js";

import Rating from "../Components/Rating/Rating.js";

const IndividualCategoriesPage = () => {
  const sortUp = <i className="fas fa-sort-up"></i>;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { categoryId } = useParams();
  let IndividualCategoriesPageSideSortBarRatingSort = useRef();
  if (categoryId < data.length) {
    const { name, id, image } = data[categoryId];
    let output = [];
    for (let i = 0; i < data.length; i++) {
      output.push(
        <Product image={data[i].image} key={i} name={data[i].name} />
      );
    }
    return (
      <React.Fragment>
        <div className="IndividualCategoriesPage">
          <div className="IndividualCategoriesPage-mainTitle">
            <h3>{name}</h3>
          </div>
          <div className="IndividualCategoriesPage-sideSortBar">
            <div className="IndividualCategoriesPage-sideSortBar-holder">
              <div className="IndividualCategoriesPage-sideSortBar-priceSort">
                <select className="fa">
                  <option value="0">Popular</option>
                  <option value="fas fa-sort-up">Price &#xf161;</option>
                  <option value="fas fa-sort-amount-down-alt">
                    Price &#xf884;
                  </option>
                </select>
              </div>
              <button className="IndividualCategoriesPage-sideSortBar-filter">
                <i className="far fa-sort fa-1x">Sort</i>
              </button>
              <div
                className="IndividualCategoriesPage-sideSortBar-ratingSort"
                ref={IndividualCategoriesPageSideSortBarRatingSort}
              >
                <label>Rating:</label>
                <button className="IndividualCategoriesPage-sideSortBar-ratingSort-button">
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={"5"} />
                  </div>
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-label">
                    {/* <label>and Up</label> */}
                  </div>
                </button>
                <button className="IndividualCategoriesPage-sideSortBar-ratingSort-button">
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={"4"} />
                  </div>
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-label">
                    {/* <label>and Up</label> */}
                  </div>
                </button>
                <button className="IndividualCategoriesPage-sideSortBar-ratingSort-button">
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={"3"} />
                  </div>
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-label">
                    {/* <label>and Up</label> */}
                  </div>
                </button>
                <button className="IndividualCategoriesPage-sideSortBar-ratingSort-button">
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={"2"} />
                  </div>
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-label">
                    {/* <label>and Up</label> */}
                  </div>
                </button>
                <button className="IndividualCategoriesPage-sideSortBar-ratingSort-button">
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={"1"} />
                  </div>
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-label">
                    {/* <label>and Up</label> */}
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="IndividualCategoriesPage-productsHolder">
            {output}
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1>{categoryId}</h1>
      </React.Fragment>
    );
  }
};

const Product = ({ image, key }) => {
  return (
    <React.Fragment>
      <div className="IndividualCategoriesPage-product" key={key}>
        <img
          src={image}
          alt=""
          className="IndividualCategoriesPage-product-Image"
        />
        <div className="IndividualCategoriesPage-product-info">
          <p style={{ fontSize: "20px" }}>Product Name</p>
          <Rating n={"2.5"} numberOfPeople={"133"} key={key} />
          <p>
            Lorem Ipsum is a phrase that I do not understand, its probably
            something latin for how my cow stopped giving milk.
          </p>
          <div className="IndividualCategoriesPage-product-info-priceHolder">
            <p className="IndividualCategoriesPage-product-info-truePrice">
              $1699.69
            </p>
            <strike className="IndividualCategoriesPage-product-info-crossedPrice">
              $1999.69
            </strike>
          </div>
          <div className="IndividualCategoriesPage-product-buttonHolder">
            <button
              className="IndividualCategoriesPage-product-buttonHolder-addToCart"
              onClick={() => window.scrollTo(0, 0)}
            >
              Add to cart
            </button>
            <button className="IndividualCategoriesPage-product-buttonHolder-Buy">
              Buy
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IndividualCategoriesPage;
