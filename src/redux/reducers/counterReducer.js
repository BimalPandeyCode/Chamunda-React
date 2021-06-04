import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

export const noOfCartSlice = createSlice({
  name: "counter",
  initialState: {
    noOfCart: 0,
    allProductId: [],
    productId: [],
  },
  reducers: {
    increamentByValue: (state, action) => {
      if (state.allProductId.includes(action.payload.productId.id)) {
        if (
          state.productId.find(({ id }) => id === action.payload.productId.id)
            .noOfItems <
          data.find(({ id }) => id === action.payload.productId.id).noOfItems
        ) {
          state.productId.find(
            ({ id }) => id === action.payload.productId.id
          ).noOfItems += action.payload.productId.noOfItems;
          let copy = 0;
          state.productId.map((ele) => (copy += ele.noOfItems));
          state.noOfCart = copy;
        }
      } else {
        state.productId = [
          ...state.productId,
          {
            id: action.payload.productId.id,
            noOfItems: action.payload.productId.noOfItems,
          },
        ];
        state.allProductId = [
          ...state.allProductId,
          action.payload.allProductId,
        ];
        let copy = 0;
        state.productId.map((ele) => (copy += ele.noOfItems));
        state.noOfCart = copy;
      }
    },
    decreamentByValue: (state, action) => {
      if (state.allProductId.includes(action.payload.productId.id)) {
        if (
          state.productId.find(({ id }) => id === action.payload.productId.id)
            .noOfItems > 1
        ) {
          state.productId.find(
            ({ id }) => id === action.payload.productId.id
          ).noOfItems -= action.payload.productId.noOfItems;
          let copy = 0;
          state.productId.map((ele) => (copy += ele.noOfItems));
          state.noOfCart = copy;
        }
      }
    },
    removeByID: (state, action) => {
      let copy = JSON.parse(JSON.stringify(state.allProductId));
      copy = state.allProductId.filter(
        (ele) => ele !== action.payload.productId.id
      );
      state.allProductId = copy;

      copy = JSON.parse(JSON.stringify(state.productId));

      copy = state.productId.filter(
        (ele) => ele.id !== action.payload.productId.id
      );
      state.productId = copy;
      copy = 0;
      state.productId.map((ele) => (copy += ele.noOfItems));
      state.noOfCart = copy;
    },
    reset: (state) => {
      state.noOfCart = 0;
      state.productId = [];
      state.allProductId = [];
    },
  },
});

export const { increamentByValue, reset, decreamentByValue, removeByID } =
  noOfCartSlice.actions;
export default noOfCartSlice.reducer;
