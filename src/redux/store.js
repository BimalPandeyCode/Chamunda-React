import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer.js";
export default configureStore({
  reducer: {
    counterReducer: counterReducer,
  },
});
