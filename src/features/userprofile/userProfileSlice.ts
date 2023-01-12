import { createSlice } from "@reduxjs/toolkit";
import { UserProfileType } from "./models/UserProfileModel";

type InitialStateType = {
  userProfile: UserProfileType | null;
};

const initialState: InitialStateType = {
  userProfile: null,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: initialState,
  reducers: {
    handleUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { handleUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;

export const getProfile = (state: any) => state.userProfile;
