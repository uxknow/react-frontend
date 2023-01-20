import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../utils/axios";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const user = await instance.post("auth/login", data);
      sessionStorage.setItem("token", user.data.token);
      sessionStorage.setItem("name", user.data.user.firstName);
      return user.data;
    } catch (err) {
      if (err.response?.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const user = await instance.post("auth/register", data);
      sessionStorage.setItem("token", user.data.token);
      sessionStorage.setItem("name", user.data.user.firstName);
      return user.data;
    } catch (err) {
      if (err.response?.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);
