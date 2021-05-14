import React from "react";
import "./Rating.css";
const Rating = ({ n, numberOfPeople, key }) => {
  let output = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= n) {
      output.push(<i id="rating-star" className="fas fa-star fa-border" key={i}></i>);
    } else {
      if (i - n === 0.5) {
        output.push(
          <i id="rating-star" className="fas fa-star-half-alt fa-border" key={i}></i>
        );
      } else {
        output.push(
          <i id="rating-star" className="far fa-star fa-border" key={i}></i>
        );
      }
    }
  }
  if (numberOfPeople) {
    output.push(<i>({numberOfPeople})</i>);
  }
  return (
    <div className="rating-container" key={key}>
      {output}
    </div>
  );
};

export default Rating;
