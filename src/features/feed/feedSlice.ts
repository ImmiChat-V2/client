import { createSlice } from "@reduxjs/toolkit";
import { FeedPostResponseModel } from "./models/feed.model";

type InitialStateType = {
  feedPost: FeedPostResponseModel[] | null;
};

const initialState: InitialStateType = {
  feedPost: null,
};

const feedSlice = createSlice({
  name: "feed",
  initialState: initialState,
  reducers: {
    getFeedPosts: (state, action) => {
      state.feedPost = action.payload;
    },
  },
});

export const { getFeedPosts } = feedSlice.actions;
export default feedSlice.reducer;
export const getFeed = (state: any) => state.feedPost;
