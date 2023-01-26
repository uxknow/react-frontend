import { createAsyncThunk } from "@reduxjs/toolkit";
import { coinGeckoApi } from "../../../utils/axios";

export const getFavoriteAssets = createAsyncThunk(
  "coins/markets",
  async (data, { rejectWithValue }) => {
    try {
      const assets = await coinGeckoApi.get(
        `/coins/${data}/market_chart?vs_currency=usd&days=90`
      );
      return { name: data, data: assets.data };
    } catch (err) {
      if (err.response?.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);
