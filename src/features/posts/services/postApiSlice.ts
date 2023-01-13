import { apiSlice } from "features/api/apiSlice";
import {
  BasePostModel,
  BasePostRequestModel,
  PostIdBodyProps,
} from "../models/Posts.model";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<BasePostModel, null>({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
    getSinglePost: builder.query<BasePostModel, string>({
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
<<<<<<< HEAD
    likePost: builder.mutation<string, string>({
=======
    likePost: builder.query<string, string>({
>>>>>>> 5d741b0 (return likes message)
      query: (postId) => ({
        url: `/posts/${postId}/likes`,
        method: "POST",
      }),
    }),
<<<<<<< HEAD
    deleteLike: builder.mutation<string, string>({
=======
    deleteLike: builder.query<string, string>({
>>>>>>> 5d741b0 (return likes message)
      query: (postId) => ({
        url: `/posts/${postId}/likes`,
        method: "DELETE",
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
  useDeleteLikeMutation,
} = postApiSlice;
