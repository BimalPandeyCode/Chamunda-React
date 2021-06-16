import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer.js";
import productReducer from "./reducers/productReducer.js";
export default configureStore({
  reducer: {
    counterReducer: counterReducer,
    productReducer: productReducer,
  },
});
