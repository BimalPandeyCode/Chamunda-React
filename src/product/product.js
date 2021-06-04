import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams, Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import "./product.css";
import data from "../data.js";
import Rating from "../Components/Rating/Rating.js";
import AddedTocart from "../Components/addedToCart/addedTocart.js";

// redux
import { useSelector, useDispatch } from "react-redux";
import { increamentByValue } from "../redux/reducers/counterReducer.js";

const Product = () => {
  let { productID } = useParams();
  productID = parseInt(productID);
  let cartInfo = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  const imgDimension = (imgSrc) => {
    // Create new offscreen image to test
    const theImage = new Image();
    theImage.src = imgSrc;
    // Get accurate measurements from that.
    const imageWidth = theImage.naturalWidth;
    const imageHeight = theImage.naturalHeight;
    // Create an object to save the image width and height
    const imgDimensions = { width: imageWidth, height: imageHeight };
    // Return the result
    return imgDimensions;
  };
  const [noOfItems, setNoOfItems] = useState(1);
  const [currentImage, setCurrentImage] = useState([
    data[productID].otherImages[0],
    0,
    imgDimension(data[productID].otherImages[0]).width,
    imgDimension(data[productID].otherImages[0]).height,
  ]);
  const [seeMore, setSeeMore] = useState(new Array(1).fill(false));
  const [reply, setReply] = useState([false, ""]);
  const [showMessages, setShowMessages] = useState([false, ""]);
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
            // console.log(currentImage);
          }}
          style={
            currentImage[1] === i
              ? { boxShadow: "0px 0px 3px 1px #1410FF" }
              : { border: "1px solid black" }
          }
          className="productPageMainDiv-productImages-imagesPicker-image"
          src={data[productID].otherImages[i]}
          alt=""
          key={i}
        />
      );
    }
    return output;
  };
  const ProductDescription = () => {
    let output = [];
    for (const key in data[productID].description) {
      output.push(
        <tr>
          {
            <td className="productPageMainDiv-infoContainer-div-tbody-key">
              {key}:
            </td>
          }
          {
            <td className="productPageMainDiv-infoContainer-div-tbody-value">
              {data[productID].description[key] === ""
                ? "No Data"
                : data[productID].description[key]}
            </td>
          }
        </tr>
      );
    }
    return output;
  };

  const Questions = () => {
    let output = [];
    const AnswerOutput = ({ eachConv }) => {
      let j = 100;
      let output = [];
      eachConv.A.forEach((element) => {
        let [nowMonth, nowDay, nowYear] = new Date()
          .toLocaleDateString("en-Np")
          .split("/");
        let [nowHour, nowMin, nowSec] = new Date()
          .toLocaleTimeString("en-Np")
          .split(/:| /);
        let AMorPM = element.date.toLocaleTimeString("en-Np").split(" ")[1];
        if (AMorPM === "PM") {
          nowHour = parseInt(nowHour) + 12;
        }
        //
        let [postMonth, postDay, postYear] = element.date
          .toLocaleDateString("en-Np")
          .split("/");
        let [postHour, postMin, postSec] = element.date
          .toLocaleTimeString("en-Np")
          .split(/:| /);
        AMorPM = element.date.toLocaleTimeString("en-Np").split(" ")[1];
        if (AMorPM === "PM") {
          postHour = parseInt(postHour) + 12;
        }
        output.push(
          <div
            className="productPageMainDiv-questionsContainer-eachConvContainer-answerDiv"
            key={j}
          >
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="productPageMainDiv-questionsContainer-eachConvContainer-answerDiv-photo"
            />
            <h4 className="productPageMainDiv-questionsContainer-eachConvContainer-answerDiv-name">
              {element.name}
            </h4>
            <div className="productPageMainDiv-questionsContainer-eachConvContainer-answerDiv-question-div">
              <p className="productPageMainDiv-questionsContainer-eachConvContainer-answerDiv-question">
                {element.Answer}
              </p>
            </div>
            <div className="productPageMainDiv-questionsContainer-eachConvContainer-answerDiv-date-div">
              <p className="productPageMainDiv-questionsContainer-eachConvContainer-answerDiv-date">
                {parseInt(postYear) === parseInt(nowYear)
                  ? parseInt(postMonth) === parseInt(nowMonth)
                    ? parseInt(postDay) === parseInt(nowDay)
                      ? parseInt(postHour) === parseInt(nowHour)
                        ? parseInt(postMin) === parseInt(nowMin)
                          ? parseInt(postSec) === parseInt(nowSec)
                            ? "Just now"
                            : `${nowSec - parseInt(postSec)} sec`
                          : `${nowMin - parseInt(postMin)} min`
                        : `${nowHour - parseInt(postHour)} h`
                      : `${nowDay - parseInt(postDay)} d`
                    : `${nowMonth - parseInt(postMonth)} mon`
                  : `${nowYear - parseInt(postYear)} y`}
              </p>
            </div>
          </div>
        );
        j++;
      });
      return output;
    };
    let i = 1000;
    data[0].Questions.forEach((eachConv, index) => {
      let [nowMonth, nowDay, nowYear] = new Date()
        .toLocaleDateString("en-Np")
        .split("/");
      let [nowHour, nowMin, nowSec] = new Date()
        .toLocaleTimeString("en-Np")
        .split(/:| /);
      let AMorPM = eachConv.Q.date.toLocaleTimeString("en-Np").split(" ")[1];
      if (AMorPM === "PM") {
        nowHour = parseInt(nowHour) + 12;
      }
      //
      let [postMonth, postDay, postYear] = eachConv.Q.date
        .toLocaleDateString("en-Np")
        .split("/");
      let [postHour, postMin, postSec] = eachConv.Q.date
        .toLocaleTimeString("en-Np")
        .split(/:| /);
      AMorPM = eachConv.Q.date.toLocaleTimeString("en-Np").split(" ")[1];
      if (AMorPM === "PM") {
        postHour = parseInt(postHour) + 12;
      }
      output.push(
        <React.Fragment key={i}>
          <div className="productPageMainDiv-questionsContainer-eachConvContainer-questionDiv">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="productPageMainDiv-questionsContainer-eachConvContainer-questionDiv-photo"
            />
            <h4 className="productPageMainDiv-questionsContainer-eachConvContainer-questionDiv-name">
              {eachConv.Q.name}
            </h4>
            <div className="productPageMainDiv-questionsContainer-eachConvContainer-questionDiv-question-div">
              <p className="productPageMainDiv-questionsContainer-eachConvContainer-questionDiv-question">
                {eachConv.Q.Question}
              </p>
            </div>
            <div className="productPageMainDiv-questionsContainer-eachConvContainer-questionDiv-date-div">
              <p className="productPageMainDiv-questionsContainer-eachConvContainer-questionDiv-date">
                {parseInt(postYear) === parseInt(nowYear)
                  ? parseInt(postMonth) === parseInt(nowMonth)
                    ? parseInt(postDay) === parseInt(nowDay)
                      ? parseInt(postHour) === parseInt(nowHour)
                        ? parseInt(postMin) === parseInt(nowMin)
                          ? parseInt(postSec) === parseInt(nowSec)
                            ? "Just now"
                            : `${nowSec - parseInt(postSec)} sec`
                          : `${nowMin - parseInt(postMin)} min`
                        : `${nowHour - parseInt(postHour)} h`
                      : `${nowDay - parseInt(postDay)} d`
                    : `${nowMonth - parseInt(postMonth)} mon`
                  : `${nowYear - parseInt(postYear)} y`}
              </p>
            </div>
          </div>
          <div className="productPageMainDiv-questionsContainer-eachConvContainer-questionDiv-reply-div">
            <button
              className="productPageMainDiv-questionsContainer-eachConvContainer-questionDiv-seeMore"
              onClick={() => {
                let copy = JSON.parse(JSON.stringify(seeMore));
                copy[index] = !copy[index];
                setSeeMore(copy);
              }}
            >
              {`see ${
                seeMore[index] === true ? "less" : `more (${eachConv.A.length})`
              } `}
            </button>
            <button
              className="productPageMainDiv-questionsContainer-eachConvContainer-questionDiv-reply"
              onClick={() => {
                setReply([true, eachConv.Q.Question]);
                document
                  .getElementsByClassName(
                    "productPageMainDiv-questionsContainer-questionsSearchBox-input"
                  )[0]
                  .focus();
              }}
            >
              reply
            </button>
          </div>
          {seeMore[index] === true ? (
            <AnswerOutput eachConv={eachConv} />
          ) : (
            <></>
          )}
        </React.Fragment>
      );
      i++;
    });
    return output;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementsByClassName(
      "productPageMainDiv-productImages-images-image"
    )[0].style.position = "sticky";
    setSeeMore(new Array(data[0].Questions.length).fill(false));
  }, []);
  let multiplyFactor = 2;
  if (currentImage[2] > currentImage[3]) {
    if (currentImage[3] < 300) {
      multiplyFactor = 1.5;
    } else {
      multiplyFactor = 1;
    }
  } else {
    multiplyFactor = 2;
  }

  return (
    <React.Fragment>
      {showMessages[0] ? <AddedTocart messages={showMessages[1]} /> : <></>}
      <div className="productPageMainDiv">
        <div className="productPageMainDiv-productImages">
          <div className="productPageMainDiv-productImages-images">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: currentImage[0],
                },
                largeImage: {
                  src: currentImage[0],
                  width: currentImage[2] * multiplyFactor,
                  height: currentImage[3] * multiplyFactor,
                },
                isHintEnabled: false,
                shouldUsePositiveSpaceLens: false,
                className: "productPageMainDiv-productImages-images-image",
                isActivatedOnTouch: false,
              }}
            />
          </div>
          <div className="productPageMainDiv-productImages-imagesPicker">
            <div className="productPageMainDiv-productImages-imagesPicker-div">
              <ImagesPicker />
            </div>
          </div>
        </div>
        <div className="productPageMainDiv-infoContainer">
          <div className="productPageMainDiv-infoContainer-div">
            <h2>{data[productID].name}</h2>
            <Rating
              n={data[productID].rating}
              numberOfPeople={data[productID].noOfRateing}
              noOfquestions={data[0].Questions.length}
            />
            <p>Brand: No Brand</p>
            <div className="productPageMainDiv-infoContainer-div-priceInfo">
              <div className="productPageMainDiv-infoContainer-div-priceInfo-currPrice">
                <h2>${data[productID].currPrice}</h2>
              </div>
              <strike className="productPageMainDiv-infoContainer-div-priceInfo-prevPrice">
                <h5>${data[productID].prevPrice}</h5>
              </strike>
              <div>
                <h6>
                  {Number.parseFloat(
                    ((data[productID].prevPrice - data[productID].currPrice) *
                      100) /
                      data[productID].prevPrice
                  ).toFixed(2)}
                  % OFF
                </h6>
              </div>
            </div>
            <tbody>
              <tr>
                <td>
                  <ProductDescription />
                </td>
              </tr>
            </tbody>
            <label>
              <h3>About this person</h3>
            </label>
            <p>{data[productID].AboutThisItem}</p>
            <br />
          </div>
        </div>
        <div className="productPageMainDiv-checkOutInfo">
          <div className="productPageMainDiv-checkOutInfo-numberOfItems">
            {data[productID].noOfItems > 0 ? (
              <>
                {" "}
                <label style={{ marginRight: "5px" }}>Quantity</label>
                <button
                  className="productPageMainDiv-checkOutInfo-numberOfItems-lessButton"
                  onClick={() => {
                    parseInt(noOfItems) > 1
                      ? setNoOfItems(parseInt(noOfItems) - 1)
                      : isNaN(noOfItems)
                      ? setNoOfItems(1)
                      : setNoOfItems(parseInt(noOfItems));
                  }}
                >
                  {"-"}
                </button>
                <input
                  className="productPageMainDiv-checkOutInfo-numberOfItems-input"
                  type="number"
                  value={noOfItems}
                />
                <button
                  className="productPageMainDiv-checkOutInfo-numberOfItems-moreButton"
                  onClick={() => {
                    if (noOfItems < data[productID].noOfItems) {
                      setNoOfItems(parseInt(noOfItems) + 1);
                    } else if (isNaN(noOfItems) || noOfItems === "") {
                      setNoOfItems(1);
                    } else {
                      setNoOfItems(parseInt(noOfItems));
                    }
                  }}
                >
                  {"+"}
                </button>
                <label style={{ marginLeft: "5px" }}>
                  {data[productID].noOfItems} items left
                </label>{" "}
              </>
            ) : (
              <h3>Unavailable</h3>
            )}
          </div>
          <div className="productPageMainDiv-checkOutInfo-buttonHolder">
            {!cartInfo.allProductId.includes(productID) ? (
              <button
                className="productPageMainDiv-checkOutInfo-buttonHolder-addToCartButton"
                onClick={() => {
                  if (!cartInfo.allProductId.includes(productID)) {
                    if (data.find(({ id }) => id === productID).noOfItems > 0) {
                      dispatch(
                        increamentByValue({
                          productId: { id: productID, noOfItems: noOfItems },
                          allProductId: productID,
                          noOfCart: noOfItems || 1,
                        })
                      );
                      setShowMessages([true, "Added to cart"]);
                      setTimeout(() => {
                        setShowMessages(false);
                      }, 2000);
                    } else {
                      setShowMessages([true, "Unavailable"]);
                      setTimeout(() => {
                        setShowMessages(false);
                      }, 2000);
                    }
                  }
                }}
              >
                Add to cart
              </button>
            ) : (
              <Link
                to="/cart"
                className="productPageMainDiv-checkOutInfo-buttonHolder-addToCartButton"
              >
                <button
                  // className="productPageMainDiv-checkOutInfo-buttonHolder-addToCartButton"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    backgroundColor: "#ffffff00",
                  }}
                >
                  Go to cart
                </button>
              </Link>
            )}
            {/* <a href="https://react-slick.neostack.com/docs/example/dynamic-slides/">
            react js
          </a> */}
            <button className="productPageMainDiv-checkOutInfo-buttonHolder-buy">
              {/* <a
                href="https://ourworldindata.org/covid-vaccinations?country=NPL~OWID_WRL"
                target="_blank"
                rel="noopener noreferrer"
              > */}
              BUY
              {/* </a> */}
            </button>
          </div>
        </div>
      </div>
      <div className="productPageMainDiv-questionsContainer">
        <div className="productPageMainDiv-questionsContainer-title">
          <h2>Customer's questions</h2>
        </div>
        <div className="productPageMainDiv-questionsContainer-questionsSearchBox">
          {reply[0] === true ? (
            <div className="productPageMainDiv-questionsContainer-questionsSearchBox-replyingTo-div">
              <p className="productPageMainDiv-questionsContainer-questionsSearchBox-replyingTo">
                {`Replying to ${reply[1]}`}
              </p>
              <button
                className="productPageMainDiv-questionsContainer-questionsSearchBox-replyingTo-cross"
                onClick={() => {
                  setReply([false, ""]);
                }}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          ) : (
            <></>
          )}
          <input
            className="productPageMainDiv-questionsContainer-questionsSearchBox-input"
            type="text"
            placeholder="Have a question of your own?"
          />
          <button className="productPageMainDiv-questionsContainer-questionsSearchBox-post">
            Post
          </button>
        </div>
        <div className="productPageMainDiv-questionsContainer-eachConvContainer">
          <Questions />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
