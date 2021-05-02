import react, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Navbar from "./navbar/navbar.js";
import TopSlider from "./main/topSlider/topslider.js";
import Categories from "./main/categories/categories.js";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <TopSlider />
          <Categories />
        </Route>
        <Route path="/category/:category">
          <Child />
        </Route>
        <Route path="*">
          <h1>
            Yo you went to a place you weren't supposed to go, Please kindly{" "}
            <Link to="/"> go back</Link>
          </h1>
        </Route>
      </Switch>
    </Router>
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
