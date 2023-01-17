import { apiSlice } from "features/api/apiSlice";
import {
  BasePostModel,
  BasePostRequestModel,
  UpdatePostRequestModel,
} from "../models/Posts.model";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<BasePostModel, null>({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
    getSinglePost: builder.query<BasePostModel, number>({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: "GET",
      }),
    }),
    createPost: builder.mutation<BasePostModel, BasePostRequestModel>({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
    }),
    updatePost: builder.mutation<BasePostModel, UpdatePostRequestModel>({
      query: ({ postId, body }) => ({
        url: `/posts/${postId}`,
        method: "PUT",
        body,
      }),
    }),
    deletePost: builder.mutation<null, number>({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: "DELETE",
      }),
    }),
    getLikesFromPost: builder.query<any, number>({
      query: (postId) => ({
        url: `/posts/${postId}/likes`,
        method: "GET",
      }),
    }),
    likePost: builder.mutation<string, number>({
      query: (postId) => ({
        url: `/posts/${postId}/likes`,
        method: "POST",
      }),
    }),
    deletePostLike: builder.mutation<string, number>({
      query: (postId) => ({
        url: `/posts/${postId}/likes`,
        method: "DELETE",
      }),
    }),
    getPostsByUser: builder.query<{ data: BasePostModel[] }, number>({
      query: (userId) => ({
        url: `/users/${userId}/posts`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetSinglePostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetLikesFromPostQuery,
  useLikePostMutation,
  useDeletePostLikeMutation,
  useGetPostsByUserQuery,
} = postApiSlice;
