import { apiSlice } from "features/api/apiSlice";
import {
  BaseCommentModel,
  UpdateCommentProps,
  CreateCommentProps,
  UsersLikedCommentModel,
} from "../models/Comments.model";

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateComment: builder.mutation<BaseCommentModel, UpdateCommentProps>({
      query: ({ commentId, body }) => ({
        url: `/comments/${commentId}`,
        method: "PUT",
        body,
      }),
    }),
    deleteComment: builder.mutation<null, number>({
      query: (commentId) => ({
        url: `/comments/${commentId}`,
        method: "DELETE",
      }),
    }),
    createComment: builder.mutation<BaseCommentModel, CreateCommentProps>({
      query: ({ postId, body }) => ({
        url: `/posts/${postId}/comments`,
        method: "POST",
        body,
      }),
    }),
    getCommentsForPost: builder.query<BaseCommentModel[], number>({
      query: (postId) => ({
        url: `/posts/${postId}/comments`,
        method: "GET",
      }),
    }),
    getLikesFromComment: builder.query<UsersLikedCommentModel, number>({
      query: (commentId) => ({
        url: `/comments/${commentId}/likes`,
        method: "GET",
      }),
    }),
    likeComment: builder.mutation<string, string>({
      query: (commentId) => ({
        url: `/comments/${commentId}/likes`,
        method: "POST",
      }),
    }),
    deleteCommentLike: builder.mutation<string, string>({
      query: (commentId) => ({
        url: `/comments/${commentId}/likes`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  useCreateCommentMutation,
  useGetCommentsForPostQuery,
  useGetLikesFromCommentQuery,
  useLikeCommentMutation,
  useDeleteCommentLikeMutation,
} = commentApiSlice;
