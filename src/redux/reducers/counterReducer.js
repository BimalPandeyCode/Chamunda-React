import { createSlice } from "@reduxjs/toolkit";

export const noOfCartSlice = createSlice({
  name: "counter",
  initialState: {
    noOfCart: 0,
    allProductId: [],
    productId: [],
  },
  reducers: {
    increamentByValue: (state, action) => {
      state.noOfCart += parseInt(action.payload.noOfCart);
      // if (Array.isArray(action.payload.productId)) {
      //   state.productId = [
      //     ...state.productId,
      //     ...{
      //       id: action.payload.productId,
      //       noOfItems: action.payload.productId,
      //     },
      //   ];
      // } else {
      state.productId = [
        ...state.productId,
        {
          id: action.payload.productId.id,
          noOfItems: action.payload.productId.noOfItems,
        },
      ];
      // }
      state.allProductId = [...state.allProductId, action.payload.allProductId];
      // localStorage.setItem("noOfCart", state.noOfCart.toString());
      // localStorage.setItem("productId", JSON.stringify(state.productId));
    },
    reset: (state) => {
      state.noOfCart = 0;
      state.productId = [];
      state.allProductId = [];
      // localStorage.setItem("noOfCart", state.noOfCart.toString());
      // localStorage.setItem("productId", JSON.stringify(state.productId));
    },
  },
});

export const { increament, decreament, increamentByValue, reset } =
  noOfCartSlice.actions;
export default noOfCartSlice.reducer;
