import { createSlice } from "@reduxjs/toolkit";
import { DisplayUserModel } from "./models/User.model";

type InitialStateType = {
  user: DisplayUserModel | null;
};

const initialState: InitialStateType = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
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
export const getCurrentUser = (state: any) => state.auth.user;
export default authSlice.reducer;
