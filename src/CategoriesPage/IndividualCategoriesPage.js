import React from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import "./IndividualCategoriesPage.css";
import data from "../data.js";
const IndividualCategoriesPage = () => {
  const { categoryId } = useParams();
  const { name, id, image } = data[categoryId];
  return (
    <React.Fragment>
      <h1>{name + " " + id}</h1>
      <img src={image} alt="" />
    </React.Fragment>
  );
};

export default IndividualCategoriesPage;
