import { sliderClasses } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { DisplayUserModel, BaseUserModel } from "../auth/models/User.model";

type InitialStateType = {
  user: BaseUserModel | null;
};

const initialState: InitialStateType = {
  user: null,
};

const userProfileSlice = createSlice({
  name: "userprofile",
  initialState: initialState,
  reducers: {
    getUserProfile: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userProfileSlice.reducer;
