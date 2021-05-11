import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import "./IndividualCategoriesPage.css";
import data from "../data.js";

import Rating from "../Components/Rating/Rating.js";

const IndividualCategoriesPage = () => {
  const [showSort, setShowSort] = useState(false);
  const [sortName, setSortName] = useState(<span>Popular</span>);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      // Function for click event
      function handleOutsideClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowSort(false);
          // alert("you just clicked outside of box!");
        }
      }

      // Adding click event listener
      document.addEventListener("click", handleOutsideClick);
    }, [ref]);
  }
  let sortClickEventListener = useRef(null);
  useOutsideAlerter(sortClickEventListener);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { categoryId } = useParams();

  const handleSetSortName = (input) => {
    if (input === "popular") {
      setSortName(<span className="fas">Popular</span>);
      setShowSort(!showSort);
    } else if (input === "priceUp") {
      setSortName(
        <span className="fas">Price&#xf161;</span>
        // <i className="fas fa-sort-amount-down"></i>
      );
      setShowSort(!showSort);
    } else if (input === "priceDown") {
      setSortName(
        <span className="fas">Price&#xf884;</span>
        // <i className="fas fa-sort-amount-down"></i>
      );
      setShowSort(!showSort);
    }
  };

  if (categoryId < data.length) {
    const { name } = data[categoryId];
    let output = [];
    for (let i = 0; i < data.length; i++) {
      output.push(
        <Product
          image={data[i].image}
          key={i}
          name={data[i].name}
          rating={data[i].rating}
          noOfRating={data[i].noOfRateing}
          prevPrice={data[i].prevPrice}
          currPrice={data[i].currPrice}
        />
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
              <div
                className="PriceSortHolderButton-Div"
                style={{ gridArea: "priceSort" }}
                ref={sortClickEventListener}
              >
                <button
                  className="fa PriceSortHolderButton"
                  onClick={() => setShowSort(!showSort)}
                >
                  {sortName} {showSort ? <>&#xf0de;</> : <>&#xf0dd;</>}
                </button>
                {showSort ? (
                  <React.Fragment>
                    <div className="PriceSortHolder">
                      <button
                        className="PriceSortHolderButton"
                        onClick={() => handleSetSortName("popular")}
                      >
                        Popular
                      </button>
                      <button
                        className="PriceSortHolderButton"
                        onClick={() => handleSetSortName("priceDown")}
                      >
                        Price<i className="fas fa-sort-amount-down-alt"></i>
                      </button>
                      <button
                        className="PriceSortHolderButton"
                        onClick={() => handleSetSortName("priceUp")}
                      >
                        Price<i className="fas fa-sort-amount-up"></i>
                      </button>
                    </div>
                  </React.Fragment>
                ) : (
                  <></>
                )}
              </div>
              {/* <div className="IndividualCategoriesPage-sideSortBar-priceSort">
                <select className="fa">
                  <option value="0">Popular</option>
                  <option value="fas fa-sort-up">Price &#xf161;</option>
                  <option value="fas fa-sort-amount-down-alt">
                    Price &#xf884;
                  </option>
                </select>
              </div> */}
              <button className="IndividualCategoriesPage-sideSortBar-filter">
                <i className="far fa-sort fa-1x">Sort</i>
              </button>
              <div className="IndividualCategoriesPage-sideSortBar-ratingSort">
                <label>Rating:</label>
                <button className="IndividualCategoriesPage-sideSortBar-ratingSort-button">
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={"5"} />
                  </div>
                </button>
                <button className="IndividualCategoriesPage-sideSortBar-ratingSort-button">
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={"4"} />
                  </div>
                </button>
                <button className="IndividualCategoriesPage-sideSortBar-ratingSort-button">
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={"3"} />
                  </div>
                </button>
                <button className="IndividualCategoriesPage-sideSortBar-ratingSort-button">
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={"2"} />
                  </div>
                </button>
                <button className="IndividualCategoriesPage-sideSortBar-ratingSort-button">
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={"1"} />
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

const Product = ({ image, key, rating, noOfRating, prevPrice, currPrice }) => {
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
          <Rating n={rating} numberOfPeople={noOfRating} key={key} />
          <p>
            Lorem Ipsum is a phrase that I do not understand, its probably
            something latin for how my cow stopped giving milk.
          </p>
          <div className="IndividualCategoriesPage-product-info-priceHolder">
            <p className="IndividualCategoriesPage-product-info-truePrice">
              ${prevPrice}
            </p>
            <strike className="IndividualCategoriesPage-product-info-crossedPrice">
              ${currPrice}
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

const PriceSort = (setSortName) => {
  return (
    <React.Fragment>
      <div className="PriceSortHolder">
        <button
          className="PriceSortHolderButton"
          onClick={() => setSortName("Popular")}
        >
          Popular
        </button>
        <button
          className="PriceSortHolderButton"
          onClick={() => setSortName("Not so popular")}
        >
          Price<i className="fas fa-sort-amount-down"></i>
        </button>
        <button className="PriceSortHolderButton">
          Price<i className="fas fa-sort-amount-up"></i>
        </button>
      </div>
    </React.Fragment>
  );
};

export default IndividualCategoriesPage;
