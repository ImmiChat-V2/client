import { createSlice } from "@reduxjs/toolkit";
import { UserProfileType } from "./models/UserProfileTypes";

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
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { setUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;

export const getProfile = (state: any) => state.userProfile;
