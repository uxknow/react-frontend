import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../thunks/auth";

const initialState = {
  user: {},
  isLogged: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login(state, action) {
    //   state.user = action.payload;
    //   state.isLogged = true;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLogged = false;
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLogged = false;
        state.isLoading = false;
      });
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLogged = false;
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogged = true;
        state.isLoading = true;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLogged = false;
        state.isLoading = false;
      });
  },
});

//export const { login } = authSlice.actions;
export default authSlice.reducer;
