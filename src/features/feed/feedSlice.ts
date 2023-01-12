import { createSlice } from "@reduxjs/toolkit";
import { PostModel } from "./models/feed.model";

type InitialStateType = {
  posts: PostModel[];
};

const initialState: InitialStateType = {
  posts: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { getPosts } = feedSlice.actions;
export default feedSlice.reducer;
export const getFeed = (state: any) => state.posts;
