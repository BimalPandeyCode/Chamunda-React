import React from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import "./product.css";
import data from "../data.js";

const Product = () => {
  let { productID } = useParams();
  return (
    <React.Fragment>
      <img
        src={data[productID].image}
        alt=""
        style={{ maxWidth: "50%", minWidth: "50%" }}
      />
      <h1>{data[productID].name}</h1>
      <h1>${data[productID].currPrice}</h1>
      <strike>
        <h1>${data[productID].prevPrice}</h1>
      </strike>
      <button>Add to cart</button>
      <br />
      <br />
      <button>BUY</button>
    </React.Fragment>
  );
};

export default Product;
