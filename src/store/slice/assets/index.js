import { createSlice } from "@reduxjs/toolkit";
import { getFavoriteAssets } from "../../thunks/assets";

const initialState = {
  assets: [],
  favoriteAssets: [],
};

const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoriteAssets.fulfilled, (state, action) => {
      state.favoriteAssets.push(action.payload);
    });
  },
});

export default assetsSlice.reducer;
