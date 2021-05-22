import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import Slider from "react-slick";
import "./product.css";
import data from "../data.js";
import Rating from "../Components/Rating/Rating.js";
const Product = () => {
  let { productID } = useParams();
  const imgDimension = (imgSrc) => {
    // Create new offscreen image to test
    const theImage = new Image();
    theImage.src = imgSrc;
    // Get accurate measurements from that.
    const imageWidth = theImage.width;
    const imageHeight = theImage.height;
    // Create an object to save the image width and height
    const imgDimensions = { width: imageWidth, height: imageHeight };
    // Return the result
    return imgDimensions;
  };
  const [currentImage, setCurrentImage] = useState([
    data[productID].otherImages[0],
    0,
    imgDimension(data[productID].otherImages[0]).width,
    imgDimension(data[productID].otherImages[0]).height,
  ]);
  const props = {
    width: "300",
    img: currentImage[0],
    scale: 1,
    zoomLensStyle: "opacity: 0.4;background-color: gray;",
  };
  const ImagesPicker = () => {
    let output = [];

    for (let i = 0; i < data[productID].otherImages.length; i++) {
      output.push(
        <img
          onMouseOver={() => {
            setCurrentImage([
              data[productID].otherImages[i],
              i,
              imgDimension(data[productID].otherImages[i]).width,
              imgDimension(data[productID].otherImages[i]).height,
            ]);
            console.log(currentImage);
          }}
          style={
            currentImage[1] === i
              ? { boxShadow: "0px 0px 3px 1px #1410FF" }
              : { border: "1px solid black" }
          }
          className="productPageMainDiv-productImages-imagesPicker-image"
          src={data[productID].otherImages[i]}
          alt=""
        />
      );
    }
    return output;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let multiplyFactor = 2;
  if (currentImage[2] > currentImage[3]) {
    multiplyFactor = 0.7;
  } else {
    multiplyFactor = 1.5;
  }
  return (
    <React.Fragment>
      <div className="productPageMainDiv">
        <div className="productPageMainDiv-productImages">
          <div className="productPageMainDiv-productImages-images">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: currentImage[0],
                  imageClassName:
                    "productPageMainDiv-productImages-images-image",
                },
                largeImage: {
                  src: currentImage[0],
                  width: currentImage[2] * multiplyFactor,
                  height: currentImage[3] * multiplyFactor,
                },
                isHintEnabled: true,
                shouldUsePositiveSpaceLens: true,
              }}
            />
            {/* <img
              className="productPageMainDiv-productImages-images-image"
              src={currentImage[0]}
              alt=""
            /> */}
          </div>
          <div className="productPageMainDiv-productImages-imagesPicker">
            <div className="productPageMainDiv-productImages-imagesPicker-div">
              <ImagesPicker />
            </div>
          </div>
        </div>
        {/* <Slider {...settings}>
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
        </Slider> */}
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
            <br />
          </div>
        </div>
        <div className="productPageMainDiv-checkOutInfo">
          <button>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to cart
            </a>
          </button>
          <br />
          <br />
          {/* <a href="https://react-slick.neostack.com/docs/example/dynamic-slides/">
            react js
          </a> */}
          <button>
            <a
              href="https://ourworldindata.org/covid-vaccinations?country=NPL~OWID_WRL"
              target="_blank"
              rel="noopener noreferrer"
            >
              BUY
            </a>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
