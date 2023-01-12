import { apiSlice } from "features/api/apiSlice";
import { BasePostModel } from "shared/types";
import { PostIdBodyProps } from "../models/Posts.model";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<BasePostModel, null>({
      query: () => ({
        url: "/posts/",
        method: "GET",
      }),
    }),
    getSinglePost: builder.query<BasePostModel, string>({
      query: (postId) => ({
        url: `/post/${postId}`,
        method: "GET",
      }),
    }),
    createPost: builder.mutation<BasePostModel, BasePostModel>({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
    }),
    updatePost: builder.mutation<BasePostModel, PostIdBodyProps>({
      query: ({ postId, body }) => ({
        url: `/posts/${postId}`,
        method: "PUT",
        body,
      }),
    }),
    deletePost: builder.mutation<null, string>({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: "DELETE",
      }),
    }),
    getLikesFromPost: builder.query<any, string>({
      query: (postId) => ({
        url: `/posts/${postId}/likes`,
        method: "GET",
      }),
    }),
  }),
});