import react from "react";

import Navbar from "./navbar/navbar.js";
import TopSlider from "./main/topSlider/topslider.js";
import Categories from "./main/categories/categories.js";
function App() {
  return (
    <react.Fragment>
      <Navbar />
      <TopSlider />
      <Categories />
    </react.Fragment>
  );
}

export default App;
