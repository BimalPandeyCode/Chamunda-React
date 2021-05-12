import React, { useEffect, useRef, useState, useReducer } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import "./IndividualCategoriesPage.css";
import data from "../data.js";

import Rating from "../Components/Rating/Rating.js";

const IndividualCategoriesPage = () => {
  const { categoryId } = useParams();

  const [showSort, setShowSort] = useState(false);
  const [sortName, setSortName] = useState(<span>Popular</span>);
  const [sortingName, setSortingName] = useState("popular"); //this is for re rendering the products
  const [starRating, setStarRating] = useState(0);
  const [showRatingSort, setShowRatingSort] = useState(false);

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

  const handleSetSortName = (input) => {
    if (input === "popular") {
      setSortName(<span className="fas">Popular</span>);
      setShowSort(!showSort);
      setSortingName("popular");
    } else if (input === "priceUp") {
      setSortName(
        <span className="fas">Price&#xf161;</span>
        // <i className="fas fa-sort-amount-down"></i>
      );
      setShowSort(!showSort);
      setSortingName("priceUp");
    } else if (input === "priceDown") {
      setSortName(
        <span className="fas">Price&#xf884;</span>
        // <i className="fas fa-sort-amount-down"></i>
      );
      setShowSort(!showSort);
      setSortingName("priceDown");
    }
  };

  if (categoryId < data.length) {
    const { name } = data[categoryId];
    let outputPopular = [];
    let outputPriceUp = [];
    let outputPriceDown = [];
    const copyData = JSON.parse(JSON.stringify(data));
    const copyDataPriceUp = JSON.parse(JSON.stringify(data));
    const copyDataPriceDown = JSON.parse(JSON.stringify(data));
    const popular = copyData.sort((a, b) => {
      return b.rating - a.rating;
    });
    const priceDownToUp = copyDataPriceDown.sort((a, b) => {
      return a.currPrice - b.currPrice;
    });
    const priceUpToDown = copyDataPriceUp.sort((a, b) => {
      return b.currPrice - a.currPrice;
    });
    for (let i = 0; i < popular.length; i++) {
      if (popular[i].rating >= starRating) {
        outputPopular.push(
          <Product
            image={popular[i].image}
            key={i}
            name={popular[i].name}
            rating={popular[i].rating}
            noOfRating={popular[i].noOfRateing}
            prevPrice={popular[i].prevPrice}
            currPrice={popular[i].currPrice}
          />
        );
      }
    }
    if (outputPopular.length === 0) {
      outputPopular.push(<Empty />);
    }
    for (let j = 0; j < priceUpToDown.length; j++) {
      if (priceUpToDown[j].rating >= starRating) {
        outputPriceUp.push(
          <Product
            image={priceUpToDown[j].image}
            key={j}
            name={priceUpToDown[j].name}
            rating={priceUpToDown[j].rating}
            noOfRating={priceUpToDown[j].noOfRateing}
            prevPrice={priceUpToDown[j].prevPrice}
            currPrice={priceUpToDown[j].currPrice}
          />
        );
      }
    }
    if (outputPriceUp.length === 0) {
      outputPriceUp.push(<Empty />);
    }
    for (let k = 0; k < priceDownToUp.length; k++) {
      if (priceDownToUp[k].rating >= starRating) {
        outputPriceDown.push(
          <Product
            image={priceDownToUp[k].image}
            key={k}
            name={priceDownToUp[k].name}
            rating={priceDownToUp[k].rating}
            noOfRating={priceDownToUp[k].noOfRateing}
            prevPrice={priceDownToUp[k].prevPrice}
            currPrice={priceDownToUp[k].currPrice}
          />
        );
      }
    }
    if (outputPriceDown.length === 0) {
      outputPriceDown.push(<Empty />);
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
              {/* <div className="hidden-IndividualCategoriesPage-sideSortBar-filter-Div">
                <button className="hidden-IndividualCategoriesPage-sideSortBar-filter-exitButton">
                  Button here
                </button>
                <div className="hidden-IndividualCategoriesPage-sideSortBar-filter-starRating">
                  ratings here
                </div>
              </div> */}
              <div className="IndividualCategoriesPage-sideSortBar-ratingSort">
                <label>Rating:</label>
                <button
                  className="IndividualCategoriesPage-sideSortBar-ratingSort-button"
                  onClick={() => setStarRating(5)}
                >
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={5} />
                  </div>
                </button>
                <button
                  className="IndividualCategoriesPage-sideSortBar-ratingSort-button"
                  onClick={() => setStarRating(4)}
                >
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={4} />
                  </div>
                </button>
                <button
                  className="IndividualCategoriesPage-sideSortBar-ratingSort-button"
                  onClick={() => setStarRating(3)}
                >
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={3} />
                  </div>
                </button>
                <button
                  className="IndividualCategoriesPage-sideSortBar-ratingSort-button"
                  onClick={() => setStarRating(2)}
                >
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={2} />
                  </div>
                </button>
                <button
                  className="IndividualCategoriesPage-sideSortBar-ratingSort-button"
                  onClick={() => setStarRating(1)}
                >
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={1} />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="IndividualCategoriesPage-productsHolder">
            {sortingName === "popular" ? (
              outputPopular
            ) : sortingName === "priceDown" ? (
              outputPriceDown
            ) : sortingName === "priceUp" ? (
              outputPriceUp
            ) : (
              <></>
            )}
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

const Product = ({
  name,
  image,
  key,
  rating,
  noOfRating,
  prevPrice,
  currPrice,
}) => {
  return (
    <React.Fragment>
      <div className="IndividualCategoriesPage-product" key={key}>
        <img
          src={image}
          alt=""
          className="IndividualCategoriesPage-product-Image"
        />
        <div className="IndividualCategoriesPage-product-info">
          <p style={{ fontSize: "20px" }}>{name}</p>
          <Rating n={rating} numberOfPeople={noOfRating} key={key} />
          <p>
            Lorem Ipsum is a phrase that I do not understand, its probably
            something latin for how my cow stopped giving milk.
          </p>
          <div className="IndividualCategoriesPage-product-info-priceHolder">
            <p className="IndividualCategoriesPage-product-info-truePrice">
              ${currPrice}
            </p>
            <strike className="IndividualCategoriesPage-product-info-crossedPrice">
              ${prevPrice}
            </strike>
            <p className="IndividualCategoriesPage-product-info-percentage">
              {(((prevPrice - currPrice) * 100) / prevPrice).toFixed(2) +
                "% OFF"}
            </p>
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

const Empty = () => {
  return (
    <>
      <span
        style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}
      >
        We've searched far and wide but we can't seem to find what you are
        looking for...
        <i className="fas fa-box-open fa-3x"></i>
      </span>
    </>
  );
};

// const PriceSort = (setSortName) => {
//   return (
//     <React.Fragment>
//       <div className="PriceSortHolder">
//         <button
//           className="PriceSortHolderButton"
//           onClick={() => setSortName("Popular")}
//         >
//           Popular
//         </button>
//         <button
//           className="PriceSortHolderButton"
//           onClick={() => setSortName("Not so popular")}
//         >
//           Price<i className="fas fa-sort-amount-down"></i>
//         </button>
//         <button className="PriceSortHolderButton">
//           Price<i className="fas fa-sort-amount-up"></i>
//         </button>
//       </div>
//     </React.Fragment>
//   );
// };

export default IndividualCategoriesPage;
