import { createSlice } from "@reduxjs/toolkit";
import { FeedPostResponseModel } from "./models/feed.model";

type InitialStateType = {
  feedPost: FeedPostResponseModel[];
};

const initialState: InitialStateType = {
  feedPost: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    getFeedPosts: (state, action) => {
      state.feedPost = action.payload;
    },
  },
});

export const { getFeedPosts } = feedSlice.actions;
export default feedSlice.reducer;
export const getFeed = (state: any) => state.feedPost;
