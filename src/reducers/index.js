import { combineReducers } from "redux";
import increamentCartReducers from "./increamentCartReducers.js";
const rootReducers = combineReducers({
  increamentCart: increamentCartReducers,
});

export default rootReducers;
