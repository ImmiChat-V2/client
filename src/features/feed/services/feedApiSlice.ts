import { PostModel } from "../models/feed.model";
import { apiSlice } from "features/api/apiSlice";

export const feedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostModel[], null>({
      query: () => ({
        url: "/feed",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPostsQuery } = feedApiSlice;
