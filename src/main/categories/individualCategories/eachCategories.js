import react from "react";
import { Link } from "react-router-dom";
import "./eachcategories.css";
const Eachcategories = ({ id, image, key, name }) => {
  return (
    <Link to={`category/${id}`} key={key}>
      <div className="eachCategories">
        <img src={image} alt="" className="eachCategories-image" />
        <h3 className="eachCategories-title">{name}</h3>
        <p className="eachCategories-description">
          Two hunters are out in the woods when one of them collapses. The other
          guy calls 911. He gasps, "My friend is dead!" The operator says, "Calm
          down.. First, let's make sure he's dead." There is a silence; then a
          gun shot is heard. The guy says, "OK, now what?"
        </p>

        <button className="eachCategories-seemore">See more</button>
      </div>
    </Link>
  );
};

export default Eachcategories;
