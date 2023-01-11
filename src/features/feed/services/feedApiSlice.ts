import { FeedPostResponseModel } from "../models/feed.model";
import { apiSlice } from "features/api/apiSlice";

export const feedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<FeedPostResponseModel[], null>({
      query: () => ({
        url: "/feed",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPostsQuery } = feedApiSlice;
