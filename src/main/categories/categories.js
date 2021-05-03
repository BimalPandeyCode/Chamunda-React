import react from "react";
import "./categories.css";

import data from "../../data.js";
import Eachcategories from "./individualCategories/eachCategories.js";
const Categories = () => {
  let bla = [];
  for (let i = 0; i < data.length; i++) {
    bla.push(
      <Eachcategories
        image={data[i].image}
        id={data[i].id}
        key={i}
        name={data[i].name}
      />
    );
  }
  return (
    <react.Fragment>
      <div className="eachCategories-container">{bla}</div>
    </react.Fragment>
  );
};

export default Categories;
