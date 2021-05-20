import React from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import Slider from "react-slick";
import "./product.css";
import data from "../data.js";

const Product = () => {
  let { productID } = useParams();

  const settings = {
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
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
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
          <h1>{data[productID].name}</h1>
          <h1>${data[productID].currPrice}</h1>
          <strike>
            <h1>${data[productID].prevPrice}</h1>
          </strike>
        </div>
        <div className="productPageMainDiv-checkOutInfo">
          <button>Add to cart</button>
          <br />
          <br />
          <a href="https://ourworldindata.org/covid-vaccinations?country=NPL~OWID_WRL">
            Covid19
          </a>
          <button>BUY</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
