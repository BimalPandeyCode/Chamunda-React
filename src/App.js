import react, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store.js";

import Navbar from "./navbar/navbar.js";
import TopSlider from "./main/topSlider/topslider.js";
import Categories from "./main/categories/categories.js";
import Footer from "./Footer/Footer.js";

import IndividualCategoriesPage from "./CategoriesPage/IndividualCategoriesPage.js";

import Product from "./product/product.js";

import CartPage from "./cartPage/cartPage.js";

import ProductUploadingPage from "./Private/pageUploadingPage/pageUploadingPage.js";

import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <div style={{ minheight: "100vh" }}>
              <Navbar />
              <TopSlider />
              <Categories />
            </div>
          </Route>
          <Route path="/category/:categoryId">
            <div style={{ minHeight: "100vh" }}>
              <Navbar />
              <IndividualCategoriesPage />
            </div>
          </Route>
          <Route path="/product/:productID">
            <div style={{ minHeight: "100vh" }}>
              <Navbar />
              <Product />
            </div>
          </Route>
          <Route path="/cart">
            <div style={{ minHeight: "100vh" }}>
              <Navbar />
              <CartPage />
            </div>
          </Route>
          <Route path="/private123456789">
            <ProductUploadingPage />
          </Route>
          <Route path="*">
            <div className="Wrong-URL">
              <Navbar />
              <h1>
                Yo you went to a place you weren't supposed to go, Please kindly{" "}
                <Link to="/"> go back</Link>
              </h1>
            </div>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { category } = useParams();
  return (
    <div>
      <h3>category: {category}</h3>
      What's brown and sticky? A stick.
    </div>
  );
}

export default App;
