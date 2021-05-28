import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/index.js";

const middlewares = [thunk];
let innitialState = {};

const store = createStore(
  rootReducers,
  innitialState,
  applyMiddleware(...middlewares)
);

export default store;
