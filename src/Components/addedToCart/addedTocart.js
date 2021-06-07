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

// usage
// const [showMessages, setShowMessages] = useState([false, ""]);

// {showMessages[0] ? <AddedTocart messages={showMessages[1]} /> : <></>}

// setShowMessages([true, "Added to cart"]);
// setTimeout(() => {
//   setShowMessages(false);
// }, 2000);

export default AddedTocart;
