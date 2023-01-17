import { apiSlice } from "features/api/apiSlice";
import { BasePostModel } from "../models/Posts.model";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPostsByUser: builder.query<{ data: BasePostModel[] }, number>({
      query: (userId) => ({
        url: `/users/${userId}/posts`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPostsByUserQuery } = postApiSlice;
