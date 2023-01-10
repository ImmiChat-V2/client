import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authReducer from "../features/auth/authSlice";
import darkModeSlice from "../features/theme/darkModeSlice";
import connectionsSlice from "features/connections/connectionsSlice";
import commentSlice from "features/comments/commentSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    darkMode: darkModeSlice,
    connections: connectionsSlice,
    comments: commentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
