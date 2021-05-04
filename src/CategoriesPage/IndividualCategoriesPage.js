import React from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import "./IndividualCategoriesPage.css";
import data from "../data.js";

import Rating from "../Components/Rating/Rating.js";

const IndividualCategoriesPage = () => {
  const { categoryId } = useParams();
  const { name, id, image } = data[categoryId];
  let output = [];
  for (let i = 0; i < data.length; i++) {
    output.push(<Product image={data[i].image} key={i} name={data[i].name} />);
  }
  return (
    <React.Fragment>
      <div className="IndividualCategoriesPage">
        <div className="IndividualCategoriesPage-mainTitle">
          <h2>{name}</h2>
        </div>
        <div className="IndividualCategoriesPage-sideSortBar">
          <div style={{ position: "fixed" }}>
            <div className="IndividualCategoriesPage-sideSortBar-priceSort"></div>
            <div className="IndividualCategoriesPage-sideSortBar-ratingSort"></div>
          </div>
        </div>
        <div className="IndividualCategoriesPage-productsHolder">{output}</div>
      </div>
    </React.Fragment>
  );
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
            <button className="IndividualCategoriesPage-product-buttonHolder-addToCart">
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
