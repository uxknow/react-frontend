import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth";
import assetsSlice from "./slice/assets";

const store = configureStore({
  reducer: {
    auth: authSlice,
    assets: assetsSlice,
  },
});

export default store;
