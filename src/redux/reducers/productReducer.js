import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
  name: "productReducer",
  initialState: {
    productList: [],
  },
  reducers: {
    createNewProductList: (state, action) => {
      state.productList = action.payload.productList;
    },
  },
});

export const { createNewProductList } = productReducer.actions;
export default productReducer.reducer;
