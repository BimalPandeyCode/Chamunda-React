import { createSlice } from "@reduxjs/toolkit";

export const noOfCartSlice = createSlice({
  name: "counter",
  initialState: {
    noOfCart: 0,
    productId: [],
  },
  reducers: {
    increament: (state, action) => {
      state.noOfCart += 1;
      state.productId = [...state.productId, action.payload.productId];
    },
    decreament: (state) => {
      state.noOfCart -= 1;
    },
    increamentByValue: (state, action) => {
      state.noOfCart += parseInt(action.payload.noOfCart);
      if (Array.isArray(action.payload.productId)) {
        state.productId = [...state.productId, ...action.payload.productId];
      } else {
        state.productId = [...state.productId, action.payload.productId];
      }
      localStorage.setItem("noOfCart", state.noOfCart.toString());
      localStorage.setItem("productId", JSON.stringify(state.productId));
    },
  },
});

export const { increament, decreament, increamentByValue } =
  noOfCartSlice.actions;
export default noOfCartSlice.reducer;
