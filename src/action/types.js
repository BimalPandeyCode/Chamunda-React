export const INCREAMENT_CART = "INCREAMENT_CART";

const inreamentCart = (id, currentValue) => (dispatch) => {
  dispatch({
    type: INCREAMENT_CART,
    payload: { id: id, currentValue: currentValue },
  });
};
