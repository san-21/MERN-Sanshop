import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storedImages: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addImages: (state, action) => {
      state.storedImages = action.payload;
    },
    removeImage: (state, action) => {
      state.storedImages = state.storedImages.filter(
        (item) => item.src !== action.payload.src
      );
    },
    removeAllImages: (state, action) => {
      state.storedImages = action.payload;
    },
  },
});

export const { addImages } = productSlice.actions;

export default productSlice.reducer;
