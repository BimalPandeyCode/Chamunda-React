import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import axios from "axios";

import "./IndividualCategoriesPage.css";
// import data from "../data.js";

import Rating from "../Components/Rating/Rating.js";
import AddedTocart from "../Components/addedToCart/addedTocart.js";

// redux
import { useSelector, useDispatch } from "react-redux";
import { increamentByValue } from "../redux/reducers/counterReducer.js";
import { createNewProductList } from "../redux/reducers/productReducer.js";

let PRODUCT_LOADING_API = "https://chamunda.herokuapp.com/productsLoad"; //!http://localhost:4000/productsLoad

const IndividualCategoriesPage = () => {
  //
  // !productList
  let data = useSelector((state) => state.productReducer.productList);
  let dispatch = useDispatch();
  //!Productlist end
  const { categoryId } = useParams();
  // const [data, setData] = useState([]);
  const [showSort, setShowSort] = useState(false);
  const [sortName, setSortName] = useState(<span>Popular</span>);
  const [sortingName, setSortingName] = useState("popular"); //this is for re rendering the products
  const [starRating, setStarRating] = useState(0);
  const [showRatingSortMobile, setShowRatingSortMobile] = useState(false);
  const [starRatingClickedMoile, setStarRatingClickedMobile] = useState(0);
  const [minMaxPrice, setMinMaxPrice] = useState([-Infinity, Infinity]);
  const [minMaxpriceMobile, setMinMaxPriceMobile] = useState(["", ""]);

  const [showMessages, setShowMessages] = useState([false, ""]);

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
    axios
      .get(PRODUCT_LOADING_API)
      .then((res) => {
        console.log(res.data);
        dispatch(createNewProductList({ productList: res.data }));
      })
      .catch((err) => console.log(err));
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
    // const { name } = data[categoryId];
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
    console.log([popular, priceDownToUp, priceUpToDown]);
    for (let i = 0; i < popular.length; i++) {
      if (
        popular[i].reviews.length >= starRating &&
        popular[i].currPrice <= minMaxPrice[1] &&
        popular[i].currPrice >= minMaxPrice[0]
      ) {
        outputPopular.push(
          <Product
            key={popular[i]._id}
            id={popular[i]._id}
            image={popular[i].otherImagesLink[0].main}
            keyid={i}
            name={popular[i].productName}
            rating={popular[i].reviews.length}
            noOfRating={popular[i].reviews.length}
            prevPrice={popular[i].prevprice}
            currPrice={popular[i].currPrice}
            showMessages={showMessages}
            setShowMessages={setShowMessages}
            noOfItems={popular[i].noOfItems}
          />
        );
      }
    }
    if (outputPopular.length === 0) {
      outputPopular.push(<Empty key={333} />);
    }
    for (let j = 0; j < priceUpToDown.length; j++) {
      if (
        priceUpToDown[j].rating >= starRating &&
        priceUpToDown[j].currPrice <= minMaxPrice[1] &&
        priceUpToDown[j].currPrice >= minMaxPrice[0]
      ) {
        outputPriceUp.push(
          <Product
            key={priceUpToDown[j]._id}
            id={priceUpToDown[j]._id}
            image={priceUpToDown[j].otherImagesLink[0].main}
            keyid={j}
            name={priceUpToDown[j].productName}
            rating={priceUpToDown[j].rating.length}
            noOfRating={priceUpToDown[j].rating.length}
            prevPrice={priceUpToDown[j].prevprice}
            currPrice={priceUpToDown[j].currPrice}
            showMessages={showMessages}
            setShowMessages={setShowMessages}
            noOfItems={priceUpToDown[j].noOfItems}
          />
        );
      }
    }
    if (outputPriceUp.length === 0) {
      outputPriceUp.push(<Empty key={444} />);
    }
    for (let k = 0; k < priceDownToUp.length; k++) {
      if (
        priceDownToUp[k].rating >= starRating &&
        priceDownToUp[k].currPrice <= minMaxPrice[1] &&
        priceDownToUp[k].currPrice >= minMaxPrice[0]
      ) {
        outputPriceDown.push(
          <Product
            key={priceDownToUp[k]._id}
            id={priceDownToUp[k]._id}
            image={priceDownToUp[k].otherImagesLink[0].main}
            keyid={k}
            name={priceDownToUp[k].productName}
            rating={priceDownToUp[k].rating.length}
            noOfRating={priceDownToUp[k].rating.length}
            prevPrice={priceDownToUp[k].prevprice}
            currPrice={priceDownToUp[k].currPrice}
            showMessages={showMessages}
            setShowMessages={setShowMessages}
            noOfItems={priceDownToUp[k].noOfItems}
          />
        );
      }
    }
    if (outputPriceDown.length === 0) {
      outputPriceDown.push(<Empty key={555} />);
    }

    if (showRatingSortMobile) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return (
      <React.Fragment>
        {showMessages[0] ? <AddedTocart messages={showMessages[1]} /> : <></>}
        {showRatingSortMobile ? (
          <div className="hidden-IndividualCategoriesPage-sideSortBar-filter-Div">
            <button
              className="hidden-IndividualCategoriesPage-sideSortBar-filter-exitButton"
              onClick={() =>
                setTimeout(() => {
                  setShowRatingSortMobile(!showRatingSortMobile);
                }, 0)
              }
            ></button>
            <div className="hidden-IndividualCategoriesPage-sideSortBar-filter-starRating">
              <button
                className="hidden-IndividualCategoriesPage-sideSortBar-filter-starRating-resetButton"
                onClick={() => {
                  setStarRating(0);
                  setMinMaxPrice([-Infinity, Infinity]);
                  setShowRatingSortMobile(!showRatingSortMobile);
                  setStarRatingClickedMobile(0);
                  setMinMaxPriceMobile(["", ""]);
                }}
              >
                Reset
              </button>
              <div className="hidden-IndividualCategoriesPage-sideSortBar-filter-starRating-ratingSort">
                <label>Rating:</label>
                <button
                  className="IndividualCategoriesPage-sideSortBar-ratingSort-button"
                  style={
                    starRatingClickedMoile === 5
                      ? { backgroundColor: "#b3bcff" }
                      : { backgroundColor: "none" }
                  }
                  onClick={() => {
                    setStarRating(5);
                    setShowRatingSortMobile(!showRatingSortMobile);
                    setStarRatingClickedMobile(5);
                  }}
                >
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={5} />
                  </div>
                </button>
                <button
                  className="IndividualCategoriesPage-sideSortBar-ratingSort-button"
                  style={
                    starRatingClickedMoile === 4
                      ? { backgroundColor: "#b3bcff" }
                      : { backgroundColor: "none" }
                  }
                  onClick={() => {
                    setStarRating(4);
                    setShowRatingSortMobile(!showRatingSortMobile);
                    setStarRatingClickedMobile(4);
                  }}
                >
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={4} />
                  </div>
                </button>
                <button
                  className="IndividualCategoriesPage-sideSortBar-ratingSort-button"
                  style={
                    starRatingClickedMoile === 3
                      ? { backgroundColor: "#b3bcff" }
                      : { backgroundColor: "none" }
                  }
                  onClick={() => {
                    setStarRating(3);
                    setShowRatingSortMobile(!showRatingSortMobile);
                    setStarRatingClickedMobile(3);
                  }}
                >
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={3} />
                  </div>
                </button>
                <button
                  className="IndividualCategoriesPage-sideSortBar-ratingSort-button"
                  style={
                    starRatingClickedMoile === 2
                      ? { backgroundColor: "#b3bcff" }
                      : { backgroundColor: "none" }
                  }
                  onClick={() => {
                    setStarRating(2);
                    setShowRatingSortMobile(!showRatingSortMobile);
                    setStarRatingClickedMobile(2);
                  }}
                >
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={2} />
                  </div>
                </button>
                <button
                  className="IndividualCategoriesPage-sideSortBar-ratingSort-button"
                  style={
                    starRatingClickedMoile === 1
                      ? { backgroundColor: "#b3bcff" }
                      : { backgroundColor: "none" }
                  }
                  onClick={() => {
                    setStarRating(1);
                    setShowRatingSortMobile(!showRatingSortMobile);
                    setStarRatingClickedMobile(1);
                  }}
                >
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={1} />
                  </div>
                </button>
              </div>
              <div className="hidden-IndividualCategoriesPage-sideSortBar-filter-min-maxPrice">
                <span className="IndividualCategoriesPage-sideSortBar-min-maxPrice-label">
                  Price:
                </span>
                <input
                  type="number"
                  placeholder="min"
                  className="IndividualCategoriesPage-sideSortBar-min-maxPrice-MinimumPrice"
                  id="minPriceMobile"
                  value={minMaxpriceMobile[0]}
                  onChange={(min) =>
                    setMinMaxPriceMobile([
                      min.target.value,
                      minMaxpriceMobile[1],
                    ])
                  }
                />
                <input
                  type="number"
                  placeholder="max"
                  className="IndividualCategoriesPage-sideSortBar-min-maxPrice-MaximumPrice"
                  id="maxPriceMobile"
                  value={minMaxpriceMobile[1]}
                  onChange={(max) =>
                    setMinMaxPriceMobile([
                      minMaxpriceMobile[0],
                      max.target.value,
                    ])
                  }
                />
                <button
                  className="IndividualCategoriesPage-sideSortBar-min-maxPrice-GoButton"
                  onClick={() => {
                    let minPriceMobile = parseFloat(
                      document.getElementById("minPriceMobile").value
                    );
                    let maxPriceMobile = parseFloat(
                      document.getElementById("maxPriceMobile").value
                    );
                    if (
                      minPriceMobile <= maxPriceMobile &&
                      minPriceMobile !== undefined &&
                      maxPriceMobile !== undefined
                    ) {
                      setMinMaxPrice([minPriceMobile, maxPriceMobile]);
                      setShowRatingSortMobile(!showRatingSortMobile);
                    }
                  }}
                >
                  <i
                    id="IndividualCategoriesPage-sideSortBar-min-maxPrice-GoButton"
                    className="fas fa-chevron-circle-right"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="IndividualCategoriesPage">
          <div className="IndividualCategoriesPage-mainTitle">
            <h3>Name</h3>
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
              <button
                className="IndividualCategoriesPage-sideSortBar-filter"
                onClick={() => setShowRatingSortMobile(!showRatingSortMobile)}
              >
                <i className="far fa-sort fa-1x">Sort</i>
              </button>

              <div className="IndividualCategoriesPage-sideSortBar-ratingSort">
                <label>Rating:</label>
                <button
                  className="IndividualCategoriesPage-sideSortBar-ratingSort-button"
                  id="IndividualCategoriesPage-sideSortBar-ratingSort-button5"
                  style={
                    starRatingClickedMoile === 5
                      ? { backgroundColor: "#b3bcff" }
                      : { backgroundColor: "#b3bcff00" }
                  }
                  onClick={() => {
                    setStarRating(5);
                    setStarRatingClickedMobile(5);
                  }}
                >
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={5} />
                  </div>
                </button>
                <button
                  className="IndividualCategoriesPage-sideSortBar-ratingSort-button"
                  id="IndividualCategoriesPage-sideSortBar-ratingSort-button4"
                  style={
                    starRatingClickedMoile === 4
                      ? { backgroundColor: "#b3bcff" }
                      : { backgroundColor: "#b3bcff00" }
                  }
                  onClick={() => {
                    setStarRating(4);
                    setStarRatingClickedMobile(4);
                  }}
                >
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={4} />
                  </div>
                </button>
                <button
                  className="IndividualCategoriesPage-sideSortBar-ratingSort-button"
                  id="IndividualCategoriesPage-sideSortBar-ratingSort-button3"
                  style={
                    starRatingClickedMoile === 3
                      ? { backgroundColor: "#b3bcff" }
                      : { backgroundColor: "#b3bcff00" }
                  }
                  onClick={() => {
                    setStarRating(3);
                    setStarRatingClickedMobile(3);
                  }}
                >
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={3} />
                  </div>
                </button>
                <button
                  className="IndividualCategoriesPage-sideSortBar-ratingSort-button"
                  id="IndividualCategoriesPage-sideSortBar-ratingSort-button2"
                  style={
                    starRatingClickedMoile === 2
                      ? { backgroundColor: "#b3bcff" }
                      : { backgroundColor: "#b3bcff00" }
                  }
                  onClick={() => {
                    setStarRating(2);
                    setStarRatingClickedMobile(2);
                  }}
                >
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={2} />
                  </div>
                </button>
                <button
                  className="IndividualCategoriesPage-sideSortBar-ratingSort-button"
                  id="IndividualCategoriesPage-sideSortBar-ratingSort-button1"
                  style={
                    starRatingClickedMoile === 1
                      ? { backgroundColor: "#b3bcff" }
                      : { backgroundColor: "#b3bcff00" }
                  }
                  onClick={() => {
                    setStarRating(1);
                    setStarRatingClickedMobile(1);
                  }}
                >
                  <div className="IndividualCategoriesPage-sideSortBar-ratingSort-button-rating">
                    <Rating n={1} />
                  </div>
                </button>
              </div>
              <div className="IndividualCategoriesPage-sideSortBar-min-maxPrice">
                <span className="IndividualCategoriesPage-sideSortBar-min-maxPrice-label">
                  Price:
                </span>
                <input
                  type="number"
                  placeholder="min"
                  className="IndividualCategoriesPage-sideSortBar-min-maxPrice-MinimumPrice"
                  onChange={(min) =>
                    setMinMaxPriceMobile([
                      min.target.value,
                      minMaxpriceMobile[1],
                    ])
                  }
                  value={minMaxpriceMobile[0]}
                  id="minPrice"
                />
                <input
                  type="number"
                  placeholder="max"
                  className="IndividualCategoriesPage-sideSortBar-min-maxPrice-MaximumPrice"
                  onChange={(max) =>
                    setMinMaxPriceMobile([
                      minMaxpriceMobile[0],
                      max.target.value,
                    ])
                  }
                  value={minMaxpriceMobile[1]}
                  id="maxPrice"
                />
                <button
                  className="IndividualCategoriesPage-sideSortBar-min-maxPrice-GoButton"
                  onClick={() => {
                    let minPrice = parseFloat(
                      document.getElementById("minPrice").value
                    );
                    let maxPrice = parseFloat(
                      document.getElementById("maxPrice").value
                    );
                    if (
                      minPrice <= maxPrice &&
                      minPrice !== undefined &&
                      maxPrice !== undefined
                    ) {
                      setMinMaxPrice([minPrice, maxPrice]);
                    }
                  }}
                >
                  <i
                    id="IndividualCategoriesPage-sideSortBar-min-maxPrice-GoButton"
                    className="fas fa-chevron-circle-right"
                  ></i>
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
  id,
  name,
  image,
  keyid,
  rating,
  noOfRating,
  prevPrice,
  currPrice,
  noOfItems,
  showMessages,
  setShowMessages,
}) => {
  let cartInfo = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className="IndividualCategoriesPage-product" key={keyid}>
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt=""
          className="IndividualCategoriesPage-product-Image"
        />
      </Link>
      <Link
        to={`/product/${id}`}
        className="IndividualCategoriesPage-product-info"
      >
        <p style={{ fontSize: "20px" }}>{name}</p>
        <Rating
          n={rating}
          numberOfPeople={noOfRating}
          key={keyid}
          keyid={keyid}
        />
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
            {(((prevPrice - currPrice) * 100) / prevPrice).toFixed(2) + "% OFF"}
          </p>
        </div>
      </Link>

      <div
        style={{
          width: "100%",
          display: "grid",
          placeItems: "center",
          marginBottom: "10px",
        }}
      >
        {noOfItems > 0 ? (
          <span
            style={{
              color: "green",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            In stock
          </span>
        ) : (
          <span style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
            Temporarily Unavailable
          </span>
        )}
      </div>
      {/* <div className="IndividualCategoriesPage-product-buttonHolder">
          <button
            className="IndividualCategoriesPage-product-buttonHolder-addToCart"
            onClick={() => {
              if (!cartInfo.productId.includes(parseInt(id))) {
                dispatch(
                  increamentByValue({
                    productId: { id: parseInt(id), noOfItems: 1 },
                    allProductId: parseInt(id),
                    noOfCart: 1,
                  })
                );
                setShowMessages([true, "Added to cart"]);
                setTimeout(() => {
                  setShowMessages(false);
                }, 2000);
              } else {
                setShowMessages([true, "already added to cart"]);
                setTimeout(() => {
                  setShowMessages(false);
                }, 2000);
                <></>;
              }
            }}
          >
            {cartInfo.allProductId.includes(parseInt(id))
              ? "Go to cart"
              : "Add to cart"}
          </button>
          <button className="IndividualCategoriesPage-product-buttonHolder-Buy">
            Buy
          </button>
        </div> */}
    </div>
  );
};

const Empty = () => {
  return (
    <span
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
      }}
      key="9999"
    >
      <p>
        We've searched far and wide but we can't seem to find what you are
        looking for...
      </p>
      <i className="fas fa-box-open fa-2x">Empty</i>
    </span>
  );
};

export default IndividualCategoriesPage;
