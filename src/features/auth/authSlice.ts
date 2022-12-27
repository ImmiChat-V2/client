import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    loginUser: (state, action) => {
      const { data } = action.payload;
      state.user = data;
    },
    logoutUser: (state, _action) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;

export const getCurrentUser = (state: any) => state.auth.user;
