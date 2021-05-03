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
          Hey guys this is a good product, if it weren't then would we hire
          Ronaldo to promote it? Think about it. r/iam14andthisisdeep
        </p>

        <button className="eachCategories-seemore">See more</button>
      </div>
    </Link>
  );
};

export default Eachcategories;
