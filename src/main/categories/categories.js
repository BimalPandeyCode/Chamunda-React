import react from "react";
import "./categories.css";

import EachCategories from "./individualCategories/eachCategories.js";
const Categories = () => {
  return (
    <react.Fragment>
      <div className="eachCategories-container">
        <EachCategories />
        <EachCategories />
        <EachCategories />
        <EachCategories />
        <EachCategories />
        <EachCategories />
        <EachCategories />
        <EachCategories />
      </div>
    </react.Fragment>
  );
};
export default Categories;
