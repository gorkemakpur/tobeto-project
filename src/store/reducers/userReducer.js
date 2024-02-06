import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

// Thunk for user login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (jsonUserCredentials) => {
    try {
      console.log(jsonUserCredentials);
      // Make a login request
      const response = await axios
        .post("https://localhost:44340/api/Auth/login", jsonUserCredentials, {
          headers: {
            "Content-Type": "application/json", // Set Content-Type to application/json
          },
        })

        .then((res) => {
          console.log(res.data);
          Cookies.set("token", res.data.token);
          Cookies.set("user_email", res.data.email);
        });

      // Return user data (you may customize this based on your API response)
      // return response.data.user;
    } catch (error) {
      throw error;
    }
  }
);

// Thunk for user logout
export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  // Remove token from the cookie
  Cookies.remove("token");
  // You might want to clear other user-related data from the state
  return null;
});

// Create user slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    token: Cookies.get("token") || null, // Retrieve token from cookie"
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.token = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.user = action.payload;
          state.error = null;
          console.log("Login successful");
        } else {
          state.user = null;
          state.token = null;
          state.error = "Invalid credentials";
          console.log("Login failed");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        console.log(action.error.message);
        if (action.error.message !== "Request failed with status code 200") {
          state.error = "Access Denied! Invalid Credentials";
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(logoutUser.fulfilled, (state) => {
        // Reset user-related data in the state
        state.user = null;
        state.token = null;
        state.error = null;
      });
  },
});

export default userSlice.reducer;
