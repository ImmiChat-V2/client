import { createSlice } from "@reduxjs/toolkit";
import { UserProfileType } from "./models/UserProfileTypes";

type InitialStateType = {
  userProfile: UserProfileType | null;
};

const initialState: InitialStateType = {
  userProfile: null,
};

const userProfileSlice = createSlice({
  name: "userprofile",
  initialState: initialState,
  reducers: {
    getUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    updateUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { getUserProfile, updateUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;

export const getProfile = (state: any) => state.userprofile.userProfile;
