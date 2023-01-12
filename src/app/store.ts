import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "features/api/apiSlice";
import authReducer from "features/auth/authSlice";
import darkModeSlice from "features/theme/darkModeSlice";
import connectionsSlice from "features/connections/connectionsSlice";
import userProfileSlice from "features/userprofile/userProfileSlice";
import commentSlice from "features/posts/commentSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    darkMode: darkModeSlice,
    connections: connectionsSlice,
    userProfile: userProfileSlice,
    comments: commentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
