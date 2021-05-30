import React from "react";
import "./addedTocart.css";
const AddedTocart = ({ messages }) => {
  return (
    <div className="addedToCart-div">
      <div className="addedToCart">
        <p className="addedToCart-messages">{messages}</p>
      </div>
    </div>
  );
};

export default AddedTocart;
