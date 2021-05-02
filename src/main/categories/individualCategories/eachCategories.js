import react from "react";
import { Link } from "react-router-dom";
import "./eachcategories.css";
const Eachcategories = () => {
  return (
    <Link to="category/Saurav Jung karki is a Mega Chut">
      <div className="eachCategories">
        <img
          src="https://images.unsplash.com/photo-1525969173369-c9d513909d5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fDE2JTNBOXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="eachCategories-image"
        />
        <h3 className="eachCategories-title">Categories</h3>
        <p className="eachCategories-description">
          Hey guys this is a good product, if it weren't then whould we hire
          Ronaldo to promote it? Think about it. r/iam14andthisisdeep
        </p>

        <button className="eachCategories-seemore">See more</button>
      </div>
    </Link>
  );
};
export default Eachcategories;
