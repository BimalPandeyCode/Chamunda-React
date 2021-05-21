import React, { useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import Slider from "react-slick";
import "./product.css";
import data from "../data.js";
import Rating from "../Components/Rating/Rating.js";
const Product = () => {
  let { productID } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let settings = {
    customPaging: function (i) {
      return (
        <a href="##" className="productPageMainDiv-imageSlider-dots">
          <img
            className="productPageMainDiv-imageSlider-dots-image"
            src={data[productID].otherImages[i]}
            alt=""
          />
        </a>
      );
    },
    dots: true,
    // adaptiveHeight: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <React.Fragment>
      <div className="productPageMainDiv">
        <Slider {...settings}>
          <div>
            <img
              src={data[productID].otherImages[0]}
              alt=""
              className="productPageMainDiv-imageSlider-images"
            />
          </div>
          <div>
            <img
              src={data[productID].otherImages[1]}
              alt=""
              className="productPageMainDiv-imageSlider-images"
            />
          </div>
          <div>
            <img
              src={data[productID].otherImages[2]}
              alt=""
              className="productPageMainDiv-imageSlider-images"
            />
          </div>
        </Slider>
        <div className="productPageMainDiv-infoContainer">
          <div className="productPageMainDiv-infoContainer-div">
            <h1>{data[productID].name}</h1>
            <Rating
              n={data[productID].rating}
              numberOfPeople={data[productID].noOfRateing}
            />
            <p>Brand: No Brand</p>
            <div className="productPageMainDiv-infoContainer-div-priceInfo">
              <div className="productPageMainDiv-infoContainer-div-priceInfo-currPrice">
                <h2>${data[productID].currPrice}</h2>
              </div>
              <strike className="productPageMainDiv-infoContainer-div-priceInfo-prevPrice">
                <h3>${data[productID].prevPrice}</h3>
              </strike>
              <div>
                <h4>
                  {Number.parseFloat(
                    ((data[productID].prevPrice - data[productID].currPrice) *
                      100) /
                      data[productID].prevPrice
                  ).toFixed(2)}
                  % OFF
                </h4>
              </div>
            </div>

            <p>{data[productID].desc}</p>
          </div>
        </div>
        <div className="productPageMainDiv-checkOutInfo">
          <button>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              Add to cart
            </a>
          </button>
          <br />
          <br />

          {/* <a href="https://react-slick.neostack.com/docs/example/dynamic-slides/">
            react js
          </a> */}
          <button>
            <a href="https://ourworldindata.org/covid-vaccinations?country=NPL~OWID_WRL">
              BUY
            </a>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
