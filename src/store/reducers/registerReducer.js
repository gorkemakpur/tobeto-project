import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

// Thunk for user registration
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (jsonUserData) => {
    try {
      const response = await axios.post(
        "https://localhost:44340/api/Auth/register",
        jsonUserData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Assuming your backend returns user data upon successful registration
      Cookies.set("token", response.data.token);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Create user slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    token: Cookies.get("token") || null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.token = null;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
