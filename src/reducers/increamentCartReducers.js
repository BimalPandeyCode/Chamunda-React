import { INCREAMENT_CART } from "../action/types.js";

let innitialState = {
  noOfCart: 0,
};

const increamentCartReducers = (state = innitialState, action) => {
  if (action.type === INCREAMENT_CART) {
    return { ...state, noOfCart: action.payload.currentValue + 1 };
  }
  return state;
};

export default increamentCartReducers;
